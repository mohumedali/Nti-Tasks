function getPostsThen() {
    let count = parseInt(document.getElementById("postCount").value);
    let container = document.getElementById("postsContainer");
    container.innerHTML = "";

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        let posts = data.slice(0, count);
        posts.forEach(post => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <p><strong>userId:</strong> ${post.userId}</p>
            <p><strong>id:</strong> ${post.id}</p>
            <p><strong>title:</strong> ${post.title}</p>
            <p><strong>body:</strong> ${post.body}</p>
        `;
        container.appendChild(card);
    });
    })
    .catch(err => console.log("Error:", err));
}

async function getPostsAsync() {
    let count = parseInt(document.getElementById("postCount").value);
    let container = document.getElementById("postsContainer");
    container.innerHTML = "";

try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    let posts = data.slice(0, count);

    posts.forEach(post => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <p><strong>userId:</strong> ${post.userId}</p>
        <p><strong>id:</strong> ${post.id}</p>
        <p><strong>title:</strong> ${post.title}</p>
        <p><strong>body:</strong> ${post.body}</p>
        `;
        container.appendChild(card);
    });
} catch (err) {
    console.error("Error:", err);
}
}

