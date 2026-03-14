import {authuntication} from './authu.js';
import {showProfile} from './showProfile.js';
import { setAlert } from './alert.js';
export async function showLogin(){
    const body = document.body
    body.innerHTML = ``
    const login = `
    <form action="" id="container" >
        <h2>login</h2>
        <input type="text" name="email" id="email-username" placeholder="email or username" >
        <input type="password" id="password" placeholder="password">
        <button  id="loginButton" >login</button>
    </form>
    `
    const appCountainer = document.createElement('div')
    appCountainer.setAttribute('id','appCountainer')
    appCountainer.innerHTML = login
    body.append(appCountainer)
    //---------------------------------------------------------
     document.getElementById('loginButton').addEventListener('click',async (e)=>{
        e.preventDefault()
        const  res = await authuntication()        
        if(res === 'success'){
            let token = localStorage.getItem('token')
            showProfile(token)
        }else{
            setAlert('error', '✖', 'invalid email/userName or password')
            
        }
    })
}