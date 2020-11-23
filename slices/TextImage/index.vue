<template>
  <section class="flex items-center px-5 font-rail section mx-auto flex-col md:flex-row">    
    <div class="my-5 md:ml-10">
      <prismic-rich-text :field="slice.primary.title" class="font-bold text-2xl font-rail text-green-700 mb-3 capitalize" />
      <prismic-rich-text :field="slice.primary.description" class="text-gray-700"/>
    </div>
    <div :class="imageClass">
      <c-image :src="this.slice.primary.image.url" placeholder="pixelate" :transformations="transformations"/>
    </div>
  </section>
</template>
<script>
import { buildImageUrl } from 'cloudinary-build-url'
import { HORIZONTAL_POSITION } from '../ProductGallery/helpers'
import { PLACEHOLDER_TRANSFORMATIONS } from '../../components/CImage/helpers'

export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    },
    imagePos: {
      type: String,
      default: 'left',
      validator: value => HORIZONTAL_POSITION.includes(value)
    },
    imageModifier: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    imageClass() {
      return {
        'order-first': this.slice.primary.imagePos === 'left' 
      }
    }  ,
    transformations() {
      return {
        resize: {
          height: 450
        },
        ...this.imageModifier,
      }
    }  
  },
}
</script>
<style scoped>
.section {
  max-width: 1000px;
}
</style>

