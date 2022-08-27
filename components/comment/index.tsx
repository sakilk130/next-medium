import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormData {
  _id: string;
  name: string;
  email: string;
  message: string;
}

interface ICommentProps {
  _id: string;
}
const Comment = ({ _id }: ICommentProps) => {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({
        ...data,
        _id,
      }),
    })
      .then(() => {
        console.log(data);
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };

  return (
    <>
      {submitted ? (
        <div className="flex flex-col py-10 px-10 my-10 bg-yellow-500 text-white max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold">
            Thank you for sybmitting your comment!
          </h3>
          <p> Once it has been approved, it will appear below</p>
        </div>
      ) : (
        <>
          <p className="text-yellow-500 text-sm">Enjoyed this article</p>
          <h1 className="text-2xl font-bold">Leave a comment bellow!</h1>
          <hr className="border my-2" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col my-3">
              <label htmlFor="name" className="text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-400 outline-none focus:ring"
                placeholder="eg. Sakil Khan"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">Name is required</p>
              )}
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="email" className="text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-400 outline-none focus:ring"
                placeholder="eg. sakilk130@gmail.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">Email is required</p>
              )}
            </div>
            <div className="flex flex-col my-3">
              <label htmlFor="comment" className="text-gray-700">
                Comment
              </label>
              <textarea
                id="comment"
                className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-400 outline-none focus:ring"
                rows={5}
                placeholder="Write your comment here"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">Comment is required</p>
              )}
            </div>
            <button
              type="submit"
              className="p-2 text-white bg-yellow-500 w-full rounded-md my-5 hover:bg-yellow-400"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Comment;
