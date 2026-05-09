import { showLogin } from "../views/showLogin.js"

export function logout(){
    localStorage.removeItem('token')
    showLogin()
}