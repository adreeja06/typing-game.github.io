<<<<<<< HEAD
const quotes = [
     "It does not do well to dwell on dreams and forget to live.",
     "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
     "It is our choices, Harry, that show what we truly are, far more than our abilities.",
     "Fear of a name only increases fear of the thing itself.",
     "I solemnly swear I am up to no good.",
     "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
     "Numbing the pain for a while will make it worse when you finally feel it.",
     "It matters not what someone is born, but what they grow to be.",

];
let words = [];
let wordIndex = 0;
let startTime = Date.now();
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
document.getElementById('start').addEventListener('click', () => {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    words = quote.split(' ');
    wordIndex = 0;
  
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    quoteElement.innerHTML = spanWords.join('');
    quoteElement.childNodes[0].className = 'highlight';
    messageElement.innerText = '';
  
    typedValueElement.value = '';
    typedValueElement.focus();
  
    startTime = new Date().getTime();
  });
typedValueElement.addEventListener('input', () => {
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;
  
    if (typedValue === currentWord && wordIndex === words.length - 1) {
      const elapsedTime = new Date().getTime() - startTime;
      const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
      messageElement.innerText = message;
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
      typedValueElement.value = '';
      wordIndex++;
      for (const wordElement of quoteElement.childNodes) {
        wordElement.className = '';
      }
      quoteElement.childNodes[wordIndex].className = 'highlight';
    } else if (currentWord.startsWith(typedValue)) {
      typedValueElement.className = '';
    } else {
      typedValueElement.className = 'error';
    }
=======
const quotes = [
     "It does not do well to dwell on dreams and forget to live.",
     "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
     "It is our choices, Harry, that show what we truly are, far more than our abilities.",
     "Fear of a name only increases fear of the thing itself.",
     "I solemnly swear I am up to no good.",
     "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
     "Numbing the pain for a while will make it worse when you finally feel it.",
     "It matters not what someone is born, but what they grow to be.",

];
let words = [];
let wordIndex = 0;
let startTime = Date.now();
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
document.getElementById('start').addEventListener('click', () => {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    words = quote.split(' ');
    wordIndex = 0;
  
    const spanWords = words.map(function(word) { return `<span>${word} </span>`});
    quoteElement.innerHTML = spanWords.join('');
    quoteElement.childNodes[0].className = 'highlight';
    messageElement.innerText = '';
  
    typedValueElement.value = '';
    typedValueElement.focus();
  
    startTime = new Date().getTime();
  });
typedValueElement.addEventListener('input', () => {
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;
  
    if (typedValue === currentWord && wordIndex === words.length - 1) {
      const elapsedTime = new Date().getTime() - startTime;
      const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
      messageElement.innerText = message;
    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
      typedValueElement.value = '';
      wordIndex++;
      for (const wordElement of quoteElement.childNodes) {
        wordElement.className = '';
      }
      quoteElement.childNodes[wordIndex].className = 'highlight';
    } else if (currentWord.startsWith(typedValue)) {
      typedValueElement.className = '';
    } else {
      typedValueElement.className = 'error';
    }
>>>>>>> d8536b1232bfbe8477871b4c25705a33891e71c3
  });