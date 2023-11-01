function myFunction() {
    document.getElementById("agree").click();
  }

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
  
    window.onscroll = function () {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("dark-bg");
      } else {
        navbar.classList.remove("dark-bg");
      }
   };
  }
);

document.addEventListener("DOMContentLoaded", function() {

    const clickSound = new Audio('sound.wav'); 
  
    const imtextElement = document.querySelector('.imtext');
    imtextElement.addEventListener('click', function() {
        clickSound.play();
    });
  });
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

  $(document).ready(function(){
    $(".card p").mouseover(function(){
        $(this).css("background-color", "#B0B0B0");
    });
  });  