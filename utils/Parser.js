


export class Parser {
    constructor() {
        this.regex = /^(\w+)(?:\s+(\d+))?(?:\s+([',"])(.*?)\3)?$/
    }

    validate(commandText) {
        const match = commandText.match(this.regex);
        if (!match) {
            throw new Error('⚠️  Неверный формат ввода. Воспользуйтесь командой help для справки');
        }

        const command = match[1];
        const number = match[2] ? parseInt(match[2], 10) : null;
        const text = match[4] || null;

        return { 'command': command, 'number': number, 'text': text };
    }

}