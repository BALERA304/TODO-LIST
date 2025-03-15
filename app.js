
import { Controller } from "./controllers/Controller.js"
import { ArrayObjects } from './models/ArrayObjects.js'
import { Printer } from "./views/Printer.js"


const model = new ArrayObjects
const print = new Printer

const controller = new Controller(model, print)


model.append('Задача номер 1')
model.append('Задача номер 2')
model.append('Задача номер 3')
controller.showAllTasksController()