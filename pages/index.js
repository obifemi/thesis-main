import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Script from "next/script";



export default function Home() {



  const [value, setValue] = useState("");
  const [messages, setNewMessages] = useState([]);



  
  let bubblesFromUserOrAgent = messages.map((message, idx) => {
    return (

      <div id="child" key={idx}>
      <h5  key={idx} className={(message.from === "agent")?"right":"left"}>
       {(message.from === "agent") && "> "} 
        {message.text }
      </h5> 
      </div>

      
      
    );
    
  });

  const [userMessages, setUserMessages] = useState([]);


  



  let scroll = () => {
    var objDiv = document.getElementById("chat_all");
    objDiv.scrollTop = objDiv.scrollHeight;
  };


 
 

  let func1 = () => {
   
    let last = Array.from(
      document.querySelectorAll('.right')
    ).pop();
    console.log(last)
    event.preventDefault();
    let entrance=document.getElementById("entrance")
    let entrance2=document.getElementById("entrance2")
    entrance.className="scroll"
    entrance2.className="scroll"

  
    

    scroll();

  

    fetch(`/api/hello?input="${value}"`)
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        
        if (r.name.answers[0] === undefined) {
          
          
          
          let newAnswer= "I couldn't understand you. Can you please try again?"
          
          
          
          let latestMessages = [...messages, {from:"user", text: value}, {from:"agent", text: `${newAnswer}`}]
            
          
          

          setNewMessages(latestMessages);

          


        } else {
          const newAnswer = r.name.answers[0].answer;

          const latestMessages = [...messages, {from:"user", text: value}, {from:"agent", text: newAnswer}]
          setNewMessages(latestMessages);

          console.log(latestMessages)
          

        }

        
        setValue("");
      });}


    
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Chatbot_w/Kanta" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>


        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
        /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css"
        />
      </Head>

      <main className={styles.main}>
        {/* <ChatBody/> */}
        <div className="chat_comprehensive">
        <div className="chat_header">
            Welcome to chat! This is the first section in whichn I will be give-ing you the 4 grammatical rules of Turkish! 
          </div>
        <div className="chat_all" id="chat_all">

          <div className="chat_area" id="chat_area">

            <div id="messages"> {bubblesFromUserOrAgent} </div>
            
            {/* <div> {userMessages[1].text} </div> */}
            {/* <div className="right">  {tmpJsx[1]} </div> */}
            <div id="messages2"></div>
            <div id="entrance2">   <h5 className="right" id="entrance"> Hi there! I am the bot who will help you to learn some Turkish grammar! 😃 You can type hi or hello or any greeting word to start learning 😎  </h5>
            </div>

            <div className="scroll">
              
              <h3>asdasd</h3>{" "}
         
            </div>
            {/* <div className="scroll">
              <h3>asdasd</h3>{" "}
            </div> */}
            <div className="scroll">
              
              <h3>asdasd</h3>{" "}
         
            </div>

            <div className="scroll">
              
              <h3>asdasd</h3>{" "}
         
            </div>
            <div className="scroll">
              
              <h3>asdasd</h3>{" "}
         
            </div>
           
          </div>

          <div className="chat_form">
            <form action="">
              <input
                className="input_chat"
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button className="button_chat" onClick={() => {
          func1(); const func2=()=>{
            const userMessages = messages.filter(message=>message.from==="user")
            const agentMessages = messages.filter(message=>message.from==="agent")
            console.log("user input" + value)
            // console.log("bot question" + agentMessages[agentMessages.length].text)
            // if(agentMessages[ agentMessages.length-1].text === `Which of the following options is correct for "to book": a)kitapı b)kitabı c)kitaba d)kitapa` && value==="a" | "kitaba"){
            //     alert("Correct!")
           
            // }
           
          }; setTimeout(() => {
            func2();
          }, "2000");
            
            }}>
                {/* <i className="fa fa-home"/> */}
                <i className="fa fa-paper-plane fa-2x" aria-hidden="true" 	></i>

              </button>
              
              {/* <button onClick={(e)=>{
                e.preventDefault();
                const userMessages = messages.filter(message=>message.from==="user")
                const agentMessages = messages.filter(message=>message.from==="agent")
                // console.log("user input" + userMessages.text)
                console.log("bot question" + agentMessages[ agentMessages.length-1].text)
                console.log("value " + value)
                
                }}>get the user messages</button> */}
            </form>
            
          </div>
          
        </div>
        </div>
      </main>
    </div>
  );
}
