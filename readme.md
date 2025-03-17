
# Впервые решил использовать MVC осознанно

## Первым делом мне нужно понять теорию 
- **Модель(models)**: отвечает за данные и бизнес-логику. *пока не понимаю как именно*
- Представление(View): отображает данные пользователю. *В моем случае вывод в консоль данные.* 
- Контроллер(Controller): связывает отображаемое с моделью и еще обновляет пользовательский ввод. 

Чтобы мое приложение работало, нужно: 
1. определить функциональность:
   **Что будет делать мое приложение?** 
	- Добавлять задачу 
	- Помечать как выполненную задачу
	- Удалять задачу в случае ее не нужности 
	- Отображать список задача 
	- Изменять уже добавленную задачу в случае ошибки 
2. Разделить на компоненты: 
	**С функциональностью определились, теперь нужно все распихать по компонентам.**
	- В модели у нас будут хранится задачи и их статус выполнения.
	- В отображении у нас будут выводится все задачи и их статус выполнения
	- В контроллере у нас обрабатываются команды пользователя(добавить, удалить, изменить, пометить как выполненное)
3. Связать все воедино:
	   

| Операция    | действие пользователя                                  | действия контроллера              | действия модели        |
| ----------- | ------------------------------------------------------ | --------------------------------- | ---------------------- |
| добавление  | пользователь вводит задачу                             | контроллер обрабатывает ввод      | модель обновляется     |
| удаление    | пользователь выбирает какую задачу удалить             | контроллер обрабатывает ввод      | модель обновляется     |
| изменение   | пользователь выбирает какую задачу изменить и изменяет | контроллер обрабатывает изменение | модель обновляется     |
| отображение | пользователь вводит команду отобразить                 | контроллер обрабатывает           | вызывается отображение |

---
## ArrayObjects(модель)
Модель, в ней хранятся данные. а еще она оперирует этими данными 

## Printer ( View отображение )
Вывод знает как спросить пользователя, что вывести.

Что захочет сделать пользователь? Какие команды ему нужны? 
- **Добавить заметку:** очевидно что пользователь хочет уметь добавлять заметки.

  Пример взаимодействия: 

	*Ввод: с подсказкой: "Введите новую задачу> "*

	*Вывод: "Задача добавлена. Чтобы посмотреть список задач введите `Someone`"*
	  
- **Отметить как выполненную:** пользователю нужно отмечать выполнена задача или нет.

  Пример взаимодействия:

	*1.Попить чай*

	*2.Поесть печенье*

	*3.Посмотреть мультики*
 
	*Ввод с подсказкой: "Выберите какую задачу вы хотите отметить выполненной>"*

	*Вывод: "Задача под номер N выполнена"*
	   
- **Изменить задачу:** пользователь может ошибаться и ему нужно дать возможность просто изменить текст, а не удалять задачу полностью  и создавать снова. 

  Пример взаимодействия:

	*1.Попить чай*

	*2.Поесть печенье*

	*3.Посмотреть мультики* 

	*Ввод с подсказкой: "Выберите какую задачу вы хотите изменить>"*

	*Ввод с подсказкой: "Введите новый текст для задачи N> "*

	*Вывод: "Задача под номером N изменена"*
	   
- **Удалить задачу:** пользователь также должен иметь возможность удалять задачи, возможно они стали неактуальны для него. 

  Пример взаимодействия:

	*1.Попить чай*

	*2.Поесть печенье*

	*3.Посмотреть мультики* 

	*Ввод с подсказкой: "Выберите какую задачу вы хотите удалить>"*

	*Вывод: "Задача под номером N удалена"*
  
- **Показать все задачи:** Пользователь должен видеть список своих задач и их статус. 

  Пример взаимодействия:

	*1.Попить чай - не выполнено*

	*2.Поесть печенье - не выполнено* 

	*3.Посмотреть мультики - выполнено* 
	  
- **Стартовое сообщение:** приветствует пользователя и говорить что существует команда help 

- **Help(помощь):** содержит список всех команд и как ими пользоваться 

## Controller(Контроллер) ***Под вопросом***
Контроллер должен вызываться в начале приложения. Он управляет моделью, он управляет выводом.

Что возможно он будет делать? 
1. При его создании он создает экземпляр модели один раз и нужно еще проверку поставить, чтобы он больше одной модели не создавал. 
2. в нем не будет console.log потому что за него выводит Printer 
3. значит ко всем методам модели, в контроллере должен быть ввод 


---
> Моя первая дока в readme

# Документация 

## ArrayObjects

Это класс - который позволяет добавлять, изменять, удалять, отмечать задачи как выполненные и просматривать весь список задач.

### Использование 

- **Создание экземпляра**
  
```javascript
import { ArrayObjects } from 'array-objects';

const tasks = new ArrayObjects();
```
  
- **Добавление задач**
	Параметры: `text` (string): текст задачи
```javascript
tasks.append('Скушать печенье');
tasks.append('Выпить чаю');

```

- **Просмотр задач** 
	Возвращает копию массива задач
```javascript
console.log(tasks.view());
// Вывод:
// [
//   { text: "Скушать печенье", completed: false },
//   { text: "Выпить чаю", completed: false }
// ]
```

- **Отметка выполненной задачи** 
    Параметры: `index` (number): индекс задачи  
    Выбрасывает: ошибку если массив пуст или индекс недопустим. 
```javascript
tasks.completeTask(0); //отмечаем первую задачу как выполненную
console.log(tasks.view());
// Вывод:
// [
//   { text: "Скушать печенье", completed: true },
//   { text: "Выпить чаю", completed: false }
// ]
```

- **Удаление задачи из списка задач** 
	 Параметры: `index` (number): индекс задачи  
	 Возвращает: удаленный объект задачи
	 Выбрасывает: ошибку если массив пуст или индекс недопустим. 
```javascript
tasks.delete(0); //удаляем первую задачу
console.log(tasks.view());
// Вывод:
// [
//   { text: "Выпить чаю", completed: false }
// ]
```

- **Обновление текста задачи** 
	Параметры: `index` (number): индекс задачи, `newText`(string): новый текст задачи
	Выбрасывает: ошибку если массив пуст или индекс недопустим. 
```javascript
tasks.update(0,'Выпить кофе'); //обновляем текст первой задачи
console.log(tasks.view());
// Вывод:
// [
//   { text: "Выпить кофе", completed: false }
// ]
```
