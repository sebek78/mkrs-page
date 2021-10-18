import styled from "styled-components";
import fbIcon from "../../assets/f_logo_RGB-Blue_58.png";
import igIcon from "../../assets/Instagram_Glyph_Gradient_RGB.png";
import SocialLinkButton from "./components/SocialLinkButton";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const VisitUs = () => {
  return (
    <StyledDiv>
      <SocialLinkButton
        iconSrc={fbIcon}
        linkColor="#1877f2"
        text="Znajdź nas na"
        url="https://facebook.com"
      />
      <SocialLinkButton
        iconSrc={igIcon}
        linkColor="#e1306c"
        text="Zobacz więcej na"
        url="https://instagram.com"
      />
    </StyledDiv>
  );
};

export default VisitUs;
