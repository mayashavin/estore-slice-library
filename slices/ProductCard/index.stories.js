import Slice from "./";
import model from "./model";
import mocks from "./mocks.json";
import SliceZone from "vue-slicezone";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: `Product/${model.name}`,
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

export const Basic = () => ({
  components: {
    Slice,
    SliceZone
  },
  props: {
    mock: {
      default: () => {
        const _mock = { ...mocks[0] };

        _mock.primary.image.url = text(
          "Cover Image",
          _mock.primary.image.url,
          "Product"
        );
        _mock.primary.title[0].text = text(
          "Product title",
          _mock.primary.title[0].text,
          "Product"
        );
        _mock.primary.description[0].text = text(
          "Product description",
          _mock.primary.description[0].text,
          "Product"
        );

        _mock.primary.price = text(
          "Product price",
          _mock.primary.price,
          "Product"
        );

        _mock.primary.currency = text(
          "Product currency",
          _mock.primary.currency,
          "Product"
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

export const WithFavorite = () => ({
  components: {
    Slice,
    SliceZone
  },
  props: {
    mock: {
      default: () => {
        const _mock = { ...mocks[0] };

        _mock.primary.image.url = text(
          "Cover Image",
          _mock.primary.image.url,
          "Product"
        );
        _mock.primary.title[0].text = text(
          "Product title",
          _mock.primary.title[0].text,
          "Product"
        );
        _mock.primary.description[0].text = text(
          "Product description",
          _mock.primary.description[0].text,
          "Product"
        );

        _mock.primary.price = text(
          "Product price",
          _mock.primary.price,
          "Product"
        );

        _mock.primary.currency = text(
          "Product currency",
          _mock.primary.currency,
          "Product"
        );

        _mock.primary.favorite = boolean("Is Favorite?", false, "Product");

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
