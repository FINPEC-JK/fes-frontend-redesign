# FES — Requisitos para implementação (V1 · redesign)

> Base: especificação funcional *FES V1* de 16/10/2026 (`docs/Requisitos_FES_V1_original.docx`) + decisões de design tomadas no redesign (protótipo em `prototipo-fonte/`).
> Convenções: **RF** = requisito funcional · **RN** = regra de negócio · **RNF** = requisito não funcional · **CA** = critério de aceite. Itens marcados **[redesign]** surgiram no redesign e não constam da especificação original. Itens marcados **[a confirmar]** precisam de validação do negócio.

---

## 1. Glossário
| Termo | Definição |
|---|---|
| Escopo | Carteira de trabalho: **FES Institucional** ou uma diretoria (FES Financeiro, Marketing, Jurídico, Operações, Tecnologia, Mercado). Identificado por `scopeSlug` na URL. |
| Diretoria | Área organizacional com diretor responsável e prefixo de código (CFO→RM, Marketing→FM, Jurídico→VA, Operações→RC, Tecnologia→JK, Mercado→MT). |
| Ação | Item da carteira: tema, descrição, tipo, status, prioridade oficial, prazo original e atual, responsável, % de cumprimento, histórico. Código `{PREFIXO}-{NNN}`. |
| Prioridade oficial | P0 (crítica), P1 (alta), P2 (média), P3 (baixa). Definida pelo diretor ou CEO; nunca alterada automaticamente pelo sistema. |
| Critério P0 | Justificativa de P0: Risco financeiro ≥ R$ 50 mil, Funding, Risco jurídico relevante, Estoque de gado, Concentração, LTV, Risco reputacional. |
| Alerta de risco | Sinal calculado pelo sistema (financeiro, jurídico, operacional). Não substitui a prioridade. |
| Semana Atual | Janela de apuração do IEF: quinta 00:00 → terça 18:00 (America/Sao_Paulo). |
| Janela dos diretores | O mesmo intervalo, no qual diretores podem criar e alterar ações. |
| IEF | Índice de Execução e Foco: nota semanal de 0 a 100, composta por 5 componentes. |
| Snapshot | Retrato imutável de uma semana fechada, por diretoria. |
| Acumulado oficial | Média simples dos snapshots fechados desde 04/06/2026. |
| Tração semanal | Indicador auxiliar, usado só como critério de desempate do ranking. |
| Aging | Dias desde a criação da ação. |
| Reprogramação | Alteração do prazo atual; contada (0, 1, 2+). |
| Origem FOD | Ação criada pela integração com o FOD (FINPEC Operational Demands). |

---

## 2. Perfis, habilitações e papéis
Três controles independentes, que **não são intercambiáveis** (RN-PER-01):

1. **Perfil global**: `CEO` · `ADMIN` · `PMO` · `DIRECTOR` · `STAFF`.
2. **Habilitações**: `Administrador global FES` · `Proprietário das regras` · `Ordenação do Kanban`.
3. **Papel no escopo** (vínculo, *membership*): `OWNER` · `SCOPE_ADMIN` · `EVALUATED` · `VIEWER`, com `origem` (Global | Owner) e `situação` (ativo | inativo).

### Matriz de permissões
| Capacidade | CEO/ADMIN/PMO | DIRECTOR | STAFF | Admin global | OWNER | SCOPE_ADMIN | EVALUATED | VIEWER |
|---|---|---|---|---|---|---|---|---|
| Dashboard CEO (`/ceo`) | ✔ | — | — | — | — | — | — | — |
| Visão por diretoria | todas | só a própria | — | — | — | — | — | — |
| Consultar ações do escopo | ✔ | ✔ (escopos vinculados) | conforme vínculo | ✔ | ✔ | ✔ | ✔ | ✔ |
| Criar/editar ações | ✔ (sem janela) | ✔ na janela, máx. 3 novas/janela | conforme vínculo | ✔ | ✔ | — | — | — |
| Mover cards no Kanban | ✔ | ✔ (própria diretoria) | — | ✔ | ✔ | — | — | — |
| Ordenar fila do Kanban | habilitação | habilitação + diretoria = escopo | — | ✔ | habilitação | — | — | — |
| Fechar semana | ✔ | — | — | — | — | — | — | — |
| Confirmar importação | ✔ | — | — | — | — | — | — | — |
| Usuários e acessos (`/admin/users`) | — | — | — | ✔ | — | — | — | — |
| Auditoria (`/admin/audit`) | — | — | — | ✔ | — | — | — | — |
| Minha equipe (`/my-team/{scope}`) | — | — | — | ✔ | ✔ | ✔ | — | — |

- **RN-PER-02**: o acesso a qualquer registro é verificado **no contexto da rota** (escopo resolvido pela URL antes da consulta).
- **RN-PER-03**: trocar o escopo ativo não concede permissões.
- **RN-PER-04**: o mesmo usuário pode ter papéis diferentes em escopos distintos.

---

## 3. Requisitos funcionais

### 3.1 Autenticação (FES 01, FES 02)
- **RF-AUT-01**: login por **e-mail + senha** em `/login`. Credenciais inválidas impedem o acesso, com mensagem no formulário.
- **RF-AUT-02** [redesign]: botão **"Entrar com Microsoft"** (SSO corporativo, Entra ID) acima do formulário, separado por "ou". [a confirmar: se o SSO entra na V1 ou fica só como layout]
- **RF-AUT-03**: após o login, o Diretor vai para **Minha diretoria** e os demais perfis vão para a entrada executiva (Dashboard CEO), conforme as permissões.
- **RF-AUT-04**: uma conta com **troca obrigatória de senha** vai para `/change-password` antes de qualquer função interna. Usuários sem essa pendência que acessarem a rota são redirecionados à entrada.
- **RF-AUT-05**: troca de senha com Senha atual, Nova senha e Confirmação. Ver RN-AUT-01.
- **RF-AUT-06**: depois de salvar a nova senha, o sistema tenta renovar a sessão. Se falhar, volta ao login com a orientação "use a nova senha".
- **RF-AUT-07**: uma sessão expirada exige novo login.
- **RF-AUT-08** [redesign]: aba **Release notes** na tela de login (versão "FES V1") com 4 seções recolhíveis.
- **RN-AUT-01**: a nova senha deve ter **≥ 12 caracteres**, com maiúscula, minúscula, número e caractere especial, e deve coincidir com a confirmação. O checklist valida em tempo real; o botão fica desabilitado até tudo passar.

### 3.2 Navegação e escopo (FES 03)
- **RF-NAV-01**: menu lateral com os itens conforme o perfil (ver README, *Shell*). Ele é recolhível e o estado é persistido.
- **RF-NAV-02**: seletor **Escopo ativo** no topbar, listando só os escopos ativos e autorizados, com o papel de cada um.
- **RF-NAV-03**: a rota `/fes` encaminha para o escopo disponível. Uma conta sem escopo recebe a indicação de ausência de acesso.
- **RF-NAV-04**: rotas legadas `/tasks`, `/tasks/new`, `/tasks/{id}` e `/tasks/{id}/edit` redirecionam para `/fes/{scopeSlug}/tasks...` quando a operação por escopo está habilitada.
- **RF-NAV-05**: o rodapé do menu tem o botão claro/escuro, a data e hora, o avatar com nome e perfil, Sair e o release "FES V1".
- **RF-NAV-06**: o topbar mostra o estado da **Janela dos diretores** ("Aberta · encerra ter., 20/10 às 18h" ou "Fechada · reabre qui., 00h").
- **RF-NAV-07** [redesign]: tema claro/escuro aplicado a todo o sistema e persistido por usuário (local).

### 3.3 Dashboard CEO (FES 04)
- **RF-CEO-01**: KPIs executivos clicáveis: **Diretorias vermelhas**, **P0 oficiais ativos** (com nº de vencidos), **Ações vencidas**, **Itens sem atualização**. O clique abre a lista de Ações com o filtro correspondente.
- **RF-CEO-02**: faixa de sinais com Alertas de risco elevado (risco ≥ R$ 50 mil), P0 oficiais com alerta, Bloqueios ativos e Riscos sistêmicos (tipo = risco). [a confirmar: a definição de "risco sistêmico"]
- **RF-CEO-03**: **Carteira ativa por prioridade**:
  - Resumo: prioridade com maior acúmulo, diretoria com maior volume, total aberto não-P0.
  - Tabela P0–P3: abertas, vencidas, bloqueadas, concluídas na semana (últimos 7 dias), distribuição por diretoria.
- **RF-CEO-04**: **Ranking IEF semanal**:
  - KPIs: IEF médio, melhor e pior diretor, aderência semanal (% de ações abertas atualizadas na semana).
  - Tabela com IEF da semana + classificação, os 5 componentes (valor/máximo) e o acumulado com semáforo.
  - Ordenação por IEF desc; empate desfeito pela tração.
- **RF-CEO-05**: clicar no diretor abre a **Memória de cálculo**: janela da Semana Atual, status, horário de fechamento, componentes com regra e valor. Opções: Exportar PNG, Copiar imagem, **Copiar resumo para diretor**.
- **RF-CEO-06**: gráfico do **histórico semanal do IEF** institucional (snapshots desde 04/06/2026).
- **RF-CEO-07**: **Alertas da semana**, priorizados nesta ordem: P0 vencido → P0 sem andamento → alerta de risco. Máximo de 5; cada um abre o detalhe da ação.
- **RF-CEO-08**: **Roteiro 1:1 das quartas-feiras**, por diretor:
  - IEF, P0 ativos e vencidos, ações sem atualização.
  - Principal ponto da 1:1, escolhido nesta ordem: P0 vencido > P0 sem andamento > ação vencida > nenhum. Junto vai o impacto no IEF.
  - Link para a pauta.
- **RF-CEO-09**: **Ações pendentes do CEO** (ações com alerta de risco, P0 vencido ou P0 sem andamento), com busca por texto ou código e filtros de diretoria e prioridade.
- **RF-CEO-10**: exportar o dashboard em PDF.

### 3.4 Visão por diretoria (FES 05)
- **RF-DIR-01**: perfis globais escolhem a diretoria; o Diretor vê só a própria (select travado).
- **RF-DIR-02**: **status da diretoria** (semáforo) com texto explicativo e legenda das faixas (RN-IEF-06).
- **RF-DIR-03**: KPIs: IEF semanal (+ classificação e tração), IEF acumulado oficial (+ nº de fechamentos), P0 ativos (+ vencidos), Sem atualização.
- **RF-DIR-04**: contagens por status + Foco da semana.
- **RF-DIR-05**: card **Fechamento semanal**:
  - Ações abertas, atualizadas e sem atualização.
  - Novas ações da semana (x/3).
  - Botão **"Sem ações novas nesta semana"**, que registra a declaração da diretoria para a semana (autor e data/hora). Fica desabilitado quando já há declaração ou quando houve nova ação.
- **RF-DIR-06**: histórico dos últimos 8 snapshots da diretoria.
- **RF-DIR-07**: **Itens críticos**: ações abertas da diretoria, vencidas primeiro, depois por prioridade.
- **RF-DIR-08**: botão **Nova ação**, que abre o cadastro com a diretoria pré-selecionada.

### 3.5 Ações · Lista (FES 06)
- **RF-ACO-01**: cabeçalho com o título, o escopo, o seletor **Lista | Kanban**, o botão **"Indicadores e filtros"** e o botão de ícone **Exportar CSV** (tooltip "Exportar para CSV"), todos na mesma linha. [redesign]
- **RF-ACO-02** [redesign]: o botão **"Indicadores e filtros"** recolhe e expande **juntos** os KPIs e o bloco de filtros.
  - Mostra um badge com o nº de filtros ativos.
  - O estado é persistido, separado entre desktop e celular.
  - Padrão: aberto no desktop, recolhido no celular.
  - Recolhido no desktop, mostra uma faixa compacta com os valores dos KPIs e "N ações correspondem aos filtros · Limpar".
- **RF-ACO-03**: KPIs: Tarefas ativas, Sem atualização semanal, P0 sem andamento, Aderência semanal (%).
- **RF-ACO-04**: filtros:
  - Busca (código, tema ou descrição).
  - Status, Prioridade, Diretoria.
  - Prazo: Vencidas / Vence em 7 dias / No prazo.
  - Atualização: Atualizadas / Sem atualização.
  - Foco da semana.
  - Limpar.
  - Os filtros são **compartilhados** entre Lista e Kanban.
- **RF-ACO-05**: tabela **sem rolagem horizontal**, com cabeçalho fixo e rolagem vertical interna. Colunas: Código, Ação (tema + descrição), Diretoria/responsável, Situação (status + alerta), Prioridade, Prazo (+ criação), Atualização (estado + barra %), Abrir.
- **RF-ACO-06**: ordem padrão: abertas primeiro, depois por data de criação desc.
- **RF-ACO-07**: paginação 10 · 25 · 50 · 100 · Todos. Qualquer mudança de filtro volta à página 1.
- **RF-ACO-08**: sem resultados, mostra uma mensagem e **preserva os filtros**.
- **RF-ACO-09**: **Exportar CSV** gera a relação filtrada do escopo autorizado.
- **RF-ACO-10** [redesign]: **"Nova ação" só pelo botão flutuante (FAB)**: 56×56 px, raio 16 px, canto inferior direito, presente na Lista e no Kanban em todos os layouts. Não há botão "Nova ação" no cabeçalho.
- **RF-ACO-11**: área útil < 800 px troca a tabela por cartões.

### 3.6 Ações · Kanban (FES 07)
- **RF-KAN-01**: seis etapas: Backlog, Em andamento, Bloqueado, Aguardando terceiros, Concluído, Cancelado.
- **RF-KAN-02**: card com código, posição na fila por prioridade ("1º P0"), tema, prioridade, sinal de atraso, estado de atualização, % de cumprimento, responsável, prazo e aging.
- **RF-KAN-03**: mover cards por **arrastar e soltar** ou pelo select **Mover para**, respeitando RN-ACO-01..05. Cada movimentação vai para o histórico da ação.
- **RF-KAN-04**: ordenar a fila (↑/↓) dentro da mesma prioridade, só com a habilitação de ordenação (RN-KAN-01). **Reordenar não altera a prioridade oficial.**
- **RF-KAN-05** [redesign]: **recolher e expandir cada etapa individualmente** (padrão visual do FOD, ver README).
  - **Padrão: a etapa vem recolhida quando não tem cards** e expandida quando tem.
  - A escolha manual do usuário prevalece e é persistida.
  - "Expandir todas (n)".
- **RF-KAN-06** [redesign]: **hover no card** (desktop, 260 ms) mostra os dados adicionais e a **última observação** registrada (texto, autor, data).
- **RF-KAN-07** [redesign]: **Kanban no celular**, uma etapa por vez:
  - Setas ‹ › + carrossel de chips com as contagens. **O chip ativo é centralizado automaticamente a cada troca de etapa.**
  - Cards agrupados por prioridade ("P0 · N na fila").
  - Cada card tem semáforo (RN-KAN-02), tema, diretoria · responsável e aging.
  - Tocar no card abre um bottom sheet com os dados, **Mover para** e **Abrir detalhes**.
- **RF-KAN-08**: filtro de temas por coluna (presente na produção; no protótipo, pela busca global). [a confirmar: busca por coluna no desktop]
- **RF-KAN-09**: opção de Kanban denso (oculta a barra de %).

### 3.7 Cadastro e edição de ação (FES 08, FES 10)
- **RF-FRM-01**: campos:
  - **Identificação**: Diretoria*, Código (gerado), Tema*, Descrição*, Tipo*, Foco da semana.
  - **Prazo e situação**: Prazo atual*, Prazo original (somente leitura), Status*, Tipo de bloqueio, Conclusão real, Evidência.
  - **Prioridade e risco**: Prioridade oficial*, Critério P0, Risco financeiro.
  - **Observações internas**.
- **RF-FRM-02**: o **responsável é automático**, resolvido pela diretoria (diretor da área), e é exibido como dica. Não é de livre escolha.
- **RF-FRM-03**: o **código é gerado** como `{prefixo da diretoria}-{maior número + 1, 3 dígitos}`.
- **RF-FRM-04**: campos condicionais:
  - Tipo de bloqueio: só com status Bloqueado.
  - Conclusão real + Evidência: só com status Concluído, e aí são obrigatórios.
  - Critério P0: só com prioridade P0; ao sair de P0, o critério é limpo.
  - Risco financeiro: só com o critério "Risco financeiro ≥ R$ 50 mil"; ao trocar de critério, o valor é zerado.
- **RF-FRM-05**: card lateral **Regras aplicadas**: janela, limite de novas ações (x/3) ou reprogramações (x/2), conclusão formal e origem (FES/FOD).
- **RF-FRM-06**: na edição, cada campo alterado gera uma entrada no histórico no formato "Campo: antes → depois", com autor e data. Mudar o prazo incrementa as reprogramações e registra "Prazo atual: A → B (reprogramação N)".
- **RF-FRM-07**: Salvar valida (RN-FRM-01). Em caso de erro, destaca os campos e mostra um toast. Cancelar volta à origem sem gravar.
- **RF-FRM-08**: para ação de origem FOD, a prioridade oficial e o prazo original ficam **bloqueados**.

### 3.8 Detalhe e atualizações (FES 09)
- **RF-DET-01**: resumo com código, tag "Origem FOD", tema, área e responsável automático, status, prioridade, alerta, prazo atual (vermelho se vencido) e estado da atualização semanal.
- **RF-DET-02**: fatos: Tipo, Prazo original, Conclusão real, Reprogramações (x de 2), Critério P0, Risco financeiro (R$), Foco da semana, Criada em, Bloqueio ou Aging. Quando houver, mostra "Leitura de risco do sistema".
- **RF-DET-03**: **Registrar atualização** com relato objetivo (≥ 3 caracteres) e % de cumprimento (inteiro de 0 a 100). Atualiza o % da ação, a data da última atualização e marca "atualizada na semana".
- **RF-DET-04**: aviso quando a ação aberta ainda não recebeu atualização na semana.
- **RF-DET-05**: históricos de **atualizações** (autor, data, %, relato) e de **alterações** (linha do tempo).
- **RF-DET-06**: card **Integração FOD**: demanda de origem, quem autorizou e quando, prioridade de origem e a nota sobre os campos protegidos.
- **RF-DET-07**: Editar → FES 10; Voltar → carteira.

### 3.9 Histórico semanal (FES 11)
- **RF-HIS-01**: KPIs: nº de snapshots, diretorias na última semana, IEF médio da última semana (+ classificação), P0 vencidos na última semana.
- **RF-HIS-02**: gráfico do IEF institucional por semana.
- **RF-HIS-03**: tabela de snapshots (Semana, Diretoria, IEF, Backlog, P0 ativos, P0 vencidos, Bloqueios, Semáforo), com filtro de diretoria.
- **RF-HIS-04**: **Fechar semana** (CEO/ADMIN/PMO) gera os snapshots de todas as diretorias para a semana corrente; a operação é idempotente por semana.
- **RF-HIS-05**: Exportar CSV.
- **RF-HIS-06**: a nota da semana em aberto **não** aparece no histórico.

### 3.10 Rotina 1:1 (FES 12)
- **RF-1A1-01**: modo **Pauta formal** (última semana encerrada) ou **Resumo executivo** (estado atual), com referência temporal explícita.
- **RF-1A1-02**: seleção de diretoria (travada para o Diretor).
- **RF-1A1-03**: cabeçalho com Diretor, Referência, IEF (da semana encerrada ou da atual), Variação e Semáforo.
- **RF-1A1-04**: seções: P0 oficiais (com critério), Bloqueios acima de 7 dias, Itens sem atualização (dias), Decisões exigidas do CEO, Itens vencidos, P0 oficiais com alerta, Reprogramações relevantes, Alertas de risco elevado.
- **RF-1A1-05**: na pauta formal, **notas da reunião** e **decisões pendentes do CEO**, persistidas por pauta (diretoria + semana).

### 3.11 Importação de planilha (FES 13)
- **RF-IMP-01**: upload de .xlsx em que **cada aba é uma diretoria existente**.
- **RF-IMP-02**: **Gerar preview** mostra as linhas interpretadas e normalizadas e os erros por linha (aba, linha, código, tema, prioridade, prazo, mensagem).
- **RF-IMP-03**: **Confirmar** importa só as linhas válidas (CEO/ADMIN/PMO). Mostra o resultado e o log da operação.
- **RF-IMP-04**: idempotência por código: um código já existente não é recriado.

### 3.12 Usuários e acessos (FES 14)
- **RF-USR-01**: lista com filtros (nome ou e-mail, situação, perfil, escopo).
- **RF-USR-02**: criar usuário com nome, e-mail (@finpec.com), perfil, diretoria e vínculos. Gera uma senha temporária com troca obrigatória.
- **RF-USR-03**: editar a **identidade** (nome, e-mail, perfil, diretoria), a **autenticação** (ativo, login permitido) e as **permissões** (ordenação do Kanban, administrador global).
- **RF-USR-04**: editar os **vínculos por escopo**: adicionar, remover, alterar papel, origem e situação.
- **RF-USR-05**: **Redefinir senha** gera uma credencial temporária e marca a troca obrigatória.
- **RF-USR-06**: usuários com histórico são **desativados, nunca apagados**.
- **RF-USR-07**: toda operação gera um evento de auditoria (RF-AUD).

### 3.13 Auditoria administrativa (FES 15)
- **RF-AUD-01**: tabela somente leitura: data/hora, operador, evento, usuário afetado, escopo, alterações (JSON).
- **RF-AUD-02**: filtros: busca (operador, usuário ou escopo) e tipo de evento.
- **RF-AUD-03**: tipos de evento: `USER_CREATED`, `USER_IDENTITY_UPDATED`, `USER_PASSWORD_RESET`, `MEMBERSHIP_UPDATED`, `MEMBERSHIP_STATUS_UPDATED`, `MEMBERSHIP_ORIGIN_CHANGED`, `OWNER_CREATED_MEMBER`.
- **RF-AUD-04**: eventos imutáveis, distintos do histórico de execução das ações.

### 3.14 Minha equipe (FES 16)
- **RF-EQP-01**: cadastrar um membro (nome, e-mail @finpec.com único, senha temporária ≥ 12 caracteres), que é criado como **STAFF** com vínculo **EVALUATED** no escopo e troca obrigatória de senha.
- **RF-EQP-02**: listar os membros EVALUATED do escopo; desativar e reativar o vínculo.
- **RF-EQP-03**: gerenciar a equipe não autoriza administrar as demais contas do FES.

### 3.15 Integração FOD → FES
- **RF-FOD-01**: envio iniciado por **autorização explícita do CEO** no detalhe de uma demanda "Em andamento" no FOD. Não há envio automático.
- **RF-FOD-02**: destino: FES Institucional, na diretoria correspondente.
- **RF-FOD-03**: dados enviados: id e caminho de origem, título, descrição, complementos, diretoria, solicitante, aprovador, prioridade de origem (P0/P1/P2).
- **RF-FOD-04**: prazo original = data de criação + limite verde (14, 30 ou 45 dias).
- **RF-FOD-05**: responsável resolvido pelo mapeamento da diretoria no FES (a delegação no FOD não reatribui).
- **RF-FOD-06**: **idempotência** por id de origem + chave de idempotência.
- **RF-FOD-07**: o FOD registra a situação do envio e o vínculo com o FES, com nova tentativa quando permitida.
- **RF-FOD-08**: no FES, a prioridade e o prazo original de origem FOD ficam protegidos. Não há sincronização bidirecional.

### 3.16 Avisos por e-mail
- **RF-NOT-01**: aviso ao diretor responsável **7 dias** e **1 dia** antes do prazo.
- **RF-NOT-02**: rotina de avisos de fechamento semanal.
- **RF-NOT-03**: registro de cada envio com o status: sucesso, falha ou sem destinatário.

### 3.17 Layouts e PWA [redesign]
- **RF-LAY-01**: três layouts: **Web** (desktop fixo), **Web responsive** (adapta de 1440 a 360 px) e **PWA** (instalado).
- **RF-LAY-02**: no responsive celular:
  - Menu sanduíche abrindo a sidebar em drawer.
  - Tabelas viram cartões empilhados.
  - Painéis recolhíveis começam fechados.
  - Login em uma coluna.
- **RF-PWA-01**: manifest instalável (nome, ícones 192/512/maskable, standalone, portrait, atalhos Ações e 1:1).
- **RF-PWA-02**: service worker com precache do shell e funcionamento offline para leitura dos dados já carregados.
- **RF-PWA-03**: barra de navegação inferior com cinco itens (Painel/Diretoria, Ações, 1:1, Histórico, Menu), respeitando as safe areas.
- **RF-PWA-04**: aviso de instalação (botão Instalar quando houver `beforeinstallprompt`; instrução específica no iOS), dispensável e persistido.
- **RF-PWA-05**: indicador "Offline" no topbar.
- **RF-PWA-06**: deep link `?tela=` para a tela inicial após o login.

---

## 4. Regras de negócio

### 4.1 Ações e status
- **RN-ACO-01**: status: Backlog (registrada, não iniciada) · Em andamento · Bloqueado (exige tipo de bloqueio: Dependência externa, Aguardando fornecedor, Aprovação interna, Recursos) · Aguardando terceiros · Concluído · Cancelado.
- **RN-ACO-02**: **Concluir exige data real de conclusão + evidência ou comentário.** No Kanban, mover para Concluído abre a edição com a data de hoje sugerida.
- **RN-ACO-03**: concluir define o % como 100.
- **RN-ACO-04**: ação **vencida** = aberta (nem Concluída nem Cancelada) com prazo atual < hoje.
- **RN-ACO-05**: estado da **atualização semanal**:
  - Ação fechada: "Não exige atualização".
  - Atualizada dentro da Semana Atual: "Atualizada na semana".
  - P0 com % ≤ 5 e sem atualização: "P0 sem andamento visível".
  - Demais casos: "Sem atualização semanal".
- **RN-ACO-06**: o alerta exibido segue esta prioridade: "Prazo vencido" (danger) > "Alerta de risco" (warn) > nenhum.
- **RN-ACO-07**: a atualização registra o progresso, mas **não equivale à conclusão formal**.
- **RN-ACO-08**: alterações e reprogramações ficam no histórico; o histórico é imutável.

### 4.2 Janela e limites
- **RN-JAN-01**: a janela dos diretores vai de **quinta 00:00 a terça 18:00** (America/Sao_Paulo). Fora dela, criações e alterações de **diretores** são bloqueadas no servidor, e a interface indica o bloqueio.
- **RN-JAN-02**: o **CEO não está sujeito** ao bloqueio da janela; as permissões de escopo continuam valendo.
- **RN-JAN-03**: diretores podem criar **no máximo 3 novas ações por janela**.

### 4.3 Prioridade e risco
- **RN-PRI-01**: a prioridade oficial (P0–P3) é informada pelo diretor ou CEO. **O sistema nunca altera a prioridade automaticamente.**
- **RN-PRI-02**: o critério P0 só pode ser informado em ações P0.
- **RN-PRI-03**: o risco financeiro deve ser ≥ 0. Ele só é habilitado com o critério "Risco financeiro ≥ R$ 50 mil".
- **RN-PRI-04**: alertas calculados:
  - Critério financeiro com risco < R$ 50.000: "Critério financeiro informado, mas o risco financeiro está abaixo de R$ 50.000,00. A prioridade oficial permanece a definida pelo diretor ou CEO."
  - Risco ≥ R$ 50.000 em ação não-P0: "Risco financeiro igual ou superior a R$ 50.000,00. A prioridade oficial permanece a definida pelo diretor ou CEO."
  - Alertas jurídicos e operacionais (estoque de gado etc.) também são informativos.

### 4.4 Formulário
- **RN-FRM-01**: validações:
  - Diretoria: obrigatória e válida.
  - Tema: 2 a 180 caracteres.
  - Descrição: ≥ 3 caracteres.
  - Tipo: Estratégico, Operacional, Risco, Financeiro ou Compliance.
  - Prazo: data válida.
  - Status e prioridade: obrigatórios.
  - Com status Concluído: conclusão e evidência obrigatórias.

### 4.5 Kanban
- **RN-KAN-01**: ordenar a fila exige a habilitação de ordenação, como administrador global ou como OWNER habilitado. Se o OWNER também for diretor, a diretoria dele deve corresponder à do escopo.
- **RN-KAN-02** [redesign]: semáforo do card no celular:
  - **Vermelho**: vencida.
  - **Amarelo**: vence em ≤ 7 dias ou sem atualização na semana.
  - **Verde**: no prazo e atualizada.
  - Concluída: "Concluída" (ok). Cancelada: "Cancelada" (neutro).
  - [a confirmar com o negócio]
- **RN-KAN-03**: posição na fila = ordem dentro de (status, prioridade), conforme a ordenação manual.

### 4.6 IEF
| Componente | Máx. | Regra (política proporcional vigente desde a semana de 08/10/2026) |
|---|---|---|
| Cumprimento de prazos | 30 | Média das parcelas das ações abertas ou concluídas na semana: **integral** no prazo, **metade** com 1–7 dias de atraso, **zero** a partir do 8º dia. |
| P0 no prazo | 25 | Mesma lógica aplicada à carteira P0 elegível. **Sem ação avaliável, sem penalização.** |
| Atualização disciplinada | 15 | Até **10** pela atualização das ações elegíveis + **5** por novas ações ou declaração válida de ausência de novidade. |
| Planejamento | 15 | Parcela integral sem reprogramação, metade com 1 e zero com 2 ou mais. |
| Bloqueios recorrentes | 15 | Base 15 com perda proporcional das ações elegíveis bloqueadas há **30 dias ou mais**. |

- **RN-IEF-01**: **reprogramar não apaga o maior atraso já registrado.**
- **RN-IEF-02**: a apuração reconstrói o estado no corte; alterações posteriores não reescrevem uma semana fechada.
- **RN-IEF-03**: a atualização semanal exige relato + percentual. A falta dela pode limitar a pontuação, especialmente em P0.
- **RN-IEF-04**: **acumulado oficial** = média simples dos snapshots fechados desde 04/06/2026. Uma semana sem snapshot **não conta como zero**.
- **RN-IEF-05**: classificação: **Excelente ≥ 90 · Bom ≥ 75 · Atenção ≥ 60 · Crítico < 60**.
- **RN-IEF-06**: semáforo da diretoria: Verde ≥ 85 · Amarelo ≥ 70 · Vermelho < 70. "Diretorias vermelhas" = IEF < 70. [a confirmar: o protótipo usa essas faixas; a especificação original não as define]
- **RN-IEF-07**: tração semanal só como critério de desempate.
- **RN-IEF-08**: a declaração "Sem ações novas nesta semana" vale para o componente Novas ações (5 pts) e **não substitui** a atualização das ações existentes.
- **RN-IEF-09**: o histórico anterior a 08/10/2026 preserva o regime correspondente.

### 4.7 Snapshots
- **RN-SNP-01**: snapshots são imutáveis.
- **RN-SNP-02**: fechar a semana gera um snapshot por diretoria: IEF, componentes, backlog, P0 ativos, P0 vencidos, bloqueios.
- **RN-SNP-03**: a pontuação passa a ser considerada fechada a partir de terça 18:01.

---

## 5. Requisitos não funcionais
- **RNF-01 · Segurança**: o escopo é resolvido pela URL e validado no servidor antes de qualquer consulta. Todas as regras de permissão, janela e limite são aplicadas **no servidor** (a interface só reflete).
- **RNF-02 · Auditoria**: operações administrativas geram eventos imutáveis (append-only).
- **RNF-03 · Senhas**: hash forte (argon2id ou bcrypt ≥ 12); senha temporária com troca obrigatória; sessão com expiração.
- **RNF-04 · Fuso horário**: todos os cortes (janela, semana, avisos) em **America/Sao_Paulo**.
- **RNF-05 · Idempotência**: integração FOD, importação e fechamento semanal.
- **RNF-06 · Responsividade**: layouts de 360 a 1920 px sem rolagem horizontal da página; tabelas sem rolagem horizontal no desktop.
- **RNF-07 · Acessibilidade**:
  - Contraste AA.
  - Foco visível (anel de 3 px `--primary-soft`).
  - `aria-expanded` e `aria-pressed` em toggles.
  - `role="tablist"`/`tab` nos chips do Kanban.
  - Alvos ≥ 44 px no celular.
  - `title` ou `aria-label` em botões só com ícone.
- **RNF-08 · Design System**: usar os componentes e tokens do FINPEC Design System. Sem cores ou fontes fora dos tokens; sem emoji.
- **RNF-09 · Desempenho**: lista paginada no servidor; Kanban carrega até N por coluna com "carregar mais" [a definir N]; consultas do dashboard com cache curto.
- **RNF-10 · PWA**: Lighthouse PWA "installable"; `100dvh`; safe areas; `theme-color` por tema.
- **RNF-11 · Localização**: pt-BR. Moeda `R$ 1.234,56`, datas `dd/mm/aaaa`, percentuais com vírgula.
- **RNF-12 · Observabilidade**: log dos envios de e-mail e da integração FOD com status.
- **RNF-13 · Persistência local**: só preferências de interface (`fes.theme`, `fes.ui`, `fes.kanban.collapsed`, `fes.pwa.dismissed`).

---

## 6. Modelo de dados (sugestão)
```
Directorate   { id, slug, name, area, prefix, directorUserId }
Scope         { id, slug, label, kind: INSTITUTIONAL|DIRECTORATE, directorateId?, active }
User          { id, name, email (unique), globalRole: CEO|ADMIN|PMO|DIRECTOR|STAFF, directorateId?,
                active, loginAllowed, mustChangePassword, passwordHash,
                isGlobalAdmin, isRulesOwner, canOrderKanban, createdAt }
Membership    { id, userId, scopeId, role: OWNER|SCOPE_ADMIN|EVALUATED|VIEWER,
                origin: GLOBAL|OWNER, active }
Task          { id, code (unique), scopeId, directorateId, responsibleUserId,
                theme, description, type, status, blockType?, priority: P0..P3,
                p0Criterion?, financialRisk (decimal), focusOfWeek,
                createdAt, originalDueDate, currentDueDate, reschedules (int),
                maxDelayDays (int), completedAt?, evidence?, percent (0..100),
                lastUpdateAt?, internalNotes?, queueOrder (int),
                origin: FES|FOD, fodDemandId?, fodIdempotencyKey? }
TaskUpdate    { id, taskId, authorId, text, percent, createdAt }
TaskHistory   { id, taskId, authorId, field, before, after, note, createdAt }
WeeklyDeclaration { id, directorateId, weekStart, authorId, createdAt }
WeeklySnapshot{ id, weekStart, directorateId, ief, cPrazos, cP0, cAtualizacao,
                cPlanejamento, cBloqueios, traction, backlog, p0Active, p0Overdue,
                blocked, policy: LEGACY|PROPORTIONAL, closedAt, closedBy }
OneOnOneAgenda{ id, directorateId, weekStart, mode: FORMAL, notes, ceoDecisions,
                updatedBy, updatedAt }
ImportBatch   { id, fileName, uploadedBy, status: PREVIEW|COMMITTED, createdAt }
ImportRow     { id, batchId, sheet, rowNumber, code, payload (json), valid, message }
AuditEvent    { id, at, operatorId, action, targetUserId?, scopeId?, diff (json) }
EmailLog      { id, kind: DUE_7D|DUE_1D|WEEKLY_CLOSING, taskId?, to?,
                status: SENT|FAILED|NO_RECIPIENT, at, error? }
```

## 7. Rotas e APIs (sugestão)
| Rota de tela | Tela |
|---|---|
| `/login`, `/change-password` | 01, 02 |
| `/fes` | resolve o escopo (03) |
| `/ceo`, `/diretor` | 04, 05 |
| `/fes/{scope}/tasks?view=list\|kanban` | 06, 07 |
| `/fes/{scope}/tasks/new`, `/fes/{scope}/tasks/{id}`, `/fes/{scope}/tasks/{id}/edit` | 08, 09, 10 |
| `/history`, `/one-on-ones`, `/import` | 11, 12, 13 |
| `/admin/users`, `/admin/audit`, `/my-team/{scope}` | 14, 15, 16 |

| API | Método | Descrição |
|---|---|---|
| `/api/auth/*` | — | Sessão, credenciais, SSO |
| `/api/account/change-password` | POST | Troca de senha |
| `/api/scopes` | GET | Escopos autorizados do usuário |
| `/api/fes/{scope}/tasks` | GET/POST | Lista filtrada/paginada · criar |
| `/api/fes/{scope}/tasks/{id}` | GET/PATCH | Detalhe · editar (gera histórico) |
| `/api/fes/{scope}/tasks/{id}/move` | POST | Mudar status (Kanban) |
| `/api/fes/{scope}/tasks/{id}/reorder` | POST | ↑/↓ na fila |
| `/api/fes/{scope}/tasks/{id}/updates` | POST | Registrar atualização |
| `/api/fes/{scope}/tasks/export.csv` | GET | CSV |
| `/api/dashboard/ceo` | GET | Agregados do painel |
| `/api/directorates/{id}/overview` | GET | Visão por diretoria |
| `/api/directorates/{id}/declaration` | POST | "Sem ações novas" |
| `/api/ief/ranking?week=` | GET | Ranking + memória de cálculo |
| `/api/history/snapshots` | GET | Snapshots (+ CSV) |
| `/api/history/close-week` | POST | Fechar semana |
| `/api/one-on-ones?dir=&mode=` | GET | Pauta/resumo |
| `/api/one-on-ones/{id}/notes` | PUT | Notas |
| `/api/import/excel/preview`, `/api/import/excel/commit` | POST | Importação |
| `/api/admin/fes-users` | GET/POST/PATCH | Usuários e vínculos |
| `/api/admin/fes-users/{id}/reset-password` | POST | Redefinir senha |
| `/api/admin/audit` | GET | Auditoria |
| `/api/my-team/{scope}` | GET/POST/PATCH | Equipe |
| `/api/integrations/fod/tasks` | POST | Receber demanda do FOD (idempotente) |

---

## 8. Critérios de aceite (amostra prioritária)
- **CA-01** (RN-JAN-01): dado um Diretor, quando ele tenta editar uma ação na quarta às 10h, então o servidor responde 403 e a interface mostra "Janela fechada".
- **CA-02** (RN-JAN-03): dado um Diretor com 3 ações criadas na janela, quando ele tenta criar a 4ª, então recebe um erro de limite.
- **CA-03** (RN-ACO-02): quando uma ação é movida para Concluído sem evidência, então não é salva e o formulário destaca Conclusão real e Evidência.
- **CA-04** (RF-FRM-06): quando o prazo atual é alterado, então reprogramações += 1 e o histórico registra "Prazo atual: A → B (reprogramação N)".
- **CA-05** (RN-PRI-01): nenhum fluxo automático altera `priority`.
- **CA-06** (RF-KAN-05): dado o Kanban sem preferência salva, as etapas com 0 cards aparecem recolhidas (48 px, tracejadas) e as demais expandidas. Recolher uma etapa com cards persiste após recarregar a página.
- **CA-07** (RF-KAN-07): no celular, ao tocar em "›", a etapa avança e o chip correspondente fica centralizado no carrossel (tolerância de ±2 px).
- **CA-08** (RF-ACO-02): um clique em "Indicadores e filtros" oculta KPIs e filtros juntos; outro clique mostra os dois.
- **CA-09** (RF-ACO-10): na tela Ações, não há botão "Nova ação" no cabeçalho, e o FAB de 56 px com raio 16 px está visível na Lista e no Kanban.
- **CA-10** (RN-IEF-04): uma diretoria sem snapshot em uma semana tem o acumulado calculado só sobre as semanas existentes.
- **CA-11** (RF-FOD-06): reenviar a mesma demanda FOD não cria uma ação duplicada.
- **CA-12** (RNF-06): de 360 a 1920 px, `document.scrollingElement.scrollWidth == clientWidth`.
- **CA-13** (RF-AUT-04): um usuário com `mustChangePassword` não acessa nenhuma rota interna antes de trocar a senha.
- **CA-14** (RF-USR-06): desativar um usuário com histórico mantém todos os registros e bloqueia o login.

---

## 9. Backlog sugerido (épicos → issues do GitHub)
1. **Fundação**: monorepo/Next.js + TS · integração com o FINPEC Design System · tema claro/escuro · shell (sidebar, topbar, escopo) · layouts responsive e PWA.
2. **Auth & acesso**: login por credenciais · SSO Microsoft [a confirmar] · troca obrigatória de senha · middleware de escopo e permissões · janela dos diretores.
3. **Ações**: modelo + CRUD + histórico · lista com filtros e paginação · CSV · formulário com validações · detalhe e atualizações · FAB.
4. **Kanban**: colunas + DnD · Mover para · ordenação com permissão · recolhimento por etapa (padrão FOD, default por vazio) · popover de hover · Kanban celular com carrossel centralizado e bottom sheet.
5. **IEF & semana**: motor de cálculo proporcional · memória de cálculo · ranking · fechamento semanal e snapshots · declaração "sem ações novas" · acumulado.
6. **Painéis**: Dashboard CEO · Visão por diretoria · Histórico.
7. **Rotina 1:1**: pauta formal · resumo executivo · notas.
8. **Importação Excel**: preview · commit · log.
9. **Administração**: usuários e vínculos · redefinir senha · auditoria · Minha equipe.
10. **Integrações**: FOD → FES (idempotente) · avisos por e-mail de 7 e 1 dia e de fechamento, com log.
11. **PWA**: manifest · service worker · aviso de instalação · indicador offline · deep links.
12. **Qualidade**: testes do motor do IEF (casos da tabela 4.6) · testes de permissão por perfil e papel · e2e dos fluxos críticos (CA-01..14) · acessibilidade.

### Estrutura de repositório sugerida
```
fes/
├─ app/                      # Next.js App Router
│  ├─ (auth)/login, change-password
│  ├─ (dashboard)/ceo, diretor, history, one-on-ones, import, admin/users, admin/audit, my-team/[scopeSlug]
│  ├─ fes/[scopeSlug]/tasks/(list|kanban), new, [id], [id]/edit
│  └─ api/...
├─ components/               # telas compostas com o FINPEC Design System
├─ features/                 # tasks, ief, weekly-closing, one-on-ones, import, admin, integrations/fod
├─ lib/                      # auth, permissions (fes-scope-permissions), business-rules, time (America/Sao_Paulo)
├─ prisma/                   # schema + seed (a partir de mock-data.json)
├─ public/                   # manifest.webmanifest, sw.js, ícones PWA, assets
└─ docs/                     # README de handoff, REQUISITOS, especificação original
```

## 10. Pontos em aberto
1. SSO Microsoft na V1 (RF-AUT-02).
2. Faixas do semáforo da diretoria (RN-IEF-06) e do card no celular (RN-KAN-02).
3. Definição de "Riscos sistêmicos" (RF-CEO-02).
4. Licença da foto do login (`assets/login-campo.jpg`).
5. Escopo do offline no PWA: só leitura, ou também fila de escrita?
6. Busca por coluna no Kanban desktop (RF-KAN-08).
