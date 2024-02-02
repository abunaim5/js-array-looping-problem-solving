// Reverse the words of a sentence. Only the position of the word will be reversed.
const str = 'I am a hard working person';
const strArr = str.split(' ');
console.log(strArr);
let newStr = '';
for (let word of strArr) {
    newStr = word + ' ' + newStr;
}
console.log(newStr);