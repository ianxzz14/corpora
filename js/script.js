// Main Script for Corpora Rent

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('open');
        });
    }

    // Modal Handling
    const modal = document.querySelector('.modal-overlay');
    const closeBtn = document.querySelector('.modal-close');
    const cancelBtn = document.querySelector('.btn-cancel');
    const bookingButtons = document.querySelectorAll('.btn-book');

    const openModal = () => {
        if(modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    }

    const closeModal = () => {
        if(modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    bookingButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    if(cancelBtn) cancelBtn.addEventListener('click', closeModal);

    // Close on outside click
    if(modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});
