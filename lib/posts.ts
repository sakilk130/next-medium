import { sanityClient } from "../sanity";

export async function getPosts() {
  try {
    const query = `*[_type == "post"] {
    _id,
    title,
    author-> {
     name,
     image
    },
    description,
    mainImage,
    slug
  }`;
    const posts = await sanityClient.fetch(query);
    return posts;
  } catch (error: any) {
    console.log(error);
  }
}

export async function getAllPostsIds() {
  try {
    const query = `*[_type == "post"] {
    _id,
    slug{
      current
    }
  }`;
    const posts = await sanityClient.fetch(query);
    return posts.map((post: any) => {
      return {
        params: {
          slug: post.slug.current,
        },
      };
    });
  } catch (error: any) {
    console.log(error);
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    author-> {
     name,
     image
    },
    description,
    mainImage,
    slug,
    _createdAt,
    body
  }`;

    const post = await sanityClient.fetch(query, { slug });
    return post;
  } catch (error: any) {
    console.log(error);
  }
}
