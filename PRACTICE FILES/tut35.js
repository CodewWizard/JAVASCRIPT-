// Regular Expression - character set in JS
console.log('Tutorial No 35');

// Character Set - []
let regex = /demo/;
regex = /d[abcd]mo/;  //can be an a, b, c or de || either a, b, c or d
regex = /d[a-z]mo/;   // can be from a to z ||either a to z
regex = /d[^bcd]mo/; // ^ means not here ||  cannot be  b, c or d
regex = /d[^abc]m[yu]/; // cannot be a,b or c + can be y or u
regex = /d[a-zA-Z]m[yu0-9]/; //we can have many as many character sets as we want


// Quantifiers - {}
regex = /car{2}y/; // r can occurs exactly 2 times
regex = /car{0,3}y/; // r can occur 0 to 3 times

// Grupings - ()
regex = /(car){2}/;
regex = /(car){2}([0-9]r){2}/;

let str = `carcar3r4rr is great gamer`; //doubt matches, not matches

let result = regex.exec(str)
console.log('Result from exec is:', result);

if(regex.test(str)){
    console.log(`The string ${str} MATCHES the regular expression ${regex.source}`);
}
else{
    console.log(`The string ${str} DOES NOT match the regular expression ${regex.source}`);
}


// non- cast rahivasi utapn adhar
// utpn- reshan adhar
