<template>
  <div class="flex section" :class="containerClass">
    <div class="border-white overflow-hidden" :class="mainImageBorderClass">
      <img 
        :src="selectedImage.url" 
        ref="mainImage"
        @mousemove="moveZoom"
        @mouseout="resetZoom"
        :alt="selectedImage.alt"
      />
    </div>
    <div class="flex" :class="thumbnailOrder">
      <button
        v-for="(image, index) in images" 
        :key="index" 
        @click="select(index)" 
        aria-label="Click to select the image"
        :class="getThumbnailClass(index)"
      >
        <img :src="image.thumbnail" :alt="image.alt" />
      </button>
    </div>
  </div>
</template>
<script>
import { buildImageUrl } from 'cloudinary-build-url'
import { isInHorizontalPos, isInVerticalPos, POSITIONS } from './helpers'

const defaultTransformation = {
  resize: {
    type: 'fill'
  },
  gravity: 'auto:subject'
}

export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {
          images: []
        }
      }
    },
    enabledZoom: {
      type: Boolean,
      default: true
    },
    imageSize: {
      type: Object,
      default() {
        return {
          width: 450,
          height: 480 //optional
        }
      }
    },
    thumbnailPos: {
      type: String,
      default: POSITIONS.LEFT,
      validator: value => Object.values(POSITIONS).includes(value)
    }
  },
  data() {
    return {
      selected: 0,
    }
  },
  methods: {
    select(index) {
      this.selected = index
    },
    getMainImagePosition() {
      return this.mainImageRef ? this.mainImageRef.getBoundingClientRect() : ''
    },
    resetZoom() {
      if (!this.enabledZoom) return

      this.mainImageRef.style.transform = "translate3d(0, 0, 0)";
    },
    moveZoom($event) {
      if (!this.enabledZoom) return

      this.resetZoom()

      const staticMainImagePos = this.getMainImagePosition()
      if (!staticMainImagePos) return

      const newPos = {
        x: $event.clientX - staticMainImagePos.x,
        y: $event.clientY - staticMainImagePos.y
      }

      this.mainImageRef.style.transform = "scale(2)"
      this.mainImageRef.style.transformOrigin = `${newPos.x}px ${newPos.y}px`
    },
    getThumbnail(image, thumbnailSize) {
      const originalSize = image.dimensions
      const { width, height} = thumbnailSize
      const isAlreadyThumbnail = originalSize.width <= width && originalSize.height <= height

      if (isAlreadyThumbnail)  return image.url.includes('fit=crop') ? image.url : `${image.url}&fit=crop`

      return buildImageUrl(image.url, {
        transformations: {
          ...defaultTransformation,
          resize: {
            width,
            height,
            type: defaultTransformation.resize.type
          }
        }
      })
    },
    getThumbnailClass(index) {
      return {
        'opacity-60': this.selected !== index
      }
    }
  },
  computed: {
    mainImageRef() {
      return this.$refs.mainImage
    },
    images() {
      const images = this.slice.items.map(item => item.image)      
      images.unshift(this.slice.primary.mainImage)

      const sizeToAlign = isInHorizontalPos(this.thumbnailPos) ? this.imageSize.height : this.imageSize.width      
      const thumbnailSize = Math.floor(sizeToAlign / images.length)

      return images.map(image => ({
        ...image,
        url: this.getThumbnail(image.default, this.imageSize),
        thumbnail: this.getThumbnail(image.thumbnail, {
          width: thumbnailSize,
          height: thumbnailSize,
        })
      }))
    },
    selectedImage() {
      return this.images[this.selected]
    },
    mainImageBorderClass() {
      return `border-${this.thumbnailPos[0]}`
    },
    thumbnailOrder() {
      return {
        'order-first': [POSITIONS.LEFT, POSITIONS.TOP].includes(this.thumbnailPos),
        'flex-col': isInHorizontalPos(this.thumbnailPos)
      }
    },
    containerClass() {
      return {
        'flex-col': isInVerticalPos(this.thumbnailPos)
      }
    }
  }
}
</script>
<style scoped>
</style>
