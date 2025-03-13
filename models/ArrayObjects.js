/**
 * Класс, представляющий задачу в списке дел.
 */
class Node {
    /**
     * Создает экземпляр задачи.
     * @param {string} text - Текст задачи.
     * @param {boolean} complited - false если задача не выполнена(по умолчанию), true если задача выполнена.
     */
    constructor(text) {
        this.text = text;
        this.сompleted = false;
    }
}

/**
 * Класс, создает массив объектов и оперирует над ними.
 */
export class ArrayObjects {
    /**
     * Создает экземпляр массива объектов.
     */
    constructor() {
        this.array = [];
    }

    /**
     * Создает и добавляет объект в массив.
     * @param {string} text - Текст задачи.
     */
    append(text) {
        const newNode = new Node(text);
        this.array.push(newNode);
    }

    /**
     * Удаляет объект из массива по указанному индексу.
     * Если массив пуст, возвращает предупреждение.
     * Если индекс указывает на последний элемент, используется метод pop.
     * @param {number} index - Индекс объекта для удаления.
     * @return {object|string} Удаленный объект или предупреждение, если массив пуст.
     */
    delete(index) {
        if (this.isEmpty()) {
            return "Предупреждение: Массив пуст. Удаление невозможно.";
        }

        if (index === this.array.length - 1) {
            return this.array.pop();
        }

        this.array.splice(index, 1);
    }

    /**
     * Отмечает задачу как выполненную по указанному индексу.
     * Если массив пуст или индекс выходит за пределы массива, возвращает предупреждение.
     * @param {number} index - Индекс задачи для отметки как выполненной.
     * @return {string|undefined} Предупреждение, если массив пуст или индекс недопустим, иначе undefined.
     */
    complite(index) {
        if (this.isEmpty()) {
            return "Предупреждение: Массив пуст. Удаление невозможно.";
        }

        if (this.array.length - 1 < index) {
            return "Предупреждение: Индекс выходит за пределы массива.";
        }

        this.array[index]['сompleted'] = true;
    }

    /**
     * Возвращает массив объектов.
     * @return {array} Массив объектов.
     */
    view() {
        return this.array;
    }

    /**
     * Проверяет, пуст ли массив объектов.
     * @return {boolean} true, если массив пуст, иначе false.
     */
    isEmpty() {
        return this.array.length == 0;
    }
}