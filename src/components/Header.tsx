import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { ActionModal } from './Modal';
import { BetaSignupForm } from './BetaSignupForm';

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({ }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useNavigate()
  const onShowAbout = () => router("/about");
  const onShowContact = () => router("/contact");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to={"/"} className="flex items-center space-x-3">
            <img
              src={import.meta.env.VITE_DOMAINE+"/assets/images/logo-icon.png"}
              alt="TikketPLus"
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-2xl font-bold text-white font-cabin">TikketPlus</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className="text-gray-300 hover:text-[#2ECC71] transition-colors">
              Fonctionnalités
            </Link>
            <button onClick={onShowAbout} className="text-gray-300 hover:text-[#2ECC71] transition-colors">
              À propos
            </button>
            <button onClick={onShowContact} className="text-gray-300 hover:text-[#2ECC71] transition-colors">
              Contact
            </button>
            <ActionModal
              button={
                <button
                  className="bg-[#2ECC71] text-white px-6 py-2 rounded-full hover:bg-[#27AE60] transition-colors font-semibold"
                >
                  Rejoindre le Beta
                </button>
              }
            >
              {
                ({ onClose }) => (
                  <div >

                    <BetaSignupForm onModalClose={onClose} />
                  </div>
                )
              }
            </ActionModal>

          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-[#2ECC71]">
                Fonctionnalités
              </a>
              <button onClick={onShowAbout} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#2ECC71]">
                À propos
              </button>
              <button onClick={onShowContact} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#2ECC71]">
                Contact
              </button>
              <ActionModal
                button={
                  <button
                    className="w-full text-left bg-[#2ECC71] text-white px-3 py-2 rounded-lg hover:bg-[#27AE60] transition-colors font-semibold mt-2"
                  >
                    Rejoindre le Beta
                  </button>
                }
              >
                {
                  ({ onClose }) => (
                    <div >
                      <BetaSignupForm onModalClose={onClose} />,
                    </div>
                  )
                }
              </ActionModal>

            </div>
          </div>
        )}
      </div>
    </header>
  );
};