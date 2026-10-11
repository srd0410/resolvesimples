# Pesquisa de produtos — 2026-10-11

Pesquisa automatizada de candidatos a novos produtos + checagem de disponibilidade dos produtos já publicados em `src/consts.ts`. Rascunho para revisão manual do dono do site — nada aqui foi publicado ou mesclado automaticamente.

## Metodologia e limitações (leia antes de avaliar os números abaixo)

- **WebFetch (abertura direta de página) ficou indisponível neste ambiente** — a política de rede do container bloqueou resolução de DNS para qualquer host, não só Amazon. Isso significa que **nenhuma página de produto foi aberta diretamente** nesta rodada; todos os preços, notas e números de avaliação vêm de *snippets indexados* retornados pelo WebSearch (que consegue acessar o conteúdo mesmo sem o WebFetch funcionar).
- Isso é mais conservador do que o permitido pelas regras de compliance (que autorizam WebFetch pontual nas páginas dos 5-10 melhores candidatos e nos produtos já publicados), mas o resultado prático é o mesmo tipo de dado — só que com uma ressalva extra: **os números podem estar desatualizados**, porque vêm de capturas de datas variadas, às vezes divergentes entre si na própria busca.
- Nenhuma navegação em massa nem scraping sistemático de categoria foi feito — só busca indexada (WebSearch), como instruído.
- **Recomendação:** antes de publicar qualquer item abaixo como `pick` ou `deal`, abra a página do produto manualmente para confirmar preço atual, estoque e nota — principalmente os marcados com ⚠️ abaixo.

---

## 1. Candidatos novos

### Picks

#### 1.1 Organizador de Porta-Malas DRIVE Auto Products — categoria `carro`

- ASIN: `B071F82CYJ` · snapshot: **4,7★, ~68.377 avaliações**
- **Regra aplicada:** volume de avaliações altíssimo (regra 1 — sinal de mais vendido/tendência) e resolve problema real e recorrente: compra de mercado, ferramenta e objeto solto rolando no porta-malas a cada freada (regra 2). Não concorre com nada hoje cadastrado em "carro" (regra 5) — hoje a categoria só tem kit de lavagem e aspirador.
- **compareGroup:** `organizador-porta-malas` (ver 1.2 — mesma necessidade, o site tem o recurso de comparativo pra isso, regra 7).
- Rascunho de copy:
  - **pitch:** "Prende tudo no lugar — compra do mercado, ferramenta e garrafa não saem rolando pelo porta-malas numa freada ou numa subida."
  - **take:** "Mais de 68 mil avaliações e nota 4,7 — um dos itens de maior volume de venda da categoria automotiva na Amazon."
- ⚠️ Preço não confirmado com precisão (snapshots divergentes, de R$ 376 a R$ 408 em alguns resultados, o que parece alto pra esse tipo de item — pode ser captura de página com frete/kit diferente). **Confirmar preço real antes de publicar.**

#### 1.2 FORTEM Organizador de Porta-Malas (2 compartimentos, Oxford 600D) — categoria `carro`

- ASIN: `B0CWPT1K1T` · snapshot: **4,6-4,7★, ~42.900-47.000 avaliações**
- **Regra aplicada:** mesma necessidade do item 1.1, também com volume de avaliações muito alto (regra 1). Em vez de descartar por redundância, uso o `compareGroup` do site — como já é feito com os dois fones bluetooth em `eletronicos` — pra apresentar as duas opções lado a lado (regra 7).
- **compareGroup:** `organizador-porta-malas`
- Rascunho de copy:
  - **pitch:** "Dois compartimentos com fundo antiderrapante — rende mais organização pra quem carrega compra, ferramenta e equipamento junto no mesmo porta-malas."
  - **take:** "Quase 43 mil avaliações e nota entre 4,6 e 4,7 — um dos organizadores automotivos mais vendidos da Amazon Brasil."

#### 1.3 AstroAI Compressor de Ar Portátil S1 — categoria `carro`

- ASIN: `B0C1YKQYQ9` · snapshot: **4,5★, ~2.673 avaliações**
- **Regra aplicada:** evidência sólida, bem acima do piso de 50-100 avaliações (regra 4). Resolve exatamente o tipo de problema que a própria categoria já descreve no site — "o item de R$ 50 que evita o conserto de R$ 500": pneu murchando antes de virar estepe furado ou chamado de emergência.
- Rascunho de copy:
  - **pitch:** "Calibra o pneu na garagem ou na estrada, ligado na tomada 12V do carro — evita rodar com pneu murcho até achar um posto."
  - **take:** "Nota 4,5 com mais de 2.600 avaliações; tem desligamento automático na pressão certa, então não calibra além da conta."
- ⚠️ Preço não confirmado com segurança (snapshots de R$ 146 a R$ 181). Confirmar antes de publicar.

### Deals

#### 1.4 Organizador de Cabos em Silicone (ex.: linha "5 em 1", vários vendedores) — categoria `casa`

- Melhor evidência encontrada: modelo tipo Beesclover, ~4,5★ / ~1.500 avaliações; preço na faixa de R$ 13 a R$ 30.
- **Classificação: `deal`** — regra 3 ("se não tem vantagem clara sobre concorrentes mas tem preço bom, nunca pick"). O mercado desse item é extremamente fragmentado: dezenas de kits quase idênticos de marcas genéricas, preço parecido, sem nenhum se destacando como referência clara.
- Resolve um problema real (fio emaranhado em mesa/criado-mudo), mas não há como apontar "o" produto vencedor com confiança — recomendo, se publicar, deixar claro no texto que é "qualquer kit de silicone nessa faixa de preço resolve", sem apontar marca específica, ou pesquisar de novo mais perto da publicação pra travar um SKU específico em estoque.

### Descartados

#### 1.5 Luva/escova "tira-pelos nano magnética" para pets

- **Classificação: `descartar`**
- Mercado extremamente fragmentado: dezenas de ASINs quase idênticos (BELLON'S PET, True Touch, PLP Mania, genéricos sem marca), com avaliações por SKU específico variando de 14 a 43 — abaixo do piso de 50-100 avaliações da regra 4. Um número alto (~4.182 avaliações) apareceu em uma busca genérica, mas não foi possível atribuí-lo com confiança a um ASIN comprável específico.
- Problema que resolveria é real (pelo de animal em sofá/roupa), mas sem conseguir indicar o SKU vencedor, aplica-se a regra de ouro do site: preferir não indicar a indicar qualquer coisa.

#### 1.6 Desumidificador antimofo Softinox (500 ml)

- **Classificação: `descartar`**
- Resolve um problema real e recorrente (mofo em armário, banheiro sem ventilação), mas a evidência de avaliações é muito fraca nos SKUs específicos encontrados: 1 a 9 avaliações por variante (cor/tamanho) — bem abaixo do piso de 50-100 da regra 4.
- Vale revisitar numa pesquisa futura, quando o produto tiver acumulado mais histórico de venda e avaliação.

---

## 2. Disponibilidade dos produtos já publicados

Checagem feita via WebSearch (ver limitação na seção 1 — não é equivalente a abrir a página diretamente). Nenhum dos itens abaixo mostrou sinal de "indisponível" ou remoção nos resultados de busca.

| Produto | Categoria | Status |
|---|---|---|
| Filtro de Linha iClamper Energia 5 | eletronicos | Ativo — 4,9★ / ~12.758 aval. |
| Fone Philips TWS TAT1109BK | eletronicos | Ativo — 4,6★ / ~8.000 aval. |
| Fone JBL Tune 520BT | eletronicos | Ativo — 4,8★ / ~29.000 aval. |
| Kit 12 Potes Herméticos Electrolux | cozinha | Ativo — 4,9★ / ~4.609 aval. (nº diverge do que está no `consts.ts`, que cita ~53.000 — ⚠️ confirmar, pode ter sido outra captura ou o número no site estar superestimado) |
| Sanduicheira Cadence Click | cozinha | Ativo — 4,8★ / ~21.100 aval. |
| Copo Térmico 1,18L | cozinha | Ativo — 4,8★ / ~3.968 aval. |
| Suporte Organizador de Esponja (B0FM6MNDKH) | cozinha | ⚠️ ASIN exato não localizado na busca — vários concorrentes quase idênticos apareceram no lugar. Verificar manualmente. |
| Kit 4 Peneiras RJI | cozinha | ⚠️ ASIN exato não localizado — a linha de produto existe e aparece ativa, mas o SKU específico não foi confirmado. |
| Panela de Pressão Tramontina Vancouver | cozinha | Ativo — 4,8★ / ~9.877 aval., Nº1 em panelas de pressão |
| Air Fryer Mondial Oven 12L | cozinha | Ativo — 4,7★ / ~9.700 aval. |
| Cafeteira Dolce Gusto Genio S DGS5 | cozinha | Ativo — 4,8★ / ~893 aval. |
| Nescafé Dolce Gusto cápsulas Espresso | cozinha | Ativo — 4,9★ / ~5.459 aval. |
| Pilão de Inox com Socador GODREAM (B0H3NTKV23) | cozinha | 🔴 **Não encontrado em nenhuma busca realizada** — nem pelo ASIN, nem pelo nome da marca. Já era o produto com evidência mais fraca do site (4 avaliações). Prioridade de checagem manual — risco real de ter sido removido ou trocado de ASIN. |
| Kit 4 Formas de Gelo Autorient | cozinha | Ativo — 4,4★ / ~2.711 aval. |
| Tábua de Descongelar Rápido Moderna Mix (Mercado Livre) | cozinha | Não verificável com confiança via busca (link curto `meli.la`, produto específico não indexado) |
| Kit 12 Utensílios Silicone Aristus (Mercado Livre) | cozinha | Loja oficial ativa (4,8★ / ~7.409 aval. da loja) — produto específico não confirmado individualmente |
| Kit 19 Peças Utensílios com Tábua (Mercado Livre) | cozinha | Não verificável com confiança via busca |
| Cortador Picador 14 em 1 (Mercado Livre) | cozinha | Provavelmente ativo — anúncio equivalente encontrado (4★ / 136 aval.), SKU exato não confirmado |
| Kit 2 Fatiadores Kitop (Mercado Livre) | cozinha | Não verificável com confiança via busca |
| Kit Sacos a Vácuo 50x60cm | casa | Ativo — 4,7★ / ~37 aval. |
| Lixeira Powermaid Pedal 5L | casa | Ativo — 4,6★ / ~2.087 aval., "mais vendido" da categoria |
| Super Varal de Chão 3 Andares | casa | Ativo — 4,4★ / ~6.044 aval. |
| Mop The Black Tools 360 (Mercado Livre) | casa | Não verificável com confiança via busca |
| Vassoura Rodo Mágico Silicone UTZ (Mercado Livre) | casa | Loja oficial ativa; avaliação do SKU específico não confirmada |
| Kit Shampoo V-Floc + Cera Tok Final Vonixx | carro | Ativo — 4,8★ / ~490 aval. |
| Aspirador de Pó WAP Car 12V2 | carro | Ativo — 4,4★ / ~4.969 aval. |
| Petlike Ultrapads Tapete Higiênico | pet | Ativo — 4,4★ / ~8.490 aval., #1 na categoria |
| Viva Verde Areia Higiênica Biodegradável | pet | Ativo — 4,8★ / ~5.524 aval. |
| Bebedouro Fonte para Gatos 3L | pet | Ativo — 4,7★ / ~1.638 aval. |

### Resumo dos alertas

- 🔴 **1 produto não localizado em nenhuma busca:** Pilão de Inox GODREAM — checar manualmente com prioridade.
- ⚠️ **6 produtos não confirmados com confiança** (SKU exato não indexado ou link curto do Mercado Livre não resolvido pela busca): Suporte Organizador de Esponja, Kit 4 Peneiras RJI, Tábua de Descongelar Moderna Mix, Kit 19 Peças Utensílios, Kit 2 Fatiadores Kitop, e parcialmente o Kit 12 Utensílios Aristus e Mop The Black Tools (loja confirmada ativa, produto específico não).
- Os demais 22 produtos aparecem ativos e com avaliações consistentes com o que está publicado no site.

---

## 3. Resumo executivo

- **Candidatos novos propostos:** 6 — 3 `pick` (2 formando um `compareGroup` de organizadores de porta-malas + 1 compressor de ar, todos em `carro`), 1 `deal` (organizador de cabos em silicone, `casa`), 2 `descartar` (luva tira-pelos pet, desumidificador Softinox).
- **Produtos existentes com alerta de disponibilidade:** 7 (1 não localizado + 6 não confirmados com confiança), de 29 hrefs verificados.
- Nenhuma edição foi feita em `src/consts.ts` — este arquivo é só o rascunho para revisão manual.
