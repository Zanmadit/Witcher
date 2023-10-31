document.addEventListener("DOMContentLoaded", function() {

  const clickSound = new Audio('sound 1.wav'); 

  const imtextElement = document.querySelector('.navbar-brand');
  imtextElement.addEventListener('click', function() {
      clickSound.play();
  });
});

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

function showTab(tabName) {
  document.getElementById('videoContent').style.display = 'none';
  document.getElementById('imageContent').style.display = 'none';
  document.getElementById('videoTab').classList.remove('active');
  document.getElementById('imageTab').classList.remove('active');

  document.getElementById(tabName + 'Content').style.display = 'block';
  document.getElementById(tabName + 'Tab').classList.add('active');
}
showTab('video');

$(document).ready(function(){
  $(".card p").mouseover(function(){
      $(this).css("background-color", "#B0B0B0");
  });
});

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
