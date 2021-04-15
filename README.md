# Exame Ins. Eldorado

Projeto para agendar aulas particulares.

#### Stack do Projeto
Frontend: Angular
Backend: Nest JS
Banco de Dados: Postgres

### Instrução para Levantar a Aplicação

##### Frontend
1. Acessar o diretório do projeto `/fronted/eldorado/` e executar os comandos `npm install` para baixar as dependências, em seguida `ng serve --port 3301 -o`

##### Backend e Banco
1. A estrutura do backend e banco está em container (docker).
2. Após acessar a pasta do projeto backend `/backend`, executar o comando docker para levantar o container `docker-compose up -d`
3. Obs.: a aplicação roda na porta 5000

##### Acessando o PgAdmn4
* Para acessar o pgadmin, após levantar o container basta acessar `http://localhost:9000`
Usuário: admin@user.com | Senha: 123456
* Banco de Dados: nestapi
* Senha do banco de dados: root