import React from "react";
import { Post } from "../../interfaces/post";
import Card from "../card";

interface ICardItemsProps {
  posts: Post[];
}

const CardItems = ({ posts }: ICardItemsProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto p-5 gap-5 md:gap-3 lg:gap-5">
      {posts.map((post: Post) => (
        <Card key={post._id} post={post} />
      ))}
    </div>
  );
};

export default CardItems;
