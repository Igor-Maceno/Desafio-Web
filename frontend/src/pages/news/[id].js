import { useRouter } from "next/router";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Menu from "@/components/menu/Menu";
import { getPostById } from "@/services/postService";
import "./news.css";

const NewsDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const decodedId = decodeURIComponent(id);
        const sanitizedId = decodedId.replace(/[^\d]/g, "");

        console.log("Sanitized ID:", sanitizedId);

        const foundPost = await getPostById(Number(sanitizedId));
        setPost(foundPost);
      } catch (error) {
        console.error("Erro ao buscar o post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!post) {
    return <div>Notícia não encontrada.</div>;
  }

  return (
    <>
      <Menu />
      <div style={styles.container}>
          <Image
            style={styles.image}
            src={post.acf.imageurl}
            alt={post.acf.category.nome}
            width={320}
            height={320}
          />
        <span style={styles.span}>{post.acf.category.name}</span>
        <h1>{post.title.rendered}</h1>
        <p>{post.acf.content}</p>
        <p>
          <span style={styles.span}>{post.acf.author}</span> -{" "}
          <span style={styles.span}>{post.acf.data}</span>
        </p>
      </div>
    </>
  );
};

const styles = {
  container: {
    margin: "20px",
    maxWidth: "320px",
  },
  span: {
    color: "#5e5e5e",
    fontSize: "12px",
  },
};

export default NewsDetail;
