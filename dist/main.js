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
