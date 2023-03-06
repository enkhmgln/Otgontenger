import React from 'react'
import FooterTemplate from "../FooterTemplate"
import {FaFacebook, FaGithub, FaTwitter} from 'react-icons/fa'
import './style.css'
const Footer = () => {
  return (
    <div className='container'>
       <div className='left'>
       <FooterTemplate
       icon="fa-solid fa-location-dot"
        text="НЕБ ЛАБАРТОРИ 151-Р СУРГУУЛЬ"
        />
        <FooterTemplate
          icon="fa-solid fa-phone"
        text="+976 88603319"
        />
        <FooterTemplate
        icon="fa-solid fa-envelope"
        text="sad64137@gmail.com"
        />
       </div>
       <div className='right'>
        <h3 className='info'>мэдээлэл</h3>
        <p className='bg-grey info'>
        lorem pp pororolorem pp pororolorem pp pororolorem pp pororolorem 
        </p>
       <div className='info'>
        <FaFacebook style={{height:'50px', width:'50px', border: '8px solid #333A41 ',borderRadius:'8px',backgroundColor:'#333A41', margin:'4px'}}/>
        <FaGithub style={{height:'50px', width:'50px',border: '8px solid #333A41 ',borderRadius:'8px',backgroundColor:'#333A41', margin:'4px'}}/>
        <FaTwitter style={{height:'50px', width:'50px',border: '8px solid #333A41 ',borderRadius:'8px',backgroundColor:'#333A41', margin:'4px'}}/>
       </div>
       </div>
    </div>
  )
}

export default Footer