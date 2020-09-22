import React from "react";
import NotificationMessage from "./NotificationMessage";

// This default export determines where you story goes in the story list
export default {
  title: "Components/NotificationMessage",
  component: NotificationMessage,
  argTypes: { onDelete: { action: "delete button clicked" } },
};

const Template = (args) => (
  <NotificationMessage {...args}>
    <p>
      Ex laborum ex elit occaecat eiusmod nulla amet aute sit laborum. Eu in
      adipisicing voluptate do minim ex ullamco. Id irure Lorem aliquip veniam
      ullamco laboris Lorem non ipsum ad veniam. Adipisicing dolore pariatur
      quis est minim est.
    </p>
  </NotificationMessage>
);

export const PrimaryNotification = Template.bind({});

PrimaryNotification.args = {
  isPrimary: true,
};

export const LinkNotification = Template.bind({});

LinkNotification.args = {
  isLink: true,
};

export const InfoNotification = Template.bind({});

InfoNotification.args = {
  isInfo: true,
};

export const SuccessNotification = Template.bind({});

SuccessNotification.args = {
  isSuccess: true,
};

export const WarningNotification = Template.bind({});

WarningNotification.args = {
  isWarning: true,
};

export const DangerNotification = Template.bind({});

DangerNotification.args = {
  isDanger: true,
};

export const PrimaryLightNotification = Template.bind({});

PrimaryLightNotification.args = {
  isPrimary: true,
  isLight: true,
};

export const LinkLightNotification = Template.bind({});

LinkLightNotification.args = {
  isLink: true,
  isLight: true,
};

export const InfoLightNotification = Template.bind({});

InfoLightNotification.args = {
  isInfo: true,
  isLight: true,
};

export const SuccessLightNotification = Template.bind({});

SuccessLightNotification.args = {
  isSuccess: true,
  isLight: true,
};

export const WarningLightNotification = Template.bind({});

WarningLightNotification.args = {
  isWarning: true,
  isLight: true,
};

export const DangerLightNotification = Template.bind({});

DangerLightNotification.args = {
  isDanger: true,
  isLight: true,
};
