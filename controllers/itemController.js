"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.addItem = exports.getItems = void 0;
const database_1 = __importDefault(require("../config/database"));
// Obter todos os itens
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield database_1.default.query("SELECT * FROM items");
        res.json(result.rows);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao buscar itens." });
    }
});
exports.getItems = getItems;
// Adicionar um novo item
const addItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        const result = yield database_1.default.query("INSERT INTO items (name) VALUES ($1) RETURNING *", [name]);
        res.json(result.rows[0]);
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao adicionar item." });
    }
});
exports.addItem = addItem;
// Excluir um item
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield database_1.default.query("DELETE FROM items WHERE id = $1", [id]);
        res.json({ message: "Item excluído com sucesso!" });
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao excluir item." });
    }
});
exports.deleteItem = deleteItem;
