import React from 'react'
import '../assets/css/Header.css'
import logoInstagram from '../assets/image/logoInstagram.png'
import logoFaceBook from '../assets/image/logoFaceBook.png'
import logoLinkedin from '../assets/image/logoLinkedin.png'
import logoTwitter from '../assets/image/logoTwitter.png'

function Header() {
    return (
    <>
        <div className='header'>
            <div className='redes-sociais'>
                <a href="https://www.instagram.com/lucianobrsts/" target="_blank">
                    <img src={logoInstagram} className="logoRedesSociais" />
                </a>

                <a href="https://pt-br.facebook.com/luciano.brsts/" target="_blank">
                    <img src={logoFaceBook} className="logoRedesSociais" />
                </a>

                <a href="https://www.linkedin.com/in/lucianobrsts/" target="_blank">
                    <img src={logoLinkedin} className="logoRedesSociais" />
                </a>

                <a href="https://twitter.com/lucianobrsts" target="_blank">
                    <img src={logoTwitter} className="logoRedesSociais" />
                </a>    
            </div>
        </div>
    </>
    )
}

export default Header