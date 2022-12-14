# alura-tracker

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Observações das Aulas
### Vue3: explorando o framework
1. Iniciando o Alura Tracker
    - Iniciar um projeto novo, utilizando TypeScript e Vue3;
        Aprendemos como instalar e utilizar o vue cli para construir um novo projeto, customizando inclusive as dependências que teremos.
    - Importar o Bulma;
        Fazendo uma única importação, no index.html, passamos a ter disponível todos as facilidades desse framework CSS.
    - Criar componentes;
        Para cada novo componente, criamos um arquivo Vue com as seguintes sessões: template, para o html. script, para o comportamento e style para o visual.
    - Escutar eventos de clique;
        O Vue nos ajuda a trabalhar com eventos, basta utilizarmos a sintaxe @NOMEDOEVENTO direto no elemento que queremos ouvir.
    - Trabalhar com intervalos.
        O setInterval é perfeito para nosso cenário, de incrementar o tempo decorrido a cada segundo.
2. Compondo componentes
    - Refatorar componentes em componentes menores;
        Vimos que é muito fácil atribuir funcionalidades demais a um componente existente. Quando isso aconteceu, aprendemos a refatorar o componente em componentes menores e mais coesos.
    - Formatar a exibição de X segundos em HH:mm:ss;
        Aprendemos que podemos construir um objeto Date passando em seu construtor a quantidade de microsegundos decorridos. Depois, fatiamos a string para pegarmos somente as horas, minutos e segundos.
    - Emitir eventos customizados;
        Aprendemos a utilizar o $emit para criar eventos utilizados na comunicação entre componentes.
    - Ouvir eventos customizados.
        Aprendemos que ouvir eventos customizados é tão simples quanto ouvir eventos HTML, como o click por exemplo.
3. Trabalhando com listas
    - Renderizar listas com o v-for;
        Utilizamos um mecanismo de repetição para renderizar N vezes uma tarefa, onde N é o tamanho da lista. Isso faz com que nossa lista seja dinâmica.
    - Condicionais com v-if / v-else;
        Aprendemos como esconder ou exibir um componente, dado um estado específico utilizando a diretiva v-if.
    - Fallback de conteúdo com o operador || (OU);
        Utilizamos o operador OU para exibir um texto padrão, caso a tarefa não possua uma descrição.
    - Slots.
        Aprendemos a lidar com o slot quando criamos um componente para representar o Box. Assim, conseguimos exibir os elementos filhos dentro do nosso Box.
4. Estilos estlosos
   - Uso de variáveis CSS para temas (claro/escuro);
     - Utilizando essas variáveis, nós podemos facilmente controlar o tema do nosso Alura Tracker, alterando a cor de fundo e a cor do texto de acordo com o tema aplicado.
   - Adicionar e remover classes baseado num estado do componente;
     - Aprendemos a adicionar ou remover classes, condicionalmente utilizando a diretiva :class.
   - Estilos via objetos.
     - Aprendemos uma nova forma de aplicar estilos a um elemento, utilizando um objeto que representa as propriedades e seus valores.

### Vue3: avançando no framework
1. Bem começado, metade feito
    - Instalar e configurar o vue-router num projeto existente;
      - Vimos que o Vue é um framework progressivo e não vem com roteamento por padrão.
    - Configurar o arquivo de rotas;
      - Criamos uma lista de objetos, indicando qual componente será responsável por qual rota
2. Gerenciando estado
   - Instalar e configurar o vue-router num projeto existente:
     - Vimos que o Vue é um framework progressivo e não vem com uma biblioteca de roteamento instalada por padrão. Logo, instalamos e configuramos o vue-router para gerir nossas rotas e transformar nossa aplicação numa verdadeira SPA.
3. Evoluindo o Alura Tracker
   - Manipular o estado;
     - Inserimos, editamos, excluímos e listamos os projetos.
   - Rotas aninhadas;
     - Agrupar rotas dentro de um mesmo contexto.
   - Tipos de mutações;
     - Extraímos os nomes das mutações para constantes.
4. Notificando os usuários
   - Controlar o estado;
     - Desenvolvendo a lista de notificações.
   - Combinar o Vue e o Bulma;
     - Utilizando componentes visuais prontos do Bulma e cuidado do comportamento utilizando o Vue.
5. Compilando a aplicação
     - Mixins;
       - Como reaproveitar código e qual a fragilidade dessa técnica.
     - Composition API;
       - Como reaproveitar código de uma forma mais coesa e legível.
     - Computed - debugging;
       - Como depurar código de propriedades computadas.

### Vue3: composition API e Vuex
1. Hora da API
   - Configurar um mock de API Rest;
     - Utilizando o json server, conseguimos levantar uma API utilizando o arquivo db.json.
   - Instalar e configurar o axios;
     - Adicionamos a dependência e configuramos uma única instância para toda a aplicação.
   - Implementar ações, responsáveis pelo processamento assíncrono;
     - Diferente das mutations, as actions podem ser assíncronas, e não devem modificar o estado diretamente. Por isso, quando o processamento termina, nós fazemos o commit para atualizar o estado.
   - Despachar ações a partir dos componentes;
     - Podemos despachar as actions a partir de qualquer componente com acesso à store.
2. Organizando a store
   - A importância de manter a saúde do projeto;
     - Sempre que identificamos um problema conhecido, como a store com código demais, precisamos ter uma arquitetura alternativa para que o projeto possa ser mantido muito muito mais tempo antes de virar um legado difícil de trabalhar. 
   - Promises e async/await;
     - Vimos na atividade de alternativas que temos outra forma de lidar com métodos assíncronos.
3. Composition API
   - Configurar o componente;
     - Utilizando o método setup, conseguimos escrever tudo o que um componente precisa. Seja o seu estado, reagir ao ciclo de vida ou mesmo propriedades computadas.
   - Parâmetros do método setup;
     - Conseguimos acessar as props e o contexto do componente, mesmo utilizando a Composition API.
4. Reatividade
   - Computed como filtro;
     - Utilizando o hook computed, conseguimos filtrar em memória as tarefas que continham o texto digitado pelo usuário.
   - Watch e WatchEffect;
     - Agora sim, reagindo a alterações no campo de busca, buscamos diretamente da API as tarefas que possuem determinada descrição.
   - Reatividade
     - Procurando mergulhos cada vez mais fundo, descobrimos uma das formas de observarmos alterações em variáveis específicas e como reagir a elas.
5. Toques finais
   - Componentes com slots;
     - Utilizando os slots, conseguimos criar com facilidade componentes visuais que recebem seu conteúdo interno de forma dinâmica.
   - Named slots;
     - Aprendemos a dividir os slots e nomeá-los, diminuindo o acoplamento entre o conteúdo dinâmico e nossa estrutura de html e css.