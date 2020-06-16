# Boilerplate para projetos front end P&D

>Este projeto é uma base para iniciar novos projetos front end.

Para usar este projeto é necessário clonar o repositório, excluir a pasta `.git` e rodar o comando `git init` para iniciar um novo diretório a partir deste.



## Detalhes de como usar

Este boilerplate esta configurado para funcionar com webpack, e proxy reverso, para usar ele nesse cenário é necessário substituir o valor de `applicationsPath` em `application.path.js` e `basePath` em `Store/index` com o nome da aplicação, ou remover essa informação para rodar sem proxy reverso.

```
const applicationsPath = 'app/'

```
## Rodar Testes

A biblioteca usa `jest` e `react/testing/library`, para rodar testes unitários rode:

```
yarn test
```

Para ver a cobertura de tests rode:

```
yarn test:coverage
```

## Para gerar a versão de produção:

```
  yarn run build
```

## Iniciar em modo dev

```
  yarn start
```