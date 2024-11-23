class Pokemon {  // Define uma classe chamada 'Pokemon', que é um modelo para criar objetos de Pokémon.

    number;  // Propriedade para armazenar o número do Pokémon na Pokédex.

    name;  // Propriedade para armazenar o nome do Pokémon.

    type;  // Propriedade para armazenar o tipo principal do Pokémon (ex.: 'Fire', 'Water').

    types = [];  // Propriedade para armazenar uma lista de tipos do Pokémon (ex.: ['Fire', 'Flying']).

    photo;  // Propriedade para armazenar a URL ou o caminho da imagem do Pokémon.

    baseExp;  // Propriedade para armazenar a experiência base que o Pokémon concede ao ser derrotado.

    height;  // Propriedade para armazenar a altura do Pokémon.

    weight;  // Propriedade para armazenar o peso do Pokémon.

    abilities = [];  // Propriedade para armazenar uma lista de habilidades que o Pokémon pode ter (ex.: ['Overgrow', 'Chlorophyll']).

    moves = [];  // Propriedade para armazenar uma lista dos movimentos que o Pokémon pode aprender.

    stats = [];  // Propriedade para armazenar os valores de status do Pokémon, como ataque, defesa, velocidade, etc.

    description;  // Propriedade para armazenar uma descrição do Pokémon, geralmente retirada da Pokédex.

    generation;  // Propriedade para armazenar a geração em que o Pokémon foi introduzido (ex.: 'Generation I').

    eggGroups = [];  // Propriedade para armazenar os grupos de ovos aos quais o Pokémon pertence, usados na reprodução.

    evolutionChain;  // Propriedade para armazenar informações sobre a cadeia de evolução do Pokémon.

    evolutions = [];  // Propriedade para armazenar uma lista das evoluções do Pokémon (ex.: ['Charmander', 'Charmeleon', 'Charizard']).

    evolutionsSprites = [];  // Propriedade para armazenar as URLs ou caminhos das imagens das evoluções do Pokémon.

    liked;  // Propriedade para indicar se o Pokémon foi marcado como favorito ou não (ex.: true/false).
}
