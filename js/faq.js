document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('faqSearch');
    const showMoreBtn = document.getElementById('showMoreFaqs');
    const hiddenFaqs = document.querySelector('.hidden-faqs');
    const allFaqItems = document.querySelectorAll('.accordion-item');

    // Show/Hide more FAQs
    showMoreBtn.addEventListener('click', function() {
        hiddenFaqs.style.display = hiddenFaqs.style.display === 'none' ? 'block' : 'none';
        showMoreBtn.classList.toggle('active');
        
        // Update button text
        const isShowing = hiddenFaqs.style.display === 'block';
        showMoreBtn.innerHTML = isShowing ? 
            'Show Less FAQs <i class="fas fa-chevron-up ms-2"></i>' : 
            'Show More FAQs <i class="fas fa-chevron-down ms-2"></i>';
    });

    // Search functionality
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        // If search is empty, reset to initial state
        if (!searchTerm) {
            hiddenFaqs.style.display = 'none';
            showMoreBtn.style.display = 'block';
            allFaqItems.forEach(item => {
                item.classList.remove('hidden');
                if (item.classList.contains('initial-faq')) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            return;
        }

        // Show all items when searching
        hiddenFaqs.style.display = 'block';
        showMoreBtn.style.display = 'none';

        // Filter FAQ items
        allFaqItems.forEach(item => {
            const question = item.querySelector('.accordion-button').textContent.toLowerCase();
            const answer = item.querySelector('.accordion-body').textContent.toLowerCase();
            
            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.classList.remove('hidden');
                item.style.display = 'block';
            } else {
                item.classList.add('hidden');
                item.style.display = 'none';
            }
        });
    });
});
