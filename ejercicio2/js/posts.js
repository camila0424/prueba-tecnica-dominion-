import { randomBoolean } from "../helpers/randomData.js";

const postsContainer = document.getElementById("posts");

// Obtiene los posts de la API y los muestra en pantalla
async function loadPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    // Añade la propiedad 'published' a cada post con un valor aleatorio
    const postsWithPublished = posts.map((post) => ({
      ...post,
      published: randomBoolean(),
    }));

    // Filtra solo los posts publicados
    const publishedPosts = postsWithPublished.filter((post) => post.published);

    // Muestra los posts en el HTML
    renderPosts(publishedPosts);
  } catch (error) {
    postsContainer.innerHTML =
      '<p class="error">Error al cargar los posts.</p>';
  }
}

// Inyecta los posts en el HTML
function renderPosts(posts) {
  if (posts.length === 0) {
    postsContainer.innerHTML =
      '<p class="loading">No hay posts publicados.</p>';
    return;
  }

  postsContainer.innerHTML = posts
    .map(
      (post) => `
      <div class="post-card" onclick="goToDetail(${post.id})">
        <p>Título:</p>
        <h2>${post.title}</h2>
      </div>
    `,
    )
    .join("");
}

// Navega a la página de detalle pasando el id por la URL
function goToDetail(id) {
  window.location.href = `detalle.html?id=${id}`;
}

// Hacemos goToDetail global para que el onclick del HTML pueda usarla
window.goToDetail = goToDetail;

loadPosts();
