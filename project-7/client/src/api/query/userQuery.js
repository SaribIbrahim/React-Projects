import Axios from "../axios"

const USER_URL="/user"
export const signInUser=async({password,email})=>{
    try{
        const {data}=await Axios.post(`${USER_URL}/signin`,{password,email})
        return data
    }
    catch(error){
        throw Error(error.response.data.message)
    }
}

export const signUpUser=async({password,email,firstName,lastName})=>{
    try{
        const {data}=await Axios.post(`${USER_URL}/signup`,{password,email,firstName,lastName})
        return data
    }// posting data received from sign up form to server 
    catch(error){
        throw Error(error.response.data.message)
    }
}

export const sendVerificationMail=async({email})=>{
    try{
        const {data}=await Axios.post(`${USER_URL}/send-verification-mail`,{email})
        return data
    }// posting data received from sign up form to server 
    catch(error){
        throw Error(error.response.data.message)
    }
}

export const verifyEmailAddressSignup=async({token})=>{
    try{
        const {data}=await Axios.post(`${USER_URL}/verify-user-mail`,{token})
        return data
    }// posting data received from sign up form to server 
    catch(error){
        throw Error(error.response.data.message)
    }
}