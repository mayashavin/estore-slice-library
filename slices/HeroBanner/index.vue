<template>
  <sf-banner
    :subtitle="$prismic.asText(slice.primary.subtitle)"
    :title="$prismic.asText(slice.primary.title)"
    :description="$prismic.asText(slice.primary.description)"
    :button-text="buttonText"
    :image="slice.primary.cover.url"
    class="hero-banner__container"
  />
</template>
<script>
import { SfBanner } from '@storefront-ui/vue'

export default {
  components: {
    SfBanner
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      buttonText: this.slice.primary.buttonText || 'Shop Now'
    }
  }
}
</script>
<style>
.hero-banner__container .sf-banner__wrapper {
  @apply bg-prismui-400 font-rail px-3 w-full;
  --bg-opacity: 0.5;
}

@screen md {
  .hero-banner__container .sf-banner__wrapper {
    padding: var(--banner-padding, var(--spacer-xl));
  }

  .hero-banner__container .sf-banner__wrapper .sf-banner__title {
    @apply text-2xl;
  }
}

@screen lg {
  .hero-banner__container .sf-banner__wrapper {
    --bg-opacity: 0.8;
  }

  .hero-banner__container .sf-banner__wrapper .sf-banner__title {
    @apply text-3xl;
  }
}

.hero-banner__container .sf-banner__wrapper .sf-banner__subtitle {
  @apply text-gray-100;
}

.hero-banner__container .sf-banner__wrapper .sf-banner__title {
  @apply w-full text-left;
   word-break: break-all;
   overflow: hidden;
}
</style>

