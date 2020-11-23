<template>
  <ul class="font-rail md:grid md:grid-cols-3">
    <li 
      class="flex flex-col p-5 m-2 justify-between shadow-md featured-item" 
      v-for="(item, index) in items"
      :key="index"
      :style="`--featured-item-bg: ${item.background}`"
    >
      <prismic-rich-text :field="item.title" class="capitalize text-xl text-prismui-800 font-bold text-center"/>
      <prismic-rich-text :field="item.description" class="text-gray-700 text-center my-2"/>
      <c-image 
        :src="item.cover.url" 
        :transformations="{ resize: { width: 300, height: 300, type: 'thumb' }}" class="my-3 mx-auto"
      />
      <a 
        :href="item.link" 
        class="p-4 my-3 bg-prismui-600 text-center shadow-lg uppercase text-white font-semibold rounded-md"
      >
        {{callToAction}}
      </a>
    </li>
  </ul>
</template>
<script>
import CImage from '../../components/CImage/'
export default {
  components: { CImage },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {
          items: [],
        }
      }
    }
  },
  data() {
    return {
      items: this.slice.items.slice(0, 3),
      callToAction: this.slice.primary.callToAction || "Learn More",
    }
  }
}
</script>
<style scoped>
.featured-item {
  background-color: var(--featured-item-bg)
}
</style>

