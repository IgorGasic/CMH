import React, { useState, useEffect } from "react";
import { data } from "../../../data/FourthSectionData";
import {
  Section,
  Title,
  H2,
  TeamContnainer,
  Img,
  ArticleH4,
  Text,
  Person,
  UnderLine,
} from "./FourthSectionStyled";

const FourthSection = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <>
      <Section>
        <Title>
          <H2>Naš tim</H2>
          <UnderLine />
        </Title>
        <TeamContnainer>
          {data.map((item, itemIndex) => {
            const { id, name, img, text, text1, text2, text3, job } = item;
            let position = `NextPerson`;
            if (itemIndex === index) {
              position = "ActivePerson";
            }
            if (index === 0 && itemIndex === people.length - 1) {
              position = "LastPerson";
            }

            return (
              <Person className={position} key={id}>
                <Img src={img} />
                <ArticleH4>{name}</ArticleH4>
                <Text primary size>
                  {job}
                </Text>
                <Text bold size>
                  {text}
                </Text>
                <Text>{text1}</Text>
                <Text>{text2}</Text>
                <Text>{text3}</Text>
              </Person>
            );
          })}
        </TeamContnainer>
      </Section>
    </>
  );
};

export default FourthSection;
