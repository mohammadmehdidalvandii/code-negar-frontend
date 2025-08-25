const baseUrl = 'http://localhost:3000/api/'


// login services
interface LoginProps {
  email: string;
  password: string;
}
 const loginUser = async ({email , password}:LoginProps) => {
    // const response = await fetch('http://localhost:3000/api/auth/login',{
    const response = await fetch(`${baseUrl}auth/login`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email , password})
    })
    if(response.status !== 200){
        throw new Error('Login Failed')
    }
    const data = await response.json();
    return data
}

export {
    loginUser
} 
    