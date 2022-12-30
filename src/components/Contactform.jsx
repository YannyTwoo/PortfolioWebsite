import React from "react";


function ContactForm() {
    return (
        <form action="" id="contactform">
            <input type="email" placeholder="EMail ID" required />
            <input type="text" placeholder="Name" required />
            <textarea rows={10} placeholder="Message" required />
            <button type="submit">Send</button>
        </form>
    )
}

export default ContactForm;