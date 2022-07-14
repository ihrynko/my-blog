import { useForm } from "react-hook-form";
import { StyledForm } from "./styled";

const Form = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

export default Form;
