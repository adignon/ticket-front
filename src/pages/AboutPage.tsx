import React from 'react';
import { Building2, Target, Users, Smartphone, Code, Settings, ShoppingCart, Briefcase } from 'lucide-react';
import { Header } from '../components/Header';



export const AboutPage= () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header 
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="pt-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            À propos de nous
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            TikketPlus est une solution de Reiona. Reiona est une société à responsabilité limitée (SARL) au capital de 1 000 000 FCFA, 
            enregistrée au RCCM de Cotonou sous le numéro RB/COT/25 B 41102.
          </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#2ECC71]/10 rounded-2xl flex items-center justify-center mr-4">
                <Target className="text-[#2ECC71]" size={32} />
              </div>
              <h2 className="text-3xl font-bold">Notre Mission</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Notre mission est de concevoir et de développer des solutions digitales innovantes 
              qui simplifient et améliorent le quotidien des utilisateurs.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nos Domaines d'Expertise
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg">
            Spécialisés dans l'ingénierie informatique et le développement logiciel, nous intervenons dans :
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-[#2ECC71]/50 transition-colors">
              <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="text-[#2ECC71]" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Applications Mobiles</h3>
              <p className="text-gray-400 text-sm">
                Conception et réalisation de logiciels et applications mobiles innovantes
              </p>
            </div>

            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-[#2ECC71]/50 transition-colors">
              <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-[#2ECC71]" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Développement Web</h3>
              <p className="text-gray-400 text-sm">
                Développement web et génie logiciel avec les dernières technologies
              </p>
            </div>

            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-[#2ECC71]/50 transition-colors">
              <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="text-[#2ECC71]" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Matériel Informatique</h3>
              <p className="text-gray-400 text-sm">
                Importation, achat-vente et distribution de matériels informatiques et bureautiques
              </p>
            </div>

            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-[#2ECC71]/50 transition-colors">
              <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-lg flex items-center justify-center mb-4">
                <Settings className="text-[#2ECC71]" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Conseil & Assistance</h3>
              <p className="text-gray-400 text-sm">
                Conseil, assistance et toutes prestations informatiques personnalisées
              </p>
            </div>

            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-[#2ECC71]/50 transition-colors">
              <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="text-[#2ECC71]" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Licences & Logiciels</h3>
              <p className="text-gray-400 text-sm">
                Exploitation et commercialisation de logiciels et licences
              </p>
            </div>

            <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-[#2ECC71]/50 transition-colors">
              <div className="w-12 h-12 bg-[#2ECC71]/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-[#2ECC71]" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Technologies Numériques</h3>
              <p className="text-gray-400 text-sm">
                Toutes opérations liées aux technologies numériques et à l'innovation
              </p>
            </div>
          </div>
        </div>

        {/* TikketPlus Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-[#2ECC71]/10 to-[#27AE60]/10 rounded-2xl p-8 border border-[#2ECC71]/20">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#2ECC71]/20 rounded-2xl flex items-center justify-center mr-4">
                <Smartphone className="text-[#2ECC71]" size={32} />
              </div>
              <h2 className="text-3xl font-bold">Notre première solution : TikketPlus</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              TikketPlus est une application innovante développée par Reiona pour faciliter la gestion 
              et l'achat de tickets, en offrant une expérience simple, rapide et sécurisée aux utilisateurs.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Cette solution marque le début de notre engagement à proposer des outils digitaux 
              accessibles et performants.
            </p>
          </div>
        </div>

        {/* Legal Information */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-[#2ECC71]/10 rounded-2xl flex items-center justify-center mr-4">
              <Building2 className="text-[#2ECC71]" size={32} />
            </div>
            <h2 className="text-3xl font-bold">Informations légales et contacts</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#2ECC71] mb-2">Raison sociale</h3>
                <p className="text-gray-300">REIONA SARL</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#2ECC71] mb-2">Forme juridique</h3>
                <p className="text-gray-300">Société à Responsabilité Limitée</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#2ECC71] mb-2">Capital social</h3>
                <p className="text-gray-300">1 000 000 FCFA</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-[#2ECC71] mb-2">Adresse</h3>
                <p className="text-gray-300">
                  Ilot 121, Quartier Donatin, Parcelle M<br />
                  Maison GERMAIN ATINHOUNNON<br />
                  Cotonou – Bénin
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#2ECC71] mb-2">Téléphone</h3>
                <p className="text-gray-300">+229 01 90 09 14 54</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-[#2ECC71] mb-2">Email</h3>
                <p className="text-gray-300">reionagroup@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};