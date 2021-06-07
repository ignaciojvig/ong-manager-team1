## Configurações iniciais

Abra o terminal, vá para a pasta do projeto:

    cd <path_da_pasta_do_projeto>

**Caso tenha docker**

Altere a configuração de execução do docker-run-cmd e execute-o:

    chmod 777 docker-run-cmd.sh
    ./docker-run-cmd.sh

**Caso não tenha docker**

Instale o mySQL Server: https://dev.mysql.com/downloads/
- Use legacy password encryptation
- Caso use mac, siga o passo a passo: https://medium.com/employbl/how-to-install-mysql-on-mac-osx-5b266cfab3b6

Abra o DBeaver ou Workbench de dados e execute o seguinte script(*):

    CREATE DATABASE IF NOT EXISTS `mysqldb`;
    CREATE DATABASE IF NOT EXISTS `mysqldb_test`;
    CREATE USER 'admin'@'%' IDENTIFIED BY 'admin';
    GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%';

(*) <path_da_pasta_do_projeto>/docker/docker-entrypoint-initdb.db/init-mysql.sql

## Iniciando a aplicação

Instale os pacotes e rode a migração do projeto:

    npm install
    npm run migration

Inicie o projeto:

    npm run start

Acesse o swagger em:

    localhost:3000/api-docs
