export async function authuntication(){
    const authuAPI = 'https://learn.zone01oujda.ma/api/auth/signin'
    const email = document.getElementById('email-username').value.trim()
    const password = document.getElementById('password').value.trim()
    
    const credentials = btoa(email + ":" + password) 
    try{
        const res = await fetch(authuAPI,{
            method :"POST",
            headers:{
                "Authorization": "Basic " + credentials
            }
        })
        const data = await res.json()
        console.log('data',data);
        
        if (data.error){
            return 'failed'
        }
        if (data)localStorage.setItem('token',data)
        return 'success'
    }catch(error){
        console.log('error:',error);
        return 'failed'
        
    }
}