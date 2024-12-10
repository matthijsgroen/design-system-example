import Text from "@/ui/atoms/Text";
import { Header1, Header2 } from "@/ui/atoms/Headers";
import { Page } from "@/ui/atoms/Page";
import { Container } from "@/ui/atoms/Container";
import { FC, PropsWithChildren } from "react";
import { Button } from "@/ui/molecules/Button";

const Paragraph: FC<PropsWithChildren> = ({ children }) => (
  <Text colors={{ text: ["purple-700", "gray-800"] }} as="p" className="my-sm">
    {children}
  </Text>
);

const HighlightArea: FC<PropsWithChildren> = ({ children }) => (
  <Container
    className="p-lg rounded-xl my-lg border-2 md:mx-md max-w-2xl"
    colors={{
      background: ["indigo-50", "indigo-100"],
      border: "gray-700",
    }}
  >
    <Text
      colors={{ text: "gray-700" }}
      className="font-bold tracking-wider"
      as="p"
    >
      {children}
    </Text>
  </Container>
);

export const App: FC = () => {
  return (
    <Page>
      <Header1 colors={{ text: ["teal-400", "black"] }}>Hello World</Header1>
      <Header2 colors={{ text: ["teal-400", "black"] }}>Hello World</Header2>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        condimentum ultrices tempus. Aliquam eleifend magna at eros mattis
        imperdiet. Nullam consequat imperdiet luctus. Morbi condimentum in diam
        ut viverra. Nam ut ipsum ut elit blandit scelerisque vel id dolor. Sed
        vestibulum bibendum arcu eget eleifend. Ut semper leo eu blandit tempus.
        Sed est dui, scelerisque vitae ligula ac, suscipit posuere quam. Vivamus
        venenatis nibh quis mauris egestas, vel ultrices urna consectetur.
        Integer aliquet dolor nisi, nec commodo erat tempus hendrerit.
      </Paragraph>
      <Paragraph>
        Nullam nec blandit massa. Morbi sit amet fermentum nunc, eget facilisis
        tortor. Maecenas tempor tempus eleifend. Proin eget convallis dui, nec
        ultrices eros. Nulla non tincidunt velit. In erat metus, vulputate eu
        posuere a, commodo sed justo. Etiam congue lorem pretium leo ultricies,
        interdum tincidunt magna rutrum. Morbi finibus ligula non nunc tempor
        finibus. Suspendisse nec efficitur mi. Nam hendrerit nisi placerat ex
        consequat ultrices. Aenean scelerisque leo non justo fermentum
        tincidunt. Morbi tristique arcu ligula, in bibendum justo aliquam in.
        Fusce eget turpis consequat, ultrices magna ut, pharetra nisi. Nulla
        purus lectus, efficitur nec mauris ut, hendrerit semper mauris. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos.
      </Paragraph>
      <Paragraph>
        Maecenas vel imperdiet nisi. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Maecenas luctus ex
        pulvinar sapien malesuada, vel placerat nisl molestie. Integer venenatis
        sit amet mauris nec blandit. Nulla facilisi. Curabitur tortor velit,
        malesuada ut egestas vitae, varius sit amet massa. Mauris laoreet sit
        amet tortor molestie pellentesque. Maecenas in ante neque. Aliquam
        commodo ligula lacus, in consectetur justo tempor vel. Duis nec
        efficitur erat, ac blandit purus. Donec porta lorem cursus metus
        accumsan semper. Nulla fermentum ultrices orci et sodales.
      </Paragraph>
      <HighlightArea>
        Dit is een uitgelicht kader vol met leuke feitjes. Wist je dat de aarde
        rond is? En dat de zon een ster is? En dat de maan geen licht geeft,
        maar het licht van de zon weerkaatst? En dat de zon en de maan even
        groot lijken, maar dat de zon eigenlijk veel groter is?
      </HighlightArea>

      <Button
        className="mt-md border-2 rounded-full px-4"
        colors={{
          border: ["indigo-200", "purple-700"],
        }}
      >
        <Text colors={{ text: ["teal-400", "purple-700"] }} className="text-sm">
          Hello World
        </Text>
      </Button>
    </Page>
  );
};
