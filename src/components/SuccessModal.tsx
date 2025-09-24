import React from 'react';
import { CheckCircle, X } from 'lucide-react';
import { Modal } from './Modal';

interface SuccessModalProps {
  onClose?: () => void;
  modal?:boolean
}

export const SuccessModal: React.FC<SuccessModalProps> = (props) => {
  const [open, setOpen]=React.useState(true)
  const Components=(
    <div className="text-center">
      <div className="w-16 h-16 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="text-white" size={32} />
      </div>

      <h3 className="text-2xl font-bold text-white mb-4">
        Félicitations ! 🎉
      </h3>

      <p className="text-gray-300 mb-6 leading-relaxed">
        Vous êtes maintenant inscrit au programme Beta de TikketPLus !
        Nous vous enverrons bientôt les instructions de téléchargement et
        d'accès anticipé à l'application.
      </p>

      <div className="bg-gray-800 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-400 mb-2">Prochaines étapes :</p>
        <ul className="text-sm text-gray-300 text-left space-y-1">
          <li>• Vérifiez votre email pour la confirmation</li>
          <li>• Téléchargez l'app dès sa disponibilité</li>
          <li>• Explorez les événements exclusifs du Beta</li>
        </ul>
      </div>

      <button
        onClick={props.onClose}
        className="w-full bg-[#2ECC71] text-white py-3 rounded-full hover:bg-[#27AE60] transition-colors font-semibold"
      >
        Parfait !
      </button>
    </div>
  )
  
  if(!props.modal){
    return Components
  }else{
    return(
      <Modal isOpen={open} onClose={()=>{
        setOpen(false)
        props.onClose?.()
      }}>{Components}</Modal>
    )
  }
};