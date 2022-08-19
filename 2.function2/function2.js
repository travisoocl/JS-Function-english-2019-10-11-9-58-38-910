function palindrome(message){
    var last = message.length -1;
    var ispalindrome = true;
    for(i=0; i<message.length/2; i++)
    {
        if(message[i] !== message[last])
        {
            ispalindrome = false;
            break;
        }
        last -= 1;
    }
    console.log(ispalindrome);
}
palindrome('hello'); 
palindrome('abcba'); 