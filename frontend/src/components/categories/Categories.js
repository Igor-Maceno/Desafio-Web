import React from "react";
import { fetchCategory } from "@/services/categoryService";

const Categories = async() => {
  const categories = await fetchCategory();
  return (
    <div style={styles.container}>
      <ul style={styles.menuList}>
        <li style={styles.firstItem}>Todas</li>
        {categories.map(category => (
          <li key={category.id} className="categoryItem" style={styles.menuItem}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    marginLeft: "20px",
    overflowX: "auto",
    maxWidth: "100%",
  },
  menuList: {
    display: "flex",
    listStyle: "none",
    cursor: "pointer",
    gap: "15px",
    overflow: "scroll",
    scrollbarWidth: "none",
  },
  menuItem: {
    margin: 0,
    padding: "8px",
    backgroundColor: "#E2E2E2",
    color: "#5e5e5e",
    borderRadius: "15px",
  },
  firstItem: {
    margin: 0,
    padding: "8px",
    backgroundColor: "#000",
    color: "#FFF",
    borderRadius: "15px",
  }
};

export default Categories;
