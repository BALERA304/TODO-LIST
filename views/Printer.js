/**
 * Класс, выводит сообщения
 * 
 * 
 */
export class Printer {
    constructor(styletext) {
        this.st = styletext
    }

    helpMessageView() {
        console.log(`Значит тебе нужна помощь пользователь... \n чтош давай помогать \n есть 4 основные команды:
             \n add - добавляет новую задачу в список задач, просто напиши текст задачи после команды`)
    }

    showAllTasksView(array) {
        process.stdout.write('\x1B[?25l')
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