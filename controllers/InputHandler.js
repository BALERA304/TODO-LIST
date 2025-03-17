
import readline from "readline"




export class InputHandler {
    constructor(controller) {
        this.controller = controller
        this.commands = {
            show: () => {
                this.controller.showAllTasksController()
            }
        };


    }

}