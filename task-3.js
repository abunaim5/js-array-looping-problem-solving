// Use a for...of loop to concatenate all the elements of an array into a single string
let words = ['Tom', 'Tim', 'Tin', 'Tik'];
let concatArr = '';
for (let word of words) {
    concatArr = concatArr.concat(word);
}
console.log(concatArr);