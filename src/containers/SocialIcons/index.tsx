import styled from "styled-components";
import fbIcon from "../../assets/f_logo_RGB-Blue_58.png";
import igIcon from "../../assets/Instagram_Glyph_Gradient_RGB.png";
import SocialIcon from "../../components/SocialIcon";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const SocialIcons = () => {
  return (
    <StyledDiv>
      <SocialIcon src={fbIcon} url="https://facebook.com" />
      <SocialIcon src={igIcon} url="https://instagram.com" />
    </StyledDiv>
  );
};

export default SocialIcons;
