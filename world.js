document.addEventListener("DOMContentLoaded", function() {
    const captchaCode = Math.floor(Math.random() * 10000);

    function myFunction() {
        document.getElementById("agree").click();
    }
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

document.addEventListener("DOMContentLoaded", function() {

    const clickSound = new Audio('sound2World.mp3');

    const cardSoundElement = document.querySelector('.cardSound');
    cardSoundElement.addEventListener('click', function() {
        clickSound.play();
    });
});

$('img').on('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

$(document).ready(function(){
    $(".card p").mouseover(function(){
        $(this).css("background-color", "#B0B0B0");
    });
});