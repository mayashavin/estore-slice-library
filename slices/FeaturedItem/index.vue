<template>
  <ul class="flex font-rail">
    <li class="flex flex-col p-5 bg-white m-2 justify-between shadow-md w-64" v-for="(item, index) in items" :key="index">
      <prismic-rich-text :field="item.title" class="capitalize text-xl font-bold"></prismic-rich-text>
      <prismic-rich-text :field="item.description" class="text-gray-800"></prismic-rich-text>
      <c-image :src="item.cover.url" :transformations="{ resize: { width: 300, height: 300, type: 'thumb' }}" class="my-3 mx-auto"/>
      <a :href="item.link" class="p-3 my-3 bg-orange-600 text-center shadow-lg uppercase text-white">Learn More</a>
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
          items: []
        }
      }
    }
  },
  data() {
    return {
      items: this.slice.items.slice(0, 3)
    }
  }
}
</script>
<style scoped>
.section {
  position: relative;
  background: #F7F7F7;
  color: #111;
  padding: 4em;
  text-align: center;
}
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>

