import styles from "./page.module.css";
import Search from "../components/search/Search";
import Categories from "@/components/categories/Categories";
import Card from "@/components/card/Card";
import { fetchPosts } from "@/services/postService";

const Home = async () => {
  const posts = await fetchPosts();
  return (
    <div className={styles.page}>
      <Search />
      <Categories />
      <h3 className={styles.h3}>Últimas Notícias</h3>
      <Card posts={posts} />
    </div>
  );
};

export default Home;
