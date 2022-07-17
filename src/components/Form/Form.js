import { useForm } from "react-hook-form";
import { StyledForm } from "./styled";

const Form = ({ onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <StyledForm
      defaultValues={defaultValues}
      onSubmit={handleSubmit(onSubmit)}
      id="form"
    >
      <label>Title</label>
      <input
        {...register("title", { required: true, pattern: /^[A-Za-z]+$/i })}
      />
      {errors?.title?.type === "pattern" && <p>Alphabetical characters only</p>}
      {errors.title?.type === "required" && "Title is required"}
      <label>Description</label>
      <input
        {...register("description", {
          required: true,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors.description?.type === "required" && "Description is required"}
      {errors?.description?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
    </StyledForm>
  );
};

export default Form;
