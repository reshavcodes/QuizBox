
import {motion } from "framer-motion";


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
  let gifUrl, quote;
  if (score <= 20) {
    gifUrl="https://media4.giphy.com/media/6BZaFXBVPBtok/giphy.gif?cid=f35e9a1d1w2p89rrz1sx4h9rf1gdv7zm7r1wew97s3wari4m&rid=giphy.gif&ct=g"
    quote = "You are not good enough try learning javascript from basics.";
  } else if (score <= 50) {
    gifUrl="https://media3.giphy.com/media/VL48WGMDjD64umCEkv/giphy.gif?cid=f35e9a1dg7n9h28t1eyqxpbqmotj2onhc18plgzsbqnip2kg&rid=giphy.gif&ct=g"
    quote = "You did okay, you should try harder.";
  } else if (score <= 80) {
    gifUrl="https://media0.giphy.com/media/l0HlOGsDTZTaOTVba/giphy.gif?cid=f35e9a1dy92ptlzk294b9pf1wvih72iehjnddhc9gvbnmahq&rid=giphy.gif&ct=g"
    quote = "You are good enough but you can do better.";
  } else {
   gifUrl="https://media0.giphy.com/media/d3mlE7uhX8KFgEmY/giphy.gif?cid=f35e9a1dh2loyelj1rrtqsuav8t9l6ty8z1e45kk3n5bb2ln&rid=giphy.gif&ct=g"
    quote = "You know javascript well not try learning javascript frameworks.";
  }



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
