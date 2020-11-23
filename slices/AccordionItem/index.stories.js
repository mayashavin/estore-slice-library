import Slice from "./";
import model from "./model";
import mocks from "./mocks.json";
import SliceZone from "vue-slicezone";
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";

export default {
  title: `Components/${model.name}`,
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

const getMock = (initials = {}) => {
  const _mock = { ...mocks[0] };

  _mock.primary.title[0].text = text(
    "Accordion Title",
    _mock.primary.title[0].text,
    "Accordion Info"
  );
  _mock.primary.description[0].text = text(
    "Accordion Description",
    _mock.primary.description[0].text,
    "Accordion Info"
  );
  _mock.primary.headingStyles = {
    color: text("headingStyles.color", "blue-800", "Heading Styles"),
    background: text("headingStyles.background", "", "Heading Styles"),
    size: select(
      "headingStyles.size",
      ["sm", "lg", "xl", "2xl"],
      "sm",
      "Heading Styles"
    )
  };

  _mock.primary.detailsStyles = {
    color: text("headingStyles.color", "gray-700", "Details Styles"),
    background: text("headingStyles.background", "", "Details Styles"),
    size: select(
      "headingStyles.size",
      ["sm", "lg", "xl", "2xl"],
      "sm",
      "Details Styles"
    )
  };

  _mock.primary.invertedIcon = boolean(
    "Inverted Icon? ",
    initials.invertedIcon || false,
    "Heading Styles"
  );

  return _mock;
};

export const Basic = () => ({
  components: {
    Slice,
    SliceZone
  },
  props: {
    mock: {
      default: () => {
        return getMock();
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

export const InvertedIcon = () => ({
  components: {
    Slice,
    SliceZone
  },
  props: {
    mock: {
      default: () => {
        return getMock({
          invertedIcon: true
        });
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
