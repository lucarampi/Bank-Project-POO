"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.listen("8000", () => {
    console.log("Running...");
});
app.set('view engine', 'ejs');
app.set('views', __dirname);
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
class User {
    constructor(name, cpf, user, password) {
        this.balance = 0;
        this.name = name;
        this.cpf = cpf;
        this.user = user;
        this.password = password;
    }
}
