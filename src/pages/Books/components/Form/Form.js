import { useForm } from "react-hook-form";
// import React, { useEffect } from "react";
import {
  StyledForm,
  StyledError,
  StyledLabel,
  StyledTextarea,
  StyledInput,
} from "./styled";

const Form = ({ data, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: data,
  });

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} id="form">
      <StyledLabel>Title</StyledLabel>
      <StyledInput
        {...register("title", { required: true, pattern: /^[A-Za-z]+$/i })}
      />
      {errors?.title?.type === "pattern" && (
        <StyledError>Alphabetical characters only</StyledError>
      )}
      {errors.title?.type === "required" && (
        <StyledError>Title is required</StyledError>
      )}
      <StyledLabel>Description</StyledLabel>
      <StyledTextarea
        {...register("description", {
          required: true,
          pattern: /^[A-Za-z]+$/i,
        })}
      />
      {errors.description?.type === "required" && (
        <StyledError>Description is required</StyledError>
      )}
      {errors?.description?.type === "pattern" && (
        <StyledError>Alphabetical characters only</StyledError>
      )}
    </StyledForm>
  );
};

export default Form;
