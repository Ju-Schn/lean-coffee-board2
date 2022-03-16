import EntryForm from './EntryForm';

export default {
  title: 'components/EntryForm',
  component: EntryForm,
};

const Template = args => <EntryForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Add Entry',
};
