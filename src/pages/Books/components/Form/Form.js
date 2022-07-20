import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  StyledForm,
  StyledError,
  StyledLabel,
  StyledTextarea,
  StyledInput,
} from "./styled";

const schema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  pages: yup.number().positive().integer().required(),
});

const Form = ({ data, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: data,
  });

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} id="form">
      <StyledLabel>Title</StyledLabel>
      <StyledInput {...register("title")} />
      <StyledError>{errors.title?.message}</StyledError>
      <StyledLabel>Description</StyledLabel>
      <StyledTextarea {...register("description")} />
      <StyledError>{errors.description?.message}</StyledError>
      <StyledLabel>Pages</StyledLabel>
      <StyledInput {...register("pages")} />
      <StyledError>{errors.pages?.message}</StyledError>
    </StyledForm>
  );
};

export default Form;
