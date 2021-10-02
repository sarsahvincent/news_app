import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

function about() {
  return (
    <div>
      <Layout
        title="About"
        keywords="about football page"
        description="this is the
        most authentic sport news" 
      >
        <h1> About page</h1>
        <p>App to find out Sport news like ...</p>
      </Layout>
    </div>
  );
}

export default about;
