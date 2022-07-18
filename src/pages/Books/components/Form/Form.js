import { useForm } from "react-hook-form";
import { StyledForm } from "./styled";

const Form = ({ data, onSave }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      if (!data) {
        onSave(values);
      } else {
        onSave({ ...values, id: data._id });
      }
    } catch (error) {}
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} id="form">
      <label>Title</label>
      <input
        defaultValue={data?.title || ""}
        {...register("title", { required: true, pattern: /^[A-Za-z]+$/i })}
      />
      {errors?.title?.type === "pattern" && <p>Alphabetical characters only</p>}
      {errors.title?.type === "required" && "Title is required"}
      <label>Description</label>
      <input
        defaultValue={data?.description || ""}
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
