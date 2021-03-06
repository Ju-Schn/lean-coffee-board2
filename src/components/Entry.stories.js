import Entry from './Entry.js';

export default {
  title: 'components/Entry',
  component: Entry,
};

const Template = args => <Entry {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is a text',
  author: 'Jane Doe',
  created: '20.03.2022, 15:30',
};
