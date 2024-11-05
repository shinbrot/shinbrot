function showDetails(title, description, imageSrc) {
  // Get modal elements
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalImage = document.getElementById('modal-image');
  
  // Set modal content
  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalImage.src = imageSrc;

  // Display modal
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('project-modal');
  modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('project-modal');
  if (event.target === modal) {
      modal.style.display = 'none';
  }
}
