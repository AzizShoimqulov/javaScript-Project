    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(posts => {
    //     const container = document.getElementById('posts-container');
    //     container.innerHTML = '';

    //     posts.forEach(post => {
    //       const div = document.createElement('div');
    //       div.className = 'post';
    //       div.innerHTML = `
    //         <h2>${post.title}</h2>
    //         <p>${post.body}</p>
    //       `;
    //       container.appendChild(div);
    //     });
    //   })
    //   .catch(error => {
    //     document.getElementById('posts-container').innerText = 'Xatolik yuz berdi: ' + error;
    //   });



    const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});