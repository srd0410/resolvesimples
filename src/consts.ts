export const SITE = {
  name: 'resolvesimples',
  url: 'https://www.resolvesimples.com.br',
  tagline: 'Soluções testadas para dores reais do dia a dia',
  email: 'contato@resolvesimples.com.br',
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
      products: [],
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
        },
        {
          name: 'Fone Philips TWS TAT1109BK Bluetooth',
          platform: 'Amazon',
          price: 'R$ 119,90',
          pitch: 'Até 24h de bateria e microfone embutido — resolve sem pagar por recurso que você não vai usar no dia a dia.',
          take: 'Mais de 7 mil avaliações com nota 4,6, num histórico consistente de recompra pela mesma marca.',
          href: 'https://www.amazon.com.br/dp/B0DVMQVVDY?tag=felipearraiss-20',
        },
        {
          name: 'Fone JBL Tune 520BT Bluetooth',
          platform: 'Amazon',
          price: 'R$ 199,00',
          pitch: 'Bluetooth 5.3 com bateria de até 57h — categoria intermediária que aguenta uso diário sem sacrificar o bolso.',
          take: 'Quase 29 mil avaliações e nota 4,8 — um dos volumes de venda mais altos da categoria fones no Brasil.',
          href: 'https://www.amazon.com.br/dp/B0C4CCMNQT?tag=felipearraiss-20',
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
        },
        {
          name: 'Sanduicheira Elétrica Cadence Click',
          platform: 'Amazon',
          price: 'R$ 94,52',
          pitch: 'Resolve o lanche rápido do dia a dia sem sujar fogão nem frigideira — liga, usa, guarda.',
          take: 'Mais de 20 mil avaliações com nota 4,8, sinal de uso recorrente e não só compra por impulso.',
          href: 'https://www.amazon.com.br/dp/B0CDJ4L7CZ?tag=felipearraiss-20',
        },
        {
          name: 'Copo Térmico 1,18L em Aço Inoxidável',
          platform: 'Amazon',
          price: 'R$ 44,98',
          pitch: 'Mantém bebida fria por até 30h ou quente por até 8h — parede dupla a vácuo, sem vazar na bolsa.',
          take: 'Nota 4,8 com quase 3.800 avaliações — durabilidade testada por alto volume de uso diário.',
          href: 'https://www.amazon.com.br/dp/B0D9GDTM67?tag=felipearraiss-20',
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
      products: [],
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
        },
        {
          name: 'Aspirador de Pó Automotivo WAP Car 12V2',
          platform: 'Amazon',
          price: 'R$ 97,40',
          pitch: 'Portátil, liga na tomada 12V do carro — resolve a limpeza rápida sem depender de lava-rápido.',
          take: 'Mais de 4.700 avaliações e nota 4,4 — volume alto o suficiente para confirmar que aguenta uso frequente.',
          href: 'https://www.amazon.com.br/dp/B0CLDRS18S?tag=felipearraiss-20',
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
      products: [],
    },
  },
];

export const getOffer = (slug: string) => OFFERS.find((o) => o.slug === slug);
