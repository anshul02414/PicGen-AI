import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className=" from-white via-gray-50 to-gray-100 text-gray-700 mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div>
          <img src={assets.logo} alt="logo" className="w-60 mb-4" />
          <p className="text-sm leading-6 text-gray-600">
            PicGen AI helps you transform your imagination into stunning visuals within seconds. 
            Smart, simple, and creative AI-powered image generation.
          </p>
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li onClick={()=>navigate('/')} className="hover:text-black cursor-pointer">Home</li>
            <li onClick={()=>navigate('/buy')} className="hover:text-black cursor-pointer">Pricing</li>
            <li onClick={()=>navigate('/working')} className="hover:text-black cursor-pointer">How it Works</li>
            <li onClick={()=>navigate('/review')} className="hover:text-black cursor-pointer">Reviews</li>
            <li onClick={()=>navigate('/contect')} className="hover:text-black cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li onClick={()=>navigate('/termscondition')} className="hover:text-black cursor-pointer">
                Terms & Conditions
            </li>
            <li onClick={()=>navigate('/privacypolicies')} className="hover:text-black cursor-pointer">
                Privacy Policy
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-900 font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <img onClick={() => window.open('https://www.facebook.com/', '_blank')} src={assets.facebook_icon} alt="facebook" className="w-6 cursor-pointer hover:scale-110 transition" />
            <img onClick={() => window.open('https://www.instagram.com/', '_blank')} src={assets.instagram_icon} alt="instagram" className="w-6 cursor-pointer hover:scale-110 transition" />
            <img onClick={() => window.open('https://x.com/anshul02414', '_blank')}  src={assets.twitter_icon} alt="twitter" className="w-6 cursor-pointer hover:scale-110 transition" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm text-gray-500 ">
        © {new Date().getFullYear()} PicGen AI. All rights reserved @Anshul Kumawat.
      </div>
    </footer>
  )
}

export default Footer
