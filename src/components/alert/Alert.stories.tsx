import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error", "warning", "info"],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    variant: "success",
    children: "Your changes have been saved successfully.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Something went wrong. Please try again.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Your session will expire in 5 minutes.",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: "New features are available. Check the release notes.",
  },
};
