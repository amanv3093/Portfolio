
import './Home.css';
import Word from '../../Word';
import { useState,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from '../Hero/Hero';
function Home() {
  let [isHovered,setIsHovered]=useState(true)
  const [filled, setFilled] = useState(0);

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
    
    if(isLight){
      setIsLight(false)
      document.body.style.background="black"
      document.body.style.color="white"
      HomeDetails.style.color="#4cc2cd"
      
      
    }else{
      setIsLight(true)
      document.body.style.background="white"
      document.body.style.color="black"
      HomeDetails.style.color="black"
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
  
  return (
    <nav>
    <div className='Home-details'>
      <div className='box-1' data-aos="fade-right">
        <p>
         <span >

            <Word word="A" />
            <Word word="M" />
            <Word word="A" />
            <Word word="N" />

          </span>
          <span className='word-span'>

            <Word word="V" />
            <Word word="E" />
            <Word word="R" />
            <Word word="M" />
            <Word word="A" />

          </span>
        </p>
      </div>
   
      <div className='box-2' data-aos="fade-left">
        <div className='menu-box'>
        <span onClick={handleLight} className="material-symbols-outlined light">{isLight ? `clear_night`:`light_mode`}</span>
        <span onClick={handleToggle} className="material-symbols-outlined menu">{isHovered ? `menu`:`close`}</span>
        
          </div>
          <div className='box-2-inner' style={{height:`${filled}vh` , background:filled > 50 ? '#e8e8ed' : 'transparent'}}>
            <ul>
              <li><Word word="Home" /></li>
              <li><Word word="Project" /></li>
              <li><Word word="About" /></li>
              <li><Word word="Skill" /></li>
              <li><Word word="Contact" /></li>
              <li><Word word="Resume" /></li>
              
            </ul>
          </div>
        
        
      </div>
    </div>
    <Hero/>
    </nav>
  );
}

export default Home;
