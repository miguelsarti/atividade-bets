import { Router } from "express";

const suspeitosRoutes = Router();

// Rota para listar os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
}); 
