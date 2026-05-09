import { showLogin } from "../js/views/showLogin.js"
import { checkToken } from "../js/auth/checkToken.js"
import {showProfile} from '../js/views/showProfile.js'
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