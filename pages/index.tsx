import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/banner";
import CardItems from "../components/card-items";
import Header from "../components/header";
import { Post } from "../interfaces/post";
import { getPosts } from "../lib/posts";

interface IHomeProps {
  posts: Post[];
}

const Home = ({ posts }: IHomeProps) => {
  return (
    <div>
      <Head>
        <title>Next Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <CardItems posts={posts} />
    </div>
  );
};

export async function getServerSideProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
  };
}

export default Home;
