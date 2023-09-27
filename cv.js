var elements = document.querySelector('.cv');
elements.classList.add('visible');

var header = document.querySelector('.nav-bar');
let lastKnownScrollPosition = 0;
let isTimelineScrolling = false;

document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;
  if (lastKnownScrollPosition === 0) {
    header.style.borderBottomColor = "transparent";
  } else {
    header.style.borderBottomColor = "#2c2c2c";
  }
});

var elements = document.querySelectorAll('.time');
var screenHeight = window.innerHeight || document.documentElement.clientHeight;
var threshold = screenHeight / 2; // Element appears when it reaches the middle of the screen

function handleScroll() {
  elements.forEach(function(element) {
    var elementOffsetTop = element.getBoundingClientRect().top;

    if (elementOffsetTop <= threshold) {
      element.classList.add('appear');
    } else {
      element.classList.remove('appear');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', function() {
  screenHeight = window.innerHeight || document.documentElement.clientHeight;
  threshold = screenHeight / 2;
  handleScroll();
});


document.querySelectorAll('.nav-links a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var targetId = this.getAttribute('href');
    var target = document.querySelector(targetId);
    if (target) {
      var offset = document.querySelector('header').offsetHeight;
      var targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});







