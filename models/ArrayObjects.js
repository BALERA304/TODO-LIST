/**
 * Класс, представляющий задачу в списке дел.
 */
class Node {
    /**
     * Создает экземпляр задачи.
     * @param {string} text - Текст задачи.
     * @param {boolean} completed - false если задача не выполнена(по умолчанию), true если задача выполнена.
     */
    constructor(text) {
        this.text = text;
        this.completed = false;
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
    * Если массив пуст, выбрасывает ошибку.
    * @param {number} index - Индекс объекта для удаления.
    * @return {object} Удаленный объект.
    * @throws {Error} Если массив пуст или индекс недопустим.
    */
    delete(index) {
        if (this.isEmpty()) {
            throw new Error("Массив пуст. Удаление невозможно.");
        }

        if (index < 0 || index >= this.array.length) {
            throw new Error("Индекс выходит за пределы массива.");
        }

        return this.array.splice(index, 1)[0]; // Всегда возвращает удаленный объект
    }

    /**
  * Отмечает задачу как выполненную по указанному индексу.
  * Если массив пуст или индекс выходит за пределы массива, выбрасывает ошибку.
  * @param {number} index - Индекс задачи для отметки как выполненной.
  * @throws {Error} Если массив пуст или индекс недопустим.
  */
    complete(index) { // Исправлено имя метода
        if (this.isEmpty()) {
            throw new Error("Массив пуст. Удаление невозможно.");
        }

        if (index < 0 || index >= this.array.length) {
            throw new Error("Индекс выходит за пределы массива.");
        }

        this.array[index].completed = true; // Исправлено на латиницу
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