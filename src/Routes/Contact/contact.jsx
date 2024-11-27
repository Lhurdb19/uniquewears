import React, { Fragment, useEffect } from "react";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if(firstname.length <= 3) {
//         setError('First Name is Required and at least 4 characters')
//     } else if(lastname.length <= 3) {
//         setError('Last Name is required and at least 4 characters')
//     } else if(email.length === 0)  {
//         setError('A valid E-Mail is required')
//     } else if(phone.length <= 10)  {
//         setError('Phone number is required and at least 11-digits')
//     } else if(address.length <= 2) {
//         setError('Address is required and at least 4 characters')
//     } else if(message.length <= 10)  {
//         setError('Message is required and at least 11 characters')
//     } else {
//         console.log(formField)
//         resetForm()
//         successMessage()
//     }
// }

  return (
    <Fragment>
      <div className="contact">
        <div className="address" data-aos="fade-up">
          <iframe
            data-aos="zoom-in"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126497.72095928583!2d4.480299757790778!3d7.784123048273548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103787e4c949b8fd%3A0x33c62c1600f59277!2sOsogbo%2C%20Osun!5e0!3m2!1sen!2sng!4v1731196182474!5m2!1sen!2sng"
            width="450"
            height="400"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="form">
          <h3 data-aos="fade-up"
              data-aos-anchor-placement="bottom-center">
            Contact Us</h3>
          <form>
            <div className="wrap">
              <input
                data-aos="fade-up-left"
                type="text"
                name="fullname"
                placeholder="Enter your full name"
              />
              <input
                data-aos="fade-up-left"
                type="text"
                name="email"
                placeholder="Enter your email address"
              />
            </div>

            <div className="wrap">
              <input
                data-aos="fade-down-left"
                type="tel"
                name="phone"
                placeholder="Enter phone number"
              />
              <input
                data-aos="fade-down-right"
                type="text"
                name="address"
                placeholder="Enter your home address"
              />
            </div>

            <button
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500">Submit</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
