import type { Meta, StoryObj } from '@storybook/react';

import TGButton from './TGButton';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof TGButton> = {
	component: TGButton,
};

export default meta;
type Story = StoryObj<typeof TGButton>;

export const FirstStory: Story = {
	args: {

		//👇 The args you need here will depend on your component
	},
};
