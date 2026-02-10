import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md"] },
    error: { control: "boolean" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };

export const Checked: Story = { args: { defaultChecked: true } };

export const WithLabel: Story = {
  render: () => (
    <label className="flex cursor-pointer items-center gap-2">
      <Checkbox />
      <span className="font-sans text-sm text-text">Accept terms</span>
    </label>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <label className="flex cursor-pointer items-center gap-2">
        <Checkbox size="sm" />
        <span className="text-sm">Small</span>
      </label>
      <label className="flex cursor-pointer items-center gap-2">
        <Checkbox size="md" />
        <span className="text-sm">Medium</span>
      </label>
    </div>
  ),
};

export const Error: Story = { args: { error: true } };
