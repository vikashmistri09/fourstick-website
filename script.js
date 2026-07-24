lucide.createIcons();

// Mobile Menu Toggle
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');
if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

// Modal Toggle Functions
const modal = document.getElementById('proposal-modal');
if (modal) {
    const modalContent = modal.querySelector('div > div');

    function openModal() {
        modal.classList.remove('pointer-events-none', 'opacity-0');
        modal.classList.add('opacity-100');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('opacity-100');
        modal.classList.add('opacity-0');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('pointer-events-none');
            document.body.style.overflow = 'auto';
        }, 300);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// FAQ Accordion Toggle
document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector(".faq-icon");

        // toggle answer
        answer.classList.toggle("hidden");

        // arrow change
        if (answer.classList.contains("hidden")) {
            icon.textContent = "▼";
        } else {
            icon.textContent = "▲";
        }
    });
});
