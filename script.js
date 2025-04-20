document.addEventListener('mousemove', e => {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.top = `${e.clientY}px`;
    trail.style.left = `${e.clientX}px`;
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 1000);
  });
  
  const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500)
        }
    }
} )

//contact me button when click

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        pages.forEach(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500)
        },(index + 1) * 200 + 100)
    })
}

//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0 ) {
        pageNumber = totalPages - 1;
    }
 }

//back profile button when click

const backProfileBtn = document.querySelector('.back.profile');

backProfileBtn.onclick = () => {
    let reversedPages = Array.from(pages).reverse(); // reverse the pages order
    reversedPages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.remove('turn');

            setTimeout(() => {
                page.style.zIndex = 10 + index;
            }, 500);

        }, (index + 1) * 200 + 100);
    });
};

//opening animations 
const coverRight = document.querySelector('.cover.cover-right');
const pageleft = document.querySelector('.book.page.page-left');

//opening animation (cover rightanimation)

setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800);

//opening animation (left or profile page animation)

setTimeout(() => {
    pageleft.style.zIndex = 20;
}, 3200);

//opening animation (all pages right animation)
let reversedPages = Array.from(pages).reverse(); // reverse the pages order
    reversedPages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.remove('turn');

            setTimeout(() => {
                page.style.zIndex = 10 + index;
            }, 500);

        }, (index + 1) * 200 +2100);
    });

const text = ["Hello, I'm Malaika", "Web Developer", "Creative Designer"];
let i = 0, j = 0, currentText = '', isDeleting = false;

function type() {
  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      currentText = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = text[i].substring(0, j--);
    }
    if (j === text[i].length) isDeleting = true;
    if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
    document.querySelector(".typed-text").innerText = currentText;
  }
  setTimeout(type, 150);
}
type();

// form-submit.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('.btn');

    form.addEventListener('submit', function () {
        submitButton.disabled = true;
        submitButton.value = "Sending...";
    });
});


// Shooting star effect on page load
window.addEventListener('load', () => {
    const createShootingStar = () => {
      const star = document.createElement('div');
      star.classList.add('shooting-star');
      
      // Randomize position and animation delay
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      
      document.body.appendChild(star);
  
      // Remove the star after animation completes
      setTimeout(() => {
        star.remove();
      }, 2000); // matches the duration of the animation
    };
  
    // Create 5 shooting stars on page load
    for (let i = 0; i < 5; i++) {
      createShootingStar();
    }
  });

  
// Create a custom cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Update the position of the cursor based on mouse movement
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
});

// Smooth transition for cursor scaling
document.addEventListener('mouseenter', (e) => {
    cursor.style.transition = 'all 0.3s ease';
});

document.addEventListener('mouseleave', (e) => {
    cursor.style.transition = 'all 0.3s ease';
});



