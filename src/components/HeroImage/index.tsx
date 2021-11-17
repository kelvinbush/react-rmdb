import React from "react";

import { Content, Text, Wrapper } from "./HeroImage.styles";

type Props = {
  image: string;
  title: string;
  text: string;
};

const HeroImage: React.FC<Props> = ({ image, title, text }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

export default HeroImage;
