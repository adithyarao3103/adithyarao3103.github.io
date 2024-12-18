async function fetchComments() {
  const commentsDiv = document.getElementById('comments-div');
  
  try {
      const response = await fetch('https://comments-manager-adithyarao3103.vercel.app/api/get-comments');
      
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const htmlContentText = await response.text();
      const parser = new DOMParser();
      const htmlContent = parser.parseFromString(htmlContentText, 'text/html');
      const comments = htmlContent.querySelector('#comments-container');
      const style = htmlContent.querySelector('style');
      const script = htmlContent.querySelector('script');
      
      // console.log('Comments:', comments);
      // Safely insert the HTML content
      commentsDiv.innerHTML = comments.innerHTML;
      const newScript = document.createElement('script');
      newScript.text = script.innerText;
      document.head.appendChild(newScript);
      const newStyle = document.createElement('style');
      newStyle.innerHTML = style.innerHTML;
      document.head.appendChild(newStyle);
      
  } catch (error) {
      console.error('Error fetching comments:', error);
      commentsDiv.innerHTML = `
          <div class="error">
              Sorry, there was an error loading the comments. Please try again later.
          </div>
      `;
  }
}

fetchComments();

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



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Navbar



function checkMobile(){
  return(parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--mobile')));
}

var menuClose=1;


function toggleMenu(){
  if (checkMobile()){
      if (menuClose){
          menuClose = 0;
          document.getElementById("navbar").classList.remove('navClose');
          document.getElementById("navbar").classList.add('navOpen');
      }
      else{
          menuClose = 1;
          document.getElementById("navbar").classList.remove('navOpen');
          document.getElementById("navbar").classList.add('navClose');
      }
  }
}



menu = document.getElementById("navbar");
menuButton = document.getElementById("navbar-mob");

document.addEventListener('click', (event) => {
  if (menuClose == 0 && !menu.contains(event.target) && !menuButton.contains(event.target)) {
  toggleMenu()
  }
});
