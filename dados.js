const bancoAquarela = {
  comidas: [
    {
      nome: "Feijoada",
      tipo: "Tradicional / Salgado",
      regiao: "Sudeste",
      descricao:
        "Clássico prato brasileiro feito com feijão-preto e carnes variadas, servido com arroz, couve e laranja.",
      imagem: "assets-recomendacoes/feijoada-culinaria.png",
    },
    {
      nome: "Baião de dois",
      tipo: "Tradicional / Salgado",
      regiao: "Nordeste",
      descricao:
        "Prato típico nordestino preparado com arroz, feijão-verde e carne seca, representando a união de sabores regionais.",
      imagem: "assets-recomendacoes/baiao-culinaria.png",
    },
    {
      nome: "Barreado",
      tipo: "Tradicional / Salgado",
      regiao: "Sul",
      descricao:
        "Prato paranaense feito com carne cozida lentamente em panela de barro, servido com farinha e banana.",
      imagem: "assets-recomendacoes/barreado-culinaria.png",
    },
    {
      nome: "Biscoito de polvilho",
      tipo: "Tradicional / Salgado",
      regiao: "Sudeste",
      descricao:
        "Biscoito crocante e leve, feito com polvilho azedo, típico de Minas Gerais e ideal para lanches.",
      imagem: "assets-recomendacoes/biscoito-culinária.png",
    },
    {
      nome: "Bolo de rolo",
      tipo: "Tradicional / Doce",
      regiao: "Nordeste",
      descricao:
        "Doce pernambucano em camadas finas de massa e goiabada, considerado patrimônio cultural do Brasil.",
      imagem: "assets-recomendacoes/bolo-culinaria.png",
    },
    {
      nome: "Cartola",
      tipo: "Tradicional / Doce",
      regiao: "Nordeste",
      descricao:
        "Sobremesa feita com banana frita, queijo coalho e canela, típica da culinária pernambucana.",
      imagem: "assets-recomendacoes/cartola-culinária.png",
    },
    {
      nome: "Cocada",
      tipo: "Tradicional / Doce",
      regiao: "Nordeste",
      descricao:
        "Doce popular feito com coco ralado e açúcar, com versões brancas, queimadas e de colher.",
      imagem: "assets-recomendacoes/cocada-culinaria.png",
    },
    {
      nome: "Goiabada",
      tipo: "Tradicional / Doce",
      regiao: "Sudeste",
      descricao:
        "Doce em pasta ou barra feito com goiaba e açúcar, muito consumido com queijo minas.",
      imagem: "assets-recomendacoes/goiabada-culinaria.png",
    },
    {
      nome: "Paçoquinha",
      tipo: "Tradicional / Doce",
      regiao: "Sudeste",
      descricao:
        "Doce feito com amendoim torrado e açúcar, símbolo das festas juninas e do sabor caseiro brasileiro.",
      imagem: "assets-recomendacoes/paçoca-culinaria.png",
    },

    {
      nome: "Acarajé",
      tipo: "Tradicional / Fusão / Salgado",
      regiao: "Nordeste",
      descricao:
        "Bolinho de massa de feijão frito no azeite de dendê, recheado com vatapá e camarão, símbolo da Bahia.",
      imagem: "assets-recomendacoes/acaraje-culinaria.png",
    },
    {
      nome: "Pamonha",
      tipo: "Tradicional / Doce ou Salgado",
      regiao: "Centro-Oeste / Nordeste",
      descricao:
        "Massa de milho verde cozido na própria palha, típica das festas juninas.",
      imagem: "assets-recomendacoes/pamonha-culinaria.png",
    },
    {
      nome: "Tapioca",
      tipo: "Tradicional / Funcional / Doce ou Salgado",
      regiao: "Nordeste",
      descricao:
        "Feita da goma de mandioca, recheio a gosto, porém geralmente as salgadas são rechedas com algum tipo de carne ou queijo e as doces geralmente são recehadas com geléias, ou frutas com leite condensado ou chocolate",
      imagem: "assets-recomendacoes/tapioca-culinaria.png",
    },
    {
      nome: "Burger de Picanha Artesanal",
      tipo: "Moderna / Salgado",
      regiao: "Sudeste",
      descricao:
        "Versão gourmet do clássico hambúrguer, com ingredientes regionais e molhos brasileiros.",
      imagem: "assets-recomendacoes/burger artesanal-culinaria.png",
    },
    {
      nome: "Escondidinho de Cupim com Purê de Mandioquinha",
      tipo: "Moderna / Salgado",
      regiao: "Centro-Oeste",
      descricao:
        "Releitura moderna da culinária nordestina, com sabores brasileiros sofisticados.",
      imagem: "assets-recomendacoes/escondidinhocupim-culinaria.png",
    },
    {
      nome: "Sushi Nordestino",
      tipo: "Fusão / Salgado",
      regiao: "Nordeste",
      descricao:
        "Combinação criativa entre a culinária japonesa e ingredientes regionais como carne de sol e queijo coalho.",
      imagem: "assets-recomendacoes/sushi nordestino-culinaria.png",
    },
    {
      nome: "Pizza de Açaí",
      tipo: "Fusão / Doce",
      regiao: "Norte",
      descricao:
        "Pizza feita com massa leve e creme de açaí, coberta com frutas brasileiras.",
      imagem: "assets-recomendacoes/pizza acai-culinaria.png",
    },
    {
      nome: "Moqueca Vegana",
      tipo: "Sustentável / Vegana / Salgado",
      regiao: "Sudeste",
      descricao:
        "Versão sem peixe da moqueca capixaba, feita com banana-da-terra, leite de coco e legumes orgânicos.",
      imagem: "assets-recomendacoes/moqueca vegana -culinaria.png",
    },
    {
      nome: "Arroz com Casca de Banana",
      tipo: "Sustentável / Vegana / Salgado",
      regiao: "Nordeste",
      descricao:
        "Receita popularizada por chefs brasileiros, aproveitando partes não convencionais dos alimentos.",
      imagem: "assets-recomendacoes/arroz casca banana- culinaria.png",
    },
    {
      nome: "Açaí Bowl",
      tipo: "Funcional / Tradicional / Doce",
      regiao: "Norte",
      descricao:
        "Tigela com açaí natural, frutas e granola, cheia de energia e sabor.",
      imagem: "assets-recomendacoes/acai - culinaria.png",
    },
    {
      nome: "Tapioca Proteica com Chia",
      tipo: "Funcional / Salgado",
      regiao: "Nordeste",
      descricao:
        "Versão saudável da tapioca, com adição de chia e recheio leve de frango ou tofu.",
      imagem: "assets-recomendacoes/tapioca chia - culinaria.png",
    },
    {
      nome: "Feijoada Vegana",
      tipo: "Plant-based / Salgado",
      regiao: "Sudeste",
      descricao:
        "Feijoada feita sem carne, com legumes e tofu defumado, mantendo o sabor autêntico.",
      imagem: "assets-recomendacoes/feijoada vegana-culinaria.png",
    },
    {
      nome: "Strogonoff de Cogumelos",
      tipo: "Plant-based / Salgado",
      regiao: "Sul",
      descricao:
        "Prato clássico em versão vegetal, com creme de castanha e cogumelos frescos.",
      imagem: "assets-recomendacoes/strogonoff cogumelos- culinaria.png",
    },
    {
      nome: "Brigadeiro",
      tipo: "Tradicional / Doce",
      regiao: "Sudeste (Geralmente associado, mas popular em todo o Brasil)",
      descricao:
        "Um dos doces mais clássicos e tradicionais do Brasil, feito à base de leite condensado, chocolate em pó e manteiga. É um ícone da culinária brasileira, presente em todas as festas.",
      imagem: "assets-recomendacoes/brigadeiro-culinaria.png",
    },
  ],
  artesanatos: [
    {
      nome: "Cerâmica de Caruaru",
      tipo: "Cerâmica",
      regiao: "Pernambuco",
      descricao:
        "Esculturas e peças decorativas em barro, símbolo da arte popular nordestina.",
      imagem: "assets-recomendacoes/ceramica caruaru- artesanato.png",
    },
    {
      nome: "Renda de Bilro",
      tipo: "Tricô / Crochê",
      regiao: "Ceará",
      descricao:
        "Trabalho artesanal com fios e bilros, tradicional no litoral nordestino.",
      imagem: "assets-recomendacoes/renda de bilro - artesanato.png",
    },
    {
      nome: "Patchwork Mineiro",
      tipo: "Patchwork",
      regiao: "Minas Gerais",
      descricao:
        "Retalhos coloridos costurados em colchas e almofadas, típicos do artesanato mineiro.",
      imagem: "assets-recomendacoes/patchwork mineiro - artesanato.png",
    },
    {
      nome: "Bonecas de Pano do Vale do Jequitinhonha",
      tipo: "Biscuit / Costura",
      regiao: "Minas Gerais",
      descricao:
        "Bonecas de pano e barro com trajes regionais, representando o povo do interior.",
      imagem: "assets-recomendacoes/bonecas de pano-artesanato.png",
    },
    {
      nome: "Velas Aromáticas de Coco",
      tipo: "Velas",
      regiao: "Bahia",
      descricao: "Produzidas com óleo de coco e essências tropicais.",
      imagem: "assets-recomendacoes/velas aromaticas- artesanato.png",
    },
    {
      nome: "Sabonetes Artesanais de Cupuaçu",
      tipo: "Sabonetes",
      regiao: "Amazônia",
      descricao: "Feitos à mão com frutas típicas da região Norte.",
      imagem: "assets-recomendacoes/sabao cupuaçu- artesanato.png",
    },
    {
      nome: "Macramê Boho Brasileiro",
      tipo: "Macramê",
      regiao: "Sul",
      descricao:
        "Trabalhos manuais com fios e nós, usados para decoração e moda artesanal.",
      imagem: "assets-recomendacoes/boho - artesanato.png",
    },
    {
      nome: "Crochê Decorativo do Sertão",
      tipo: "Crochê",
      regiao: "Sertão Nordestino",
      descricao:
        "Peças em crochê como tapetes, sousplats e flores decorativas, preservando o estilo rústico e colorido.",
      imagem: "assets-recomendacoes/croche-sertao-artesanatos.png",
    },
    {
      nome: "Tricô de Ursinhos(Amigurumi) e Roupinhas Infantis",
      tipo: "Tricô",
      regiao: "Sul (Paraná e Santa Catarina)",
      descricao:
        "Trabalhos manuais em lã, com confecção de bichinhos de pelúcia e roupas infantis em tricô.",
      imagem: "assets-recomendacoes/amigurumi-artesanatos.png",
    },
    {
      nome: "Bordado em Panos de Prato",
      tipo: "Bordado / Costura",
      regiao: "Centro-Oeste (Goiás e Mato Grosso do Sul)",
      descricao:
        "Bordados coloridos com flores e frases típicas, trazendo alegria e humor para o lar.",
      imagem: "assets-recomendacoes/pano de prato-artesanatos.png",
    },
    {
      nome: "Esculturas de Biscuit Temáticas",
      tipo: "Biscuit / Modelagem",
      regiao: "Sudeste (São Paulo)",
      descricao:
        "Miniaturas de personagens, lembranças e esculturas feitas com massa fria e acabamento artesanal.",
      imagem: "assets-recomendacoes/esculturas biscuit-artesanatos.png",
    },
  ],
  filmesSeries: [
    {
      nome: "Central do Brasil",
      genero: "Drama / Romance",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 1998,
      descricao:
        "Dora, uma ex-professora que escreve cartas para pessoas analfabetas, embarca numa emocionante viagem pelo Brasil com o menino Josué, que procura pelo pai que nunca conheceu.",
      imagem: "assets-recomendacoes/central do brasil - imagem.png",
      link: "https://youtu.be/JSWgOhRjJmo",
    },
    {
      nome: "Coisa Mais Linda",
      genero: "Drama / Musical",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 2019,
      descricao:
        "Mulheres desafiam normas sociais e buscam sucesso no Rio de Janeiro, abrindo um clube de música e mostrando força e independência.",
      imagem: "assets-recomendacoes/coisa-mais-linda.png",
      link: "https://youtu.be/gi5pXrQhZxQ",
    },
    {
      nome: "Que Horas Ela Volta?",
      genero: "Drama",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2015,
      descricao:
        "Val, empregada doméstica, vê sua vida transformada quando sua filha vem morar com ela em São Paulo, desafiando barreiras de classe.",
      imagem: "assets-recomendacoes/que-horas-ela-volta.png",
      link: "https://youtu.be/UDy6fXT2R4k?si=NwMjD3yyL5NckM4v",
    },
    {
      nome: "O Homem do Futuro",
      genero: "Ficção Científica / Comédia",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2011,
      descricao:
        "Um cientista cria uma máquina do tempo e tenta corrigir erros do passado, misturando romance, humor e ficção científica.",
      imagem: "assets-recomendacoes/o-homem-do-futuro.png",
      link: "https://youtu.be/4FAqZHz9z5E",
    },
    {
      nome: "Lisbela e o Prisioneiro",
      genero: "Romance / Comédia",
      formato: "Filme",
      regiao: "Nordeste",
      lancamento: 2003,
      descricao:
        "O jovem Leléu se apaixona por Lisbela, mas precisa conquistar seu coração enquanto enfrenta situações engraçadas e inusitadas no sertão nordestino.",
      imagem: "assets-recomendacoes/lisbela-e-o-prisioneiro.png",
      link: "https://youtu.be/XcQlvsg7Pa4?si=_jolIu5OT07b59tu",
    },
    {
      nome: "O Menino Maluquinho",
      genero: "Comédia / Aventura",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 1995,
      descricao:
        "As aventuras de um menino travesso e criativo, mostrando a vida escolar, a amizade e situações engraçadas do cotidiano infantil.",
      imagem: "assets-recomendacoes/o-menino-maluquinho.png",
      link: "https://youtu.be/3U-f4eHqcvw?si=z-0qLzIaz_69Ml1R",
    },
    {
      nome: "Show da Luna",
      genero: "Animação / Fantasia",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 2014,
      descricao:
        "Luna, uma curiosa garotinha, explora o mundo ao seu redor junto com seu irmão e seu furão, aprendendo sobre ciência e descobertas de forma divertida.",
      imagem: "assets-recomendacoes/show-da-luna.png",
    },
    {
      nome: "Sítio do Picapau Amarelo",
      genero: "Aventura",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 1977,
      descricao:
        "As aventuras de Narizinho, Pedrinho e Dona Benta no Sítio do Picapau Amarelo, explorando fantasia, magia e lições de amizade e coragem.",
      imagem: "assets-recomendacoes/sitio-do-picapau-amarelo.png",
    },
    {
      nome: "Meu Passado Me Condena",
      genero: "Comédia / Romance",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2013,
      descricao:
        "Casal recém-casado enfrenta situações hilárias e inesperadas durante a lua de mel na Europa, testando seu relacionamento e mostrando que o amor vem acompanhado de desafios e muitas risadas.",
      imagem: "assets-recomendacoes/meu-passado-me-condena.png",
      link: "https://youtu.be/3mdlvY18OVo?si=IdgB8fp1kRPUMelw",
    },
    {
      nome: "Peixonauta",
      genero: "Animação / Fantasia",
      formato: "Série / Filme",
      regiao: "Sudeste",
      lancamento: 2009 / 2017,
      descricao:
        "Peixonauta, um peixe detetive, vive aventuras investigando mistérios e problemas ambientais, ensinando valores de amizade e preservação da natureza.",
      imagem: "assets-recomendacoes/peixonauta.png",
      link: "https://youtu.be/WST1Tt_vQbg?si=gO3DirQ0QDdG3YAc",
    },
    {
      nome: "Meu Amigãozão",
      genero: "Animação / Fantasia",
      formato: "Série / Filme",
      regiao: "Sudeste",
      lancamento: 2010 / 2022,
      descricao:
        "As aventuras de Yuri, Lili e Matt com seus amigos imaginários gigantes, explorando amizade, criatividade e aprendizado em situações mágicas e divertidas.",
      imagem: "assets-recomendacoes/meu-amigaozao.png",
      link: "https://youtu.be/rwq_QqQCAow?si=yRB6A0guI9bjztTH",
    },
    {
      nome: "S.O.S. Mulheres ao Mar",
      genero: "Comédia / Romance",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2014,
      descricao:
        "Três amigas embarcam em um cruzeiro para tentar reconquistar os ex-namorados, vivendo situações engraçadas e inesperadas, com muito romance e diversão.",
      imagem: "assets-recomendacoes/sos-mulheres-ao-mar.png",
      link: "https://youtu.be/M86Al02r6BI?si=rpuCUH8SEZzXP0ir",
    },
    {
      nome: "Hoje Eu Quero Voltar Sozinho",
      genero: "Romance / LGBTQIA+",
      formato: "Filme",
      regiao: "Centro-Oeste",
      lancamento: 2014,
      descricao:
        "Leonardo, um adolescente cego, enfrenta desafios de independência e descobre o primeiro amor quando seu colega Gabriel entra em sua vida.",
      imagem: "assets-recomendacoes/hoje eu quero voltar sozinho - filmes.png",
      link: "https://youtu.be/rRSaDRncXQI?si=rAtK_G--jVyK2EpQ",
    },
    {
      nome: "O Animal Cordial",
      genero: "Terror / Suspense",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2017,
      descricao:
        "Um jantar de luxo em um restaurante se transforma em um pesadelo quando criminosos invadem o local, desencadeando uma sequência de violência e tensão psicológica.",
      imagem: "assets-recomendacoes/o animal cordial - filmes.png",
      link: "https://youtu.be/Jc5qJZ7hpto?si=V1N2veqaaDqYuXdw",
    },
    {
      nome: "Minha Mãe é uma Peça",
      genero: "Comédia",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2013,
      descricao:
        "Dona Hermínia, uma mãe superprotetora e hilária, entra em conflito com os filhos adolescentes e decide repensar sua vida, rendendo momentos cômicos e emocionantes.",
      imagem: "assets-recomendacoes/minha mae e uma peca- filmes.png",
      link: "https://youtu.be/CnUzqhuVvis?si=IZZl5YR2VPlDkZDD",
    },
    {
      nome: "O Auto da Compadecida",
      genero: "Aventura / Comédia",
      formato: "Filme",
      regiao: "Nordeste",
      lancamento: 2000,
      descricao:
        "João Grilo e Chicó vivem diversas aventuras no sertão nordestino, enfrentando o cangaceiro, o padeiro e até o próprio Diabo, com muito humor e astúcia.",
      imagem: "assets-recomendacoes/o auto da compadecida - filmes.png",
      link: "https://youtu.be/x7ISUk6Y35Q?si=qEO9JrZRnHO1M3-T",
    },
    {
      nome: "Democracia em Vertigem",
      genero: "Documentário",
      formato: "Filme (Documentário)",
      regiao: "Nacional",
      lancamento: 2019,
      descricao:
        "Documentário que analisa a política brasileira contemporânea, mostrando a ascensão e queda da presidente Dilma Rousseff e os impactos sociais e históricos do período.",
      imagem: "assets-recomendacoes/democracia em vertigem- filmes.png",
      link: "https://youtu.be/vwZ5m10y1rQ?si=m-MKDMHU3Bo0yHwz",
    },
    {
      nome: "Turma da Mônica: Laços",
      genero: "Fantasia / Animação",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2019,
      descricao:
        "Mônica, Cebolinha, Cascão e Magali embarcam em uma aventura para resgatar o cachorro Floquinho, enfrentando obstáculos e aprendendo sobre amizade e coragem.",
      imagem: "assets-recomendacoes/Turma-da-Monica-Lacos- filmes.png",
      link: "https://youtu.be/Mjz_IqLtI58?si=M36WemtzF_Oc1H75",
    },
    {
      nome: "O Lobo Atrás da Porta",
      genero: "Suspense",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2013,
      descricao:
        "Um triângulo amoroso termina em tragédia, com um suspense psicológico envolvendo adultério, ciúmes e assassinato, baseado em fatos reais.",
      imagem: "assets-recomendacoes/o lobo atras da porta - filmes.png",
      link: "https://youtu.be/VKTteIdlEDI?si=Ni_pxvVubCIvDc6n",
    },
    {
      nome: "Ó Paí, Ó",
      genero: "Musical / Comédia",
      formato: "Filme",
      regiao: "Nordeste",
      lancamento: 2007,
      descricao:
        "A vida cotidiana e as dificuldades de moradores do Pelourinho em Salvador são retratadas com humor, música e cultura afro-brasileira.",
      imagem: "assets-recomendacoes/o pai o - filmes.png",
    },
    {
      nome: "Besouro",
      genero: "Ação / Dança ",
      formato: "Filme",
      regiao: "Bahia",
      lancamento: 2009,
      descricao:
        "A história do lendário capoeirista Besouro Mangangá, que luta contra opressão e injustiça enquanto exibe sua incrível habilidade em capoeira.",
      imagem: "assets-recomendacoes/besouro - filmes.png",
      link: "https://youtu.be/-iPi-7Rdmq4?si=8OkmZIEGFqKD-u-m",
    },
    {
      nome: "Bacurau",
      genero: "Faroeste / Ficção Científica",
      formato: "Filme",
      regiao: "Nordeste",
      lancamento: 2019,
      descricao:
        "Uma pequena comunidade no sertão brasileiro descobre que seu vilarejo foi apagado do mapa, e os moradores unem forças para se defender de ameaças externas, misturando faroeste com crítica social.",
      imagem: "assets-recomendacoes/bacurau-filmes.png",
      link: "https://youtu.be/qlheaoLnewE?si=HIPGmNdgTauTNiaO",
    },
    {
      nome: "As Boas Maneiras",
      genero: "Terror / Fantasia / Drama",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2017,
      descricao:
        "Dois mundos distintos se cruzam quando uma enfermeira é contratada para cuidar de uma mulher grávida misteriosa, e segredos sobrenaturais começam a se revelar.",
      imagem: "assets-recomendacoes/as boas maneiras-filme.png",
      link: "https://youtu.be/FXE-YqM-ROo?si=9tee5ep6pkPBX7om",
    },
    {
      nome: "Onde Está Meu Coração",
      genero: "Drama",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 2021,
      descricao:
        "Uma médica enfrenta crises pessoais e familiares ao lidar com os desafios de sua profissão e escolhas de vida.",
      imagem: "assets-recomendacoes/onde-esta-meu-coracao-filmes.png",
      link: "https://youtu.be/sINFhRMgHoE?si=vzoeDcRcDcXDuPLb",
    },

    {
      nome: "Unidade Básica",
      genero: "Drama / Comédia",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 2016,
      descricao:
        "A rotina de médicos e pacientes de uma unidade de saúde pública revela dramas, desafios e situações cômicas do dia a dia.",
      imagem: "assets-recomendacoes/unidade-basica-filmes.png",
      link: "https://youtu.be/mxzLaQ1ETF4?si=CpITazn7OLsFCqTm",
    },

    {
      nome: "Operações Especiais",
      genero: "Ação",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2015,
      descricao:
        "Baseado em casos reais, policiais enfrentam situações de extrema tensão e risco enquanto lidam com o crime organizado.",
      imagem: "assets-recomendacoes/as boas maneiras-filme.png",
      link: "https://youtu.be/xksgFpJK5hM?si=eiDSIQySjlHdSf87",
    },
    {
      nome: "A Frente Fria que a Chuva Traz",
      genero: "Ação / Drama",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2016,
      descricao:
        "Um drama de ação e crime baseado em peça teatral, explorando conflitos e tensões na vida urbana.",
      imagem: "assets-recomendacoes/a frente fria que a chuva tras-filmes.png",
      link: "https://youtu.be/Ro7RBhkZszw?si=oyGjzUMnfvR7Iw6m",
    },

    {
      nome: "O Doutrinador – A Série",
      genero: "Ação",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 2019,
      descricao:
        "Baseada na HQ, a série acompanha um vigilante que combate a corrupção no Brasil, enfrentando desafios éticos e criminais.",
      imagem: "assets-recomendacoes/o doutrinador-filmes.png",
      link: "https://youtu.be/vhQJvL159Mk?si=0JX72nBWJAkemAHH",
    },

    {
      nome: "A Máquina",
      genero: "Ficção científica / Romance",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2005,
      descricao:
        "A história de um jovem apaixonado e seu invento extraordinário que muda sua vida, misturando romance e fantasia.",
      imagem: "assets-recomendacoes/a-maquina-filmes.png",
    },

    {
      nome: "Rotas do Ódio",
      genero: "Drama / Suspense",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 2018,
      descricao:
        "Uma série que retrata a violência urbana e os dilemas pessoais de seus protagonistas em meio a crimes e conflitos.",
      imagem: "assets-recomendacoes/rotas-do-odio-filmes.png",
    },

    {
      nome: "Reality Z",
      genero: "Terror / Suspense",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 2020,
      descricao:
        "Zumbis invadem um reality show, forçando participantes e produção a lutar pela sobrevivência.",
      imagem: "assets-recomendacoes/reality-z-netflix-filmes.png",
      link: "https://youtu.be/Q2vsTdjsQRE?si=lu28t0MCNouSFk7f",
    },

    {
      nome: "Martírio",
      genero: "Documentário",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2016,
      descricao:
        "Documentário que acompanha a luta das comunidades indígenas no Brasil e seus desafios sociais e culturais.",
      imagem:
        "assets-recomendacoes/Cartaz-do-filme-Martirio-do-antropologo-Vincent-Carelli-filmes.png",
      link: "https://youtu.be/Au88LP2nhv4?si=-dCqBHIcgg68KbsR",
    },

    {
      nome: "Estou Me Guardando Para Quando o Carnaval Chegar",
      genero: "Documentário",
      formato: "Filme",
      regiao: "Nordeste",
      lancamento: 2019,
      descricao:
        "Um retrato do impacto econômico e social do carnaval na vida de artistas e trabalhadores culturais.",
      imagem:
        "assets-recomendacoes/estou me guardando para quando o carnaval chegar-filmes.png",
      link: "https://youtu.be/ms84S1JTAYg?si=n1bMMtfskWhkkHuR",
    },

    {
      nome: "A Corrida das Vacinas",
      genero: "Documentário",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 2021,
      descricao:
        "Série documental sobre a corrida global para a criação e distribuição das vacinas contra a Covid-19.",
      imagem: "assets-recomendacoes/a corrida das vacinas-filmes.png",
    },

    {
      nome: "Quebrando o Tabu",
      genero: "Documentário",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 2018,
      descricao:
        "Explora questões sociais e políticas controversas, incentivando debates sobre drogas, violência e sociedade.",
      imagem: "assets-recomendacoes/quebrando o tabu-filmes.png",
    },

    {
      nome: "Malasartes e o Duelo com a Morte",
      genero: "Fantasia / Aventura / Comédia",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2017,
      descricao:
        "Malasartes enfrenta desafios sobrenaturais e aventuras cômicas em uma narrativa de fantasia brasileira.",
      imagem: "assets-recomendacoes/malasartes-filmes.png",
      link: "https://youtu.be/s_qtWlhxhlA?si=o6V2ulO40SNUmHtN",
    },

    {
      nome: "O Grilo Feliz e os Insetos Gigantes",
      genero: "Fantasia / Animação / Aventura",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2009,
      descricao:
        "Um grilo enfrenta perigos e criaturas gigantes em uma aventura animada e divertida.",
      imagem: "assets-recomendacoes/o grilo feliz-filmes.png",
      link: "https://youtu.be/xq07If3LGTM?si=iUAuBtcejooUvrSJ",
    },

    {
      nome: "Detetives do Prédio Azul (D.P.A.)",
      genero: "Mistério / Infantil",
      formato: "Série / Filme ",
      regiao: "Sudeste",
      lancamento: 2012,
      descricao:
        "Adolescentes resolvem mistérios em seu prédio, combinando humor e aventura para o público infantil.",
      imagem: "assets-recomendacoes/dpa-filmes.png",
    },

    {
      nome: "Elis",
      genero: "Musical / Drama",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2016,
      descricao:
        "A vida e carreira da cantora Elis Regina, mostrando sua trajetória artística e pessoal.",
      imagem: "assets-recomendacoes/elis-filmes.png",
      link: "",
    },

    {
      nome: "Estômago",
      genero: "Comédia",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2007,
      descricao:
        "A trajetória de um cozinheiro que ascende na vida através de suas habilidades culinárias, enfrentando dilemas morais.",
      imagem: "assets-recomendacoes/estomago-filmes.png",
      link: "https://youtu.be/Awq6P5Bjvgg?si=OGxJzRaZHa_8QYSo",
    },

    {
      nome: "Cine Holliúdy",
      genero: "Comédia / Drama",
      formato: "Série",
      regiao: "Nordeste",
      lancamento: 2019,
      descricao:
        "A vida de um cineasta amador no interior do Ceará, misturando humor regional e cultura local.",
      imagem: "assets-recomendacoes/cine-filmes.png",
      link: "https://youtu.be/dD0UM7DPdig?si=UZygvF19EO_lh2kE",
    },

    {
      nome: "Tainá – Uma Aventura na Amazônia",
      genero: "Aventura / Infantil",
      formato: "Filme",
      regiao: "Norte",
      lancamento: 2001,
      descricao:
        "Tainá enfrenta desafios na floresta amazônica, promovendo aventuras e valores ambientais para o público infantil.",
      imagem: "assets-recomendacoes/taina-filmes.png",
      link: "https://youtu.be/uUJN8IcwZlQ?si=8N3YG15RX50MCREE",
    },

    {
      nome: "Ilha de Ferro",
      genero: "Drama / Suspense",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 2018,
      descricao:
        "A vida em uma plataforma de petróleo, com conflitos, perigos e relações humanas complexas.",
      imagem: "assets-recomendacoes/ilha de ferro-filmes.png",
      link: "https://youtu.be/OKAAr2BaSRk?si=lYKxSSDzhz-YiixP",
    },

    {
      nome: "Brincante",
      genero: "Musical / Dança",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2014,
      descricao:
        "Documentário artístico que retrata a vida e obra de artistas de dança no Brasil.",
      imagem: "assets-recomendacoes/brincante-filmes.png",
      link: "https://youtu.be/c0CskKCbQFA?si=OwJD-g5T-tCRx22R",
    },
    {
      nome: "Nosso Sonho: Claudinho & Buchecha",
      genero: "Musical / Drama",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2023,
      descricao:
        "Baseado na trajetória da dupla Claudinho & Buchecha, o filme retrata a amizade, os desafios e o sucesso dos ícones do funk melody brasileiro.",
      imagem: "assets-recomendacoes/nosso sonho-filmes.png",
      link: "https://youtu.be/u-HjfQ4am88?si=hCTwt41UdvFINB-L",
    },

    {
      nome: "Até que a Sbórnia nos Separe",
      genero: "Animação",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2013,
      descricao:
        "Uma sátira animada que narra conflitos políticos e culturais em uma nação fictícia.",
      imagem: "assets-recomendacoes/ate que a - filmes.png",
    },

    {
      nome: "Irmão do Jorel",
      genero: "Animação / Comédia / Infantil",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 2014,
      descricao:
        "As aventuras de Jorel, um garoto excêntrico, com humor e criatividade para o público infantil.",
      imagem: "assets-recomendacoes/irmao-filmes.png",
    },

    {
      nome: "Sessão de Terapia",
      genero: "Drama",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 2012,
      descricao:
        "Um psicólogo atende pacientes com diversos problemas, explorando a complexidade das relações humanas.",
      imagem: "assets-recomendacoes/sessao-terapia-filmes.png",
      link: "https://youtu.be/eUCoO6avoyQ?si=qmnX1_i6GmrPH6eG",
    },

    {
      nome: "Carcereiros",
      genero: "Drama / Policial",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 2017,
      descricao:
        "A vida de agentes penitenciários, mostrando conflitos internos, dilemas éticos e violência dentro do sistema prisional.",
      imagem:
        "assets-recomendacoes/carcereiros-2-assistir-online-globoplay-jose-loreto-filmes.png",
      link: "https://youtu.be/SjFGW70Ri6I?si=HByOdnaQ2OCfG0c7",
    },
    {
      nome: "O Clube dos Canibais",
      genero: "Terror / Suspense",
      formato: "Filme",
      regiao: "Sudeste",
      lancamento: 2018,
      descricao:
        "Um grupo de jovens se vê envolvido em situações bizarras e assustadoras, misturando terror e sátira.",
      imagem: "assets-recomendacoes/o-clube-dos-canibais-filmes.png",
      link: "https://youtu.be/kC3uUM0tgqk?si=GE7cCaPzBPBDus1t",
    },

    {
      nome: "Boca a Boca",
      genero: "Drama / Suspense",
      formato: "Série",
      regiao: "Sudeste",
      lancamento: 2020,
      descricao:
        "Durante um surto de doença misteriosa, adolescentes enfrentam medos e segredos pessoais enquanto lidam com a crise.",
      imagem: "assets-recomendacoes/Boca-a-boca_interno-filmes.png",
      link: "https://youtu.be/aPUkkh7iNAg?si=Pqqnvha-5rPpbNPD",
    },

    {
      nome: "Desalma",
      genero: "Suspense / Fantasia",
      formato: "Série",
      regiao: "Sul",
      lancamento: 2020,
      descricao:
        "Mistérios e eventos sobrenaturais abalam uma pequena comunidade, revelando segredos obscuros entre os moradores.",
      imagem: "assets-recomendacoes/desalma-filmes.png",
      link: "https://youtu.be/BP4o9FWdJNU?si=R346bo4I7SwC5n40",
    },
  ],
  livros: [
    {
      nome: "Quarto de Despejo",
      autor: "Carolina Maria de Jesus",
      genero: "História",
      regiao: "Minas Gerais (MG)",
      editora: "Francisco Alves",
      ano: 1960,
      descricao:
        "Diário real de Carolina, moradora de uma favela em São Paulo, que relata o cotidiano da pobreza, da fome e da desigualdade social com uma voz poderosa e autêntica.",
      imagem: "assets-recomendacoes/quarto - livros.png",
    },
    {
      nome: "Raízes do Brasil",
      autor: "Sérgio Buarque de Holanda",
      genero: "História",
      regiao: "São Paulo (SP)",
      editora: "José Olympio",
      ano: 1936,
      descricao:
        "Obra clássica de sociologia e história que analisa a formação do povo brasileiro, destacando o 'homem cordial' e as influências ibéricas na sociedade.",
      imagem: "assets-recomendacoes/raizes - livros.png",
    },
    {
      nome: "Romanceiro da Inconfidência",
      autor: "Cecília Meireles",
      genero: "Poesia",
      regiao: "Rio de Janeiro (RJ)",
      editora: "José Olympio",
      ano: 1953,
      descricao:
        "Poema épico-lírico que recria, de forma simbólica e emocional, os eventos e personagens da Inconfidência Mineira.",
      imagem: "assets-recomendacoes/romanceiro -livro.png",
    },
    {
      nome: "Poema Sujo",
      autor: "Ferreira Gullar",
      genero: "Poesia",
      regiao: "Maranhão (MA)",
      editora: "Civilização Brasileira",
      ano: 1976,
      descricao:
        "Poema intenso escrito no exílio, no qual o autor revisita memórias pessoais e a realidade política do Brasil durante a ditadura militar.",
      imagem: "assets-recomendacoes/poema -livros.png",
    },
    {
      nome: "A Hora da Estrela",
      autor: "Clarice Lispector",
      genero: "Romance",
      regiao: "Rio de Janeiro (RJ)",
      editora: "José Olympio",
      ano: 1977,
      descricao:
        "A história de Macabéa, uma jovem nordestina ingênua que tenta sobreviver no Rio de Janeiro, narrada com reflexões sobre a existência e o sofrimento humano.",
      imagem: "assets-recomendacoes/a hora - livros.png",
    },
    {
      nome: "A Falência",
      autor: "Júlia Lopes de Almeida",
      genero: "Romance",
      regiao: "Rio de Janeiro (RJ)",
      editora: "Garnier",
      ano: 1897,
      descricao:
        "Retrata a decadência moral e financeira de uma família burguesa carioca, explorando o papel da mulher e as contradições da elite da época.",
      imagem: "assets-recomendacoes/a falencia-livros.png",
    },
    {
      nome: "Noite na Taverna",
      autor: "Álvares de Azevedo",
      genero: "Mistério",
      regiao: "São Paulo (SP)",
      editora: "Tipografia de Paula Brito",
      ano: 1855,
      descricao:
        "Obra do ultrarromantismo brasileiro, com contos sombrios narrados por jovens decadentes sobre amor, morte e loucura.",
      imagem: "assets-recomendacoes/noite na - livros.png",
    },
    {
      nome: "A Causa Secreta",
      autor: "Machado de Assis",
      genero: "Mistério",
      regiao: "Rio de Janeiro (RJ)",
      editora: "Garnier (Várias Histórias)",
      ano: 1896,
      descricao:
        "Conto sobre o médico Fortunato, que sente prazer no sofrimento alheio — uma análise psicológica e moral do sadismo humano.",
      imagem: "assets-recomendacoes/a causa-livros.png",
    },
    {
      nome: "O Tempo e o Vento",
      autor: "Erico Verissimo",
      genero: "Ficção",
      regiao: "Rio Grande do Sul (RS)",
      editora: "Globo",
      ano: 1949,
      descricao:
        "Saga épica que narra a formação do Rio Grande do Sul e de uma família ao longo de gerações, misturando história e ficção.",
      imagem: "assets-recomendacoes/o tempo -livros.png",
    },
    {
      nome: "Doramar ou a Odisseia",
      autor: "Itamar Vieira Junior",
      genero: "Ficção",
      regiao: "Bahia (BA)",
      editora: "Todavia",
      ano: 2021,
      descricao:
        "Reúne contos poéticos sobre personagens marginalizados que buscam dignidade e afeto em meio às dores e desigualdades do Brasil contemporâneo.",
      imagem: "assets-recomendacoes/doramar-livros.png",
    },
    {
      nome: "Ou Isto ou Aquilo",
      autor: "Cecília Meireles",
      genero: "Infantil",
      regiao: "Rio de Janeiro (RJ)",
      editora: "Civilização Brasileira",
      ano: 1964,
      descricao:
        "Coletânea de poemas infantis que encantam pela musicalidade e leveza, com reflexões simples sobre o cotidiano e a imaginação.",
      imagem: "assets-recomendacoes/ou -livros.png",
    },
    {
      nome: "Pluft, o Fantasminha",
      autor: "Maria Clara Machado",
      genero: "Infantil",
      regiao: "Minas Gerais (MG)",
      editora: "Agir",
      ano: 1955,
      descricao:
        "Peça teatral infantil sobre um fantasminha medroso que descobre a coragem ao fazer amizade com uma menina humana.",
      imagem: "assets-recomendacoes/pluft -livros.png",
    },
  ],
  musicas: [
    {
      nome: "Foi Amor",
      genero: "Piseiro",
      artista: "Zé Vaqueiro",
      regiao: "Nordeste (Pernambuco)",
      imagem: "assets-recomendacoes/zé vaqueiro-musica.png",
      musica: "https://youtu.be/XtT4TKipdzY?si=0ERj7Ys32Z-_PtiK",
    },
    {
      nome: "Vai Malandra",
      genero: "Funk / Pop",
      artista: "Anitta",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/anitta - musica.png",
      musica: "https://youtu.be/kDhptBT_-VI?si=bGhJlmDA1eCM1sS3",
    },
    {
      nome: "Céu Azul",
      genero: "Rock (Nacional)",
      artista: "Charlie Brown Jr.",
      regiao: "Sudeste (São Paulo)",
      imagem: "assets-recomendacoes/charlie-brown-musica.png",
      musica: "https://youtu.be/DzhwydXmtH4?si=k-REWifMNFCnp9VR",
    },
    {
      nome: "Trenzinho Caipira",
      genero: "MPB / Clássico",
      artista: "Heitor Villa-Lobos",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/heitor villa lobos - musica.png",
      musica: "https://youtu.be/BB_Xas4C10A?si=EXNdEXBcp9WyM8qF",
    },
    {
      nome: "Filho da Noite",
      genero: "Trap / Hip Hop",
      artista: "Matuê",
      regiao: "Nordeste (Ceará)",
      imagem: "assets-recomendacoes/matue - musica.png",
      musica: "https://youtu.be/T-WHYnZlH4I?si=eYIDVHIzffC4Q_xa",
    },
    {
      nome: "Mulher",
      genero: "Trap / Rap",
      artista: "Dfideliz",
      regiao: "Sudeste (São Paulo)",
      imagem: "assets-recomendacoes/dfideliz - musicas.png",
      musica: "https://youtu.be/XnobfnCsieA?si=fNoT3yo3Pje1MHEu",
    },
    {
      nome: "Rebolation",
      genero: "Axé / Dança",
      artista: "Parangolé",
      regiao: "Nordeste (Bahia)",
      imagem: "assets-recomendacoes/parangolé - musica.png",
      musica: "https://youtu.be/X9P2d5lF2l4?si=j94jFhSzmU7MrIES",
    },
    {
      nome: "O Canto da Cidade",
      genero: "Axé / Pop",
      artista: "Daniela Mercury",
      regiao: "Nordeste (Bahia)",
      imagem: "assets-recomendacoes/daniela mercury- musica.png",
      musica: "https://youtu.be/oBK4pnLavlQ?si=aduHq5d66811LgHJ",
    },
    {
      nome: "Cê tá bem?",
      genero: "Trap / Rap",
      artista: "Dfideliz / Kiaz",
      regiao: "Sudeste (São Paulo)",
      imagem: "assets-recomendacoes/dfideliz - musicas.png",
      musica: "https://youtu.be/gEm-da2fmk8?si=iV-uPvSJoExq-8i2",
    },
    {
      nome: "Eu navegarei",
      genero: "Gospel",
      artista: "Gabriela Rocha",
      regiao: "Sudeste (São Paulo)",
      imagem: "assets-recomendacoes/gabriela rocha - musica.png",
      musica: "https://youtu.be/nSvxVCdj_gU?si=fxYz0DqdGlid8RrM",
    },
    {
      nome: "Rap da Felicidade",
      genero: "Rap / Hip Hop",
      artista: "Cidinho e Doca",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/cidinho e doca - musica.png",
      musica: "https://youtu.be/7pD8k2zaLqk?si=d9ZX-9gw-93gYW93",
    },
    {
      nome: "Kenny G",
      genero: "Trap / Hip Hop",
      artista: "Matuê",
      regiao: "Nordeste (Ceará)",
      imagem: "assets-recomendacoes/matue - musica.png",
      musica: "https://youtu.be/G1j4ye-cqnk?si=bvcn7G7wFpf5QEga",
    },
    {
      nome: "Eu Não Sou Tão Bom Assim",
      genero: "R&B / MPB / Rap",
      artista: "Delacruz / Filipe Ret/ Djonga (Prod.Malak)",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/delacruz- musica.jpg",
      musica: "https://youtu.be/5uU-vd3Ws9g?si=nYXcLKNvE5LlPqeh",
    },
    {
      nome: "Novo Balanço",
      genero: "Trap / R&B",
      artista: "Veigh",
      regiao: "Sudeste (São Paulo)",
      imagem: "assets-recomendacoes/veigh-musica.png",
      musica: "https://youtu.be/fEUCYAd0KGM?si=NFNjdfFCWxWKLXdx",
    },
    {
      nome: "Desabafo Freestyle",
      genero: "Trap",
      artista: "Cjota",
      regiao: "Sudeste (São Paulo)",
      imagem: "assets-recomendacoes/cjota-musica.jpg",
      musica: "https://youtu.be/Xu-9ygU-LEs?si=fxHim13aPzRZUGpb",
    },
    {
      nome: "Se Quiser Voltar",
      genero: "R&B / Rap / MPB",
      artista: "Delacruz",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/delacruz- musica.jpg",
      musica: "https://youtu.be/O3_UUUfJttY?si=fVQ1gSAk_N4Pjo6D",
    },
    {
      nome: "Púrpura",
      genero: "R&B / MPB",
      artista: "Budah",
      regiao: "Sudeste (Espírito Santo)",
      imagem: "assets-recomendacoes/budah-musica.jpg",
      musica: "https://youtu.be/C0CuyJ93nr8?si=buCojZ4x3gefzQwi",
    },
    {
      nome: "Aladdin",
      genero: "Rap / R&B",
      artista: "Delacruz",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/delacruz- musica.jpg",
      musica: "https://youtu.be/MP6mW4HQMBs?si=Z-zNXMNSK1GM9OCq",
    },
    {
      nome: "Mas Que Nada",
      genero: "Jazz / Samba",
      artista: "Jorge Ben Jor",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/jorge ben jor - musica.png",
      musica: "https://youtu.be/hg0XftC43Zo?si=ebVTdzfgV080yZui",
    },
    {
      nome: "Exagerado",
      genero: "MPB / Rock",
      artista: "Cazuza",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/cazuza - musica.png",
      musica: "https://youtu.be/KmVmoHg9zuU?si=x9uMRsV98cgLw3sq",
    },
    {
      nome: "Mania de Você",
      genero: "Pop / MPB",
      artista: "Rita Lee",
      regiao: "Sudeste (São Paulo)",
      imagem: "assets-recomendacoes/rita lee- musicas.png",
      musica: "https://youtu.be/RytrevkteVs?si=9p5l_qIxX6R7JhHZ",
    },
    {
      nome: "João e Maria",
      genero: "MPB",
      artista: "Chico Buarque",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/chico buarque- musica.png",
      musica: "https://youtu.be/Fc9e27PFIlo?si=v5IStcitndp4iqKO",
    },
    {
      nome: "Tudo Aconteceu",
      genero: "R&B / MPB",
      artista: "Delacruz e MC Du Black",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/delacruz- musica.jpg",
      musica: "https://youtu.be/wU1U7Jgq_uo?si=PCk86Z164JHrZBU_",
    },
    {
      nome: "Flor de Lis",
      genero: "MPB / Pop",
      artista: "Djavan",
      regiao: "Nordeste (Alagoas)",
      imagem: "assets-recomendacoes/djavan - muisca.png",
      musica: "https://youtu.be/peR8eOcGA3M?si=WiEVoKYWbLBw6OQP",
    },
    {
      nome: "Lancinho",
      genero: "Pagode / Samba",
      artista: "Turma do Pagode",
      regiao: "Sudeste (São Paulo)",
      imagem: "assets-recomendacoes/turma do pagode -musica.png",
      musica: "https://youtu.be/S_SXl-ETXRI?si=N61AdJ2BwqxfYCvY",
    },
    {
      nome: "Asa Branca",
      genero: "Forró / Tradicional",
      artista: "Luiz Gonzaga",
      regiao: "Nordeste (Pernambuco)",
      imagem: "assets-recomendacoes/luiz gonzaga - musica.png",
      musica: "https://youtu.be/zsFSHg2hxbc?si=-EAo-SHQDmOmXg-C",
    },
    {
      nome: "Alma Livre",
      genero: "MPB / Rap / R&B",
      artista: "Delacruz",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/delacruz- musica.jpg",
      musica: "https://youtu.be/gFUledxFCpo?si=Y50u92823cLqFIvD",
    },
    {
      nome: "Eu Só Quero um Xodó",
      genero: "Forró / MPB",
      artista: "Dominguinhos",
      regiao: "Nordeste (Pernambuco)",
      imagem: "assets-recomendacoes/dominguinhos - musica.png",
      musica: "https://youtu.be/D161m6Bw1B8?si=SPNdnmnRIULl0auT",
    },
    {
      nome: "Tá Escrito",
      genero: "Pagode / Samba",
      artista: "Revelação",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/revelação- musica.png",
      musica: "https://youtu.be/x0_Yp30U46g?si=yEBBPqglLGpwlq8-",
    },
    {
      nome: "Tempo Perdido",
      genero: "Pop / Rock",
      artista: "Legião Urbana",
      regiao: "Centro-Oeste (Brasília, DF)",
      imagem: "assets-recomendacoes/legiao urbana - musica.png",
      musica: "https://youtu.be/BW73u2yGGa8?si=XjXlTypkjSIWQB8u",
    },
    {
      nome: "Boa Sorte",
      genero: "MPB / Pop",
      artista: "Vanessa da Mata",
      regiao: "Centro-Oeste (Mato Grosso)",
      imagem: "assets-recomendacoes/vanessa da mata - musicas.png",
      musica: "https://youtu.be/v4k6JgC7UVA?si=JFaR37kgYCkcOiPA",
    },
    {
      nome: "Só Love",
      genero: "Funk / Pop",
      artista: "Claudinho & Buchecha",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/claudinho e buchecha-musicas.png",
      musica: "https://youtu.be/jaNgZu5bKYA?si=QXjS7D8DJKAFu6H-",
    },
    {
      nome: "Quero Te Encontrar",
      genero: "Funk",
      artista: "Claudinho & Buchecha",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/claudinho e buchecha-musicas.png",
      musica: "https://youtu.be/nvGcaTGcN5A?si=S5tYKoqZAm4FKwsq",
    },
    {
      nome: "Metamorfose Ambulante",
      genero: "Rock",
      artista: "Raul Seixas",
      regiao: "Nordeste (Bahia)",
      imagem: "assets-recomendacoes/raul-musicas.png",
      musica: "https://youtu.be/CmB4sfoZkwo?si=9lfdkNWyqjsjuYVF",
    },
    {
      nome: "Pro Dia Nascer Feliz",
      genero: "Rock",
      artista: "Barão Vermelho (Cazuza & Frejat)",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/barao-vermelho-musicas.png",
      musica: "https://youtu.be/rninkFp4oEQ?si=wWQG23XzpYOE_Xco",
    },
    {
      nome: "Tempo Perdido",
      genero: "Rock",
      artista: "Legião Urbana",
      regiao: "Centro-Oeste (Brasília)",
      imagem: "assets-recomendacoes/legiao-musicas.png",
      musica: "https://youtu.be/BW73u2yGGa8?si=x30n60c6tXyii19r",
    },
    {
      nome: "O Tempo Não Para",
      genero: "Rock",
      artista: "Cazuza",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/cazuza-musicas.png",
      musica: "https://youtu.be/_Jcn10Iiuu4?si=41-E-fEmx7rYVgH7",
    },
    {
      nome: "Meu Erro",
      genero: "Rock",
      artista: "Os Paralamas do Sucesso",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/os paralamas-musicas.png",
      musica: "https://youtu.be/j_2wguCL_10?si=opV09uJYDaND67e2",
    },
    {
      nome: "Infinita Highway",
      genero: "Rock",
      artista: "Engenheiros do Hawaii",
      regiao: "Sul (Rio Grande do Sul)",
      imagem: "assets-recomendacoes/engenheiros-musicas.png",
      musica: "https://youtu.be/fTpgaQNHKwg?si=TYuigiKNAdFQXoiY",
    },
    {
      nome: "Epitáfio",
      genero: "Rock",
      artista: "Titãs",
      regiao: "Sudeste (São Paulo)",
      imagem: "assets-recomendacoes/Titas-banda-musicas.png",
      musica: "https://youtu.be/I29JUuotXG4?si=trLhCVuWLcX7Efw6",
    },
    {
      nome: "Olhar 43",
      genero: "Rock",
      artista: "RPM",
      regiao: "Sudeste (São Paulo)",
      imagem: "assets-recomendacoes/rpm-musicas.png",
      musica: "https://youtu.be/Xin46vgD8p4?si=HFTT9yDbwx29cbmK",
    },
    {
      nome: "Rap do Salgueiro",
      genero: "Funk",
      artista: "Claudinho & Buchecha",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/claudinho e buchecha-musicas.png",
      musica: "https://youtu.be/Dvlix-xbOPs?si=D76GBJr2y5e4y2Iu",
    },
    {
      nome: "Aluga-se",
      genero: "Rock",
      artista: "Raul Seixas",
      regiao: "Nordeste (Bahia)",
      imagem: "assets-recomendacoes/raul-musicas.png",
      musica: "https://youtu.be/XSeVwyzZyYs?si=qjwxBDmZJN8kGkAt",
    },
    {
      nome: "Ideologia",
      genero: "Rock",
      artista: "Cazuza",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/cazuza-musicas.png",
      musica: "https://youtu.be/hfsxcebq5Rc?si=B1VaAjjxHccK8bnK",
    },
    {
      nome: "Nada Sei (Apneia)",
      genero: "Rock",
      artista: "Kid Abelha",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/kid abelha-musicas.png",
      musica: "https://youtu.be/bftvYl3CugA?si=hreMxWWLWzw7q2FS",
    },
    {
      nome: "Sociedade Alternativa",
      genero: "Rock",
      artista: "Raul Seixas",
      regiao: "Nordeste (Bahia)",
      imagem: "assets-recomendacoes/raul-musicas.png",
      musica: "https://youtu.be/CfgYcLBP9lI?si=KBR3lIgmgsvFGrKC",
    },
    {
      nome: "Você Não Soube Me Amar",
      genero: "Rock",
      artista: "Blitz",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/blitz-musicas.png",
      musica: "https://youtu.be/3oFOZ2dbY10?si=7OamE7wyv-cAtT8i",
    },
    {
      nome: "Fico Assim Sem Você",
      genero: "Funk  / Pop",
      artista: "Claudinho & Buchecha",
      regiao: "Sudeste (Rio de Janeiro)",
      imagem: "assets-recomendacoes/claudinho e buchecha-musicas.png",
      musica: "https://youtu.be/k1PBcEGun7A?si=rnGUigPhJwdBBPNc",
    },
  ],
  Esportes: [
    {
      nome: "Capoeira",
      coletivo_individual: "Esporte coletivo",
      origem: "Brasil, criada por africanos escravizados no período colonial",
      descricao:
        "Combinação de luta, dança e música, com movimentos acrobáticos, golpes e esquivas",
      regiao: "Nordeste",
      imagem: "assets-recomendacoes/capoeira-esportes.png",
    },
    {
      nome: "Jiu-Jitsu Brasileiro",
      coletivo_individual: "Esporte individual",
      origem:
        "Brasil, desenvolvido a partir do Jiu-Jitsu japonês no início do século XX pelos irmãos Gracie",
      descricao:
        "Arte marcial focada em técnicas de luta no solo, submissões e controle do adversário",
      regiao: "Norte",
      imagem: "assets-recomendacoes/jiujitsu-esportes.png",
    },
    {
      nome: "Futebol de areia",
      coletivo_individual: "Esporte coletivo",
      origem:
        "Brasil, desenvolvido nas praias do Rio de Janeiro na década de 1940",
      descricao:
        "Esporte jogado na areia, semelhante ao futebol tradicional, mas com regras adaptadas e times menores",
      regiao: "Sudeste",
      imagem: "assets-recomendacoes/futebol-areia-esportes.png",
    },
    {
      nome: "Peteca",
      coletivo_individual: "Esporte individual ou coletivo",
      origem: "Brasil, originado dos povos indígenas antes da colonização",
      descricao: "Esporte de rede jogado com as mãos usando uma peteca",
      regiao: "Centro-Oeste",
      imagem: "assets-recomendacoes/Esporte-peteca.png",
    },
    {
      nome: "Padel",
      coletivo_individual: "Esporte coletivo",
      origem: "Brasil, desenvolvido na década de 1960",
      descricao:
        "Esporte de raquete jogado em dupla, com bola semelhante à de tênis e paredes que fazem parte do jogo",
      regiao: "Sul",
      imagem: "assets-recomendacoes/padel-esportes.png",
    },
    {
      nome: "Frescobol",
      coletivo_individual: "Esporte coletivo",
      origem:
        "Brasil, criado nas praias de Copacabana (RJ) no final da década de 1940.",
      descricao:
        "Esporte cooperativo de raquetes em dupla, com o objetivo de manter a bola no ar o máximo de tempo possível.",
      regiao: "Sudeste",
      imagem: "assets-recomendacoes/frescobol-esportes.png",
    },
    {
      nome: "Tamboréu",
      coletivo_individual: "Esporte coletivo",
      origem: "Brasil, criado em Santos (SP) na década de 1920.",
      descricao:
        "Modalidade semelhante ao tênis, jogada com tambores e bola de borracha, típica das praias paulistas.",
      regiao: "Sudeste",
      imagem: "assets-recomendacoes/tamboreu-esportes.png",
    },
    {
      nome: "Futmesa",
      coletivo_individual: "Esporte coletivo",
      origem:
        "Brasil, criado no início dos anos 2000, inspirado no futebol e no tênis de mesa.",
      descricao:
        "Esporte jogado em mesa curva, onde os jogadores usam o corpo e a cabeça para rebater a bola.",
      regiao: "Sudeste",
      imagem: "assets-recomendacoes/futmesa-esportes.png",
    },
    {
      nome: "Biribol",
      coletivo_individual: "Esporte coletivo",
      origem: "Brasil, criado em 1968 por Dario Miguel Pedro em Birigui.",
      descricao:
        "Esporte aquático semelhante ao vôlei, jogado dentro de uma piscina com regras adaptadas.",
      regiao: "Sudeste",
      imagem: "assets-recomendacoes/biribol-esportes.png",
    },
  ],
};
