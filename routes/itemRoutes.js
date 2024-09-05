"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const itemController_1 = require("../controllers/itemController");
const router = express_1.default.Router();
router.get("/", itemController_1.getItems);
router.post("/", itemController_1.addItem);
router.delete("/:id", itemController_1.deleteItem);
exports.default = router;
