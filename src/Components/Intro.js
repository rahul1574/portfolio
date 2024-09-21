import React,{useState,useRef,useEffect}from 'react'

function Intro() {
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
    <div style={{backgroundColor:'transparent',margin:'50px',alignItems:'center',display:'flex',flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap'}}>
        <div>
           <h1 ref={textRef} style={{color:'orange',fontSize:'40px',opacity:isVisible?1:0,transition: 'opacity 1s ease-in'}}>FRONT-END DEVELOPER <i class="fa-solid fa-code" style={{fontSize:'50px',color:'#ef233c'}}></i></h1>
        </div>
        <div style={{height:'500px',width:'400px',alignContent:'center'}}>
            <h2 ef={textRef} style={{color:'white',opacity:isVisible?1:0,transition: 'opacity 2s ease-in'}}>As a Junior <strong style={{color:'yellow'}}>Front-End Developer</strong> specializing in modern and responsive designs for both web and mobile, I'm eager to collaborate with you. Let’s create stunning, user-friendly interfaces together. Thank you!</h2>
        </div>
    </div>
    </>
  )
}

export default Intro