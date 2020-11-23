import Slice from "./";
import model from "./model";
import mocks from "./mocks.json";
import SliceZone from "vue-slicezone";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
  title: `Form/${model.name}`,
  decorators: [withKnobs],
  parameters: {
    escapeHTML: false,
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
    "Form Title",
    _mock.primary.title[0].text,
    "Subscribe Form"
  );
  _mock.primary.placeholder = text(
    "Input placeholder",
    _mock.primary.placeholder,
    "Subscribe Form"
  );
  _mock.primary.subscribe = text(
    "Action label",
    _mock.primary.subscribe,
    "Subscribe Form"
  );
  _mock.primary.action.url = text(
    "Form submission link",
    _mock.primary.action.url,
    "Subscribe Form"
  );

  _mock.primary.actionColor = text(
    "actionColor",
    initials.actionColor || "prismui-500",
    "Form Styles"
  );
  _mock.primary.actionBg = text(
    "actionBg",
    initials.actionBg || "",
    "Form Styles"
  );
  _mock.primary.withBorder = boolean(
    "withBorder?",
    initials.withBorder !== undefined ? initials.withBorder : true,
    "Form Styles"
  );

  _mock.primary.invertedButton = boolean(
    "invertedButton? ",
    initials.invertedButton || false,
    "Form Styles"
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
      default: () => getMock()
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

export const InvertedButton = () => ({
  components: {
    Slice,
    SliceZone
  },
  props: {
    mock: {
      default: () => getMock({ invertedButton: true })
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

export const WithBackground = () => ({
  components: {
    Slice,
    SliceZone
  },
  props: {
    mock: {
      default: () =>
        getMock({
          actionBg: "prismui-500",
          actionColor: "white",
          withBorder: false
        })
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
