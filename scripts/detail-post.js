document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const postTitle = params.get('id');
    fetchPost(postTitle);
});

function fetchPost(postTitle) {
    fetch('../Post_Created_Here/post.json')
    .then(response => response.json())
    .then(posts => {
        const post = posts.find(p => p.title === postTitle);
        if (post) {
            displayPost(post);
        } else {
            document.getElementById('post-title').textContent = 'Post not found';
        }
    })
    .catch(error => console.log('Error Fetching Post: ', error));
}

function displayPost(post) {
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-date').textContent = new Date(post.date).toLocaleDateString();
    
    if (post.image) {
        const img = document.createElement('img');
        img.src = post.image;
        img.alt = post.title;
        document.getElementById('post-image').appendChild(img);
    }
    
    document.getElementById('p-content').innerHTML = post.content;

    
    if (post.author) {
        document.getElementById('author-name').textContent = `By: ${post.author.name}`;
    } else {
        document.querySelector('.author-section').style.display = 'none';
    }
}

