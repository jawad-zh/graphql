import { showLogin } from "./showLogin.js"
import { checkToken } from "./checkToken.js"
import {authuntication} from './authu.js';
import {showProfile} from './showProfile.js';
async function controler(){
    const token = localStorage.getItem('token')    
    if (!token){
        showLogin()
         const res = authuntication()
        if(res === 'success'){
            showProfile()
        }else{
            showLogin()
        }
    }else{
        const res = await checkToken(token)
        if (res === 'success'){
            showProfile()
        }else{
            showLogin()
     
        }
    }
    
}
controler()