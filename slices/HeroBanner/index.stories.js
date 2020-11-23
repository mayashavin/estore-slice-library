import Slice from "./";
import model from "./model";
import mocks from "./mocks.json";
import SliceZone from "vue-slicezone";
import { withKnobs, text, date, number } from "@storybook/addon-knobs";

export default {
  title: `Page/${model.name}`,
  decorators: [withKnobs],
  parameters: {
    //Disable docsPage since $prismic got lost
    docs: {
      page: () =>
        "Doc page for this component is currently not available due to a bug between $prismic and storybook"
    },
    controls: {
      disabled: true
    }
  }
};

export const DefaultSlice = () => ({
  components: {
    Slice,
    SliceZone
  },
  props: {
    mock: {
      default: () => {
        const _mock = { ...mocks[0] };

        _mock.primary.cover.url = text(
          "Cover Image",
          _mock.primary.cover.url,
          "Banner"
        );
        _mock.primary.subtitle[0].text = text(
          "Banner Subtitle",
          _mock.primary.subtitle[0].text,
          "Banner"
        );
        _mock.primary.title[0].text = text(
          "Banner title",
          _mock.primary.title[0].text,
          "Banner"
        );
        _mock.primary.description[0].text = text(
          "Banner description",
          _mock.primary.description[0].text,
          "Banner"
        );

        _mock.primary.buttonText = text(
          "Call to Action Label",
          "Shop",
          "Banner"
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
