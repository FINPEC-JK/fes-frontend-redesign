# Prompt para implementar o redesign do FES

> Copie tudo abaixo da linha e envie à IA de código (Claude Code, Cursor etc.), com a pasta `design_handoff_fes/` dentro do repositório (ex.: em `docs/design_handoff_fes/`).

---

Você vai implementar o **redesign do FES (FINPEC Execution System) V1** neste repositório.

## Contexto e fontes de verdade
Leia **antes de escrever qualquer código**, nesta ordem:
1. `docs/design_handoff_fes/README.md`: design, layouts, telas, componentes, tokens e assets.
2. `docs/design_handoff_fes/REQUISITOS.md`: perfis e permissões, requisitos funcionais (RF), regras de negócio (RN), não funcionais (RNF), modelo de dados, rotas e APIs, critérios de aceite (CA) e backlog.
3. `docs/design_handoff_fes/prototipo-fonte/FES Redesign.dc.html`: **referência de comportamento e layout**. O template HTML (estilos inline) fica no topo; a classe `Component` com toda a lógica, as regras e os dados mock fica no `<script data-dc-script>`. Use-o para tirar medidas, cores, textos e lógica exatos.
4. `docs/design_handoff_fes/prototipo-offline/FES Redesign (offline).html`: abra no navegador para **ver e navegar** pelo protótipo. O botão **Tweaks** troca o layout (Web / Web responsive / PWA) e o perfil (CEO / Diretor).
5. `docs/design_handoff_fes/mock-data.json`: seed de desenvolvimento.
6. `docs/design_handoff_fes/prototipo-fonte/_ds/.../tokens/*.css` e `components/finpec-components.css`: **FINPEC Design System** (tokens e classes `.fp-*`).

**Os arquivos HTML são referências de design, não código para copiar.** Recrie as telas na stack deste repositório, com os padrões dele.

Em caso de conflito, a prioridade é: **REQUISITOS.md** (regras) > **README.md** (visual) > protótipo.

## Stack
- Se o repositório já tiver uma stack, use-a.
- Se estiver vazio, use **Next.js 14+ (App Router) + React 18 + TypeScript (strict)**, **Prisma + PostgreSQL**, **Auth.js/NextAuth** (credenciais; Microsoft Entra ID atrás de feature flag), **Zod** para validação, **Vitest** para unidade e **Playwright** para e2e.
- **Estilo**: tokens CSS do FINPEC Design System (copie `tokens/*.css` e `finpec-components.css` para `styles/`). Componentes React próprios que espelhem os do design system: `Sidebar`, `Button`, `Card`, `Pill`, `Tag`, `KpiCard`, `DataTable`, `BarChart`, `Pager`, `Field`, `Input`, `Select`, `MoneyInput` (máscaras `R$0,00` e `0,00%`, preenchidas da direita para a esquerda), `Toast`, `EmptyState`.
- **Não use** Tailwind, MUI ou outra biblioteca visual que conflite com os tokens.
- Ícones: **lucide-react** (traço 1,9).
- Fontes: Schibsted Grotesk (display), Hanken Grotesk (UI), IBM Plex Mono (números e códigos).

## Regras inegociáveis
1. **Visual pixel-fiel ao protótipo**: cores só via tokens (`var(--primary)` etc.), sem hex soltos; raios, sombras e tipografia do README; **sem emoji**; textos em pt-BR exatamente como no protótipo.
2. **Tema claro/escuro para o sistema inteiro**, com os valores de escuro do README (sobrescrita das variáveis em `:root`), alternado no rodapé da sidebar e persistido.
3. **Três layouts**:
   - **Web**: desktop, sidebar de 264/76 px.
   - **Web responsive**: < 1100 px recolhe a sidebar; < 768 px usa menu sanduíche com drawer, tabelas viram cartões e painéis recolhíveis começam fechados.
   - **PWA**: barra inferior com 5 itens, safe areas, `100dvh`, manifest, service worker, aviso de instalação, indicador offline e deep link `?tela=`.
4. **Segurança no servidor**: escopo resolvido pela URL e validado antes de qualquer consulta; permissões por perfil, habilitação e papel (matriz em REQUISITOS §2); janela dos diretores (qui 00:00 → ter 18:00, America/Sao_Paulo) e limite de 3 novas ações por janela **aplicados na API**. A interface só reflete o que o servidor decide.
5. **Prioridade oficial nunca é alterada automaticamente.** Alertas de risco são só informativos.
6. **Histórico, snapshots e auditoria são append-only e imutáveis.**
7. **Sem rolagem horizontal da página** de 360 a 1920 px. No desktop, as tabelas não rolam na horizontal e têm o cabeçalho fixo.

## Detalhes do redesign que precisam ser exatos
- **Login**:
  - Duas colunas: painel de 500 px em `#0F0F0E` e foto `assets/login-campo.jpg` full-bleed.
  - "Entrar com Microsoft" (68 px), divisor "ou", e-mail e senha com "Mostrar/Ocultar", botão "Entrar" (52 px, primary).
  - Aba vertical "FES V1 Release notes" que expande um painel de 400×400 px.
  - No celular: uma coluna com a foto de 200 px no topo.
- **Ações · cabeçalho**: em **uma linha**, seletor Lista|Kanban → botão **"Indicadores e filtros"** (no celular, "Filtros"; com badge do nº de filtros) → **botão só com ícone de Exportar CSV** com `title="Exportar para CSV"`. **Não há botão "Nova ação" no cabeçalho.**
- **"Indicadores e filtros"**: um único botão recolhe **juntos** os 4 KPIs e o bloco de filtros. O estado é persistido separadamente para desktop e celular (abre no desktop, fecha no celular). Recolhido no desktop, mostra uma faixa compacta com os valores.
- **FAB "Nova ação"**: 56×56 px, **raio 16 px**, primary, "+" branco de 24 px, `--shadow-lg`, fixo no canto inferior direito, na Lista e no Kanban, em todos os layouts. No PWA fica acima da barra inferior.
- **Kanban desktop, recolhimento por etapa (padrão FOD)**:
  - **Recolhida**: coluna de 48 px, borda **tracejada** `--border-strong`, fundo `--surface-2`, ícone "»" azul, ponto, contagem em mono e nome vertical (`writing-mode: vertical-rl`). No hover: `--primary-soft` com borda primary. Tooltip "Expandir etapa".
  - **Expandida**: cabeçalho com ponto, nome, contagem e botão "«" ("Recolher etapa").
  - **Padrão: recolhida se a etapa não tiver cards.** A escolha do usuário prevalece e é persistida. Botão "Expandir todas (n)".
- **Kanban desktop, card**: código, posição na fila, tema, pills, barra %, responsável, prazo, aging, "Mover para", ↑/↓ (só com permissão de ordenação) e "Ver detalhes". **Hover de 260 ms** abre um popover com mais dados e a **última observação**. Arrastar e soltar entre etapas.
- **Kanban celular**:
  - Setas ‹ › de 48 px + carrossel de chips. **Ao trocar de etapa, o chip ativo rola suavemente até o centro**: `left = chip.offsetLeft − (rail.clientWidth − chip.offsetWidth)/2`, com o id da etapa-alvo passado explicitamente.
  - Cards agrupados por prioridade ("P0 · N na fila"), com semáforo Vermelho/Amarelo/Verde (RN-KAN-02).
  - Tocar no card abre um bottom sheet com "Mover para" e "Abrir detalhes".
- **Mover para Concluído** abre a edição exigindo data real + evidência.
- **Memória de cálculo do IEF**: modal com os 5 componentes, valor/máximo e regra (REQUISITOS §4.6).

## Plano de execução
Trabalhe por épicos (REQUISITOS §9), em PRs pequenos. Para cada um: implemente, escreva os testes e rode lint, typecheck e testes.
1. **Fundação**: projeto, tokens/fontes, componentes base, shell (sidebar, topbar com escopo e janela), tema, os três layouts.
2. **Dados**: schema Prisma (REQUISITOS §6) + seed a partir de `mock-data.json`.
3. **Auth e permissões**: login, troca obrigatória de senha, middleware de escopo, `lib/permissions.ts` com a matriz completa e testes por perfil e papel.
4. **Ações**: lista, filtros, paginação, CSV, formulário com todas as validações (RN-FRM-01, campos condicionais), detalhe, atualizações, histórico, FAB.
5. **Kanban**: desktop + celular, como descrito acima.
6. **Motor do IEF** (`features/ief/`): função pura e determinística, com **testes de unidade cobrindo cada regra da tabela §4.6** (inclusive "reprogramar não apaga o maior atraso" e "sem ação avaliável, sem penalização"), snapshots, fechamento semanal idempotente, acumulado (semana sem snapshot ≠ zero).
7. **Painéis**: Dashboard CEO, Visão por diretoria (com a declaração "Sem ações novas nesta semana"), Histórico.
8. **Rotina 1:1**, **Importação Excel** (preview → commit, idempotente por código), **Administração** (usuários, vínculos, redefinir senha), **Auditoria**, **Minha equipe**.
9. **Integrações**: endpoint FOD → FES idempotente com campos protegidos; avisos por e-mail de 7 e 1 dia e de fechamento, com log.
10. **PWA**: manifest, service worker, ícones (`public/`), aviso de instalação, offline.
11. **QA**: Playwright cobrindo **todos os CA-01..CA-14** + verificação de rolagem horizontal em 360/390/834/1280/1440 px + checagem de acessibilidade (alvos ≥ 44 px no celular, `aria-*`, foco visível).

## Pontos em aberto (não invente; implemente atrás de flag ou constante configurável)
SSO Microsoft · faixas do semáforo da diretoria (85/70) e do card no celular · definição de "Riscos sistêmicos" · licença da foto do login · offline só leitura vs. fila de escrita · busca por coluna no Kanban. Ver REQUISITOS §10. Deixe cada um isolado em `lib/config.ts` e liste-os no PR.

## Entregáveis por PR
- Código + testes passando.
- Descrição com os RF/RN/CA atendidos.
- Capturas das telas em desktop (1440), tablet (834) e celular (390), claro e escuro, comparadas ao protótipo.

Comece lendo os arquivos indicados e respondendo com: (a) a stack que vai usar, (b) a estrutura de pastas, (c) a lista de PRs na ordem acima. **Aguarde minha confirmação antes de codar.**
