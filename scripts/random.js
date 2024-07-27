document.addEventListener('DOMContentLoaded', () => {
    const imgElement = document.getElementById('random-image');
    const accessKey = 'BGhovVq35FdXYFFPPOg7kTmU8D5qaYVbl8NjtEahtxw';

    fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}`)
        .then(response => response.json())
        .then(data => {
            imgElement.src = data.urls.regular;
            imgElement.alt = data.alt_description || 'Random Unsplash Image';
        })
        .catch(error => {
            console.error('Error fetching image from Unsplash:', error);
            imgElement.alt = 'Error loading image';
        });
});
