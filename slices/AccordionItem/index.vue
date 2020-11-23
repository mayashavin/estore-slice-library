<template>
  <div>
    <div 
      class="flex justify-between items-center p-2 border-b cursor-pointer" 
      @click="toggleExpand"
      aria-label="click to expand"
      :class="headingClass"
    >
      <prismic-rich-text :field="title" class="font-semibold capitalize " />
      <svg-icon :name="expandedIcon" class="fill-current" :class="iconClass" />
    </div>
    <prismic-rich-text :field="description" class="mb-3 p-2 pt-3" v-show="expanded" :class="detailsClass" />
  </div>
</template>

<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {
          primary: {
            headingStyles: {
              size: 'sm',
              color: 'prismui-500',
            },
            detailsStyles: {
              size: 'sm',
              color: 'gray-700'
            },
            invertedIcon: false
          }
        }
      }
    },
  },
  data() {
    return {
      title: this.slice.primary.title,
      description: this.slice.primary.description,
      expanded: false,
      size: this.slice.primary.headingStyles.size || 'sm'
    }
  },
  methods: {
    toggleExpand() {
      this.expanded = !this.expanded
    },
    getClass(obj = {}) {
      const text = obj.color ? `text-${obj.color}` : ''
      const bg = obj.background ? `bg-${obj.background}` : ''
      const size = obj.size ? `text-${obj.size}` : ''

      return [text, bg, size].filter(Boolean).join(" ")
    }
  },
  computed: {
    expandedIcon() {
      return this.expanded ? 'chevron-down' : 'chevron-up'
    },
    headingClass() {
      return this.getClass(this.slice.primary.headingStyles)
    },
    detailsClass() {
      return this.getClass(this.slice.primary.detailsStyles)
    },
    iconClass() {
      const sizes = {
        xs: 3,
        sm: 4,
        md: 6,
        lg: 8,
        '2xl': 10
      }

      const invertedIcon = this.slice.primary.invertedIcon ? `order-first` : `order-last`

      return `w-${sizes[this.size]} h-${sizes[this.size]} ${invertedIcon}`
    },
  }
}
</script>

<style>

</style>