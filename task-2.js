// Write a JavaScript code to get the even numbers from an array using any looping technique
const numbers = [12, 98, 5, 41, 23, 78, 46];
let i = 0;
let num = [];
while (i < numbers.length) {
    if (numbers[i] % 2 === 0){
        num.push(numbers[i]);
        console.log(num);
    }
        i++
}
