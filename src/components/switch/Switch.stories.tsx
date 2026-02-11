import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md"] },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
  args: { checked: false },
};

export const Checked: Story = {
  args: { checked: true },
};

export const Interactive: Story = {
  render: function Render() {
    const [checked, setChecked] = useState(false);
    return (
      <label className="flex cursor-pointer items-center gap-2">
        <Switch
          checked={checked}
          onClick={() => setChecked((c) => !c)}
        />
        <span className="font-sans text-sm text-text">
          {checked ? "On" : "Off"}
        </span>
      </label>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Switch size="sm" checked />
      <Switch size="md" checked />
    </div>
  ),
};
