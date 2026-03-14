export  const query = `
    query getProfileData($arg: String!) {
      userInfo: user {
        lastName
        firstName
        auditRatio
        totalDown
        totalUp
        transactions(
          where: {
            type: {_eq: "level"},
            _or: [
              {object: {type: {_eq: "project"}}},
              {object: {type: {_eq: "piscine"}}}
            ]
          }
          order_by: {amount: desc}
          limit: 1
        ) {
          amount
        }
           success:audits_aggregate(where: { closureType: { _eq: succeeded } }) {
      aggregate {
        count
      }
    }
    failed: audits_aggregate(where: { closureType: { _eq: failed } }) {
      aggregate {
        count
      }
    }
      cohort: events(where: {cohorts: {labelName: {_is_null: false}}}) {
        cohorts {
        labelName
        }
    }
      }

      xpTransactions: transaction(
        where: {
          type: {_eq: "xp"},
          _or: [
            {object: {type: {_eq: "project"}}},
            {object: {type: {_eq: "piscine"}}},
            {path: {_eq: $arg}}
          ]
        }
      ) {
        id
        type
        amount
        path
      }

      xpProgress: transaction(
        where: {
          type: {_eq: "xp"},
          _or: [
            {object: {type: {_eq: "project"}}},
            {object: {type: {_eq: "piscine"}}}
          ]
        }
        order_by: {createdAt: asc}
      ) {
        amount
        createdAt
        object {
          name
        }
      }

      skills: transaction(
        where: { type: {_ilike: "%skill%"} }
        order_by: { amount: desc }
      ) {
        type
        amount
      }
    }
  `;