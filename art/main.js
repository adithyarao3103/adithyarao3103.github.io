// Modal functionality
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const title = item.getAttribute('data-title');
    const description = item.getAttribute('data-description');
    const imageSrc = item.getAttribute('data-image');

    // Update modal content
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = imageSrc;

    // Display modal
    modal.style.display = 'flex';
  });
});

// Close modal when clicking the close button
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside of modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});