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

    }

    updateTaskController(args) {
        this.model.update(args.number, args.text)

    }

    deleteTaskController(args) {
        this.model.delete(args.number)

    }

    completedTaskController(args) {
        this.model.completeTask(args.number)

    }

    showErrorController(error) {
        this.print.showError(error)
    }

    showAllTasksController() {
        this.print.showAllTasksView(this.model.view())
    }


}