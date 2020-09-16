import React from 'react';
import Button from "./Button"

// This default export determines where you story goes in the story list
export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} >Sample Button</Button>;

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  isPrimary: true
};

export const LinkButton = Template.bind({});

LinkButton.args = {
  isLink: true
};


export const InfoButton = Template.bind({});

InfoButton.args = {
  isInfo: true
};


export const SuccessButton = Template.bind({});

SuccessButton.args = {
  isSuccess: true
};

export const WarningButton = Template.bind({});

WarningButton.args = {
  isWarning: true
};


export const DangerButton = Template.bind({});

DangerButton.args = {
  isDanger: true
};


export const WhiteButton = Template.bind({});

WhiteButton.args = {
  isWhite: true
};


export const LightButton = Template.bind({});

LightButton.args = {
  isLight: true
};


export const DarkButton = Template.bind({});

DarkButton.args = {
  isDark: true
};

export const BlackButton = Template.bind({});

BlackButton.args = {
  isBlack: true
};

export const TextButton = Template.bind({});

TextButton.args = {
  isText: true
};


export const SmallButton = Template.bind({});

SmallButton.args = {
  isPrimary: true,
  isSmall: true
};


export const MediumButton = Template.bind({});

MediumButton.args = {
  isPrimary: true,
  isMedium: true
};

export const LargeButton = Template.bind({});

LargeButton.args = {
  isPrimary: true,
  isLarge: true
};


export const FullButton = Template.bind({});

FullButton.args = {
  isPrimary: true,
  isFullWidth: true
};


export const OutlinedButton = Template.bind({});

OutlinedButton.args = {
  isPrimary: true,
  isOutlined: true
};


export const InvertedButton = Template.bind({});

InvertedButton.args = {
  isPrimary: true,
  isInverted: true
};


export const RoundedButton = Template.bind({});

RoundedButton.args = {
  isPrimary: true,
  isRounded: true
};


export const DisabledButton = Template.bind({});

DisabledButton.args = {
  isPrimary: true,
  isDisabled: true
};
