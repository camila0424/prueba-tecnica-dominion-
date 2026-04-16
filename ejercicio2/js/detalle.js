const postContainer = document.getElementById("post");

// Obtiene el id de la URL
function getIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

// Obtiene el detalle del post y lo muestra en pantalla
async function loadPost() {
  const id = getIdFromUrl();

  if (!id) {
    postContainer.innerHTML =
      '<p class="error">No se encontró el id del post.</p>';
    return;
  }

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    const post = await response.json();

    renderPost(post);
  } catch (error) {
    postContainer.innerHTML = '<p class="error">Error al cargar el post.</p>';
  }
}

// Inyecta el detalle del post en el HTML
function renderPost(post) {
  postContainer.innerHTML = `
    <div class="post-detail">
      <p>Título:</p>
      <h2>${post.title}</h2>
      <p class="post-id">id: ${post.id}</p>
      <p class="post-body">${post.body}</p>
    </div>
  `;
}

loadPost();
