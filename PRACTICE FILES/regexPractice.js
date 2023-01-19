console.log('Practice Regular Expression');

let regex = /viratkohli/;
// Grouping
// regex = /vir{2}atkohli/;
// regex = /(virat){2}/;
regex = /(virat){2}([0-9]k){2}$/; //$ end of expression

let str = `viratvirat3k6k is king of cricket, viratkohli is handsome too`;

let result = regex.exec(str);
console.log('Result: ', result);

if(regex.test(str)){
    console.log(`The string ${str} MATCHES the expression ${regex} `);
}
else{
    console.log(`The string ${str} DOES NOT match the expression ${regex} `);
}
