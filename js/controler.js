import { showLogin } from "./showLogin.js"
import { checkToken } from "./checkToken.js"
import {showProfile} from './showProfile.js';
async function controler(){
    let token = localStorage.getItem('token')    
    if (!token){
        showLogin()
    }else{
        const res = await checkToken(token)
        if (res === 'success'){            
            showProfile(token)
        }else{
            showLogin()
        }
    }
    
}
controler()