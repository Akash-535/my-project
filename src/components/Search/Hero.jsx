import React from 'react'
 import loremImage from '../../assets/images/png/layerImage.png';
 import location from '../../assets/images/svg/location.svg';
 import calender from '../../assets/images/svg/calender.svg';
 import people from '../../assets/images/svg/people.svg';

const Hero = () => {
  return (
    <div>
          <section className='flex justify-center items-center min-h-screen'>
      <div className="container flex justify-center items-center">
        <div className="card_div shadow p-5 border border-black rounded-lg">
     <div className="image">
       <div className='rounded-lg w-[344px] h-[252px] overflow-hidden'>
       <img className=' hover:scale-[1.2] duration-300 w-full' src={loremImage} alt="loremImage" />  
       </div>    
     </div>
     <p className='pt-5 text-2xl font-semibold'>Lorem ipsum dolor sit amet.</p>
     <div className='flex flex-col gap-5 pt-5'>
     <div className='flex gap-5 items-center'>
       <img src={calender} alt="calender" />
       <p>12/12/2023</p>
     </div>
     <div className='flex gap-5 items-center'>
       <img src={location} alt="calender" />
       <p>Haryana</p>
     </div>
     <div className='flex gap-5 items-center'>
       <img src={people} alt="calender" />
       <p>15,000</p>
     </div>
     <button className='text-lg font-semibold py-3 px-4 bg-blue-500 border text-white max-w-[134px] rounded-full hover:bg-white hover:text-blue-600 duration-300 hover:border hover:border-blue-600'>Go Check</button>
     </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero
