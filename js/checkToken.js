export async function checkToken(token) {
    const dataAPI = 'https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql'
        const res = await fetch(dataAPI,{
            method : "POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " + token
            },
            body : JSON.stringify({
                query:`
                {
                audit{
                id
                groupId
                auditorId
                attrs
                grade
                createdAt
                updatedAt
                resultId
                version
                endAt
                }
                event{
                id
                createdAt
                endAt
                objectId
                parentId
                path
                campus
                }
                group{
                id
                objectId
                eventId
                captainId
                createdAt
                updatedAt
                status
                path
                campus
                }
                event_user{
                id
                createdAt
                userId
                eventId
                }
                user {
                id
                login
                profile
                githubId
                discordId
                attrs
                campus
                }
                record{
                id
                userId
                authorId
                message
                createdAt
                }
                registration{
                id
                createdAt
                startAt
                endAt
                objectId
                path
                campus
                }
                registration_user{
                id
                registrationId
                userId
                createdAt
                }
                transaction{
                id
                type
                amount 
                objectId
                userId
                createdAt
                path
                }
                progress{
                id
                userId
                objectId
                grade
                createdAt
                updatedAt
                path
                }
                result{
                id
                objectId
                userId
                grade
                type
                createdAt
                updatedAt
                path
                }
                object{
                id
                name
                type
                attrs
                }
            }
                `
            })
        })
      const data = await res.json()
      console.log('test data:',data);
        if (data.errors) return 'failed'
           return 'success'  
   
}