import React from 'react';
import { Router } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs'

// This default export determines where you story goes in the story list
export default {
    title: 'Components/BreadCrumbs',
    component: BreadCrumbs,
    //decorators: [(Story) => <Router><Story /></Router>]
  };
  
  const Template = (args) => <BreadCrumbs {...args} />;
  
  export const BreadCrumbsTwoSteps = Template.bind({});
  
  BreadCrumbsTwoSteps.args = {
      crumbs: [
          {
              title: "Item 1",
              path: "/item1", 
          },
          {
              title: "Current Item",
              path: "/item1/item2",
          },
      ]
  };

  export const BreadCrumbsOneSteps = Template.bind({});
  
  BreadCrumbsOneSteps.args = {
      crumbs: [
          {
              title: "Item 1",
              path: "/item1", 
          },
      ]
  };