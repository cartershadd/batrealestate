import React from 'react';

const ContactForm = () => {
    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <div>
                <form action="/action_page.php">
                    <label>First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your first name..." />

                    <label>Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name..." />


                    <label>Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email" />


                    <label>Subject</label>
                    <textarea id="subject" name="subject" placeholder="Subject"></textarea>


                    <label>Message</label>
                    <textarea id="text" name="text" placeholder="Write something..."></textarea>
                    <input type="submit" value="Submit" className="submit" />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;