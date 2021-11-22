import { useTranslation } from "react-i18next";
import Button from "@tour-radar/design-system/components/Button";
import { Wrapper } from "./style";

// TODO: Make it generic by receiving the languages and labels as props
const SwitchLanguage = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  return (
    <Wrapper>
      <Button onClick={() => changeLanguage("en")}>EN</Button>
      <Button onClick={() => changeLanguage("pt")}>PT</Button>
    </Wrapper>
  );
};

export default SwitchLanguage;
