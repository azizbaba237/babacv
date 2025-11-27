import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        userID
      )
      .then(() => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 4000);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contactez-moi
        </h2>

        {/* Wrapper responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bloc informations */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Informations de contact</h3>
            <p className="mb-6 text-gray-300">
              Vous pouvez me joindre par email, par téléphone ou via ce
              formulaire.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <FiMail className="text-blue-400 text-2xl" />
                <a
                  href="mailto:abdoulazizbaba227@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  abdoulazizbaba227@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <FiPhone className="text-blue-400 text-2xl" />
                <span>+237 6 95 74 29 78</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <FiMapPin className="text-blue-400 text-2xl" />
                <span>Douala, Cameroun</span>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              {/* Notifications */}
              {submitStatus === "success" && (
                <div className="bg-green-600 text-white px-4 py-3 rounded">
                  ✔ Message envoyé avec succès !
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-600 text-white px-4 py-3 rounded">
                  ❌ Une erreur s'est produite. Réessayez.
                </div>
              )}

              {/* Nom */}
              <div>
                <label className="block mb-2 font-medium">Votre nom</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium">Votre email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-medium">Votre message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>

              {/* Bouton */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold transition ${
                  isSubmitting ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
