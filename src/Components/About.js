import React,{useState,useEffect,useRef} from 'react'

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const currentElement = textRef.current;
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();  
          }
        });
      },
      { threshold: 0.1 }
    );
  
    if (currentElement) {
      observer.observe(currentElement);
    }
  
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);
  return (
    <>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
        <div style={{margin:'50px',width:'600px'}}>
          <h1 ref={textRef} style={{color:'white',margin:'10px',opacity:isVisible?1:0,transition: 'opacity 1s ease-in'}}>THIS IS <strong style={{color:'orange'}}>RAHUL</strong></h1>
          <h1 ref={textRef} style={{color:'yellow',margin:'10px',opacity:isVisible?1:0,transition: 'opacity 2s ease-in'}}>WEB DEVELOPER</h1>
          <h3 ref={textRef} style={{color:'white',margin:'10px',opacity:isVisible?1:0,transition: 'opacity 3s ease-in'}}>I am currently pursuing a Bachelor of Engineering in Electronics and Communication Engineering from Matrusri Engineering College. I am good at programming languages like Python, C, Java.</h3>
          <h3 ref={textRef} style={{color:'white',margin:'10px',opacity:isVisible?1:0,transition: 'opacity 4s ease-in'}}>My true passion lies in web design. I thrive on bringing creative ideas to life through visually stunning and responsive websites that deliver exceptional user experiences.</h3>
        </div>
    </div>
    </>
  )
}

export default About