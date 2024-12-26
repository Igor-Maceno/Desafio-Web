"use client";

import { useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      const response = await axios.get(
        `http://localhost/backend/wp-json/wp/v2/noticias?search=futebol`
      );
      setResults(response.data);
    }
  };
  console.log("Resultado: ", results);
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        style={styles.input}
      />
      <span
        style={styles.icon}
        onClick={() => alert(`Você pesquisou por: ${searchTerm}`)}
      >
        <Image src="/images/search.png" alt="busca" width={24} height={24} />
      </span>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    borderRadius: "25px",
    padding: "5px 10px",
    backgroundColor: "#E2E2E2",
    margin: "20px",
  },
  input: {
    border: "none",
    outline: "none",
    fontSize: "16px",
    width: "100%",
    backgroundColor: "#E2E2E2",
    color: "#5e5e5e",
    padding: "5px",
  },
  icon: {
    cursor: "pointer",
    margin: "5px",
  },
};
