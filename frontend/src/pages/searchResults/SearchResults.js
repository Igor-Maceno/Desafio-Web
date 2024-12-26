import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchPosts } from "@/services/postService"; 
import Card from "@/components/card/Card"; 

export default function SearchResults() {
  const router = useRouter();
  const { searchTerm } = router.query; 
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true); 
      const posts = await fetchPosts();
      const filteredPosts = posts.filter((post) =>
        post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredPosts);
      setLoading(false); 
    };

    if (searchTerm) {
      fetchResults();
    }
  }, [searchTerm]);

  return (
    <div>
      <h1>Resultados para: {searchTerm}</h1>
      {loading ? (
        <p>Carregando...</p> 
      ) : results.length === 0 ? (
        <p>Nenhum resultado encontrado.</p>
      ) : (
        <Card posts={results} /> 
      )}
    </div>
  );
}
