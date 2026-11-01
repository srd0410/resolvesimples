# Pesquisa semanal de produtos — 2026-11-01

## ⚠️ Aviso importante sobre esta rodada

O ambiente desta sessão automatizada teve acesso de rede **bloqueado** para
`www.amazon.com.br` e `meli.la` (erro `getaddrinfo ENOTFOUND` em toda tentativa de
`WebFetch`). Isso impediu duas partes da tarefa original:

1. **Confirmação direta na Amazon** (preço, nota, nº de avaliações, disponibilidade) dos
   candidatos a produto novo — só foi possível usar dados de fontes secundárias
   (Buscapé, Zoom, Mercado Livre, blogs de comparação) que **espelham** avaliações da
   Amazon, mas não são a fonte primária.
2. **Checagem de disponibilidade** dos ~39 links já publicados em `src/consts.ts` — não
   pôde ser feita nesta rodada (ver seção 3).

**Para rodadas futuras resolverem isso**: liberar `www.amazon.com.br` e `meli.la` nas
configurações de rede do ambiente (menu do ambiente na barra do título da sessão → Edit →
Network access → Allowed domains). Veja
https://code.claude.com/docs/en/cloud-environments#network-access.

Como consequência, nenhum item abaixo está classificado como `pick` ou `deal` definitivo
sem ressalva — todos os candidatos levam a marca **"pendente de confirmação direta na
Amazon"** e precisam ser verificados manualmente antes de entrar em `consts.ts`.

---

## 1. Candidatos pesquisados e descartados

Pesquisa feita via `WebSearch` (não houve navegação em massa nem scraping de categorias —
só buscas por termo, conforme exigido pelo Operating Agreement da Amazon). Para cada
candidato abaixo, a evidência encontrada foi fraca, inconsistente entre fontes, ou sem um
produto específico que se destacasse — por isso, seguindo a regra 4 (evidência fraca nunca
vira `pick`) e a regra 2 (só entra o que resolve problema real com confiança), todos foram
**descartados** nesta rodada.

| Candidato | Categoria | Por que foi descartado |
|---|---|---|
| Suporte de celular para carro (ventosa/magnético) | carro | Todas as marcas encontradas (Exbom, Black Fix, suporte universal retrovisor) têm nota entre 3,8 e 3,9 — mediana, sem nenhum modelo se destacando. Regra 3/4: sem vantagem clara e sem evidência forte, não justifica nem `deal`. |
| Carregador de parede turbo USB-C 30W | eletronicos | Volume de avaliações encontrado é mínimo (Baseus: 10 avaliações; Motorola e a'GOLD: nenhuma avaliação encontrada). Regra 4: evidência fraca demais. |
| Escova/luva removedora de pelo de pet (sofá/carro) | pet | O problema é real e recorrente (pelo de animal em estofado e carro), mas nenhum modelo brasileiro encontrado tem avaliação forte: Clink 3,8; Chalesco só 4 avaliações; Germanhart sem avaliação; Fur Wizard só apareceu em promoção expirada sem dado de nota. Vale revisitar quando aparecer um modelo com volume de avaliação sólido. |
| Caixa organizadora de porta-malas dobrável | carro | Preços e notas aparecem fragmentados entre vendedores do Mercado Livre (4,6 a 4,9, mas com poucas avaliações cada — 7 a 106). Nenhum vendedor/produto único se destacou com volume alto. |
| Jarra filtrante de água | cozinha | Não encontrei nenhum dado específico do mercado brasileiro (resultados eram de Amazon Espanha/Portugal). Sem evidência local, não dá pra avaliar. |
| Comedouro lento anti-engasgo para cães | pet | Problema real (cão que come rápido demais, risco de engasgo/torção gástrica), mas todos os modelos encontrados (SodaPup, Outward Hound, Meau, Furacão Pet) têm entre 1 e 5 avaliações — muito abaixo do piso de ~50-100 da regra 4. |

Nenhum desses deve ser readicionado sem que uma busca futura encontre um produto
específico com avaliação forte (~100+) e nota consistente entre fontes.

---

## 2. Candidatos com evidência parcial — propostos para revisão manual

Estes dois passaram do filtro inicial (problema real + marca/categoria com histórico de
avaliação razoável), mas **não puderam ser confirmados direto na Amazon** por causa do
bloqueio de rede. Classificação é provisória — o dono do site precisa confirmar preço,
nota e nº de avaliações direto na página do produto antes de considerar publicar.

### 2.1 Mini Processador de Alimentos Black&Decker HC32 (120/130 W)
- **Categoria**: cozinha
- **Classificação provisória**: `pick` (pendente de confirmação direta na Amazon)
- **Preço encontrado (fontes secundárias)**: ~R$ 177,86 (Zoom/Buscapé, média de 40 dias)
- **Evidência**: nota 4,5 com 959 avaliações, segundo Buscapé e Zoom (que agregam
  avaliações de compradores da Amazon). Volume acima do piso de evidência da regra 4.
- **Por que resolve um problema real (regra 2)**: pica cebola, alho e ervas em segundos,
  sem lacrimejar e sem sujar faca + tábua — a tarefa chata que se repete todo dia no
  preparo de qualquer refeição.
- **Atenção — concorrência interna**: o site já tem o "Pilão de Inox com Socador GODREAM"
  (categoria cozinha, hoje classificado como `deal`, só 4 avaliações), que ataca parte do
  mesmo problema (esmagar alho/pimenta) de forma manual. Não são produtos idênticos — o
  processador é elétrico e pica mais tipos de alimento — mas valem um comparativo
  (`compareGroup`) se os dois ficarem no site, para o leitor escolher entre a opção manual
  barata e a elétrica mais versátil.
- **Rascunho de copy**:
  - *pitch*: "Pica cebola, alho e ervas em segundos — sem lacrimejar, sem sujar faca e
    tábua pra uma tarefa que se repete em quase toda refeição."
  - *take*: "Nota 4,5 com 959 avaliações (dado agregado por comparadores que puxam
    avaliação da Amazon) — volume consistente, com elogios recorrentes para triturar
    cebola e alho. Preço e nota precisam ser confirmados direto na página da Amazon antes
    de publicar; o acesso à Amazon ficou bloqueado nesta rodada de pesquisa."

### 2.2 Umidificador de Ar WAP Air Flow 4L (com luminária e difusor de aromas)
- **Categoria**: casa
- **Classificação provisória**: `deal` (pendente de confirmação direta na Amazon —
  evidência inconsistente entre fontes, por isso não chega a `pick`)
- **Preço encontrado (fontes secundárias)**: entre ~R$ 150 e R$ 180 dependendo da loja
  (Extra, Magazine Luiza, Casas Bahia) — preço na Amazon não confirmado.
- **Evidência (inconsistente)**: uma fonte (guia de compra "melhor de 2026") cita nota 4,6
  com quase 19,8 mil avaliações; outra (Magazine Luiza) mostra nota 4,7 com 630
  avaliações para um modelo de 4L. A divergência de volume é grande demais pra confiar
  sem checar a página real da Amazon — por isso fica em `deal`, não `pick`, até
  confirmação.
- **Por que resolve um problema real (regra 2)**: ar seco de ambiente com
  ar-condicionado ou clima seco resseca garganta, nariz e pele à noite — incômodo
  recorrente, não só estético.
- **Observação**: a marca WAP já está no site como `pick` em "carro" (Aspirador
  Automotivo WAP Car 12V2), o que dá algum histórico de confiança com a marca, mas não
  substitui confirmar o produto específico.
- **Rascunho de copy**:
  - *pitch*: "Ar seco do ar-condicionado ressecando garganta e pele à noite? Mantém a
    umidade do quarto sozinho, sem precisar lembrar de nada."
  - *take*: "Avaliações divergem entre fontes (uma cita nota 4,6 com quase 19,8 mil
    avaliações; outra, 4,7 com 630) — confirmar direto na Amazon antes de publicar. A
    marca WAP já é indicada no site em outra categoria, com histórico positivo."

---

## 3. Disponibilidade dos produtos já publicados em `consts.ts`

**Não verificada nesta rodada.** Todas as 39 URLs de produto (Amazon + Mercado Livre)
listadas em `src/consts.ts` falharam no `WebFetch` com `getaddrinfo ENOTFOUND` — bloqueio
de rede do ambiente desta sessão para `www.amazon.com.br` e `meli.la`, não um problema das
páginas em si. Nenhum produto pôde ser confirmado como disponível ou indisponível.

Lista completa (para referência e para a próxima rodada confirmar, uma vez liberado o
acesso de rede):

**Eletrônicos**: Filtro de Linha iClamper Energia 5 Tomadas · Power Bank Audiophile
10.000 mAh Turbo · Power Bank i2GO Turbo 20.000 mAh · Escova Secadora 3 em 1 Alisadora ·
Escova Rotativa Mondial Cerâmica · Fone Philips TWS TAT1109BK · Fone JBL Tune 520BT

**Cozinha**: Kit 12 Potes Herméticos Electrolux · Sanduicheira Elétrica Cadence Click ·
Copo Térmico 1,18L Aço Inox · Suporte Organizador de Esponja Aço Carbono · Kit 4 Peneiras
RJI Utilidades · Panela de Pressão Tramontina Vancouver · Fritadeira Air Fryer Mondial
Oven 12L · Cafeteira Arno Nescafé Dolce Gusto Genio S · Nescafé Dolce Gusto Espresso 10
Cápsulas · Pilão de Inox com Socador GODREAM · Kit 4 Formas de Gelo Autorient · Tábua de
Descongelar Rápido Moderna Mix · Kit 12 Utensílios de Cozinha Silicone Aristus · Kit 19
Peças Utensílios de Cozinha · Cortador Picador Fatiador 14 em 1 · Kit 2 Fatiadores Kitop
Corta-tudo

**Casa**: Kit 10 Sacos a Vácuo 50x60cm · Lixeira Powermaid Retangular Pedal Inox · Super
Varal de Chão 3 Andares · Aspirador Vertical Electrolux Ergorapido ERG019 · Robô
Aspirador Xiaomi Vacuum S40 · Mop The Black Tools 360° TBBL04 · Vassoura Rodo Mágico
Silicone UTZ

**Carro**: Kit Shampoo V-Floc + Cera Vonixx · Câmera de Ré Borboleta HD Wmix · Aspirador
de Pó Automotivo WAP Car 12V2 · Compressor de Ar Elétrico Vonder CAV 150 · Kit Ferramenta
Reparo de Pneu Pedal Pulse

**Pet**: Petlike Ultrapads Tapete Higiênico · Viva Verde Areia Higiênica Biodegradável ·
Alimentador Inteligente Newpet NP1322 · Bebedouro Fonte para Gatos Inox 3L

**Recomendação**: liberar `www.amazon.com.br` e `meli.la` no acesso de rede do ambiente e
rodar a checagem de disponibilidade de novo — é uma checagem pontual, leve (1 fetch por
produto), compatível com o Operating Agreement da Amazon.

---

## 4. Resumo

- Candidatos pesquisados: 8 (6 descartados por evidência fraca; 2 com evidência parcial,
  propostos para revisão manual — nenhum `pick` ou `deal` confirmado).
- Produtos já publicados com alerta de disponibilidade: **0 confirmados** — checagem não
  pôde ser executada (bloqueio de rede); todos os 39 ficam como "não verificado".
- Ação recomendada ao dono do site: (1) decidir se algum dos 2 candidatos da seção 2 vale
  confirmar manualmente e entrar no site; (2) liberar acesso de rede do ambiente a
  `amazon.com.br`/`meli.la` para a próxima rodada rodar a checagem completa de
  disponibilidade e a confirmação direta dos candidatos.
