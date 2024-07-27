document.addEventListener('DOMContentLoaded', function() {
    fetchPost();
});

function fetchPost() {
    fetch('Post_Created_Here/post.json')
    .then(response => response.json())
    .then(posts => {
        displayCarousel(posts);
        addMouseHoverScroll();
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
        carouselItem.setAttribute('data-bs-interval', '5000');

        // Add image if available
        if (post.image) {
            const img = document.createElement('img');
            img.src = post.image;
            img.classList.add('d-block', 'w-100');
            carouselItem.appendChild(img);
        }

        const postContent = document.createElement('div');
        postContent.classList.add('carousel-caption', 'd-md-block', 'post-content', 'position-sticky');

        const title = document.createElement('h1');
        title.innerHTML = post.title;

        const content = document.createElement('p');
        content.innerHTML = post.tagline.substring(0, 180) + '...'; // Display a preview

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

function addMouseHoverScroll() {
    const carousel = document.getElementById('carouselExampleDark');
    const bsCarousel = new bootstrap.Carousel(carousel);

    carousel.addEventListener('mouseover', function() {
        carousel.addEventListener('wheel', handleScroll);
    });

    carousel.addEventListener('mouseleave', function() {
        carousel.removeEventListener('wheel', handleScroll);
    });

    function handleScroll(event) {
        event.preventDefault(); // Prevent page scrolling
        if (event.deltaY > 0) {
            bsCarousel.next();
        } else {
            bsCarousel.prev();
        }
    }
}
