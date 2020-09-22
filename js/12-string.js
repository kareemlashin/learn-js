var str = "Please locate where 'locate' occurs!";
console.log(`string all : ${str}`);

var lastIndexOf = str.lastIndexOf("locate");
console.log(`lastIndexOf  "locate" ${lastIndexOf}`);

var search = str.search("locate");
console.log(`search "locate" ${search}`);

var slice = str.slice(7, 13);
console.log(`slice  7 to 13 ${slice} start/end`);

var substring = str.substring(7, 13);
console.log(`substring 7 to 13  ${substring} start/end`);

var replace = str.replace(/,/ig, "W3Schools");
console.log(`replace locate to  W3Schools ${replace}`);

var textToUpperCase = str.toUpperCase(); // text2 is text1 converted to upper
console.log(`textToLowerCase ${textToUpperCase}`);

var textToLowerCase = str.toLowerCase(); // text2 is text1 converted to lower
console.log(`textToLowerCase ${textToLowerCase}`);

var text2 = "World";
var textConcat = str.concat(" ", text2);
console.log(`textConcat ${textConcat}`);
console.log(str.charAt(0));
console.log(str.length);
console.log(str.indexOf('Please'));

const sentence = "Hi,I am a Javascript Developer!"
if (sentence.includes("Javascript")) {
    console.log("Substring Found");
} else {
    console.log("Substring not found");
}

/*

substring(start,[end])
slice(start,[end])

*/