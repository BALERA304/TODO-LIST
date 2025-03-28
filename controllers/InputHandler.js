
import { resolve } from "path";
import readline from "readline"

export class InputHandler {
    constructor(controller, parser) {
        this.controller = controller
        this.parser = parser
        this.lastError = null
        this.help = false
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



    refreshUI() {
        process.stdout.write('\x1B[H\x1B[J');


        if (this.help) {
            this.controller.helpController()
            this.help = false
        }
        else {
            this.controller.showAllTasksController();
        }


        if (this.lastError) {
            this.controller.showErrorController(this.lastError);
            this.lastError = null;
        }
    }


    async start() {

        process.on('SIGINT', () => {
            this.rl.close();
            process.stdout.write('\x1B[?25h');
            process.exit(0);
        });

        while (true) {
            this.refreshUI()
            const input = await new Promise(resolve => {
                this.rl.question('Введите команду> ', resolve)
            })

            if (input === 'exit') break

            try {
                this.callController(input)
            }
            catch (error) {
                this.lastError = error
            }

        }
        this.rl.close()
    }


    callController(commandText) {
        const commandParse = this.parser.validate(commandText);

        if (commandParse.command === 'help') {
            return this.help = true
        }

        if (this.commands[commandParse.command]) {
            const { handler, args } = this.commands[commandParse.command];
            const callArgs = args.reduce((acc, arg) => {

                if (commandParse[arg] === null) {
                    throw new Error('⚠️  Неправильные аргументы. Воспользуйтесь командой help для справки')
                }
                if (commandParse[arg] !== undefined) {
                    acc[arg] = commandParse[arg];
                }
                return acc;
            }, {});

            handler(callArgs);
        } else {
            throw new Error('⚠️  Неизвестная команда. воспользуйтесь командой help')
        }
    }
}