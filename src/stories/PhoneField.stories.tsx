// import React, { useState } from 'react'
// import { ComponentStory, ComponentMeta } from '@storybook/react'

// import { PhoneField, PhoneFieldProps } from '../components/PhoneField'
// import { FormattedValues } from "../components"

// export default {
//   title: 'Components/PhoneField',
//   component: PhoneField
// } as ComponentMeta<React.FC<PhoneFieldProps>>

// const Template: ComponentStory<React.FC<PhoneFieldProps>> = (args) => {
//   const [date, setDate] = useState<FormattedValues>({ value: '', formattedValue: '' })

//   const onChange = (inputValue: FormattedValues): void => {
//     setDate(inputValue)
//   }

//   return (
//     <div>
//       <PhoneField {...args} value={date.value} onChange={onChange} />
//       <p>Value: {date.value}</p>
//       <p>Formatted value: {date.formattedValue}</p>
//     </div>
//   )
// }

// export const Basic = Template.bind({})
// Basic.args = {
//   placeholder: 'Enter phone',
//   validationState: 'valid',
//   errorMessage: 'Phone number is invalid'
// }
