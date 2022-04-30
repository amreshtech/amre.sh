export const preventRightClick = () => {
  const img = document.getElementById('SRLLightbox');
  img.addEventListener('contextmenu', (e) => {
    e.preventDefault();
  });
};
