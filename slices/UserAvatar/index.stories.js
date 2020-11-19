import Slice from './';
import model from './model';
import mocks from './mocks.json';
import SliceZone from 'vue-slicezone';

export default {
  title: `User/${model.name}`,
  decorators: [() => ({ template: '<div class="p-5"><story/></div>' })],
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
      ],
    },
  }
};

const Template = (args, { argTypes }) => ({
  components: {
    Slice,
    SliceZone
  },
  props: Object.keys(argTypes),
  data() {
    return {
      mock: mocks[0],
      resolver() {
        return Slice;
      }
    };
  },
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver" />',
})

export const Basic = Template.bind()

Basic.args = {
  primary: true,
  label: 'Basic'
}

Basic.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
    ],
  },
};