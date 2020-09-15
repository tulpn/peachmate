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
  /* the args you need here will depend on your component */
  isPrimary: true,
};

export const LinkButton = Template.bind({});

LinkButton.args = {
  /* the args you need here will depend on your component */
  isLink: true,
};


export const InfoButton = Template.bind({});

InfoButton.args = {
  /* the args you need here will depend on your component */
  isInfo: true,
};


export const SuccessButton = Template.bind({});

SuccessButton.args = {
  /* the args you need here will depend on your component */
  isSuccess: true,
};

export const WarningButton = Template.bind({});

WarningButton.args = {
  /* the args you need here will depend on your component */
  isWarning: true,
};


export const DangerButton = Template.bind({});

DangerButton.args = {
  /* the args you need here will depend on your component */
  isDanger: true,
};


export const WhiteButton = Template.bind({});

WhiteButton.args = {
  /* the args you need here will depend on your component */
  isWhite: true,
};


export const LightButton = Template.bind({});

LightButton.args = {
  /* the args you need here will depend on your component */
  isLight: true,
};


export const DarkButton = Template.bind({});

DarkButton.args = {
  /* the args you need here will depend on your component */
  isDark: true,
};

export const BlackButton = Template.bind({});

BlackButton.args = {
  /* the args you need here will depend on your component */
  isBlack: true,
};

export const TextButton = Template.bind({});

TextButton.args = {
  /* the args you need here will depend on your component */
  isText: true,
};



export const SmallButton = Template.bind({});

SmallButton.args = {
  /* the args you need here will depend on your component */
  isPrimary: true,
  isSmall: true
};



export const MediumButton = Template.bind({});

MediumButton.args = {
  /* the args you need here will depend on your component */
  isPrimary: true,
  isMedium: true
};

export const LargeButton = Template.bind({});

LargeButton.args = {
  /* the args you need here will depend on your component */
  isPrimary: true,
  isLarge: true
};


export const FullButton = Template.bind({});

FullButton.args = {
  /* the args you need here will depend on your component */
  isPrimary: true,
  isFullWidth: true
};



export const OutlinedButton = Template.bind({});

OutlinedButton.args = {
  /* the args you need here will depend on your component */
  isPrimary: true,
  isOutlined: true
};


export const InvertedButton = Template.bind({});

InvertedButton.args = {
  /* the args you need here will depend on your component */
  isPrimary: true,
  isInverted: true
};


export const RoundedButton = Template.bind({});

RoundedButton.args = {
  /* the args you need here will depend on your component */
  isPrimary: true,
  isRounded: true
};



export const DisabledButton = Template.bind({});

DisabledButton.args = {
  /* the args you need here will depend on your component */
  isPrimary: true,
  isDisabled: true
};
