import React from 'react'
import front_desk from "../assets/front_desk.webp"
import Button2 from "../components/shared/Button2";

type Props = {}

const ContactPage = (props: Props) => {
  return (
    <div className="flex gap-5 px-16 py-5">
      <section className="w-[50%] flex flex-col space-y-5"> 
        <h1 className="font-bold text-4xl"> Contact Us</h1>
        <p>Whether you're a logistics company, a vendor, or a dispatch rider, we’re here to answer your questions and help you get started.</p>

        <form className="flex flex-col border p-5 rounded-md space-y-4">

          <div className="">
            <label htmlFor="fullName" className="block font-bold"> Full Name* </label>
            <input type="text" id="fullName" className="w-full p-2 border rounded" placeholder="Full Name" required/>
          </div>

          <div className="">
          <label htmlFor="emailAddress" className="block font-bold"> Email Address* </label>
          <input type="text" id="emailAddress" className="w-full p-2 border" placeholder="Email Address" required/>
          </div>

          <label htmlFor="role" className="block font-bold"> You are contacting us as* </label>
          <select id="role" className=" p-2 border rounded">
            <option>Logistics Company </option>
            <option>Vendor </option>
            <option>Dispatch Rider</option>
          </select>

          <label htmlFor="message" className="block font-bold"> Your Message* </label>
          <textarea id="message"  className="h-[100px] w-full border rounded"required/>

          <button className="hover:bg-[#1E40AF] w-[50%] bg-[#2563EB] text-base lg:text-lg font-bold text-white rounded-md p-3">Send Message</button>
        
        </form>
          <p>Our team typically responds within 24hours. Need something urgently? Reach us at example@email.com</p>

      </section>
       
      <section> 
         <img src={front_desk} className="w-[320px]  rounded-lg"/>
      </section>
    </div>
  )
}

export default ContactPage


