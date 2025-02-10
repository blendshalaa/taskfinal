import { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;


export const Success: Story = {
  args: {
    type: 'success',
    description: 'Operation completed successfully.',
  },
};


export const WarningWithTitle: Story = {
  args: {
    type: 'warning',
    title: 'Update Available',
    description: 'A new version is ready to install.',
  },
};


export const InfoWithIconAndClose: Story = {
  args: {
    type: 'info',
    variant: 'subtle',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-3.879 12.906a.75.75 0 101.414.172V16.5a.75.75 0 001.5 0v.757a.75.75 0 01-.375.668.744.744 0 01-.75 0 .75.75 0 01-.375-.668v-.757a.75.75 0 10-1.5 0v.757a1.75 1.75 0 11-1.75 1.75v-.757a.75.75 0 10-1.5 0v.757a3.75 3.75 0 103.75 3.75v-.757c0-.414.336-.75.75-.75h3.75a.75.75 0 000-1.5h-3.75a2.25 2.25 0 01-2.25-2.25v-.757z"
          clipRule="evenodd"
        />
      </svg>
    ),
    onClose: () => alert('Alert closed!'),
    children: 'Custom content here', 
  },
};


export const ErrorWithoutIcon: Story = {
  args: {
    type: 'error',
    title: 'Error Occurred',
    description: 'An unexpected error has occurred.',
  },
};


export const InfoDescriptionOnly: Story = {
  args: {
    type: 'info',
    description: 'This is an informational message.',
  },
};