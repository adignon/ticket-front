import React from 'react';
import { Smartphone, Apple, Download, Star, Shield, Zap, MessageCircle, Users } from 'lucide-react';
import { Header } from '../components/Header';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

export const DownloadPage: React.FC = ({ }) => {
    const handleDownload = (platform: 'ios' | 'android') => {
        // Simulate download action
        console.log(`Downloading for ${platform}`);
        // In a real app, this would redirect to app stores
    };
    const params = useParams()
    const handleJoinWhatsApp = () => {
        window.open('https://chat.whatsapp.com/Lk57pj4dCvv5IXPynTZtWG', '_blank');
    };

    const handleVerifyTester = async () => {
        try {
            const { data } = await axios.post(import.meta.env.VITE_DOMAINE + "/app/tester/verify", {
                datahash: params.userhash!
            })
            return data
        } catch (e) {
            console.log(e)
        }
        return false
    }
    const navigate = useNavigate()
    const [userData, setUserData] = React.useState<any>(null)

    React.useEffect(() => {
        handleVerifyTester().then((value) => {
            if (value) {
                setUserData(value)
            } else {
                navigate("/")
            }
        })
    }, [])
    if (!userData) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
                <Header

                />
                <div className="flex items-center justify-center min-h-screen ">
                    <div className="w-12 h-12 border-4 border-[#2ECC71] border-t border-l rounded-full animate-spin"></div>
                </div>
            </div>
        )
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <Header

            />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="pt-16">
                        <div className="inline-flex items-center bg-[#2ECC71]/10 border border-[#2ECC71]/20 rounded-full px-4 py-2 mb-6">
                            <Download className="text-[#2ECC71] mr-2" size={16} />
                            <span className="text-[#2ECC71] text-sm font-medium">Beta Version Disponible</span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                            Téléchargez
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2ECC71] to-[#27AE60]">
                                {' '}TikketPLus
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Découvrez la nouvelle génération de billetterie. Créez, vendez et achetez
                            des billets d'événements directement depuis votre smartphone.
                        </p>
                    </div>
                </div>

                {/* Features Preview */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#2ECC71]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Zap className="text-[#2ECC71]" size={32} />
                        </div>
                        <h3 className="font-semibold mb-2">Installation Rapide</h3>
                        <p className="text-gray-400 text-sm">Téléchargement et installation en moins de 2 minutes</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#2ECC71]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Shield className="text-[#2ECC71]" size={32} />
                        </div>
                        <h3 className="font-semibold mb-2">100% Sécurisé</h3>
                        <p className="text-gray-400 text-sm">Paiements cryptés et données protégées</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-[#2ECC71]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Star className="text-[#2ECC71]" size={32} />
                        </div>
                        <h3 className="font-semibold mb-2">Accès Beta Exclusif</h3>
                        <p className="text-gray-400 text-sm">Soyez parmi les premiers à tester toutes les fonctionnalités</p>
                    </div>
                </div>

                {/* Download Sections */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">

                    {/* iOS Section */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-[#2ECC71]/50 transition-all duration-300 group">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mr-4 group-hover:from-[#2ECC71]/20 group-hover:to-[#27AE60]/20 transition-all duration-300">
                                <Apple className="text-white group-hover:text-[#2ECC71] transition-colors duration-300" size={32} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-1">iOS</h2>
                                <p className="text-gray-400">iPhone & iPad</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Fonctionnalités iOS :</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-[#2ECC71] rounded-full mr-3"></div>
                                    Compatible iOS 14.0 et plus
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-[#2ECC71] rounded-full mr-3"></div>
                                    Optimisé pour iPhone et iPad
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-[#2ECC71] rounded-full mr-3"></div>
                                    Notifications push intelligentes
                                </li>
                            </ul>
                        </div>

                        {/* <div className="mb-6">
                            <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                                <span>Version Beta</span>
                                <span>1.0.0</span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                                <span>Taille</span>
                                <span>45.2 MB</span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-400">
                                <span>Dernière mise à jour</span>
                                <span>Il y a 2 jours</span>
                            </div>
                        </div> */}

                        {
                            userData.ios ?
                                <button
                                    onClick={() => handleDownload('ios')}
                                    className="w-full bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white py-4 rounded-xl hover:from-[#27AE60] hover:to-[#229954] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-[#2ECC71]/20 hover:shadow-2xl transform hover:scale-105 flex items-center justify-center group"
                                >
                                    <Apple className="mr-3 group-hover:scale-110 transition-transform duration-300" size={24} />
                                    Télécharger pour iOS
                                </button>
                                :
                                <div className="w-full bg-gray-700/50 text-gray-400 py-4 rounded-xl border border-gray-600 font-semibold text-lg flex items-center justify-center cursor-not-allowed">
                                    <Apple className="mr-3" size={24} />
                                    Disponible bientôt
                                </div>

                        }

                    </div>

                    {/* Android Section */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-[#2ECC71]/50 transition-all duration-300 group">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mr-4 group-hover:from-[#2ECC71]/20 group-hover:to-[#27AE60]/20 transition-all duration-300">
                                <Smartphone className="text-white group-hover:text-[#2ECC71] transition-colors duration-300" size={32} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-1">Android</h2>
                                <p className="text-gray-400">Smartphones & Tablettes</p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Fonctionnalités Android :</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-[#2ECC71] rounded-full mr-3"></div>
                                    Compatible Android 8.0 et plus
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-[#2ECC71] rounded-full mr-3"></div>
                                    Design Intuitif
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-[#2ECC71] rounded-full mr-3"></div>
                                    Widgets personnalisables
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-[#2ECC71] rounded-full mr-3"></div>
                                    Création  d'événements
                                </li>
                                <li className="flex items-center">
                                    <div className="w-2 h-2 bg-[#2ECC71] rounded-full mr-3"></div>
                                    Authentification par numéro
                                </li>
                            </ul>
                        </div>
                        {
                            userData.android ?
                                <a
                                    href={userData.android}
                                    download="tikketplus.apk"
                                    className="w-full bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white py-4 rounded-xl hover:from-[#27AE60] hover:to-[#229954] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-[#2ECC71]/20 hover:shadow-2xl transform hover:scale-105 flex items-center justify-center group"
                                >
                                    <Smartphone className="mr-3 group-hover:scale-110 transition-transform duration-300" size={24} />
                                    Télécharger pour Android
                                </a>
                                :
                                <div className="w-full bg-gray-700/50 text-gray-400 py-4 rounded-xl border border-gray-600 font-semibold text-lg flex items-center justify-center cursor-not-allowed">
                                    <Apple className="mr-3" size={24} />
                                    Disponible bientôt
                                </div>
                        }


                    </div>
                </div>

                {/* Beta Information */}
                <div className="bg-gradient-to-r from-[#2ECC71]/10 to-[#27AE60]/10 rounded-2xl p-8 border border-[#2ECC71]/20 text-center">
                    <h3 className="text-2xl font-bold mb-4">Programme Beta Test</h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        En téléchargeant TikketPLus Beta, vous rejoignez notre communauté de testeurs privilégiés.
                        Vos retours nous aident à améliorer l'application avant son lancement officiel.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="bg-gray-800/30 rounded-lg p-4">
                            <div className="font-semibold text-[#2ECC71] mb-1">Accès Anticipé</div>
                            <div className="text-gray-400">Nouvelles fonctionnalités en avant-première</div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-4">
                            <div className="font-semibold text-[#2ECC71] mb-1">Support Prioritaire</div>
                            <div className="text-gray-400">Assistance dédiée aux beta testeurs</div>
                        </div>
                        <div className="bg-gray-800/30 rounded-lg p-4">
                            <div className="font-semibold text-[#2ECC71] mb-1">Influence Produit</div>
                            <div className="text-gray-400">Vos suggestions façonnent l'app finale</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* WhatsApp Community Section */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center">
                <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mr-4">
                        <MessageCircle className="text-green-500" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold">Rejoignez notre communauté WhatsApp</h3>
                </div>

                <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Connectez-vous avec d'autres beta testeurs, partagez vos retours, obtenez de l'aide
                    et soyez les premiers informés des nouvelles fonctionnalités et mises à jour.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-3">
                            <Users className="text-green-500" size={24} />
                        </div>
                        <h4 className="font-semibold mb-2">Communauté Active</h4>
                        <p className="text-gray-400 text-sm text-center">
                            Échangez avec plus de 500 beta testeurs passionnés
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-3">
                            <Zap className="text-green-500" size={24} />
                        </div>
                        <h4 className="font-semibold mb-2">Support Rapide</h4>
                        <p className="text-gray-400 text-sm text-center">
                            Obtenez de l'aide en temps réel de notre équipe
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-3">
                            <Star className="text-green-500" size={24} />
                        </div>
                        <h4 className="font-semibold mb-2">Accès Exclusif</h4>
                        <p className="text-gray-400 text-sm text-center">
                            Previews et annonces en avant-première
                        </p>
                    </div>
                    <button
                        onClick={handleJoinWhatsApp}
                        style={{ gridColumn: "1 / -1" }}
                        className="mx-auto bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-green-500/20 hover:shadow-2xl transform hover:scale-105 flex items-center justify-center  group"
                    >
                        <MessageCircle className="mr-3 group-hover:scale-110 transition-transform duration-300" size={24} />
                        Rejoindre le groupe WhatsApp
                    </button>

                    <p className="text-xs text-gray-500 mt-4" style={{ gridColumn: "1 / -1" }}>
                        Groupe privé réservé aux beta testeurs de TikketPLus
                    </p>
                </div>
            </div>
        </div>
    );
};