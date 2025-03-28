import { Controller } from "./controllers/Controller.js"
import { ArrayObjects } from './models/ArrayObjects.js'
import { Printer } from "./views/Printer.js"
import { InputHandler } from "./controllers/InputHandler.js"
import { Parser } from "./utils/Parser.js"
import { styleText } from 'node:util';


const parser = new Parser
const model = new ArrayObjects
const print = new Printer(styleText)
const controller = new Controller(model, print)
const inputHandler = new InputHandler(controller, parser)





inputHandler.start()



