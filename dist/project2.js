

const galleryContainer = document.querySelector('.gallery-grid');

// Only apply swipe functionality on touch devices
if ('ontouchstart' in window || navigator.maxTouchPoints) {
    let startX;
    let isDown = false;

    galleryContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDown = true;
    });

    galleryContainer.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const currentX = e.touches[0].clientX;
        const diffX = startX - currentX;

        if (diffX > 50) { // Swipe Left
            nextGalleryItem();
            isDown = false;
        } else if (diffX < -50) { // Swipe Right
            prevGalleryItem();
            isDown = false;
        }
    });

    galleryContainer.addEventListener('touchend', () => {
        isDown = false;
    });

    // Gallery Navigation Functions
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentGalleryIndex = 0;

    function showGalleryItem(index) {
        galleryItems.forEach((item, idx) => {
            if (idx === index) {
                item.scrollIntoView({ behavior: 'smooth', inline: 'center' });
            }
        });
    }

    function nextGalleryItem() {
        currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
        showGalleryItem(currentGalleryIndex);
    }

    function prevGalleryItem() {
        currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
        showGalleryItem(currentGalleryIndex);
    }
}

// === Additional JavaScript for Future Enhancements ===
// You can add more interactivity or features as needed

document.addEventListener('DOMContentLoaded', () => {
    // ... existing JavaScript ...

    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox .close');
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
            lightboxCaption.textContent = img.alt;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close lightbox when clicking outside the image
    window.addEventListener('click', (e) => {
        if (e.target == lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
