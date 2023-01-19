console.log('Tutorial No 36');

// Character Classes

let regex = /codewizard codefreak/;
regex = /\wodewizard codefreak/;     // \w = word character , _, or numbers
regex = /\w+dewizard codefreak/;        // w+ - onw or more character 
regex = /\Wcodefreak/;                  // W(Capital W) - non woed character
regex = /\W+codefreak/;                  // W + one or more non word character
regex = /\d789/;                         // d means digit
regex = /codefreak \d+/;                 // d+ means more than one digit
regex = /\D789/;                         // D means non-digit
regex = /\D+789/;                        // D means more than one non-digit
regex = /\scodefreak/;                   // s means white space
regex = /\s+codefreak/;                   // s+ means matches more than one white space
regex = /\Sfreak/;                       // S means non-white space
regex = /\S+freak/;                       // S+ means matches more than one non-white space
regex = /codefreak\b/;                                    // \b Word boundry 

// Assertions
regex = /codewizar(?=d)/;
regex = /codewizar(?!d)/;

let str = `codewizard codefreak 123456maddy789`; //doubt matches, not matches


let result = regex.exec(str)
console.log('Result from exec is:', result);

if(regex.test(str)){
    console.log(`The string ${str} MATCHES the regular expression ${regex.source}`);
}
else{
    console.log(`The string ${str} DOES NOT match the regular expression ${regex.source}`);
}
