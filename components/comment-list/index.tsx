import { Comment } from "../../interfaces/comment";

interface ICommentListProps {
  comments: Comment[];
}

const CommentList = ({ comments }: ICommentListProps) => {
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
