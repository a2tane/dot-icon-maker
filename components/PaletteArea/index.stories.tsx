import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PaletteArea } from ".";

export default {
  component: PaletteArea,
} as ComponentMeta<typeof PaletteArea>;

const Temlate: ComponentStory<typeof PaletteArea> = () => (
  <PaletteArea></PaletteArea>
);

export const Default = Temlate.bind({});
