import { showLogin } from "./showLogin.js"

export function logout(){
    
    localStorage.removeItem('token')
    showLogin()
}