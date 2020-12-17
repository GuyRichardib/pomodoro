const body = document.querySelector('body');
const main = document.createElement('main');
main.className = 'mainContainer';
document.body.appendChild(main);

const title = document.createElement('h1');
title.className = 'title';
title.innerText = 'Pomodoro Timer'
main.appendChild(title)

const pomodoroDiv = document.createElement('div');
pomodoroDiv.className = 'pomodorodiv';
main.appendChild(pomodoroDiv);


//pomodoro data

const pomodoro = document.createElement('div');
pomodoro.className = 'pomodoro';
pomodoroDiv.appendChild(pomodoro);

const workdiv = document.createElement('div');
workdiv.className = 'workdiv';
workdiv.innerText = 'Work';
pomodoro.appendChild(workdiv);

const work = document.createElement('div');
work.className = 'work';
workdiv.appendChild(work);

const workMinutes = document.createElement('p');
workMinutes.className = 'workminutes';
workMinutes.innerText = 25;
work.appendChild(workMinutes);

const semicolon = document.createElement('p');
semicolon.className = 'semicolon';
semicolon.innerText = ':';
work.appendChild(semicolon);

const workSeconds = document.createElement('p');
workSeconds.className = 'workseconds'
workSeconds.innerText = '00';
work.appendChild(workSeconds);

const cyclediv = document.createElement('div');
cyclediv.className = 'cyclediv';
cyclediv.innerText = 'Cycle';
pomodoro.appendChild(cyclediv);

const cycle = document.createElement('div');
cycle.className = 'cycle';
cyclediv.appendChild(cycle);

const cyclenumber= document.createElement('p');
cyclenumber.className = 'cyclenumber';
cyclenumber.innerText = 0;
cycle.appendChild(cyclenumber);

const otherdiv = document.createElement('div');
otherdiv.className = 'otherdiv';
otherdiv.innerText ='other';
pomodoro.appendChild(otherdiv);

const other = document.createElement('inout');
other.className = 'other';
otherdiv.appendChild(other);


//Buttons
const startButton = document.createElement('button');
startButton.className = 'start';
startButton.innerText = 'Start';
pomodoroDiv.appendChild(startButton);

const restButton = document.createElement('button');
restButton.className = 'reset';
restButton.innerText ='Reset';
pomodoroDiv.appendChild(restButton);

const pauseButton = document.createElement('button');
pauseButton.className = 'pause'
pauseButton.innerText = 'Pause';
pomodoroDiv.appendChild(pauseButton);

let startTimer;

//fonctions

startButton.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
        
        
    } else {
        alert("Timer is already set!");
    }
})



//reset
restButton.addEventListener('click', function(){
    workMinutes.innerText = 25;
    workSeconds.innerText = "00";

    document.getElementsByClassName('cyclenumber').innerText = 0;
    stopInterval()
    startTimer = undefined;
})
//pause
pauseButton.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
    document.getElementsByClassName("work").style = 'background-color: none;'
})

//timer
function timer(){
    //============= compte a rebours Travail ============//
    if(workSeconds.innerText != 0){
        workSeconds.innerText--;
    } else if(workMinutes.innerText != 0 && workSeconds.innerText == 0){
        workSeconds.innerText = 59;
        workMinutes.innerText--;
    } 



    //cyclenumber
    if(workMinutes.innerText == 0 && workSeconds.innerText == 0 ){
        workMinutes.innerText = 25;
        workSeconds.innerText = "00";
        cyclenumber.innerText++;
    }
}

//pause function
function stopInterval(){
    clearInterval(startTimer);
}