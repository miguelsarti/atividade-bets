import { Router } from "express";

const suspeitosRoutes = Router();
let suspeitos = [
    {
        id 
    }
];



// 1. Rota para cadastrar um novo suspeito
suspeitosRoutes.post("/", (req, res) => {
    const { nome, profissao, envolvimentoApostas, nivelSuspeita } = req.body;
})

// 1. Criação de um novo suspeito
const novoSuspeito = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    profissao,
    envolvimentoApostas,
    nivelSuspeita,
};

// 1. Adiciona o novo candidato ao array de candidatos
suspeitos.push(novoSuspeito);

    return res.status(201).json({
    message: "Suspeito cadastrado com sucesso!",
    novoSuspeito,
});

// 2. Rota para listar os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
}); 