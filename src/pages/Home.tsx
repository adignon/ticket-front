import { Header } from '../components/Header';
import { BackgroundAnimations } from '../components/BackgroundAnimations';
import { PhoneMockup } from '../components/PhoneMockup';
import { BetaSignupForm } from '../components/BetaSignupForm';
import { Smartphone, Users, Calendar, Zap, ArrowRight } from 'lucide-react';
import { ActionModal } from '../components/Modal';

export function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
            <BackgroundAnimations />
            <Header/>
            {/* Hero Section */}
            <main className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">

                        {/* Left Content */}
                        <div className="space-y-8">
                            <div>
                                <div className="inline-flex items-center bg-[#2ECC71]/10 border border-[#2ECC71]/20 rounded-full px-4 py-2 mb-6">
                                    <Zap className="text-[#2ECC71] mr-2" size={16} />
                                    <span className="text-[#2ECC71] text-sm font-medium">Beta Test Exclusif</span>
                                </div>

                                <h1 className="font-cabin text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                    L'avenir de la
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-[#27AE60]">
                                        {' '}billetterie{' '}
                                    </span>
                                    est arrivé
                                </h1>

                                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                    Créez, vendez et achetez des billets d'événements en quelques clics.
                                    TikketPlus révolutionne l'expérience événementielle pour les organisateurs
                                    et les participants.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-[#2ECC71]/10 rounded-lg flex items-center justify-center">
                                        <Calendar className="text-[#2ECC71]" size={20} />
                                    </div>
                                    <span className="text-gray-300">Création rapide d'événements</span>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-[#2ECC71]/10 rounded-lg flex items-center justify-center">
                                        <Smartphone className="text-[#2ECC71]" size={20} />
                                    </div>
                                    <span className="text-gray-300">Billets numériques sécurisés</span>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-[#2ECC71]/10 rounded-lg flex items-center justify-center">
                                        <Users className="text-[#2ECC71]" size={20} />
                                    </div>
                                    <span className="text-gray-300">Communauté d'événements</span>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-[#2ECC71]/10 rounded-lg flex items-center justify-center">
                                        <Zap className="text-[#2ECC71]" size={20} />
                                    </div>
                                    <span className="text-gray-300">Paiements instantanés</span>
                                </div>
                            </div>

                            {/* Beta Signup Form */}
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">

                                <BetaSignupForm />
                            </div>

                            <div className="flex items-center text-gray-400">
                                <span className="text-sm">Déjà 1,247 beta testeurs nous ont rejoint</span>
                                <ArrowRight className="ml-2" size={16} />
                            </div>
                        </div>

                        {/* Right Content - Phone Mockup */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#2ECC71]/20 rounded-full blur-3xl transform scale-150"></div>
                                <PhoneMockup />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Features Section */}
            <section id="features" className="relative py-20 border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            Pourquoi choisir
                            <span className="text-[#2ECC71]"> TikketPlus</span> ?
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Une plateforme complète pensée pour simplifier l'organisation et la participation aux événements
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-[#2ECC71]/50 transition-colors">
                            <div className="w-16 h-16 bg-[#2ECC71]/10 rounded-2xl flex items-center justify-center mb-6">
                                <Calendar className="text-[#2ECC71]" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Pour les organisateurs</h3>
                            <p className="text-gray-400 mb-6">
                                Créez et gérez vos événements en quelques minutes. Vendez vos billets sans commission cachée.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>• Interface intuitive de création</li>
                                <li>• Gestion des paiements sécurisée</li>
                                <li>• Analytics en temps réel</li>
                            </ul>
                        </div>

                        <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-[#2ECC71]/50 transition-colors">
                            <div className="w-16 h-16 bg-[#2ECC71]/10 rounded-2xl flex items-center justify-center mb-6">
                                <Users className="text-[#2ECC71]" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Pour les participants</h3>
                            <p className="text-gray-400 mb-6">
                                Découvrez des événements près de chez vous et achetez vos billets en toute sécurité.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>• Recherche géolocalisée</li>
                                <li>• Billets numériques sécurisés</li>
                                <li>• Recommendations personnalisées</li>
                            </ul>
                        </div>

                        <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-[#2ECC71]/50 transition-colors">
                            <div className="w-16 h-16 bg-[#2ECC71]/10 rounded-2xl flex items-center justify-center mb-6">
                                <Smartphone className="text-[#2ECC71]" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Expérience mobile</h3>
                            <p className="text-gray-400 mb-6">
                                Application native optimisée pour une expérience fluide sur tous les appareils.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>• Design responsive moderne</li>
                                <li>• Notifications push intelligentes</li>
                                <li>• Mode hors-ligne disponible</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">
                        Prêt à révolutionner vos événements ?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Rejoignez notre communauté beta et découvrez la nouvelle génération de billetterie
                    </p>
                    <ActionModal
                        button={
                            <button
                                className="bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-[#27AE60] hover:to-[#229954] transition-all shadow-lg hover:shadow-[#2ECC71]/20 hover:shadow-2xl transform hover:scale-105"
                            >
                                Commencer le Beta Test
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

                </div>
            </section>
        </div>
    );
}