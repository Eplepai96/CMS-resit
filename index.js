const container = document.querySelector(".container");
const postsUrl = "https://www.eplepaisolutions.com/wp-json/wp/v2/posts?page=1&_embed";

async function getPosts(url) {
    const response = await fetch(url);
    const posts = await response.json();
    console.log(response)

    posts.forEach(function(post){
        container.innerHTML += `<h2>${post.title.rendered}</h2>
                                <div>${post.content.rendered}</div>
                                <img style="max-width: 100%" src="${post._embedded?.["wp:featuredmedia"]?.[0].source_url}"/>`
    })
    
}

getPosts(postsUrl)