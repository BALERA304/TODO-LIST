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




// model.append('Помыть картошку')
// model.append('Понюхать траву')
// model.append('Закончить Моровинд')
// model.completeTask(2)

inputHandler.start()

// controller.showAllTasksController()

