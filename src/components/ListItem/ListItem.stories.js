import { ListItem } from ".";

export default {
  title: "Components/ListItem",
  component: ListItem,
  argTypes: {
    state: {
      options: ["enabled", "selected", "focus", "disabled"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "List item",
    rightSlot: false,
    leftSlot: false,
    divider: false,
    secondText: false,
    dense: true,
    disGutters: true,
    state: "enabled",
    className: {},
  },
};
