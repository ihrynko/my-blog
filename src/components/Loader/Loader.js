import { Oval } from "react-loader-spinner";
import { LoaderWrapper } from "./styled";

export default function Loader() {
  return (
    <LoaderWrapper>
      <Oval color="#00BFFF" height={100} width={110} />
    </LoaderWrapper>
  );
}
