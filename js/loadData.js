export async function loadData(token){
    const dataAPI = 'https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql'
        const res = await fetch(dataAPI,{
            method : "POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " + token
            },
            body : JSON.stringify({
                query: `
               query {
                 user {
                    lastName
                    firstName
                    auditRatio
                    totalDown
                    totalUp
                transactions(
                    where: {
                    type: {_eq: "level"},
                    _or: [{object: {type: {_eq: "project"}}}, {object: {type: {_eq: "piscine"}}}]
            }
                order_by: {amount: desc}
                limit: 1
                ) {
                     amount
                    }
                }
                transaction (where :{type : {_eq:"xp"},
                _or: [{object: {type: {_eq: "project"}}},{object:{type:{_eq:"piscine"}}},{path:{_eq:"module/checkpoint"}}]
                }
                ) {
                id
                type
                amount
                path
                }
            }
                `})
        })
      const data = await res.json()
      console.log('data',data);
      
        return data
    }