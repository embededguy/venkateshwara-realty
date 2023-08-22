import React, { useEffect } from "react";
import AllRoute from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import ChatBot from 'react-simple-chatbot';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import chat from "../img/chat.png"

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
      incrgp: '',
      agegrp: '',
      type:   '',
      building:'',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, mobile, email, incgrp, agegrp, type, building } = steps;

    this.setState({ name, mobile, email, incgrp, agegrp, type, building });
  }
  componentDidMount(){
    var request = new XMLHttpRequest();
    request.onreadystatechange=function() {
      if (request.readyState == 4 && request.status == 200) {
        console.log("Response Received");
      }
    }
    request.open("POST","./admin/chat-data.php",true);
    request.setRequestHeader("Content-type","application/json");
    request.send(JSON.stringify(this.state));
  }

  
  render() {
    const {  name, mobile, email, incgrp, agegrp, type, building  } = this.state;
    
    return (
      <div style={{ width: '100%' }}>
        <p style={{fontSize:"14px",color:"white"}}>Thank You for your data!</p>
      </div>
    );
  }
}

const steps = [
    {
        id: '0',
        message: 'Hey Visitor! we will ask you a few details before we proceed',
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
        message: 'Looking For',
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
        message: 'Building intrested in',
        trigger: 'building',
    },
    {
        id: 'building',
        options: [
            { value: "PALASH", label: 'PALASH', trigger:'15'},
            { value: "AJANTA", label: 'AJANTA', trigger:'15' },
        ],
    },
    {
        id: '15',
        component: <Review />,
        asMessage: true,
        end: true,
    },


];


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

  return (
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
  );
};

export default App;
