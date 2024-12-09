import Text from "@/ui/atoms/Text";
import { Header1, Header2 } from "@/ui/atoms/Headers";
import { Page } from "@/ui/atoms/Page";
import { Container } from "@/ui/atoms/Container";
import { FC } from "react";

export const App: FC = () => {
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
