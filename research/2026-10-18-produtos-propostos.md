# Pesquisa semanal de produtos — 2026-10-18

> Rascunho gerado automaticamente para revisão manual do dono do site. **Nada aqui foi
> aplicado a `src/consts.ts`.** Nenhum produto deve ir ao ar sem checagem manual —
> ver aviso de limitação técnica logo abaixo.

## ⚠️ Limitação técnica desta execução (leia antes do resto)

Nesta sessão, a ferramenta de leitura de página (WebFetch) falhou com erro de DNS
(`ENOTFOUND`) para **qualquer** host testado, incluindo `amazon.com.br`,
`mercadolivre.com.br` e até `google.com` — ou seja, não é um bloqueio específico contra
a Amazon por compliance, é o acesso à rede deste ambiente que parece estar configurado
em modo restrito (allowlist) sem esses domínios liberados. Na prática isso significa
que, nesta execução:

- **Não foi possível abrir nenhuma página de produto na Amazon** para confirmar preço,
  nota e nº de avaliações diretamente na fonte. Os dados dos candidatos abaixo vêm de
  buscas na web (WebSearch) que citam números coletados de agregadores (Buscapé, Zoom)
  que por sua vez espelham avaliações da Amazon — é um sinal indireto, não a página
  oficial.
- **Não foi possível checar a disponibilidade dos ~20 produtos já publicados** (os
  `href` em `consts.ts`), porque isso também dependia de WebFetch abrindo
  `amazon.com.br` e `meli.la`/`mercadolivre.com.br`.
- Recomendo revisar o acesso de rede do ambiente (nível "Allowed domains"/Custom no
  menu do ambiente) e liberar `amazon.com.br` e `mercadolivre.com.br` para que a
  próxima execução consiga de fato confirmar preço/nota/disponibilidade na página real,
  como o processo pede.

Os candidatos abaixo passaram pela etapa de descoberta via WebSearch (permitida e
usada normalmente, sem scraping de categoria), mas a etapa de confirmação individual
via WebFetch **não rodou**. Tratem os números como indicativos, a confirmar
manualmente antes de publicar qualquer um como `pick`.

---

## 1. Candidatos novos

### 1.1 Afiador de Facas e Tesouras Mor — Linha do Assador (23cm x 8,5cm) — **pick**

- **Categoria:** cozinha
- **Preço aproximado:** R$ 41–46 (variação entre fontes/datas)
- **Nota/avaliações (via agregadores):** ~4,6, citado consistentemente em ~21 mil
  avaliações em mais de uma fonte — volume alto e recorrente nas buscas, inclusive
  descrito por um guia como disputando "o lugar de mais vendido" da categoria na Amazon.
- **Por que pick (regra 1 + regra 2):** faca cega é um problema real e recorrente — todo
  mundo sente na faca que não corta mais, e o afiador resolve isso em segundos, sem
  trocar de faca nem levar ao mercado pra afiar. Não há concorrente direto já cadastrado
  em `cozinha` (nenhum afiador de facas no site).
- **Pitch (rascunho):** "Faca que não corta mais faz você forçar, errar o corte e demorar
  o dobro pra fazer qualquer receita. Em poucos segundos nas ranhuras certas, a faca
  volta a cortar — sem comprar faca nova nem esperar afiador profissional."
- **Take (rascunho):** "Um dos afiadores manuais mais citados entre os mais vendidos da
  categoria na Amazon Brasil, com nota em torno de 4,6 e um volume de avaliações que
  passa de 20 mil somando os relatos encontrados — confirmar nota e nº exato direto na
  página antes de publicar."
- **Pendência:** não consegui abrir a página exata na Amazon (WebFetch bloqueado) para
  obter o link `/dp/` e os números exatos. Buscar manualmente "Afiador De Facas E
  Tesouras Mor Linha Do Assador" na Amazon antes de publicar.

### 1.2 Suporte Veicular Magnético Gshield Tank Car (6 ímãs) — **pick**

- **Categoria:** carro
- **Link candidato:** `https://www.amazon.com.br/Suporte-Veicular-Tank-Car-Im%C3%A3s/dp/B07DD1JR2R`
  (encontrado via WebSearch, não confirmado por WebFetch nesta execução)
- **Preço aproximado:** R$ 80–93
- **Nota/avaliações:** ~4,5 com 476 avaliações, vendido e entregue por Amazon Fulfillment
  segundo a página da loja da marca.
- **Por que pick (regra 1 + regra 6):** celular caindo do suporte ou ficando preso na mão
  enquanto dirige é um problema recorrente de segurança e praticidade; a categoria
  `carro` ainda não tem nenhum suporte de celular cadastrado, então não é duplicata.
- **Pitch (rascunho):** "Celular no colo ou escorregando do porta-objetos enquanto você
  dirige é risco e distração. Os 6 ímãs do Tank Car prendem o aparelho de verdade, até em
  estrada ruim, sem precisar tirar a mão do volante pra reposicionar."
- **Take (rascunho):** "Nota 4,5 com 476 avaliações na Amazon, com envio pela própria
  Amazon — volume consistente pra um suporte magnético, categoria onde os modelos mais
  baratos têm queixa recorrente de o imã não aguentar a trepidação do carro."
- **Atenção ao comprar:** precisa de capinha com placa metálica ou celular compatível com
  fixação magnética; vale deixar isso explícito no "take" ou em observação, como o site
  já faz em outros produtos (ex: escova secadora 127V).

### 1.3 Caixa de Som Bluetooth JBL Go Essential (à prova d'água) — **pick**

- **Categoria:** eletrônicos
- **Preço aproximado:** R$ 219,90 (menor preço encontrado)
- **Nota/avaliações:** ~4,7 com 950 avaliações — a mais bem avaliada entre os modelos com
  volume relevante de avaliações encontrados na pesquisa.
- **Por que pick (regra 1 + regra 2):** resolve o problema concreto de som ruim/baixo do
  alto-falante do celular em qualquer lugar (cozinha, banho, área externa), com
  resistência à água real (IPX67 na linha Go Essential) — não é só mais um item de
  prateleira, é o tipo de coisa que substitui "colocar o celular encostado num copo" como
  solução improvisada. Categoria `eletronicos` não tem nenhuma caixa de som cadastrada
  (tem fones, power banks, filtro de linha, escovas) — sem duplicata.
- **Pitch (rascunho):** "Som de celular não aguenta banho, cozinha com água ligada nem
  quintal. A Go Essential é compacta, à prova d'água de verdade e toca o dia todo sem fio
  — resolve sem comprar caixa grande que você não vai carregar."
- **Take (rascunho):** "Nota 4,7 com 950 avaliações entre os modelos pesquisados — a maior
  combinação de nota e volume da categoria caixa de som à prova d'água, de marca com
  histórico (JBL já está no site nos fones)."

### 1.4 Lanterna Tática LED Recarregável USB-C com Zoom (ASIN B0D932RGB2) — **deal**

- **Categoria:** casa
- **Preço:** não confirmado (variação ampla entre genéricos, de ~R$20 a ~R$60)
- **Nota/avaliações:** 4,6 com 74 avaliações — abaixo do piso de confiança (~50-100) que o
  dono do site pede pra fechar como `pick` forte; é uma nota boa mas com volume ainda
  modesto comparado aos best-sellers de outras categorias do site (ex: filtro de linha com
  12 mil avaliações).
- **Por que deal, não pick (regra 4):** falta de luz é problema real e recorrente no
  Brasil, mas a evidência de qualidade desse ASIN específico ainda é mediana — há vários
  concorrentes genéricos quase idênticos com avaliações entre 2 e 90, o que sugere
  mercado fragmentado sem um "vencedor" claro ainda.
- **Pitch (rascunho, se decidir publicar):** "Luz que já vem carregada e liga na hora da
  queda de energia, sem precisar de pilha — tamanho de bolso pra deixar na gaveta da
  cozinha ou no carro."
- **Take (rascunho):** "Nota 4,6, mas com apenas 74 avaliações — confirmar se o volume de
  vendas realmente sustenta a nota antes de considerar como indicação forte; por ora
  entra só como oferta, não como seleção."

### 1.5 PETGEEK — Dispensador automático de petiscos com controle remoto — **deal**

- **Categoria:** pet
- **Link candidato (Amazon.com.br, via busca):** ASIN `B09VSBCBHW` — nota 4,2 com 371
  avaliações, "Ranking dos mais vendidos Nº 1.972 em Potes e Tigelas para Cães" segundo o
  snippet de busca. *Atenção: uma segunda busca retornou um ASIN diferente
  (`B09LHG8VRN`) para o que parece ser o mesmo produto em loja Amazon de outro país — há
  risco de estar vendo listagens diferentes. Confirmar qual é a listagem BR real antes
  de publicar.*
- **Por que deal, não pick (regra 3 + necessidade de confirmação):** o site já tem o
  "Alimentador Inteligente Newpet" na categoria pet, que resolve a alimentação
  regular por app. O PETGEEK é um dispensador de petisco pontual/treino com controle
  remoto — não é duplicata direta (funções diferentes: refeição vs. petisco de reforço),
  mas também não tem vantagem evidente sobre o Newpet pra quem já tem solução de
  alimentação; e a incerteza do ASIN pesa contra classificar como pick.
- **Pitch (rascunho):** "Treino e mimo mesmo fora de casa: libera petisco pelo controle a
  distância pra reforçar comportamento bom na hora certa, sem precisar estar ao lado do
  pet."
- **Take (rascunho):** "Nota 4,2 com 371 avaliações na listagem que encontramos — volume
  razoável, mas confirmar o ASIN exato da loja Brasil antes de publicar, já que a busca
  trouxe referências conflitantes."

### 1.6 Pet Ball Medium — Pet Games (comedouro/brinquedo dispenser de ração) — **deal**

- **Categoria:** pet
- **Link candidato:** `https://www.amazon.com.br/Comedouro-Brinquedo-Pet-M%C3%A9dioium-Games/dp/B07YBNXFFF`
  (via busca, não confirmado por WebFetch)
- **Preço aproximado:** R$ 59,89
- **Nota/avaliações:** sinal indireto de ~4,5 com a linha somando ~1.400 avaliações
  entre tamanhos, mas não consegui confirmar quantas avaliações pertencem especificamente
  ao tamanho Medium — por isso não entra como pick.
- **Por que é relevante (regra 2):** cão/gato que come rápido demais ou fica entediado em
  casa é causa recorrente de problema real (vômito, ganho de peso, ansiedade,
  comportamento destrutivo) — a bola de ração em formato de comedouro lento ataca
  exatamente isso, dentro da proposta "resolve simples" da categoria pet.
- **Sinalização de compareGroup (regra 7):** se tanto o PETGEEK (1.5) quanto este Pet Ball
  entrarem no site, os dois competem pelo mesmo tipo de necessidade ("manter o pet
  ocupado/recompensado sem o tutor por perto") — sugiro `compareGroup: 'dispenser-petisco'`
  nos dois, igual ao padrão já usado em `power-bank`, `fone-bluetooth` etc.
- **Pitch (rascunho):** "Cachorro que devora a ração em segundos engasga, vomita e volta a
  pedir comida cedo demais. A bola de 4 aberturas obriga o bicho a 'trabalhar' pela ração,
  deixando ele ocupado por mais tempo e comendo mais devagar."
- **Take (rascunho):** "Linha com nota em torno de 4,5 somando avaliações em diferentes
  tamanhos — confirmar o número exato de avaliações do tamanho Medium (M, 15-25kg) na
  página antes de publicar como indicação forte."

---

## 2. Candidatos pesquisados e descartados

| Candidato | Categoria | Motivo do descarte |
|---|---|---|
| Carregador veicular turbo 60W USB-C PD + QC (vários ASINs genéricos) | carro | Mercado pulverizado de marcas genéricas quase idênticas; não encontrei nota/nº de avaliações confiável pra nenhum ASIN específico — evidência insuficiente pra classificar como pick ou deal (regra 4). |
| Organizador de cabos para mesa/escritório | casa/eletrônicos | Nenhuma fonte aponta um "vencedor" claro; os achados são de lojas diferentes (Terabyteshop, Mercado Livre, Ugreen) sem avaliação consolidada. Sem evidência, sem indicação. |
| Escova/luva removedora de pelo de pet para sofá | pet | Avaliações mistas e volume baixo nos modelos encontrados (14 a 44 avaliações, notas entre 3,8 e 4,5); vários relatos de "só funciona de um lado" ou "não funciona pra tirar pelo do próprio animal". Evidência fraca — regra 4. |
| Umidificador de ar portátil (mini USB, genéricos) | casa | Os modelos USB mais baratos não têm avaliação consolidada nos agregadores; o único com avaliação forte (Mondial Comfort Air 2) não é portátil e já tem reclamação de limpeza difícil. Sem um candidato que combine portabilidade + evidência forte. |
| Suporte celular carro — modelos "Black Fix" e similares baratos (ímã único) | carro | Nota baixa (3,5) com queixa recorrente de o imã não aguentar trepidação — exatamente o tipo de "falso barato" que a categoria carro pede pra evitar (ver `page.checks` de carro no `consts.ts`). |
| Amolador elétrico de facas (genéricos) | cozinha | Preço mais alto sem evidência de vantagem real sobre o afiador manual Mor para o uso doméstico comum — risco de ser só mais item de prateleira caro pra resolver o mesmo problema que o manual já resolve bem. |
| Café em pó / cápsulas genéricas, organizadores de geladeira genéricos | cozinha | Consumíveis genéricos sem resolver um problema específico além do que já está coberto (o site já tem potes herméticos e cápsulas Dolce Gusto) — regra 2. |

Não encontrei candidato novo pra **estética** nesta rodada: a categoria no site é
estruturada em torno de um produto próprio (Protocolo VAGA) e não de indicação de
afiliado Amazon, então não faz sentido forçar um produto físico ali sem ligação com a
dor de agenda vazia que a categoria resolve.

---

## 3. Disponibilidade dos produtos já publicados

**Não verificado nesta execução.** A checagem pedida (abrir cada `href` de
`src/consts.ts` com um WebFetch leve pra confirmar que a página carrega e não mostra
"indisponível") depende de acesso a `amazon.com.br` e `mercadolivre.com.br`/`meli.la`,
que falhou com erro de DNS para todo host testado nesta sessão (ver aviso no topo do
documento). Nenhum dos ~22 produtos/37 links (contando variantes `alt`) foi checado.

Lista completa dos links que ficam pendentes de checagem manual (ou numa próxima
execução com rede liberada):

- `estetica`: link interno (`/calculadora-agenda-vazia/`), não é Amazon — não afetado
  pelo problema de rede, mas também não foi verificado nesta rodada por estar fora do
  escopo (produto próprio).
- `eletronicos`: iClamper (dp/B0D8V3QLDD), Power Bank Audiophile (meli.la/2TYLNx2),
  Power Bank i2GO (meli.la/2fftTns + alt meli.la/2zhLnsz), Escova Secadora 3x1
  (meli.la/2E5qDZW), Escova Rotativa Mondial (meli.la/1y6VpXF), Fone Philips
  (dp/B0DVMQVVDY), Fone JBL Tune 520BT (dp/B0C4CCMNQT).
- `cozinha`: Potes Herméticos (dp/B09XJL4B9H + alt meli.la/2wQBQyf), Sanduicheira
  (dp/B0CDJ4L7CZ + alt dp/B0CDJ5DQ7M), Copo Térmico (dp/B0D9GDTM67), Suporte Esponja
  (dp/B0FM6MNDKH), Peneiras RJI (dp/B0G1L62P2J), Panela de Pressão (dp/B0CD4SCM33),
  Air Fryer Mondial (dp/B0BZJDLT6Z + alt meli.la/25Z84td), Cafeteira Dolce Gusto
  (dp/B0BMW95J7F + alt dp/B07H45XJ2D), Cápsulas Dolce Gusto (dp/B07H45XJ2D + alt
  dp/B0BMW95J7F), Pilão GODREAM (dp/B0H3NTKV23), Formas de Gelo (dp/B0CCB3HLGK), Tábua
  de Descongelar (meli.la/2yAuVW5 + alt meli.la/2ZpQzdc), Kit Utensílios Silicone
  (meli.la/2Sng2x9), Kit 19 Peças (meli.la/1K2xVm4), Cortador Picador (meli.la/23h98yo),
  Kit 2 Fatiadores (meli.la/2wv6YAE).
- `casa`: Sacos a Vácuo (dp/B0H5D2Z4P4), Lixeira Powermaid (dp/B0CXVQRPK7), Varal de Chão
  (dp/B0C1HNKQLR), Aspirador Vertical (meli.la/1ZMBUHk + alt meli.la/1SnmUPX), Robô
  Xiaomi (meli.la/2NviqeP), Mop (meli.la/2ToaEpP), Vassoura Rodo (meli.la/137gUnK).
- `carro`: Kit Vonixx (dp/B0F9Z3D8TZ), Câmera de Ré (meli.la/2BG7B8e), Aspirador
  Automotivo WAP (dp/B0CLDRS18S).
- `pet`: Tapete Higiênico Petlike (dp/B07PZWDZT9), Areia Higiênica Viva Verde
  (dp/B07YP1K82Z), Alimentador Newpet (meli.la/1JqSU2h), Bebedouro Fonte
  (dp/B0DGTKZ2S1).

Nenhum alerta de indisponibilidade pode ser dado nesta rodada — recomendo que o dono do
site rode essa checagem manualmente (ou peça pra rodar de novo com a rede liberada) antes
de confiar que todos os 22 produtos ainda estão no ar.

---

## 4. Resumo

- **Picks propostos:** 3 (Afiador de Facas Mor, Suporte Veicular Gshield Tank Car, Caixa
  de Som JBL Go Essential) — todos com evidência razoável, mas **sem confirmação direta
  na página da Amazon** nesta execução; tratar como pré-seleção, não decisão final.
- **Deals propostos:** 3 (Lanterna tática recarregável, PETGEEK dispensador de petiscos,
  Pet Ball Medium) — evidência mediana ou com pendência de confirmação de ASIN/contagem
  de avaliações.
- **Descartados nesta rodada:** 6 candidatos, com motivo registrado na tabela da seção 2.
- **Alertas de disponibilidade nos produtos existentes:** 0 confirmados — a checagem não
  rodou por limitação de rede do ambiente (ver aviso no topo).
