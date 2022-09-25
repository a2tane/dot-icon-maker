import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ColorPickerDialog } from ".";

export default {
  component: ColorPickerDialog,
} as ComponentMeta<typeof ColorPickerDialog>;

const Temlate: ComponentStory<typeof ColorPickerDialog> = () => (
  <ColorPickerDialog></ColorPickerDialog>
);

export const Default = Temlate.bind({});
