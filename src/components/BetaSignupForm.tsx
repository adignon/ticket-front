import React, { useState } from 'react';
import { Mail, User, X } from 'lucide-react';
import { SuccessModal } from './SuccessModal';
import axios from 'axios';

interface BetaSignupFormProps {
  onModalClose?: () => void;
}

export const BetaSignupForm: React.FC<BetaSignupFormProps> = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    error: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsLoading(true);
      handleCloseError()
      try {
        const data = await axios.post( "/app/tester/register", {
          email: formData.email,
          fullname: formData.name
        },{
          baseURL:import.meta.env.VITE_DOMAINE!
        })
        setFormData(prev => ({ ...prev, name: '', email: '', error: '' }));
        setShowSuccess(true);
      } catch (e: any) {
        console.log(e)
        let error = e?.response?.data?.errors?.[0]?.message || e?.response?.data?.error?.message || e?.response?.message || e?.message || "Erreur lors de la soumission du formulaire veuillez rééssayer"
        setFormData(prev => ({ ...prev, error }));
      }
      setIsLoading(false);

    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      error: '',
      [e.target.name]: e.target.value
    });
  };

  const handleCloseError=()=>{
    setFormData(prev => ({ ...prev, error: '' }))
  }
  if (props.onModalClose && showSuccess) {
    return (
      <SuccessModal modal={false} onClose={() => {
        props.onModalClose?.()
        setShowSuccess(false)
      }} />
    )
  }

  return (
    <>
      <h3 className="text-2xl font-bold mb-2 text-white">Rejoignez le Beta Test</h3>
      <p className="text-gray-400 mb-6">
        Soyez parmi les premiers à tester TikketPlus et façonnez l'avenir de la billetterie !
      </p>
      {
        formData.error && (
          <div className='mb-4 px-4 py-3 rounded-md bg-red-400 flex-row flex items-center'>
            <div className='flex-1'>
              <p className='text-white text-base '>Erreur lors de la soumission du formulaire veuillez rééssayer</p>
            </div>
            <div>
              <button onClick={handleCloseError} className='bg-white/20 rounded-full p-2 '>
                <X size={14} />
              </button>
            </div>
          </div>
        )
      }

      <form onSubmit={handleSubmit} className="space-y-6 text-left">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Nom complet
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent transition-colors"
              placeholder="Votre nom"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Adresse email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#2ECC71] focus:border-transparent transition-colors"
              placeholder="votre@email.com"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white py-4 rounded-lg hover:from-[#27AE60] hover:to-[#229954] transition-all font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-[#2ECC71]/20 hover:shadow-2xl"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Inscription en cours...
            </span>
          ) : (
            'Rejoindre le Beta Test'
          )}
        </button>
      </form>

      {
        !props.onModalClose && showSuccess && (
          <SuccessModal modal={true} onClose={() => setShowSuccess(false)} />
        )
      }
    </>
  );

};