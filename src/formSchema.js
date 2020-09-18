import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
        .required('Name is required')
        .min(2, 'Name must be 2 chars or longer'),
    instruction: yup.string(),
    size: yup.string()
        .oneOf(['small', 'medium','large','extra-large'], 'Size is Required'),
    pepperoni: yup.boolean(),
    jalepenos: yup.boolean(),
    mushrooms: yup.boolean(),
    pineapple: yup.boolean(),
    olives: yup.boolean(),
    glutenFree: yup.boolean()
})