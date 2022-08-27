import { useRouter } from "next/router";
import { Post } from "../../interfaces/post";
import { urlFor } from "../../sanity";

interface ICardProps {
  post: Post;
}

const Card = ({ post }: ICardProps) => {
  const router = useRouter();
  return (
    <div
      className="shadow-md rounded-lg cursor-pointer border group overflow-hidden"
      onClick={() => router.push(`/post/${post.slug.current}`)}
    >
      <img
        className="object-contain group-hover:scale-105 transition-transform duration-200 ease-in-out"
        src={urlFor(post.mainImage).url()!}
        alt={post.title}
      />
      <div className="p-4 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p className="text-sm">{post.description}</p>
        </div>
        <img
          className="h-12 w-12 rounded-full object-contain"
          src={urlFor(post.author.image).url()!}
          alt={post.author.name}
        />
      </div>
    </div>
  );
};

export default Card;
