


export class Parser {
    constructor() {
        this.regex = /^(\w+)(?:\s+(\d+))?(?:\s+(.*))?$/
    }

    parse(commandText) {
        const match = commandText.match(this.regex);
        if (!match) {
            throw new Error('Неверный формат ввода. Ожидается: команда [число] [текст]');
        }

        const command = match[1];
        const number = match[2] ? parseInt(match[2], 10) : null;
        const text = match[3] || null;

        return [command, number, text];
    }

}