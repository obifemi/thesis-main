import Head from "next/head";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import { saveAs } from "file-saver";


export default function Home() {
  const [value, setValue] = useState("");
  const [messages, setNewMessages] = useState([]);
  let saveInputs=[]

  let bubblesFromUserOrAgent = messages.map((message, idx) => {
    return (
      <div id="child">
        <h5 key={idx} className={message.from === "agent" ? "right" : "left"}>
          {message.from === "agent" && "> "}
          {message.text}
        </h5>
      </div>
    );
  });

  const [userMessages, setUserMessages] = useState([]);

  let scroll = () => {
    var objDiv = document.getElementById("chat_all");
    objDiv.scrollTop = objDiv.scrollHeight;
  };
  
  let overlay_correct_open = () => {
    document.getElementById("overlay_correct").style.display = "block";
  }

  let emojisiz_overlay_correct_open = () =>{
    document.getElementById("emojisiz_overlay_correct").style.display = "block";

  }
 


  let func1 = () => {
    
    let last = Array.from(document.querySelectorAll(".right")).pop();
    console.log(last.textContent);
    event.preventDefault();
    let entrance = document.getElementById("entrance");
    let entrance2 = document.getElementById("entrance2");
    entrance.className = "scroll";
    entrance2.className = "scroll";

    // if (
    //   last.textContent ===
    //     `> Which of the following options is correct for "to book": a)kitapı b)kitabı c)kitaba d)kitapa` &&
    //   value === "kitaba"
    // ) {
    //   document.getElementById("overlay").style.display = "block";
    // }

    scroll();

    fetch(`api/hello?input="${value}"`)
      .then((r) => {
        return r.json();
      })
      .then((r) => {
        // console.log("value " + value);

        if (r.name.answers[0] === undefined) {
          // const elemm = document.createElement("span");
          // elemm.innerHTML=`adsadad`

          // text.innerHTML=`<p> adasda </p> <p>adasda </p>`

          // elem.classList.add('right');

          // let messagess=document.getElementById('messages2')
          // // a.innerHTML=`<p> adasda </p> <p>adasda </p>`
          // messagess.appendChild(elemm)
          // messagess.classList.add('right')

          // let newAnswer = messagess.innerHTML

          let newAnswer = "Sorry, I couldn't understand you.";

          // let elem = document.createElement("span");
          // let element_render =last.classList.add("red");
          // element_render =last.classList.remove("right");
          // element_render=last.innerHTML=` <p>asdad</p> <p>asdad5</p> `

          // let messages_div=document.getElementById('messages')
          // messages_div.appendChild(element_render)

          // console.log( "answer " + newAnswer);

          // const newAnswer = "Sorry, I dont understand you. Do you remember which learning content you were learning? The learning contens are: 1)Alphabet \n\n\n\n\n\n\n\n\n\n\n\n                   2)Vowels and Consonants          3)Vowel Harmony     ";

          let latestMessages = [
            ...messages,
            { from: "user", text: value },
            { from: "agent", text: `${newAnswer}` },
          ];

          setNewMessages(latestMessages);
        } else {
          const newAnswer = r.name.answers[0].answer;
          // console.log("answer " + newAnswer);

          const latestMessages = [
            ...messages,
            { from: "user", text: value },
            { from: "agent", text: newAnswer },
          ];
          setNewMessages(latestMessages);
        }
      });
    
      document.getElementById("input_chat").value = "";
    setValue("");



    
  };
  // function func2(){
  //   setTimeout(() => {
  //            const userMessages = messages.filter(message=>message.from==="user")
  //           const agentMessages = messages.filter(message=>message.from==="agent")
  //           console.log("user input" + userMessages[ userMessages.length-1].text)
  //           console.log("bot question" + agentMessages[ agentMessages.length-2].text)
  //   }, "3000")
  // }

  let i=0
  
let make_visible = function(){
  
  
  let el=document.getElementsByClassName('question')[i]
  let el2 =document.getElementsByClassName('answer')[i]
  el.style.display = "block";
  el2.style.display = "block"
  i=i+1
  scroll()
}
let array_answers=["Answers_test_part"]
const onClick = (event) => {
  // console.log(event.srcElement.className);
  
  array_answers.push(event.srcElement.className)
  console.log(array_answers)
}

function saveDynamicDataToFile(e) {
  // e.preventDefault();
  // const userMessages = messages.filter(message=>message.from==="user")
  // console.log(userMessages)
  // console.log(userMessages[userMessages.length-1].text)
  // console.log(userMessages[userMessages.length-2].text)
  // function write(item){
  //   saveInputs.push(item.text)
  //   // console.log(saveInputs)
  //   // console.log(item.text)

    
  
  // }
  var blob = new Blob([array_answers], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "dynamic.txt");
  
}


if (typeof window !== "undefined") {
  // Client-side-only code
  window.addEventListener('click', onClick);

}


  
  







//   let yeni = function() {
    
//     let second = function() {
//       console.log("ikinci soru")
//     }
     
//           let div = document.createElement('div');
//           let a = document.createElement('a');
//           a.className='link'
//           a.innerText= `1)bu
//           2)su
//           3)bu`
//           div.className="left"
//           div.textContent = '1)';

//           div.innerHTML += `Question is this anwers: \n`
//           div.appendChild(a)
          
         
           
//           div.className = 'right';
                 
//             //div.style.backgroundColor = "black";

//        document.getElementById("middle").appendChild(div);
//        scroll();
    
// };


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Chatbot_w/Kanta" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

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
          <div
            id="overlay_correct"
            onClick={() => {
              document.getElementById("overlay_correct").style.display = "none";
            }}
          >
            <h1 className="correct">YOUR ANSWER IS CORRECT! 👍 </h1>
          </div>
          <div
            id="emojisiz_overlay_correct"
            onClick={() => {
              document.getElementById("emojisiz_overlay_correct").style.display = "none";
            }}
          >
            <h1 className="correct">YOUR ANSWER IS CORRECT! </h1>
          </div>

       


          <div className="chat_header">Welcome to Second Learning Part!</div>
          <div className="chat_all" id="chat_all">
            <div className="chat_area" id="chat_area">
              <div id="messages"> {bubblesFromUserOrAgent} </div>
            

              {/* <div id="messages"> adasdadas</div>
              <div id="messages"> sadadasdas555 </div>
              {/* <div> {userMessages[1].text} </div> */}
              {/* <div className="right">  {tmpJsx[1]} </div> */}
              <div id="messages2"></div>
              <div id="entrance2">
                {" "}
                <h5 className="right" id="entrance">
                  {" "}
                  Hi there! In this session, I will ask you some questions on the Turkish grammar knowledge
                  which I have already given in a few minutes ago by chatting! You can click <a className="zero link" id="hebele" onClick={make_visible}>here</a>  to see the first
                  question. To choose the answer, you can click on the option which you think is correct.  {" "}
                </h5>
              </div>
                
                {/* <div id="text" className="viuv" onClick={yeni} ></div> */}
              <div id="middle" className="middle">
            {/* ilk 5 - emojili overlay */}
              <div className="question"> <b>Question 1: Which word is in the accusative case? </b>   </div>
                <div className="answer"> <p className="option" onClick={function(event){ make_visible()}}> <b> a) </b> kaba </p> <p className="option"  onClick={make_visible}> <b> b) </b> kitaba  </p> <p className="option"  onClick={make_visible}><b> c) </b>  kabın </p> <p className="option correc"  onClick={function(event){ make_visible()}}> <b>d)</b> kabı</p>  
                </div>

                <div className="question">Question 2: Which word is in the dative case?   </div>
                <div className="answer"> <p className="option" onClick={function(event){ make_visible()}}> <b>a) </b>çorabı </p> <p className="option correc"  onClick={function(event){ make_visible()}}> <b>b) </b>çoraba  </p> <p className="option"  onClick={make_visible}> <b> c) </b>çorabın </p> <p className="option"  onClick={make_visible}> <b>d) </b>çorapta </p>  
                </div>

                <div className="question">Question 3: Which word is in the locative case?   </div>
                <div className="answer"> <p className="option correc" onClick={function(event){ make_visible()}}> <b>a) </b> sende</p> <p className="option"  onClick={function(event){ make_visible()}}> <b>b) </b> sana</p> <p className="option"  onClick={make_visible}> <b>c)</b> senden</p> <p className="option"  onClick={make_visible}> <b>a)</b> seni</p>  
                </div>

                <div className="question">Question4: Which word is in the ablative case?   </div>
                <div className="answer"> <p className="option" onClick={function(event){ make_visible()}}> <b>a) </b> kapağa</p> <p className="option correc"  onClick={function(event){ make_visible()}}> <b>b)</b> kapaktan</p> <p className="option"  onClick={make_visible}> <b>c)</b> kapakta</p> <p className="option"  onClick={make_visible}> <b>d)</b> kapağın</p>  
                </div>

                <div className="question">Question 5: Which word is in the genitive case?  </div>
                <div className="answer"> <p className="option" onClick={function(event){ make_visible()}}> <b>a)</b> kapıyı </p> <p className="option"  onClick={make_visible}>  <b>b)</b> kapıya</p> <p className="option"  onClick={make_visible}> <b>c)</b>  kapıyı</p> <p className="option correc"  onClick={function(event){ make_visible()}}>  <b>d)</b>  kapının</p>  
                </div>

                <div className="question">Question 6: Which word is in the dative case?  </div>
                <div className="answer"> <p className="option" onClick={function(event){ make_visible()}}> <b>a)</b> keli </p> <p className="option correc"  onClick={make_visible}>  <b>b)</b> kele</p> <p className="option"  onClick={make_visible}> <b>c)</b>  kelde</p> <p className="option"  onClick={function(event){ make_visible()}}>  <b>d)</b>  kelin</p>  
                </div>

                <div className="question">Question 7: Which word is in the locative case?  </div>
                <div className="answer"> <p className="option correc" onClick={function(event){ make_visible()}}> <b>a)</b> tabakta </p> <p className="option"  onClick={make_visible}>  <b>b)</b> tabağa</p> <p className="option"  onClick={make_visible}> <b>c)</b>  tabağı</p> <p className="option"  onClick={function(event){ make_visible()}}>  <b>d)</b>  tabağın</p>  
                </div>
        
              {/* ikinci 5 - feedbacksiz */}
              <div className="question">Question 8: Which word is grammatically correct when you consider back/front vowel harmony rule?    </div>
                <div className="answer"> <p className="option" onClick={function(event){ make_visible()}}> <b>a)</b> ahenk</p> <p className="option"  onClick={make_visible}><b>b)</b> badem</p> <p className="option"  onClick={make_visible}><b>c)</b> geliyor</p> <p className="option correc"  onClick={function(event){ make_visible()}}><b>d)</b> böcek</p>  
                </div>

                <div className="question">Question 9: Which word is grammatically correct when you consider back/front vowel harmony rule?    </div>
                <div className="answer"> <p className="option correc" onClick={function(event){ make_visible()}}><b>a)</b> odun</p> <p className="option"  onClick={make_visible}><b>b)</b> ceylan</p> <p className="option"  onClick={make_visible}><b>c)</b> şişmanlar</p> <p className="option"  onClick={make_visible}><b>d)</b> anne</p>  
                </div>

                <div className="question">Question 10: Which word is grammatically correct when you consider back/front vowel harmony rule?   </div>
                <div className="answer"> <p className="option correc" onClick={function(event){ make_visible()}}><b>a)</b> ince</p> <p className="option"  onClick={make_visible}><b>b)</b> dahi</p> <p className="option"  onClick={make_visible}><b>c)</b> elma</p> <p className="option"  onClick={make_visible}><b>d)</b> dükkan</p>  
                </div>

                <div className="question">Question 11: Which word is grammatically correct when you consider back/front vowel harmony rule?  </div>
                <div className="answer"> <p className="option" onClick={function(event){ make_visible()}}><b>a)</b> lale</p> <p className="option correc"  onClick={function(event){ make_visible();}}><b>b)</b> kalın</p> <p className="option"  onClick={make_visible}><b>c)</b> kardinaller</p> <p className="option"  onClick={make_visible}><b>d)</b> anne</p>  
                </div>

                <div className="question">Question 12: Which word is grammatically correct when you consider back/front vowel harmony rule?   </div>
                <div className="answer"> <p className="option correc" onClick={function(event){ make_visible()}}><b>a)</b> üzerinde</p> <p className="option"  onClick={make_visible}><b>b)</b> viraj</p> <p className="option"  onClick={make_visible}><b>c)</b> cami</p> <p className="option"  onClick={make_visible}><b>d)</b> nişasta</p>  
                </div>

                <div className="question">Question 13: Which word is grammatically correct when you consider back/front vowel harmony rule?   </div>
                <div className="answer"> <p className="option correc" onClick={function(event){ make_visible()}}><b>a)</b> ipte</p> <p className="option"  onClick={make_visible}><b>b)</b> kapişon</p> <p className="option"  onClick={make_visible}><b>c)</b> havari</p> <p className="option"  onClick={make_visible}><b>d)</b> zebur</p>  
                </div>

                <div className="question">Question 14: Which word is grammatically correct when you consider back/front vowel harmony rule?   </div>
                <div className="answer"> <p className="option correc" onClick={function(event){ make_visible()}}><b>a)</b> kalkık</p> <p className="option"  onClick={make_visible}><b>b)</b> kalori</p> <p className="option"  onClick={make_visible}><b>c)</b> parke</p> <p className="option"  onClick={make_visible}><b>d)</b> pastahane</p>  
                </div>
                {/* son 5 EMOJİSİZ FEEDBACK */}

                <div className="question">Question 15: Which word is grammatically correct when you consider rounding vowel harmony? </div>
                <div className="answer"> <p className="option" onClick={function(event){ make_visible()}}><b>a)</b> boyuyor</p> <p className="option correc"  onClick={function(event){ make_visible()}}><b>b)</b> çocuk</p> <p className="option"  onClick={make_visible}><b>c)</b> savur</p> <p className="option"  onClick={make_visible}><b>d)</b> donör</p>
                </div>

                <div className="question">Question 16: Which word is grammatically correct when you consider the rounding vowel harmony?   </div>
                <div className="answer"> <p className="option" onClick={function(event){ make_visible()}}><b>a)</b> çamur</p> <p className="option correc"  onClick={function(event){ make_visible()}}><b>b)</b> öykü</p> <p className="option"  onClick={make_visible}><b>c)</b> yağmur</p> <p className="option"  onClick={make_visible}><b>d)</b> avuç</p>  
                </div>

                <div className="question">Question 17: Which word is grammatically correct when you consider rounding vowel harmony rule?   </div>
                <div className="answer"> <p className="option" onClick={function(event){ make_visible()}}><b>a)</b>  kavun </p> <p className="option correc"  onClick={function(event){ make_visible()}}><b>b)</b> öneri</p> <p className="option"  onClick={make_visible}><b>c)</b> kavruk</p> <p className="option"  onClick={make_visible}><b>d)</b> akıyor</p>  
                </div>

                <div className="question">Question 18: Which word is grammatically correct when you consider rounding vowel harmony rule?   </div>
                <div className="answer"> <p className="option" onClick={function(event){ make_visible()}}><b>a)</b> bordo</p> <p className="option correc"  onClick={function(event){ make_visible()}}><b>b)</b> kedi</p> <p className="option"  onClick={make_visible}><b>c)</b> savur</p> <p className="option"  onClick={make_visible}><b>d)</b> malum</p>  
                </div>

                <div className="question">Question 19: Which  word is grammatically correct when you consider rounding vowel harmony rule?  </div>
                <div className="answer"> <p className="option correc" onClick={function(event){ make_visible()}}><b>a)</b> uzay</p> <p className="option"  onClick={make_visible}><b>b)</b>  radyo</p> <p className="option"  onClick={make_visible}><b>c)</b> patron</p> <p className="option"  onClick={make_visible}><b>d)</b> avuç</p>  
                </div>

                <div className="question">Question 20: Which  word is grammatically correct when you consider rounding vowel harmony rule?  </div>
                <div className="answer"> <p className="option correc" onClick={function(event){ make_visible()}}><b>a)</b> elçi</p> <p className="option"  onClick={make_visible}><b>b)</b>  kamyon</p> <p className="option"  onClick={make_visible}><b>c)</b> vakur </p> <p className="option"  onClick={make_visible}><b>d)</b> kavuş</p>  
                </div>

                <div className="question">Question 21: Which  word is grammatically correct when you consider rounding vowel harmony rule?  </div>
                <div className="answer"> <p className="option" onClick={function(event){ }}><b>a)</b> yağmur</p> <p className="option"  onClick={function(event){ }}><b>b)</b>  konsolos</p> <p className="option correc"  onClick={function(event){ }}><b>c)</b> orak</p> <p className="option"  onClick={function(event){ }}><b>d)</b> avurt</p>  
                </div>

                {/* <div className="question">That was the end of the test! You can click on "Save" button.  </div>
                <div className="answer"> <button onClick={saveDynamicDataToFile}>save</button>  </div> */}



              </div>

                <div className="scroll">
                <h3>asdasd</h3>{" "}
              </div> 
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

            
          </div>
          <button onClick={saveDynamicDataToFile}>save</button>
        </div>
      </main>
    </div>
  );
}
