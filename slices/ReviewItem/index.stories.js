import Slice from "./";
import model from "./model";
import mocks from "./customMocks.json";
import { withKnobs, text, date, number } from "@storybook/addon-knobs";
import SliceZone from "vue-slicezone";

export default {
  title: `User/${model.name}`,
  decorators: [withKnobs],
  parameters: {
    //Disable docsPage since $prismic got lost
    docs: {
      page: () =>
        "Doc page for this component is currently not available due to a bug between $prismic and storybook"
    },
    controls: {
      disable: true
    }
  },
  argTypes: {
    max: {
      control: {
        type: "number"
      },
      description: "Max score given to review",
      name: "max",
      table: {
        category: "Review",
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
    SliceZone
  },
  props: {
    mock: {
      default: () => {
        const _mock = { ...mocks[0] };

        _mock.primary.reviewerAvatar.url = text(
          "Avatar",
          _mock.primary.reviewerAvatar.url,
          "Reviewer"
        );
        _mock.primary.reviewerName = text(
          "Name",
          _mock.primary.reviewerName,
          "Reviewer"
        );
        _mock.primary.title[0].text = text(
          "Review title",
          _mock.primary.title[0].text,
          "Review"
        );
        _mock.primary.description[0].text = text(
          "Review description",
          _mock.primary.description[0].text,
          "Review"
        );
        _mock.primary.date = date("Date", "", "Review");
        _mock.primary.max = number("Max rating score", 5, "Review");
        _mock.primary.score = number("Ratings", _mock.primary.score, "Review");

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
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver"/>'
});

export const NoAvatar = () => ({
  components: {
    Slice,
    SliceZone
  },
  props: {
    mock: {
      default: () => {
        const _mock = { ...mocks[0] };

        _mock.primary.reviewerAvatar.url = text("Avatar", "", "Reviewer");
        _mock.primary.reviewerName = text(
          "Name",
          _mock.primary.reviewerName,
          "Reviewer"
        );
        _mock.primary.title[0].text = text(
          "Review title",
          _mock.primary.title[0].text,
          "Review"
        );
        _mock.primary.description[0].text = text(
          "Review description",
          _mock.primary.description[0].text,
          "Review"
        );
        _mock.primary.date = date("Date", "", "Review");
        _mock.primary.max = number("Max rating score", 5, "Review");
        _mock.primary.score = number("Ratings", _mock.primary.score, "Review");

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
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver"/>'
});
