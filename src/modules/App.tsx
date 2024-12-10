import Text from "@/ui/atoms/Text";
import { Header1, Header2 } from "@/ui/atoms/Headers";
import { Page } from "@/ui/atoms/Page";
import { Container } from "@/ui/atoms/Container";
import { FC } from "react";
import { Button } from "@/ui/molecules/Button";

export const App: FC = () => {
  return (
    <Page>
      <Header1 colors={{ text: ["teal-400", "black"] }}>Hello World</Header1>
      <Header2 colors={{ text: ["teal-400", "black"] }}>Hello World</Header2>
      <Text colors={{ text: ["teal-400", "purple-700"] }}>Hello World</Text>
      <Container
        className="p-md"
        colors={{
          background: ["indigo-50", "indigo-200"],
          // border: ["black", "red-400"],
        }}
        borderRadius="2xl"
      >
        <Text colors={{ text: "gray-700" }}>Hello World</Text>
      </Container>
      <Button
        className="mt-md"
        colors={{
          border: ["indigo-200", "purple-700"],
        }}
      >
        <Text colors={{ text: ["teal-400", "purple-700"] }}>Hello World</Text>
      </Button>
    </Page>
  );
};
