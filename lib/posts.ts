import { sanityClient } from "../sanity";

export default async function getPosts() {
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
