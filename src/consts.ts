export const SITE = {
  name: 'resolvesimples',
  url: 'https://www.resolvesimples.com.br',
  tagline: 'Soluções testadas para dores reais do dia a dia',
  email: 'contato@resolvesimples.com.br',
  gaMeasurementId: 'G-W4380N7VJ9',
};

// ---------------------------------------------------------------------------
// Produtos indicados (links de afiliado).
// Enquanto a lista de uma categoria estiver vazia, a página mostra o estado de
// seleção em andamento e converte para o e-mail. Assim que um produto entra
// aqui, o bloco de produtos aparece sozinho — nenhuma outra edição necessária.
// ---------------------------------------------------------------------------
export interface Product {
  name: string;
  platform: 'Hotmart' | 'Eduzz' | 'Kiwify' | 'Amazon' | 'Mercado Livre' | 'Shopee';
  price: string;
  pitch: string;
  /** De onde vem a confiança: uso próprio, teste, ou análise. Sempre explícito. */
  take: string;
  href: string;
  /** 'deal' = preço bom mas sem vantagem clara sobre concorrentes; fica fora d'"A seleção". Default: pick. */
  kind?: 'pick' | 'deal';
  /**
   * true = produto próprio da Resolve Simples, não indicação de afiliado.
   * Muda o selo, o texto do card e o link (que deixa de ser rel="sponsored",
   * porque não há comissão de terceiro envolvida). Ver aviso no rodapé.
   */
  own?: boolean;
  /** Link secundário opcional (ex: variante de voltagem, produto complementar). */
  alt?: { label: string; href: string };
  /** Nota da Amazon (0-5), quando conhecida — usada no comparativo e na busca. */
  rating?: number;
  /** Nº de avaliações da Amazon, quando conhecido. */
  reviews?: number;
  /** Posição no Ranking Geral do site (1 = melhor). Só produtos 'pick' entram no ranking. Atualizado manualmente a cada produto novo. */
  globalRank?: number;
  /** Agrupa produtos do mesmo tipo (ex: 'fone-bluetooth') para gerar comparativo automático na página da categoria. */
  compareGroup?: string;
}

export function slugifyProduct(name: string) {
  return name
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// ---------------------------------------------------------------------------
// Categorias do portal. Cada uma vira uma página em /<slug>/ gerada por
// src/pages/[slug]/index.astro. A home e o rodapé leem desta lista.
// ---------------------------------------------------------------------------
export interface Offer {
  slug: string;
  /** Rótulo curto usado no card e no rodapé */
  niche: string;
  /** Título do card na home */
  title: string;
  /** Texto do card na home */
  painPoint: string;
  icon: string;
  page: {
    eyebrow: string;
    h1: string;
    lede: string;
    problemTitle: string;
    problemBody: string[];
    /** O que conferimos antes de indicar qualquer coisa nesta categoria */
    checks: string[];
    products: Product[];
  };
}

const icons = {
  calendar:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  chip:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3"/></svg>',
  pan:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11h13a0 0 0 0 1 0 0v2a5.5 5.5 0 0 1-5.5 5.5h-2A5.5 5.5 0 0 1 3 13v-2Z"/><path d="M16 12h5M18.5 9.5 21 12l-2.5 2.5"/></svg>',
  home:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/></svg>',
  car:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v2.5M20 16v2.5"/><path d="M3 16v-3.2L5 8h14l2 4.8V16H3Z"/><circle cx="7.5" cy="16" r="1.6"/><circle cx="16.5" cy="16" r="1.6"/></svg>',
  paw:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="6.5" cy="10" rx="2" ry="2.6"/><ellipse cx="17.5" cy="10" rx="2" ry="2.6"/><ellipse cx="10" cy="5.8" rx="1.9" ry="2.5"/><ellipse cx="14" cy="5.8" rx="1.9" ry="2.5"/><path d="M12 13c2.6 0 4.6 1.7 4.6 3.7 0 1.7-1.4 2.8-3 2.8-.9 0-1.2-.4-1.6-.4s-.7.4-1.6.4c-1.6 0-3-1.1-3-2.8C7.4 14.7 9.4 13 12 13Z"/></svg>',
};

export const OFFERS: Offer[] = [
  {
    slug: 'estetica',
    niche: 'Clínicas de estética',
    title: 'Agenda vazia por falta e remarcação',
    painPoint:
      'De 15% a 25% da agenda evapora com falta de última hora. O horário não volta — e a conta fixa continua igual.',
    icon: icons.calendar,
    page: {
      eyebrow: 'Para donas de clínica e esteticistas autônomas',
      h1: 'Sua clínica está perdendo dinheiro todo mês com horário vazio.',
      lede:
        'A cliente marca, você reserva a agenda, separa o material — e ela não aparece. Esse horário não é remarcado em cima da hora: ele simplesmente se perde. E o aluguel, a luz e o seu tempo continuam sendo pagos do mesmo jeito.',
      problemTitle: 'Faça a conta do que a falta custa por ano.',
      problemBody: [
        'Clínicas de estética perdem, em média, entre 15% e 25% da agenda só com faltas e remarcações de última hora. De cada dez horários da semana, dois ou três evaporam.',
        'Com um ticket médio de R$ 150 e apenas três faltas por semana, são mais de R$ 1.800 por mês saindo do caixa. Em doze meses, quase o valor de um equipamento novo — que vazou sem ninguém perceber.',
        'A parte que quase ninguém trabalha: isso raramente se resolve com mais divulgação. Resolve-se mudando a forma como a cliente confirma e assume o compromisso antes do horário chegar.',
      ],
      checks: [
        'Aplicação em dias, não em meses — ferramenta pronta, não curso longo',
        'Funciona para clínica pequena e para esteticista autônoma',
        'Não exige trocar de sistema de agendamento nem contratar ninguém',
        'Custo pequeno perto do que uma única falta evitada já devolve',
      ],
      products: [
        {
          name: 'Protocolo VAGA',
          platform: 'Kiwify',
          price: 'R$ 47',
          own: true,
          pitch:
            'Sistema em quatro etapas para medir a perda, reduzir a falta e reocupar o horário que vagou em até 15 minutos. Inclui duas planilhas prontas, 40 mensagens de WhatsApp, kit de documentos editáveis e manual da recepção.',
          take:
            'É produto nosso, não indicação de terceiro. Construímos porque nenhuma das ferramentas que testamos atacava a parte que mais custa: o horário que abre e ninguém preenche.',
          // Vai para a landing, não direto ao checkout: a página é que vende.
          href: '/calculadora-agenda-vazia/#protocolo-vaga',
        },
      ],
    },
  },
  {
    slug: 'eletronicos',
    niche: 'Eletrônicos',
    title: 'O gadget certo custa menos do que parece',
    painPoint:
      'Carregador que esquenta, fone que chia, cabo que dura um mês. O barato sai caro quando você compra três vezes.',
    icon: icons.chip,
    page: {
      eyebrow: 'Eletrônicos e acessórios',
      h1: 'O problema não é comprar barato. É comprar três vezes.',
      lede:
        'Cabo que descasca em um mês, carregador que esquenta, fone que chia depois da primeira chuva. Quando você soma o que gastou repondo, o item "caro" que resolveria de primeira já saiu mais em conta.',
      problemTitle: 'Onde o dinheiro some em eletrônicos.',
      problemBody: [
        'A maior parte do desperdício aqui não está em uma compra grande e errada — está na reposição silenciosa de itens de R$ 30 a R$ 80 que você troca duas ou três vezes por ano sem nem registrar.',
        'O outro buraco é o oposto: pagar caro por especificação que você não usa. Fone com cancelamento de ruído de topo não faz diferença para quem só atende ligação no carro.',
        'O que separa uma coisa da outra é saber exatamente qual característica importa para o seu uso — e ignorar o resto da ficha técnica.',
      ],
      checks: [
        'Resolve um uso concreto, não uma ficha técnica bonita',
        'Durabilidade compatível com o preço — sem falso barato',
        'Avaliações reais e volume de vendas antes de qualquer indicação',
        'Só entra aqui o que faz diferença perceptível no uso diário',
      ],
      products: [
        {
          name: 'Filtro de Linha iClamper Energia 5 Tomadas',
          platform: 'Amazon',
          price: 'R$ 71,99',
          pitch: 'Protege até 5 aparelhos ao mesmo tempo contra surto elétrico — o tipo de queima que custa muito mais que o filtro.',
          take: 'Mais de 12 mil avaliações e nota 4,9 — volume alto o suficiente para confirmar durabilidade real, não só embalagem bonita.',
          href: 'https://www.amazon.com.br/dp/B0D8V3QLDD?tag=felipearraiss-20',
          rating: 4.9,
          reviews: 12000,
          globalRank: 4,
        },
        {
          name: 'Fone Philips TWS TAT1109BK Bluetooth',
          platform: 'Amazon',
          price: 'R$ 119,90',
          pitch: 'Até 24h de bateria e microfone embutido — resolve sem pagar por recurso que você não vai usar no dia a dia.',
          take: 'Mais de 7 mil avaliações com nota 4,6, num histórico consistente de recompra pela mesma marca.',
          href: 'https://www.amazon.com.br/dp/B0DVMQVVDY?tag=felipearraiss-20',
          rating: 4.6,
          reviews: 7000,
          globalRank: 10,
          compareGroup: 'fone-bluetooth',
        },
        {
          name: 'Fone JBL Tune 520BT Bluetooth',
          platform: 'Amazon',
          price: 'R$ 199,00',
          pitch: 'Bluetooth 5.3 com bateria de até 57h — categoria intermediária que aguenta uso diário sem sacrificar o bolso.',
          take: 'Quase 29 mil avaliações e nota 4,8 — um dos volumes de venda mais altos da categoria fones no Brasil.',
          href: 'https://www.amazon.com.br/dp/B0C4CCMNQT?tag=felipearraiss-20',
          rating: 4.8,
          reviews: 29000,
          globalRank: 2,
          compareGroup: 'fone-bluetooth',
        },
      ],
    },
  },
  {
    slug: 'cozinha',
    niche: 'Cozinha',
    title: 'Utensílio que economiza tempo todo dia',
    painPoint:
      'Gaveta cheia de tralha que você usou uma vez. O que resolve mesmo costuma ser barato e passa despercebido.',
    icon: icons.pan,
    page: {
      eyebrow: 'Cozinha e utensílios',
      h1: 'A gaveta está cheia, mas o problema continua lá.',
      lede:
        'Todo mundo tem aquele utensílio comprado por impulso que foi usado uma vez. Enquanto isso, a tarefa chata de verdade — a que você faz todo dia e demora demais — continua exatamente igual.',
      problemTitle: 'O que realmente vale espaço na sua cozinha.',
      problemBody: [
        'Utensílio bom não é o que faz mais coisas: é o que elimina uma etapa que você repete todos os dias. Economizar cinco minutos por refeição são mais de trinta horas por ano.',
        'O contrário também é verdade: aparelho grande e caro que exige montagem e limpeza demorada acaba encostado no armário em duas semanas, por mais útil que pareça na propaganda.',
        'Por isso o filtro aqui é simples — frequência de uso real, tempo economizado por vez e facilidade de limpar.',
      ],
      checks: [
        'Uso frequente de verdade, não uma vez por ano',
        'Economia de tempo mensurável na tarefa que ele substitui',
        'Fácil de limpar e guardar — senão vira peso morto no armário',
        'Preço proporcional ao tempo que devolve',
      ],
      products: [
        {
          name: 'Kit 12 Potes Herméticos Electrolux',
          platform: 'Amazon',
          price: 'R$ 89,90',
          pitch: 'Vedação de silicone e livre de BPA — organiza a geladeira e evita desperdiçar comida que estraga por falta de vedação.',
          take: 'Mais de 53 mil avaliações e nota 4,9 — um dos itens de organização mais recomprados da Amazon Brasil.',
          href: 'https://www.amazon.com.br/dp/B09XJL4B9H?tag=felipearraiss-20',
          rating: 4.9,
          reviews: 53000,
          globalRank: 1,
        },
        {
          name: 'Sanduicheira Elétrica Cadence Click',
          platform: 'Amazon',
          price: 'R$ 94,52',
          pitch: 'Resolve o lanche rápido do dia a dia sem sujar fogão nem frigideira — liga, usa, guarda.',
          take: 'Mais de 20 mil avaliações com nota 4,8, sinal de uso recorrente e não só compra por impulso.',
          href: 'https://www.amazon.com.br/dp/B0CDJ4L7CZ?tag=felipearraiss-20',
          alt: { label: 'Precisa em 220V? Ver aqui', href: 'https://www.amazon.com.br/dp/B0CDJ5DQ7M?tag=felipearraiss-20' },
          rating: 4.8,
          reviews: 20000,
          globalRank: 3,
        },
        {
          name: 'Copo Térmico 1,18L em Aço Inoxidável',
          platform: 'Amazon',
          price: 'R$ 44,98',
          pitch: 'Mantém bebida fria por até 30h ou quente por até 8h — parede dupla a vácuo, sem vazar na bolsa.',
          take: 'Nota 4,8 com quase 3.800 avaliações — durabilidade testada por alto volume de uso diário.',
          href: 'https://www.amazon.com.br/dp/B0D9GDTM67?tag=felipearraiss-20',
          rating: 4.8,
          reviews: 3800,
          globalRank: 12,
        },
        {
          name: 'Suporte Organizador de Esponja para Pia em Aço Carbono',
          platform: 'Amazon',
          price: 'R$ 31,77',
          pitch: 'Prende esponja, detergente e escovinha longe da água parada da pia — acaba com o mofo e o cheiro que se acumulam no cantinho onde tudo isso fica largado.',
          take: 'Um dos mais vendidos da categoria organização de pia, nota 4,4 em 93 avaliações — volume de compras consistente confirma fixação firme na bancada.',
          href: 'https://www.amazon.com.br/dp/B0FM6MNDKH?tag=felipearraiss-20',
          rating: 4.4,
          reviews: 93,
          globalRank: 18,
        },
        {
          name: 'Kit 4 Peneiras de Cozinha RJI Utilidades (7 a 18 cm)',
          platform: 'Amazon',
          price: 'R$ 34,90',
          pitch: 'Quatro tamanhos numa peça só acabam com o vaivém de trocar de peneira no meio da receita — de farinha fina a suco com polpa.',
          take: 'Nota 4,6 com 64 avaliações e selo Escolha da Amazon na categoria — volume ainda modesto, mas consistente entre quem já comprou.',
          href: 'https://www.amazon.com.br/dp/B0G1L62P2J?tag=felipearraiss-20',
          rating: 4.6,
          reviews: 64,
          globalRank: 19,
        },
        {
          name: 'Panela de Pressão Tramontina Vancouver Effect Antiaderente 4,5L',
          platform: 'Amazon',
          price: 'R$ 171,41',
          pitch: 'Corta pela metade o tempo de cozinhar feijão, carne e grão duro — sem gastar mais gás nem precisar vigiar o fogão o tempo todo.',
          take: 'Nº 1 mais vendida em panelas de pressão na Amazon Brasil, nota 4,8 com quase 10 mil avaliações — volume alto o suficiente para confirmar durabilidade da vedação e do revestimento.',
          href: 'https://www.amazon.com.br/dp/B0CD4SCM33?tag=felipearraiss-20',
          rating: 4.8,
          reviews: 9841,
          globalRank: 5,
        },
        {
          name: 'Fritadeira Air Fryer Forno Mondial Oven 12L com Assadeiras',
          platform: 'Amazon',
          price: 'R$ 515,12',
          pitch: 'Frita, assa e reaquece sem óleo e sem esquentar a cozinha inteira como um forno tradicional — os 12L dão conta da família toda de uma vez.',
          take: 'Mais de 9,4 mil avaliações e nota 4,7, um dos maiores volumes entre air fryers grandes — histórico de recompra consistente também nos modelos menores da mesma linha.',
          href: 'https://www.amazon.com.br/dp/B0BZJDLT6Z?tag=felipearraiss-20',
          rating: 4.7,
          reviews: 9422,
          globalRank: 6,
        },
        {
          name: 'Cafeteira Arno Nescafé Dolce Gusto Genio S Basic Grafite DGS5',
          platform: 'Amazon',
          price: 'R$ 473,95',
          pitch: 'A mais em conta da linha Dolce Gusto com reputação consolidada — função XL e tanque removível, sem pagar pelos recursos das versões Plus que a maioria não usa.',
          take: 'Nota 4,8 com 950 avaliações e mais de 100 compras no mês passado — volume consistente dentro da linha para confirmar durabilidade.',
          href: 'https://www.amazon.com.br/dp/B0BMW95J7F?tag=felipearraiss-20',
          alt: { label: 'Já tem a máquina? Ver cápsulas', href: 'https://www.amazon.com.br/dp/B07H45XJ2D?tag=felipearraiss-20' },
          rating: 4.8,
          reviews: 950,
          globalRank: 17,
        },
        {
          name: 'Nescafé Dolce Gusto Espresso, 10 Cápsulas',
          platform: 'Amazon',
          price: 'R$ 16,73',
          pitch: 'Café pronto em segundos sem passar, coar ou lavar filtro — resolve o café da manhã apressado sem sacrificar sabor.',
          take: 'Mais de 8 mil compras no mês passado e nota 4,8 com 5.228 avaliações — mais vendido da linha na Amazon Brasil. Só funciona com máquina Dolce Gusto (indicamos uma acima).',
          href: 'https://www.amazon.com.br/dp/B07H45XJ2D?tag=felipearraiss-20',
          alt: { label: 'Não tem a máquina ainda? Ver aqui', href: 'https://www.amazon.com.br/dp/B0BMW95J7F?tag=felipearraiss-20' },
          rating: 4.8,
          reviews: 5228,
          globalRank: 8,
        },
        {
          name: 'Pilão de Inox com Socador GODREAM',
          platform: 'Amazon',
          price: 'R$ 89,99',
          pitch: 'Esmaga alho, pimenta e especiarias sem enferrujar como pilão comum — base antiderrapante evita bagunça na bancada.',
          take: 'Nota 4,7, mas ainda com poucas avaliações (4) — evidência de durabilidade a longo prazo ainda é escassa. O preço compensa o risco de testar.',
          href: 'https://www.amazon.com.br/dp/B0H3NTKV23?tag=felipearraiss-20',
          kind: 'deal',
          rating: 4.7,
          reviews: 4,
        },
        {
          name: 'Kit 4 Formas de Gelo com Tampa Autorient, 14 Cubos Cada',
          platform: 'Amazon',
          price: 'R$ 19,00',
          pitch: 'Preço baixo pra quem só precisa congelar porção de tempero, papinha ou gelo sem forma velha rachando na mão.',
          take: 'Quase 2.800 avaliações confirmam que o preço é bom, mas parte dos comentários reclama que a tampa não encaixa perfeitamente e os cubos saem pequenos — não é a melhor do mercado, é a mais barata que ainda funciona.',
          href: 'https://www.amazon.com.br/dp/B0CCB3HLGK?tag=felipearraiss-20',
          kind: 'deal',
          rating: 4.4,
          reviews: 2749,
        },
        {
          name: 'Tábua de Descongelar Rápido Moderna Mix',
          platform: 'Mercado Livre',
          price: 'R$ 35,86',
          pitch: 'Descongela carne, frango ou peixe em minutos só com a condução do alumínio — sem água quente, sem micro-ondas ressecando a beirada.',
          take: 'Nota 4,6 com 3.204 avaliações e mais de 50 mil vendas — volume alto o suficiente pra confirmar que não é só sorte de propaganda.',
          href: 'https://meli.la/2yAuVW5',
          rating: 4.6,
          reviews: 3204,
          globalRank: 22,
        },
        {
          name: 'Kit 12 Utensílios de Cozinha em Silicone Aristus',
          platform: 'Mercado Livre',
          price: 'R$ 33,90',
          pitch: 'Aguenta até 220°C sem derreter nem soltar sabor de plástico queimado na comida — troca de uma vez só toda a gaveta de utensílio gasto.',
          take: 'Nota 4,9 com 9.020 avaliações e mais de 50 mil vendas — uma das notas mais altas do site inteiro.',
          href: 'https://meli.la/2Sng2x9',
          rating: 4.9,
          reviews: 9020,
          globalRank: 21,
          compareGroup: 'kit-utensilios-silicone',
        },
        {
          name: 'Kit 19 Peças Utensílios de Cozinha com Tábua e Espátulas',
          platform: 'Mercado Livre',
          price: 'R$ 58,00',
          pitch: 'Kit maior que o de 12 peças — inclui tábua e facas, resolve de uma vez a cozinha inteira que ainda usa utensílio avulso e desencontrado.',
          take: 'Nota 4,7 com 1.494 avaliações e mais de 10 mil vendas.',
          href: 'https://meli.la/1K2xVm4',
          rating: 4.7,
          reviews: 1494,
          globalRank: 25,
          compareGroup: 'kit-utensilios-silicone',
        },
        {
          name: 'Cortador Picador Fatiador de Legumes e Vegetais 14 em 1',
          platform: 'Mercado Livre',
          price: 'R$ 33,00',
          pitch: 'Corta, rala e fatia direto no recipiente com lâminas trocáveis — acaba com a louça extra de picar tudo na tábua e lavar faca por faca.',
          take: 'Nota 4,4 com 306 avaliações e mais de 1.000 vendas.',
          href: 'https://meli.la/23h98yo',
          rating: 4.4,
          reviews: 306,
          globalRank: 27,
          compareGroup: 'cortador-legumes',
        },
        {
          name: 'Kit 2 Fatiadores Kitop Corta-tudo',
          platform: 'Mercado Livre',
          price: 'R$ 34,99',
          pitch: 'Versão mais simples e compacta pra quem só quer fatiar fino rápido, sem montar peça nem lavar recipiente grande — guarda na gaveta.',
          take: 'Nota 4,4 com 1.778 avaliações e mais de 5 mil vendidos.',
          href: 'https://meli.la/2wv6YAE',
          rating: 4.4,
          reviews: 1778,
          globalRank: 26,
          compareGroup: 'cortador-legumes',
        },
      ],
    },
  },
  {
    slug: 'casa',
    niche: 'Casa e organização',
    title: 'Bagunça que custa tempo toda semana',
    painPoint:
      'Procurar coisa, refazer arrumação, comprar o que já tinha. Desorganização cobra em minutos e em dinheiro.',
    icon: icons.home,
    page: {
      eyebrow: 'Casa e organização',
      h1: 'Desorganização não incomoda só a vista. Ela cobra caro.',
      lede:
        'O tempo perdido procurando coisa, a compra duplicada do que já estava no armário, a arrumação refeita todo fim de semana. É um custo recorrente que ninguém contabiliza porque vem em parcelas de cinco minutos.',
      problemTitle: 'Por que a organização não se sustenta.',
      problemBody: [
        'Quase toda tentativa de organizar falha pelo mesmo motivo: o sistema criado dá mais trabalho para manter do que a bagunça dava. Em duas semanas tudo volta ao que era.',
        'O que funciona é o contrário — a solução tem que tornar o jeito certo mais fácil que o jeito errado. Aí ela se mantém sozinha, sem força de vontade.',
        'Isso normalmente custa pouco. O caro é continuar recomprando o que sumiu dentro da própria casa.',
      ],
      checks: [
        'Torna o jeito certo mais fácil que o errado — não depende de disciplina',
        'Se mantém sozinho depois de instalado',
        'Cabe no espaço real de apartamento, não só em foto de catálogo',
        'Material que aguenta uso diário sem ceder',
      ],
      products: [
        {
          name: 'Kit 10 Sacos a Vácuo 50x60cm com Bomba Manual',
          platform: 'Amazon',
          price: 'R$ 31,90',
          pitch: 'Reduz roupa e roupa de cama a até 20% do volume — armário rende mais sem precisar de móvel novo.',
          take: 'Mais de 5 mil avaliações e nota 4,8 na categoria de organização mais vendida da Amazon Brasil.',
          href: 'https://www.amazon.com.br/dp/B0H5D2Z4P4?tag=felipearraiss-20',
          rating: 4.8,
          reviews: 5000,
          globalRank: 9,
        },
        {
          name: 'Lixeira Powermaid Retangular com Pedal Inox 5L',
          platform: 'Amazon',
          price: 'R$ 64,90',
          pitch: 'Tampa com fechamento suave e pedal — resolve o incômodo de tocar na lixeira sem gerar barulho.',
          take: 'Mais de 2 mil avaliações com nota 4,6, item recorrente entre os mais vendidos de organização para casa.',
          href: 'https://www.amazon.com.br/dp/B0CXVQRPK7?tag=felipearraiss-20',
          rating: 4.6,
          reviews: 2000,
          globalRank: 15,
        },
        {
          name: 'Super Varal de Chão 3 Andares Regulável e Dobrável',
          platform: 'Amazon',
          price: 'R$ 68,90',
          pitch: 'Triplica a área de secagem sem ocupar espaço fixo — dobra e guarda quando não está em uso.',
          take: 'Quase 6 mil avaliações e nota 4,4 — volume alto que confirma resistência ao uso semanal.',
          href: 'https://www.amazon.com.br/dp/B0C1HNKQLR?tag=felipearraiss-20',
          rating: 4.4,
          reviews: 6000,
          globalRank: 13,
        },
        {
          name: 'Mop The Black Tools 360° Giratório TBBL04',
          platform: 'Mercado Livre',
          price: 'R$ 140,60',
          pitch: 'Centrífuga integrada ao balde tira o excesso de água do rodo sem torcer nada na mão — limpa e seca o chão no mesmo giro.',
          take: 'Nota 4,6 com 860 avaliações e mais de 5 mil vendidos — um dos mais vendidos da categoria mop no Mercado Livre.',
          href: 'https://meli.la/2ToaEpP',
          rating: 4.6,
          reviews: 860,
          globalRank: 23,
        },
        {
          name: 'Vassoura Rodo Mágico Silicone UTZ Cinza-escuro',
          platform: 'Mercado Livre',
          price: 'R$ 73,05',
          pitch: 'Varre e seca piso e vidro num movimento só, sem molhar a casa toda — silicone dobra em qualquer ângulo sem deixar fiapo pra trás.',
          take: 'Nota 4,6 com 1.322 avaliações e mais de 10 mil vendidos.',
          href: 'https://meli.la/137gUnK',
          rating: 4.6,
          reviews: 1322,
          globalRank: 24,
        },
      ],
    },
  },
  {
    slug: 'carro',
    niche: 'Carro',
    title: 'Manutenção que você adia e sai caro',
    painPoint:
      'Item de R$ 50 que evita conserto de R$ 500. A conta do "depois eu vejo" chega sempre no pior momento.',
    icon: icons.car,
    page: {
      eyebrow: 'Automotivo',
      h1: 'O item de R$ 50 que evita o conserto de R$ 500.',
      lede:
        'Quase todo gasto grande com carro começa pequeno e adiável. O problema é que a conta do "depois eu vejo" chega sempre no pior momento — e multiplicada.',
      problemTitle: 'Onde a economia é real no carro.',
      problemBody: [
        'Existe uma diferença enorme entre acessório de vitrine e item que efetivamente evita um gasto maior lá na frente. O primeiro é impulso; o segundo é conta de padeiro.',
        'Cuidado preventivo é o caso mais claro: proteção, limpeza correta e checagem simples custam pouco e adiam por anos um serviço que sairia caro.',
        'A outra frente é conforto de uso diário — o que você percebe toda vez que entra no carro, não o que impressiona quem olha de fora.',
      ],
      checks: [
        'Evita um gasto maior comprovadamente, ou melhora o uso diário real',
        'Compatível com carro popular, não só com modelo específico',
        'Instalação simples, sem depender de oficina',
        'Marca com histórico — aqui, produto ruim custa mais que o preço dele',
      ],
      products: [
        {
          name: 'Kit Shampoo V-Floc + Cera Tok Final Vonixx',
          platform: 'Amazon',
          price: 'R$ 92,79',
          pitch: 'Lavagem e proteção da pintura em um kit só — cuidado preventivo que evita polimento caro lá na frente.',
          take: 'Marca de referência em estética automotiva, nota 4,8 confirmada por quem já testou o resultado na pintura.',
          href: 'https://www.amazon.com.br/dp/B0F9Z3D8TZ?tag=felipearraiss-20',
          rating: 4.8,
          globalRank: 20,
        },
        {
          name: 'Aspirador de Pó Automotivo WAP Car 12V2',
          platform: 'Amazon',
          price: 'R$ 97,40',
          pitch: 'Portátil, liga na tomada 12V do carro — resolve a limpeza rápida sem depender de lava-rápido.',
          take: 'Mais de 4.700 avaliações e nota 4,4 — volume alto o suficiente para confirmar que aguenta uso frequente.',
          href: 'https://www.amazon.com.br/dp/B0CLDRS18S?tag=felipearraiss-20',
          rating: 4.4,
          reviews: 4700,
          globalRank: 14,
        },
      ],
    },
  },
  {
    slug: 'pet',
    niche: 'Pet',
    title: 'O gasto que se paga em poucas semanas',
    painPoint:
      'Item certo reduz sujeira, desperdício de ração e ida ao veterinário. Errado, vira brinquedo ignorado.',
    icon: icons.paw,
    page: {
      eyebrow: 'Pet',
      h1: 'Metade do que se compra para pet é ignorado na primeira semana.',
      lede:
        'Brinquedo que o animal não olha, comedouro que espalha ração pelo chão, acessório que ele tira em cinco minutos. O que sobra é dinheiro gasto e o problema original intacto.',
      problemTitle: 'O que muda a rotina de verdade.',
      problemBody: [
        'Os itens que realmente valem são os que atacam um custo recorrente: desperdício de ração, sujeira que toma seu tempo todo dia, ou algo que reduz risco de ida ao veterinário.',
        'Fora isso, a maior parte da prateleira é impulso — bonito na foto, ignorado pelo animal.',
        'Por isso o critério aqui é frequência: só entra o que é usado todos os dias e resolve algo que hoje custa tempo ou dinheiro de forma repetida.',
      ],
      checks: [
        'Ataca um custo recorrente: desperdício, sujeira ou risco de saúde',
        'Resistente ao uso real do animal, não só ao da foto',
        'Fácil de limpar — item pet que dá trabalho é item abandonado',
        'Segurança do material sempre verificada antes de indicar',
      ],
      products: [
        {
          name: 'Petlike Ultrapads Tapete Higiênico Aroma Lavanda 80x60cm — 30un',
          platform: 'Amazon',
          price: 'R$ 54,28',
          pitch: 'Absorção premium que reduz o tempo de limpeza diária e o cheiro que fica no ambiente.',
          take: 'Mais de 8,5 mil avaliações e nota 4,4 — um dos itens mais recomprados da categoria pet na Amazon Brasil.',
          href: 'https://www.amazon.com.br/dp/B07PZWDZT9?tag=felipearraiss-20',
          rating: 4.4,
          reviews: 8500,
          globalRank: 11,
        },
        {
          name: 'Viva Verde Areia Higiênica Biodegradável para Gatos 4kg',
          platform: 'Amazon',
          price: 'R$ 69,25',
          pitch: 'Biodegradável e de grãos finos — controla odor sem espalhar poeira pela casa a cada troca.',
          take: 'Mais de 5,4 mil avaliações com nota 4,8, sinal de recompra constante e não só teste único.',
          href: 'https://www.amazon.com.br/dp/B07YP1K82Z?tag=felipearraiss-20',
          rating: 4.8,
          reviews: 5400,
          globalRank: 7,
        },
        {
          name: 'Bebedouro Fonte para Gatos 3L em Inox, Silencioso e Bivolt',
          platform: 'Amazon',
          price: 'R$ 105,63',
          pitch: 'Água corrente filtrada estimula o pet a beber mais — reduz risco de problema renal, comum em gatos.',
          take: 'Nota 4,7 com mais de 1.400 avaliações — item recorrente entre os mais vendidos de acessórios para gatos.',
          href: 'https://www.amazon.com.br/dp/B0DGTKZ2S1?tag=felipearraiss-20',
          rating: 4.7,
          reviews: 1400,
          globalRank: 16,
        },
      ],
    },
  },
];

export const getOffer = (slug: string) => OFFERS.find((o) => o.slug === slug);

export interface RankedProduct extends Product {
  offerSlug: string;
  offerNiche: string;
}

/** Todos os produtos de todas as categorias, com a categoria anexada. */
export function getAllProducts(): RankedProduct[] {
  return OFFERS.flatMap((o) =>
    o.page.products.map((p) => ({ ...p, offerSlug: o.slug, offerNiche: o.niche }))
  );
}

/**
 * Ranking Geral: só produtos 'pick' com globalRank definido, do menor pro maior (1 = melhor).
 * Produto próprio fica de fora — ranquear a própria mercadoria contra as indicações
 * esvaziaria o sentido do ranking.
 */
export function getRanking(): RankedProduct[] {
  return getAllProducts()
    .filter((p) => p.kind !== 'deal' && !p.own && typeof p.globalRank === 'number')
    .sort((a, b) => (a.globalRank as number) - (b.globalRank as number));
}

/** Agrupa produtos com o mesmo compareGroup dentro de uma lista; só retorna grupos com 2+ itens. */
export function getCompareGroups(products: Product[]): Record<string, Product[]> {
  const groups: Record<string, Product[]> = {};
  for (const p of products) {
    if (!p.compareGroup) continue;
    (groups[p.compareGroup] ??= []).push(p);
  }
  for (const key of Object.keys(groups)) {
    if (groups[key].length < 2) delete groups[key];
  }
  return groups;
}
