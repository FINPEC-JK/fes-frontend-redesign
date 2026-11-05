# Handoff: FES — FINPEC Execution System (V1 · redesign)

## Overview
O FES é o sistema de execução da diretoria FINPEC. Reúne a carteira de ações por escopo e diretoria, a disciplina semanal, o IEF (Índice de Execução e Foco, nota semanal de 0 a 100), a rotina de reuniões 1:1, a importação de planilhas e a administração de acessos por escopo.

Este pacote traz o redesign completo do front-end no **FINPEC Design System**, em três layouts:

| Layout | Quando usar | Navegação |
|---|---|---|
| **Web** | Desktop (≥ 1100 px), layout fixo | Menu lateral completo (264 px), recolhível a 76 px |
| **Web responsive** | Navegador em qualquer largura (desktop → tablet → celular) | Menu lateral recolhido no tablet; menu sanduíche (drawer) no celular |
| **PWA** | App instalado no celular (`display-mode: standalone`) | Barra de navegação inferior + drawer "Menu", tela cheia, offline |

Os requisitos funcionais, as regras de negócio e os não funcionais estão em **`REQUISITOS.md`**. Este README cobre o design, os layouts, os componentes e os tokens.

## About the Design Files
Os arquivos deste pacote são **referências de design feitas em HTML**: protótipos que mostram a aparência e o comportamento esperados. **Não são código de produção para copiar.** A tarefa é **recriar essas telas no ambiente do repositório de destino**, com os padrões e bibliotecas dele. O FES de produção usa Next.js (App Router) + TypeScript, conforme as fontes citadas em `docs/Requisitos_FES_V1_original.docx`. Se o repositório for novo, recomenda-se Next.js 14+ / React 18 / TypeScript, consumindo os componentes do FINPEC Design System (`window.FINPECDesignSystem_f2149b` no protótipo, que equivalem a componentes React reutilizáveis).

- `prototipo-offline/FES Redesign (offline).html`: protótipo navegável completo num único arquivo. Abre direto no navegador, sem internet. Tem um botão **Tweaks** (canto inferior direito) para trocar layout, perfil (CEO/Diretor), variante do menu, troca de senha no login e Kanban denso.
- `prototipo-fonte/`: os arquivos-fonte do protótipo (Design Components `.dc.html` + `support.js`). Para abrir, sirva a pasta por HTTP (ex.: `npx serve prototipo-fonte`) e abra `FES Protótipos.dc.html`, que alterna os três layouts e as resoluções.
- `mock-data.json`: dados fictícios usados no protótipo (diretorias, 25 ações, ranking IEF, 114 snapshots, 11 usuários, auditoria, exemplo de importação). Serve como seed de desenvolvimento.

## Fidelity
**Alta fidelidade (hi-fi).** Cores, tipografia, espaçamentos, estados e interações são finais e seguem o FINPEC Design System. Recrie pixel a pixel, usando os componentes do design system e não reimplementações.

---

## Shell da aplicação

### Web / desktop
- **Sidebar** (componente DS `Sidebar`): 264 px, ou 76 px recolhida (só ícones, com ponto indicador quando houver pendência). A variante padrão é `white`; também existem `light` e `dark`. A sidebar e o conteúdo rolam de forma independente: a página nunca rola como um todo.
  - Grupos (CEO): **Execução**: Dashboard CEO, Visão por diretoria, Ações (badge com o nº de vencidas no escopo, tom "hot"), Histórico, Rotina 1:1. **Operação**: Importar planilha. **Gestão**: Administração → Usuários e acessos, Auditoria, Minha equipe (expansível, chevron gira 90°).
  - Grupos (Diretor): **Execução**: Minha diretoria, Ações, Histórico, Rotina 1:1. **Gestão**: Administração → Minha equipe.
  - Rodapé: botão claro/escuro + data e hora → avatar com iniciais, nome, perfil e botão Sair → release "FES V1" em mono.
- **Topbar**: 68 px, fundo `--surface`, borda inferior `--border`, padding 0 28 px.
  - **Seletor "Escopo ativo"**: botão de 44 px de altura, borda `--border-strong`, raio 10 px, fundo `--surface-2`. Rótulo "ESCOPO ATIVO" em 9,5 px/700 com tracking 0,14em e `--faint`; valor em 13,5 px/600. O dropdown tem 260 px, `--shadow-lg`, título "Escopos autorizados" e cada item com o papel em mono 11 px à direita.
  - Breadcrumb "/ {título da tela}".
  - À direita: "Janela dos diretores" + Pill `ok` com ponto: "Aberta · encerra ter., 20/10 às 18h". Pill `warn` "Offline" quando `navigator.onLine === false`.
- **Conteúdo**: `max-width: 1320px`, centralizado, padding 28 px 32 px 64 px (104 px embaixo quando há FAB).
- **Rodapé do conteúdo**: "Fernando Sartori — Autor · FES V1", 11,5 px, `--faint`, centralizado.

### Web responsive
| Largura | Comportamento |
|---|---|
| ≥ 1100 px | Igual ao Web |
| 768–1099 px (tablet) | Sidebar recolhida por padrão (76 px); grids assimétricos viram 1 coluna quando a área útil < 1000 px |
| < 768 px (celular) | Sidebar oculta; botão sanduíche de 44×44 px no topbar abre a sidebar como drawer sobre véu `rgba(24,22,18,.5)`; breadcrumb e "Janela dos diretores" ocultos; padding do conteúdo 16 px 14 px 40 px |

- **Tabelas → cartões**: no celular, todas as tabelas viram listas empilhadas. O cabeçalho é a primeira coluna, a ação fica à direita e os demais campos ficam num grid de 2 colunas com rótulo em 10 px maiúsculo `--faint` (componente auxiliar `FES-Lista-Mobile`). Na lista de ações, a tabela só aparece com área útil ≥ 800 px; abaixo disso, cartões.
- Painéis recolhíveis ("Indicadores e filtros", indicadores e gráfico do Histórico) começam **recolhidos no celular** e abertos no desktop. O estado do celular é guardado separado do desktop.
- Altura da viewport: `100dvh`, com fallback `100vh`.

### PWA
Tudo do responsive celular, mais:
- **Barra inferior fixa**: 68 px + `env(safe-area-inset-bottom)`, fundo `--surface`, borda superior. Cinco itens: Painel/Diretoria · Ações · 1:1 · Histórico · Menu (o Menu abre o drawer). Ícone 20 px + rótulo 11 px/600; o item ativo fica em `--primary`, os demais em `--muted`.
- Topbar com `padding-top: env(safe-area-inset-top)`; `viewport-fit=cover`.
- **Aviso de instalação** no topo do conteúdo: ícone 40 px, título "Instale o FES no celular" e texto conforme a plataforma. Com `beforeinstallprompt`: botão "Instalar". No iOS: "No Safari, toque em Compartilhar e depois em Adicionar à Tela de Início." O botão X dispensa o aviso e grava `fes.pwa.dismissed=1`.
- `manifest.webmanifest`: nome "FINPEC Execution System", short_name "FES", `display: standalone`, `orientation: portrait`, `theme_color`/`background_color` #181612, ícones 192/512 e maskable 512, atalhos para Ações e Rotina 1:1 (`?tela=acoes`, `?tela=oneonone`).
- `sw.js`: precache do shell e dos assets; navegação *network-first* com fallback para o cache; demais GETs *stale-while-revalidate*.
- `meta theme-color` acompanha o tema: #FFFFFF no claro, #1A1814 no escuro.

### Tema claro/escuro
Só dois modos, alternados manualmente pelo botão sol/lua no rodapé da sidebar e persistidos em `localStorage['fes.theme']`. O modo escuro vale para **todo o sistema**: as variáveis são sobrescritas em `:root` (tabela em *Design Tokens*).

---

## Telas

Cada tela segue a mesma estrutura: cabeçalho com sobretítulo de 11 px/700 maiúsculo (tracking 0,14em, `--faint`), H1 de 26 px/700 Schibsted Grotesk (tracking −0,02em), subtítulo de 14 px `--muted` e ações à direita. Cards usam o componente DS `Card` (raio 14 px, borda hairline, `--shadow-sm`); KPIs usam `KpiCard`; tabelas usam `DataTable`.

### 01 · Login (`/login`)
- **Desktop**: duas colunas na altura total.
  - **Painel esquerdo**: 500 px, `#0F0F0E`, padding 112 px 40 px 48 px. De cima para baixo:
    - Lockup: logo branco de 104 px + "Execution System" (26 px/500 display) e "FINPEC EXECUTION SYSTEM" (13 px, `#C9C5BD`, maiúsculas).
    - Título "Disciplina semanal, prioridade real e cobrança executiva." (38 px/400 display, branco, margem superior de 56 px).
    - Descrição "Gestão de ações, riscos P0, IEF e reuniões 1:1 em uma única rotina." (16 px, `#C9C5BD`).
    - Bloco de acesso empurrado para baixo (`margin-top:auto`): "Acesse sua conta" (26 px) + "Use sua conta corporativa Microsoft ou seu e-mail e senha." (13 px).
    - Botão **Entrar com Microsoft**: fundo branco, 68 px, raio 4 px, logo Microsoft em 4 quadrados de 12 px.
    - Divisor "OU".
    - Campos E-mail e Senha: 48 px, fundo `#1A1917`, borda `#34322D`, raio 6 px. O campo de senha tem o botão "Mostrar/Ocultar" em `#9DB8EC`.
    - Botão **Entrar**: 52 px, `--primary`, raio 4 px.
  - **Direita**: foto full-bleed (`assets/login-campo.jpg`), `background-size: cover`.
  - **Aba "FES V1 Release notes"**: presa à borda esquerda da foto, a 25% do topo. Tem 40×400 px, fundo branco, borda de 2 px `--primary` e texto vertical azul de 17 px. Ao clicar, expande um painel de 400×400 px com "Release notes — Build FES V1" e seções `<details>`: Correções de validação, Evolução da plataforma, Requisitos funcionais, Requisitos não funcionais.
- **Celular**: uma coluna. Foto de 200 px no topo, painel abaixo com padding 28 px 22 px 32 px, logo de 64 px, título de 26 px e sem a aba de release notes.

### 02 · Troca obrigatória de senha (`/change-password`)
- Coluna centralizada de 440 px: lockup + Card "Trocar senha".
- Campos: Senha atual, Nova senha, Confirmar nova senha.
- Checklist em grid de 2 colunas que valida em tempo real: mínimo de 12 caracteres · letra maiúscula · letra minúscula · número · caractere especial · confirmação coincide. Cada regra tem um ponto de 14 px (`--ok` quando atendida, `--border-strong` quando não).
- Botão primary de largura total "Salvar nova senha", desabilitado até todas as regras passarem.

### 04 · Dashboard CEO (`/ceo`)
Fluxo vertical, `gap: 20px`:
1. Cabeçalho "Visão global · semana 15/10 a 20/10/2026" / "Dashboard CEO" + botão "Exportar PDF".
2. **4 KpiCards clicáveis**. Cada um abre Ações com o filtro correspondente:
   - Diretorias vermelhas (IEF < 70): sem filtro de ação.
   - P0 oficiais ativos: filtro prio=P0.
   - Ações vencidas: filtro prazo=vencidas.
   - Itens sem atualização: filtro atualização=não.
3. **Faixa de sinais**: 4 células com 1 px de gap sobre `--border`. Cada célula tem o rótulo e o número (20 px) em `--danger`/`--warn` quando > 0, ou `--ok-ink` quando 0. Os sinais são: Alertas de risco elevado · P0 oficiais com alerta · Bloqueios ativos · Riscos sistêmicos.
4. **Carteira ativa por prioridade**:
   - Resumo em 3 células: prioridade com maior acúmulo, diretoria com maior volume, total aberto não-P0.
   - Tabela P0–P3: Abertas, Vencidas, Bloqueadas, Concluídas na semana, Distribuição por diretoria.
5. **Ranking IEF semanal**:
   - 4 KPIs: IEF médio, Melhor diretor, Pior diretor, Aderência semanal.
   - Grid 1,6fr/1fr:
     - Esquerda: tabela de ranking com Diretor (clicável → modal *Memória de cálculo*), IEF da semana com classificação, Prazos/30, P0/25, Atualização/15, Planejamento/15, Bloqueios/15, Acumulado com semáforo. Rodapé com "Exportar PNG" e "Copiar imagem".
     - Direita: BarChart "Histórico semanal do IEF" (snapshots desde 04/06) + card "Alertas da semana" (até 5, clicáveis → detalhe da ação).
6. **Roteiro 1:1 das quartas-feiras**: Diretor, IEF, P0 ativos, P0 vencidos, Sem atualização, Principal ponto da 1:1 + impacto no IEF, botão → pauta 1:1.
7. **Ações pendentes do CEO**: busca por texto ou código, filtros de diretoria e prioridade. Tabela com Item (código + prioridade + tema), Diretoria, Prazo, Motivo e Abrir. Usa EmptyState quando vazio.

**Modal "Como o IEF foi calculado · {diretor}"**: 780 px, raio 20 px.
- Nota de 40 px/800 + Pill de classificação.
- 6 células de corte: diretor, diretoria, janela da Semana Atual, status, fechamento semanal, "pontuação fechada a partir de".
- Lista dos 5 componentes, cada um com barra de progresso, valor/máximo e regra.
- Rodapé com Exportar PNG · Copiar imagem · Copiar resumo para diretor.

### 05 · Visão por diretoria / Minha diretoria (`/diretor`)
- Select de diretoria (travado para Diretor) + "Nova ação".
- Faixa "Status da diretoria": Pill do semáforo + texto ("Execução dentro do esperado" / "Atenção preventiva" / "Intervenção necessária") + legenda das faixas.
- 4 KPIs: IEF semanal, IEF acumulado oficial, P0 ativos, Sem atualização.
- Faixa de 6 contagens: Backlog, Em andamento, Bloqueado, Aguardando terceiros, Concluído, Foco da semana.
- Grid 1,2fr/1fr:
  - **Fechamento semanal**: alerta `warn` quando não há nova ação na semana; 4 células (Ações abertas, Atualizadas, Sem atualização, Novas ações da semana x/3); botão **"Sem ações novas nesta semana"**, que registra a declaração e mostra a confirmação `ok`.
  - **Histórico semanal do IEF**: últimos 8 snapshots, com valores e datas sob as barras.
- Card "Itens críticos": vencidas primeiro, depois por prioridade.

### 06 · Ações · Lista (`/fes/{scope}/tasks?view=list`)
- **Cabeçalho**:
  - Esquerda: H1 de 20 px "Acompanhamento de ações" + "{escopo} · Lista e Kanban usam os mesmos filtros e permissões."
  - Direita, numa única linha que não quebra: segmented **Lista | Kanban** → botão **"Indicadores e filtros"** (32 px, chevron azul que gira 180°, badge com o nº de filtros ativos; no celular o rótulo vira "Filtros") → **botão só com ícone de exportar CSV** (32×32, tooltip `title="Exportar para CSV"`).
  - **Não há botão "Nova ação" no cabeçalho.** A criação é feita pelo FAB.
- **Indicadores e filtros**: um único botão recolhe **juntos** os 4 KPIs e o bloco de filtros. O estado é persistido em `localStorage['fes.ui']`.
  - Recolhido no desktop: uma faixa compacta com os 4 valores e, se houver filtros ativos, "{n} ações correspondem aos filtros · Limpar".
  - Recolhido no celular: nada além do botão.
- **KPIs**: Tarefas ativas · Sem atualização semanal · P0 sem andamento · Aderência semanal.
- **Filtros**: Busca (código, tema ou descrição) · Status · Prioridade · Diretoria · Prazo (Vencidas / Vence em 7 dias / No prazo) · Atualização (Atualizadas / Sem atualização) · Foco (Foco da semana) · Limpar.
  - Grid desktop: `minmax(220px,2fr) repeat(6,1fr) auto`. Tablet: 4 colunas, com a busca ocupando 2. Celular: 2 colunas, com a busca ocupando a linha toda.
- **Tabela**: cabeçalho fixo com rolagem vertical interna (`max-height: max(320px, calc(100vh - 190px))`), **sem rolagem horizontal**.
  - Colunas condensadas: Código · Ação (tema + descrição em 2 linhas) · Diretoria/responsável · Situação (status + alerta) · Prioridade · Prazo (+ data de criação) · Atualização (pill + barra %) · Abrir.
- **Rodapé**: "Mostrar 10/25/50/100/Todos" + `Pager` ("Exibindo x–y de N ações").
- **FAB "Nova ação"**: 56×56 px, **raio 16 px** (quadrado arredondado), `--primary`, ícone "+" de 24 px branco, `--shadow-lg`, `title="Nova ação"`.
  - Posição fixa: right 28 px / bottom 28 px no desktop; 16/20 px no celular responsive; 16 px / `calc(96px + safe-area)` no PWA (acima da barra inferior).
  - Aparece em todos os layouts na tela Ações, tanto na Lista quanto no Kanban.

### 07 · Ações · Kanban (`?view=kanban`)
**Desktop/tablet**
- Seis etapas (colunas): Backlog · Em andamento · Bloqueado · Aguardando terceiros · Concluído · Cancelado.
- Grid horizontal com rolagem: coluna expandida `minmax(240px,1fr)`, recolhida **48 px**.
- **Recolhimento por etapa (padrão FOD)**:
  - **Recolhida**: coluna com borda **tracejada** de 1 px `--border-strong`, raio 10 px, fundo `--surface-2`. De cima para baixo: ícone "»" azul, ponto da etapa (7 px), contagem em mono 12 px e o nome da etapa em texto vertical (`writing-mode: vertical-rl`, 12,5 px/600). No hover: fundo `--primary-soft` e borda `--primary`. Tooltip "Expandir etapa".
  - **Expandida**: cabeçalho com ponto, nome (14 px/600), contagem em pill mono e botão "«" (ghost, tooltip "Recolher etapa").
  - **Padrão**: a etapa vem **recolhida se não tiver cards** e expandida se tiver. O usuário pode inverter, e a escolha é persistida em `localStorage['fes.kanban.collapsed']`.
  - "Expandir todas (n)" aparece quando há etapas recolhidas.
- **Card**:
  - Código em mono + posição na fila ("1º P0").
  - Tema em 2 linhas.
  - Pills de prioridade, "Atrasada" e estado de atualização.
  - Barra de % (oculta no modo denso).
  - Responsável, Prazo (em `--danger` se vencido) e Aging.
  - Rodapé com select "Mover para", setas ↑/↓ (só quem tem permissão de ordenação) e "Ver detalhes".
- **Hover no card** (260 ms): popover com mais dados e a **última observação** registrada.
- **Arrastar e soltar** entre colunas; a coluna-alvo fica em `--primary-soft`.
- Mover para **Concluído** abre a edição exigindo data real + evidência.

**Celular (responsive e PWA)**: uma etapa por vez.
- **Seletor**: botões ‹ e › de 48×48 px (opacidade 0,4 nas pontas) + caixa central com ponto, nome e contagem.
- **Carrossel horizontal de chips**: 36 px, raio pill. O chip ativo fica com borda `--primary`, fundo `--primary-soft` e texto `--primary-ink`. **Ao trocar de etapa (setas, chip ou "Mover para"), o carrossel rola suavemente até centralizar o chip ativo**: `left = chip.offsetLeft − (rail.clientWidth − chip.offsetWidth)/2`.
- Cards agrupados por prioridade. O cabeçalho do grupo é um badge "P0" (mono 11 px, fundo `--ink`, texto `--surface`) + "{n} na fila".
- **Card**:
  - "1º na fila" + Pill de semáforo:
    - Vermelho: vencida.
    - Amarelo: vence em ≤ 7 dias ou sem atualização na semana.
    - Verde: no prazo e atualizada.
    - Concluída: `ok`. Cancelada: `neutral`.
  - Tema.
  - "Diretoria · Responsável" + aging em mono negrito.
- Tocar no card abre um **bottom sheet** com os dados, a última observação, o select **"Mover para"** e "Abrir detalhes".

### 08/10 · Cadastro e edição de ação (`/tasks/new`, `/tasks/{id}/edit`)
- Grid `1fr 320px`: o formulário à esquerda; à direita, o card fixo (sticky) **"Regras aplicadas"** (Janela dos diretores, Limite de novas ações x/3 ou Reprogramações x/2, Conclusão formal, Origem FES/FOD).
- Cards do formulário:
  - **Identificação**: Diretoria*, Código (gerado; mostra o responsável automático), Tema* (contador /180), Descrição*, Tipo*, Foco da semana.
  - **Prazo e situação**: Prazo atual* (com reprogramações x/2), Prazo original (somente leitura), Status*, Tipo de bloqueio (só quando Bloqueado), Conclusão real* e Evidência* (só quando Concluído).
  - **Prioridade e risco**: Prioridade oficial* (travada se a origem for FOD), Critério P0 (só quando P0), Risco financeiro (`MoneyInput` R$, só com o critério "Risco financeiro ≥ R$ 50 mil"), aviso `warn` quando o critério financeiro tiver valor < R$ 50.000.
  - **Observações internas**.
- Erros aparecem sob cada campo (12 px, `--danger-ink`), mais um aviso "Revise os campos destacados antes de salvar." e um toast `danger`.

### 09 · Detalhe da ação (`/tasks/{id}`)
- Cabeçalho: código em mono + Tag "Origem FOD", tema (H1), "Área {x} · Responsável automático: {nome}", Voltar · Editar.
- Faixa de 5 células: Status · Prioridade oficial · Alerta · Prazo atual · Atualização semanal.
- Grid 1,5fr/1fr:
  - **Esquerda**:
    - Card *Detalhes do item*: descrição + 9 fatos em grid de 3 colunas + "Leitura de risco do sistema".
    - Card *Atualizações da ação*: barra de % atual, aviso "sem atualização nesta semana", textarea, % (`MoneyInput mask=percent`, 0 casas) e "Registrar atualização".
  - **Direita**: card *Integração FOD* (quando aplicável), *Histórico de atualizações* e *Histórico de alterações* (linha do tempo).

### 11 · Histórico semanal (`/history`)
- Botões Exportar CSV · **Fechar semana** (só CEO/ADMIN/PMO; vira "Semana fechada" depois de usado).
- 4 KPIs + BarChart do IEF institucional, recolhíveis.
- Tabela de snapshots (Semana, Diretoria, IEF, Backlog, P0 ativos, P0 vencidos, Bloqueios, Semáforo) com filtro de diretoria, cabeçalho fixo e "Mostrar mais" no celular.

### 12 · Rotina 1:1 (`/one-on-ones`)
- Barra de controle:
  - Segmented **Pauta formal | Resumo executivo**.
  - Select de diretoria (travado para Diretor).
  - Botão "Gerar pauta formal" ou "Gerar resumo executivo agora".
  - Texto explicando a referência temporal.
- Faixa de 5 células: Diretor · Referência · IEF · Variação · Semáforo.
- 8 cards em grid de 2 colunas: P0 oficiais · Bloqueios acima de 7 dias · Itens sem atualização · Decisões exigidas do CEO · Itens vencidos · P0 oficiais com alerta · Reprogramações relevantes · Alertas de risco elevado.
- Só na pauta formal: card *Registro da reunião* (Notas da reunião, Decisões pendentes do CEO, Salvar).

### 13 · Importação de planilha (`/import`)
- Stepper com 3 etapas (Arquivo → Prévia e validação → Confirmação). A etapa atual fica com borda e fundo primary; as concluídas com ponto `ok`.
- **Etapa 1**: dropzone tracejada (.xlsx, uma aba por diretoria) + "Usar planilha de exemplo" + "Gerar preview".
- **Etapa 2**: Pills "{n} válidas" / "{n} rejeitadas" + tabela (Aba, Linha, Código, Tema, Prioridade, Prazo, Validação) + "Importar {n} linhas válidas" (desabilitado para Diretor).
- **Etapa 3**: resultado `ok` + log em mono (OK em verde, ERRO em vermelho) + "Nova importação".

### 14 · Usuários e acessos (`/admin/users`)
- Filtros: busca, status, perfil, escopo.
- Tabela: Usuário, Perfil (Tag + "Admin global"), Diretoria, Situação, Autenticação, Kanban, Acessos por escopo (Tags "Escopo · PAPEL", opacidade 0,55 quando inativo), Editar.
- **Drawer lateral** de 620 px:
  - Identidade: nome, e-mail, perfil global, diretoria.
  - Autenticação e permissões: situação, login, ordenação do Kanban, checkbox *Administrador global FES*, Redefinir senha.
  - Acessos por escopo: linhas editáveis de escopo, papel, origem e situação, com remover e "Adicionar vínculo".
  - Botões Cancelar e Salvar.

### 15 · Auditoria (`/admin/audit`)
- Somente leitura. Filtros: busca (operador, usuário ou escopo) + tipo de evento.
- Tabela densa: Data · Operador · Evento (código mono num chip `--primary-soft`) · Usuário · Escopo · Alterações (JSON em mono).

### 16 · Minha equipe (`/my-team/{scope}`)
- Grid 1fr/1,6fr:
  - Card *Novo membro*: Nome, E-mail, Senha temporária, nota "STAFF · EVALUATED", "Adicionar como STAFF · EVALUATED".
  - Tabela *Equipe avaliada*: Membro, Perfil, Vínculo, Situação, Desativar/Reativar.

### Componentes globais
- **Toast** (DS `Toast`): centralizado, a 28 px da base, 2,8 s. Mensagens no particípio ("Ação RM-028 criada", "Alterações salvas").
- **Modais/drawers**: véu `rgba(24,22,18,.5)` sem blur, entrada `fpFadeIn` (opacidade 0→1, translateY 6 px→0, 0,28 s ease).

---

## Interactions & Behavior
- **Navegação**: troca de tela por estado/rota, sempre com scroll do `main` ao topo. No PWA, `?tela=acoes|oneonone` define a tela inicial após o login.
- **Escopo**: trocar o escopo filtra Ações, Kanban e Minha equipe. Não concede permissões.
- **KPIs do CEO** abrem a lista de Ações já filtrada (escopo Institucional).
- **Filtros** são compartilhados entre Lista e Kanban. Qualquer filtro volta a paginação para a página 1.
- **Kanban desktop**: drag & drop (HTML5 DnD), select "Mover para", setas de ordenação (trocam a posição dentro da mesma prioridade, sem alterar a prioridade oficial). Popover no hover com atraso de 260 ms, reposicionado para caber na viewport. Toda movimentação gera uma entrada no histórico "Status: A → B (Kanban)".
- **Kanban celular**: setas, chips e sheet; centralização suave do chip ativo.
- **Transições**: 0,14 s em hover/focus; chevrons giram com 0,14 s; colapso da sidebar com `cubic-bezier(.4,0,.2,1)`.
- **Hover**: superfícies neutras vão para `--surface-2`; bordas passam de `--border` para `--border-strong`; o botão primary vai para `--primary-hover`; no press, `--primary-press`.
- **Estados vazios** (DS `EmptyState`): constatam o fato sem dramatizar ("Nenhuma ação encontrada. Os filtros foram preservados.").
- **Validação de formulários**: ver `REQUISITOS.md`, seção RN.

## State Management (protótipo → produção)
Estado de interface (cliente):
- `screen`/rota, `scope`, `view` ('list'|'kanban'), `f` (filtros), `perPage`, `page`, `kCol` (etapa ativa no Kanban celular), `colCollapsed` (overrides por etapa), `ui` (painéis recolhidos, separados por desktop/celular), `theme`, `hov` (popover/sheet), `toast`, `navOpen`, `scopeOpen`.

Persistência local (`localStorage`):
- `fes.theme`, `fes.ui`, `fes.kanban.collapsed`, `fes.pwa.dismissed`.

Dados de servidor: ações, atualizações, histórico, snapshots, declarações, ranking/IEF, usuários/vínculos, auditoria, importações. O modelo e as APIs sugeridas estão em `REQUISITOS.md`.

---

## Design Tokens
Fonte: `prototipo-fonte/_ds/.../tokens/*.css` (FINPEC Design System). **Use os tokens, nunca valores soltos.**

### Cores — tema claro (`:root`)
| Token | Valor | Uso |
|---|---|---|
| `--bg` | #F4F2EE | Canvas |
| `--surface` | #FFFFFF | Cards, inputs |
| `--surface-2` | #FAF9F6 | Recessos, cabeçalho de tabela, hover |
| `--border` | #E7E3DB | Hairlines |
| `--border-strong` | #D7D2C7 | Inputs, divisores fortes |
| `--ink` / `--ink-2` / `--muted` / `--faint` | #1B1915 / #4A453D / #756F63 / #A39C8E | Texto |
| `--primary` | #2860C6 | Ação, links, ativo, ícones, gráficos |
| `--primary-hover` / `-press` / `-soft` / `-ink` | #204FA6 / #1A4488 / #E8EEFB / #1B4C92 | Variações do primary |
| `--accent` | #DC4E25 | Só marca e atenção ("hot") |
| `--ok` / `-soft` / `-ink` | #4C9A5E / #E9F3E5 / #2F6B3E | Sucesso |
| `--warn` / `-soft` / `-ink` | #B07206 / #FAEED2 / #7A4E03 | Atenção |
| `--danger` / `-soft` / `-ink` | #C8382B / #FAE2DF / #8E251B | Perigo (nunca em "Cancelar") |
| `--info` / `-soft` / `-ink` | #2563C9 / #E5ECFB / #1A488F | Informação |
| `--neutral-soft` / `--neutral-ink` | #EFEDE7 / #5C564B | Chips neutros |
| `--side` | #181612 | Chrome escuro, ícone PWA |
| Login | #0F0F0E (painel) · #1A1917 (input) · #34322D (borda) · #C9C5BD (texto secundário) · #9DB8EC (link "Mostrar") | Tela de login |

### Cores — tema escuro (sobrescritas em `:root`)
| Token | Valor |
|---|---|
| `--bg` / `--surface` / `--surface-2` | #100F0C / #1A1814 / #211E18 |
| `--border` / `--border-strong` | #322E26 / #433E34 |
| `--ink` / `--ink-2` / `--muted` / `--faint` | #F2EEE6 / #D7D2C7 / #B7B1A4 / #8C8678 |
| `--primary` / `-hover` / `-press` / `-soft` / `-ink` | #5B8BE0 / #749DE6 / #4A79CF / #1B2740 / #A9C3F2 |
| `--accent-soft` / `--accent-ink` | #3A2116 / #F2A483 |
| `--ok` / `-soft` / `-ink` | #6DB37E / #1C2A1F / #A6D3AF |
| `--warn` / `-soft` / `-ink` | #D79A2B / #2E2412 / #EBC57A |
| `--danger` / `-soft` / `-ink` | #E26A59 / #341A16 / #F2A99D |
| `--info` / `-soft` / `-ink` | #5B8BE0 / #1B2740 / #A9C3F2 |

(Lista completa em `FES_DARK` dentro de `prototipo-fonte/FES Redesign.dc.html`.)

### Tipografia
- **Display**: Schibsted Grotesk. H1 26 px/700 (−0,02em) · H1 de Ações 20 px · H2 18 px · KPI ~22–40 px/700–800.
- **UI**: Hanken Grotesk. Base 14 px; tabelas 13 px; rótulos 12–12,5 px; sobretítulos 10,5–11 px/700 maiúsculos com tracking 0,12–0,14em.
- **Mono**: IBM Plex Mono, `tabular-nums`. Códigos (RM-027), datas, %, aging, contagens.
- Mínimo ~10 px (rótulos em maiúscula).

### Espaçamento, raios e sombras
- Escala de 4 px: `--sp-1` 4 · 8 · 12 · 16 · 20 · 24 · 28 · 32 · 40 · 48 · 64.
- Raios: `--r-sm` 7 px (botões/inputs) · `--r` 10 px (busca, toasts, cards do Kanban) · `--r-lg` 14 px (cards/KPIs) · `--r-xl` 20 px (modais) · pill 100 px · FAB 16 px.
- Sombras quentes:
  - `--shadow-sm`: `0 1px 2px rgba(28,24,16,.06), 0 1px 3px rgba(28,24,16,.04)`
  - `--shadow`: `0 2px 4px rgba(28,24,16,.05), 0 6px 16px rgba(28,24,16,.07)`
  - `--shadow-lg`: `0 8px 24px rgba(28,24,16,.10), 0 24px 56px rgba(28,24,16,.12)`
  - Foco: `0 0 0 3px var(--primary-soft)`
- Shell: sidebar 264/76 px · topbar 68 px · conteúdo max 1320 px · barra inferior do PWA 68 px + safe-area.

### Iconografia
Ícones de linha estilo **Lucide**: traço de 1,9 px, cantos arredondados, grade de 24 px, exibidos a 16–20 px. Cor `--primary` em ênfase interativa; nos demais casos, `currentColor`. **Sem emoji.**

## Assets
| Arquivo | Uso | Origem |
|---|---|---|
| `assets/finpec-mark.png` | Monograma (sidebar, cabeçalhos) | FINPEC Design System |
| `assets/finpec-logo-branco.png` | Logo no painel escuro do login | FINPEC Design System |
| `assets/login-campo.jpg` | Foto do login (fotógrafo no campo) | URL enviada pelo cliente (magnific.com); **confirmar a licença de uso antes da produção** |
| `assets/login-foxe-aerial.png`, `assets/finpec-jornada-credito.jpg` | Alternativas de foto | FINPEC Design System |
| `assets/pwa/icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `icon-180.png`, `favicon-32.png` | Ícones do PWA, gerados do monograma sobre #181612 | Gerados neste projeto |

## Files
| Arquivo | Conteúdo |
|---|---|
| `REQUISITOS.md` | Requisitos funcionais, regras de negócio, não funcionais, modelo de dados, APIs e backlog |
| `mock-data.json` | Seed fictício |
| `prototipo-offline/FES Redesign (offline).html` | Protótipo completo num único arquivo, com Tweaks |
| `prototipo-fonte/FES Redesign.dc.html` | **Fonte principal**: todas as telas, lógica e dados mock (o template HTML fica no topo; a classe `Component` com a lógica fica no `<script data-dc-script>`) |
| `prototipo-fonte/FES Protótipos.dc.html` | Seletor de layout (Web / Web responsive / PWA) e resolução |
| `prototipo-fonte/FES Web Responsive.dc.html`, `FES Mobile.dc.html` | Vitrines do responsive e do PWA |
| `prototipo-fonte/FES-Lista-Mobile.dc.html` | Lista empilhada usada no celular |
| `prototipo-fonte/manifest.webmanifest`, `sw.js` | PWA |
| `prototipo-fonte/_ds/...` | Tokens e bundle do FINPEC Design System |
| `docs/Requisitos_FES_V1_original.docx` | Especificação funcional original (16/10/2026) |
