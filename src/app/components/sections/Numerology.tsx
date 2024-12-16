'use client';
import { Input } from '../ui/Input';
import { Button } from '../ui/Buttons';
import { useState, ChangeEvent } from 'react';
import { Modal } from '../ui/Modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Image from 'next/image';

interface FormData {
  ad: string;
  soyad: string;
  cinsiyet: string;
  evliMi: boolean;
  kizlikSoyadi?: string;
  dogumTarihi: Date | null;
  dogumYeri: string;
}

export function Numerology() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    ad: '',
    soyad: '',
    cinsiyet: '',
    evliMi: false,
    kizlikSoyadi: '',
    dogumTarihi: null,
    dogumYeri: '',
  });
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData((prev) => ({ ...prev, dogumTarihi: date }));
  };

  const handleSubmit = () => {
    const errors: Partial<FormData> = {};
    if (!formData.ad) errors.ad = 'Ad zorunludur.';
    if (!formData.soyad) errors.soyad = 'Soyad zorunludur.';
    if (!formData.cinsiyet) errors.cinsiyet = 'Cinsiyet zorunludur.';
    if (!formData.dogumTarihi) errors.dogumTarihi = null;
    if (!formData.dogumYeri) errors.dogumYeri = 'Doğum yeri zorunludur.';

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      openModal();
    }
  };

  return (
    <section className="py-12">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600">
        Kendinizi Anlamak için İlk Adım
      </h2>
      <div className="w-full mx-auto bg-white shadow-xl rounded-lg p-8">
        <p className="text-center font-semibold text-gray-600 mb-6">
          Numeroloji analizi almak için lütfen bilgilerinizi giriniz.
        </p>
        <div className="flex flex-col text-black space-y-4">
          <Input
            type="text"
            name="ad"
            placeholder="Ad"
            value={formData.ad}
            onChange={handleChange}
            className="w-full text-black bg-gray-100 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          {formErrors.ad && <p className="text-red-500 text-sm">{formErrors.ad}</p>}

          <Input
            type="text"
            name="soyad"
            placeholder="Soyad"
            value={formData.soyad}
            onChange={handleChange}
            className="w-full text-black bg-gray-100 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          {formErrors.soyad && <p className="text-red-500 text-sm">{formErrors.soyad}</p>}

          <select
            name="cinsiyet"
            value={formData.cinsiyet}
            onChange={handleChange}
            className="w-full text-black bg-gray-100 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          >
            <option value="">Cinsiyet seçin</option>
            <option value="kadın">Kadın</option>
            <option value="erkek">Erkek</option>
          </select>
          {formErrors.cinsiyet && <p className="text-red-500 text-sm">{formErrors.cinsiyet}</p>}

          {formData.cinsiyet === 'kadın' && (
            <>
              <label className="flex items-center space-x-2 text-black">
                <input
                  type="checkbox"
                  name="evliMi"
                  checked={formData.evliMi}
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <span>Evli misiniz?</span>
              </label>
              {formData.evliMi && (
                <Input
                  type="text"
                  name="kizlikSoyadi"
                  placeholder="Kızlık soyadı"
                  value={formData.kizlikSoyadi}
                  onChange={handleChange}
                  className="w-full text-black bg-gray-100 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              )}
            </>
          )}

          <div>
            <label className="block text-gray-700 mb-2">Doğum tarihi</label>
            <DatePicker
              selected={formData.dogumTarihi}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="GG/AA/YYYY"
              className=" text-black bg-gray-100 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>
          {formErrors.dogumTarihi && (
            <p className="text-red-500 text-sm">
              {formErrors.dogumTarihi?.toString()}
            </p>
          )}

          <Input
            type="text"
            name="dogumYeri"
            placeholder="Doğum yeri"
            value={formData.dogumYeri}
            onChange={handleChange}
            className="w-full text-black bg-gray-100 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          {formErrors.dogumYeri && <p className="text-red-500 text-sm">{formErrors.dogumYeri}</p>}

          <Button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 px-6 rounded-lg shadow hover:from-purple-600 hover:to-indigo-700 transition-all"
          >
            Hemen Keşfet
          </Button>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold mb-4 text-black">
              Sonuçlarınızı görmek için mobil uygulamamızı indirin.
            </h3>
            <div>
              <div>
                <Image
                  src="/placeholder.png"
                  alt="Mobil Uygulama"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
