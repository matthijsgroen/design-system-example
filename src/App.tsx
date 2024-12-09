import React from "react";
import Text from "./atoms/Text";
import { Header1, Header2 } from "./atoms/Headers";
import { Page } from "./atoms/Page";
import { Container } from "./atoms/Container";

export const App = () => {
  return (
    <Page>
      <Header1 colors={{ text: ["teal-400", "black"] }}>Hello World</Header1>
      <Header2 colors={{ text: ["teal-400", "black"] }}>Hello World</Header2>
      <Text colors={{ text: ["teal-400", "purple-700"] }}>Hello World</Text>
      <Container className="p-md" colors={{ background: "purple-700" }}>
        <Text colors={{ text: ["teal-400", "purple-700"] }}>Hello World</Text>
      </Container>
    </Page>
  );
};
