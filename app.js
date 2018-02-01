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

//Adopted? Y/N

function adopt() {
    const adopted = prompt('Am I adopted? Please answer \"yes\" or \"no\":').toLowerCase();
    if ((adopted === 'y') ||  (adopted === 'yes')) {
        attemptsCorrect++;
        alert('Way to go, ' + name + '!');
    }
    else if ((adopted === 'n') || (adopted === 'no')) {
        alert('It\'s okay, ' + name + ', everyone\'s entitled to an occasional mistake!');
    }
    else
        alert('You did not answer \"yes\" or \"no", ' + name + '! Okay, next question!');
    console.log('I am adopted. ' + name + ' answered \"' + adopted + '\" to this question.');

}

//Married? Y/N

function marry() {
    const married = prompt('Am I married? Please answer \"yes\" or \"no\":').toLowerCase();
    if ((married === 'y') ||  (married === 'yes')) {
        attemptsCorrect++;
        alert('You\'re on a roll! I am happily married, ' + name + '!');
    }
    else if ((married === 'n') || (married === 'no')) {
        alert('Unfortunately, ' + name + ', you missed this one... but keep going, no one\'s perfect! ;)');
    }
    else
        alert('You did not answer \"yes\" or \"no", ' + name + '! Okay, next question!');
    console.log('I am married. ' + name + ' answered \"' + married + '\" to this question.');
}

//Pets? Y/N

function pet() {
    const pets = prompt('Do I have any pets? Please answer \"yes\" or \"no\":').toLowerCase();
    if ((pets === 'y') || (pets === 'yes')) {
        alert('Missed this one, ' + name + ' - but don\'t give up!');
    }
    else if ((pets === 'n') || (pets === 'no')) {
        attemptsCorrect++;
        alert('Your powers of prediction are uncanny, ' + name + '!');
    }
    else
        alert('You did not answer \"yes\" or \"no", ' + name + '! Okay, next question!');
    console.log('I do not have any pets.' + name + ' answered \"' + pets + '\" to this question.');
}

//Ice Cream? Y/N

function ice() {
    const iceCream = prompt('Do I like ice cream? Please answer \"yes\" or \"no\":').toLowerCase();
    if ((iceCream === 'y') || (iceCream === 'yes')) {
        attemptsCorrect++;
        alert('Of course, ' + name + '. I mean, who DOESN\'T like ice cream, right? :)');
    }
    else if ((iceCream === 'n') || (iceCream === 'no')) {
        alert('You were doing so well, ' + name + '... well, maybe next question you\'ll get back on track?');
    }
    else
        alert('You did not answer \"yes\" or \"no", ' + name + '! Okay, next question!');
    console.log('I do like ice cream.' + name + ' answered \"' + iceCream + '\" to this question.');
}

//Traveled? Y/N

function travels() {
    const internationalTravels = prompt('Have I ever been to any countries outside of the United States? Please answer \"yes\" or \"no\":').toLowerCase();
    if ((internationalTravels === 'y') || (internationalTravels === 'yes')) {
        attemptsCorrect++;
        alert ('Okay now, Professor X... maybe you should be playing the lottery instead of doing this?');
    }
    else if ((internationalTravels === 'n') || (internationalTravels === 'no')) {
        alert ('Keep your day job, ' + name + '. You\'ve got no future as a psychic.');
    }
    else
        alert('You did not answer \"yes\" or \"no", ' + name + '! Okay, next question!');
    console.log('I have been outside of the United States. ' + name + ' answered ' + internationalTravels + ' to this question.');
}

//Number of Times Knee Dislocated?

function knee() {
    let dislocatedKnee = parseInt(prompt('Alright, ' + name + ', now for a tougher question: approximately how many times have I dislocated my right knee?'));
    let count = 0;
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
            attemptsCorrect++;
            break;
        }
    }
    console.log('I have dislocated my right knee approximately 25 times. ' + name + ' used ' + (count) + ' guesses on this question');
}


//States I have lived in?

function states() {
    const statesLived = ['texas', 'wisconsin', 'tennessee', 'ohio', 'alabama', 'missouri', 'georgia'];
    for (let counter = 0; counter < 6; counter++) {
        const guess = prompt('Okay, ' + name + ', time for another guess: What other states have I lived in, other than Oregon? You get six attempts to guess one!').toLowerCase();
        if (statesLived.includes(guess)) {
            attemptsCorrect++;
            alert('Awesome, ' + name + ', you guessed correctly! I have lived in Texas, Wisconsin, Tennessee, Ohio, Alabama, Missouri, and Georgia. Way to go!');
            break;
        }
        else if (statesLived.indexOf(guess) === -1) {
            alert('Nice try, ' + name + ', but no cigar... try again! You have used ' + counter + ' out of six attempts.');

        }
        else if (counter === 5) {
            alert('Sorry, ' + name + ' , you\'ve used up all your tries - I have lived in Texas, Wisconsin, Tennessee, Ohio, Alabama, Missouri, and Georgia.');
            break;
        }
    }
}

adopt();
marry();
pet();
ice();
travels();
knee();
states();


//Tally of total guesses correct
alert('You got ' + attemptsCorrect + ' questions correct, ' + name + '. Better luck next time!');