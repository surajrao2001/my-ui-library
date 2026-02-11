import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    error: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Enter your message..." },
};

export const WithValue: Story = {
  args: {
    defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

export const Error: Story = {
  args: { placeholder: "Invalid input", error: true },
};

export const FullWidth: Story = {
  args: { placeholder: "Full width textarea", fullWidth: true },
};
