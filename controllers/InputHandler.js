
import readline from "readline"

export class InputHandler {
    constructor(controller, parser) {
        this.controller = controller
        this.parser = parser
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.commands = {
            add: {
                handler: (args) => controller.addTaskController(args),
                args: ['text']
            },
            delete: {
                handler: (args) => controller.deleteTaskController(args),
                args: ['number']
            },
            update: {
                handler: (args) => controller.updateTaskController(args),
                args: ['number', 'text']
            },
            complete: {
                handler: (args) => controller.completedTaskController(args),
                args: ['number']
            },
            help: {
                handler: () => controller.helpController(),
                args: ['']
            }
        };
    }



    start() {
        this.rl.question('Введите команду> ', (input) => {
            if (input === 'exit') this.rl.close()
            this.callController(input)
            this.start()
        })

    }


    callController(commandText) {
        const commandParse = this.parser.validate(commandText);

        // Проверяем, существует ли команда в хэш-таблице
        if (this.commands[commandParse.command]) {
            const { handler, args } = this.commands[commandParse.command];

            // Создаем объект с нужными аргументами
            const callArgs = args.reduce((acc, arg) => {
                if (commandParse[arg] !== undefined) {
                    acc[arg] = commandParse[arg];
                }
                return acc;
            }, {});

            // Вызываем обработчик с нужными аргументами
            handler(callArgs);
        } else {
            console.log('Неизвестная команда');
        }
    }
}