import './ContactForm.css';
import { useState } from "react";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        let hasError = false;

        if(name === "") {
            setNameError("Please enter your name.");
            hasError = true;
        } else {
            setNameError("");
        }

        if(email === "") {
            setEmailError("Please enter your email.");
            hasError = true;
        } else {
            if(!validateEmail(email)) {
                setEmailError("Please enter a valid email address.");
                hasError = true;
            } else {
                setEmailError("");
            }
        }

        if(message === "") {
            setMessageError("Please enter the message.");
            hasError = true;
        } else {
            setMessageError("");
        }

        if(!hasError) {
            console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

            setIsSubmitted(true);
        }
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    return (
        <>
        {
            isSubmitted ? <p>Thank you!</p> : <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    autoComplete="off"
                    id="name"
                    type="text"
                    value={name}
                    onChange={ e => setName(e.target.value) }
                />
                <p className="error">{nameError}</p>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    autoComplete="off"
                    id="email"
                    type="email"
                    value={email}
                    onChange={ e => setEmail(e.target.value) }
                />
                <p className="error">{emailError}</p>
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea
                    autoComplete="off"
                    name=""
                    id="message"
                    value={message}
                    onChange={ e => setMessage(e.target.value) }></textarea>
                <p className="error">{messageError}</p>
            </div>
            <button type="submit">Submit</button>
        </form>
        }
        </>
    )
}