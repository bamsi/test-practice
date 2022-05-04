
function capitalize(text){
    const firstLetter = text.split('')[0];
    if(!firstLetter.match(/[a-zA-Z]/)) return 'invalid text';
    return text.split(' ').map((word)=>{
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}

module.exports = capitalize;