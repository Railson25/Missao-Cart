import * as Yup from 'yup'

export default Yup.object().shape({
    name: Yup.string().min(3).max(30).required(),
    email: Yup.string().email().required(),
    adress: Yup.string().required(),
    cep: Yup.string().required(),
    rua: Yup.string().required(),
    bairro: Yup.string().required(),
    numero: Yup.string().required(),
    rest: Yup.string().required()
})