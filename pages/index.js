import Layout from "@/components/Layout";
import Link from "next/link";
import { API_URL } from "@config/index";
import NewsItem from "@/components/NewsItem";

export default function Home({ news }) {
  return (
    <div>
      <Layout>
        <h2>Latest News</h2>
        {news.length === 0 && <h3>No News Found</h3>}
        {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/news`);
  const news = await res.json();
  return {
    props: { news: news },
  };
}