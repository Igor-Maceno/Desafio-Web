import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({posts}) => {

  return (
    <div style={styles.container}>
      {posts.map(post => (
        <Link style={styles.link} key={post.id} href={`/news/${post.id}}`}>
          <div key={post.id} style={styles.card}>
            <Image
              style={styles.image}
              src={post.acf.imageurl}
              alt={post.acf.category.name}
              width={320}
              height={320}
            />
            <div style={styles.texts}>
              <span style={styles.span}>{post.acf.category.name}</span>
              <h2>{post.title.rendered}</h2>
              <p>
                <span style={styles.span}>{post.acf.author}</span> -{" "}
                <span style={styles.span}>{post.acf.data}</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const styles = {
  container: {
    margin: "20px",
    maxWidth: "320px",
  },
  card: {
    backgroundColor: "#E5E5E5",
    borderRadius: "15px",
    margin: "20px auto",
  },
  texts: {
    padding: "10px",
    color: "#000"
  },
  span: {
    color: "#5e5e5e",
    fontSize: "12px",
  },
  image: {
    borderRadius: "15px 15px 0 0",
  },
  link: {
    textDecoration: "none"
  }
};

export default Card;
