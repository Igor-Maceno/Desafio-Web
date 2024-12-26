import React from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <nav style={styles.container}>
      <div>
        <Link href={`/`}>
          <Image
            src="/images/fic_news_logo.png"
            alt="logo Fic News"
            width={115}
            height={16}
          />
        </Link>
      </div>
      <div style={styles.menu}>menu</div>
    </nav>
  );
};

const styles = {
  container: {
    display: "flex",
    margin: "0 auto",
    flexWrap: "nowrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px",
  },
};
export default Menu;
