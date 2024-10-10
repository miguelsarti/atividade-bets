import { Router } from "express";

const suspeitosRoutes = Router();
let suspeitos = [
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Neymar",
        profissao: "Jogador",
        envolvimentoApostas: "sim",
        nivelSuspeita: "baixa",
    },
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Jon Vlogs",
        profissao: "influenciador",
        envolvimentoApostas: "sim",
        nivelSuspeita: "media",
    },
    {
        id: Math.floor(Math.random() * 1000000),
        nome: "Felipe Neto",
        profissao: "Youtuber",
        envolvimentoApostas: "sim",
        nivelSuspeita: "baixa",
    },
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

// 1. Adiciona o novo suspeito ao array de suspeitos
suspeitos.push(novoSuspeito);

    return res.status(201).json({
    message: "Suspeito cadastrado com sucesso!",
    novoSuspeito,
});

// 2. Rota para listar os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
}); 

// 3. Rota para buscar suspeito específico pelo ID
suspeitosRoutes.get("/:id", (req,res) => {
    const { id } = req.params;
});

// 3. Busca um suspeito pelo id no array de suspeitos
const suspeito = suspeitos.find((ladrao) => ladrao.id == id);

// 4. Rota para atualizar um suspeito pelo id
suspeitosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome, profissao, envolvimentoApostas, nivelSuspeita } = req.body;

// 4. Busca de um suspeito pelo id no array de suspeitos
    const suspeito = suspeitos.find((landrao) => ladrao.id == id)
});

// 5. Remove o suspeito do array de suspeitos
candidatos = candidatos.filter((candidato) => candidato.id != id);

return res.status(200).json({
    message: "Suspeito removido com sucesso!",
    suspeito,
});

export default suspeitosRoutes;