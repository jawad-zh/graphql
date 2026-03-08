 function showLogin(){
    const body = document.body
    body.innerHTML = ``
    const login = `
    <form action="" id="container" >
        <h2>login</h2>
        <input type="text" name="email" id="email-username" placeholder="email or username" >
        <input type="password" id="password" placeholder="password">
        <button  type="submit" id="loginButton" >login</button>
    </form>
    `
    const form = document.createElement('form')
    form.setAttribute('id','container')
    form.innerHTML = login
    body.append(form)
}
showLogin()