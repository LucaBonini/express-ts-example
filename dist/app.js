"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routing_controllers_1 = require("routing-controllers");
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var typedi_1 = require("typedi");
routing_controllers_1.useContainer(typedi_1.Container);
var app = express_1.default(); // your created express server
// app.use() // you can configure it the way you want
routing_controllers_1.useExpressServer(app, {
    // register created express server in routing-controllers
    controllers: [__dirname + '/controllers/*.js'],
});
app.listen(3000); // run your express server
console.log('started....');
