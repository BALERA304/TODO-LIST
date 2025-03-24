/**
 * Класс, выводит сообщения
 * 
 * 
 */
export class Printer {
    constructor() {

    }

    showMessage(text) {
        console.log(text)
    }

    waitAnswer() {

    }

    startMessageView() {

    }

    helpMessageView() {
        console.log(`Значит тебе нужна помощь пользователь... \n чтош давай помогать \n есть 4 основные команды:
             \n add - добавляет новую задачу в список задач, просто напиши текст задачи после команды`)
    }

    addTaskView(text) {

    }

    updateTaskView(index) {

    }

    deleteTaskView(index) {

    }

    CompletedTaskView(index) {

    }

    showAllTasksView(array) {
        console.log(array)
    }

}