import { useState, useEffect, useRef } from "react";
import "./FormStyles.css";
import { v4 as uuidv4 } from 'uuid';


function Form () {
  const firstRender = useRef(true)

  const [inputValue, setInputValue] = useState("");
  const [displayMessage, setdisplayMessage] = useState ([]);

  // const showMessage = () => {
  //   e.preventDefault();

    if(inputValue.trim() === "") return;

    setdisplayMessage([
      ...inputValue,
      {
        text: inputValue,
        id: uuidv4(),
      }
    ])

    setInputValue("");
  
  useEffect(() => {
    if(firstRender.current) {
      console.log("true");
      firstRender.current = false;
    } else {
      localStorage.setItem("")
      JSON.stringify([...inputValue]);
    }

  }, [inputValue]);

  useEffect(() => {
    if (localStorage.getItem("inputValue") !==null) {
      const NewinputValue = local.Storage.getItem("inputValue");
      setInputValue(JSON.parse([...inputValue, NewinputValue]));
  }

    
  return (

    <div className="Form">      
        <form>
            <label>Your Name</label>
            <input autoFocus type="text" 
            value={inputValue} name="name" 
            onChange={(e) => setInputValue(e.target.value)}></input>

            <label>Email</label>
            <input autoFocus type="email" 
            value={inputValue} name="email" 
            onChange={(e) => setInputValue(e.target.value)}></input>

            <label>Subject</label>
            <input autoFocus type="text" 
            value={inputValue} name="subject" 
            onChange={(e) => setInputValue(e.target.value)}></input>

            <label>Message</label>
            <textarea autoFocus rows="6" 
            value={inputValue} name="message" 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="Type your message here"/>

            <button onClick={[`Your message is successfully sent!${this.state.name} ${this.state.email} ${this.state.subject} ${this.state.message}`]} 
            className="btn">Submit</button>           
        </form> 

        {displayMessage.map ((message) => {
          <div key={message.id} className="displaymessage">
            <p>{message.text}</p>
          </div>
        }        
        )}
    </div>
  );
};

export default Form;

/* 1. Onchange handler på varje inputfält, som uppdaterar en state (en lokal state i komponenten). 
Det håller reda om något förändras i inputfältet, 
dvs varje gång nån skriver in ett nytt tecken så ska staten uppdateras. 

2. Onclick på knappen och då ska hela komponenten state skrivas ut . 

3. this.state.name

[`Your message is successfully sent!${this.state.name} ${this.state.email} ${this.state.subject} ${this.state.message}`]
//</div>

  // setdisplayMessage([...displayMessage, {
    //     name: inputValue.name,
    //     email: inputValue.email,
    //     subject: inputValue.subject,
    //     message: inputValue.message,     
    //     id: uuidv4(),
    // }]);

    const showMessage = () => {
    e.preventDefault();


    // setInputValue({""});
       */