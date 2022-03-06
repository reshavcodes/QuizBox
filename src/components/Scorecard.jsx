import { useState, useEffect } from "react";
import { animate, motion } from "framer-motion";
import useFetch from "../hooks/useFetch";

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

function Scorecard({ showScore, setShowScore, isDark, score, setScore }) {
  let keyword, quote;
  if (score <= 20) {
    keyword = "bad";
    quote = "You are not good enough try learning javascript from basics.";
  } else if (score <= 50) {
    keyword = "try again";
    quote = "You did okay, you should try harder.";
  } else if (score <= 80) {
    keyword = "better";
    quote = "You are good enough but you can do better.";
  } else {
    keyword = "smart";
    quote = "You know javascript well not try learning javascript frameworks.";
  }

  const gifUrl = useFetch({ keyword });

  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-card-dark w-[100%] md:w-[60%] 2xl:w-[50%] flex flex-col justify-around items-center p-10 h-max"
    >
      <motion.div className="w-[100%] lg:w-[60%]">
        <img
          src={gifUrl}
          alt="gif"
          className="w-full
          h-64 2xl:h-96 rounded-2xl shadow-2xl object-cover select-none"
        />
      </motion.div>

      {/* score and button */}
      <div className="flex flex-col items-center w-full lg:w-[60%]">
        {/* score and paragraph */}
        <div className="flex flex-col mb-10 mt-10 w-[80%]">
          <h2 className="p-text-dark font-extrabold text-5xl mb-2 ">
            Score: {score}
          </h2>
          <p className={`p-text-${isDark} font-semibold text-sm`}>{quote}</p>
        </div>
        <div className="flex flex-row justify-center w-full px-5">
          {score >= 80 && (
            <a
              href="https://www.w3schools.com/REACT/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#3b4668] opacity-100 w-max px-2 py-1 rounded-md text-white hover:opacity-90 shadow-xl">
                Learn React JS
              </button>
            </a>
          )}

          {score < 80 && (
            <a
              href="https://www.w3schools.com/js/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-[#3b4668] opacity-100 w-max px-2 py-1 rounded-md text-white hover:opacity-90 shadow-xl">
                Learn Javascript
              </button>
            </a>
          )}

          <button
            onClick={() => {
              setShowScore(false);
              setScore(0);
            }}
            className="bg-[#3b4668] opacity-100 w-max px-3 ml-7 py-1 rounded-md text-white hover:opacity-90 shadow-xl"
          >
            HOME
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Scorecard;
