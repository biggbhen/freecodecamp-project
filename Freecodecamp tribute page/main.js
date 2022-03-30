// console.log('okay');

let localItem = ['get', 'to', 'storage']


localStorage.setItem('item', JSON.stringify(localItem))

let newItem = localStorage.getItem('item')

console.log(JSON.parse(newItem));


function getItem () {
 let item;
 if (localStorage.getItem('item') == null) {
   item = []
 } else {
  item =  JSON.parse(localStorage.getItem('item'))  
 }

 localStorage.setItem(JSON.stringify(item))
}