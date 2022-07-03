import photo from "../../assets/photo.jpeg";
import { StyledWrapper, StyledImg, StyledText } from "./styled";

export default function HomePage() {
  return (
    <StyledWrapper>
      <StyledImg src={photo} alt="photo" />
      <StyledText>
        So, my name's Iryna and I'm 25 years old. I’m passionate about reading.
        Although I have several hobbies, such as watching movies and yoga,
        reading books is what resonates well with me. And this is my blog!
      </StyledText>
    </StyledWrapper>
  );
}
