// Importa a biblioteca 'pg'
const { Client } = require('pg');

// Configuração da conexão com o SGBD (PostgreSQL no RDS)
const client = new Client({
    host: 'aula-youtube.cgp0ty3zlhv0.us-east-1.rds.amazonaws.com',
    port: 5432,                // porta padrão do PostgreSQL
    user: 'postgres',
    password: 'BIGteddy123',
    database: 'projeto_Academia',
    ssl: {
        rejectUnauthorized: false
      }  
});

// Método para inserir uma nova linha na tabela Pessoa
async function inserirPessoa(cpf, nome, telefone, rua, cep, numero, idade) {
    const query = `
        INSERT INTO academia.Pessoa (cpf, nome, telefone, rua, cep, numero, idade)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
    `;
    const values = [cpf, nome, telefone, rua, cep, numero, idade];
    try {
        await client.query(query, values);
        console.log("Pessoa inserida com sucesso!");
    } catch (error) {
        console.error("Erro ao inserir pessoa:", error);
    }
}

// Método para consultar os registros da tabela Pessoa
async function consultarPessoas() {
    const query = `
        SELECT * FROM academia.Pessoa
    `;
    try {
        const res = await client.query(query);
        console.log("Resultado da consulta:");
        console.table(res.rows);
    } catch (error) {
        console.error("Erro na consulta:", error);
    }
}

// Função principal para gerenciar a conexão e as operações
async function main() {
    try {
        // Conecta ao banco de dados
        await client.connect();
        console.log("Conexão estabelecida com o banco de dados.");

        // Chamada do método de inserção (exemplo: inserindo uma nova pessoa)
        await inserirPessoa(2001, 'Teste Pessoa', '11999990000', 'Rua Teste', '00000-000', 100, 45);

        // Chamada do método de consulta
        await consultarPessoas();
    } catch (error) {
        console.error("Erro durante a operação:", error);
    } finally {
        // Encerra a conexão com o banco de dados
        await client.end();
        console.log("Conexão encerrada.");
    }
}

// Executa a função principal
main();
