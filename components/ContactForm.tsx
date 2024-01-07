"use client";

import { error } from "console";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const { name, email, message } = data;
    if (!name && !email && !message)
      return alert("Please complete all the fields");

    try {
      setLoading(true);
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("a", data);
      if (response) console.log(response);
    } catch (err: any) {
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="w-full h-full flex flex-col p-5">
      <h2 className="text-2xl font-bold  pb-5 text-white">Contact Me!</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          required
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          required
          onChange={handleChange}
          maxLength={500}
          className="w-full px-3 h-[150px] py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        onClick={handleSubmit}
        className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-[#860541] hover:bg-black rounded-full disabled:bg-gray-300"
      >
        {loading ? "loading..." : "Send"}
      </button>
    </form>
  );
};

export default ContactForm;
