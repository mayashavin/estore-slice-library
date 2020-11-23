import Slice from "./";
import model from "./model";
import mocks from "./mocks.json";
import SliceZone from "vue-slicezone";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: model.name,
  decorators: [withKnobs],
  parameters: {
    docs: {
      page: null
    },
    controls: {
      disable: true
    }
  }
};

// TODO: Update to loop over mocks.json
export const Basic = () => ({
  components: {
    Slice,
    SliceZone
  },
  props: {
    mock: {
      default: () => {
        const _mock = { ...mocks[0] };

        _mock.primary.description[0].text = text(
          "Description",
          _mock.primary.description[0].text
        );
        _mock.primary.title[0].text = text(
          "Title",
          _mock.primary.title[0].text
        );
        _mock.primary.logo.url = text(
          "Logo",
          "https://res.cloudinary.com/mayashavin/image/upload/w_100,h_100,c_scale/v1606158086/prismUi/white_logo_color_background.jpg"
        );
        _mock.primary.twitter.url = text(
          "Github",
          "https://twitter.com/MayaShavin",
          "Social Media"
        );
        _mock.primary.github.url = text(
          "Twitter",
          "https://github.com/mayashavin",
          "Social Media"
        );
        _mock.primary.facebook.url = text(
          "Facebook",
          "https://facebook.com/mayashavin",
          "Social Media"
        );
        return _mock;
      }
    }
  },
  data() {
    return {
      resolver() {
        return Slice;
      }
    };
  },
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver" />'
});
