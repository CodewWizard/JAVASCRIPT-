console.log('JS');


async function getData(){
    let url = "https://jsonplaceholder.typicode.com/todos/1";
    console.log('Before await');
    let response = await fetch(url);
    console.log('After await');
    let data = await response.json();
    return data;
}

console.log('Before Calling');

let res = getData();
console.log(res);
res.then((data) => {
    console.log(data);
});

console.log("After Calling");
