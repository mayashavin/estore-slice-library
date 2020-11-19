<script>
import { buildImageUrl } from 'cloudinary-build-url'
export const PLACEHOLDER_TRANSFORMATIONS = {
  vectorize: {
    effect: 'vectorize:3:0.1', format: 'svg'
  },
  pixelate: {
    effect: 'pixelate', quality: 1
  },
  blur: {
    effect: 'blur:2000', quality: 1
  },
  predominant: [
    {variables: [['$currWidth', 'w'], ['$currHeight', 'h']]},
    {
      resize: {
        width: 'iw_div_2', 
        aspectRatio: 1, 
        type: 'pad'
      }, 
      background: 'auto'
    },
    {
      resize: {
        type: 'crop', 
        width: 10, 
        height: 10
      }, 
      gravity: 'north_east'
    },
    {
      resize: {
        width: '$currWidth', 
        height: '$currHeight',
        type: 'fill'
      }, 
    }
  ],
  color: [
    {
      variables: [["$nh", "ih"], ["$nw", "iw"]],
      resize: {
        type: "scale",
        width: 1,
      },
      quality: "1"
    },
    { 
      resize: {
        type: "scale",
        width: "$nw",
        height: "$nh"
      },
    }
  ],
}

export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    cloud: {
      type: Object,
      default: () => ({})
    },
    placeholder: {
      type: String,
      default: 'blur',
      validator: value => !!PLACEHOLDER_TRANSFORMATIONS[value]
    },
    transformations: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      isLoaded: false,
    }
  },
  methods: {
    load() { 
      this.isLoaded = true 
    }
  },
  render(h) {
    if (!this.src) return null

    const src = buildImageUrl(this.src, {
      cloud: this.cloud,
      transformations: this.transformations
    })
    
    if (!this.placeholder) {
      const classes = `c-image ${this.isLoaded ? 'loaded' : 'loading'}`

      return (
        <img  attrs={this.$attrs} src={src} loading="lazy" class={classes} onLoad={this.load} />
      )
    }

    const classes = `c-image ${this.isLoaded ? 'loaded' : 'loading-with-placeholder'}`
    const chainedEffect = PLACEHOLDER_TRANSFORMATIONS[this.placeholder]
    const placeholderSrc = buildImageUrl(this.src, {
      cloud: this.cloud,
      transformations: {
        ...this.transformations,
        chaining: Array.isArray(chainedEffect) ? chainedEffect : [ chainedEffect ]
      }
    })
    
    return (
      <div class="c-image--wrapper">
        <img attrs={this.$attrs} src={src} loading="lazy" class={classes} onLoad={this.load} />
        {!this.isLoaded && <img src={placeholderSrc} attrs={this.attrs} class="c-placeholder" />}
      </div>
    )
  }

}
</script>
<style scoped>
.c-image.loading-with-placeholder {
  opacity: 0;
  position: absolute;
}
.c-placeholder {
  display: inline-block;
}
</style>