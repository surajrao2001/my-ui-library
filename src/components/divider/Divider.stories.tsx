import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./Divider";

const meta = {
  title: "Components/Divider",
  component: Divider,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    orientation: { control: "select", options: ["horizontal", "vertical"] },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: { orientation: "horizontal" },
  render: (args) => (
    <div className="w-64">
      <p className="font-sans text-sm text-text">Content above</p>
      <Divider {...args} className="my-4" />
      <p className="font-sans text-sm text-text">Content below</p>
    </div>
  ),
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  render: (args) => (
    <div className="flex h-12 items-center gap-4">
      <span className="font-sans text-sm">Item 1</span>
      <Divider {...args} />
      <span className="font-sans text-sm">Item 2</span>
      <Divider {...args} />
      <span className="font-sans text-sm">Item 3</span>
    </div>
  ),
};
