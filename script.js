fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(photos => {
    const container = document.getElementById('posts-container');
    container.innerHTML = '';

    photos.slice(0, 50).forEach(photo => {
      const div = document.createElement('div');
      div.className = 'post';
      div.innerHTML = `
        <img src="${photo.thumbnailUrl}" alt="${photo.title}">
        <p>${photo.title}</p>
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




fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then(photos => {
//     const container = document.getElementById('posts-container');
//     container.innerHTML = '';

//     photos.slice(0, 50).forEach(photo => {
//       const div = document.createElement('div');
//       div.className = 'post';
//       div.innerHTML = `
//         <img src="${photo.thumbnailUrl}" alt="${photo.title}">
//         <p>${photo.title}</p>
//       `;
//       container.appendChild(div);
//     });
//   })
//   .catch(error => {
//     document.getElementById('posts-container').innerText = 'Xatolik yuz berdi: ' + error;
//   });

// const menuToggle = document.getElementById("menu-toggle");
// const navLinks = document.querySelector(".nav-links");

// menuToggle.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });
fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then(photos => {
//     const container = document.getElementById('posts-container');
//     container.innerHTML = '';

//     photos.slice(0, 50).forEach(photo => {
//       const div = document.createElement('div');
//       div.className = 'post';
//       div.innerHTML = `
//         <img src="${photo.thumbnailUrl}" alt="${photo.title}">
//         <p>${photo.title}</p>
//       `;
//       container.appendChild(div);
//     });
//   })
//   .catch(error => {
//     document.getElementById('posts-container').innerText = 'Xatolik yuz berdi: ' + error;
//   });

// const menuToggle = document.getElementById("menu-toggle");
// const navLinks = document.querySelector(".nav-links");

// menuToggle.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });
fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then(photos => {
//     const container = document.getElementById('posts-container');
//     container.innerHTML = '';

//     photos.slice(0, 50).forEach(photo => {
//       const div = document.createElement('div');
//       div.className = 'post';
//       div.innerHTML = `
//         <img src="${photo.thumbnailUrl}" alt="${photo.title}">
//         <p>${photo.title}</p>
//       `;
//       container.appendChild(div);
//     });
//   })
//   .catch(error => {
//     document.getElementById('posts-container').innerText = 'Xatolik yuz berdi: ' + error;
//   });

// const menuToggle = document.getElementById("menu-toggle");
// const navLinks = document.querySelector(".nav-links");

// menuToggle.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });
fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then(photos => {
//     const container = document.getElementById('posts-container');
//     container.innerHTML = '';

//     photos.slice(0, 50).forEach(photo => {
//       const div = document.createElement('div');
//       div.className = 'post';
//       div.innerHTML = `
//         <img src="${photo.thumbnailUrl}" alt="${photo.title}">
//         <p>${photo.title}</p>
//       `;
//       container.appendChild(div);
//     });
//   })
//   .catch(error => {
//     document.getElementById('posts-container').innerText = 'Xatolik yuz berdi: ' + error;
//   });

// const menuToggle = document.getElementById("menu-toggle");
// const navLinks = document.querySelector(".nav-links");

// menuToggle.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });

fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then(photos => {
//     const container = document.getElementById('posts-container');
//     container.innerHTML = '';

//     photos.slice(0, 50).forEach(photo => {
//       const div = document.createElement('div');
//       div.className = 'post';
//       div.innerHTML = `
//         <img src="${photo.thumbnailUrl}" alt="${photo.title}">
//         <p>${photo.title}</p>
//       `;
//       container.appendChild(div);
//     });
//   })
//   .catch(error => {
//     document.getElementById('posts-container').innerText = 'Xatolik yuz berdi: ' + error;
//   });

// const menuToggle = document.getElementById("menu-toggle");
// const navLinks = document.querySelector(".nav-links");

// menuToggle.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });


