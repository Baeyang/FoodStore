export const login = async (email,password) => {
    const res = await fetch(`https://test-pi-bf72d-default-rtdb.firebaseio.com/users.json?orderBy=$email%22&equalTo=${email}`)
    const data = res.json()
    console.log(data)
}
