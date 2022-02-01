import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";

const FirstPost: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>First Post</h1>
      <h2 className={styles.title}>
        <Link href="/">
          <a>ホームに戻る</a>
        </Link>
      </h2>
    </div>
  );
};

export default FirstPost;
