// Iterators
console.log('Tutorial No 38');

function fruitIterator(values) {
    let nextIndex = 0;
                // We will return an object
    return{
        next : function(){
            if(nextIndex < values.length){
                // We will return below object
                return{
                    value : values[nextIndex++],
                    done:false
                }
            }
            else{
                // We will return below object with only done
                return{
                    done:true
                }
            }
        }
    }
}


let myArray = ['Apple', 'Grapes', 'Oranges', 'Bhindi'];
console.log(myArray);

const fruits = fruitIterator(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);