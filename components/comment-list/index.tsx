import { Comment } from "../../interfaces/comment";

interface ICommentListProps {
  comments: Comment[];
}

const CommentList = ({ comments }: ICommentListProps) => {
  if (comments.length === 0) {
    return (
      <div className="flex flex-col py-10 px-10 my-10 bg-yellow-500 text-white max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold">No comments yet!</h3>
        <p>Be the first to comment!</p>
      </div>
    );
  }
  return (
    <div className="shadow-md border p-7 mt-5">
      <h1 className="text-2xl font-bold">Comments</h1>
      <hr className="mb-5 mt-1" />
      <ul>
        {comments.map((comment) => (
          <li key={comment._id} className="flex">
            <div className="flex">
              <h3 className="text-yellow-500">{comment.name} : </h3>
              <p> {comment.message}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
