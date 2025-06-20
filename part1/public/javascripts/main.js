document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('dog-img');
  const btn = document.getElementById('load-btn');

  async function fetchDogImage() {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      img.src = data.message;
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  }

  btn.addEventListener('click', fetchDogImage);
});