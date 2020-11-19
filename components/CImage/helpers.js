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

export const GRAVITY = ['auto', 'auto:subject', 'face', 'sink', 'north_east', 'north', 'north_west', 'west', 'south_west', 'south', 'south_east', 'east', 'center', 'face:center', 'faces', 'faces:center']

export const CROPMODE = ['thumb', 'scale', 'fill', 'fit', 'crop', 'pad']

export const RGBAToHexA = (rgba, prefix="rgb:") => {
  const sep = rgba.includes(",") ? "," : " ";
  const toHEXValue = num => num.toString(16)


  rgba = rgba.substr(5).split(")")[0].split(sep);
                
  // Strip the slash if using space-separated syntax
  if (rgba.includes("/"))
    rgba.splice(3,1);

  for (let color in rgba) {
    let r = rgba[color];
    if (r.includes("%")) {
      let p = r.substr(0,r.length - 1) / 100;

      if (color < 3) {
        rgba[color] = Math.round(p * 255);
      } else {
        rgba[color] = p;
      }
    }
  }

  const colors = {
    r: toHEXValue(+rgba[0]),
    g: toHEXValue(+rgba[1]),
    b: toHEXValue(+rgba[2]),
    a: toHEXValue(Math.round(+rgba[3] * 255))
  }

  if (colors.r.length == 1) { colors.r = `0${colors.r}`}
  if (colors.g.length == 1) { colors.g = `0${colors.g}`}
  if (colors.b.length == 1) { colors.b = `0${colors.b}`}
  if (colors.a.length == 1) { colors.a = `0${colors.a}`}

  return `${prefix}${colors.r}${colors.g}${colors.b}${colors.a}`
}