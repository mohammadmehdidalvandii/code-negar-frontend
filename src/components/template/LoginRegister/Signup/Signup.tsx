import React from 'react'
import { Link } from 'react-router-dom'

const Signup:React.FC = ()=>{
  return (
    <section className="block max-w-[600px] mx-auto mt-30 p-2 md:p-0">
        <div className="block bg-bg-light px-2 rounded-lg dark:bg-bg-dark-100 p-4">
            <h4 className="block text-center font-danaBlack text-2xl dark:text-bg-home">لطفا ثبت نام خود را کامل کنید</h4>
            <form action="#" className="form mt-4 ">
                <div className="form_group">
                  <label className='form_label'>ایمیل *</label>
                  <input type="text" className='form_input' placeholder='ایمیل'/>
                </div>
                <div className="form_group">
                  <label className='form_label'>شماره همراه *</label>
                  <input type="text" className='form_input' placeholder='شماره همراه'/>
                </div>
                <div className="form_group">
                  <label className='form_label'>رمزعبور *</label>
                  <input type="text" className='form_input' placeholder='رمزعبور'/>
                </div>
                <div className="form_group">
                  <label className='form_label'>تکرار رمز عبور *</label>
                  <input type="text" className='form_input' placeholder='تکرار رمز عبور'/>
                </div>
                <button className='btn_primary flex w-full cursor-pointer'>ثبت نام کنید</button>
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