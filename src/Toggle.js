// import Toggle from 'material-ui/Toggle'
import Toggle from '@material-ui/lab/ToggleButton';

import createComponent from './createComponent'

export default createComponent(Toggle, ({
  input: { onChange, value, ...inputProps },
  defaultToggled,
  meta,
  ...props
}) => ({
  ...inputProps,
  ...props,
  onToggle: onChange,
  toggled: !!value
}))
