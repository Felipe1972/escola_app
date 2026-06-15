const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'escola_app'
});

conexao.connect((erro) => {
    if (erro) {
        console.log('Erro ao conectar ao banco')
        return;
    }
    console.log('Banco conectado com sucesso')
});

module.exports = conexao;