export const POSITIONS = {
  LEFT: 'left',
  RIGHT: 'right',
  TOP: 'top',
  BOTTOM: 'bottom'
}

export const HORIZONTAL_POSITION = [ POSITIONS.LEFT, POSITIONS.RIGHT ]
export const VERTICAL_POSITION = [ POSITIONS.TOP, POSITIONS.BOTTOM ]

export const isInHorizontalPos = pos => HORIZONTAL_POSITION.includes(pos)
export const isInVerticalPos = pos => VERTICAL_POSITION.includes(pos)
