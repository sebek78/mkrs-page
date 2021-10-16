import SectionCardList from "../Section/components/SectionCardList";
import SectionContentWrapper from "../Section/components/SectionContentWrapper";
import SectionDescription from "../Section/components/SectionDescription";
import { SectionCardType } from "../Section/components/Card";

const cards: SectionCardType[] = [
  {
    title: "Czyszcimy",
    text: "Skutecznie usuwamy zabrudzenia.",
  },
  {
    title: "Impregnujemy",
    text: "Zwiększamy odporność na zabrudzenia.",
  },
  {
    title: "Naprawiamy",
    text: "Usuwamy każdą usterkę.",
  },
  {
    title: "Barwimy",
    text: "Przywracamy orginalne kolory",
  },
];

const Features = () => {
  return (
    <SectionContentWrapper>
      <SectionDescription
        title="Nasze doświadzenie"
        text="
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna 
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
      ullamco laboris nisi ut aliquip ex ea commodo consequat.
      "
      />
      <SectionCardList cards={cards}></SectionCardList>
    </SectionContentWrapper>
  );
};

export default Features;
