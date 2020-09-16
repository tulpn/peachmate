import React from "react";
import PostTableItem from "./PostTableItem";

// This default export determines where you story goes in the story list
export default {
  title: "Components/Posts/PostTableItem",
  component: PostTableItem,
  decorators: [(Story) => <table className="table  is-striped is-hoverable is-fullwidth is-bordered is-narrow"><tbody><Story /></tbody></table>]
};

const Template = (args) => <PostTableItem {...args} />;

export const PostTableItemPosted = Template.bind({});

PostTableItemPosted.args = {
    network: "linkedin",
    message: "Cupidatat elit minim dolore Lorem est sit.",
    status: "posted",
    when: new Date(2020, 2, 3, 13, 11, 17)
};

export const PostTableItemScheduled = Template.bind({});

PostTableItemScheduled.args = {
    network: "linkedin",
    message: "Deserunt et do mollit ad et aliqua ipsum adipisicing dolor.",
    status: "scheduled",
    when: new Date(2020, 2, 3, 13, 11, 17)
};


export const PostTableItemDeleted = Template.bind({});

PostTableItemDeleted.args = {
    network: "linkedin",
    message: "Aute occaecat aliquip do pariatur voluptate reprehenderit duis.",
    status: "deleted",
    when: new Date(2020, 10, 9, 13, 11, 17)
};


export const PostTableItemCancelled = Template.bind({});

PostTableItemCancelled.args = {
    network: "linkedin",
    message: "Do proident aute aliquip officia officia laboris aliquip anim officia et.",
    status: "cancelled",
    when: new Date(2020, 10, 9, 13, 11, 17)
};