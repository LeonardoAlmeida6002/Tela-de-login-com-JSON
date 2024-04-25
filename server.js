// Importa o Express
const express = require('express');

// Cria uma aplicação Express
const app = express();

// Middleware para analisar JSON
app.use(express.json());

// Middleware para dados de formulário
app.use(express.urlencoded({ extended: true }));

// Servindo arquivos estáticos
app.use(express.static('public'));

//definindo rota basica de GET
app.get('/login',(req, res) => {
    res.sendFile('index.html', {root: './public'})
})

//Uma simples autenticação
app.post('/login', (req, res) => {
    const {username, password} = req.body
    if(username === "admin" && password === "123"){
        res.send("Login bem sucedido")
    }else{
        res.send("Falha no login")
    }
})


//Porta do servidor
const PORT = 3000;

app.listen(PORT, () => console.log(`Server rodando em http://localhost:${PORT}`));