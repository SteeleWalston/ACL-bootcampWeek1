'use strict';

const name = prompt('What is your name?');
alert('Hey there, ' + name + ', it\'s nice to meet you! Here are some questions about me:');
console.log ('Their name is ' + name + '.');

const statesVisited = prompt('How many U.S. states have I visited?');
alert('Correct, ' + name + '! I have visited ' + statesVisited + ' U.S. states!');
console.log ('Correct! I have visited ' + statesVisited + ' U.S. states!');
const numOfSiblings = prompt('How many siblings do I have?');

alert('You got it, ' + name + '! In addition to visiting ' + statesVisited + ', I also have ' + numOfSiblings + ' sibling(s)!');
console.log ('You got it! I have ' + numOfSiblings + ' sibling(s)!');

const formerJob = prompt('What full-time occupation did I have before beginning at Alchemy Code Lab?');
alert('Nailed it, ' + name + '! In addition to visiting ' + statesVisited + ' states, and having ' + numOfSiblings + 'sibling(s), I worked full-time as a ' + formerJob + ' before starting at Alchemy Code Lab! Do you have a crystal ball or something? :)');
console.log ('Nailed it! I worked full-time as a ' + formerJob + 'before starting at Alchemy Code Lab! Do you have a crystal ball or something?');

const adopted = prompt ('Am I adopted? Please answer \"yes\" or \"no\":');
if ((adopted.toLowerCase() === 'y') ||  (adopted.toLowerCase() === 'yes')) {
    alert('Way to go, ' + name + '!');
}
else if ((adopted.toLowerCase() === 'n') || (adopted.toLowerCase() === 'no')) {
    alert('It\'s okay, ' + name + ', all good things must come to an end - even your winning streak!');
}
console.log('I am adopted. ' + name + ' answered \"' + adopted + '\" to this question.');

const married = prompt ('Am I married? Please answer \"yes\" or \"no\":');
if ((married.toLowerCase() === 'y') ||  (married.toLowerCase() === 'yes')) {
    alert('You\'re on a roll!');
}
else if ((married.toLowerCase() === 'n') || (married.toLowerCase() === 'no')) {
    alert('Unfortunately, ' + name + ', you missed this one... but keep going, no one\'s perfect! ;)');
}
console.log('I am married. ' + name + ' answered \"' + married + '\" to this question.');

const pets = prompt ('Do I have any pets? Please answer \"yes\" or \"no\":');
if ((pets.toLowerCase() === 'y') || (pets.toLowerCase() === 'yes')) {
    alert('Alas, ' + name + ' ,your luck seems to have run out.');
}
else if ((pets.toLowerCase() === 'n') || (pets.toLowerCase() === 'no')) {
    alert('Your powers of prediction are uncanny, ' + name + '!');
}
console.log('I do not have any pets.' + name + ' answered \"' + pets + '\" to this question.');

const iceCream = prompt ('Do I like ice cream? Please answer \"yes\" or \"no\":');
if ((iceCream.toLowerCase() === 'y') || (iceCream.toLowerCase() === 'yes')) {
    alert('Of course, ' + name + '. I mean, who DOESN\'T like ice cream, right? :)');
}
else if ((iceCream.toLowerCase() === 'n') || (iceCream.toLowerCase() === 'no')) {
    alert('You were doing so well, ' + name + '... well, maybe next question you\'ll get back on track?');
}
console.log('I do like ice cream.' + name + ' answered \"' + iceCream + '\" to this question.');

const internationalTravels = prompt ('Have I ever been to any countries outside of the United States? Please answer \"yes\" or \"no\":');
if ((internationalTravels.toLowerCase() === 'y') || (internationalTravels.toLowerCase() === 'yes')) {
    alert ('Okay now, Professor X... maybe you should be playing the lottery instead of doing this?');
}
else if ((internationalTravels.toLowerCase() === 'n') || (internationalTravels.toLowerCase() === 'no')) {
    alert ('Keep your day job, ' + name + '. You\'ve got no future as a psychic.');
}
console.log('I have been outside of the United States. ' + name + ' answered ' + internationalTravels + ' to this question.');
