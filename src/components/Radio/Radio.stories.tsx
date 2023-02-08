import React, { useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { useAddonState } from '@storybook/api';
import Radio, { RadioProps } from ".";
import ThemeType from "../types/ThemeType";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<RadioProps> = (args: RadioProps) => <Radio {...args} />;

// Reuse that template for creating different stories
export const BasicRadio = Template.bind({});
BasicRadio.args = {
  label: "Article description",
};

export const RadioWithTooltip = Template.bind({});
RadioWithTooltip.args = {
  label: "Article description",
};

export const RadioWithError = Template.bind({});
RadioWithError.args = {
  label: "Danger theme",
  theme: ThemeType.danger
};
