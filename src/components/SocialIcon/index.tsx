import { memo } from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  display: block;
`;

type SocialIconProps = {
  src: string;
  url: string;
};

const SocialIcon = memo(({ src, url }: SocialIconProps) => {
  return (
    <a href={url}>
      <StyledImg src={src} />
    </a>
  );
});

export default SocialIcon;
