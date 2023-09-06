import React from "react";
import { Text, Box, Image, Flex, Divider } from "@chakra-ui/react";
import ProductPrice from "../UI/ProductPrice";
import { useLanguage } from "../../hooks/useLanguage";

export interface ItemDetailProps {
  title: string;
  provider: string;
  quantity: number;
  price: string | number;
}

const ItemDetails: React.FC<ItemDetailProps> = (props) => {
  const {t}=useLanguage();
  return (
    <>
      <Box pb={"10px"}>
        <Flex pb={"5px"} justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={"15px"}>{props.title}</Text>{" "}
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text fontSize={"12px"}>{t.soldBy}{props.provider}</Text>
          <ProductPrice price={props.price as number} />
        </Flex>
      </Box>
    </>
  );
};

export default ItemDetails;
