import ContactForm from "@/components/ContactForm";
import React from "react";

const page = () => {
  return (
    <div
      style={{ backgroundImage: "url(background4.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div className="flex flex-col flex-nowrap justify-center w-[400px] h-[400px] rounded-xl border border-[#860541]">
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
