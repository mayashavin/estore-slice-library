<template>
  <sf-hero class="section font-rail" :sliderOptions="{autoplay: false}">
    <template #prev="{go}">
      <button
        class="bg-white text-orange-500 sf-hero__controls__arrow left"
        @click="go"
      >
        <svg-icon name="chevron-left" class="w-6 h-6 fill-current"/>
      </button>
    </template>
    <sf-hero-item
      v-for="(item, index) in slice.items"
      :key="index"
      class="rounded-xl shadow-md relative flex items-center py-4 px-6 h-banner bg-gray-600"
      :title="$prismic.asText(item.title)"
      :subtitle="$prismic.asText(item.description)"
      button-text="Learn More"
      :image="coverImage(item.cover.url)"
    >
      <template #title="{title}">
        <h2 class="text-2xl font-semibold capitalize text-white order-first text-shadow">{{title}}</h2>
      </template>
      <template #subtitle="{subtitle}">
        <p :field="subtitle" class="text-md text-gray-200 my-2">{{subtitle}}</p>
      </template>
      <template #call-to-action="{buttonText}">
        <button class="rounded-3xl border-white inline block shadow-md bg-white px-6 text-lg py-2 mt-4 text-orange-600 font-semibold flex items-center justify-center">
          <span>{{buttonText}}</span>
          <svg-icon name="chevron-right" class="w-4 h-4 fill-current ml-2" />
        </button>
      </template>
    </sf-hero-item>
    <template #next="{go}">
      <button
        class="bg-white text-orange-500 sf-hero__controls__arrow right"
        @click="go"
      >
        <svg-icon name="chevron-right" class="w-6 h-6 fill-current"/>
      </button>
    </template>
  </sf-hero>
</template>
<script>
import { SfHero } from "@storefront-ui/vue";
import "@storefront-ui/vue/styles.scss";
import { buildImageUrl } from 'cloudinary-build-url'

export default {
  components: { SfHero },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {
          items: []
        }
      }
    }
  },
  methods: {
    goNext() {},
    goPrev() {},
    coverImage(url) {
      return buildImageUrl(url, {
        cloud: {
          storageType: 'fetch',
          cloudName: 'mayashavin'
        },
        transformations: {
          opacity: 70
        }
      })
    }
  }
}
</script>
<style scoped>
.section {
  --hero-controls-padding: 0px;
}
.sf-hero__controls__arrow {
  @apply h-16 justify-center flex items-center;
}

.sf-hero__controls__arrow.left {
  @apply rounded-r-2xl pr-2 pl-1;
}

.sf-hero__controls__arrow.right {
   @apply rounded-l-2xl pr-1 pl-2;
}
</style>

