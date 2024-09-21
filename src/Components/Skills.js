import React,{useState,useEffect}from 'react'

function Skills() {
    const [isvisible,setvisible]=useState(false)

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setvisible(true);
            setvis(true)
        },2000);
        return ()=>clearTimeout(timer);
    },[]);

    const [isvis,setvis]=useState(false)

  return (
    <>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',alignItems:'center'}}>
        <div style={{margin:'10px',alignItems:'cente'}} >
            <h1 style={{color:'orange',margin:'10px'}}>MY PROFILE</h1>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',flexWrap:'wrap'}}>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
                    <p style={{fontWeight:'bold',backgroundColor:'transparent'}}>Name</p>
                    <p style={{fontWeight:'bold',backgroundColor:'transparent'}}>Birthday</p>
                    <p style={{fontWeight:'bold',backgroundColor:'transparent'}}>Address</p>
                    <p style={{fontWeight:'bold',backgroundColor:'transparent'}}>E-mail</p>
                </div>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',flexWrap:'wrap'}}>
                    <p style={{backgroundColor:'transparent'}}>Mudavath Rahul</p>
                    <p style={{backgroundColor:'transparent'}}>August 09,2002</p>
                    <p style={{backgroundColor:'transparent'}}>Hyderabad</p>
                    <p style={{backgroundColor:'transparent'}}>rahulmudavth333@gmail.com</p>
                </div>
            </div>
        </div>
        <div style={{margin:'10px'}}>
            <h1 style={{color:'yellow',margin:'5px'}}>SKILLS</h1>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',flexWrap:'wrap',width:'300px'}}>
                <h3 style={{color:'white',margin:'10px'}}>I am a Web Developer, I am good at HTML, CSS & Javascript. Also, I can code in Python and C.</h3>
                <p style={{background:'none'}}>Python</p>
                <div  style={{width:'300px',height:'10px',border:' 1px solid white',margin:'5px'}}>
                    <div  id='skill'style={{backgroundColor:'green',height:'10px',width:'230px'}}></div>
                </div>
                {isvisible ?<p style={{background:'none'}}>70%</p>:" "}
                <p style={{background:'none'}}>C</p>
                <div  style={{width:'300px',height:'10px',border:'1px solid white',margin:'5px'}}>
                    <div  id='skills'style={{backgroundColor:'green',height:'10px',width:'200px'}}></div>
                </div>
                {isvis ?<p style={{background:'none'}}>60%</p>:" "}
                <p style={{background:'none'}}>Java</p>
                <div  style={{width:'300px',height:'10px',border:'1px solid white',margin:'5px'}}>
                    <div  id='skills'style={{backgroundColor:'green',height:'10px',width:'200px'}}></div>
                </div>
                {isvis ?<p style={{background:'none'}}>50%</p>:" "}
            </div>
        </div>
    </div>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',alignItems:'center'}}>
        <div style={{width:'300px',border:'1px solid white',margin:'5px',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <img src='html.png' alt='' style={{height:'300px'}}></img>
            <h1 style={{color:'orange',textAlign:'center',margin:'5px'}}>HTML</h1>
            <p style={{background:'none',margin:'5px',textAlign:'center'}}>I have extensive experience in creating HTML templates and designing web layouts quickly and efficiently.</p>
        </div>
        <div style={{width:'300px',border:'1px solid white',margin:'5px',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <img src='css.png' alt='' style={{height:'300px',alignContent:'center'}}></img>
            <h1 style={{color:'orange',textAlign:'center',margin:'5px'}}>CSS</h1>
            <p style={{background:'none',margin:'5px',textAlign:'center'}}>If there's a layout, it should definitely look stunning. I can style your page to make it both attractive and engaging, ensuring it captures attention and enhances user experience.</p>
        </div>
        <div style={{width:'300px',border:'1px solid white',margin:'5px',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <img src='js.png' alt='' style={{height:'300px'}}></img>
            <h1 style={{color:'orange',textAlign:'center',margin:'5px'}}>JAVASCRIPT</h1>
            <p style={{background:'none',margin:'5px',textAlign:'center'}}>I can build good logic to make the webpage work efficiently</p>
        </div>
        <div style={{width:'300px',border:'1px solid white',margin:'5px',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <img src='react.png' alt='' style={{height:'300px'}}></img>
            <h1 style={{color:'orange',textAlign:'center',margin:'5px'}}>REACT</h1>
            <p style={{background:'none',margin:'5px',textAlign:'center'}}>I can build efficient and effective logic using React to ensure your webpage performs seamlessly and delivers an excellent user experience.</p>
        </div>
    </div>
    </>
  )
}

export default Skills