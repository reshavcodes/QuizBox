import { useState} from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/solid";
import { CopyToClipboard } from "react-copy-to-clipboard";




const cardVariant = {
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
  exit: {
    x: "-100vw",
    transition: {
      duration: 0.5,
    },
  },
};




function QuestionCard({
  quests,
  isDark,
  visible,
  setVisible,
  setScore,
  score,
  qno
}) {
  const [copyText, setCopyText] = useState("Copy");
  



 


  return (
    <motion.div
    variants={cardVariant}
      initial="hidden"
      animate="visible"
    className={`flex flex-col white-glassmorphism-${isDark} py-5 px-5 w-[100%] md:w-[60%] 2xl:w-[50%] h-max`}>
      {/* Question */}
      <h3 className={`p-text-${isDark} pb-5 select-none font-serif font-bold`}>{qno+1}.{" "}{(quests?.title)?.substring(3)}</h3>

      {/* Rest content */}
      <div className="flex lg:flex-row flex-col justify-between items-center w-[100%] h-[100%] ">
        {/* Content 1 - code */}

{
  quests?.code && (
<div
          className={`code-bg-${isDark} rounded-md py-5 px-5 mb-6 md:mb-0 p-text-${isDark} shadow-lg relative pt-7 transition-all duration-300 ease-in-out w-[90%] max-h-80 overflow-y-scroll select-none`}
        >


          
            <code
              style={{ whiteSpace: "pre-line", lineHeight: "1.8" }}
              className="font-semibold"
            >
              {quests?.code}
            </code>
          

          
            <CopyToClipboard
              text={quests?.code}
              onCopy={() => {
                setCopyText("Copied");
              }}
            >
              <p className="absolute right-2 top-1 text-xs font-semibold rounded-xl px-2 border-[1px]">{copyText}</p>
            </CopyToClipboard>
          
        </div>
  )
}


        




        {/* content 1 end */}

        {/* Content 2 - answers */}
        <div className="flex flex-col justify-center items-center w-[100%]">
          {quests?.options.map((ans, index) => (
            <div key={index} className="flex flex-row justify-around items-center w-[90%]">




{ans.correct && visible && (
    <CheckCircleIcon className="h-5 w-5 text-green-500" />
  )}
  {!ans.correct && visible && (
    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
  )}



             
              <p
                onClick={() => {
                  if (ans.correct) {
                    setVisible(true);
                    setScore(score + 10);
                  } else {
                    setVisible(true);
                  }

                  setCopyText("Copy")
                }}
                className={`text-white border-[1px] text-[13px] lg:text-base p-4 h-fit rounded-xl w-[80%] hover:bg-gray-100 font-semibold hover:text-black break-words my-2 select-none shadow-md hehe`}
              >
                {ans.text}
              </p>
            </div>
          ))}
        </div>
        {/* content 2 end */}
      </div>
    </motion.div>
  );
}

export default QuestionCard;


