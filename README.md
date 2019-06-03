Necessário:

- Node
- NPM 
- React

Para iniciar a aplicação:

- Permitir a autenticação do Github no Firebase e criar um arquivo: .env para incluir as chaves do firebase com as seguintes chaves: 

REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=

- npm install
- npm start 

Eslint.
Babel: Permite a conversão do código ECMAScript da aplicação para uma versão mais compatível do atual navegador.
Webpack: Compacta as imagens, css (sass) e js (jsx) para uma tamanho menor.
Sass: Pré-processador de css.
Oauth 2 com Firebase.

Utilizei um style guide bastante conhecido e atualmente é o mais indicado para ser seguido com React JS. (https://github.com/ronal2do/airbnb-react-styleguide)

React tem o intuito de utilizar de componentes para acoplar da melhor forma possível as funcionalidades de uma aplicação. Por esse motivo os métodos para busca da API foram todos centrados nos componentes. 

As escolhas de cores foram feitas buscando acessibilidade do projeto. (https://colorsafe.co/)

URL Heroku: https://atech-challenge.herokuapp.com
Github: https://github.com/rahsnts/atech-challenge
