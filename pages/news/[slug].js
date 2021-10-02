import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

function Slug() {
  const router = useRouter();
  return <Layout>{router.query.slug}</Layout>;
}

export default Slug;
