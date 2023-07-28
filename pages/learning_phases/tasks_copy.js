import React from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import styles from "../../styles/Home.module.css";
import { useState } from "react";
import ReactDOM from "react-dom";
// import logo from './logo.jpeg';
import Link from "next/link";



export default function Tasks() {

  const [toggle, setToggle] = useState(true)
  
  const show = (e) => {
    setToggle(!toggle);
    
     };

     const [toggle2, setToggle2] = useState(true)
  
     const show2 = (e) => {
       setToggle2(!toggle2);
       
        };
     
  
  return (
    <div className="tasks_container">
<Head>
<link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
        {/* <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script> */}
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script> */}
        {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script> */}

{/* <script src="../../assets/js/vendor/popper.min.js"></script>
<script src="../../dist/js/bootstrap.min.js"></script> */}
</Head>
{/* <body> */}

<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div class="dropdown-menu" aria-labelledby="dropdown01">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

<main role="main">


  <div class="jumbotron">
    <div class="container">
      <h1 class="display-3">Welcome to tasks page.</h1>
      <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
      <p><a class="btn btn-primary btn-lg" href="#" role="button" onClick={show}>Open first learning content »</a></p>
    </div>
  </div>

  <div className= {toggle ? "p1t1trial_none" : "p1t1trial_copy"}>
  In Turkish, as in English, Latin alphabets are used. There are 29 letters in Turkish. The letter are:



A, B, C, Ç, D, E, F, G, Ğ, H, I,, İ, J, K, L, M, N, O, Ö, P, R, S, Ş, T, U, Ü, V, Y, Z. The lower case of the 



letters are: a, b, c, ç, d, e, f, g, ğ, h, ı, i, j, k, l, m, n, o, ö, p, r, s, ş, t, u, ü, v, y, z.  

<p> Some examples of Turkish words: </p> 



    <p><a class="btn btn-primary btn-lg" href="#" role="button" onClick={show2}>Open the next learning content »</a></p>

  </div> 

  <div className= {toggle2 ? "p1t1trial_none" : "p1t1trial_copy_2"}>
  <p>
  In Turkish, as in English, Latin alphabets are used. There are 29 letters in Turkish. The letter are: A, B, C, Ç, D, E, F, G, Ğ, H, I,, İ, J, K, L, M, N, O, Ö, P, R, S, Ş, T, U, Ü, V, Y, Z. The lower case of the 
  letters are: a, b, c, ç, d, e, f, g, ğ, h, ı, i, j, k, l, m, n, o, ö, p, r, s, ş, t, u, ü, v, y, z.  
    </p> 


    <hr/>

  </div> 

</main>


  <div className="footer_p">
  <hr />
  <p >DFKI 2022</p>
  </div>






{/* </body> */}


   

    </div>
  );
}
