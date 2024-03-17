
import './Home.css';
import Word from '../../Word';
import { useState,useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { UseColorContext } from '../../Context/Context';

function Home() {
  let [isHovered,setIsHovered]=useState(true)
  const [filled, setFilled] = useState(0);
  let {setHandleColor}=UseColorContext()
  let [isLight,setIsLight]=useState(true)
  useEffect(() => {
    AOS.init();
  }, [])

  let handleToggle=()=>{
    let box2Inner=document.querySelector('.box-2-inner')
    if(isHovered){
      setIsHovered(false)
      box2Inner.style.display='block'
      setFilled(0)
    }else{
      setIsHovered(true)
      
      box2Inner.style.display='none'
    }
   
    
  }

  let handleLight=()=>{
    let menuBox=document.querySelector('.menu-box')
    let HomeDetails=document.querySelector('.Home-details')
    let anchor1=document.querySelectorAll('.anchor1')
    
    if(isLight){
      setIsLight(false)
      document.body.style.background="black"
      document.body.style.color="#551a8b"
      setHandleColor('#551a8b')
      for (let i = 0; i < anchor1.length; i++) {
        anchor1[i].style.color = "#551a8b";
      }
      // HomeDetails.style.color="#4cc2cd"
      HomeDetails.style.background="black"
      
    }else{
      setIsLight(true)
      document.body.style.background="#f8f8f8"
      document.body.style.color="black"
      setHandleColor('black')
      for (let i = 0; i < anchor1.length; i++) {
        anchor1[i].style.color = "black";
      }
      // HomeDetails.style.color="black"
      HomeDetails.style.background="#f8f8f8"
    }
   
    
  }
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (filled < 100 && isHovered===false) {
        setFilled(prevFilled => prevFilled + 1);
      } else if(isHovered===true) {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [filled,isHovered]);


console.log(filled);
  

const downloadResume = () => {
  // Assuming your resume file is located at a specific URL
  const resumeUrl = 'https://example.com/your-resume.pdf';
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = resumeUrl;
  // Set the download attribute and filename
  link.setAttribute('download', 'your-resume.pdf');
  // Simulate a click on the link
  document.body.appendChild(link);
  link.click();
  // Clean up
  document.body.removeChild(link);
};
  return (
    <nav>
    <div className='Home-details'>
      <div className='box-1 '  >
        <p>
         <span  >

            <Word word="A" />
            <Word word="M" />
            <Word word="A" />
            <Word word="N" />

          </span>
          {/* <span className='word-span'>

            <Word word="V" />
            <Word word="E" />
            <Word word="R" />
            <Word word="M" />
            <Word word="A" />

          </span> */}
        </p>
      </div>
   
      <div className='box-2'>
        <div className='menu-box'>
        
           <ul className='menu2'>
             <li><a className='anchor1'  href='#about'><Word word="About" /></a></li>
             <li><a className='anchor1' href='#skill'><Word word="Skill" /></a></li>
              <li><a className='anchor1' href='#project'><Word word="Project" /></a></li>
              <li><a className='anchor1' href='#contact'><Word word="Contact" /></a></li>
              <li onClick={downloadResume}><a className='anchor1' href='#'><Word word="Resume" /></a></li>
              
            </ul>
            <span  onClick={handleLight} className="material-symbols-outlined light">{isLight ? `clear_night`:`light_mode`}</span>
            <span  onClick={handleToggle} className="material-symbols-outlined menu">{isHovered ? `menu`:`close`}</span>
        
          </div>
          <div className='box-2-inner' style={{}}>
            <ul>
            <li><a className='anchor1' href='#about'><Word word="About" /></a></li>
             <li><a className='anchor1' href='#skill'><Word word="Skill" /></a></li>
              <li><a className='anchor1' href='#project'><Word word="Project" /></a></li>
              <li><a className='anchor1' href='#contact'><Word word="Contact" /></a></li>
              <li onClick={downloadResume}><a className='anchor1' href='#'><Word word="Resume" /></a></li>
              
            </ul>
          </div>
        
        
      </div>
    </div>
   
    
    </nav>
  );
}

export default Home;



