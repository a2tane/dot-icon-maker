import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ColorCell } from ".";

export default {
  component: ColorCell,
} as ComponentMeta<typeof ColorCell>;

const Temlate: ComponentStory<typeof ColorCell> = () => <ColorCell></ColorCell>;

export const Default = Temlate.bind({});
