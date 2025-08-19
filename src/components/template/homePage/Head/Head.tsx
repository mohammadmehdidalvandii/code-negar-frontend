import React from 'react'
import { Link } from 'react-router-dom'

const Head:React.FC = ()=>{
  return (
    <section className="block mt-12">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                 <div>
                    <div className="block mt-40 text-center md:text-right">
                        <h1 className="block font-danaBlack text-4xl md:text-6xl dark:text-white">داستان‌ها <br /> و ایده‌های انسانی</h1>
                        <p className="block font-bold text-lg md:text-2xl mt-12 dark:text-white">جایی برای خواندن، نوشتن و درک عمیق شما</p>
                        <Link to='/Login' className='btn_primary  mx-auto md:mx-0 mt-12 '>شروع کنید</Link>
                    </div>
                </div>
                <div  className='hidden md:block'>
                    <img src="/assets/images/bg-home.webp" alt="" className="block w-[450px]" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Head