import React from 'react';
import SpinningLoader from './SpinningLoader'

// This default export determines where you story goes in the story list
export default {
    title: 'Components/SpinningLoader',
    component: SpinningLoader,
  };
  
  const Template = (args) => <SpinningLoader {...args} />;
  
  export const SpinningLoaderItem = Template.bind({});
  
  SpinningLoaderItem.args = {};