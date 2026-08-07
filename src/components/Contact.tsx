import React, { type FormEvent } from "react";

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Submitted:", Object.fromEntries(formData));
    alert("Message sent!");
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16 border-t border-zinc-800">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Let's Work Together</h2>
        <p className="text-zinc-400 mb-8">
          Have a project in mind or need a developer for full-stack engineering? Send me a message.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-zinc-400 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-black border-2 border-zinc-700 text-white focus:outline-none focus:border-zinc-400 text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-zinc-400 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-black border-2 border-zinc-700 text-white focus:outline-none focus:border-zinc-400 text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium text-zinc-400 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2.5 rounded-lg bg-black border-2 border-zinc-700 text-white focus:outline-none focus:border-zinc-400 text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-white hover:bg-zinc-200 text-black font-semibold transition shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;