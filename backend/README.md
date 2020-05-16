# AD-2020 - ADIRETO

Aplicação de sorteio de amigo secreto

Backend disponivel em [Teste Adireto 2020](https://ad-2020.herokuapp.com/)

## Executando o back-end

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


## Rotas

**POST**

```
/users
```

```json
  Exemplo de request enviada no body.
  {
  "name": "Lucas Bastos",
  "email": "lucsbasto@gmail.com"
  }
  A response é o objeto do usuário cadastrado no banco ou um erro
```

**GET**

```
/users
A response é uma lista com todos os usuários cadastrados ou um erro
```

**GET**

```
- /users/:id
A response é um objeto com todos os atributos do usuário ou um erro

```

**PUT**

```
- /users/:id
```
```json
  Exemplo de request enviada no body.
  {
  "name": "Lucas Bastos",
  "email": "lucsbasto@gmail.com"
  }
  A response é o objeto atualizado do usuário ou um erro
```

**DELETE**

```
- /users/:id
A response é uma mensagem ou um erro
```
