import React from "react";
import { Button } from '@/components/button'

function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dcb79c45-5c9d-46c3-ab92-0ccf8bfad794");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

 return (
    <div>
      <form onSubmit={onSubmit} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2 sm:m-4">
        <div className="px-4 py-2 sm:px-8 sm:pb-8">   
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
            Name
          </label>
          <div className="mt-2">
            <input
              type="text" 
              name="name" 
              required
              className="p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="px-4 py-2 sm:px-8">
          <label htmlFor="email"   
 className="block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2">
            <input
              type="email" 
              name="email"   
 
              required
              className="p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   
 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="px-4 py-2 sm:px-8 sm:pb-8">
          <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
            Phone Number
          </label>
          <div className="mt-2">
            <input
              type="tel" 
              name="phone"   
              required
              className="p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="px-4 py-2 sm:px-8 sm:pb-8">
      <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">
        Type your message
      </label>
      <div className="mt-2">
        <textarea
          id="comment"
          name="comment"
          rows={4}
          className="p-3 block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
          defaultValue={''}
        />
      </div>
        </div>

        <div className="sm:col-span-6 m-2 flex ml-3 sm:ml-7 pb-4">   
 {/* Adjusted col-span for button */}
          <Button 
            type="submit"
            className="inline-flex justify-center rounded-xl bg-green-600 py-3 px-6 text-lg font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                    focus-visible:outline-green-600"
          >
            Submit
          </Button>
        </div>
      </form>
      <br />
      <span>{result}</span>
    </div>
  );
}

export default ContactForm;
