import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    error: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <option value="">Select an option</option>
        <option value="a">Option A</option>
        <option value="b">Option B</option>
        <option value="c">Option C</option>
      </>
    ),
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "b",
    children: (
      <>
        <option value="a">Option A</option>
        <option value="b">Option B</option>
        <option value="c">Option C</option>
      </>
    ),
  },
};

export const Error: Story = {
  args: {
    error: true,
    children: (
      <>
        <option value="">Invalid selection</option>
        <option value="a">Option A</option>
      </>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: (
      <>
        <option value="">Select...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
      </>
    ),
  },
};
