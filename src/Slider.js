// import Slider from 'material-ui/Slider'
import Slider from '@material-ui/lab/Slider';

import createComponent from './createComponent'

export default createComponent(
  Slider,
  ({
    input: { onDragStart, onChange, name, value },
    onChange: onChangeFromField,
    defaultValue,
    meta,
    ...props
  }) => ({
    // eslint-disable-line no-unused-vars
    ...props,
    name,
    value,
    onChange: (event, value) => {
      onChange(value)
      if (onChangeFromField) {
        onChangeFromField(value)
      }
    }
  })
)
