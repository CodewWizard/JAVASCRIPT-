// String Function

const name = `Madiha`;
const baby = `Harsh`;
console.log(name + ` ` + baby);

let html;
let str = "From Madiha";
html = "<h1> I Lobu Baby </h1>"+
      "<h1> I Hate You Baby</h1>";
html = html.concat(str);
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html[7]);
console.log(html.indexOf(`Baby`));//it is case sensitive;
console.log(html.lastIndexOf(`a`));
console.log(html.charAt(5));
console.log(html.endsWith(str));
console.log(html.includes(`Madiha`));//case sensitive
console.log(html.substring(3,17));
console.log(html.slice(-4));//last 4 character returns
console.log(html.slice(0,4));
console.log(html.split(' '));
console.log(html.split('a'));
console.log(html.replace(`Madiha`, `Maddy`));

let myHtml = `Hello ${name} and ${baby}
              <h1>Heading</h1>`;

document.body.innerHTML = myHtml;              