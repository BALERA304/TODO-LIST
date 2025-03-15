/**
 * Класс, создает контроллер 
 * 
 */
export class Controller {
    constructor(model, print) {
        this.tasks = model
        this.print = print
    }


    startController() {

    }

    helpController() {

    }

    addTaskController() {
    }

    updateTaskController(index) {

    }

    deleteTaskController(index) {

    }

    CompletedTaskController(index) {

    }

    showAllTasksController() {
        this.print.showAllTasksView(this.tasks.view())
    }


}