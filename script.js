"use strict"
 function observeElements(selector, className) {
      const onEntry = (entry) => {
        entry.forEach(change => {
          if (change.isIntersecting) {
            change.target.classList.add(className);
          }
        });
      };
    
      const options = { threshold: [0.5] };
      const observer = new IntersectionObserver(onEntry, options);
      const elements = document.querySelectorAll(selector);
    
      elements.forEach((elm) => observer.observe(elm));
    }
    
    observeElements('.page2', 'element-show');
    observeElements('.img_partners', 'element-show');
    observeElements('.medium', 'element-show');
    observeElements('.page5', 'element-show');
    
    const counters = document.querySelectorAll('.value');
    const speed = 200;
    
    counters.forEach(counter => {
      const animate = () => {
        const value = +counter.getAttribute('akhi');
        const data = +counter.innerText;
    
        const time = value / speed;
        if (data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        } else {
          counter.innerText = value;
        }
      }
    
      animate();
    });

$(document).ready(function() {
  $(window).scroll(function() {
    $('.counter').each(function() {
      var elementPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      var count = $(this).attr('data-count');
      if (elementPos < topOfWindow + $(window).height() - 30) {
        $(this).animate({
          countNum: count
        }, {
          duration: 3000,
          easing: 'linear',
          step: function() {
            $(this).text(Math.floor(this.countNum));
          },
          complete: function() {
            $(this).text(this.countNum);
          }
        });
      }
    });
  });
});

const hamburger = document.querySelector('.hamburger'),
      navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

document.addEventListener("mousemove", parallax);
function parallax(e){
  document.querySelectorAll(".object").forEach(function(move){

    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}

const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');
      
  modalTrigger.forEach(btn => {
  btn.addEventListener('click', openModal);                       
  });

function openModal () {
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}
modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if(e.target === modal){
      closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
  }
});
