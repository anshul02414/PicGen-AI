import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom' 

const Header = () => {

  const navigate = useNavigate()
  const handleGenerate = () => {
    navigate('/result')
  }
  
  
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'>
      <div className='cursor-not-allowed text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-2 rounded-full border border-neutral-500'>
        <p>Generate From PicGen AI
        </p>
        <img src={assets.star_icon} alt="" />
      </div>
      

      <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>
        turn text to Image by<span className='text-blue-700'> PicGen AI</span>
      </h1>


      <p className="text-gray-700 text-center mt-6 max-w-2xl mx-auto">
        Transform your imagination into stunning visuals with <span className="font-semibold">PicGen AI</span>. 
        Simply describe your idea in words and let our powerful AI turn it into high-quality images within seconds. 
        Fast, easy, and perfect for creators, designers, and dreamers.
      </p>

      <button onClick={handleGenerate} className='cursor-pointer sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'>
        Generate 
        <img className='h-6' src={assets.star_group} alt="" />
      </button>
    </div>
  )
}

export default Header
