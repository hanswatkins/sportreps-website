import React from "react";

const ContactForm = () => {
  return (
    <div
      id="contact"
      className="flex justify-center items-center text-center mx-auto bg-white bg-boreal h-1/2 bg-no-repeat "
    >
      <form
        autocomplete="off"
        name="contact"
        method="post"
        action="/success"
        className="flex flex-col gap-4 w-full m-8"
      >
        <h1 className="text-white text-3xl">Contact Me</h1>
        <input class="input" type="hidden" name="form-name" value="contact" />

        <label htmlFor="name" className="[&>*]:w-3/4 lg:[&>*]:w-1/2">
          <input
            placeholder="Name"
            className="p-2 py-1  focus:outline-gray-600"
            type="text"
            name="name"
            required
          />
        </label>

        <label htmlFor="email" className="[&>*]:w-3/4 lg:[&>*]:w-1/2">
          <input
            placeholder="Email"
            className=" focus:outline-gray-600 py-1 p-2"
            type="email"
            name="email"
            required
          />
        </label>

        <label htmlFor="message" className="[&>*]:w-3/4 lg:[&>*]:w-1/2">
          <textarea
            placeholder="Message"
            className="resize-none  focus:outline-gray-600 py-1 p-2"
            name="message"
            required
          ></textarea>
        </label>

        <button
          className="bg-white px-4 py-2 transition-all duration-300 hover:rounded-lg w-3/4 lg:w-1/2 mx-auto shadow-sm hover:shadow-none hover:scale-95 active:scale-75"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
