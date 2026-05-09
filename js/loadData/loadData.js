import {query} from './../querie.js';

export async function loadData(token) {
  const dataAPI = "https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql";
  try {
    const res = await fetch(dataAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        query,
        variables: { arg: "module/checkpoint" },
      }),
    });

    const data = await res.json();

    if (data.errors) {
      console.error("GraphQL errors:", data.errors);
      return null;
    }

    console.log("data", data.data);
    return data.data;
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}