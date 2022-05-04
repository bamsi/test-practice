function stringLength(text){
    const strlength = text.length;
    if(strlength > 1 && strlength < 10){
        return strlength;
    }else {
        return "Invalid string";
    }
}

function reverseString(text){
    return text.split('').reverse().join("");
}

module.exports = { stringLength, reverseString};