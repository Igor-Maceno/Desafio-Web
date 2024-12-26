const API_URL = "http://localhost/backend/wp-json/wp/v2/categories";

export const fetchCategory = async () => {
  try {
    const response = await fetch(
      `${API_URL}??format=standard&_fields=id,name,slug`
    );
    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status}`);
    }
    const data = await response.json();
    const filteredData = data.filter((category) => category.name !== "Sem categoria");

    return filteredData;
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
    return [];
  }
};

export const getCategoryById = async (id) => {
  const Categories = await fetchCategory();
  return (
    Categories.find((category) => String(category.id) === String(id)) || null
  );
};
