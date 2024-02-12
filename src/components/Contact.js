import React from "react";

function Contact() {
  const config = {
    email: "thiloit2003@gmail.com",
    phone: "+91 99***90776",
  };
  return (
    <section className="flex  flex-col bg-primary py-32 px-5" id="contact">
      <div className=" flex flex-col items-center text-white">
        <h1 className="text-4xl text-white border-b-4  border-secondary mb-5 w-[170px] font-bold">
          Contact
        </h1>
        <p className="text-white pb-5">
          If you want to discuss more in details,please contact me..
        </p>
        <p className="py-2">
          <span className="font-bold">Email:</span>
          {config.email}
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span>
          {config.phone}
        </p>
      </div>
    </section>
  );
}

export default Contact;
