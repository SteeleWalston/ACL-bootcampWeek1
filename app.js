'use strict';

//Capture their name
const name = prompt ('Hi! What\'s your name?');
console.log('The player\'s name is ' + name + '.');

//Adopted? Y/N
const adopted = prompt('Am I adopted? Please answer \"yes\" or \"no\":').toLowerCase();
if ((adopted === 'y') ||  (adopted === 'yes')) {
    alert('Way to go, ' + name + '!');
}
else if ((adopted === 'n') || (adopted === 'no')) {
    alert('It\'s okay, ' + name + ', everyone\'s entitled to an occasional mistake!');
}
else
    alert('You did not answer \"yes\" or \"no", " + name + "! Okay, next question!');
console.log('I am adopted. ' + name + ' answered \"' + adopted + '\" to this question.');

//Married? Y/N
const married = prompt('Am I married? Please answer \"yes\" or \"no\":').toLowerCase();
if ((married === 'y') ||  (married === 'yes')) {
    alert('You\'re on a roll! I am happily married, ' + name + '!');
}
else if ((married === 'n') || (married === 'no')) {
    alert('Unfortunately, ' + name + ', you missed this one... but keep going, no one\'s perfect! ;)');
}
else
    alert('You did not answer \"yes\" or \"no", " + name + "! Okay, next question!');
console.log('I am married. ' + name + ' answered \"' + married + '\" to this question.');

//Pets? Y/N
const pets = prompt('Do I have any pets? Please answer \"yes\" or \"no\":').toLowerCase();
if ((pets === 'y') || (pets === 'yes')) {
    alert('Missed this one, ' + name + ' - but don\'t give up!');
}
else if ((pets === 'n') || (pets === 'no')) {
    alert('Your powers of prediction are uncanny, ' + name + '!');
}
else
    alert('You did not answer \"yes\" or \"no", " + name + "! Okay, next question!');
console.log('I do not have any pets.' + name + ' answered \"' + pets + '\" to this question.');

//Ice Cream? Y/N
const iceCream = prompt('Do I like ice cream? Please answer \"yes\" or \"no\":').toLowerCase();
if ((iceCream === 'y') || (iceCream === 'yes')) {
    alert('Of course, ' + name + '. I mean, who DOESN\'T like ice cream, right? :)');
}
else if ((iceCream === 'n') || (iceCream === 'no')) {
    alert('You were doing so well, ' + name + '... well, maybe next question you\'ll get back on track?');
}
else
    alert('You did not answer \"yes\" or \"no", " + name + "! Okay, next question!');
console.log('I do like ice cream.' + name + ' answered \"' + iceCream + '\" to this question.');

//Traveled? Y/N
const internationalTravels = prompt('Have I ever been to any countries outside of the United States? Please answer \"yes\" or \"no\":').toLowerCase();
if ((internationalTravels === 'y') || (internationalTravels === 'yes')) {
    alert ('Okay now, Professor X... maybe you should be playing the lottery instead of doing this?');
}
else if ((internationalTravels === 'n') || (internationalTravels === 'no')) {
    alert ('Keep your day job, ' + name + '. You\'ve got no future as a psychic.');
}
else
    alert('You did not answer \"yes\" or \"no", " + name + "! Okay, next question!');
console.log('I have been outside of the United States. ' + name + ' answered ' + internationalTravels + ' to this question.');

//Number of Times Knee Dislocated?
let dislocatedKnee = parseInt(prompt('Alright, ' + name + ', now for a tougher question: approximately how many times have I dislocated my right knee?'));
let count = 1;
for (let i = 0; i < 4; i++) {
    count++;
    if (dislocatedKnee < 25) {
        alert('Too low - try again! You have used ' + (i + 1) + ' out of 4 attempts.');
        dislocatedKnee = parseInt(prompt('Ok, ' + name + ', let\'s try this again: approximately how many times have I dislocated my right knee?'));
    }
    else if (dislocatedKnee > 25) {
        alert('Too high - try again! You have used ' + (i + 1) + ' out of 4 attempts.');
        dislocatedKnee = parseInt(prompt('Ok, ' + name + ', let\'s try this again: approximately how many times have I dislocated my right knee?'));

    }
    else if (dislocatedKnee === 25) {
        alert('Way to go, ' + name + ' , you got it! I have dislocated my right knee approximately 25 times! Ouch!');
        break;
    }
}
console.log('I have dislocated my right knee approximately 25 times. ' + name + ' used ' + (count) + ' guesses on this question');
/*As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?". I also want to give the user six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.
*/
let statesLived = prompt('Okay, ' + ', time for another guess: ')