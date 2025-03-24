/**
 * Класс, создает контроллер 
 * 
 */
export class Controller {
    constructor(model, print) {
        this.model = model
        this.print = print
    }

    helpController() {
        this.print.helpMessageView()
    }

    addTaskController(args) {
        this.model.append(args.text)
        this.showAllTasksController()
    }

    updateTaskController(args) {
        this.model.update(args.number, args.text)
        this.showAllTasksController()
    }

    deleteTaskController(args) {
        this.model.delete(args.number)
        this.showAllTasksController()
    }

    completedTaskController(args) {
        this.model.completeTask(args.number)
        this.showAllTasksController()
    }

    showAllTasksController() {
        this.print.showAllTasksView(this.model.view())
    }


}