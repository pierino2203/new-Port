import React from "react";
import NavBar from "./NavBar";
import img1 from '../img/pier1.png'
import img2 from '../img/pier2.png'
import Style from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <NavBar />
            <div className={Style.container}>
                <div className={Style.container_img}>
                    <img src={img1} alt="imagen personal" />
                    <img src={img2} alt="" />
                </div>
                <div className={Style.text}>
                    <h1>I'm Pierino Juncos</h1>
                    <p>Soy Pierino,soy Desarrollador full stack, graduado del bootcamp intensivo de Soy Henry.

 Estoy en búsqueda de un trabajo que me ayude a seguir aprendiendo en este mundo que es muy amplio, estoy abierto a aprender nuevas tecnologías y reforzar las que ya se.</p>
                </div>
            </div>
            <div>
                
            </div>
        </>
    )
} 