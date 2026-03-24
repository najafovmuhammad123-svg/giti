function capitalizeWords(text) {
  let words = text.split(' ');
  let result = [];

  for (let word of words) {
    let cap = word[0].toUpperCase() + word.slice(1);
    result.push(cap);
  }

  return result.join(' ');
}
console.log(capitalizeWords(prompt('Enter a sentence:')));


function isValidNumber(phoneNumber) {
    if(phoneNumber.length === 11 && phoneNumber.startsWith('+7')){
        return  console.log("true");
    }else{
        return console.log("false");
        
    }
  
}
