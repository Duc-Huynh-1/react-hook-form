import instance from "./instance";

const sign_in = (data:any)=>{
    return instance.post('/signin', data)
}
const sign_up = (data:any)=>{
    return instance.post('/signup' ,data)
}
export {sign_in , sign_up}