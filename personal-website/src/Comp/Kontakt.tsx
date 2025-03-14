import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import * as motion from "motion/react-client";

interface Email {
  name: string;
  email: string;
  phone: string;
  package: string;
  details: string;
  message: string;
  honeypot?: string;
}

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Email>({
    name: "",
    email: "",
    phone: "",
    package: "",
    details: "",
    message: "",
    honeypot: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.honeypot) {
      console.log("Bot detected!");
      return;
    }

    if (form.current) {
      setIsLoading(true);

      emailjs
        .sendForm(
          "service_a5bxtad",
          "template_uymswti",
          form.current,
          "C0aLgz9y1yM0c_ckP"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            alert("Wiadomość została wysłana!");
            setFormData({
              name: "",
              email: "",
              phone: "",
              package: "",
              details: "",
              message: "",
              honeypot: "",
            });
          },
          (error) => {
            console.error("FAILED...", error.text);
            alert("Wiadomość nie została wysłana...");
          }
        )
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        viewport={{ once: true }}
        id="kontakt"
        className="flex flex-col items-center justify-center text-5xl font-semibold"
      >
        <h1 className="text-center md:text-left md:w-[620px] text-5xl font-semibold mx-auto">
          Darmowa wycena i audyt{" "}
        </h1>
      </motion.div>
      <motion.form
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeIn" }}
        viewport={{ once: true }}
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 w-full m-10 max-w-md p-6 md:max-w-sm mx-auto shadow-xl rounded-lg bg-white"
      >
        <label htmlFor="name" className="font-medium text-black">
          Imię
        </label>
        <input
          aria-label="Imię"
          value={formData.name}
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          required
          className="p-3 rounded-md focus:outline-none bg-gray-200 focus:ring-2 focus:ring-black"
        />

        <label htmlFor="email" className="font-medium text-black">
          E-mail
        </label>
        <input
          aria-label="E-mail"
          value={formData.email}
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          required
          className="p-3 rounded-md focus:outline-none bg-gray-200 focus:ring-2 focus:ring-black"
        />

        <label htmlFor="phone" className="font-medium text-black">
          Numer telefonu
        </label>
        <input
          aria-label="Numer telefonu"
          value={formData.phone}
          onChange={handleChange}
          type="tel"
          id="phone"
          name="phone"
          required
          className="p-3 rounded-md focus:outline-none bg-gray-200 focus:ring-2 focus:ring-black"
        />

        <label htmlFor="package" className="font-medium text-black">
          Wybierz pakiet
        </label>
        <select
          name="package"
          id="package"
          value={formData.package}
          onChange={handleChange}
          required
          className="p-3 rounded-md focus:outline-none bg-gray-200 focus:ring-2 focus:ring-black"
        >
          <option value="">Wybierz...</option>
          <option value="one_page">Strona One Page</option>
          <option value="standard">Strona Standard</option>
          <option value="premium">Strona Premium</option>
        </select>

        <label htmlFor="details" className="font-medium text-black">
          Dodatkowe informacje
        </label>
        <textarea
          aria-label="Dodatkowe informacje"
          value={formData.details}
          onChange={handleChange}
          id="details"
          name="details"
          className="p-3 rounded-md focus:outline-none bg-gray-200 focus:ring-2 focus:ring-black resize-none"
        />

        <label htmlFor="message" className="font-medium text-black">
          Wiadomość
        </label>
        <textarea
          aria-label="Wiadomość"
          value={formData.message}
          onChange={handleChange}
          id="message"
          name="message"
          required
          className="p-3 rounded-md focus:outline-none bg-gray-200 focus:ring-2 focus:ring-black resize-none"
        />

        <input
          type="text"
          aria-label="Honeypot"
          name="honeypot"
          style={{ display: "none" }}
          value={formData.honeypot}
          onChange={handleChange}
        />

        <button
          aria-label="Wyślij formularz kontaktowy"
          type="submit"
          disabled={isLoading}
          className={`p-3 font-bold rounded-md transition-colors duration-300 text-white bg-black hover:bg-gray-800 ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Wysyłanie..." : "Wyślij"}
        </button>
      </motion.form>
    </>
  );
}
