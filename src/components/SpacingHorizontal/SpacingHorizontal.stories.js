import { SpacingHorizontal } from ".";

export default {
  title: "Components/SpacingHorizontal",
  component: SpacingHorizontal,
  argTypes: {
    spacing: {
      options: ["seven", "two", "three", "four", "one", "five", "eight", "six"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    spacing: "seven",
    visibility: true,
    className: {},
  },
};
