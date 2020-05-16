# AD-2020 - ADIRETO

**Aplicação de sorteio de amigo secreto**

## Executando o back-end

Disponivel em [Teste Adireto 2020](https://ad-2020.netlify.app/?target=_blank)

1. Navegue até a pasta `backend` através do comando `cd backend`

2. Instale as dependências:

   ```bash
   # yarn
   yarn

   # npm
   npm install
   ```

3. Configure as variáveis de ambiente conforme mostrado no `.env.example`

4. Rode o projeto executando `yarn dev` ou `npm run dev`

## Executando o front-end

1. Navegue até a pasta `frontend` através do comando `cd frontend`

2. Instale as dependências

   ```bash
   # yarn
   yarn

   # npm
   npm install
   ```

3. Certifique-se do back-end estar rodando na porta `3333` ou altere a porta na variável de ambiente de desenvolvimento em `src/environments/environment.ts` ou se estiver em um servidor verifique se a url está correta.

4. Rode o projeto através do comando `ng serve` conforme a documentação do [Angular](https://cli.angular.io/) ou através do comando `yarn start` ou `npm start`
