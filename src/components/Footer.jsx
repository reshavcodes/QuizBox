import {FaLinkedin,FaGithub,FaGlobeAsia,FaInstagram} from "react-icons/fa"
import {BsMailbox} from "react-icons/bs"

function Footer({isDark}) {
  return (
    <div 
    className='text-black flex flex-col justify-center items-center pb-3'
    >
        <div className="flex flex-row w-[80%] justify-around sm:w-[50%] md:w-[40%] 2xl:w-[30%] items-center pb-3">

<a href="https://github.com/reshavcodes" rel="noopener noreferer" target="_blank" >
<FaGithub className={`text-3xl p-text-${isDark}  my-2 mx-2 hover:scale-125 hover:animate-bounce`} />
</a>

<a  href="https://www.linkedin.com/in/reshav-kumar-092a72207" rel="noopener noreferer" target="_blank">
<FaLinkedin className="text-3xl my-2 mx-2 hover:scale-125 hover:animate-bounce text-blue-600 " />
</a>
<a href="https://instagram.com/ayedubey" rel="noopener noreferer" target="_blank" >
<FaInstagram className="text-3xl my-2 mx-2 hover:scale-125 hover:animate-bounce text-amber-700" />
</a>
<a href="https://reshavcodes.netlify.app/" rel="noopener noreferer" target="_blank">
<FaGlobeAsia className={`text-3xl p-text-${isDark}  my-2 mx-2 hover:scale-125 hover:animate-bounce`} />
</a>


<a href="mailto:reshavkumar34@gmail.com" rel="noopener noreferer" target="_blank">
<BsMailbox className="text-3xl my-2 mx-2 hover:scale-125 hover:animate-bounce text-green-600" />
</a>










        </div>
        <div>
<h3 className={`opacity-90 text-md p-text-${isDark} font-semibold hover:opacity-100`}>Developed with ❤️ By <a className="text-blue-400" href="https://reshavcodes.netlify.app/" rel="noopener noreferer" target="_blank" >Reshav Kumar</a></h3>
        </div>
    </div>
  )
}

export default Footer