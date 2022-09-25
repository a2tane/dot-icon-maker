import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SizeArea } from ".";

export default {
  component: SizeArea,
} as ComponentMeta<typeof SizeArea>;

const Temlate: ComponentStory<typeof SizeArea> = () => <SizeArea></SizeArea>;

export const Default = Temlate.bind({});
