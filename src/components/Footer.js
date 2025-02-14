import React from 'react'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* ---------- Left Section ------------ */}
        <div>
            <p>WANDERLUST</p>
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptas, sint facere quidem asperiores ut blanditiis voluptates minus nulla corporis laudantium possimus voluptatem voluptate ipsam nemo tempora aspernatur repellat consequuntur?</p>
        </div>

        {/* ------------ Center Section ------------ */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/* ------------- Right Section --------------- */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+92 344 0775484</li>
                <li>hanzalashamsi@gmail.com</li>
            </ul>
        </div>
      </div>

      {/* ------------ CopyRight Text ------------- */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ Wanderlust - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
