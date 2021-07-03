const countdown = document.querySelector('.countdown');

//
const launchDate = new Date('may 22, 2022 02:00:00').getTime();
//console.log(launchDate)
const intv1 = setInterval (() => {
    //get today date and time(ms)
    const now = new Date().getTime();
    
    //distance from now to the launchDate date
    const distance = launchDate - now;
    console.log(distance)
    //Time cal
    const Days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const Hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000 * 60 * 60));
    const Mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const Seconds = Math.floor((distance % (1000 * 60)) / 1000);


    // display result
    countdown.innerHTML = `
<div>${Days}<span>Days</span></div>
<div>${Hours}<span>Hours</span></div>
<div>${Mins}<span>Mins</span></div>
<div>${Seconds}<span>Seconds</span></div>
    `;

    //if launch date passed
    // if(distance < 0){
    //     //stop countdown
    //     clearInterval(intv1);
    //     //style and output text
    //     countdown.style.color = '#17a2b8';
    //     countdown.innerHTML = 'Launched';

    // }

}, 1000) ;


