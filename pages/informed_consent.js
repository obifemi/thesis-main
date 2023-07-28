import React from "react";
import Head from "next/head";
import Image from "next/image";
// import axios from "axios";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import ReactDOM from "react-dom";
// import logo from './logo.jpeg';

export default function Home2() {
  return (
    <div className="container">
      <Head>
        <title>Chatbot Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="consent">
        <div className="title">
          {" "}
          <h1 className="thesis_name">
            {" "}
            Effect of Conversational Agents on Learning and Cognitive Load{" "}
          </h1>{" "}
        </div>

        <div className="researcher">
          {" "}
          <h2> RESEARCHER </h2>
          <h3>NAME: ALI MERT INAL</h3>
          <h3>DEPARTMENT: COGNITIVE SCIENCE</h3>
          <h3>ADDRESS: DFKI, Trippstadter Str. 122, 67663 Kaiserslautern</h3>
          <h3>EMAIL: mert.inal@gmail.com</h3>{" "}
        </div>
        <hr />
        <h1>PURPOSE OF STUDY </h1>
      </div>

      <h5>
        {" "}
        You are being asked to take part in a research study. Before you decide
        to participate in this study, it is important that you understand why
        the research is being done and what it will involve. Please read the
        following information carefully. Please ask the researcher if there is
        anything that is not clear or if you need more information. The purpose
        of this study is to understand the effect of conversational agents on
        learning and cognitive load.
      </h5>

      <h5>
        {" "}
        Respectively, you are going to be asked to read and understand the
        information on Turkish language and after each section, you are goiıng
        to be asked to complete the task on the given information. <br />
        Required amount of time required of participants per session estimated
        as 10 minutes. Between the sessions, you can ask for a break in case you
        need.{" "}
      </h5>

      <h5>
        Your responses to this research will be anonymous. Every effort will be
        made by the researcher to preserve your confidentiality including the
        following: Assigning code names/numbers for participants that will be
        used on all research notes and documents.
      </h5>

      <h5>
        Your participation in this study is voluntary. It is up to you to decide
        whether or not to take part in this study. If you decide to take part in
        this study, you will be asked to click the submit button below this
        form. After you clicked the submit button, you are still free to
        withdraw at any time and without giving a reason. Withdrawing from this
        study will not affect the relationship you have, if any, with the
        researcher. If you withdraw from the study before data collection is
        completed, your data will be returned to you or destroyed.
      </h5>

      <h5>
        <b> CONSENT</b> <br />I have read and I understand the provided
        information and have had the opportunity to ask questions. I understand
        that my participation is voluntary and that I am free to withdraw at any
        time, without giving a reason and without cost. I understand that I will
        be given a copy of this consent form. I voluntarily agree to take part
        in this study.
      </h5>

      <button>SUBMIT</button>
    </div>
  );
}
