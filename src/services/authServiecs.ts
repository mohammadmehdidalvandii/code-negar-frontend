const baseUrl = 'http://localhost:3000/api/'


// register services
interface registerProps{
    username:string,
    email:string,
    password:string,
}
const registerUser = async ({username , email , password}:registerProps)=>{
    const response = await fetch(`${baseUrl}auth/register`,{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({username,email,password})
    });
    if(response.status === 400){
        throw new Error('از این ایمیل قبلا استفاده شده است ')
    } else if( response.status !== 201){
        throw new Error("Register failed")
    }
    const data = await response.json();
    return data
}

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
    loginUser,
    registerUser
} 
    