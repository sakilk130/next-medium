import { SubmitHandler, useForm } from "react-hook-form";

interface IFormData {
  name: string;
  email: string;
  message: string;
}

const Comment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = (data) => console.log(data);

  return (
    <div>
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
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Comment;
