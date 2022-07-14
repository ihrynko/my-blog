import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { StyledForm } from "./styled";

const UpdateForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    console.log(event);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <label>Title</label>
      <input
        {...register("title", {
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors?.name?.type === "pattern" && <p>Alphabetical characters only</p>}
      <label>Description</label>
      <input {...register("description", { pattern: /^[A-Za-z]+$/i })} />
      {errors?.description?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
      <label>Author</label>
      <input {...register("author", { pattern: /^[A-Za-z]+$/i })} />
      {errors?.author?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
    </StyledForm>
  );
};

export default UpdateForm;
