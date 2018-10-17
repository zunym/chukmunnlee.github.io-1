//Get inputs
var fruits = [];
var item = "";

//cond 1 fruits.length == 5
//cond 2 item == 'done'

//cond 1 and cond 2
while ((fruits.length < 5) && (item != 'done')) {

//while (item != "done") {
    item = prompt('Add an item')
    //if ((item != null) && (item != "")) {
        fruits.push(item);
    //} //if
} //while
fruits.pop();
console.log('> fruits: ', fruits);