import { Meta, StoryObj } from '@storybook/react';
import {MultiSelect} from './MultiSelect';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];


const meta: Meta<typeof MultiSelect> = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;


export const Basic: Story = {
  args: {
    options,
    placeholder: 'Select items...',
  },
};


export const WithPreselected: Story = {
  args: {
    options,
    defaultValue: [{ value: 'option2', label: 'Option 2' }],
    placeholder: 'Select items...',
  },
};


export const Loading: Story = {
  args: {
    isLoading: true,
    placeholder: 'Loading...',
  },
};


export const NoOptions: Story = {
  args: {
    options: [],
    placeholder: 'No options available.',
  },
};


export const Disabled: Story = {
  args: {
    options,
    placeholder: 'Select items...',
    isDisabled: true,
  },
};