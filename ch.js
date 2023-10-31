window.addEventListener('scroll', function() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    const scrollProgress = (window.scrollY / docHeight) * 100;
  
    document.getElementById('slider').style.width = scrollProgress + '%';
})