"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app")); //moze umjesto app appp1 ili bilo koje 2. ime jer uzima default-ni export
var port = 3000;
app_1.default.listen(port, function () {
    console.log(__dirname); //trenutno mjesto izvrsavanja naseg koda
    console.log("Server is running on port " + port); //kod ovih apostrofa moze promjenljiva unutra
});
