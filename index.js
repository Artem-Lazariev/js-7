
const arr = [1,2,3,4,5,6]
let str = ""
console.log(arr)
for(let i = 0 ; i <= arr.length - 1;i++){
    str += String(arr[i])
}
console.log(str)
console.log(arr.join(""))
//a
const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];
const cardToRemove = 'Карточка-3';
const removeIndex = cards.indexOf(cardToRemove);

if (removeIndex !== -1) {
  cards.splice(removeIndex, 1);
}
const cardToInsert = 'Карточка-6';
const insertIndex = 2; 

cards.splice(insertIndex, 0, cardToInsert);
const cardToUpdate = 'Карточка-4';
const updateIndex = cards.indexOf(cardToUpdate);

if (updateIndex !== -1) {
  cards.splice(updateIndex, 1, 'Оновлена-Карточка-4');
}

console.log(cards);
