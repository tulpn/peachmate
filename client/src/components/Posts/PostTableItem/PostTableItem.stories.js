import React from "react";
import PostTableItem from "./PostTableItem";

// This default export determines where you story goes in the story list
export default {
  title: "Components/Posts/PostTableItem",
  component: PostTableItem,
  decorators: [
    (Story) => (
      <table className="table  is-striped is-hoverable is-fullwidth is-bordered is-narrow">
        <tbody>
          <Story />
        </tbody>
      </table>
    ),
  ],
  argTypes: {
    onDelete: { action: "Delete clicked" },
    onEdit: { action: "Edit clicked" },
    onCancel: { action: "Cancel clicked" },
    onManuallyShare: { action: "Manually Share Now" },
  },
};

const Template = (args) => <PostTableItem {...args} />;

export const PostTableItemPosted = Template.bind({});

PostTableItemPosted.args = {
  networks: ["linkedIn"],
  message: "Cupidatat elit minim dolore Lorem est sit.",
  status: "posted",
  when: new Date(2020, 2, 3, 13, 11, 17),
};

export const PostTableItemScheduled = Template.bind({});

PostTableItemScheduled.args = {
   networks: ["linkedIn"],
  message: "Deserunt et do mollit ad et aliqua ipsum adipisicing dolor.",
  status: "scheduled",
  when: new Date(2020, 2, 3, 13, 11, 17),
};

export const PostTableItemDraft = Template.bind({});

PostTableItemDraft.args = {
   networks: ["linkedIn", 'twitter'],
  message: "Aute occaecat aliquip do pariatur voluptate reprehenderit duis.",
  status: "draft",
  when: new Date(2020, 10, 9, 13, 11, 17),
};

export const PostTableItemCancelled = Template.bind({});

PostTableItemCancelled.args = {
   networks: ["linkedIn"],
  message:
    "Do proident aute aliquip officia officia laboris aliquip anim officia et.",
  status: "cancelled",
  when: new Date(2020, 10, 9, 13, 11, 17),
};
