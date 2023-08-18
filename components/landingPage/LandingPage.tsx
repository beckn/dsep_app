import { Box, Flex, Text } from "@chakra-ui/react";
import Styles from "./LandingPage.module.css";
import { useLanguage } from "../../hooks/useLanguage";
import beckenFooter from "../../public/images/beckenFooterLogo.svg";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
const LandingPage:React.FC = () => {
  const { t } = useLanguage();
  return (
    <Box className={Styles.main_container}>
      <Flex className={Styles.flex_container}>
        <Box className={Styles.heading}>{t.homeHeading}</Box>
        <Box className={Styles.span_text}>{t.headingSpan}</Box>
        <Box className={Styles.para_Text}>
          <Text>{t.homeText}</Text>
        </Box>
        <Box className={Styles.input_group}>
          <input
            className={Styles.input_box}
            type="text"
            name="search_input"
            placeholder="Search for courses"
          />
          <button className={Styles.search_button}>
            <FaSearch />
          </button>
        </Box>
        <Flex className={Styles.footer_container}>
          <Text className={Styles.footerText}>{t.footerText}</Text>
          <Image
            src={beckenFooter}
            alt="footerLogo"
            width={"39px"}
            height={"13px"}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default LandingPage;
