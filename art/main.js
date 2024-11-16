async function fetchComments() {
  const commentsDiv = document.getElementById('comments-div');
  
  try {
      const response = await fetch('https://comment-system-adithyarao3103.vercel.app/api/get-comments');
      
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const htmlContent = await response.text();
      
      // Safely insert the HTML content
      commentsDiv.innerHTML = htmlContent;
      
  } catch (error) {
      console.error('Error fetching comments:', error);
      commentsDiv.innerHTML = `
          <div class="error">
              Sorry, there was an error loading the comments. Please try again later.
          </div>
      `;
  }
}

// Fetch comments when the page loads
document.addEventListener('DOMContentLoaded', fetchComments);

const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalContent = document.getElementById('modalContent');

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const title = item.getAttribute('data-title');
    const description = item.getAttribute('data-description');
    const imageSrc = item.getAttribute('data-image');

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = imageSrc;

    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    modal.style.display = 'none';
  }
});
