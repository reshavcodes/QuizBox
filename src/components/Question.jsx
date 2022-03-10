import questions from "../data";

import { useState, useEffect } from "react";
import Footer from './Footer'


import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import QuestionCard from "./QuestionCard";

import { motion } from "framer-motion";
import Scorecard from "./Scorecard";



const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};


const btnVariant = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 1,
    },
    x: 0,
  },
  
};



function Question() {
  const [quests, setQuests] = useState([]);
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  const [score, setScore] = useState(0);

  const [isOn, setIsOn] = useState(false);
  const [isDark, setIsDark] = useState("light");
const [showScore, setShowScore] = useState(false)
  const [darkIcon, setDarkIcon] = useState(false);
const [showExp, setShowExp] = useState(false)
  
  useEffect(() => {
    const q = [];
    const randnums=[]

    for(var i=0;i<10;){
      let n=Math.floor(Math.random()*144);
      if(!randnums.includes(n)){
          randnums.push(n);
          i++;
      }
    }

    

    for (let i = 0; i < 10; i++) {
      q.push(questions.questions[randnums[i]]);
      
    }

    
    setQuests(q);
  }, [showScore]);

  const toggleSwitch = () => {
    if (isDark === "light") {
      setIsDark("dark");
    } else {
      setIsDark("light");
    }

    setDarkIcon(!darkIcon);

    setIsOn(!isOn);
  };
  const handleClick = () => {
    setVisible(false);
    setShowExp(false)
    if (index >= 9) {
      setIndex(0);
      setShowScore(true)
    } else {
      setIndex(index + 1);
    }
  };

  const viewExplaination=()=>{
setShowExp(!showExp)
  }


  return (
  
    <div className={`gradient-bg-one-${isDark}`}>

    <div
      className={`flex justify-center items-center w-full min-h-screen ent-bg-one-${isDark} relative transition-all ease-in-out px-7 `}
    >
      <div className="h-[40px]">
      <h2
        className={`absolute top-1 left-5 select-none font-bold uppercase p-text-${isDark}`}
      >
        score: {score}
      </h2>

      <div
        className="switch absolute top-1 right-2"
        data-isOn={isOn}
        onClick={toggleSwitch}
      >
        <motion.div className="handle" layout transition={spring}>
          {!darkIcon && <SunIcon className="w-6 text-yellow-400" />}
          {darkIcon && <MoonIcon className="w-6  text-gray-600" />}
        </motion.div>
      </div>


      </div>
{
  !showScore && (
    <div className="flex flex-col items-center bg-slate-70 mt-10 w-full">
    <QuestionCard
          quests={quests[index]}
          isDark={isDark}
          visible={visible}
          setVisible={setVisible}
          setScore={setScore}
          score={score}
          qno={index}
          showExp={showExp}
        />
      
<motion.div
variants={btnVariant}
initial="hidden"
animate="visible"
className="w-max flex"
>
  
{
  visible && (
<button className={`select-none w-max button-${isDark} mt-2 px-6 py-1 rounded-lg mr-10`} onClick={viewExplaination}>
      Explaination
    </button>
  )
}  




<button className={`select-none w-max button-${isDark} mt-2 px-6 py-1 rounded-lg`} onClick={handleClick}>
      Next
    </button>
</motion.div>
    
    </div>
  )
}
     
      
      {
        showScore && (

<Scorecard showScore={showScore} setShowScore={setShowScore} isDark={isDark} score={score} setScore={setScore} />

  

          


        )
      }


          
    </div>


<Footer isDark={isDark} />
    </div>

  );
}

export default Question;

