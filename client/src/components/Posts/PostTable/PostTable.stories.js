import React from "react";
import PostTable from "./PostTable";

export default {
  title: "Components/Posts/PostTable",
  component: PostTable,
};

const Template = (args) => <PostTable {...args} />;

export const PostTableEmpty = Template.bind({});

PostTableEmpty.args = {
  items: [],
  argTypes: {
    onDeleteItem: { action: "Delete clicked" },
    onChancelItem: { action: "Cancel clicked" },
    onEditItem: { action: "Edit clicked" },
    onManuallyShareItem: { action: "Manually Share Now" },
  },
};

export const PostTableItems = Template.bind({});

PostTableItems.args = {
  items: [
    {
      _id: "abcdef1123",
      message: "Commodo laborum elit magna in cillum proident.",
      when: new Date(2020, 2, 3, 13, 11, 17),
      status: "scheduled",
      network: "linkedin",
    },
    {
      _id: "321654defca",
      message:
        "Minim aliqua excepteur commodo elit dolore in. Proident sint ut cillum laborum eiusmod ea enim quis sunt deserunt magna.",
      when: new Date(2021, 11, 17, 5, 12, 30),
      status: "posted",
      network: "linkedin",
    },
    {
      _id: "32165ade123",
      message:
        "Quis commodo officia cupidatat non velit veniam tempor deserunt.",
      when: new Date(2021, 5, 13, 1, 10, 8),
      status: "cancelled",
      network: "linkedin",
    },
    {
      _id: "3216531232",
      message: "Adipisicing aliquip est commodo officia anim.",
      when: new Date(2021, 12, 11, 3, 11, 10),
      status: "deleted",
      network: "linkedin",
    },
  ],
};

export const PostTableLoading = Template.bind({});

PostTableLoading.args = {
  items: [],
  loading: true,
};
