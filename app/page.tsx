'use client';

import { useState } from 'react';
import { Waves, Users, Calendar, Heart, MapPin, Mail, Phone, Instagram, Facebook, Twitter, ChevronDown, LucideIcon } from 'lucide-react';

interface NavigationItem {
  name: string;
  id: string;
}

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  volunteers: number;
}

interface Stat {
  label: string;
  value: string;
  icon: LucideIcon;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export default function BeachCleanupCampaign() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const navigation: NavigationItem[] = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Events', id: 'events' },
    { name: 'Volunteer', id: 'volunteer' },
    { name: 'Survey', id: 'survey' },
    { name: 'Contact', id: 'contact' }
  ];

  const upcomingEvents: Event[] = [
    {
      title: 'Sunset Beach Cleanup',
      date: 'November 15, 2025',
      time: '9:00 AM - 12:00 PM',
      location: 'Pantai Kenjeran',
      volunteers: 45
    },
    {
      title: 'Coastal Conservation Day',
      date: 'November 22, 2025',
      time: '8:00 AM - 1:00 PM',
      location: 'Surabaya North Quay',
      volunteers: 62
    },
    {
      title: 'Family Beach Day',
      date: 'December 6, 2025',
      time: '10:00 AM - 2:00 PM',
      location: 'Pantai Balekambang',
      volunteers: 38
    }
  ];

  const stats: Stat[] = [
    { label: 'Relawan', value: '2,500+', icon: Users },
    { label: 'Pembersihan Pantai', value: '150+', icon: Calendar },
    { label: 'Ton dikumpulkan', value: '45+', icon: Waves },
    { label: 'Pantai dibersihkan', value: '30+', icon: MapPin }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! Your application has been received.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const Clock = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-cyan-600" />
              <span className="text-xl font-bold text-gray-800">Jaga Pantai</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-cyan-600'
                      : 'text-gray-600 hover:text-cyan-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <ChevronDown className={`h-6 w-6 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-cyan-50 hover:text-cyan-600"
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-16 px-4 min-h-screen flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="clean-beach.jpg"
            alt="Beach background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-cyan-900/60"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
              Ayo Selamatkan
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Pantai Kita
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto drop-shadow-lg">
              Bergabunglah bersama kami dalam membersihkan pantai dan melindungi ekosistem laut untuk generasi mendatang.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('volunteer')}
                className="px-8 py-4 bg-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Jadi Relawan
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="px-8 py-4 bg-white text-cyan-600 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg"
              >
                Liat Acara
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <stat.icon className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bagian Tentang */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Tentang Misi Kami
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Jaga Pantai adalah gerakan lingkungan yang berdedikasi untuk melindungi ekosistem pantai kita yang berharga. Kami menyelenggarakan acara bersih-bersih pantai secara rutin, menyatukan relawan yang peduli terhadap konservasi laut.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sejak didirikan, kami telah mengerahkan ribuan relawan untuk menghilangkan berton-ton sampah plastik dan puing-puing dari pantai kami. Namun, kami lebih dari sekadar tim bersih-bersih – kami adalah pendidik, advokat, dan pencinta laut yang berkomitmen untuk menciptakan perubahan.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Didorong Komunitas</h3>
                    <p className="text-gray-600">Didukung oleh relawan yang bersemangat dari berbagai latar belakang</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Waves className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Dampak Terukur</h3>
                    <p className="text-gray-600">Setiap pembersihan memberikan perbedaan nyata bagi kehidupan laut</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl h-96 flex items-center justify-center text-white">
              <div className="text-center">
                <Waves className="h-24 w-24 mx-auto mb-4 opacity-80" />
                <p className="text-2xl font-semibold">Bersama Kita Bisa</p>
                <p className="text-3xl font-bold">Menciptakan Laut yang Biru</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Acara */}
      <section id="events" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Acara Mendatang
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Bergabunglah dengan kami di acara bersih-bersih pantai kami berikutnya. Semua tingkat keahlian diterima – kami menyediakan semua perlengkapan!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-cyan-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-cyan-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-cyan-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-cyan-600" />
                      <span>{event.volunteers} relawan terdaftar</span>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                    Daftar Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Menjadi Relawan
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Bergabunglah dengan komunitas penjaga pantai kami
          </p>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Alamat Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mengapa anda ingin menjadi relawan?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none transition resize-none"
                  placeholder=""
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Kirim Aplikasi
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Survey Section */}
      <section id="survey" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Bagikan Pendapat Anda
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Bantu kami meningkatkan upaya kami dengan mengisi survei singkat ini
          </p>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Survey</h3>
              <p className="opacity-90">Suara anda sangat berarti bagi kami</p>
            </div>
            <div className="p-8">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdYzK_rgiZ2SkGV3aa7Za0lfA6rxLKrjcxTbxxWH6AEMjjG6A/viewform?embedded=true"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg"
                title="Survey Form"
              >
                Loading…
              </iframe>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Cannot see the form? <a href="https://docs.google.com/forms" className="text-cyan-600 hover:underline" target="_blank" rel="noopener noreferrer">Open in new tab</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Kontak Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-4">
                <Mail className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@jagapantai.org</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-4">
                <Phone className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Telp Kami</h3>
              <p className="text-gray-600">+62 123-4567</p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Kunjungi Kami</h3>
              <p className="text-gray-600">123 Pantai, Kota Surabaya</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Follow kami di media sosial</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white hover:bg-cyan-700 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white hover:bg-cyan-700 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white hover:bg-cyan-700 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Waves className="h-6 w-6 text-cyan-400" />
            <span className="text-xl font-bold">Jaga Pantai</span>
          </div>
          <p className="text-gray-400 mb-4">
            Bersama, kita bisa buat perbedaan nyata untuk pantai dan laut kita.
          </p>
          <p className="text-sm text-gray-500">
            © 2025 Jaga Pantai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}