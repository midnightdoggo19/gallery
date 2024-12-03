fetch('/api/images')
  .then(response => response.json())
  .then(images => {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    document.getElementById('background').style.backgroundImage = `url(${randomImage})`;
    document.getElementById('caption').textContent = 'https://github.com/midnightdoggo19.com/gallery';
  })
  .catch(err => console.error('Error fetching images:', err));
