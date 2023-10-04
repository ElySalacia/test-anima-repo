import { SizeMediumWrapper } from ".";

export default {
  title: "Components/SizeMediumWrapper",
  component: SizeMediumWrapper,
  argTypes: {
    size: {
      options: ["large", "inherit", "medium", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    className: {},
  },
};
