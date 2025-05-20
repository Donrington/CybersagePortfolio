const open = document.querySelector('.container');
		const close = document.querySelector('.close');
		var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
		open.addEventListener('click', () => {
			if (tl.reversed()) {
				tl.play();
			} else {
				tl.to('nav', { right: 0 })
					.to('nav', { height: '100vh' }, '-=.1')
					.to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
					.to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
					.to('nav h2', { opacity: 1 }, '-=1');
			}
		});

		close.addEventListener('click', () => {
			tl.reverse();
		});


    // Contact Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Retrieve form values
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validation
        if (email === '' || phone === '' || message === '') {
            formMessage.style.color = 'red';
            formMessage.textContent = 'Please fill in all required fields.';
            return;
        }

        // Email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formMessage.style.color = 'red';
            formMessage.textContent = 'Please enter a valid email address.';
            return;
        }

        // Phone number validation (basic)
        const phonePattern = /^\+?[0-9\s\-]{7,15}$/;
        if (!phonePattern.test(phone)) {
            formMessage.style.color = 'red';
            formMessage.textContent = 'Please enter a valid phone number.';
            return;
        }

        // Mock Submission Success
        formMessage.style.color = 'green';
        formMessage.textContent = 'Your message has been sent successfully!';
        contactForm.reset();

        // Optionally, remove the message after a few seconds
        setTimeout(() => {
            formMessage.textContent = '';
        }, 5000);
    });



    // Timeline scroll animation
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: false,
    mirror: false
  });
  
  // Timeline scroll effect
  const timelineItems = document.querySelectorAll('.timeline-item');
  const progressBar = document.querySelector('.timeline-progress-bar');
  
  function updateTimeline() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const timelineSection = document.querySelector('.history-section');
    const timelineSectionTop = timelineSection.offsetTop;
    const timelineSectionHeight = timelineSection.offsetHeight;
    
    // Calculate timeline progress
    if (scrollPosition > timelineSectionTop - windowHeight/2) {
      const progress = Math.min((scrollPosition - (timelineSectionTop - windowHeight/2)) / (timelineSectionHeight - windowHeight/2), 1);
      progressBar.style.height = `${progress * 100}%`;
      
      // Animate timeline items
      timelineItems.forEach((item, index) => {
        const itemTop = item.offsetTop + timelineSectionTop;
        if (scrollPosition > itemTop - windowHeight * 0.8) {
          item.classList.add('active');
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }
      });
    }
  }
  
  // Initialize particles.js
  if (window.particlesJS) {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 40,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#d10303"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.2,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#d10303",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 0.5
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }
  
  // Initialize timeline items with starting properties
  timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transitionDelay = `${index * 0.1}s`;
    item.style.transition = 'all 0.6s ease-out';
  });
  
  // Run on load and scroll
  updateTimeline();
  window.addEventListener('scroll', updateTimeline);
  
  // Add hover effects to timeline icons
  document.querySelectorAll('.timeline-icon').forEach(icon => {
    icon.addEventListener('mouseover', function() {
      this.style.animation = 'pulse 1.5s infinite';
    });
    
    icon.addEventListener('mouseout', function() {
      this.style.animation = 'none';
    });
  });
});