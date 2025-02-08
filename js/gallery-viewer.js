document.addEventListener('DOMContentLoaded', function() {
    const viewer = document.querySelector('.fullscreen-viewer');
    const viewerImg = viewer.querySelector('.fullscreen-image img');
    const closeBtn = viewer.querySelector('.close-viewer');
    const prevBtn = viewer.querySelector('.prev-btn');
    const nextBtn = viewer.querySelector('.next-btn');
    const galleryItems = document.querySelectorAll('.gallery-item img');
    let currentIndex = 0;

    // Open viewer
    galleryItems.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            viewerImg.src = img.src;
            viewerImg.alt = img.alt;
            viewer.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close viewer
    closeBtn.addEventListener('click', () => {
        viewer.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Navigate images
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        viewerImg.src = galleryItems[currentIndex].src;
        viewerImg.alt = galleryItems[currentIndex].alt;
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        viewerImg.src = galleryItems[currentIndex].src;
        viewerImg.alt = galleryItems[currentIndex].alt;
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!viewer.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            viewer.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        }
        if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });
});
