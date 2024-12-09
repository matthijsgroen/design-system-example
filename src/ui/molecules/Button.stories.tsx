import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";
import Text from "@/ui/atoms/Text";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Molecules/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    colors: {
      background: "gray-200",
    },
    children: "Hello World",
  },
};

export const Gradient: Story = {
  args: {
    colors: {
      background: ["indigo-200", "purple-700"],
    },
    children: <Text colors={{ text: "white" }}>Hello World</Text>,
  },
};

export const GradientOutline: Story = {
  args: {
    colors: {
      border: ["indigo-200", "purple-700"],
    },
    children: <Text colors={{ text: "black" }}>Hello World</Text>,
  },
};

export const GradientAllTheThings: Story = {
  args: {
    colors: {
      border: ["indigo-200", "purple-700"],
      background: ["indigo-50", "purple-100"],
    },
    children: (
      <Text colors={{ text: ["indigo-200", "purple-700"] }}>Hello World</Text>
    ),
  },
};
