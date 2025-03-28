/**
 * Класс, выводит сообщения
 * 
 * 
 */
export class Printer {
    constructor(styletext) {
        this.st = styletext
    }


    showError(error) {
        console.log(error.message)
    }

    helpMessageView() {
        console.log('- ПОМОЩЬ - ПОМОЩЬ- ПОМОЩЬ - ПОМОЩЬ- ПОМОЩЬ - ПОМОЩЬ- ПОМОЩЬ - ПОМОЩЬ')
    }

    showAllTasksView(array) {
        console.log(this.st(['bold', 'underline'], '📋 Все ваши задачи:'));
        if (array.length === 0) {
            console.log(this.st('dim', '  — Задач нет —'));
            return;
        }
        array.forEach((task, index) => {
            const status = task.completed
                ? this.st(['green', 'bold'], '✓ Сделано')
                : this.st(['red', 'bold'], '✗ Не выполнено');

            console.log(
                `  ${this.st(['yellow', 'bold'], `${index + 1}.`)} ${this.st('italic', task.text)}\n` +
                `  └── Статус: ${status}\n`
            );
        });
    }
}