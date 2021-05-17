import * as yup from "yup";

export const schema = yup.object().shape({
  
 size: yup
    .string(),
 sauce: yup
    .string()
    .oneOf(['marinara sauce', 'ranch', 'bbq sauce'])
    .required('you must choose one'),
 mushroom: yup
    .boolean().oneOf([true, false], ''),
 onion: yup
    .boolean().oneOf([true, false], ''),
 banana_peppers: yup
    .boolean().oneOf([true, false], ''),
 sausage: yup
    .boolean().oneOf([true, false], ''),
 pineapple: yup 
    .boolean().oneOf([true, false], ''),
 artichoke: yup
    .boolean().oneOf([true, false], ''),
 special: yup
    .string(),
 name: yup
    .string()
    .min(2, "name must be at least 2 characters")
    .required("Name is Required"),
 phone: yup
    .string()
    .min(7, "Must be a valid number"),
});
