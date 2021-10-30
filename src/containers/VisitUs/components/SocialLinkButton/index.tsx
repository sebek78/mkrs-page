import styled from "styled-components";
import SocialIcon from "../../../../components/SocialIcon";

type SociallinkButtonProps = {
  iconSrc: string;
  linkColor: string;
  text: string;
  url: string;
};

const SocialLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 24px;
  font-size: ${({ theme }) => theme.typography.h3.mobile.fontSize};
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.h3.tablet.fontSize};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.typography.h3.desktop.fontSize};
  }
`;

const StyledText = styled.a`
  color: ${({ color }) => color};
  padding: 16px 12px 16px 16px;
  text-decoration: none;
`;

const SocialLinkButton = ({
  iconSrc,
  linkColor,
  url,
  text,
}: SociallinkButtonProps) => {
  return (
    <SocialLinkWrapper>
      <StyledText href={url} color={linkColor}>
        {text}
      </StyledText>
      <SocialIcon src={iconSrc} url={url} />
    </SocialLinkWrapper>
  );
};

export default SocialLinkButton;
