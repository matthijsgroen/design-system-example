import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "./Container";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/Container",
  component: Container,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    className: "p-2 border-2 rounded-lg",
    colors: {
      border: "black",
      background: "gray-200",
    },

    children: "Hello World",
  },
};

export const GradientBorder: Story = {
  args: {
    className: "p-2 border-2 rounded-lg",
    colors: {
      border: ["black", "blue-500"],
      background: "gray-200",
    },

    children: "Hello World",
  },
};

export const GradientThickBorder: Story = {
  args: {
    className: "p-2 border-4 rounded-lg",
    colors: {
      border: ["black", "blue-500"],
      background: "gray-200",
    },

    children: "Hello World",
  },
};
