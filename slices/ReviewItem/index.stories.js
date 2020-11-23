import Slice from './';
import model from './model';
import mocks from './customMocks.json';
import SliceZone from 'vue-slicezone';

export default {
  title: `User/${model.name}`,
  parameters: {
    backgrounds: {
      default: 'light'
    }
  },
  argTypes: {
    max: {
      control: {
        type: 'number'
      },
      description: 'Max score given to review',
      name: 'max',
      table: {
        category: 'Review',
        defaultValue: {
          summary: 5
        }
      }
    }
  }
};

export const Basic = () => ({
  components: {
    Slice,
    SliceZone,
  },
  data() {
    return {
      mock: mocks[0],
      resolver() {
        return Slice;
      },
    };
  },
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver"/>',
});
