import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '@services/authServiecs';
import { useMutation } from 'react-query';
import Swal from 'sweetalert2';


const Signup:React.FC = ()=>{
  const navigate = useNavigate()
  const [email , setEmail] = useState<string>('')
  const [username , setUsername] = useState<string>('')
  const [password , setPassword] = useState<string>('')
  const [confirmPassword , setConfirmPassword] = useState<string>('')
  const emailRegex = /^(?!.*\.\.)[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;


  const mutation = useMutation(registerUser,{
    onSuccess:(data)=>{
      Swal.fire({
        icon:'success',
        title:`ثبت نام شما موفقیت آمیز بود ${data.data.username}`,
        confirmButtonText:"وارد شوید"
      }).then(()=>{
          navigate('/Login')
      })
    },
    onError:(error)=>{
      Swal.fire({
        icon:"error",
        title:"خطا",
        text:`${error}`,
        confirmButtonText:"تلاش مجدد"
      })
    }
  })

  const handlerFormRegister:React.FormEventHandler = (e)=>{
    e.preventDefault();
        if(!username){
            Swal.fire({
            icon: 'warning',
            title: 'خطا',
            text: 'نام کاربری الزامی است',
            confirmButtonText: 'باشه',
          })
          return
        }
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
        if(confirmPassword !== password){
          Swal.fire({
            icon:'warning',
            title:"مقدار رمزعبور مساوری نیست",
            confirmButtonText:"تلاش مجدد"
          })
          return
        }
    mutation.mutate({email,username,password})
  }

  return (
    <section className="block max-w-[600px] mx-auto mt-30 p-2 md:p-0">
        <div className="block bg-bg-light px-2 rounded-lg dark:bg-bg-dark-100 p-4">
            <h4 className="block text-center font-danaBlack text-2xl dark:text-bg-home">لطفا ثبت نام خود را کامل کنید</h4>
            <form action="#" className="form mt-4 " onSubmit={handlerFormRegister}>
                <div className="form_group">
                  <label className='form_label'>ایمیل *</label>
                  <input type="text" className='form_input' placeholder='ایمیل'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div className="form_group">
                  <label className='form_label'> نام کاربری*</label>
                  <input type="text" className='form_input' placeholder=' نام کاربری'
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                  />
                </div>
                <div className="form_group">
                  <label className='form_label'>رمزعبور *</label>
                  <input type="password" className='form_input' placeholder='رمزعبور'
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  />
                </div>
                <div className="form_group">
                  <label className='form_label'>تکرار رمز عبور *</label>
                  <input type="password" className='form_input' placeholder='تکرار رمز عبور'
                  value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                  />
                </div>
                <button className='btn_primary flex w-full cursor-pointer' type='submit'
                disabled={mutation.isLoading}
                >
                  {mutation.isLoading ? "درحال ثبت نام هستید ..."  : 'ثبت نام کنید'}
                </button>
            </form>
            <div className="flex gap-1 mt-4 text-sm font-danaRegular pt-4 border-t border-bg-dark-100 dark:border-bg-home">
                <p className="block text-bg-dark-100 dark:text-bg-home">حساب کاربری داری ؟</p>
                <Link to='/Login' className='block text-link duration-300 hover:text-link-hover'>واردشوید</Link>
            </div>
        </div>
    </section>
  )
}

export default Signup