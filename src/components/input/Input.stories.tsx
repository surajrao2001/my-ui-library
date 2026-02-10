import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    error: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Enter text..." },
};

export const WithValue: Story = {
  args: { placeholder: "Email", defaultValue: "user@example.com" },
};

export const Error: Story = {
  args: {
    placeholder: "Invalid input",
    error: true,
    defaultValue: "wrong",
  },
};

export const FullWidth: Story = {
  args: { placeholder: "Full width input", fullWidth: true },
};

export const Disabled: Story = {
  args: { placeholder: "Disabled", disabled: true },
};
