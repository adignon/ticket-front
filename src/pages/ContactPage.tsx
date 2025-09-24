import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, Phone, MapPin } from 'lucide-react';
import { Header } from '../components/Header';

interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}


export const ContactPage = ({  }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.subject && formData.message) {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsLoading(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ fullName: '', email: '', subject: '', message: '' });
        
      }, 2000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center p-4">
        <div className="text-center animate-scale-in">
          <div className="w-20 h-20 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="text-white" size={40} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Message envoyé !</h2>
          <p className="text-gray-300 text-lg">
            Nous vous répondrons dans les plus brefs délais.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header 
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="pt-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à nous contacter. 
            Notre équipe vous répondra rapidement.
          </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                  Nom complet *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent transition-colors"
                    placeholder="Votre nom complet"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Adresse email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent transition-colors"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Sujet du message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent transition-colors"
                    placeholder="Sujet de votre message"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent transition-colors resize-none"
                  placeholder="Décrivez votre demande en détail..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white py-4 rounded-lg hover:from-[#27AE60] hover:to-[#229954] transition-all font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-[#2ECC71]/20 hover:shadow-2xl flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#2ECC71]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">reionagroup@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#2ECC71]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Téléphone</h4>
                    <p className="text-gray-300">+229 01 90 09 14 54</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#2ECC71]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Adresse</h4>
                    <p className="text-gray-300">
                      Ilot 121, Quartier Donatin, Parcelle M<br />
                      Maison GERMAIN ATINHOUNNON<br />
                      Cotonou – Bénin
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold mb-4">Horaires de réponse</h3>
              <p className="text-gray-300 mb-4">
                Nous nous efforçons de répondre à tous les messages dans les 24 heures ouvrables.
              </p>
              <div className="text-sm text-gray-400">
                <p>Lundi - Vendredi : 8h00 - 18h00 (GMT+1)</p>
                <p>Weekend : Réponse sous 48h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};