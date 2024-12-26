const API_URL = "http://localhost/backend/wp-json/wp/v2/noticias";

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${API_URL}?acf_format=standard&_fields=id,title,acf`);
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }
    const data = await response.json();
    return data; // Retorna todos os posts
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return []; // Retorna um array vazio em caso de erro
  }
};

export const getPostById = async (id) => {
  const posts = await fetchPosts();
  return posts.find((post) => String(post.id) === String(id)) || null;
};
