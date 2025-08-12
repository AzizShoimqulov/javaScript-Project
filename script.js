fetch('https://api.escuelajs.co/api/v1/products')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('posts-container');
    container.innerHTML = '';

    posts.forEach(product => {
      const div = document.createElement('div');
      div.className = 'post';
      div.innerHTML = `
        <img src="${product.images[0]}" alt="${product.title}" width="200">
        <h2>${product.title}</h2>
        <p><strong>Price:</strong> $${product.price}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    document.getElementById('posts-container').innerText = 'Xatolik yuz berdi: ' + error;
  });





      const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});