import React, { useEffect } from "react";
import AllRoute from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import ChatBot from 'react-simple-chatbot';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import chat from "../img/chat.png"
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';
import { Link } from "react-router-dom";

const theme = {
    background: '#FFFFFF',
    headerBgColor: '#D8A921',
    headerFontSize: '20px',
    botBubbleColor: '#D8A921',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#eee',
    userFontColor: 'black',
};


class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name:   '',
      mobile: '',
      email:  '',
      incgrp: '',
      agegrp: '',
      type:   '',
      usermsg:'',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, mobile, email, incgrp, agegrp, type, usermsg } = steps;

    this.setState({ name, mobile, email, incgrp, agegrp, type, usermsg });
  }
  componentDidMount(){
    if(this.props.setcookie){
        this.props.setCookie('name', this.state.name, { path: '/' });
        this.props.setCookie('mobile', this.state.mobile, { path: '/' });    
        this.props.setCookie('email', this.state.email, { path: '/' });    
        this.props.setCookie('incgrp', this.state.incgrp, { path: '/' });    
        this.props.setCookie('agegrp', this.state.agegrp, { path: '/' });    
        this.props.setCookie('type', this.state.type, { path: '/' });            
    
        var request = new XMLHttpRequest();
        request.onreadystatechange=function() {
          if (request.readyState == 4 && request.status == 200) {
            console.log("Response Received");
          }
        }

        request.open("POST","http://localhost:8000/chat-data.php",true);
        request.setRequestHeader("Content-type","application/json");
        request.setRequestHeader("Access-Control-Allow-Origin","*");
        request.send(JSON.stringify(this.state));

    }else{
        let data = {
            ispresent: true,
            name:      this.props.cookies.name.message,
            email:     this.props.cookies.email.message,
            mobile:    this.props.cookies.mobile.message,
            incgrp:    this.props.cookies.incgrp.value,
            agegrp:    this.props.cookies.agegrp.value,
            type:      this.props.cookies.type.value,
            usermsg:   this.state.usermsg.message
        }

        var request = new XMLHttpRequest();
        request.onreadystatechange=function() {
          if (request.readyState == 4 && request.status == 200) {
            console.log("Response Received");
          }
        }

        request.open("POST","http://localhost:8000/chat-data.php",true);
        request.setRequestHeader("Content-type","application/json");
        request.setRequestHeader("Access-Control-Allow-Origin","*");
        request.send(JSON.stringify(data));
    }

  }

  
  render() {
    const {  name, mobile, email, incgrp, agegrp, type, usermsg  } = this.state;
    
    return (
      <div style={{ width: '100%' }}>
        <p style={{fontSize:"14px",color:"white",textAlign:"center",lineHeight:"20px"}} >Thank You, we will get back to you soon!</p>
      </div>
    );
  }
}

function Project(){
    return(
        <div style={{ width: '100%' }}>
            <p style={{fontSize:"14px",color:"white",textAlign:"center",lineHeight:"20px"}}><span style={{fontWeight:"700"}}>PALASH</span> <br/> Redevlopment of Samrat CHS Ltd</p>
            <p style={{fontSize:"14px",color:"white",textAlign:"center",lineHeight:"20px"}}>Spacious 1 BHK, 2 BHK & Jodi Apartments Located at Malad (W), Marve Road Jankalyan Nagar, Mumbai 400095</p>        
            <a href="./projects" style={{color:"black",textDecoration:"none"}}><div style={{marginLeft:"20px",width:"100px",padding:"10px",textAlign:"center",background:"#fff",display:"flex",justifyContent:"center",borderRadius:"10px"}}>View All</div></a>        
        </div>
    );
}

function About(){
    return(
        <div style={{ width: '100%',justifyContent:"center",display:"flex",flexDirection:"column"}}>
            <p style={{fontSize:"14px",color:"white",textAlign:"center",lineHeight:"20px"}}><span style={{fontWeight:"700"}}>About Us</span> <br/></p>
            <p style={{fontSize:"14px",color:"white",textAlign:"center",lineHeight:"20px"}}>Venkateshwara Realty is a leading real estate developer acclaimed for its exceptional residential, commercial, and mixed-use projects. Committed to quality, innovation, and customer satisfaction, it's a trusted name in the industry.</p>
            <a href="./about" style={{color:"black",textDecoration:"none"}}><div style={{marginLeft:"20px",width:"100px",padding:"10px",textAlign:"center",background:"#fff",display:"flex",justifyContent:"center",borderRadius:"10px"}}>More Info</div></a>        
        </div>
    );
}
function Contact(){
    return(
        <div style={{ width: '100%' }}>
            <p style={{fontSize:"14px",color:"white",textAlign:"center",lineHeight:"20px"}}><span style={{fontWeight:"700"}}>Contact Us</span> <br/></p>
            <p style={{fontSize:"14px",color:"white",textAlign:"center",lineHeight:"20px",overflow:"hidden",textOverflow:"ellipsis"}}>Email: <br/> sales@venkateshwararealty.co.in<br/>Contact:<br/> +91 99201 02300 ,+91 91900 00018</p>        
            <a href="./contact" style={{color:"black",textDecoration:"none"}}><div style={{marginLeft:"20px",width:"100px",padding:"10px",textAlign:"center",background:"#fff",display:"flex",justifyContent:"center",borderRadius:"10px"}}>More Info</div></a>        

        </div>
    );
}


Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  });
  let steps=[]
  const [cookies, setCookie] = useCookies(['name']);

  if(cookies?.name?.message){
    steps = [
        {
            id: '0',
            message: `Hey ${cookies?.name?.message}! welcome back`,
            trigger: 'looking',
        }, 
        {
            id: '1',
            message: 'Please write your fullname',
            trigger: 'name',
        }, 
        {
            id: 'name',
            user: true,
            trigger: 3,
        }, 
        {
            id: '3',
            message: 'Please write your mobile no',
            trigger: 'mobile'
        }, 
        {
            id: 'mobile',
            user: true,
            validator: (value) => {
                if (isNaN(value)) {
                    return 'Value should be a number!';
                }else if(value.length >10 || value.length < 10){
                    return 'Value should be 10 digit number only!'
                }
                return true;
            },
            trigger: 5,
        },
        {
            id: '5',
            message: 'Please write your Email',
            trigger: 'email'
        },
        {
            id: 'email',
            user: true,
            trigger: 7,
        },
        {
            id: '7',
            message: 'Income Group?',
            trigger: 'incgrp',
        },
        {
            id: 'incgrp',
            options: [
                { value: 0, label: '5L to 10L', trigger:'9'},
                { value: 1, label: '10L to 20L', trigger:'9' },
                { value: 2, label: '20L to 30L', trigger:'9' },            
                { value: 3, label: '30L+', trigger:'9' },          
            ],
        },
        {
            id: '9',
            message: 'Age Group?',
            trigger: 'agegrp',
        },
        {
            id: 'agegrp',
            options: [
                { value: 0, label: '21 to 30', trigger:'11'},
                { value: 1, label: '31 to 40', trigger:'11' },
                { value: 2, label: '41 to 50', trigger:'11' },            
                { value: 3, label: '50+', trigger:'11' },            
            ],
        },
        {
            id: '11',
            message: 'Property Type',
            trigger: 'type',
        },
        {
            id: 'type',
            options: [
                { value: 0, label: '1 RK', trigger:'13'},
                { value: 1, label: '1 BHK', trigger:'13' },
                { value: 2, label: '2 BHK', trigger:'13' },            
                { value: 3, label: '3 BHK', trigger:'13' },            
            ],
        },
        {
            id:'13',
            message: 'Looking For',
            trigger: 'looking',
        },
        {
            id: 'looking',
            options: [
                { value: "About", label: 'About Company', trigger:'about'},
                { value: "Contact Us", label: 'Contact us', trigger:'contact' },
                { value: "Project", label: 'Projects', trigger:'project' },
                { value: "SomethingElse", label: 'Something Else', trigger:'else' },
                { value: "End", label: 'End Conversation', trigger:16 },
            ],
        },
        {
            id:'about',
            component: <About/>,
            asMessage: true,
            trigger: 'looking',
        },
        {
            id:'contact',
            component: <Contact/>,
            asMessage: true,
            trigger: 'looking',
        },
        {
            id:'project',
            component: <Project/>,
            asMessage: true,
            trigger: 'looking',
        },
        // 
        {
            id:'else',
            message: 'Please Let us know what you were looking for?',
            trigger: 'usermsg',
        },
         {
            id: 'usermsg',
            user: true,
            trigger: 15,
        },
        {
            id: '15',
            component: <Review setCookie={setCookie} steps={steps} setcookie={false} cookies={cookies}/>,
            asMessage: true,
            trigger: 'looking',
        },
        {
            id: '16',
            message:"Bye!!",
            end: true,
        },
    ];

    } else{

        steps = [
            {
                id: '0',
                message: `Hey Visitor! we will ask you a few details before we proceed`,
                trigger: 1,
            }, 
            {
                id: '1',
                message: 'Please write your fullname',
                trigger: 'name',
            }, 
            {
                id: 'name',
                user: true,
                trigger: 3,
            }, 
            {
                id: '3',
                message: 'Please write your mobile no',
                trigger: 'mobile'
            }, 
            {
                id: 'mobile',
                validator: (value) => {
                    if (isNaN(value)) {
                        return 'Value should be a number!';
                    }else if(value.length >10 || value.length < 10){
                        return 'Value should be 10 digit number only!'
                    }
                    return true;
                },
                user: true,
                trigger: 5,
            },
            {
                id: '5',
                message: 'Please write your Email',
                trigger: 'email'
            },
            {
                id: 'email',
                user: true,
                validator: (value) => {
                    if(value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/)){
                        return true;
                    }
                    else{
                        return 'Please provide valid email!';
                    }
                    
                },
                trigger: 7,
            },
            {
                id: '7',
                message: 'Income Group?',
                trigger: 'incgrp',
            },
            {
                id: 'incgrp',
                options: [
                    { value: 0, label: '5L to 10L', trigger:'9'},
                    { value: 1, label: '10L to 20L', trigger:'9' },
                    { value: 2, label: '20L to 30L', trigger:'9' },            
                    { value: 3, label: '30L+', trigger:'9' },          
                ],
            },
            {
                id: '9',
                message: 'Age Group?',
                trigger: 'agegrp',
            },
            {
                id: 'agegrp',
                options: [
                    { value: 0, label: '21 to 30', trigger:'11' },
                    { value: 1, label: '31 to 40', trigger:'11' },
                    { value: 2, label: '41 to 50', trigger:'11' },            
                    { value: 3, label: '50+', trigger:'11' },            
                ],
            },
            {
                id: '11',
                message: 'Property Type',
                trigger: 'type',
            },
            {
                id: 'type',
                options: [
                    { value: 0, label: '1 RK', trigger:'13'},
                    { value: 1, label: '1 BHK', trigger:'13' },
                    { value: 2, label: '2 BHK', trigger:'13' },            
                    { value: 3, label: '3 BHK', trigger:'13' },            
                ],
            },
            {
                id:'13',
                message: 'Looking For',
                trigger: '15',
            },
            {
                id: 'looking',
                options: [
                    { value: "About", label: 'About Company', trigger:'about'},
                    { value: "Contact Us", label: 'Contact us', trigger:'contact' },
                    { value: "Project", label: 'Projects', trigger:'project' },
                    { value: "SomethingElse", label: 'Something Else', trigger:'else' },
                    { value: "End", label: 'End Conversation', trigger:'16' },
                ],
            },
            {
                id:'about',
                component: <About/>,
                asMessage: true,
                trigger: 'looking',
            },
            {
                id:'contact',
                component: <Contact/>,
                asMessage: true,
                trigger: 'looking',
            },
            {
                id:'project',
                component: <Project/>,
                asMessage: true,
                trigger: 'looking',
            },
            // 
            {
                id:'else',
                message: 'Please Let us know what you were looking for?',
                trigger: 'usermsg',
            },
             {
                id: 'usermsg',
                user: true,
                trigger: 15,
            },
            {
                id: '15',
                component: <Review setCookie={setCookie} steps={steps} setcookie={true} cookies={cookies}/>,
                asMessage: true,
                trigger: 'looking',

            },
            {
                id: '16',
                message:"Bye!!",
                end: true,
            },
        ];
    }

  return (
        <CookiesProvider defaultSetCookies={{ path: '/' }}>
            <div className="App body_wrap">
              <AllRoute />
              <div id="chat-bot" style={{display:"none",position:"fixed",bottom:"100px", right:"40px",zIndex:"10"}}>
                <ThemeProvider theme={theme}>
                    <ChatBot steps={steps} headerTitle="Chat" />
                </ThemeProvider>
              </div>
              <div style={{position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",zIndex:"10",boxShadow:"0px 0px 10px 1px #d8a921",bottom:"20px",right:"30px",width:"60px",height:"60px",background:"#d8a921",borderRadius:"50%"}} onClick={()=>{
                if(document.getElementById("chat-bot").style.display == "none"){
                  document.getElementById("chat-bot").style.display = "block"
                }else{
                  document.getElementById("chat-bot").style.display = "none"
                }
              }}>
                <img src={chat} style={{width:"32px"}}/>
              </div>
            </div>
        </CookiesProvider>
    );
};

export default App;
