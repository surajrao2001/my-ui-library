import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "elevated", "outlined"],
    },
    hoverable: { control: "boolean" },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h3 className="font-heading text-lg font-semibold text-text">Card Title</h3>
        <p className="mt-2 text-sm text-text-muted">
          Card content with default padding and border.
        </p>
      </>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: (
      <>
        <h3 className="font-heading text-lg font-semibold text-text">
          Elevated Card
        </h3>
        <p className="mt-2 text-sm text-text-muted">Has shadow and hover lift.</p>
      </>
    ),
  },
};

export const Hoverable: Story = {
  args: {
    variant: "elevated",
    hoverable: true,
    children: (
      <>
        <h3 className="font-heading text-lg font-semibold text-text">
          Hover Me
        </h3>
        <p className="mt-2 text-sm text-text-muted">
          Lifts on hover with transition.
        </p>
      </>
    ),
  },
};

export const PaddingVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card padding="sm" className="min-w-[120px]">
        Small padding
      </Card>
      <Card padding="md" className="min-w-[120px]">
        Medium padding
      </Card>
      <Card padding="lg" className="min-w-[120px]">
        Large padding
      </Card>
    </div>
  ),
};
