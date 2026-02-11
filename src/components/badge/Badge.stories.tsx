import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "success", "warning", "error"],
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Badge" },
};

export const Primary: Story = {
  args: { children: "Primary", variant: "primary" },
};

export const Success: Story = {
  args: { children: "Success", variant: "success" },
};

export const Warning: Story = {
  args: { children: "Warning", variant: "warning" },
};

export const Error: Story = {
  args: { children: "Error", variant: "error" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
    </div>
  ),
};
