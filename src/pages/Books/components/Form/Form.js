import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "antd";
import {
  StyledForm,
  StyledError,
  StyledLabel,
  StyledTextarea,
  StyledInput,
} from "./styled";

const schema = yup.object({
  title: yup.string().required("This field is required"),
  description: yup.string().required("This field is required"),
  pageCount: yup
    .number()
    .typeError("Value must be a positive number")
    .positive("Value must be a positive number")
    .integer("Value must be an integer")
    .required("This field is required"),
});

export const Form = ({ mode, data, name, onSave }) => {
  const { Title } = Typography;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
    <>
      {mode === "create" && <Title level={3}>Create Book</Title>}
      {mode === "update" && <Title level={3}>Update Book</Title>}
      <StyledForm onSubmit={handleSubmit(onSubmit)} id={name}>
        <StyledLabel>Title</StyledLabel>
        <Controller
          render={({ field }) => <StyledInput {...field} />}
          name="title"
          control={control}
          defaultValue={data?.title || ""}
        />
        {errors.title && <StyledError>{errors.title.message}</StyledError>}
        <StyledLabel>Description</StyledLabel>
        <Controller
          render={({ field }) => <StyledTextarea {...field} />}
          name="description"
          control={control}
          defaultValue={data?.description || ""}
        />
        {errors.description && (
          <StyledError>{errors.description.message}</StyledError>
        )}

        <StyledLabel>Pages</StyledLabel>
        <Controller
          render={({ field }) => <StyledInput {...field} />}
          name="pageCount"
          control={control}
          defaultValue={data?.pageCount || ""}
        />
        {errors.pageCount && (
          <StyledError>{errors.pageCount.message}</StyledError>
        )}
      </StyledForm>
    </>
  );
};
Form.defaultProps = {
  onSave: () => {},
};

Form.propTypes = {
  mode: PropTypes.string.isRequired,
  data: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    pageCount: PropTypes.number,
    date: PropTypes.instanceOf(Date),
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
  }),
  name: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};
