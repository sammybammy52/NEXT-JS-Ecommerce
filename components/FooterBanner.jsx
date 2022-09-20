import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';
import HeadphonePic from '../public/headphones_a_4.webp';

const FooterBanner = ({ FooterBanner }) => {
  return (
    <div className="footer-banner-container">
        <div className="banner-desc">
            <div className="">
                <p>{FooterBanner.discount}</p>
                <img src="https://i.ibb.co/BBwWDHV/headphones-a-4.webp" alt="" className='footer-banner-image'/>
             

            </div>
            <div className="right">
                <p>{FooterBanner.midText}</p>
                <h3>{FooterBanner.smallText}</h3>
                <p>{FooterBanner.desc}</p>
                <Link href={`/product/${FooterBanner.product}`} className='footer-button'>
                  <button className='footer-button'>{FooterBanner.buttonText}</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default FooterBanner