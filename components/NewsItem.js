import React from "react";
import Image from "next/image";
import styles from "@/styles/NewsItem.module.css";
import Link from "next/link";

function NewsItem({ key, news }) {
  return (
    <div className={styles.news}>
      <div className={styles.img}>
        <Image
          src={news.image ? news.image : "No Image"}
          height={100}
          width={150}
        />
      </div>
      <div className={styles.info}>
        <span>
          {news.date} {news.time}
        </span>{" "}
        <h3>{news.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/news/${news.slug}`}>
          <a className="btn">Read More</a>
        </Link>
      </div>
    </div>
  );
}

export default NewsItem;
