import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <section className="block max-w-[600px] mx-auto mt-30 p-2 md:p-0">
        <div className="block bg-bg-light px-2 rounded-lg dark:bg-bg-dark-100 p-4">
            <h4 className="block text-center font-danaBlack text-2xl dark:text-bg-home">لطفا وارد حساب کاربری شوید !</h4>
            <form action="#" className="form mt-4 ">
                <div className="form_group">
                  <label className='form_label'>ایمیل *</label>
                  <input type="text" className='form_input' placeholder='ایمیل'/>
                </div>
                <div className="form_group">
                  <label className='form_label'>رمزعبور *</label>
                  <input type="text" className='form_input' placeholder='رمزعبور'/>
                </div>
                <button className='btn_primary flex w-full cursor-pointer'>وارد شوید</button>
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