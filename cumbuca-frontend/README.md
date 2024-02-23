# Cumbuca Delivery

O Cumbuca delivery é a interface de um cardápio digital e de um simples formulário para a inserção dos dados que serão exibidos no cardápio.

## Tecnologias

- ReactJS
- Typescript
- Chakra-UI
- Ract hook form
- Yup
- @table-library/react-table-library
- Json-server
- React-router-dom v6
- Node v18.17.0

## Estratégias de implementação

Neste projeto foram utilizados os conceitos de componentização em geral e especificamente no padrão de **Composição de Componentes.**

Quanto ao uso do Chakra-UI foi utilizado os recursos de **Styles Props** e a customização do tema através do diretório **theming**

A biblioteca @table-library/react-table-library foi escolhida por ter uma interface de API e funcionalidades similares as encontradas na biblioteca @mui e não depender da instalação da própria @mui, como é o caso da @ material-react-table. Entretanto, o uso da biblioteca trouxe também o ônus de lidar com uma API nova e menos sofisticadas quanto as mencionadas anteriormente.

## Páginas do projeto

As páginas do projeto se encontram em:

- / → listagem geral dos pratos
- /dish/:id → Detalhamento de um prato
- /manager → Gerenciamento dos pratos

## Como reproduzir

1. Tenha o Node v18
2. Clone este repositório
3. instale o json-web-server com: npm install -g json-server
4. Após clonado, entre na pasta com: cd cumbuca-frontend
5. Realize o comando npm i
6. Rode o comando json-server --watch data.json para iniciar o banco de dados
7. Crie um arquivo com o nome de “.env” e preencha seguindo o exemplo do arquivo .envexample. Apenas troque a porta para a qual o seu json-server está sendo executado
8. Após tudo configurado, utilize npm run dev para rodar o projeto
