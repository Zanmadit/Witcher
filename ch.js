window.addEventListener('scroll', function() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    const scrollProgress = (window.scrollY / docHeight) * 100;
  
    document.getElementById('slider').style.width = scrollProgress + '%';
})
function myFunction() {
    document.getElementById("agree").click();
}

document.addEventListener("DOMContentLoaded", function() {
    const captchaCode = Math.floor(Math.random() * 10000);
  
    alert(`Enter the following captcha code: ${captchaCode}`);
  
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const userInput = prompt('Enter the captcha code:');
  
            if (userInput && parseInt(userInput) === captchaCode) {
                alert("Captcha code is correct! You can proceed.");
            } else {
                alert("Captcha code is incorrect. Closing the website.");
                window.close(); 
            }
        }
    });
  });

$('img').on('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

$(document).ready(function(){
    $(".sec p").mouseover(function(){
        $(this).css("background-color", "#B0B0B0");
    });
});

$(document).ready(function(){
    $(".info p").mouseover(function(){
        $(this).css("background-color", "#B0B0B0");
    });
});

const leftAnimatedElement = document.querySelector('.left-animated');
const rightAnimatedElement = document.querySelector('.right-animated');
let leftPosition = 0;
let rightPosition = window.innerWidth - leftAnimatedElement.offsetWidth;

function animate() {
    leftAnimatedElement.style.left = leftPosition + 'px';
    rightAnimatedElement.style.left = rightPosition + 'px';

    if (leftPosition >= (window.innerWidth - leftAnimatedElement.offsetWidth) / 2) {
        leftPosition = (window.innerWidth - leftAnimatedElement.offsetWidth) / 2;
        rightPosition = (window.innerWidth - leftAnimatedElement.offsetWidth) / 2;
    }

    leftPosition += 2;
    rightPosition -= 2;
    requestAnimationFrame(animate);
}


window.addEventListener('load', () => {
    animate();
});

document.addEventListener("DOMContentLoaded", function() {

    const clickSound = new Audio('sound2World.mp3');

    const cardSoundElement = document.querySelector('.cardSound');
    cardSoundElement.addEventListener('click', function() {
        clickSound.play();
    });
});