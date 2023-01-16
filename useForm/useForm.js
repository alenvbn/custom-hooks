import { useState } from 'react'

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm)

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const onResetForm = () => {
    // const newObject = {}
    // for (const property in formState) {
    //   newObject[property] = ''
    // }
    // setFormState(newObject)
    setFormState(initialForm)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }
}
