import CreateAuthor from './CreateAuthor.js';

export default {
  title: 'components/CreateAuthor',
  component: CreateAuthor,
  argTypes: {
    onSubmit: 'onSubmit',
  },
};

const Template = args => <CreateAuthor {...args} />;

export const Default = Template.bind({});
Default.args = {};
