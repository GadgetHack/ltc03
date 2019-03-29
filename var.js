function makeVar (numbers) {
    numbers.pop();
}

const numbers = [1, 2, 3, 4, 5]; // создать массив чисел
const strings = ['Apple', 'Pear', 'Pineapple']; // создать массив строк

console.log(numbers.length) // узнать длину массива
console.log(strings.length)
console.log(numbers[3]) // получить элемент по индексу ('4')
console.log(strings[1]) // получить элемент по индексу ('Pear')
console.log(numbers[numbers.length-1]) // получить последний элемент
console.log(strings[strings.length-1]) // -//- 

numbers.unshift(0); // добавить элемент в начало
strings.push('Wassermelone'); // добавить элемент в конец


numbers.splice(5,1); // удалит элемент '5' по индексу '4'
strings.splice(1,1); // удалить элемент по индексу 'Pear'
const numStrings = numbers.concat(strings); // объединить два массива в один

const newNum = numbers.map(function(element) {
    return element * 2;
});

console.log(newNum) // применить функцию ко всем элементам массива и получить новый той же длины