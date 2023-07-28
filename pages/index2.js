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
  let emojili_overlay_wrong_open = () =>{
    document.getElementById("emojili_overlay_wrong").style.display = "block";

  }

  let emojili_overlay_wrong_open2 = () =>{
    document.getElementById("emojili_overlay_wrong2").style.display = "block";

  }
  let emojili_overlay_wrong_open3 = () =>{
    document.getElementById("emojili_overlay_wrong3").style.display = "block";

  }
  let emojili_overlay_wrong_open4 = () =>{
    document.getElementById("emojili_overlay_wrong4").style.display = "block";

  }
  let emojili_overlay_wrong_open5 = () =>{
    document.getElementById("emojili_overlay_wrong5").style.display = "block";

  }

  let emojili_overlay_wrong_open6 = () =>{
    document.getElementById("emojili_overlay_wrong6").style.display = "block";

  }

  let emojili_overlay_wrong_open7 = () =>{
    document.getElementById("emojili_overlay_wrong7").style.display = "block";

  }

  let emojisiz_overlay_wrong_open = () =>{
    document.getElementById("emojisiz_overlay_wrong").style.display = "block";

  }

  let emojisiz_overlay_wrong_open2 = () =>{
    document.getElementById("emojisiz_overlay_wrong2").style.display = "block";

  }
  let emojisiz_overlay_wrong_open3 = () =>{
    document.getElementById("emojisiz_overlay_wrong3").style.display = "block";

  }
  let emojisiz_overlay_wrong_open4 = () =>{
    document.getElementById("emojisiz_overlay_wrong4").style.display = "block";

  }
  let emojisiz_overlay_wrong_open5 = () =>{
    document.getElementById("emojisiz_overlay_wrong5").style.display = "block";

  }

  let emojisiz_overlay_wrong_open6 = () =>{
    document.getElementById("emojisiz_overlay_wrong6").style.display = "block";

  }

  let emojisiz_overlay_wrong_open7 = () =>{
    document.getElementById("emojisiz_overlay_wrong7").style.display = "block";

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
let array_answers=["lütfen artık "]
const onClick = (event) => {
  
  
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
            id="emojili_overlay_wrong"
            onClick={() => {
              document.getElementById("emojili_overlay_wrong").style.display = "none";
            }}
          >
            <h1 className="correct">YOUR ANSWER IS INCORRECT! 👎  </h1> 
            <h3 className="correct2">Nouns Turkish nouns have no grammatical gender, but have six grammatical cases: nominative or absolute (used for the subject or an indefinite direct object), accusative (used for a definite direct object), dative (= to), locative (= in), ablative (= from), genitive (= of).
            In Turkish, cases are applied through suffixes. Suffix "a/e" for dativ, "ı/i" for accusativ, "ın/in" for genitive, "ta/da" for locative, "den/tan" for ablative. </h3>
            <h3 className="correct2 correct3">In this example, kitaba is dativ case = to book, kitapta is locative case = at book, kitabı is accusative case (correct answer!), kitabın is genitive case = of book  </h3>
            

          </div>

          <div
            id="emojili_overlay_wrong2"
            onClick={() => {
              document.getElementById("emojili_overlay_wrong2").style.display = "none";
            }}
          >
            <h1 className="correct">YOUR ANSWER IS INCORRECT! 👎  </h1> 
            <h3 className="correct2">Nouns Turkish nouns have no grammatical gender, but have six grammatical cases: nominative or absolute (used for the subject or an indefinite direct object), accusative (used for a definite direct object), dative (= to), locative (= in), ablative (= from), genitive (= of).
            In Turkish, cases are applied through suffixes. Suffix "a/e" for dativ, "ı/i" for accusativ, "ın/in" for genitive, "ta/da" for locative, "den/tan" for ablative.
            </h3>
            <h3 className="correct2 correct3">In this example, inanc(ı) is accusative case, inanc(a) is dative case  (correct answer!) = to belief , inanc(ın) is genitive case = from belief, inançt(a) is locative case = at belief  </h3>
            

          </div>

          <div
            id="emojili_overlay_wrong3"
            onClick={() => {
              document.getElementById("emojili_overlay_wrong3").style.display = "none";
            }}
          >
            <h1 className="correct">YOUR ANSWER IS INCORRECT! 👎  </h1> 
            <h3 className="correct2">Nouns Turkish nouns have no grammatical gender, but have six grammatical cases: nominative or absolute (used for the subject or an indefinite direct object), accusative (used for a definite direct object), dative (= to), locative (= in), ablative (= from), genitive (= of).
            In Turkish, cases are applied through suffixes. Suffix "a/e" for dativ, "ı/i" for accusativ, "ın/in" for genitive, "ta/da" for locative, "den/tan" for ablative.
            </h3>
            <h3 className="correct2 correct3">In this example, biz(i) is accusative case, biz(e) is dative case = to us , biz(de) is locative case (correct answer) = at us, biz(den) is ablative case = from us  </h3>
            

          </div>

          <div
            id="emojili_overlay_wrong4"
            onClick={() => {
              document.getElementById("emojili_overlay_wrong4").style.display = "none";
            }}
          >
            <h1 className="correct">YOUR ANSWER IS INCORRECT! 👎  </h1> 
            <h3 className="correct2">Nouns Turkish nouns have no grammatical gender, but have six grammatical cases: nominative or absolute (used for the subject or an indefinite direct object), accusative (used for a definite direct object), dative (= to), locative (= in), ablative (= from), genitive (= of).
            In Turkish, cases are applied through suffixes. Suffix "a/e" for dativ, "ı/i" for accusativ, "ın/in" for genitive, "ta/da" for locative, "den/tan" for ablative.
            </h3>
            <h3 className="correct2 correct3">In this example, yaprağ(a) is dativ case = to leaf, yaprak(tan) is ablative case  (correct answer!) = from leaf , yaprak(ta) is locative case = at leaf, yaprağ(ın) is genitive case = of leaf  </h3>
            

          </div>

          <div
            id="emojili_overlay_wrong5"
            onClick={() => {
              document.getElementById("emojili_overlay_wrong5").style.display = "none";
            }}
          >
            <h1 className="correct">YOUR ANSWER IS INCORRECT! 👎  </h1> 
            <h3 className="correct2">Nouns Turkish nouns have no grammatical gender, but have six grammatical cases: nominative or absolute (used for the subject or an indefinite direct object), accusative (used for a definite direct object), dative (= to), locative (= in), ablative (= from), genitive (= of).
            In Turkish, cases are applied through suffixes. Suffix "a/e" for dativ, "ı/i" for accusativ, "ın/in" for genitive, "ta/da" for locative, "den/tan" for ablative.
            </h3>
            <h3 className="correct2 correct3">In this example, kanıt(ı) is accusative case, kanıt(a) is dative case = to proof , kanıt(ın) is genitive case (correct answer!) = of proof , kanıt(ta) is locative case = at proof  </h3>
            

          </div>

          <div
            id="emojili_overlay_wrong6"
            onClick={() => {
              document.getElementById("emojili_overlay_wrong6").style.display = "none";
            }}
          >
            <h1 className="correct">YOUR ANSWER IS INCORRECT! 👎  </h1> 
            <h3 className="correct2">Nouns Turkish nouns have no grammatical gender, but have six grammatical cases: nominative or absolute (used for the subject or an indefinite direct object), accusative (used for a definite direct object), dative (= to), locative (= in), ablative (= from), genitive (= of).
            In Turkish, cases are applied through suffixes. Suffix "a/e" for dativ, "ı/i" for accusativ, "ın/in" for genitive, "ta/da" for locative, "den/tan" for ablative.
            </h3>
            <h3 className="correct2 correct3">In this example,  kar(a) is dative case = to snow, kar(ı) is accusative case (correct answer!), kar(ın) is genitive case = of snow, kar(da) is locative case = at snow  </h3>
            

          </div>



          <div
            id="emojili_overlay_wrong7"
            onClick={() => {
              document.getElementById("emojili_overlay_wrong7").style.display = "none";
            }}
          >
            <h1 className="correct">YOUR ANSWER IS INCORRECT! 👎  </h1> 
            <h3 className="correct2">Nouns Turkish nouns have no grammatical gender, but have six grammatical cases: nominative or absolute (used for the subject or an indefinite direct object), accusative (used for a definite direct object), dative (= to), locative (= in), ablative (= from), genitive (= of).
            In Turkish, cases are applied through suffixes. Suffix "a/e" for dativ, "ı/i" for accusativ, "ın/in" for genitive, "ta/da" for locative, "den/tan" for ablative.
            </h3>
            <h3 className="correct2 correct3">In this example, bar(ı) is accusative case, bar(a) is dative case  (correct answer!)  = to bar , bar(ın) is genitive case = of bar, bar(da) is locative case = at bar  </h3>
            

          </div>

          <div
            id="emojisiz_overlay_wrong"
            onClick={() => {
              document.getElementById("emojisiz_overlay_wrong").style.display = "none";
            }}
          >
            <h1 className="correct">YOUR ANSWER IS INCORRECT!</h1> 
            <h3 className="correct2">
             In a Turkish, according to rounding vowel harmony, unrounded vowels (a, e, ı, i) are followed by unrounded words (a, e, ı, i); rounded vowels (o, ö, u, ü) are followed by rounded closed (u, ü) or unrounded open (a, e) vowels after rounded vowels.  Also, vowels "o" and "ö" take place only at the first syllable.
            </h3>
            <h3 className="correct2 correct3">In this example, the second option "kolcu" properly fits this rule. In this word, the first vowel is "o" which is rounded and the second vowel is "u" which is rounded closed. </h3>
            

          </div>

          <div
            id="emojisiz_overlay_wrong2"
            onClick={() => {
              document.getElementById("emojisiz_overlay_wrong2").style.display = "none";
            }}
          >
            <h1 className="correct">YOUR ANSWER IS INCORRECT!</h1> 
            <h3 className="correct2">
            In a Turkish, according to rounding vowel harmony, unrounded vowels (a, e, ı, i) are followed by unrounded words (a, e, ı, i); rounded vowels (o, ö, u, ü) are followed by rounded closed (u, ü) or unrounded open (a, e) vowels after rounded vowels. Also, vowels "o" and "ö" take place only at the first syllable.           </h3>
            <h3 className="correct2 correct3">In this example, the second option "orman" properly fits this rule. In this word, the first vowel is "o" which is rounded and the second vowel is "a" which is unrounded open. </h3>
            

          </div>

          <div
            id="emojisiz_overlay_wrong3"
            onClick={() => {
              document.getElementById("emojisiz_overlay_wrong3").style.display = "none";
            }}
          >
            <h1 className="correct">YOUR ANSWER IS INCORRECT!</h1> 
            <h3 className="correct2">
            In a Turkish, according to rounding vowel harmony, unrounded vowels (a, e, ı, i) are followed by unrounded words (a, e, ı, i); rounded vowels (o, ö, u, ü) are followed by rounded closed (u, ü) or unrounded open (a, e) vowels after rounded vowels. Also, vowels "o" and "ö" take place only at the first syllable.          </h3>
            <h3 className="correct2 correct3">In this example, the second option "erir" properly fits this rule. In this word, the first vowel is "e" which is unrounded open and the second vowel is "i" which is unrounded close. </h3>
            

          </div>

          <div
            id="emojisiz_overlay_wrong4"
            onClick={() => {
              document.getElementById("emojisiz_overlay_wrong4").style.display = "none";
            }}
          >
            <h1 className="correct">YOUR ANSWER IS INCORRECT!</h1> 
            <h3 className="correct2">
             In a Turkish, according to roundging vowel harmony, straight vowels (a, e, ı, i) are followed by straight words (a, e, ı, i); rounded vowels (o, ö, u, ü, ) are followed by rounded narrow (u, ü) or flat wide (a, e) vowels after round vowels. Also, vowels "o" and "ö" take place only at the first syllable.  
            </h3>
            <h3 className="correct2 correct3">In this example, the second option "çocuk" properly fits this rule. In this word, the first vowel is "o" which is rounded and the second vowel is "u" which is rounded narrow. </h3>
            

          </div>

          <div
            id="emojisiz_overlay_wrong5"
            onClick={() => {
              document.getElementById("emojisiz_overlay_wrong5").style.display = "none";
            }}
          >
            <h1 className="correct">YOUR ANSWER IS INCORRECT!</h1> 
            <h3 className="correct2">
            In a Turkish, according to rounding vowel harmony, unrounded vowels (a, e, ı, i) are followed by unrounded words (a, e, ı, i); rounded vowels (o, ö, u, ü, ) are followed by rounded closed (u, ü) or unrounded open (a, e) vowels after rounded vowels. Also, vowels "o" and "ö" take place only at the first syllable.             </h3>
            <h3 className="correct2 correct3">In this example, the second option "kısa" properly fits this rule. In this word, the first vowel is "ı" which is unrounded closed and the second vowel is "a" which is unrounded open. </h3>
            

          </div>

          <div
            id="emojisiz_overlay_wrong6"
            onClick={() => {
              document.getElementById("emojisiz_overlay_wrong6").style.display = "none";
            }}
          >
            <h1 className="correct">YOUR ANSWER IS INCORRECT!</h1> 
            <h3 className="correct2">
            In a Turkish, according to rounding vowel harmony, unrounded vowels (a, e, ı, i) are followed by unrounded words (a, e, ı, i); rounded vowels (o, ö, u, ü, ) are followed by rounded closed (u, ü) or unrounded open (a, e) vowels after rounded vowels. Also, vowels "o" and "ö" take place only at the first syllable.             </h3>
            <h3 className="correct2 correct3">In this example, the second option "mutfak" properly fits this rule. In this word, the first vowel is "u" which is rounded closed and the second vowel is "a" which is unrounded open. </h3>
            

          </div>

          <div
            id="emojisiz_overlay_wrong7"
            onClick={() => {
              document.getElementById("emojisiz_overlay_wrong7").style.display = "none";
            }}
          >
            <h1 className="correct">YOUR ANSWER IS INCORRECT!</h1> 
            <h3 className="correct2">
            In a Turkish, according to rounding vowel harmony, unrounded vowels (a, e, ı, i) are followed by unrounded words (a, e, ı, i); rounded vowels (o, ö, u, ü, ) are followed by rounded closed (u, ü) or unrounded open (a, e) vowels after rounded vowels. Also, vowels "o" and "ö" take place only at the first syllable.             </h3>
            <h3 className="correct2 correct3">In this example, the second option "omuz" properly fits this rule. In this word, the first vowel is "o" which is rounded open and the second vowel is "u" which is rounded closed. </h3>
            

          </div>


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
                  which I have already given in a few minutes ago by chatting! You can click <a className="zero link" onClick={make_visible}>here</a>  to see the first
                  question. To choose the answer, you can click on the option which you think is correct.  {" "}
                </h5>
                {/* <a className="link" onClick={make_visible}>BAM!</a> */}
              </div>
                
                {/* <div id="text" className="viuv" onClick={yeni} ></div> */}
              <div id="middle" className="middle">
            {/* ilk 5 - emojili overlay */}
              <div className="question"> <b>Question 1: Which word is in the accusative case? </b>   </div>
                <div className="answer"> <p className="option wrong" onClick={function(event){ make_visible();emojili_overlay_wrong_open()}}> <b> a) </b> kitaba </p> <p className="option wrong"  onClick={function(event){ make_visible();emojili_overlay_wrong_open()}}> <b> b) </b> kitapta  </p> <p className="option wrong"  onClick={function(event){ make_visible();emojili_overlay_wrong_open()}}><b> c) </b>  kitabın </p> <p className="option correc"  onClick={function(event){ make_visible();overlay_correct_open()}}> <b>d)</b> kitabı</p>  
                </div>

                <div className="question">Question 2: Which word is in the dative case?   </div>
                <div className="answer"> <p className="option wrong" onClick={function(event){ make_visible();emojili_overlay_wrong_open2()}}> <b>a) </b>inancı </p> <p className="option correc"  onClick={function(event){ make_visible();overlay_correct_open();}}> <b>b) </b>inanca  </p> <p className="option wrong"  onClick={function(event){ make_visible();emojili_overlay_wrong_open2()}}> <b> c) </b>inancın </p> <p className="option wrong"  onClick={function(event){ make_visible();emojili_overlay_wrong_open2()}}> <b>d) </b>inançta </p>  
                </div>

                <div className="question">Question 3: Which word is in the locative case?   </div>
                <div className="answer"> <p className="option correc" onClick={function(event){ make_visible();overlay_correct_open()}}> <b>a) </b> bizde</p> <p className="option wrong"  onClick={function(event){ make_visible();emojili_overlay_wrong_open3()}}> <b>b) </b> bize</p> <p className="option wrong"  onClick={function(event){ make_visible();emojili_overlay_wrong_open3()}}> <b>c)</b> bizden</p> <p className="option wrong"  onClick={function(event){ make_visible();emojili_overlay_wrong_open3()}}> <b>a)</b> bizi</p>  
                </div>

                <div className="question">Question4: Which word is in the ablative case?   </div>
                <div className="answer"> <p className="option wrong" onClick={function(event){ make_visible();emojili_overlay_wrong_open4()}}> <b>a) </b> yaprağa</p> <p className="option correc"  onClick={function(event){ make_visible();overlay_correct_open();}}> <b>b)</b> yapraktan</p> <p className="option wrong"  onClick={function(event){ make_visible();emojili_overlay_wrong_open4()}}> <b>c)</b> yaprakta</p> <p className="option wrong"  onClick={function(event){ make_visible();emojili_overlay_wrong_open4()}}> <b>d)</b> yaprağın</p>  
                </div>

                <div className="question">Question 5: Which word is in the genitive case?  </div>
                <div className="answer"> <p className="option wrong" onClick={function(event){ make_visible();emojili_overlay_wrong_open5()}}> <b>a)</b> kanıtı </p> <p className="option wrong"  onClick={function(event){ make_visible();emojili_overlay_wrong_open5()}}>  <b>b)</b> kanıta</p> <p className="option wrong"  onClick={function(event){ make_visible();emojili_overlay_wrong_open5()}}> <b>c)</b>  kanıtta</p> <p className="option correc"  onClick={function(event){ make_visible();overlay_correct_open()}}>  <b>d)</b>  kanıtın</p>  
                </div>

                <div className="question">Question 6: Which word is in the accusative case?  </div>
                <div className="answer"> <p className="option wrong" onClick={function(event){ make_visible();emojili_overlay_wrong_open6()}}> <b>a)</b> kara </p> <p className="option wrong"  onClick={function(event){ make_visible();emojili_overlay_wrong_open6()}}>  <b>b)</b> karda</p> <p className="option wrong" onClick={function(event){ make_visible();emojili_overlay_wrong_open6()}}> <b>c)</b>  kardan</p> <p className="option correc"  onClick={function(event){ make_visible();overlay_correct_open()}}>  <b>d)</b>  karı</p>  
                </div>

                <div className="question">Question 7: Which word is in the dative case?  </div>
                <div className="answer"> <p className="option correc" onClick={function(event){ make_visible();overlay_correct_open()}}> <b>a)</b> bara </p> <p className="option wrong"  onClick={function(event){ make_visible();emojili_overlay_wrong_open7()}}>  <b>b)</b> barda</p> <p className="option wrong"  onClick={function(event){ make_visible();emojili_overlay_wrong_open7()}}> <b>c)</b>  bardan</p> <p className="option wrong"  onClick={function(event){ make_visible();emojili_overlay_wrong_open7()}}>  <b>d)</b>  barı</p>  
                </div>

                {/* <div className="question">Question 5: Which word is in the ablative case?  </div>
                <div className="answer"> <p className="option" onClick={function(event){ make_visible();emojili_overlay_wrong_open5()}}> <b>a)</b> odaya </p> <p className="option"  onClick={function(event){ make_visible();emojili_overlay_wrong_open5()}}>  <b>b)</b> odada</p> <p className="option"  onClick={function(event){ make_visible();emojili_overlay_wrong_open5()}}> <b>c)</b>  odayı</p> <p className="option"  onClick={function(event){ make_visible();overlay_correct_open()}}>  <b>d)</b>  odadan</p>  
                </div> */}
        
              {/* ikinci 5 - feedbacksiz */}
              <div className="question">Question 8: Which  word is grammatically correct when you consider back/front vowel harmony rule?    </div>
                <div className="answer"> <p className="option wrong" onClick={function(event){ make_visible()}}> <b>a)</b> ahenk</p> <p className="option wrong"  onClick={make_visible}><b>b)</b> badem</p> <p className="option wrong"  onClick={make_visible}><b>c)</b> geliyor</p> <p className="option correc"  onClick={function(event){ make_visible()}}><b>d)</b> böcek</p>  
                </div>

                <div className="question">Question 9: Which word is grammatically correct when you consider back/front vowel harmony rule?    </div>
                <div className="answer"> <p className="option correc" onClick={function(event){ make_visible()}}><b>a)</b> odun</p> <p className="option wrong"  onClick={make_visible}><b>b)</b> ceylan</p> <p className="option wrong"  onClick={make_visible}><b>c)</b> şişmanlar</p> <p className="option wrong"  onClick={make_visible}><b>d)</b> anne</p>  
                </div>

                <div className="question">Question 10: Which word is grammatically correct when you consider back/front vowel harmony rule?   </div>
                <div className="answer"> <p className="option correc" onClick={function(event){ make_visible()}}><b>a)</b> ince</p> <p className="option wrong"  onClick={make_visible}><b>b)</b> dahi</p> <p className="option wrong"  onClick={make_visible}><b>c)</b> elma</p> <p className="option wrong"  onClick={make_visible}><b>d)</b> dükkan</p>  
                </div>

                <div className="question">Question 11: Which word is grammatically correct when you consider back/front vowel harmony rule?  </div>
                <div className="answer"> <p className="option wrong" onClick={function(event){ make_visible()}}><b>a)</b> lale</p> <p className="option correc"  onClick={function(event){ make_visible();}}><b>b)</b> kalın</p> <p className="option wrong"  onClick={make_visible}><b>c)</b> kardinaller</p> <p className="option wrong"  onClick={make_visible}><b>d)</b> anne</p>  
                </div>

                <div className="question">Question 12: Which word is grammatically correct when you consider back/front vowel harmony rule?   </div>
                <div className="answer"> <p className="option correc" onClick={function(event){ make_visible()}}><b>a)</b> üzerinde</p> <p className="option wrong"  onClick={make_visible}><b>b)</b> viraj</p> <p className="option wrong"  onClick={make_visible}><b>c)</b> cami</p> <p className="option wrong"  onClick={make_visible}><b>d)</b> nişasta</p>  
                </div>

                <div className="question">Question 13: Which word is grammatically correct when you consider back/front vowel harmony rule?  </div>
                <div className="answer"> <p className="option wrong" onClick={function(event){ make_visible()}}><b>a)</b> arkaik</p> <p className="option wrong"  onClick={function(event){ make_visible();}}><b>b)</b> kardiyo</p> <p className="option wrong"  onClick={make_visible}><b>c)</b> belboy</p> <p className="option correc"  onClick={make_visible}><b>d)</b> emzik</p>  
                </div>

                <div className="question">Question 14: Which word is grammatically correct when you consider back/front vowel harmony rule?   </div>
                <div className="answer"> <p className="option wrong" onClick={function(event){ make_visible()}}><b>a)</b> kamber</p> <p className="option wrong"  onClick={make_visible}><b>b)</b> kore</p> <p className="option wrong"  onClick={make_visible}><b>c)</b> keltoş</p> <p className="option correc"  onClick={make_visible}><b>d)</b> narkoz</p>  
                </div>


                {/* son 5 EMOJİSİZ FEEDBACK */}

                <div className="question">Question 15: Which word is grammatically correct when you consider rounding vowel harmony? </div>
                <div className="answer"> <p className="option wrong" onClick={function(event){ make_visible();emojisiz_overlay_wrong_open()}}><b>a)</b> elmo</p> <p className="option correc"  onClick={function(event){ make_visible();emojisiz_overlay_correct_open()}}><b>b)</b> kolcu</p> <p className="option wrong"  onClick={function(event){ make_visible();emojisiz_overlay_wrong_open()}}><b>c)</b> insün</p> <p className="option wrong"  onClick={function(event){ make_visible();emojisiz_overlay_wrong_open()}}><b>d)</b> kayuk</p>
                </div>

                <div className="question">Question 16: Which word is grammatically correct when you consider the rounding vowel harmony?   </div>
                <div className="answer"> <p className="option wrong" onClick={function(event){ make_visible();emojisiz_overlay_wrong_open2()}}><b>a)</b> okuyor</p> <p className="option correc"  onClick={function(event){ make_visible();emojisiz_overlay_correct_open()}}><b>b)</b> orman</p> <p className="option wrong"  onClick={function(event){ make_visible();emojisiz_overlay_wrong_open2()}}><b>c)</b> akıyor</p> <p className="option wrong"  onClick={function(event){ make_visible();emojisiz_overlay_wrong_open2()}}><b>d)</b> avuç</p>  
                </div>

                <div className="question">Question 17: Which word is grammatically correct when you consider rounding vowel harmony rule?   </div>
                <div className="answer"> <p className="option wrong" onClick={function(event){ make_visible();emojisiz_overlay_wrong_open3()}}><b>a)</b>  kavun </p> <p className="option correc"  onClick={function(event){ make_visible();emojisiz_overlay_correct_open()}}><b>b)</b> erir</p> <p className="option wrong"  onClick={function(event){ make_visible();emojisiz_overlay_wrong_open3()}}><b>c)</b> planör</p> <p className="option wrong"  onClick={function(event){ make_visible();emojisiz_overlay_wrong_open3()}}><b>d)</b> motorlar</p>  
                </div>

                <div className="question">Question 18: Which word is grammatically correct when you consider rounding vowel harmony rule?   </div>
                <div className="answer"> <p className="option wrong" onClick={function(event){ make_visible();emojisiz_overlay_wrong_open4()}}><b>a)</b> bununki</p> <p className="option correc"  onClick={function(event){ make_visible();emojisiz_overlay_correct_open()}}><b>b)</b> çocuk</p> <p className="option wrong"  onClick={function(event){ make_visible();emojisiz_overlay_wrong_open4()}}><b>c)</b> savur</p> <p className="option wrong"  onClick={function(event){ make_visible();emojisiz_overlay_wrong_open4()}}><b>d)</b> çokomel</p>  
                </div>

                <div className="question">Question 19: Which  word is grammatically correct when you consider rounding vowel harmony rule?  </div>
                <div className="answer"> <p className="option correc" onClick={function(event){ make_visible();emojisiz_overlay_correct_open()}}><b>a)</b> kısa</p> <p className="option wrong"  onClick={function(event){ make_visible();emojisiz_overlay_wrong_open5()}}><b>b)</b> dublör</p> <p className="option wrong"  onClick={function(event){ make_visible();emojisiz_overlay_wrong_open5()}}><b>c)</b> baron</p> <p className="option wrong"  onClick={function(event){ make_visible();emojisiz_overlay_wrong_open5()}}><b>d)</b> avuç</p>  
                </div>

                <div className="question">Question 20: Which word is grammatically correct when you consider rounding vowel harmony rule?   </div>
                <div className="answer"> <p className="option wrong" onClick={function(event){ make_visible();emojisiz_overlay_wrong_open6()}}><b>a)</b> banyo</p> <p className="option correc"  onClick={function(event){ make_visible();emojisiz_overlay_correct_open()}}><b>b)</b> mutfak</p> <p className="option wrong"  onClick={function(event){ make_visible();emojisiz_overlay_wrong_open6()}}><b>c)</b> abajur</p> <p className="option wrong"  onClick={function(event){ make_visible();emojisiz_overlay_wrong_open6()}}><b>d)</b> pardesü</p>  
                </div>

                <div className="question">Question 21: Which  word is grammatically correct when you consider rounding vowel harmony rule?  </div>
                <div className="answer"> <p className="option correc" onClick={function(event){ emojisiz_overlay_correct_open();make_visible()}}><b>a)</b> omuz</p> <p className="option wrong"  onClick={function(event){ emojisiz_overlay_wrong_open7();make_visible()}}><b>b)</b> odyolog</p> <p className="option wrong"  onClick={function(event){ emojisiz_overlay_wrong_open7();make_visible()}}><b>c)</b> profesör</p> <p className="option wrong"  onClick={function(event){ emojisiz_overlay_wrong_open7();make_visible()}}><b>d)</b> pamuk</p>  
                </div>

                <div className="question">That was the last question! You can click on "Save" button.  </div>
                <div className="answer"> <button onClick={saveDynamicDataToFile}>save</button>  </div>




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
          
        </div>
      </main>
    </div>
  );
}


