// ReGex - Metacharacters symbols in JS
// By default regular expression is case sensitive
console.log('Tutorial No 34');

let regex = /madiha/;
 regex = /^madi/; // ^ means expression will match if string START with
 regex = /diha$/; // $ means expression will match if string ENDS with
 regex = /m.diha/;  //  . matches any ONLY ONE character
 regex = /m*diha/;  //  * matches any 0 OR MORE character
 regex = /ma?dihai?/;  // ? after character means that character is optional
 regex = /m\*adiha/;  //  . matches any ONLY ONE character

let str = `m*adiha is very good madiha`;
let result = regex.exec(str);

if(regex.test(str)){
    console.log(`The string ${str} MATCHES the regular expression ${regex.source}`);
}
else{
    console.log(`The string ${str} DOES NOT match the regular expression ${regex.source}`);
}