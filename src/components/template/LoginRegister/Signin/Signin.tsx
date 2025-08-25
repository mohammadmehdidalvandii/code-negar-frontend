import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {loginUser} from '@services/authServiecs'
import { useMutation } from 'react-query';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


function Signin() {
  const navigate = useNavigate();
  const [email , setEmail] = useState<string>('');
  const [password , setPassword] = useState<string>('');
  const emailRegex = /^(?!.*\.\.)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const mutation  = useMutation(loginUser,{
    onSuccess: (data)=>{
      Swal.fire({
        icon:"success",
        title:"ورود شما موفقیت آمیز بود",
        confirmButtonText:"وارد شوید"
      }).then(()=>{
          navigate('/')
      })
      localStorage.setItem('token', data.data.token)
    },

    onError: (error: any)=>{
      console.log(error)
      Swal.fire({
        icon:"error",
        title:"با خطا مواجه شدید !",
        text:error && 'مشکلی پیش اومد دوباره تلاش کنید',
        confirmButtonText:"تلاش مجدد"
      })
    }
  })

  const handlerLoginForm:React.FormEventHandler = (e) => {
    e.preventDefault();

    if(!email){
        Swal.fire({
        icon: 'warning',
        title: 'خطا',
        text: 'ایمیل الزامی است',
        confirmButtonText: 'باشه',
      })
      return
    }
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'warning',
        title: 'خطا',
        text: 'ایمیل معتبر نیست',
        confirmButtonText: 'باشه',
      })
      return
    }
       if (!password) {
      Swal.fire({
        icon: 'warning',
        title: 'خطا',
        text: 'رمز عبور الزامی است',
        confirmButtonText: 'باشه',
      })
      return
    }
    if (password.length < 6) {
      Swal.fire({
        icon: 'warning',
        title: 'خطا',
        text: 'رمز عبور باید حداقل ۶ کاراکتر باشد',
        confirmButtonText: 'باشه',
      })
      return
    }

    mutation.mutate({email , password});
          
  }

  return (
    <section className="block max-w-[600px] mx-auto mt-30 p-2 md:p-0">
        <div className="block bg-bg-light px-2 rounded-lg dark:bg-bg-dark-100 p-4">
            <h4 className="block text-center font-danaBlack text-2xl dark:text-bg-home">لطفا وارد حساب کاربری شوید !</h4>
            <form action="#" className="form mt-4 " onSubmit={handlerLoginForm}>
                <div className="form_group">
                  <label className='form_label'>ایمیل *</label>
                  <input type="text" className='form_input' placeholder='ایمیل'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div className="form_group">
                  <label className='form_label'>رمزعبور *</label>
                  <input type="password" className='form_input' placeholder='رمزعبور'
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <button type='submit' className='btn_primary flex w-full cursor-pointer'
                disabled={mutation.isLoading}
                >
                  {mutation.isLoading ? 'درحال ورود هستید ...':'وارد شوید'}  
                </button>
            </form>
            <div className="flex gap-1 mt-4 text-sm font-danaRegular pt-4 border-t border-bg-dark-100 dark:border-bg-home">
                <p className="block text-bg-dark-100 dark:text-bg-home">اگر حساب کاربری ندارید ؟</p>
                <Link to='/Register' className='block text-link duration-300 hover:text-link-hover'>ثبت نام کنید</Link>
            </div>
        </div>
    </section>
  )
}

export default Signin