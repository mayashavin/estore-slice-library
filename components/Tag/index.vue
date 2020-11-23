<template>
  <component :is="component"
    :key="tag"
    class="tag--wrapper px-5 py-2 leading-none inline-flex items-center justify-center" 
    :class="[textClass, wrapperClass]"
    @click.stop="click"
  >
    <svg-icon :name="icon" class="tag--icon fill-current" :class="iconClass" v-if="icon"/>
    {{tag}}
  </component>
</template>

<script>
import { SIZES } from './constants'

export default {
  props: {
    tag: {
      type: String,
      required: true
    },
    isClickable: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
    },
    size: {
      type: String,
      default: 'xs',
      validator: size => SIZES.includes(size)
    },
    styles: {
      type: Object,
      default: () => ({ textColor: 'white', background: 'prismui-500', roundCorners: 'full', invertedIcon: false })
    }
  },
  computed: {
    component() {
      return this.isClickable ? "button" : "span"
    },
    textClass() {
      return `text-${this.size}`
    },
    iconClass() {
      const sizes = {
        xs: 3,
        sm: 4,
        md: 6,
        lg: 8,
        '2xl': 10
      }

      const invertedIcon = this.styles.invertedIcon ? `order-last ml-2` : `order-first mr-2`

      return `w-${sizes[this.size]} h-${sizes[this.size]} ${invertedIcon}`
    },
    wrapperClass() {
      const textColor = this.styles.textColor ? `text-${this.styles.textColor}` : ``
      const bg = this.styles.background ? `bg-${this.styles.background}`: ''
      const border = this.styles.border ? `border-${this.styles.border}` : ''

      const roundCorners = this.styles.roundCorners ? `rounded-${this.styles.roundCorners}` : ''

      return [textColor, bg, border, roundCorners].filter(Boolean).join(' ')
    }
  },
  methods: {
    click() {
      if (!this.isClickable) return

      this.$emit('tag-clicked', this.tag)
    }
  }
}
</script>

<style>

</style>