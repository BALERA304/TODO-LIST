
import { Controller } from "./controllers/Controller.js"
import { ArrayObjects } from './models/ArrayObjects.js'
import { Printer } from "./views/Printer.js"
import { InputHandler } from "./controllers/InputHandler.js"
import { Parser } from "./utils/Parser.js"


const parser = new Parser
const model = new ArrayObjects
const print = new Printer
const controller = new Controller(model, print)
const inputHandler = new InputHandler(controller, parser)



model.append('Задача номер 1')
model.append('Задача номер 2')
model.append('Задача номер 3')
// console.log(model.view())
// model.update(1, 'привет мир')
// console.log(model.view())

// inputHandler.start()

import { styleText } from 'node:util';
console.log(styleText('green', 'hello'))
console.log(styleText(["italic", "underline", "red", "bgBlack"], 'hello'))
console.log('object');
// console.info(parser.parse('POPA'))
// console.info(parser.parse('Invalid -1 input'))

