# Pesquisa semanal de produtos — 2026-10-25

## ⚠️ Bloqueio de infraestrutura nesta rodada

A política de rede deste ambiente de execução **nega acesso aos domínios de e-commerce** (`amazon.com.br`, `mercadolivre.com.br`, `meli.la` — confirmado via DNS/proxy: `getaddrinfo ENOTFOUND www.amazon.com.br` e `403 policy denial`). Isso impediu duas partes do processo pedido:

- **Não foi possível abrir nenhuma página individual de produto** (Amazon/ML) para confirmar preço, nota, nº de avaliações e disponibilidade dos candidatos novos.
- **Não foi possível checar a disponibilidade dos ~29 produtos já publicados** no `consts.ts` (a Parte 6 da tarefa).

Isso provavelmente é intencional — evita justamente o scraping sistemático que o Amazon Associates Operating Agreement proíbe — mas, na prática, bloqueia a verificação que esta pesquisa deveria fazer. **Para rodadas futuras funcionarem de ponta a ponta, é preciso liberar esses domínios em "Network access" das configurações do ambiente** (menu do ambiente no topo da sessão → Edit → Allowed domains, no nível "Limited" ou "Custom"): `amazon.com.br`, `www.amazon.com.br`, `mercadolivre.com.br`, `meli.la`.

Os candidatos abaixo vêm de **agregadores de preço de terceiros** (Buscapé/Zoom/Bondfaro, que replicam dados de revendedores Amazon) encontrados via busca na web — **nenhum link ou dado foi confirmado na página oficial do produto**. Nada aqui deve entrar no `consts.ts` sem o dono abrir manualmente a página na Amazon/Mercado Livre e confirmar ASIN, preço, nota, nº de avaliações e o link com a tag `felipearraiss-20`.

A disponibilidade dos produtos já publicados também **não foi verificada** nesta rodada — não há indício de problema, é dado ausente por bloqueio de rede, não confirmação de saúde.

---

## 1. Candidatos descartados

| Produto | Categoria pretendida | Motivo (regra aplicada) |
|---|---|---|
| Mini liquidificador portátil USB (Knup/genérico) | cozinha | Nota 3,2/269 avaliações num modelo; outro com relatos de quebra e "não liga". **Regra 4** — evidência fraca/negativa. |
| Rolo removedor de pelo de pet (American Pets Magic Clean) | pet | Só 11–17 avaliações nas lojas BR encontradas; versão "Pro" cai pra nota 3,4 com reclamação de fragilidade. **Regra 4**. |
| Suporte veicular com carregador wireless (ELG/Gshield/genérico) | carro | Nenhuma nota ou nº de avaliações localizado em fonte BR. **Regra 4** — sem evidência. |
| Dash cam (70mai, Intelbras, genéricos) | carro | Nenhuma nota BR encontrada, só ficha técnica de marketing e preço de loja. **Regra 4**. |
| Descascador de legumes | cozinha | Único achado com nota em BR é de outro perfil de produto (nota 4,1/151); resto é de loja internacional. Evidência insuficiente pro padrão do site. **Regra 4**. |
| Bebedouro Truqys (galão por gravidade, cães) | pet | Nota 4,4/648 só via agregador, sem link Amazon real localizado. Tipo de produto diferente do bebedouro-fonte de gatos já publicado (não é concorrência direta, é categoria adjacente — cão vs. gato, galão vs. fonte com bomba). Descartado por **falta de verificação** (não é a regra 2/4 propriamente — poderia voltar como candidato numa rodada em que a rede permita confirmar na Amazon). |
| Skincare/dermocosméticos (La Roche-Posay, Elseve etc.) que apareceram nas buscas de "mais vendidos" | estética | Fora de propósito: a categoria `estetica` do site é sobre gestão de agenda de clínica (produto próprio "Protocolo VAGA"), não sobre produtos de skincare para consumidor final. Descartados sem registro individual. |

## 2. Candidatos propostos — pick / deal (⚠️ não publicar sem confirmação manual na Amazon/ML)

### 1. Caixa de som Bluetooth JBL Go 4
- **Categoria:** eletronicos
- **Classificação:** `pick` condicional
- **Preço (via agregador, não confirmado):** ~R$ 209–224
- **Nota / avaliações (via Buscapé/Zoom, origem revendedor Amazon):** 4,9 / 664 avaliações
- **Por que pick:** item de tendência (regra 1) com volume de avaliações alto o suficiente pra confirmar durabilidade (regra 4). Resistência IP67, Auracast, ~7h de bateria.
- **Concorrência no site:** nenhuma — os dois fones já listados em eletronicos (Philips TWS, JBL Tune 520BT) são *fones de ouvido*, não *caixa de som*. Não precisa de `compareGroup` agora; se outra caixa de som entrar depois, usar `compareGroup: caixa-de-som-bluetooth`.
- **Pitch (rascunho):** "Toca em qualquer lugar sem fiar no celular — resistente a água e poeira, aguenta até sete horas fora da tomada."
- **Take (rascunho):** "Nota 4,9 com 664 avaliações — volume consistente pra confirmar durabilidade além da primeira semana de uso."
- **Pendência:** confirmar ASIN, preço e nota direto na Amazon antes de publicar.

### 2. Kit 50 Cabides de Veludo Ultrafino Antiderrapante
- **Categoria:** casa
- **Classificação:** `pick` condicional
- **Preço (via agregador, não confirmado):** ~R$ 64,31
- **Nota / avaliações (via Bondfaro, origem Amazon):** 4,7 / 677 avaliações
- **Por que pick:** resolve duplicação de compra por falta de espaço no guarda-roupa — bate com o check da categoria "torna o jeito certo mais fácil que o errado" (regra 2) e tem evidência forte (regra 4/1).
- **Concorrência no site:** nenhuma hoje na categoria casa.
- **Pitch (rascunho):** "Dobra o espaço do guarda-roupa sem comprar móvel novo — o cabide fino desliza, não acumula roupa amassada."
- **Take (rascunho):** "Nota 4,7 com 677 avaliações — volume alto pra um item de organização de baixo custo."
- **Pendência:** confirmar ASIN, preço e nota direto na Amazon antes de publicar.

### 3. Umidificador/difusor ultrassônico G-Tech Allergy Free 3L
- **Categoria:** casa
- **Classificação:** `deal` (não `pick`)
- **Preço (via agregador, não confirmado):** ~R$ 159,90
- **Nota / avaliações (via Buscapé/Zoom):** 4,7 / 235 avaliações
- **Por que deal, não pick:** sem vantagem clara sobre concorrentes equivalentes achados na mesma busca — Fisher Price HC115 (4,7/143, ~R$ 169) e Mondial NUA-02 (4,5/193, ~R$ 125) competem de igual pra igual. **Regra 3** — preço/evidência ok, mas sem diferencial claro, então `deal`.
- **Concorrência no site:** nenhuma hoje. Se um segundo umidificador entrar, usar `compareGroup: umidificador-ar`.
- **Pitch (rascunho):** "Mantém o ar do ambiente menos seco sem vapor quente — jato forte dura o dia todo com um tanque só."
- **Take (rascunho):** "Sugestão sem uso próprio: nota 4,7 com 235 avaliações (consulta via agregador, dados podem estar desatualizados)."
- **Pendência:** confirmar ASIN, preço e nota direto na Amazon antes de publicar; comparar preço real com os dois concorrentes citados.

## 3. Disponibilidade dos produtos já publicados

**Não verificado nesta rodada.** Os ~29 produtos / ~37 hrefs (contando variantes `alt`) do `consts.ts` não puderam ser abertos — ver bloqueio de rede no topo deste documento. Nenhum deve ser considerado "OK" nem "com problema" a partir desta pesquisa; é dado ausente, não confirmação de saúde do link. Recomenda-se rodar essa checagem manualmente ou numa rodada futura com os domínios liberados.

## 4. Resumo

- **Picks propostos:** 1 (Caixa de som JBL Go 4) — condicional à verificação manual.
- **Deals propostos:** 1 (Umidificador G-Tech Allergy Free) — condicional à verificação manual.
- **Descartados:** 6 (ver tabela acima), além de um grupo de skincare fora de propósito.
- **Produtos existentes verificados quanto à disponibilidade:** 0 de ~29 — bloqueado por política de rede do ambiente (ver aviso no topo).
- **Ação recomendada antes de qualquer merge:** nenhum dos 2 candidatos (pick/deal) deve entrar no site sem confirmação manual do link, preço, nota e nº de avaliações direto na Amazon/Mercado Livre, já que nenhum dado aqui vem da página oficial do produto.
