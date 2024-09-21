import React, { useState } from 'react'
import {Link} from 'react-router-dom';
function Home() {
const currentHour = new Date().getHours();
  let greetingMessage = '';

  if (currentHour < 12) {
    greetingMessage = 'Good Morning';
  } else if (currentHour < 18) {
    greetingMessage = 'Good Afternoon';
  } else {
    greetingMessage = 'Good Evening';
  }
  const [line,setline]=useState('')
  const makechange=(id)=>{
    setline(id);
    document.getElementById('open').style.display="none"
  }
  return (
    <>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',height:'80px',alignItems:'center',position:'fixed',top:'0px',background:'black'}}>
      <h3 style={{margin:'10px',color:'white',fontFamily:'revert'}}>RAHUL MUDAVATH</h3>
      <div id='content'>
      <p id='one' onClick={()=>makechange(1)} style={{textDecoration:line===1?'underline':'none',textDecorationColor:line===1?'yellow':'none',textDecorationThickness:line===1?'3px':'none'}}><Link to='/intro' style={{color:'white',textDecoration:'none'}}>HOME</Link></p>
      <p id='two' onClick={()=>makechange(2)} style={{textDecoration:line===2?'underline':'none',textDecorationColor:line===2?'yellow':'none',textDecorationThickness:line===2?'3px':'none'}}><Link to='/about' style={{color:'white',textDecoration:'none'}}>ABOUT</Link></p>
      <p id='three' onClick={()=>makechange(3)} style={{textDecoration:line===3?'underline':'none',textDecorationColor:line===3?'yellow':'none',textDecorationThickness:line===3?'3px':'none'}}><Link to='/skills'style={{color:'white',textDecoration:'none'}}>RESUME</Link></p>
      <p id='four' onClick={()=>makechange(4)} style={{textDecoration:line===4?'underline':'none',textDecorationColor:line===4?'yellow':'none',textDecorationThickness:line===4?'3px':'none'}}><Link to='/contact' style={{color:'white',textDecoration:'none'}}>CONTACT ME </Link></p>
      </div>
    </div>
    <div id='open'style={{display:'flex',flexDirection:'column',justifyContent:'flex-end',alignItems:'flex-start',height:'700px'}}>
      <div style={{height:'400px',margin:'20px',display:'flex',flexDirection:'column'}}>
        <h1 style={{color:'white'}}>{greetingMessage}!</h1>
        <h1 style={{color:'#cad2c5'}}>Welcome to <strong style={{color:'yellow'}}>My PoRtFoLiO!</strong></h1>
        <Link to="/intro"><button onClick={makechange} id='begin'style={{height:'30px',width:'150px',margin:'10px',borderColor: 'white',borderStyle:'solid',fontSize:'20px'}}>Lets Begin!</button></Link>
      </div>
    </div>
    </>
  )
}

export default Home