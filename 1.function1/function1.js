
function reverseString(message) {
    var split = message.split(""); 
    
    var reverse = split.reverse(); 
    
    var join = reverse.join(""); 
    return join
}
console.log(reverseString("hello"))