import React from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import ReactDOM from "react-dom";
// import logo from './logo.jpeg';

export default function Tasks() {
  return (
    <div className="tasks_container">

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

      <div className="welcome">
        <div className="welcome_title">
         <h4>THIS IS THE PAGE FOR SELECTING THE LEARNING CONTENT YOU WILL START</h4> 
          <h4>PLEASE SELECT THE #th LEARNING CONTENT</h4> 
        </div>

        
          </div>
  
          

      <div className="cards">
        <div className="card1 cardd">
          <div className="title_content"> <b>Content 1</b>  </div>

          <div className="content_body_1"> <h3>TURKISH ALPHABET </h3>  
          
          <h5> In this chapter, you will learn the basics of Turkish Language such as Turkish Alphabet. Learning the Turkish alphabet is one of the first steps you take if you want to learn Turkish.</h5>
          
          </div>

          <div className="tasks_footer">  </div>
        </div>

        <div className="card2 cardd">
          <div className="title_content"> <b>Content 2</b>  </div>

          <div className="content_body_1"> <h3>SOUND CHANGE PRODUCED IN THE
STEM BY SUFFIXATION </h3>  
          
          <h5> There are a number of contexts where the addition of a suffix causes a change in the
quality of the last consonant or vowel of a stem. Certain of these changes are confined to
specific lexical items, whereas others occur as part of a general phonological process in
the language </h5> </div>

          <div className="tasks_footer">  </div>
        </div>

        <div className="card3 cardd">
        <div className="title_content"> <b>Content 2</b>  </div>

<div className="content_body_1"> <h3>VOWEL HARMONY </h3>  

<h5> Vowel harmony is a phonological process which determines what vowel will appear in
all but the first syllable of a word. In roots with more than one syllable, the second vowel
harmonizes with the first one </h5> </div>
        </div>

        <div className="card4 cardd">
          <div className="title_content"> <b>Content 4</b>  </div>

          <div className="content_body_1"> <h3>SUFFIXATION </h3>  

<h5> Almost all suffixes in Turkish have more than one form. The initial consonant in some
suffixes and the vowels in almost all suffixes depend on the consonants or vowels that
precede them.</h5> </div>

          <div className="tasks_footer">  </div>
        </div>
        


      </div>    

      <div className="footer">
        2022 | ALI MERT INAL | DFKI | TU KAISERSLAUTERN 
    </div>
   

    </div>
  );
}
