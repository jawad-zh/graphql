export async function checkToken(token) {
    const dataAPI = 'https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql'
    try{
         const res = await fetch(dataAPI,{
            method : "POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " + token
            },
            body : JSON.stringify({
                query:`
                {
                user {
                id
                login
                }
            }
                `
            })
        })
      const data = await res.json()
        if (data.errors) return 'failed'
           return 'success'  
    }catch(error){
        console.log('fetch data Error',error);
        return 'failed'
    }
       
   
}