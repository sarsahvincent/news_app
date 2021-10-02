import React from "react";
import Head from "next/head";

function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {children}
    </div>
  );
}

export default Layout;

Layout.defaultProps = {
  title: "Sport News | Find Latest Sport News",
  description: "A Website that brings latest news about sports",
  keywords: "criket, football, f1, tennis, golf",
};
