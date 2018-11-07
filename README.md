# Como Funciona
### Introdução
React Native não é uma WebView com o projeto rodando em HTML, ele realmente compila o seu código e gera uma versão nativa para as plataformas utilizadas *(Android, iOS)* .

### Criação
O projeto foi criado a partir do *CLI (Command Line Interface) da Expo* baseado em *NodeJS*, conforme é citado na DOC do React Native. É criado dessa forma pois, o *CLI da Expo* contém diversos pacotes que auxiliam no desenvolvimento mais rápido do projeto.

### Ambiente Necessário
Para o projeto funcionar é necessário: 
 1. *NodeJS* instalado.
 2. O *CLI da Expo* **( npm install -g expo-cli )** no CMD.
 3. No caso de compilar para android o *Android Studio*. No caso de iOS ter o *XCode*.

 ### Estrutura
     ```
        .
        ├── App.js
        ├── README.md
        ├── actions
        │   └── Session.js
        ├── app.json
        ├── assets
        │   ├── CAP.png
        │   ├── Roboto
        │   │   ├── LICENSE.txt
        │   │   ├── Roboto-Black.ttf
        │   │   ├── Roboto-BlackItalic.ttf
        │   │   ├── Roboto-Bold.ttf
        │   │   ├── Roboto-BoldItalic.ttf
        │   │   ├── Roboto-Italic.ttf
        │   │   ├── Roboto-Light.ttf
        │   │   ├── Roboto-LightItalic.ttf
        │   │   ├── Roboto-Medium.ttf
        │   │   ├── Roboto-MediumItalic.ttf
        │   │   ├── Roboto-Regular.ttf
        │   │   ├── Roboto-Thin.ttf
        │   │   └── Roboto-ThinItalic.ttf
        │   ├── icon.png
        │   ├── planet-earth.png
        │   ├── questions.js
        │   ├── scenario.png
        │   ├── splash.png
        │   └── sunny.png
        ├── components
        │   ├── _core
        │   │   ├── custom-text
        │   │   │   └── CustomText.js
        │   │   ├── modal-points
        │   │   │   └── ModalPoints.js
        │   │   └── safe-container
        │   │       └── SafeContainer.js
        │   ├── end
        │   │   └── End.js
        │   ├── home
        │   │   └── Home.js
        │   ├── question
        │   │   └── Question.js
        │   └── splash
        │       └── Splash.js
        ├── constants
        │   └── ActionTypes.js
        ├── package-lock.json
        ├── package.json
        └── reducers
            └── Session.js
    ```

#### Pasta Actions
Contem as ações da aplicação, qualquer ação deve ser descrita aqui e deve ser sempre importada daqui.

#### Pasta Assets
Contem as imagens, documentos, etc...

#### Pasta Components
Contem os **componentes** da aplicação, nesse caso as telas.
*Dentro da pasta "_core" está os componentes reutilizaveis da aplicação.*

#### Pasta Constantes
Possui as constantes da aplicação, valores que nunca devem ser alterados pela aplicação.

#### Pasta reducers
Contem os responsáveis pelas ações dentro do estado da aplicação, aqui é onde o único lugar que mexe diretamente no estado de cada seção separada por arquivos, por exemplo, o arquivo *"reducers/Session.js"* altera o estado da Session da aplicação.

#### Arquivo *App.js*
É o início da aplicação, onde toda o projeto é encapsulado em um objeto, onde se inicía e mapeia as **rotas** da aplicação, assim como os **reducers** que serão expostos.

### Rodando o projeto
Para o projeto rodar é necessário: 
 1. O ambiente configurado
 2. Fazer o download do projeto pelo link aqui no GitHub ou pelo seu computador usando no CMD `git clone https://github.com/williandrade/RectNativeFaculApp.git`
 3. Entrar na pasta do projeto com o CMD e digitar `npm install`
 4. Para rodar `npm start`


# Links
[React Native DOC](https://facebook.github.io/react-native/docs/getting-started)

[Expo CLI DOC](https://docs.expo.io/versions/latest/workflow/expo-cli)

[Redux DOC](https://redux.js.org/)

[NodeJS Download](https://nodejs.org/en/download/)
