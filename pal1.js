function checkPalindrom(string) {
    // альтернативно можно последний символ обрезать строки и с помощью string.slice(-1);
    if ( string[0] === string[string.length - 1] ) {
        if (string.length > 1){
            return checkPalindrom(string.substring(1, string.length - 1));     
        } else { 
            return true 
        }     
    } else {
        return false;
    }
}

function sanitize (string) {
    const newString = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ']/g,"");

    return newString;
}

function checkPalindromWithSanitize(string) {
    const newString = sanitize(string);
    const result = checkPalindrom(newString);
    
    console.log('is "' + string + '" palindrom?', result);
}

checkPalindromWithSanitize("abcdcba");
checkPalindromWithSanitize("abcdcb");
checkPalindromWithSanitize("aaaaa");
checkPalindromWithSanitize("abccba");
checkPalindromWithSanitize("Madam, I'm Adam");