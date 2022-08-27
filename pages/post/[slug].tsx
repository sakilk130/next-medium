import { GetStaticProps } from "next";
import Head from "next/head";
import PortableText from "react-portable-text";
import Header from "../../components/header";
import { Post } from "../../interfaces/post";
import { getAllPostsIds, getPostBySlug } from "../../lib/posts";
import { urlFor } from "../../sanity";

interface IPostProps {
  post: Post;
}

const Post = ({ post }: IPostProps) => {
  console.log(post);
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <img
          className="w-full h-40 object-cover"
          src={urlFor(post.mainImage).url()!}
          alt={post.title}
        />
        <article className="max-w-3xl mx-auto p-5">
          <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
          <h2 className="text-xl font-light text-gray-500 mb-2">
            {post.description}
          </h2>
          <div className="flex items-center space-x-2">
            <img
              src={urlFor(post.author.image).url()!}
              className="h-10 w-10 rounded-full"
            />
            <p className="font-extralight text-sm">
              <span className="text-green-600">
                Blog post by {post.author.name}{" "}
              </span>{" "}
              - Published at {new Date(post._createdAt).toLocaleString()}
            </p>
          </div>
          <div className="mt-10">
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={post.body}
              serializers={{
                h1: (props: any) => (
                  <h1 className="text-2xl font-bold my-5" {...props} />
                ),
                h2: (props: any) => (
                  <h2 className="text-xl font-bold my-5" {...props} />
                ),
                li: ({ children }: any) => (
                  <li className="ml-4 list-disc"> {children}</li>
                ),
                link: ({ href, children }: any) => (
                  <a href={href} className="text-blue-500 hover:underline">
                    {children}
                  </a>
                ),
              }}
            />
          </div>
        </article>
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = await getAllPostsIds();
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const post = await getPostBySlug(params?.slug);
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export default Post;
