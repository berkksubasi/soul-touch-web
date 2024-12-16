import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="mt-12 bg-gradient-to-r from-purple-700 to-purple-900 py-10 text-white">
      <div className="container mx-auto px-4">
        {/* Logo ve Slogan */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold tracking-wide">Soul Touch</h2>
          <p className="text-lg mt-2 italic">"Her dokunuş bir değişimdir."</p>
        </div>

        {/* İçerik Alanları */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">Ana Sayfa</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">Hakkımızda</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">Hizmetlerimiz</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors duration-300">İletişim</a>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-xl font-semibold mb-4">İletişim</h3>
            <p className="mb-2">
              E-posta: <a href="mailto:info@soultouchapp.com" className="hover:underline">info@soultouchapp.com</a>
            </p>
            <p className="mb-2">
              Telefon: <a href="tel:+905555555555" className="hover:underline">+90 555 555 55 55</a>
            </p>
            <p>Adres: İstanbul, Türkiye</p>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Bizi Takip Edin</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-2xl hover:text-amber-400 transition-colors duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl hover:text-amber-400 transition-colors duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl hover:text-amber-400 transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl hover:text-amber-400 transition-colors duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-10 border-t border-gray-600 pt-6 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Soul Touch. Tüm hakları saklıdır.</p>
          <p className="mt-2">
            <a href="#" className="hover:underline">Gizlilik Politikası</a> | <a href="#" className="hover:underline">Kullanıcı Şartları</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
