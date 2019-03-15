// import SelectField from 'material-ui/SelectField'
import Select from '@material-ui/core/Select';

import createComponent from './createComponent'
import mapError from './mapError'

export default createComponent(Select, ({
  input: { onChange, value, onBlur, ...inputProps },
  onChange: onChangeFromField,
  ...props
}) => ({
  ...mapError(props),
  ...inputProps,
  value: value,
  onChange: (event, index, value) => {
    onChange(value)
    if (onChangeFromField) {
      onChangeFromField(value)
    }
  },
  onBlur: () => onBlur(value)
}))
