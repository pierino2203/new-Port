import React, { useState } from "react";
import Style from '../styles/NavBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className={Style.navbar}>
            <div className={Style.nav_logo}>
                Pierino Juncos
            </div>
            <div className={`${Style.nav_items} ${isOpen ? Style.nav_items_open : ''}`}>
                <a href="">Inicio</a>
                <a href="">Quien soy</a>
                <a href="">proyectos</a>
                <a href="">Teconologias</a>
                <a href="">Contacto</a>
            </div>
            <div className={Style.nav_toggle}>
                <button onClick={()=> setIsOpen(!isOpen)}><FontAwesomeIcon icon={faBars} /></button>
            </div>
            {/* <div className={Style.navbar}>
                <div className={Style.desktop_menu}>
                    <button><FontAwesomeIcon icon={faBars} /></button>
                    <ul >
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Quien soy</a></li>
                        <li><a href="">proyectos</a></li>
                        <li><a href="">Teconologias</a></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                </div>
            </div>
            <div className={Style.dropdown_menu}>
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Quien soy</a></li>
                        <li><a href="">proyectos</a></li>
                        <li><a href="">Teconologias</a></li>
                        <li><a href="">Contacto</a></li>
            </div> */}
        </div>
    )
}