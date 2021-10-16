import SectionContentWrapper from "../Section/components/SectionContentWrapper";
import SectionDescription from "../Section/components/SectionDescription";
import SectionSingleImage from "../Section/components/SectionSingleImage";

const Introduction = () => {
  return (
    <SectionContentWrapper>
      <SectionDescription
        title="Odnawiamy i przywracamy dawny blask."
        text="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        "
      />
      <SectionSingleImage
        src="https://via.placeholder.com/640x480"
        alt="Tools"
      />
    </SectionContentWrapper>
  );
};

export default Introduction;
