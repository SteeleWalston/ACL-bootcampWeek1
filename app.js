'use strict';
let attemptsCorrect = 0;
//Capture their name

// let name = null

function userName() {
    const name = prompt ('Hi! What\'s your name?');
    console.log('The player\'s name is ' + name + '.');
    return name;
}

const name = userName();
console.log(name);

let counter;

//Adopted? Y/N

const questionsArray = [
    'Am I adopted? Please answer \"yes\" or \"no\":', 
    'Am I married? Please answer \"yes\" or \"no\":', 'Do I have any pets? Please answer \"yes\" or \"no\":', 
    'Do I like ice cream? Please answer \"yes\" or \"no\":', 
    'Have I ever been to any countries outside of the United States? Please answer \"yes\" or \"no\":', 
    'Alright, ' + name + ', now for a tougher question: approximately how many times have I dislocated my right knee?', 
    'Okay, ' + name + ', time for another guess: What other states have I lived in, other than Oregon? You get six attempts to guess one!'];

const correctAnswers = [
    'yes',
    'y',
    'n', 
    'no', 
    25, 
    'texas', 
    'wisconsin', 
    'tennessee', 
    'ohio', 
    'alabama', 
    'missouri', 
    'georgia'
];

const yesNoResponses = [
    'Way to go, ' + name + '!', 
    'It\'s okay, ' + name + ', everyone\'s entitled to an occasional mistake!', 
    'You did not answer \"yes\" or \"no", ' + name + '! Okay, next question!', 
    'You\'re on a roll! I am happily married, ' + name + '!', 
    'Unfortunately, ' + name + ', you missed this one... but keep going, no one\'s perfect! ;)', 
    'Missed this one, ' + name + ' - but don\'t give up!', 'Your powers of prediction are uncanny, ' + name + '!', 
    'Of course, ' + name + '. I mean, who DOESN\'T like ice cream, right? :)', 
    'You were doing so well, ' + name + '... well, maybe next question you\'ll get back on track?', 
    'Okay now, Professor X... maybe you should be playing the lottery instead of doing this?', 
    'Keep your day job, ' + name + '. You\'ve got no future as a psychic.', 
    function (x) {return 'Too low - try again! You have used ' + (x + 1) + ' out of 4 attempts.';}, 
    function (i) {return 'Too high - try again! You have used ' + (i + 1) + ' out of 4 attempts.';}, 
    'Way to go, ' + name + ' , you got it! I have dislocated my right knee approximately 25 times! Ouch!', 
    'Awesome, ' + name + ', you guessed correctly! I have lived in Texas, Wisconsin, Tennessee, Ohio, Alabama, Missouri, and Georgia. Way to go!', 
    'Nice try, ' + name + ', but no cigar... try again! You have used ' + counter + ' out of six attempts.', 
    'Sorry, ' + name + ' , you\'ve used up all your tries - I have lived in Texas, Wisconsin, Tennessee, Ohio, Alabama, Missouri, and Georgia.'];

function adopt() {

    const adopted = prompt(questionsArray[0]).toLowerCase();
    if ((adopted === correctAnswers[1]) ||  (adopted === correctAnswers[0])) {
        attemptsCorrect++;
        alert(yesNoResponses[0]);
    }
    else if ((adopted === correctAnswers[2]) || (adopted === correctAnswers[3])) {
        alert(yesNoResponses[1]);
    }
    else
        alert(yesNoResponses[2]);
    console.log('I am adopted. ' + name + ' answered \"' + adopted + '\" to this question.');

}

//Married? Y/N

function marry() {
    const married = prompt(questionsArray[1]).toLowerCase();
    if ((married === correctAnswers[1]) ||  (married === correctAnswers[0])) {
        attemptsCorrect++;
        alert(yesNoResponses[3]);
    }
    else if ((married === correctAnswers[2]) || (married === correctAnswers[3])) {
        alert(yesNoResponses[4]);
    }
    else
        alert(yesNoResponses[2]);
    console.log('I am married. ' + name + ' answered \"' + married + '\" to this question.');
}

//Pets? Y/N

function pet() {
    const pets = prompt(questionsArray[2]).toLowerCase();
    if ((pets === correctAnswers[1]) || (pets === correctAnswers[0])) {
        alert(yesNoResponses[5]);
    }
    else if ((pets === correctAnswers[2]) || (pets === correctAnswers[3])) {
        attemptsCorrect++;
        alert(yesNoResponses[6]);
    }
    else
        alert(yesNoResponses[2]);
    console.log('I do not have any pets.' + name + ' answered \"' + pets + '\" to this question.');
}

//Ice Cream? Y/N

function ice() {
    const iceCream = prompt(questionsArray[3]).toLowerCase();
    if ((iceCream === correctAnswers[1]) || (iceCream === correctAnswers[0])) {
        attemptsCorrect++;
        alert(yesNoResponses[7]);
    }
    else if ((iceCream === correctAnswers[2]) || (iceCream === correctAnswers[3])) {
        alert(yesNoResponses[8]);
    }
    else
        alert(yesNoResponses[2]);
    console.log('I do like ice cream.' + name + ' answered \"' + iceCream + '\" to this question.');
}

//Traveled? Y/N

function travels() {
    const internationalTravels = prompt(questionsArray[4]).toLowerCase();
    if ((internationalTravels === correctAnswers[1]) || (internationalTravels === correctAnswers[0])) {
        attemptsCorrect++;
        alert (yesNoResponses[9]);
    }
    else if ((internationalTravels === correctAnswers[2]) || (internationalTravels === correctAnswers[3])) {
        alert (yesNoResponses[10]);
    }
    else
        alert(yesNoResponses[2]);
    console.log('I have been outside of the United States. ' + name + ' answered ' + internationalTravels + ' to this question.');
}

//Number of Times Knee Dislocated?

function knee() {
    let dislocatedKnee = parseInt(prompt(questionsArray[5]));
    let count = 0;
    for (let i = 0; i < 4; i++) {
        count++;
        if (dislocatedKnee < correctAnswers[4]) {
            const response1 = yesNoResponses[12]; 
            const message1 = response1(x);
            alert(message1);
            dislocatedKnee = parseInt(prompt('Ok, ' + name + ', let\'s try this again: approximately how many times have I dislocated my right knee?'));
        }
        else if (dislocatedKnee > correctAnswers[4]) {
            const response = yesNoResponses[12]; 
            const message = response(i);
            alert(message);
            dislocatedKnee = parseInt(prompt('Ok, ' + name + ', let\'s try this again: approximately how many times have I dislocated my right knee?'));

        }
        else if (dislocatedKnee === correctAnswers[4]) {
            alert(yesNoResponses[13]);
            attemptsCorrect++;
            break;
        }
    }
    console.log('I have dislocated my right knee approximately 25 times. ' + name + ' used ' + (count) + ' guesses on this question');
}


//States I have lived in?

function states() {
    const statesLived = [correctAnswers[5], correctAnswers[6], correctAnswers[7], correctAnswers[8], correctAnswers[9], correctAnswers[10], correctAnswers[11]];
    for (let counter = 0; counter < 6; counter++) {
        const guess = prompt(questionsArray[6]).toLowerCase();
        if (statesLived.includes(guess)) {
            attemptsCorrect++;
            alert(yesNoResponses[14]);
            break;
        }
        else if (statesLived.indexOf(guess) === -1) {
            alert(yesNoResponses[15]);

        }
        else if (counter === 5) {
            alert(yesNoResponses[16]);
            break;
        }
    }
}

//adopt();
//marry();
// pet();
// ice();
// travels();
knee();
// states();


//Tally of total guesses correct
alert('You got ' + attemptsCorrect + ' questions correct, ' + name + '. Better luck next time!');