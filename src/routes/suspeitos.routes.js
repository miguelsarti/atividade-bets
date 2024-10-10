import { Router } from "express";

const suspeitosRoutes = Router();

// Rota para listar os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
}); 

//Rota para buscar suspeito específico pelo ID
suspeitosRoutes.get("/:id", (req,res) => {
    const { id } = req.params;
});

//Rota para cadastrar um novo suspeito
suspeitosRoutes.post("/", (req, res) => {
    const { nome, profissao, envolvimentoApostas, nivelSuspeita } = req.body;
})