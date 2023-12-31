// JavaScript to toggle the visibility of the menu
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navlist = document.querySelector('.navlist');

    hamburger.addEventListener('click', function() {
        navlist.classList.toggle('show');
    });
});
$('#selectionInput').on('change', function() {
  var selectedOption = $(this).find(':selected');
  var url = selectedOption.data('href');
  if (url !== undefined && url !== null) {
      window.location.href = url;
  }
});
function toggleMenu() {
  const menu = document.querySelector('nav ul');
  menu.classList.toggle('active');
}

const textElement = document.getElementById('text');
        const text = "At ISHANT CONSULTANCY Online, we follow a simple process to ensure that you get the most out of our education consultants. Our steps include the following:";
        let index = 0;
    
        function typeWriter() {
          if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 30); // Adjust typing speed here (in milliseconds)
          }
        }
    
        typeWriter();
  
        window.addEventListener('scroll', function() {
          const header = document.querySelector('.header2');
          const scrollPosition = window.scrollY;
        
          if (scrollPosition > 0) {
            header.classList.add('fixed');
          } else {
            header.classList.remove('fixed');
          }
        });
        document.addEventListener('DOMContentLoaded', function() {
          const links = document.querySelectorAll('header a[href^="#"]');
        
          for (const link of links) {
            link.addEventListener('click', smoothScroll);
          }
        
          function smoothScroll(e) {
            e.preventDefault();
        
            const targetId = this.getAttribute('href');
            const targetPosition = document.querySelector(targetId).offsetTop;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000; // Adjust the duration as needed
        
            let start = null;
            window.requestAnimationFrame(step);
        
            function step(timestamp) {
              if (!start) start = timestamp;
              const progress = timestamp - start;
        
              window.scrollTo(0, easeInOut(startPosition, distance, progress, duration));
        
              if (progress < duration) {
                window.requestAnimationFrame(step);
              }
            }
          }
        
          function easeInOut(start, distance, progress, duration) {
            progress /= duration / 2;
            if (progress < 1) {
              return distance / 2 * progress * progress + start;
            }
            progress--;
            return -distance / 2 * (progress * (progress - 2) - 1) + start;
          }
        });
        // When an option is selected, navigate to the corresponding link


        