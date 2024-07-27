document.addEventListener('DOMContentLoaded', function() {
    fetchPost();
});

function fetchPost() {
    fetch('Post_Created_Here/post.json')
    .then(response => response.json())
    .then(posts => {
        displayCarousel(posts);
    })
    .catch(error => console.log('Error Fetching Post: ', error));
}

function displayCarousel(posts) {
    const carouselInner = document.getElementById('carousel-inner');
    const carouselIndicators = document.getElementById('carousel-indicators');
    
    carouselInner.innerHTML = ''; // Clear any existing content
    carouselIndicators.innerHTML = ''; // Clear any existing indicators

    posts.forEach((post, index) => {
        // Create carousel item
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');
        if (index === 0) {
            carouselItem.classList.add('active');
        }
        carouselItem.setAttribute('data-bs-interval', '2000');

        // Add image if available
        if (post.image) {
            const img = document.createElement('img');
            img.src = post.image;
            img.classList.add('d-block', 'w-100');
            carouselItem.appendChild(img);
        }

        const postContent = document.createElement('div');
        postContent.classList.add('carousel-caption', 'd-none', 'd-md-block', 'post-content');

        const title = document.createElement('h5');
        title.textContent = post.title;

        const content = document.createElement('p');
        if(window.innerWidth < 768){
        content.innerHTML = post.tagline.substring(0, 150) + '...'; // Display a preview
        }else{
        content.innerHTML = post.tagline// Display a preview
        }
        const readMore = document.createElement('a');
        readMore.textContent = 'Read More';
        readMore.href = `pages/post.html?id=${encodeURIComponent(post.title)}`;
        readMore.classList.add('btn', 'btn-primary');

        postContent.appendChild(title);
        postContent.appendChild(content);
        postContent.appendChild(readMore);

        carouselItem.appendChild(postContent);
        carouselInner.appendChild(carouselItem);

            // Create carousel indicator
            const indicator = document.createElement('button');
            indicator.type = 'button';
            indicator.setAttribute('data-bs-target', '#carouselExampleDark');
            indicator.setAttribute('data-bs-slide-to', index);
            indicator.setAttribute('aria-label', `Slide ${index + 1}`);
            if (index === 0) {
                indicator.classList.add('active');
                indicator.setAttribute('aria-current', 'true');
            }
            carouselIndicators.appendChild(indicator);
    });
}