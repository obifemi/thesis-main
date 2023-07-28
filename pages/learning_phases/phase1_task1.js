import React from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import ReactDOM from "react-dom";
// import logo from './logo.jpeg';

export default function Home2() {
  const [toggle, setToggle] = useState(true)
  
  const show = (e) => {
    setToggle(!toggle);
    
     };

     const [toggle2, setToggle2] = useState(true)
  
  const show2 = (e) => {
    setToggle2(!toggle2);
    
     };

  return (
    <div className="p1t1_container">
      <Head>
        <title>Learnig Phase 1</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="header_tasks_container">
        <div className="logo">
          <Image
            src={require("./img/logo.jpg")}
            alt=""
            height={31}
            width={145}
          />
        </div>

        <div className="tuk_logo">
          <Image
            src={require("./img/TUKL_LOGO_4C.svg.png")}
            alt=""
            height={31}
            width={145}
          />
        </div>
      </div>
     <div className="phase1_task1">
       
     <h1 className="p1_t1_h1"> Welcome to the Learning Phase 1 / Task 1</h1>

    <h2 className="p1_t1_h1_2">In this phase, you are going to learn on basics of Turkish grammar. You can click to "continue" button at the end of
    section to continue to the test.</h2> <hr />
    <h3>Click to the "Open" to open the learning content</h3>
    <button className="p1t1_trial_button" onClick={show}> <b>Open/Close Learning Content</b> </button>
     </div> 

     <div className={toggle ? "p1t1trial_none" : "p1t1trial"} >
       
       <ul className="content_list" {...toggle ? "p1t1trial_none" : null}>

        <li className="content_items">
        <h5> In Turkish, as in English, Latin alphabets are used. There are 29 letters in Turkish.  The letters are: 
        A, B, C, Ç, D, E, F, G, Ğ, H, I,, İ, J, K, L, M, N, O, Ö, P, R, S, Ş, T, U, Ü, V, Y, Z.  The lower case of the  
        letters are: a, b, c, ç, d, e, f, g, ğ, h, ı, i, j, k, l, m, n, o, ö, p, r, s, ş, t, u, ü, v, y, z. </h5>
        

        </li> 


        <li className="content_items">
        <h5>The different letters such as ç sounds as “ch”arm sound in English, ş sounds as “sh”ine. </h5>
        </li>


        <li className="content_items">
          <h5>        The consonants are a, b, c, ç, d, e, f, g, ğ, h, j, k, l, m, n, p, r, s, ş, t, v, y, z. The vowels are e, ı, i, o, ö, u, ü.
          </h5>
        </li>



       </ul>
       

     </div>
     
     <button className="p1t1_trial_button" onClick={show2}> <b>Open/Close Learning Content</b> </button>
     <div className={toggle2 ? "p1t1trial_none2" : "p1t1trial2"} >
       
       <ul className="content_list2" {...toggle2 ? "p1t1trial_none2" : null}>

        <li className="content_items2">
        <h5> In Turkish, as in English, Latin alphabets are used. There are 29 letters in Turkish.  The letters are: 
        A, B, C, Ç, D, E, F, G, Ğ, H, I,, İ, J, K, L, M, N, O, Ö, P, R, S, Ş, T, U, Ü, V, Y, Z.  The lower case of the  
        letters are: a, b, c, ç, d, e, f, g, ğ, h, ı, i, j, k, l, m, n, o, ö, p, r, s, ş, t, u, ü, v, y, z. </h5>
        

        </li> 


        <li className="content_items2">
        <h5>The different letters such as ç sounds as “ch”arm sound in English, ş sounds as “sh”ine. </h5>
        </li>


        <li className="content_items2">
          <h5>        The consonants are a, b, c, ç, d, e, f, g, ğ, h, j, k, l, m, n, p, r, s, ş, t, v, y, z. The vowels are e, ı, i, o, ö, u, ü.
          </h5>
        </li>



       </ul>
       

     </div>
      
     <div className="footer">
        2022 | ALI MERT INAL | DFKI | TU KAISERSLAUTERN 
    </div>
   

     




    </div>
  );
}