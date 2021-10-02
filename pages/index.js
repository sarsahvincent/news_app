import Layout from "@/components/Layout";
import Link from "next/link";
import { API_URL } from "@config/index";

export default function Home({ news }) {
  return (
    <div>
      <Layout>
      <h2>Latest News</h2>
      {news.map((item) => (
        <h1>{item.name}</h1>
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
