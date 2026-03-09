import {authuntication} from './authu.js';
import {showProfile} from './showProfile.js';

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
    const form = document.createElement('form')
    form.setAttribute('id','container')
    form.innerHTML = login
    body.append(form)
    //---------------------------------------------------------
     document.getElementById('loginButton').addEventListener('click',async (e)=>{
        e.preventDefault()
        const  res = await authuntication()
        console.log('authuuu reees',res);
        
        if(res === 'success'){
            showProfile()
        }else{
            console.log('nnnnnnnn');
            
        }
    })
}