import { Spinner, Text } from "@chakra-ui/react";
import React from "react";

interface LoaderPropsModel {
  loadingText?: string;
  subLoadingText?: string;
  stylesForLoadingText?: React.CSSProperties;
}

const Loader: React.FC<LoaderPropsModel> = (props) => {
  return (
    <div className="flex flex-col justify-center items-center h-[60vh]">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="#3AA5E1"
        size="xl"
      />
      {props.loadingText && (
        <Text
          style={props.stylesForLoadingText}
          marginTop={"21px"}
          textAlign="center"  
        >
          {props.loadingText}
        </Text>
      )}
      {props.subLoadingText && (
        <Text textAlign="center" color="#7C7C7C">{props.subLoadingText}</Text>
      )}
    </div>
  );
};

export default React.memo(Loader);
