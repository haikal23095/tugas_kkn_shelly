import React, { useState, useEffect, FormEvent } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  RotateCw,
  Building2,
  Users,
  ShoppingBag,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Heart,
  Search,
  Award,
  BookOpen,
  ExternalLink,
  ThumbsUp,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Sprout,
  GraduationCap,
  Activity,
} from "lucide-react";

import logoDesa from "./img/logo-desa.PNG";
import strukturDesa from "./img/struktur_desa.png";

// Import Perangkat Desa
import fotoKepalaDesa from "./img/perangkat-desa/Ibu_kepala desa_Puryani.jpg";
import fotoSekretaris from "./img/perangkat-desa/Sekret_Wildan Firdaus, S.Pd.jpg";
import fotoKasiPemerintahan from "./img/perangkat-desa/Kasi Pemerintahan_Fauzi.jpg";
import fotoKasiKesejahteraan from "./img/perangkat-desa/Kasi_Kesejahteraan_Mon jamaluddin zen.jpg";
import fotoTataUsaha from "./img/perangkat-desa/Tata_usaha_M. nufal Al farisi.jpg";
import fotoKepalaDusunSumberPandan from "./img/perangkat-desa/Kepala_Dusun Sumber Pandan_Zainur_rahman aziz.jpg";
import fotoKepalaDusunBurajah from "./img/perangkat-desa/Kepala_dusun burajah_Moh laili.jpg";

// Import KKN
import fotoHaflatulImtihan1 from "./img/kegiatan-kkn/Haflatul-Imtihan/1.jpg";
import fotoHaflatulImtihan2 from "./img/kegiatan-kkn/Haflatul-Imtihan/2.jpg";
import fotoHaflatulImtihan3 from "./img/kegiatan-kkn/Haflatul-Imtihan/3.jpg";
import fotoHaflatulImtihan4 from "./img/kegiatan-kkn/Haflatul-Imtihan/4.jpg";
import fotoHaflatulImtihan5 from "./img/kegiatan-kkn/Haflatul-Imtihan/5.jpg";
import fotoHaflatulImtihan6 from "./img/kegiatan-kkn/Haflatul-Imtihan/6.jpg";

import fotoTasyakuran1 from "./img/kegiatan-kkn/tasyakuran/1.jpg";
import fotoTasyakuran2 from "./img/kegiatan-kkn/tasyakuran/2.jpeg";
import fotoTasyakuran3 from "./img/kegiatan-kkn/tasyakuran/3.jpg";
import fotoTasyakuran4 from "./img/kegiatan-kkn/tasyakuran/4.jpeg";

// Import KKN Dokumentasi Gallery
import kknDoc1 from "./img/dokumentasi-kkn/1.jpeg";
import kknDoc2 from "./img/dokumentasi-kkn/2.jpeg";
import kknDoc3 from "./img/dokumentasi-kkn/3.jpeg";
import kknDoc4 from "./img/dokumentasi-kkn/4.jpeg";
import kknDoc5 from "./img/dokumentasi-kkn/5.jpeg";
import kknDoc6 from "./img/dokumentasi-kkn/6.jpeg";
import kknDoc7 from "./img/dokumentasi-kkn/7.jpeg";
import kknDoc8 from "./img/dokumentasi-kkn/8.jpeg";

const kknGalleryPhotos = [
  { id: 1, src: kknDoc1, title: "Pojok Baca & Kelas Kreatif Digital", deskripsi: "Inisiasi ruang baca anak dan bimbingan literasi teknologi." },
  { id: 2, src: kknDoc2, title: "Pemberdayaan Sektor Ekonomi Kreatif", deskripsi: "Pendampingan kemasan modern & sertifikasi Halal produk warga." },
  { id: 3, src: kknDoc3, title: "Sosialisasi Gerakan Desa Sehat", deskripsi: "Pencegahan stunting dan penyuluhan pola hidup bersih sehat." },
  { id: 4, src: kknDoc4, title: "Pembenahan Infrastruktur Lingkungan", deskripsi: "Pembuatan & pemasangan plang penunjuk arah dusun yang estetik." },
  { id: 5, src: kknDoc5, title: "Penyuluhan Manajemen Pertanian", deskripsi: "Pendampingan petani untuk efisiensi produksi pertanian lahan kering." },
  { id: 6, src: kknDoc6, title: "Program Bimbingan Belajar Santri", deskripsi: "Pembinaan karakter dan penguatan spiritual generasi muda desa." },
  { id: 7, src: kknDoc7, title: "Gotong Royong Bersih Dusun", deskripsi: "Aksi kolaborasi mahasiswa dan Karang Taruna mempercantik desa." },
  { id: 8, src: kknDoc8, title: "Pentas Seni & Malam Keakraban", deskripsi: "Apresiasi kreativitas santri sekaligus pelepasan resmi KKN." },
];

// Import UMKM
import fotoMiskali1 from "./img/produk-umkm/Gula-merah/Bapak Miskali.jpeg";
import fotoMiskali2 from "./img/produk-umkm/Gula-merah/Bapak Miskali2.jpeg";
import fotoSudiya1 from "./img/produk-umkm/Gula-merah/Ibu_Sudiya.jpeg";
import fotoSudiya2 from "./img/produk-umkm/Gula-merah/Ibu_Sudiya2.jpeg";

import fotoToyyibah1 from "./img/produk-umkm/Tikar/Ibu_Toyyibah.jpeg";
import fotoToyyibah2 from "./img/produk-umkm/Tikar/Ibu_Toyyibah2.jpeg";
import fotoMaryam from "./img/produk-umkm/Tikar/Ibu_Maryam.jpeg";
import fotoBunidah1 from "./img/produk-umkm/Tikar/Ibu_Bunidah.jpeg";
import fotoBunidah2 from "./img/produk-umkm/Tikar/Ibu_Bunidah2.jpeg";

// Structure types
interface Perangkat {
  nama: string;
  jabatan: string;
  foto: string;
  deskripsi: string;
  email: string;
}

interface UMKMProduct {
  id: number;
  nama: string;
  kategori: string;
  harga: string;
  produsen: string;
  noHp: string;
  alamat: string;
  foto: string[];
  ringkasan: string;
  detail: string;
}

interface KKNActivity {
  id: number;
  judul: string;
  kategori: string;
  tanggal: string;
  lokasi: string;
  foto: string[];
  deskripsi: string;
  dampak: string;
  partisipan: string;
}

const kknActivities: KKNActivity[] = [
  {
    id: 1,
    judul: "Haflatul Imtihan & Pentas Seni Keagamaan",
    kategori: "Keagamaan & Budaya",
    tanggal: "29 Juni 2026",
    lokasi: "Madrasah Desa Guluk Manjung",
    foto: [
      fotoHaflatulImtihan1,
      fotoHaflatulImtihan2,
      fotoHaflatulImtihan3,
      fotoHaflatulImtihan4,
      fotoHaflatulImtihan5,
      fotoHaflatulImtihan6,
    ],
    deskripsi:
      "Kolaborasi mahasiswa KKN bersama tokoh agama dan pengurus madrasah dalam menyelenggarakan Haflatul Imtihan. Kegiatan ini dimeriahkan dengan pentas seni islami, pembacaan puisi, hafalan Al-Qur'an, dan pembagian hadiah bagi santri berprestasi.",
    dampak:
      "Meningkatkan ukhuwah islamiyah antarwarga, memberikan wadah kreativitas seni islami bagi anak-anak desa, serta memotivasi semangat belajar para santri.",
    partisipan:
      "Mahasiswa KKN, Ustadz/Ustadzah, & Wali Santri Desa Guluk Manjung",
  },
  {
    id: 2,
    judul: "Tasyakuran & Penutupan Program KKN",
    kategori: "Sosial & Budaya",
    tanggal: "04 Juli 2026",
    lokasi: "Balai Desa Guluk Manjung",
    foto: [
      fotoTasyakuran1,
      fotoTasyakuran2,
      fotoTasyakuran3,
      fotoTasyakuran4,
    ],
    deskripsi:
      "Acara tasyakuran sebagai wujud rasa syukur atas kelancaran seluruh program kerja KKN di Desa Guluk Manjung. Diisi dengan ramah tamah bersama perangkat desa, pemaparan hasil pengabdian, penyerahan kenang-kenangan secara simbolis, dan doa bersama warga.",
    dampak:
      "Mempererat silaturahmi kekeluargaan antara mahasiswa KKN dengan pemerintah desa dan seluruh masyarakat, serta menandai selesainya program KKN.",
    partisipan:
      "Kepala Desa, Perangkat Desa, BPD, Tokoh Masyarakat, & Mahasiswa KKN",
  },
];

export default function App() {
  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Interactive UI States
  const [activeTab, setActiveTab] = useState("visi-misi");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  // Accordion for Sejarah Desa
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);

  // KKN Documentation Carousel State
  const [activeKknSlide, setActiveKknSlide] = useState(0);
  const [isAutoPlayKkn, setIsAutoPlayKkn] = useState(true);

  // Lightbox State for KKN Photos
  const [activeLightboxImg, setActiveLightboxImg] = useState<string | null>(null);

  // KKN Inner Carousel State & Handlers
  const [activeKknImgIndexes, setActiveKknImgIndexes] = useState<Record<number, number>>({});

  const getActiveKknImgIndex = (activityId: number) => activeKknImgIndexes[activityId] || 0;

  const handlePrevKknImage = (activityId: number, totalImages: number) => {
    setActiveKknImgIndexes((prev) => {
      const current = prev[activityId] || 0;
      return {
        ...prev,
        [activityId]: (current - 1 + totalImages) % totalImages,
      };
    });
  };

  const handleNextKknImage = (activityId: number, totalImages: number) => {
    setActiveKknImgIndexes((prev) => {
      const current = prev[activityId] || 0;
      return {
        ...prev,
        [activityId]: (current + 1) % totalImages,
      };
    });
  };

  // Reset KKN inner image index when main activity slide changes
  useEffect(() => {
    setActiveKknImgIndexes((prev) => ({
      ...prev,
      [kknActivities[activeKknSlide].id]: 0,
    }));
  }, [activeKknSlide]);

  // Autoplay KKN Carousel
  useEffect(() => {
    if (!isAutoPlayKkn) return;
    const interval = setInterval(() => {
      setActiveKknSlide((prev) => (prev + 1) % kknActivities.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlayKkn]);

  // Toggle card flip
  const handleCardFlip = (id: number) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // UMKM Inner Carousel State & Handlers
  const [activeImgIndexes, setActiveImgIndexes] = useState<
    Record<number, number>
  >({});

  const getActiveImgIndex = (productId: number) =>
    activeImgIndexes[productId] || 0;

  const handlePrevImage = (
    productId: number,
    totalImages: number,
    e: React.MouseEvent,
  ) => {
    e.stopPropagation();
    setActiveImgIndexes((prev) => {
      const current = prev[productId] || 0;
      return {
        ...prev,
        [productId]: (current - 1 + totalImages) % totalImages,
      };
    });
  };

  const handleNextImage = (
    productId: number,
    totalImages: number,
    e: React.MouseEvent,
  ) => {
    e.stopPropagation();
    setActiveImgIndexes((prev) => {
      const current = prev[productId] || 0;
      return {
        ...prev,
        [productId]: (current + 1) % totalImages,
      };
    });
  };

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Perangkat Desa Data
  const kepalaDesa = {
    nama: "Puryani",
    jabatan: "Kepala Desa Guluk Manjung",
    foto: fotoKepalaDesa,
    deskripsi:
      "Memimpin Desa Guluk Manjung dengan dedikasi tinggi guna mewujudkan kemandirian pertanian modern, ekonomi kreatif, serta pelayanan digital desa yang inklusif.",
    quote:
      "Mengabdi dengan ikhlas, membangun desa dengan gotong royong demi Guluk Manjung yang mandiri, asri, dan berdaya saing.",
  };

  const stafDesa: Perangkat[] = [
    {
      nama: "Wildan Firdaus, S.Pd.",
      jabatan: "Sekretaris Desa",
      foto: fotoSekretaris,
      deskripsi:
        "Bertanggung jawab atas administrasi umum, kearsipan, pelayanan data publik, serta koordinasi seluruh program kerja perangkat desa.",
      email: "sekretaris@gulukmanjung.desa.id",
    },
    {
      nama: "Fauzi",
      jabatan: "Kasi Pemerintahan",
      foto: fotoKasiPemerintahan,
      deskripsi:
        "Mengelola administrasi kependudukan, pertanahan, perizinan wilayah, keamanan, serta ketertiban umum warga desa.",
      email: "pemerintahan@gulukmanjung.desa.id",
    },
    {
      nama: "Mon Jamaluddin Zen",
      jabatan: "Kasi Kesejahteraan",
      foto: fotoKasiKesejahteraan,
      deskripsi:
        "Mengurus pemberdayaan masyarakat, pembagian bantuan sosial, pengelolaan posyandu, serta kesejahteraan sosial warga.",
      email: "kesejahteraan@gulukmanjung.desa.id",
    },
    {
      nama: "M. Nufal Al Farisi",
      jabatan: "Kaur Tata Usaha",
      foto: fotoTataUsaha,
      deskripsi:
        "Membantu urusan surat-menyurat, penyediaan logistik kantor, pengelolaan sarana prasarana, serta keperluan umum desa.",
      email: "tatausaha@gulukmanjung.desa.id",
    },
    {
      nama: "Zainur Rahman Aziz",
      jabatan: "Kepala Dusun Sumber Pandan",
      foto: fotoKepalaDusunSumberPandan,
      deskripsi:
        "Memimpin wilayah Dusun Sumber Pandan dalam pembinaan ketentraman, pelayanan warga, serta koordinasi pembangunan dusun.",
      email: "sumberpandan@gulukmanjung.desa.id",
    },
    {
      nama: "Moh. Laili",
      jabatan: "Kepala Dusun Burajah",
      foto: fotoKepalaDusunBurajah,
      deskripsi:
        "Memimpin wilayah Dusun Burajah dalam pembinaan ketentraman, pelayanan warga, serta koordinasi pembangunan dusun.",
      email: "burajah@gulukmanjung.desa.id",
    },
  ];

  // UMKM Products Data
  const umkmProducts: UMKMProduct[] = [
    {
      id: 1,
      nama: "Gula Merah Tradisional",
      kategori: "Kuliner",
      harga: "Mulai Rp 15.000",
      produsen: "Bapak Miskali",
      noHp: "085203785793",
      alamat: "RT 07 RW 03 Dusun Burajah, Desa Guluk Manjung, Kec. Bluto",
      foto: [fotoMiskali1, fotoMiskali2],
      ringkasan:
        "Gula merah cetak murni hasil olahan air nira kelapa alami yang diproduksi secara tradisional oleh Bapak Miskali.",
      detail:
        "Dibuat langsung dari air nira pohon kelapa berkualitas tinggi yang disadap setiap pagi. Diproses dengan cara dimasak secara tradisional menggunakan tungku kayu bakar tanpa bahan pengawet kimia maupun pemanis buatan, menghasilkan cita rasa manis yang legit khas, aroma harum yang kuat, serta tekstur yang pas. Sangat cocok sebagai bahan dasar bumbu kuliner tradisional, minuman hangat, maupun pembuat kue.",
    },
    {
      id: 2,
      nama: "Gula Merah Tradisional",
      kategori: "Kuliner",
      harga: "Mulai Rp 15.000",
      produsen: "Ibu Sudiya",
      noHp: "082333092496",
      alamat: "RT 07 RW 03 Dusun Burajah, Desa Guluk Manjung, Kec. Bluto",
      foto: [fotoSudiya1, fotoSudiya2],
      ringkasan:
        "Gula merah cetak murni olahan nira kelapa segar berkualitas hasil produksi rumahan Ibu Sudiya.",
      detail:
        "Diproduksi secara higienis menggunakan metode tradisional yang diwariskan turun-temurun oleh Ibu Sudiya di Dusun Burajah. Menggunakan nira kelapa murni yang disaring bersih, dimasak dengan api stabil dari tungku kayu hingga mengental sempurna and dicetak tanpa tambahan bahan pengawet. Menghasilkan gula merah dengan rasa manis yang alami dan daya simpan yang baik.",
    },
    {
      id: 3,
      nama: "Tikar Tradisional",
      kategori: "Kerajinan",
      harga: "Mulai Rp 35.000",
      produsen: "Ibu Toyyibah",
      noHp: "082333750505",
      alamat: "RT 07 RW 03 Dusun Burajah, Desa Guluk Manjung, Kec. Bluto",
      foto: [fotoToyyibah1, fotoToyyibah2],
      ringkasan:
        "Tikar anyaman daun siwalan (lontar) estetik dan kuat hasil kerajinan tangan Ibu Toyyibah.",
      detail:
        "Dianyam secara manual dengan ketelitian tinggi oleh Ibu Toyyibah. Menggunakan daun siwalan pilihan yang diolah secara tradisional mulai dari penjemuran hingga pewarnaan alami. Menghasilkan tikar yang lentur, sejuk saat diduduki, dan sangat cocok digunakan untuk bersantai di rumah maupun sebagai dekorasi interior bernilai seni tinggi.",
    },
    {
      id: 4,
      nama: "Tikar Tradisional",
      kategori: "Kerajinan",
      harga: "Mulai Rp 35.000",
      produsen: "Ibu Maryam",
      noHp: "085203785793",
      alamat: "RT 07 RW 03 Dusun Burajah, Desa Guluk Manjung, Kec. Bluto",
      foto: [fotoMaryam],
      ringkasan:
        "Kerajinan tikar anyaman daun lontar alami dengan anyaman rapat khas karya Ibu Maryam.",
      detail:
        "Karya kerajinan tangan orisinal dari Ibu Maryam di Dusun Burajah. Setiap tikar dibuat dengan dedikasi tinggi menggunakan rajutan daun lontar yang rapat, rapi, dan tahan lama. Proses pengeringan daun kelapa siwalan di bawah terik matahari Sumenep memastikan kualitas serat tikar tetap kuat dan tahan jamur selama bertahun-tahun.",
    },
    {
      id: 5,
      nama: "Tikar Tradisional",
      kategori: "Kerajinan",
      harga: "Mulai Rp 35.000",
      produsen: "Ibu Bunidah",
      noHp: "082330975028",
      alamat: "RT 10 RW 04 Dusun Burajah, Desa Guluk Manjung, Kec. Bluto",
      foto: [fotoBunidah1, fotoBunidah2],
      ringkasan:
        "Tikar daun siwalan tradisional dengan kualitas anyaman premium hasil produksi Ibu Bunidah.",
      detail:
        "Diproduksi langsung oleh Ibu Bunidah di RT 10 RW 04 Dusun Burajah. Tikar ini memiliki anyaman khas yang tebal namun tetap fleksibel and mudah dilipat. Sangat praktis digunakan untuk kegiatan kumpul keluarga, tasyakuran warga, maupun alas bersantai di ruang tengah dengan kesejukan alami khas serat siwalan.",
    },
  ];

  // Filtering products based on search & category tab
  const filteredProducts = umkmProducts.filter((p) => {
    const matchesSearch =
      p.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.ringkasan.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Semua" || p.kategori === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-brand-cream-50 text-brand-cream-800 font-sans antialiased selection:bg-brand-gold-400 selection:text-brand-green-900">
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-brand-cream-50/90 backdrop-blur-md border-b border-brand-cream-200 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <img
                src={logoDesa}
                alt="Logo Desa Guluk Manjung"
                className="w-14 h-14 object-contain drop-shadow-sm"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="block text-xs font-extrabold text-brand-green-900 uppercase tracking-wider leading-none">
                  Pemerintah Desa
                </span>
                <span className="block text-[10px] font-bold text-brand-gold-600 uppercase tracking-widest mt-1.5 leading-none">
                  Guluk Manjung
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => scrollToSection("hero")}
                className="px-4 py-2 rounded-lg text-sm font-medium text-brand-green-900 hover:bg-brand-cream-100 transition-all duration-200"
              >
                Beranda
              </button>
              <button
                onClick={() => scrollToSection("visi-misi")}
                className="px-4 py-2 rounded-lg text-sm font-medium text-brand-green-900 hover:bg-brand-cream-100 transition-all duration-200"
              >
                Visi & Sejarah
              </button>
              <button
                onClick={() => scrollToSection("perangkat")}
                className="px-4 py-2 rounded-lg text-sm font-medium text-brand-green-900 hover:bg-brand-cream-100 transition-all duration-200"
              >
                Perangkat Desa
              </button>
              <button
                onClick={() => scrollToSection("umkm")}
                className="px-4 py-2 rounded-lg text-sm font-medium text-brand-green-900 hover:bg-brand-cream-100 transition-all duration-200"
              >
                Produk UMKM
              </button>
              <button
                onClick={() => scrollToSection("kkn")}
                className="px-4 py-2 rounded-lg text-sm font-medium text-brand-green-900 hover:bg-brand-cream-100 transition-all duration-200"
              >
                Kegiatan Warga
              </button>
              <button
                onClick={() => scrollToSection("dokumentasi-kkn")}
                className="px-4 py-2 rounded-lg text-sm font-medium text-brand-green-900 hover:bg-brand-cream-100 transition-all duration-200"
              >
                Kegiatan KKN
              </button>
              <button
                onClick={() => scrollToSection("kontak")}
                className="px-4 py-2 rounded-lg text-sm font-medium text-brand-green-900 hover:bg-brand-cream-100 transition-all duration-200"
              >
                Lokasi & Kontak
              </button>
            </nav>

            {/* Direct CTA button on Header */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToSection("dokumentasi-kkn")}
                className="bg-brand-green-700 hover:bg-brand-green-800 text-brand-cream-50 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-all duration-200 hover:shadow flex items-center space-x-2 border border-brand-green-900"
              >
                <BookOpen className="w-4 h-4 text-brand-gold-400" />
                <span>Dokumentasi KKN</span>
              </button>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-brand-cream-100 text-brand-green-900 hover:bg-brand-cream-200 transition-colors border border-brand-cream-200"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-brand-cream-200 bg-brand-cream-50/95 backdrop-blur-md py-4 px-4 space-y-1 shadow-inner animate-in fade-in duration-200">
            <button
              onClick={() => scrollToSection("hero")}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-brand-green-900 hover:bg-brand-cream-100 flex items-center"
            >
              Beranda
            </button>
            <button
              onClick={() => scrollToSection("visi-misi")}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-brand-green-900 hover:bg-brand-cream-100 flex items-center"
            >
              Visi & Sejarah
            </button>
            <button
              onClick={() => scrollToSection("perangkat")}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-brand-green-900 hover:bg-brand-cream-100 flex items-center"
            >
              Perangkat Desa
            </button>
            <button
              onClick={() => scrollToSection("umkm")}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-brand-green-900 hover:bg-brand-cream-100 flex items-center"
            >
              Produk UMKM
            </button>
            <button
              onClick={() => scrollToSection("kkn")}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-brand-green-900 hover:bg-brand-cream-100 flex items-center"
            >
              Kegiatan Warga
            </button>
            <button
              onClick={() => scrollToSection("dokumentasi-kkn")}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-brand-green-900 hover:bg-brand-cream-100 flex items-center"
            >
              Kegiatan KKN
            </button>
            <button
              onClick={() => scrollToSection("kontak")}
              className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-brand-green-900 hover:bg-brand-cream-100 flex items-center"
            >
              Lokasi & Kontak
            </button>
            <div className="pt-2 px-4">
              <button
                onClick={() => scrollToSection("dokumentasi-kkn")}
                className="w-full bg-brand-green-700 text-brand-cream-50 py-3 rounded-xl font-bold flex items-center justify-center space-x-2 shadow"
              >
                <BookOpen className="w-5 h-5 text-brand-gold-400" />
                <span>Dokumentasi KKN</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center justify-center bg-brand-green-900 overflow-hidden"
      >
        {/* Background Image with elegant overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1562979314-dee785091f4d?auto=format&fit=crop&w=1920&q=80"
            alt="Scenic view of rice terraces at sunset"
            className="w-full h-full object-cover object-center scale-105 transform origin-center transition-all duration-[10s]"
            referrerPolicy="no-referrer"
          />
          {/* Layered gradients for top and bottom shadows and warm green overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green-950 via-brand-green-900/60 to-brand-green-950/40" />
          <div className="absolute inset-0 bg-brand-green-950/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Slogan, Title, description, action buttons */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-brand-gold-400/20 backdrop-blur-md border border-brand-gold-400/40 px-4 py-2 rounded-full text-brand-gold-100 text-xs sm:text-sm font-bold tracking-wider uppercase">
                <Sparkles className="w-4 h-4 text-brand-gold-400 animate-pulse" />
                <span>Selamat Datang di Portal Resmi</span>
              </div>

              {/* Slogan & Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-brand-cream-50 leading-tight tracking-tight drop-shadow-md">
                Desa <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-400 via-amber-300 to-brand-gold-400 italic">
                  Guluk Manjung
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-brand-cream-100/90 leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
                “Aman, Tentram, Makmur dan Berkeadilan”. Sebuah desa berkembang
                di Kecamatan Bluto Kabupaten Sumenep yang memadukan kerukunan
                sosial warga, potensi pertanian kering, dan ekonomi kreatif
                anyaman siwalan yang mandiri.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => scrollToSection("visi-misi")}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-gold-400 hover:bg-brand-gold-500 text-brand-green-950 font-extrabold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-3 text-base border-2 border-brand-gold-500 hover:scale-[1.02]"
                >
                  <span>Jelajahi Desa</span>
                  <ArrowRight className="w-5 h-5 text-brand-green-950" />
                </button>
                <button
                  onClick={() => scrollToSection("umkm")}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-green-800/80 hover:bg-brand-green-800 backdrop-blur-sm text-brand-cream-50 border-2 border-brand-cream-100/30 hover:border-brand-gold-400/50 font-bold rounded-2xl shadow-md transition-all duration-200 flex items-center justify-center space-x-2 text-base hover:scale-[1.02]"
                >
                  <ShoppingBag className="w-5 h-5 text-brand-gold-400" />
                  <span>Produk UMKM Lokal</span>
                </button>
              </div>
            </div>

            {/* Right Column: Logo and explanation card */}
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
              <div className="bg-brand-green-950/50 backdrop-blur-md border border-brand-cream-100/10 p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
                {/* Accent glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-gold-400/10 rounded-full blur-2xl group-hover:bg-brand-gold-400/20 transition-all duration-500" />

                {/* Logo and title */}
                <div className="flex flex-col items-center mb-6 relative z-10">
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 bg-[#FFFDF9]/10 rounded-2xl p-4 flex items-center justify-center border border-brand-gold-400/30 shadow-inner group/logo hover:border-brand-gold-400 hover:shadow-brand-gold-400/10 transition-all duration-300">
                    <img
                      src={logoDesa}
                      alt="Logo Desa Guluk Manjung"
                      className="max-w-full max-h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover/logo:scale-110"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-serif font-bold text-brand-gold-400 tracking-wide text-center">
                    Logo Desa Guluk Manjung
                  </h3>
                  <p className="text-xs text-brand-cream-200/80 text-center mt-1">
                    Kecamatan Bluto, Kabupaten Sumenep
                  </p>
                </div>

                {/* Explanation Details */}
                <div className="border-t border-brand-cream-100/10 pt-4 relative z-10">
                  <h4 className="text-xs font-bold text-brand-gold-400 tracking-wider uppercase mb-3 flex items-center justify-center lg:justify-start">
                    <Sparkles className="w-3.5 h-3.5 mr-1.5 text-brand-gold-400 animate-pulse" />
                    Arti Lambang & Warna
                  </h4>

                  {/* Interactive details */}
                  <div className="max-h-[220px] overflow-y-auto pr-2 space-y-2.5 scrollbar-thin scrollbar-thumb-brand-gold-400/20 scrollbar-track-transparent">
                    <div className="p-3 rounded-xl bg-brand-green-900/40 hover:bg-brand-green-900/60 transition-colors border border-brand-cream-100/5 text-xs text-brand-cream-100">
                      <span className="font-bold text-brand-gold-400 block mb-1">
                        ⚔️ Golok Berdiri
                      </span>
                      Melambangkan bentuk peta Desa Guluk Manjung yang berbentuk
                      Golok Berdiri (Golok Manjeng).
                    </div>
                    <div className="p-3 rounded-xl bg-brand-green-900/40 hover:bg-brand-green-900/60 transition-colors border border-brand-cream-100/5 text-xs text-brand-cream-100">
                      <span className="font-bold text-brand-gold-400 block mb-1">
                        🌾 Padi dan Kapas
                      </span>
                      Melambangkan sandang pangan yang menjadi kebutuhan hidup
                      masyarakat desa.
                    </div>
                    <div className="p-3 rounded-xl bg-brand-green-900/40 hover:bg-brand-green-900/60 transition-colors border border-brand-cream-100/5 text-xs text-brand-cream-100">
                      <span className="font-bold text-brand-gold-400 block mb-1">
                        ⭐ Bintang
                      </span>
                      Melambangkan cahaya keagungan Tuhan Yang Maha Esa.
                    </div>
                    <div className="p-3 rounded-xl bg-brand-green-900/40 hover:bg-brand-green-900/60 transition-colors border border-brand-cream-100/5 text-xs text-brand-cream-100">
                      <span className="font-bold text-brand-gold-400 block mb-1">
                        🌍 Bola Dunia
                      </span>
                      Melambangkan tempat hidup manusia di dunia, khususnya Desa
                      Guluk Manjung.
                    </div>
                    <div className="p-3 rounded-xl bg-brand-green-900/40 hover:bg-brand-green-900/60 transition-colors border border-brand-cream-100/5 text-xs text-brand-cream-100">
                      <span className="font-bold text-brand-gold-400 block mb-1">
                        🍃 Tikar Daun Lontar
                      </span>
                      Melambangkan kekayaan alam dan sumber ekonomi masyarakat
                      Desa Guluk Manjung.
                    </div>
                    <div className="p-3 rounded-xl bg-brand-green-900/40 hover:bg-brand-green-900/60 transition-colors border border-brand-cream-100/5 text-xs text-brand-cream-100">
                      <span className="font-bold text-brand-gold-400 block mb-1">
                        🔵 Warna Biru
                      </span>
                      Melambangkan ketenangan dan kedamaian Desa Guluk Manjung.
                    </div>
                    <div className="p-3 rounded-xl bg-brand-green-900/40 hover:bg-brand-green-900/60 transition-colors border border-brand-cream-100/5 text-xs text-brand-cream-100">
                      <span className="font-bold text-brand-gold-400 block mb-1">
                        🟢 Warna Hijau
                      </span>
                      Melambangkan warga NU serta warna Daun Lontar yang menjadi
                      kekayaan alam desa.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* High-quality Stats Grid */}
          <div className="mt-20 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 bg-brand-green-950/60 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-brand-cream-100/10">
            <div className="text-center p-3">
              <span className="block text-3xl sm:text-4xl font-serif font-black text-brand-gold-400">
                1.844
              </span>
              <span className="block text-xs sm:text-sm text-brand-cream-200 font-medium tracking-wide uppercase mt-1">
                Total Penduduk (BPS)
              </span>
            </div>
            <div className="text-center p-3 border-l border-brand-cream-100/10">
              <span className="block text-3xl sm:text-4xl font-serif font-black text-brand-gold-400">
                1,41 km²
              </span>
              <span className="block text-xs sm:text-sm text-brand-cream-200 font-medium tracking-wide uppercase mt-1">
                Luas Wilayah
              </span>
            </div>
            <div className="text-center p-3 border-l border-brand-cream-100/10">
              <span className="block text-3xl sm:text-4xl font-serif font-black text-brand-gold-400">
                2 Dusun
              </span>
              <span className="block text-xs sm:text-sm text-brand-cream-200 font-medium tracking-wide uppercase mt-1">
                Sumber Pandan & Buraja
              </span>
            </div>
            <div className="text-center p-3 border-l border-brand-cream-100/10">
              <span className="block text-3xl sm:text-4xl font-serif font-black text-brand-gold-400">
                Kondusif
              </span>
              <span className="block text-xs sm:text-sm text-brand-cream-200 font-medium tracking-wide uppercase mt-1">
                Tingkat Keamanan
              </span>
            </div>
          </div>
        </div>

        {/* Decorative Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-12 text-brand-cream-50 fill-current"
          >
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
          </svg>
        </div>
      </section>

      {/* POTENSI DESA SECTION */}
      <section
        id="potensi"
        className="py-20 bg-brand-cream-50/50 border-b border-brand-cream-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-green-700 tracking-widest uppercase block mb-2">
              Kekayaan & Sumber Daya
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-green-900 leading-tight">
              Potensi Desa Guluk Manjung
            </h2>
            <div className="w-24 h-1 bg-brand-gold-400 mx-auto mt-4 rounded-full" />
            <p className="text-brand-cream-800 text-sm sm:text-base mt-4 leading-relaxed">
              Kombinasi luar biasa dari potensi wilayah geografis dan kekuatan kelembagaan gotong royong warga menjadi modal utama pembangunan desa yang berkelanjutan.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Column 1: Potensi Wilayah (Geografis & Alam) */}
            <div className="bg-[#FFFDF9] border border-brand-cream-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="p-2.5 bg-brand-gold-100 text-brand-gold-600 rounded-2xl border border-brand-gold-200/50">
                    <Sprout className="w-5 h-5" />
                  </span>
                  <h3 className="text-xl font-bold text-brand-green-900 tracking-tight">
                    Potensi Wilayah & Geografis
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-brand-cream-800 leading-relaxed font-light">
                  Berdasarkan karakteristik peta desa dan bentang alamnya, Guluk Manjung memiliki modal infrastruktur dan sumber daya alam yang unggul:
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-brand-cream-100">
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold-500 shrink-0 mt-2" />
                  <div>
                    <span className="font-bold text-brand-green-900 block">Lahan Pertanian Luas & Subur</span>
                    <span className="text-brand-cream-800 leading-relaxed font-light">Tanah agraris subur yang sangat potensial untuk pertanian lahan kering dan perkebunan produktif warga.</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 text-xs sm:text-sm border-t border-brand-cream-50 pt-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold-500 shrink-0 mt-2" />
                  <div>
                    <span className="font-bold text-brand-green-900 block">Gedung Sekolah Representatif</span>
                    <span className="text-brand-cream-800 leading-relaxed font-light">Fasilitas sarana pendidikan yang memadai dan kondusif untuk mendukung tumbuh kembang intelektual anak-anak desa.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs sm:text-sm border-t border-brand-cream-50 pt-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold-500 shrink-0 mt-2" />
                  <div>
                    <span className="font-bold text-brand-green-900 block">Sarana Ibadah Memadai</span>
                    <span className="text-brand-cream-800 leading-relaxed font-light">Rumah ibadah dan madrasah yang representatif sebagai pusat pembinaan moral, akhlak, dan spiritual warga.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs sm:text-sm border-t border-brand-cream-50 pt-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold-500 shrink-0 mt-2" />
                  <div>
                    <span className="font-bold text-brand-green-900 block">Sarana Kesehatan Tersedia</span>
                    <span className="text-brand-cream-800 leading-relaxed font-light">Fasilitas poskesdes dan posyandu yang siap sedia menjaga kesehatan ibu, anak, dan lansia di lingkungan desa.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Potensi SDM & Sosial Kelembagaan */}
            <div className="bg-[#FFFDF9] border border-brand-cream-200 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="p-2.5 bg-brand-gold-100 text-brand-gold-600 rounded-2xl border border-brand-gold-200/50">
                    <Users className="w-5 h-5" />
                  </span>
                  <h3 className="text-xl font-bold text-brand-green-900 tracking-tight">
                    Potensi SDM & Kelembagaan
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-brand-cream-800 leading-relaxed font-light">
                  Kekuatan modal sosial kemasyarakatan dan tata kelola pemerintah desa yang progresif dan harmonis:
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-brand-cream-100">
                <div className="flex items-start space-x-3 text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold-500 shrink-0 mt-2" />
                  <div>
                    <span className="font-bold text-brand-green-900 block">Penduduk Usia Produktif Sangat Tinggi</span>
                    <span className="text-brand-cream-800 leading-relaxed font-light">Didominasi usia kerja aktif yang menjadi motor penggerak transformasi ekonomi dan UMKM kreatif.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs sm:text-sm border-t border-brand-cream-50 pt-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold-500 shrink-0 mt-2" />
                  <div>
                    <span className="font-bold text-brand-green-900 block">Lembaga & Perangkat Desa Lengkap</span>
                    <span className="text-brand-cream-800 leading-relaxed font-light">Aparat desa, BPD, dan LPMD yang progresif, militan, dan sigap dalam pelayanan birokrasi warga.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-xs sm:text-sm border-t border-brand-cream-50 pt-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold-500 shrink-0 mt-2" />
                  <div>
                    <span className="font-bold text-brand-green-900 block">Kehidupan Sosial yang Rukun & Tentram</span>
                    <span className="text-brand-cream-800 leading-relaxed font-light">Kerukunan antarwarga yang menjunjung tinggi asas kekeluargaan, kebersamaan, serta budaya gotong royong yang lestari.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEJARAH & VISI MISI TAB SECTION */}
      <section
        id="visi-misi"
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-brand-green-700 tracking-widest uppercase mb-3">
            Mengenal Lebih Dekat
          </h2>
          <p className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-green-900">
            Visi, Misi & Sejarah Desa
          </p>
          <div className="w-24 h-1 bg-brand-gold-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Welcome and Accordion Sejarah - 5 columns */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FFFDF9] border border-brand-cream-200 p-8 rounded-3xl shadow-sm relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gold-100 rounded-full opacity-30" />
              <div className="relative">
                <span className="inline-block p-3 bg-brand-green-50 text-brand-green-700 rounded-2xl mb-4 border border-brand-green-100">
                  <BookOpen className="w-6 h-6" />
                </span>
                <h3 className="text-xl font-bold text-brand-green-900 mb-3">
                  Sambutan Pembuka
                </h3>
                <p className="text-brand-cream-800 leading-relaxed text-sm sm:text-base">
                  Kami berkomitmen membangun keterbukaan informasi publik dan
                  mempercepat pembangunan di segala sektor. Melalui portal
                  informasi ini, kami mengundang bapak/ibu sekalian untuk
                  menjelajahi potensi agraris, kerajinan lokal, dan keindahan
                  budaya Desa Guluk Manjung.
                </p>
                <div className="mt-6 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-brand-gold-400 flex items-center justify-center text-brand-green-900 font-bold text-sm">
                    KS
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-brand-green-900 leading-none">
                      Pemerintah Desa
                    </span>
                    <span className="block text-xs text-brand-cream-800 mt-1">
                      Guluk Manjung Digital
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive History Accordion */}
            <div className="bg-[#FFFDF9] border border-brand-cream-200 rounded-3xl overflow-hidden shadow-sm">
              <button
                onClick={() => setIsHistoryExpanded(!isHistoryExpanded)}
                className="w-full flex items-center justify-between p-6 hover:bg-brand-cream-100 transition-colors text-left"
              >
                <div className="flex items-center space-x-3">
                  <span className="p-2.5 bg-brand-gold-100 text-brand-gold-600 rounded-xl">
                    <Award className="w-5 h-5" />
                  </span>
                  <div>
                    <h4 className="font-bold text-brand-green-900 text-base">
                      Sejarah Berdirinya Desa
                    </h4>
                    <span className="text-xs text-brand-cream-800">
                      Berdiri sejak tahun 1928
                    </span>
                  </div>
                </div>
                <div
                  className={`p-1.5 rounded-lg bg-brand-cream-200 text-brand-green-900 transition-transform duration-300 ${isHistoryExpanded ? "rotate-180" : ""}`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isHistoryExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-brand-cream-100 bg-[#FFFDF9] text-sm text-brand-cream-800 leading-relaxed space-y-3 animate-in slide-in-from-top-4 duration-300">
                  <p>
                    Nama <strong>Guluk Manjung</strong> diambil dari model atau
                    bentuk peta desa yang seperti golok lancip atau mancung ke
                    atas.
                  </p>
                  <p>
                    Secara geografis, wilayah desa ini cenderung menyempit di
                    bagian tertentu lalu melebar ke arah barat (ke arah Desa
                    Kampung). Berdasarkan karakteristik geografis tersebut,
                    bentuk visual peta desa diibaratkan menyerupai sebuah golok
                    yang berdiri (Golok Manjeng).
                  </p>
                  <p className="p-3 bg-brand-gold-50 border-l-4 border-brand-gold-500 text-xs italic text-brand-gold-600 rounded">
                    &ldquo;Model peta yang mancung ke atas melambangkan tekad
                    desa untuk terus maju, berkembang, dan mencapai taraf hidup
                    yang tinggi.&rdquo;
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Visi Misi Tab Card - 7 columns */}
          <div className="lg:col-span-7 bg-[#FFFDF9] border border-brand-cream-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            {/* Tab Controls */}
            <div className="flex border-b border-brand-cream-200 mb-8 p-1 bg-brand-cream-100 rounded-2xl">
              <button
                onClick={() => setActiveTab("visi-misi")}
                className={`flex-1 text-center py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  activeTab === "visi-misi"
                    ? "bg-brand-green-700 text-brand-cream-50 shadow-sm border border-brand-green-900"
                    : "text-brand-cream-800 hover:text-brand-green-900"
                }`}
              >
                Visi & Misi Desa
              </button>
              <button
                onClick={() => setActiveTab("program")}
                className={`flex-1 text-center py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  activeTab === "program"
                    ? "bg-brand-green-700 text-brand-cream-50 shadow-sm border border-brand-green-900"
                    : "text-brand-cream-800 hover:text-brand-green-900"
                }`}
              >
                Program Kerja Utama
              </button>
            </div>

            {/* Tab Content 1: Visi Misi */}
            {activeTab === "visi-misi" && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div>
                  <h4 className="text-xs font-bold text-brand-gold-600 tracking-wider uppercase mb-1">
                    VISI UTAMA
                  </h4>
                  <p className="text-xl sm:text-2xl font-sans-serif font-black text-brand-green-900 leading-relaxed italic">
                    TERWUJUDNYA DESA GULUK MANJUNG YANG AMAN, TENTRAM, MAKMUR
                    DAN BERKEADILAN
                  </p>
                </div>

                <div className="border-t border-brand-cream-200 pt-6">
                  <h4 className="text-xs font-bold text-brand-green-700 tracking-wider uppercase mb-4">
                    MISI DESA
                  </h4>
                  <ul className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-brand-green-100">
                    {[
                      "Melanjutkan pembangunan yang dilaksanakan oleh pemerintah sebelumnya",
                      "Menciptakan kondisi masyarakat desa yang aman dan rukun",
                      "Meningkatkan pelayanan terhadap masyarakat",
                      "Mewujudkan dan mengembangkan kegiatan keagamaan untuk menambah keimanan dan ketaqwaan kepada Tuhan Yang Maha Esa",
                      "Mewujudkan dan mendorong terjadinya usaha-usaha kerukunan antar dan intern warga masyarakat yang disebabkan karena adanya perbedaan agama, keyakinan, organisasi dan lainnya dalam suasana saling menghargai dan menghormati",
                      "Membangun dan meningkatkan hasil pertanian dengan jalan meningkatkan kapasitas petani melalui pelatihan-pelatihan yang terkait dengan peningkatan produksi",
                      "Menata pemerintah Desa Guluk Manjung yang kompak dan bertanggung jawab dalam mengemban tugas amanat masyarakat",
                      "Meningkatkan pelayanan masyarakat secara terpadu dan serius",
                      "Membangun sarana dan prasarana transportasi melalui pengaspalan jalan, paving dan rabat beton",
                      "Menumbuhkembangkan usaha kecil dan menengah melalui pelatihan maupun pemberian bantuan modal simpan pinjam",
                      "Membangun dan mendorong majunya bidang pendidikan baik formal maupun informal yang mudah diakses dan dinikmati seluruh warga masyarakat tanpa terkecuali yang mampu menghasilkan insan intelektual, inovatif dan enterpreneur (wirausahawan)",
                      "Membangun dan mendorong usaha-usaha untuk pengembangan dan optimalisasi sektor pertanian dan perkebunan, baik tahap produksi maupun tahap pengolahan hasilnya.",
                    ].map((misi, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-3 text-sm text-brand-cream-800"
                      >
                        <div className="w-5 h-5 rounded-full bg-brand-green-100 text-brand-green-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="leading-relaxed">{misi}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Tab Content 2: Program Kerja */}
            {activeTab === "program" && (
              <div className="space-y-6 animate-in fade-in duration-300 text-sm max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-brand-green-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Bidang Pemerintahan */}
                  <div className="border border-brand-cream-200 p-5 rounded-2xl bg-brand-cream-50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2.5 mb-3">
                        <span className="p-2 bg-brand-gold-100 text-brand-gold-600 rounded-xl">
                          <Building2 className="w-5 h-5" />
                        </span>
                        <h5 className="font-bold text-brand-green-900 text-base">
                          Bidang Pemerintahan
                        </h5>
                      </div>
                      <ul className="space-y-2.5 text-xs text-brand-cream-800 leading-relaxed list-decimal pl-4">
                        <li>
                          Membangun sinergi antara Kepala Desa, BPD, LPMD dan
                          lembaga kemasyarakatan lainnya serta tokoh-tokoh
                          masyarakat dalam rangka menyusun program pembangunan
                          desa.
                        </li>
                        <li>
                          Menjadikan Balai Desa sebagai pusat kegiatan
                          pemerintahan dan pelayanan administrasi bagi
                          masyarakat.
                        </li>
                        <li>
                          Optimalisasi peran dan fungsi serta wewenang aparatur
                          desa dalam rangka efektifitas dan efisiensi pelayanan
                          bagi masyarakat.
                        </li>
                        <li>
                          Membangun kepercayaan masyarakat melalui transparansi
                          pelaksanaan pembangunan dan pengelolaan keuangan desa.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Bidang Pendidikan */}
                  <div className="border border-brand-cream-200 p-5 rounded-2xl bg-brand-cream-50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2.5 mb-3">
                        <span className="p-2 bg-brand-gold-100 text-brand-gold-600 rounded-xl">
                          <BookOpen className="w-5 h-5" />
                        </span>
                        <h5 className="font-bold text-brand-green-900 text-base">
                          Bidang Pendidikan
                        </h5>
                      </div>
                      <ul className="space-y-2.5 text-xs text-brand-cream-800 leading-relaxed list-decimal pl-4">
                        <li>
                          Menjadi mitra kerja bagi lembaga pendidikan baik
                          swasta maupun negeri dalam rangka mengurangi anak
                          putus sekolah.
                        </li>
                        <li>
                          Mengusahakan founding guna memberikan bantuan dan
                          pendampingan terhadap anak berprestasi yang kurang
                          mampu.
                        </li>
                        <li>
                          Memberikan pendampingan dan pembinaan komprehensif
                          bagi keluarga penerima bantuan pemerintah baik pusat,
                          provinsi maupun kabupaten.
                        </li>
                        <li>
                          Memberikan penguatan spiritual bagi generasi muda
                          melalui lembaga pendidikan non formal guna menciptakan
                          lingkungan yang agamis.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Bidang Kesehatan */}
                  <div className="border border-brand-cream-200 p-5 rounded-2xl bg-brand-cream-50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2.5 mb-3">
                        <span className="p-2 bg-brand-gold-100 text-brand-gold-600 rounded-xl">
                          <Heart className="w-5 h-5" />
                        </span>
                        <h5 className="font-bold text-brand-green-900 text-base">
                          Bidang Kesehatan
                        </h5>
                      </div>
                      <ul className="space-y-2.5 text-xs text-brand-cream-800 leading-relaxed list-decimal pl-4">
                        <li>
                          Menjadi mitra bagi poskesdes dan puskesmas dalam
                          rangka meningkatkan mutu layanan kesehatan bagi
                          masyarakat.
                        </li>
                        <li>
                          Bekerja sama dengan pihak terkait untuk mengadakan
                          sosialisasi dan penyuluhan rutin bagi masyarakat
                          melalui Gerakan Desa Sehat.
                        </li>
                        <li>
                          Mengusahakan founding atau pihak ketiga dalam rangka
                          membantu memberikan bantuan layanan kesehatan gratis
                          bagi keluarga tidak mampu.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Bidang Perekonomian */}
                  <div className="border border-brand-cream-200 p-5 rounded-2xl bg-brand-cream-50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2.5 mb-3">
                        <span className="p-2 bg-brand-gold-100 text-brand-gold-600 rounded-xl">
                          <ShoppingBag className="w-5 h-5" />
                        </span>
                        <h5 className="font-bold text-brand-green-900 text-base">
                          Bidang Perekonomian
                        </h5>
                      </div>
                      <ul className="space-y-2.5 text-xs text-brand-cream-800 leading-relaxed list-decimal pl-4">
                        <li>
                          Revitalisasi pasar desa sebagai pusat kegiatan ekonomi
                          masyarakat.
                        </li>
                        <li>
                          Menyediakan sarana prasarana utama guna memaksimalkan
                          hasil produksi pertanian, peternakan, dan perkebunan.
                        </li>
                        <li>
                          Memaksimalkan peran Badan Usaha Milik Desa (BUMDes)
                          sebagai penopang utama gerakan ekonomi di desa.
                        </li>
                        <li>
                          Mencarikan akses permodalan dan pemasaran bagi
                          pengrajin dalam rangka penguatan ekonomi kreatif baik
                          lokal, regional, maupun nasional.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Bidang Pembangunan */}
                  <div className="border border-brand-cream-200 p-5 rounded-2xl bg-brand-cream-50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2.5 mb-3">
                        <span className="p-2 bg-brand-gold-100 text-brand-gold-600 rounded-xl">
                          <ShieldCheck className="w-5 h-5" />
                        </span>
                        <h5 className="font-bold text-brand-green-900 text-base">
                          Bidang Pembangunan
                        </h5>
                      </div>
                      <ul className="space-y-2.5 text-xs text-brand-cream-800 leading-relaxed list-decimal pl-4">
                        <li>
                          Menyediakan sarana dan prasarana umum yang aman dan
                          nyaman serta ramah lingkungan.
                        </li>
                        <li>
                          Memberikan kesempatan yang sama kepada masyarakat
                          untuk terlibat langsung dalam proses pembangunan
                          infrastruktur sebagai bentuk tanggung jawab bersama.
                        </li>
                        <li>
                          Menyediakan sarana transportasi yang representatif
                          untuk memperlancar proses pembangunan.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Bidang Kemasyarakatan */}
                  <div className="border border-brand-cream-200 p-5 rounded-2xl bg-brand-cream-50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2.5 mb-3">
                        <span className="p-2 bg-brand-gold-100 text-brand-gold-600 rounded-xl">
                          <Users className="w-5 h-5" />
                        </span>
                        <h5 className="font-bold text-brand-green-900 text-base">
                          Bidang Kemasyarakatan
                        </h5>
                      </div>
                      <ul className="space-y-2.5 text-xs text-brand-cream-800 leading-relaxed list-decimal pl-4">
                        <li>
                          Mengupayakan bantuan bagi masyarakat miskin untuk
                          dapat memenuhi kebutuhan sandang, pangan, dan papan.
                        </li>
                        <li>
                          Menumbuhkembangkan kegiatan kerja sosial sebagai
                          budaya dasar masyarakat desa.
                        </li>
                        <li>
                          Optimalisasi Karang Taruna dan organisasi sosial
                          lainnya sebagai media kontrol dan kaderisasi.
                        </li>
                        <li>
                          Menyediakan sarana prasarana olahraga sebagai wadah
                          untuk menampung kegiatan anak muda.
                        </li>
                        <li>
                          Mengadakan pertemuan rutin dengan semua elemen
                          masyarakat dalam rangka membangun kemitraan dan
                          kebersamaan.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* STRUKTUR PERANGKAT DESA SECTION */}
      <section
        id="perangkat"
        className="bg-brand-cream-100 py-24 border-y border-brand-cream-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-bold text-brand-green-700 tracking-widest uppercase mb-3">
              Struktur Pemerintahan
            </h2>
            <p className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-green-900">
              Struktur dan Perangkat Desa
            </p>
            <p className="text-brand-cream-800 text-sm sm:text-base mt-3">
              Pelayan masyarakat yang berdedikasi tinggi, mengutamakan
              integritas dan kelancaran birokrasi warga
            </p>
            <div className="w-24 h-1 bg-brand-gold-400 mx-auto mt-4 rounded-full" />
          </div>

          {/* Bagan Struktur Organisasi */}
          <div className="max-w-5xl mx-auto mb-16 bg-[#FFFDF9] border border-brand-cream-200 rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 border-b border-brand-cream-100 pb-4">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-brand-green-900">
                Bagan Struktur Organisasi Pemerintah Desa
              </h3>
              <span className="text-xs text-brand-green-700 bg-brand-green-50 px-3 py-1 rounded-full border border-brand-green-100 font-semibold">
                Periode Aktif
              </span>
            </div>

            {/* Diagram Container */}
            <div className="w-full overflow-x-auto rounded-2xl bg-white border border-brand-cream-100 p-2 shadow-inner group">
              <div className="min-w-[600px] flex items-center justify-center p-2">
                <img
                  src={strukturDesa}
                  alt="Struktur Organisasi Desa Guluk Manjung"
                  className="max-w-full h-auto object-contain rounded-xl transition-all duration-300 group-hover:scale-[1.01]"
                />
              </div>
            </div>
            <p className="text-center text-xs text-brand-cream-800/70 mt-3 italic">
              * Geser ke kanan jika bagan terpotong pada layar ponsel
            </p>
          </div>

          {/* 1. HIGHLIGHT: KEPALA DESA CARD */}
          <div className="max-w-4xl mx-auto bg-[#FFFDF9] border border-brand-cream-200 rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-10 mb-16 relative">
            {/* Elegant Background Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold-100/40 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-green-50/50 rounded-tr-full" />

            <div className="relative flex flex-col md:flex-row items-center gap-8 sm:gap-12">
              {/* Photo Frame */}
              <div className="relative shrink-0 w-48 h-48 sm:w-60 sm:h-60 rounded-2xl overflow-hidden shadow-md border-4 border-brand-gold-400 group">
                <img
                  src={kepalaDesa.foto}
                  alt={kepalaDesa.nama}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 bg-brand-gold-400 text-brand-green-950 font-bold text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-lg shadow-sm flex items-center space-x-1 border border-brand-gold-500">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Kepala Desa</span>
                </div>
              </div>

              {/* Bio Details */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                  <h3 className="text-2xl sm:text-3xl font-serif font-black text-brand-green-900 leading-tight">
                    {kepalaDesa.nama}
                  </h3>
                </div>
                <span className="inline-block text-sm font-semibold text-brand-gold-600 uppercase tracking-widest bg-brand-gold-50 border border-brand-gold-100 px-3.5 py-1 rounded-full mb-4">
                  Kepala Desa Guluk Manjung
                </span>

                <p className="text-brand-cream-800 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {kepalaDesa.deskripsi}
                </p>

                {/* Speech bubble style quote */}
                <div className="relative bg-brand-green-50 border border-brand-green-100 p-5 rounded-2xl italic text-brand-green-900 text-sm sm:text-base leading-relaxed shadow-inner">
                  <span className="absolute -top-3 left-6 text-3xl font-serif text-brand-green-700 leading-none">
                    &ldquo;
                  </span>
                  <p className="relative z-10 font-medium">
                    {kepalaDesa.quote}
                  </p>
                  <span className="absolute -bottom-6 right-6 text-3xl font-serif text-brand-green-700 leading-none">
                    &rdquo;
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. SUBORDINATES GRID - 4 Column Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stafDesa.map((staf, idx) => (
              <div
                key={idx}
                className="bg-[#FFFDF9] border border-brand-cream-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col group"
              >
                {/* Image Wrap */}
                <div className="relative w-full aspect-square overflow-hidden bg-brand-cream-100">
                  <img
                    src={staf.foto}
                    alt={staf.nama}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle hover reveal element */}
                  <div className="absolute inset-0 bg-brand-green-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                    <p className="text-brand-cream-50 text-xs leading-relaxed font-light">
                      {staf.deskripsi}
                    </p>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="block text-[11px] font-bold text-brand-gold-600 uppercase tracking-widest mb-1.5">
                      {staf.jabatan}
                    </span>
                    <h4 className="text-lg font-bold text-brand-green-900 tracking-tight group-hover:text-brand-green-700 transition-colors leading-snug">
                      {staf.nama}
                    </h4>
                  </div>

                  {/* Quick Mail trigger */}
                  <div className="mt-5 pt-4 border-t border-brand-cream-100 flex items-center justify-between text-xs text-brand-cream-800">
                    <span className="font-mono text-[10px] break-all">
                      {staf.email}
                    </span>
                    <a
                      href={`mailto:${staf.email}`}
                      className="p-1.5 rounded-lg bg-brand-cream-100 hover:bg-brand-gold-100 text-brand-green-900 hover:text-brand-gold-600 transition-colors shrink-0 ml-1"
                      title={`Kirim email ke ${staf.nama}`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UMKM PRODUK DENGAN KARTU MEMBALIK (FLIP CARDS) SECTION */}
      <section
        id="umkm"
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-brand-green-700 tracking-widest uppercase mb-3">
            Sentra UMKM Unggulan
          </h2>
          <p className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-green-900">
            Produk Ekonomi Kreatif Desa
          </p>
          <p className="text-brand-cream-800 text-sm sm:text-base mt-3">
            Karya orisinal buatan tangan, hasil pertanian murni, dan kuliner
            sehat dari para kelompok pengrajin mandiri Guluk Manjung.
          </p>

          {/* Interaction Guide */}
          <div className="inline-flex items-center space-x-2 mt-4 px-4 py-1.5 rounded-full bg-brand-gold-100 text-brand-gold-600 text-xs font-bold border border-brand-gold-200/50">
            <RotateCw className="w-3.5 h-3.5 animate-spin-slow text-brand-gold-500" />
            <span>
              Klik atau Sentuh kartu produk untuk membalik & membaca penjelasan
              rinci
            </span>
          </div>

          <div className="w-24 h-1 bg-brand-gold-400 mx-auto mt-6 rounded-full" />
        </div>

        {/* Dynamic Controls: Filter Tabs & Search bar */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#FFFDF9] border border-brand-cream-200 p-4 rounded-3xl shadow-sm">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {["Semua", "Kuliner", "Kerajinan"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-brand-green-700 text-brand-cream-50 shadow-sm border border-brand-green-900"
                    : "bg-brand-cream-100 text-brand-green-900 hover:bg-brand-cream-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar input */}
          <div className="relative w-full md:max-w-xs shrink-0">
            <input
              type="text"
              placeholder="Cari produk desa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-brand-cream-100 border border-brand-cream-200 rounded-xl text-xs text-brand-green-900 focus:outline-none focus:ring-2 focus:ring-brand-green-700/50 focus:border-brand-green-700"
            />
            <Search className="w-4 h-4 text-brand-cream-800 absolute left-3.5 top-3.5" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-3 text-xs text-brand-cream-800 hover:text-brand-green-950 font-bold"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* 3D FLIP CARDS GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredProducts.map((product) => {
              const isFlipped = !!flippedCards[product.id];
              return (
                <div
                  key={product.id}
                  className="w-full h-[480px] perspective-1000 cursor-pointer select-none"
                  onClick={() => handleCardFlip(product.id)}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
                  >
                    {/* --- FRONT SIDE --- */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl bg-[#FFFDF9] border border-brand-cream-200 shadow-md overflow-hidden flex flex-col justify-between group">
                      {/* Product Visual Carousel */}
                      <div className="relative w-full h-[220px] overflow-hidden bg-brand-cream-100 group/carousel">
                        {/* Images */}
                        <div className="w-full h-full relative">
                          {product.foto.map((imgUrl, idx) => {
                            const activeIdx = getActiveImgIndex(product.id);
                            return (
                              <img
                                key={idx}
                                src={imgUrl}
                                alt={`${product.nama} - Gambar ${idx + 1}`}
                                className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
                                  activeIdx === idx
                                    ? "opacity-100 z-10"
                                    : "opacity-0 z-0"
                                }`}
                                referrerPolicy="no-referrer"
                              />
                            );
                          })}
                        </div>

                        {/* Prev / Next Buttons */}
                        {product.foto.length > 1 && (
                          <>
                            <button
                              onClick={(e) =>
                                handlePrevImage(
                                  product.id,
                                  product.foto.length,
                                  e,
                                )
                              }
                              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 text-brand-cream-50 hover:bg-black/60 transition-colors flex items-center justify-center cursor-pointer md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300 border border-brand-cream-100/10"
                              title="Gambar Sebelumnya"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) =>
                                handleNextImage(
                                  product.id,
                                  product.foto.length,
                                  e,
                                )
                              }
                              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 text-brand-cream-50 hover:bg-black/60 transition-colors flex items-center justify-center cursor-pointer md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300 border border-brand-cream-100/10"
                              title="Gambar Berikutnya"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </>
                        )}

                        {/* Dot Indicators */}
                        {product.foto.length > 1 && (
                          <div className="absolute bottom-3 right-3 z-20 flex space-x-1.5 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full border border-brand-cream-100/10">
                            {product.foto.map((_, idx) => {
                              const activeIdx = getActiveImgIndex(product.id);
                              return (
                                <button
                                  key={idx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveImgIndexes((prev) => ({
                                      ...prev,
                                      [product.id]: idx,
                                    }));
                                  }}
                                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                    activeIdx === idx
                                      ? "bg-brand-gold-400 w-3"
                                      : "bg-brand-cream-50/50 hover:bg-brand-cream-50"
                                  }`}
                                  aria-label={`Slide ${idx + 1}`}
                                />
                              );
                            })}
                          </div>
                        )}

                        {/* Category badge */}
                        <div className="absolute top-4 left-4 bg-brand-green-700 text-brand-cream-50 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm border border-brand-green-900 z-20">
                          {product.kategori}
                        </div>

                        {/* Producer Tag */}
                        <div className="absolute bottom-4 left-4 bg-brand-green-950/70 backdrop-blur-md text-brand-cream-50 text-[10px] font-medium px-2.5 py-1 rounded-lg z-20">
                          Oleh: {product.produsen}
                        </div>
                      </div>

                      {/* Content Area Front */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-brand-green-900 tracking-tight leading-snug">
                            {product.nama}
                          </h3>
                          <p className="text-brand-cream-800 text-xs sm:text-sm leading-relaxed line-clamp-3">
                            {product.ringkasan}
                          </p>
                        </div>

                        {/* Click Guide */}
                        <div className="pt-4 border-t border-brand-cream-100 flex items-center justify-end">
                          {/* Animated flip call to action icon */}
                          <div className="flex items-center space-x-1 text-xs text-brand-gold-600 font-extrabold bg-brand-gold-100 px-3 py-1.5 rounded-xl transition-all duration-300 group-hover:bg-brand-gold-400 group-hover:text-brand-green-950 border border-brand-gold-200/50">
                            <span>Detail</span>
                            <RotateCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* --- BACK SIDE --- */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl bg-brand-green-900 border border-brand-green-950 p-6 shadow-xl flex flex-col justify-between text-brand-cream-50">
                      {/* Decorative Background Frame */}
                      <div className="absolute inset-4 rounded-2xl border border-brand-cream-100/10 pointer-events-none" />

                      <div className="relative z-10 space-y-4">
                        {/* Title Header */}
                        <div className="flex items-center justify-between pb-3 border-b border-brand-cream-100/10">
                          <div>
                            <span className="text-[10px] font-bold text-brand-gold-400 uppercase tracking-widest">
                              Penjelasan Produk
                            </span>
                            <h3 className="text-lg font-serif font-black tracking-tight">
                              {product.nama}
                            </h3>
                          </div>
                          <span className="p-2 rounded-xl bg-brand-green-800 text-brand-gold-400 border border-brand-cream-100/10">
                            <RotateCw className="w-4 h-4" />
                          </span>
                        </div>

                        {/* Detailed Description */}
                        <p className="text-xs sm:text-sm leading-relaxed text-brand-cream-100 font-light overflow-y-auto max-h-[220px] pr-2 scrollbar-thin">
                          {product.detail}
                        </p>

                        {/* Meta Specs */}
                        <div className="space-y-2 text-xs bg-brand-green-950/45 p-4 rounded-2xl border border-brand-cream-100/10">
                          <div className="flex justify-between items-start">
                            <span className="text-brand-cream-200 shrink-0">Produsen:</span>
                            <span className="font-bold text-brand-cream-50 text-right ml-2">{product.produsen}</span>
                          </div>
                          <div className="flex justify-between items-start border-t border-brand-cream-100/10 pt-1.5">
                            <span className="text-brand-cream-200 shrink-0">Produk:</span>
                            <span className="font-bold text-brand-gold-400 text-right ml-2">{product.nama}</span>
                          </div>
                          <div className="flex justify-between items-start border-t border-brand-cream-100/10 pt-1.5">
                            <span className="text-brand-cream-200 shrink-0">No. HP / WA:</span>
                            <a
                              href={`https://wa.me/62${product.noHp.substring(1)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold text-[#4ade80] hover:underline text-right ml-2"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {product.noHp}
                            </a>
                          </div>
                          <div className="flex flex-col border-t border-brand-cream-100/10 pt-1.5">
                            <span className="text-brand-cream-200 mb-0.5">Alamat:</span>
                            <span className="font-medium text-brand-cream-100 leading-relaxed">{product.alamat}</span>
                          </div>
                        </div>
                      </div>

                      {/* Back Card Footer */}
                      <div className="relative z-10 pt-3 border-t border-brand-cream-100/10 flex items-center justify-end text-xs">
                        <span className="text-[10px] bg-brand-green-800 text-brand-gold-400 border border-brand-gold-400/20 px-2.5 py-1 rounded-lg uppercase tracking-wider font-extrabold">
                          Balik Kartu
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-[#FFFDF9] border border-brand-cream-200 rounded-3xl p-12 text-center text-brand-cream-800 max-w-lg mx-auto shadow-sm">
            <ShoppingBag className="w-12 h-12 mx-auto text-brand-cream-300 mb-4" />
            <p className="font-bold text-lg text-brand-green-900">
              Produk Tidak Ditemukan
            </p>
            <p className="text-xs mt-1">
              Kami tidak menemukan produk yang cocok dengan pencarian &ldquo;
              {searchTerm}&rdquo; di kategori &ldquo;{selectedCategory}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Semua");
              }}
              className="mt-4 px-4 py-2 bg-brand-green-700 text-brand-cream-50 text-xs font-bold rounded-xl shadow border border-brand-green-900"
            >
              Ulangi Pencarian
            </button>
          </div>
        )}
      </section>

      {/* Kegiatan Warga SECTION */}
      <section
        id="kkn"
        className="bg-brand-cream-100 py-24 border-t border-brand-cream-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-green-700 tracking-widest uppercase mb-3 block">
              Karya & Pengabdian Masyarakat
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-green-900">
              Dokumentasi Kegiatan Warga
            </h2>
            <p className="text-brand-cream-800 text-sm sm:text-base mt-3 leading-relaxed">
              Dokumentasi Kegiatan Warga Desa Guluk Manjung 
            </p>
            <div className="w-24 h-1 bg-brand-gold-400 mx-auto mt-4 rounded-full" />
          </div>

          {/* Interactive Carousel Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Documentation Details Panel (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#FFFDF9] border border-brand-cream-200 p-6 sm:p-8 rounded-3xl shadow-sm relative overflow-hidden">
              {/* Decorative Blur Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold-100/30 rounded-full blur-2xl pointer-events-none" />

              <div className="relative space-y-6">
                {/* Category Badge & Controls */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider ${
                      kknActivities[activeKknSlide].kategori.includes(
                        "Pendidikan",
                      )
                        ? "bg-[#e0f2fe] text-[#0369a1]"
                        : kknActivities[activeKknSlide].kategori.includes(
                              "Kesehatan",
                            )
                          ? "bg-[#dcfce7] text-[#15803d]"
                          : kknActivities[activeKknSlide].kategori.includes(
                                "Ekonomi",
                              )
                            ? "bg-[#fef3c7] text-[#b45309]"
                            : "bg-[#e11d48]/10 text-[#be123c]"
                    }`}
                  >
                    {kknActivities[activeKknSlide].kategori}
                  </span>

                  {/* Small Slide Indicator Numerals */}
                  <span className="text-xs font-mono font-bold text-brand-cream-800 bg-brand-cream-50 border border-brand-cream-200 px-2.5 py-1 rounded-lg">
                    {activeKknSlide + 1} / {kknActivities.length}
                  </span>
                </div>

                {/* Title & Description with smooth dynamic updates */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-brand-green-900 tracking-tight leading-snug">
                    {kknActivities[activeKknSlide].judul}
                  </h3>
                  <p className="text-brand-cream-800 text-xs sm:text-sm leading-relaxed font-light min-h-[100px]">
                    {kknActivities[activeKknSlide].deskripsi}
                  </p>
                </div>

                {/* Meta details list */}
                <div className="space-y-3 pt-4 border-t border-brand-cream-200/60">
                  <div className="flex items-start space-x-3 text-xs sm:text-sm">
                    <Calendar className="w-4 h-4 text-brand-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-brand-green-900 block">
                        Waktu Pelaksanaan
                      </span>
                      <span className="text-brand-cream-800">
                        {kknActivities[activeKknSlide].tanggal}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 text-brand-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-brand-green-900 block">
                        Lokasi Kegiatan
                      </span>
                      <span className="text-brand-cream-800">
                        {kknActivities[activeKknSlide].lokasi}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-xs sm:text-sm">
                    <Users className="w-4 h-4 text-brand-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-brand-green-900 block">
                        Keterlibatan Pihak
                      </span>
                      <span className="text-brand-cream-800">
                        {kknActivities[activeKknSlide].partisipan}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Highlight/Impact Card */}
                <div className="bg-brand-green-50/50 border border-brand-green-100 p-4 rounded-2xl space-y-1.5">
                  <span className="text-[10px] font-bold text-brand-green-800 uppercase tracking-wider flex items-center space-x-1">
                    <Award className="w-3.5 h-3.5 text-brand-gold-500" />
                    <span>Dampak Sosial & Capaian</span>
                  </span>
                  <p className="text-xs text-brand-green-950 font-medium leading-relaxed">
                    {kknActivities[activeKknSlide].dampak}
                  </p>
                </div>
              </div>

              {/* Autoplay & Control Settings at panel bottom */}
              <div className="pt-6 mt-6 border-t border-brand-cream-200/60 flex items-center justify-between text-xs">
                <button
                  onClick={() => setIsAutoPlayKkn(!isAutoPlayKkn)}
                  className={`px-3.5 py-2 rounded-xl border flex items-center space-x-2 font-extrabold transition-all duration-300 cursor-pointer ${
                    isAutoPlayKkn
                      ? "bg-brand-green-700 hover:bg-brand-green-800 text-brand-cream-50 border-brand-green-900"
                      : "bg-brand-cream-50 hover:bg-brand-cream-100 text-brand-cream-800 border-brand-cream-200"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${isAutoPlayKkn ? "bg-[#4ade80] animate-pulse" : "bg-gray-400"}`}
                  />
                  <span>
                    {isAutoPlayKkn ? "Autoplay Aktif (6s)" : "Autoplay Mati"}
                  </span>
                </button>

                <div className="flex space-x-1">
                  {kknActivities.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveKknSlide(idx);
                        setIsAutoPlayKkn(false); // pause autoplay on manual interaction
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                        activeKknSlide === idx
                          ? "bg-brand-gold-500 w-6"
                          : "bg-brand-cream-200 hover:bg-brand-cream-300"
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Image Showcase with Navigation Overlay (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:h-full min-h-[300px] lg:min-h-[450px] bg-brand-green-950 rounded-3xl overflow-hidden shadow-md group/carousel border-2 border-brand-cream-200">
                {/* Carousel Images */}
                <div className="w-full h-full relative">
                  {kknActivities[activeKknSlide].foto.map((imgUrl, idx) => {
                    const activeIdx = getActiveKknImgIndex(kknActivities[activeKknSlide].id);
                    return (
                      <img
                        key={idx}
                        src={imgUrl}
                        alt={`${kknActivities[activeKknSlide].judul} - Foto ${idx + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                          activeIdx === idx ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-95"
                        }`}
                        referrerPolicy="no-referrer"
                      />
                    );
                  })}
                </div>

                {/* Bottom dark overlay for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none z-20" />

                {/* Left & Right Chevron Navigation Buttons */}
                {kknActivities[activeKknSlide].foto.length > 1 && (
                  <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none z-30">
                    <button
                      onClick={() => {
                        handlePrevKknImage(
                          kknActivities[activeKknSlide].id,
                          kknActivities[activeKknSlide].foto.length
                        );
                        setIsAutoPlayKkn(false); // Pause auto-play
                      }}
                      className="w-11 h-11 rounded-full bg-black/50 hover:bg-brand-green-700/90 text-brand-cream-50 border border-brand-cream-100/10 flex items-center justify-center backdrop-blur-sm transition-all duration-200 pointer-events-auto shadow hover:scale-110 cursor-pointer"
                      aria-label="Foto Sebelumnya"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                      onClick={() => {
                        handleNextKknImage(
                          kknActivities[activeKknSlide].id,
                          kknActivities[activeKknSlide].foto.length
                        );
                        setIsAutoPlayKkn(false); // Pause auto-play
                      }}
                      className="w-11 h-11 rounded-full bg-black/50 hover:bg-brand-green-700/90 text-brand-cream-50 border border-brand-cream-100/10 flex items-center justify-center backdrop-blur-sm transition-all duration-200 pointer-events-auto shadow hover:scale-110 cursor-pointer"
                      aria-label="Foto Berikutnya"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                )}

                {/* Floating caption overlay at bottom of the image */}
                <div className="absolute bottom-6 left-6 right-6 text-brand-cream-50 pointer-events-none z-30">
                  <span className="text-[10px] font-bold text-brand-gold-400 uppercase tracking-widest bg-brand-green-950/70 backdrop-blur-sm px-2.5 py-1 rounded-md border border-brand-cream-100/10 inline-block mb-2">
                    {kknActivities[activeKknSlide].lokasi}
                  </span>
                  <div className="flex items-end justify-between">
                    <h4 className="text-lg sm:text-xl font-serif font-bold text-brand-cream-50 drop-shadow-md">
                      {kknActivities[activeKknSlide].judul}
                    </h4>
                    <span className="text-xs font-bold text-brand-gold-400/90 bg-brand-green-950/80 px-2.5 py-1 rounded-md border border-brand-cream-100/10 shrink-0 ml-4">
                      Foto {getActiveKknImgIndex(kknActivities[activeKknSlide].id) + 1} / {kknActivities[activeKknSlide].foto.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Slide Selection Thumbnails Row under the slide */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-lg">
                {kknActivities.map((act, index) => (
                  <button
                    key={act.id}
                    onClick={() => {
                      setActiveKknSlide(index);
                      setIsAutoPlayKkn(false); // Pause autoplay
                    }}
                    className={`relative overflow-hidden rounded-2xl h-16 sm:h-20 border-2 transition-all duration-300 cursor-pointer text-left flex items-center p-2 bg-[#FFFDF9] ${
                      activeKknSlide === index
                        ? "border-brand-gold-400 ring-2 ring-brand-gold-400/20 shadow-md"
                        : "border-brand-cream-200 opacity-70 hover:opacity-100 hover:border-brand-cream-300"
                    }`}
                  >
                    <img
                      src={act.foto[0]}
                      alt=""
                      className="w-12 sm:w-16 h-full rounded-lg object-cover shrink-0 mr-2.5 hidden sm:block"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0">
                      <span className="block text-[9px] font-extrabold text-brand-green-800 uppercase tracking-wider truncate">
                        {act.kategori.split(" ")[0]}
                      </span>
                      <span className="block text-[10px] sm:text-xs font-bold text-brand-green-950 truncate">
                        {act.judul}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOKUMENTASI KEGIATAN KKN SECTION */}
      <section
        id="dokumentasi-kkn"
        className="bg-[#FFFDF9] py-24 border-t border-brand-cream-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-brand-green-700 tracking-widest uppercase mb-3 block">
              Pengabdian & Kolaborasi
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-green-900">
              Dokumentasi Kegiatan KKN
            </h2>
            <p className="text-brand-cream-800 text-sm sm:text-base mt-3 leading-relaxed">
              Sinergi nyata mahasiswa universitas dan warga dalam mendorong akselerasi pembangunan, digitalisasi UMKM, peningkatan mutu literasi anak, serta penyuluhan kesehatan terpadu di Desa Guluk Manjung.
            </p>
            <div className="w-24 h-1 bg-brand-gold-400 mx-auto mt-4 rounded-full" />
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {kknGalleryPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActiveLightboxImg(photo.src)}
                className="group relative bg-brand-cream-50 border border-brand-cream-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-zoom-in h-[280px]"
              >
                {/* Image */}
                <img
                  src={photo.src}
                  alt="Dokumentasi KKN"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Simple Zoom Overlay Icon on Hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <span className="p-3 bg-white/20 backdrop-blur-md text-brand-cream-50 rounded-full border border-brand-cream-100/20 transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow">
                    <Search className="w-5 h-5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA, ALAMAT, & INTERACTIVE MAP SECTION */}
      <section
        id="kontak"
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Column 1: Alamat Lengkap & Pelayanan - 5 columns */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-xs font-bold text-brand-green-700 tracking-widest uppercase block">
                Lokasi Geografis & Kantor
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-green-900 leading-snug">
                Mari Berkunjung ke Guluk Manjung
              </h2>
              <p className="text-brand-cream-800 text-sm sm:text-base leading-relaxed">
                Kantor pelayanan terpadu Pemerintah Desa Guluk Manjung selalu
                terbuka menyambut para tamu, investor lokal, akademisi, maupun
                penikmat wisata pedesaan.
              </p>
            </div>

            {/* Address Details Block */}
            <div className="bg-[#FFFDF9] border border-brand-cream-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-green-50 text-brand-green-700 rounded-2xl border border-brand-green-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-brand-green-900 uppercase tracking-widest mb-1">
                    Alamat Kantor Desa
                  </span>
                  <p className="text-sm text-brand-cream-800 leading-relaxed font-light font-sans-serif">
                    RT 07 RW 03, Dusun Burajah, Desa Guluk Manjung, Kecamatan Bluto, Kabupaten Sumenep, Provinsi Jawa Timur, Kode Pos 69466.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 border-t border-brand-cream-100 pt-5">
                <div className="p-3 bg-brand-green-50 text-brand-green-700 rounded-2xl border border-brand-green-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-brand-green-900 uppercase tracking-widest mb-1">
                    Jam Pelayanan Publik
                  </span>
                  <p className="text-sm text-brand-cream-800 font-light leading-relaxed">
                    Senin - Jumat | 08:00 - 15:00 WIB <br />
                    <span className="text-brand-gold-600 font-bold text-xs mt-1 block">
                      Sabtu, Minggu & Hari Libur Nasional Tutup
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 border-t border-brand-cream-100 pt-5">
                <div className="p-3 bg-brand-green-50 text-brand-green-700 rounded-2xl border border-brand-green-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-brand-green-900 uppercase tracking-widest mb-1">
                    Hubungi Admin Desa
                  </span>
                  <p className="text-sm text-brand-cream-800 font-light">
                    Telepon / WA:{" "}
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-brand-green-900 hover:text-brand-green-700 underline"
                    >
                      +62 812-3456-7890
                    </a>{" "}
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:pemdes@Guluk Manjung.desa.id"
                      className="font-bold text-brand-green-900 hover:text-brand-green-700 underline"
                    >
                      pemdes@Guluk Manjung.desa.id
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick action wrapper */}
            <div className="bg-brand-gold-100/50 border border-brand-gold-200/50 rounded-2xl p-4 text-center">
              <p className="text-xs text-brand-gold-800 font-semibold">
                Butuh bantuan urusan surat kependudukan? Hubungi nomor admin di
                atas via WhatsApp untuk respon cepat layanan mandiri warga.
              </p>
            </div>
          </div>

          {/* Column 2: Maps Preview & Live iframe Map Embed - 7 columns */}
          <div className="lg:col-span-7 bg-[#FFFDF9] border border-brand-cream-200 rounded-3xl overflow-hidden shadow-sm flex flex-col group">
            {/* Embedded Iframe Google Map */}
            <div className="relative w-full flex-1 min-h-[380px] bg-brand-cream-100 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.82487440417!2d113.7205!3d-7.1019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd9de2c53a6f1d9%3A0xe54df9df926c4d8c!2sGuluk%20Manjung%2C%20Bluto%2C%20Sumenep%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1720000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
                title="Peta Desa Guluk Manjung"
                className="filter contrast-105 saturate-[0.85] brightness-[0.98] group-hover:scale-[1.005] transition-transform duration-500"
              />

              {/* Pulsating Map Pin Marker Over the Embed for visual aesthetic */}
              <div className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="relative flex items-center justify-center">
                  <span className="absolute inline-flex h-8 w-8 rounded-full bg-brand-green-600 opacity-45 animate-ping" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-gold-400 border-2 border-brand-green-900" />
                </div>
              </div>

              {/* Float Map Utility details */}
              <div className="absolute bottom-4 left-4 right-4 bg-brand-green-950/80 backdrop-blur-md border border-brand-cream-100/10 p-3.5 rounded-2xl text-brand-cream-50 flex items-center justify-between text-xs shadow-lg">
                <div className="flex items-center space-x-2.5">
                  <div className="p-1.5 rounded-lg bg-brand-green-800 text-brand-gold-400 border border-brand-cream-100/10 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold">
                      Balai Desa Guluk Manjung
                    </span>
                    <span className="block text-[10px] text-brand-cream-200 mt-0.5">
                      S7.1019, E113.7205
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-brand-gold-400 bg-brand-green-800 px-2.5 py-1 rounded-lg">
                  Kec. Bluto
                </span>
              </div>
            </div>

            {/* Bottom area with Map Redirect CTA link */}
            <div className="p-6 sm:p-8 bg-[#FFFDF9] border-t border-brand-cream-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif font-extrabold text-brand-green-900 text-lg">
                    Butuh Petunjuk Arah Jalan?
                  </h4>
                  <p className="text-xs text-brand-cream-800 mt-1 leading-relaxed">
                    Klik tombol di sebelah kanan untuk membuka navigasi rute
                    langsung di aplikasi Google Maps Anda secara otomatis.
                  </p>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Guluk+Manjung,+Bluto,+Sumenep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-brand-gold-400 hover:bg-brand-gold-500 text-brand-green-950 font-extrabold rounded-2xl shadow-md transition-all duration-200 flex items-center justify-center space-x-2 border-2 border-brand-gold-500 text-sm hover:scale-[1.02] shrink-0"
                >
                  <MapPin className="w-4 h-4 text-brand-green-950" />
                  <span>Petunjuk Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-brand-green-950 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-green-950 text-brand-cream-100 pt-16 pb-12 border-t border-brand-gold-400/20 relative overflow-hidden">
        {/* Decorative pattern/overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-brand-cream-100/10">
            {/* Col 1: Brand Info - 4 columns */}
            <div className="md:col-span-5 space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-green-700 rounded-xl flex items-center justify-center text-brand-gold-400 shadow-md border-2 border-brand-gold-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-base font-extrabold text-brand-cream-50 uppercase tracking-tight leading-none">
                    Desa Guluk Manjung
                  </span>
                  <span className="block text-[10px] font-semibold text-brand-gold-400 uppercase tracking-widest mt-0.5">
                    Kabupaten Nusantara Raya
                  </span>
                </div>
              </div>

              <p className="text-xs text-brand-cream-100 leading-relaxed max-w-sm">
                Portal komunikasi, publikasi program kerja, dan promosi produk
                unggulan UMKM lokal yang dikelola oleh tim kepemudaan dan
                Pemerintah Desa Guluk Manjung.
              </p>

              {/* Secure tag */}
              <div className="inline-flex items-center space-x-1.5 text-[10px] text-brand-gold-400/90 font-bold bg-brand-green-900/50 px-3 py-1.5 rounded-lg border border-brand-gold-400/10">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Guluk Manjung Digital v2.1 • SSL Secured</span>
              </div>
            </div>

            {/* Col 2: Navigation Links - 3 columns */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-bold text-brand-gold-400 uppercase tracking-widest pb-1.5 border-b border-brand-cream-100/10">
                Peta Navigasi
              </h4>
              <ul className="space-y-2 text-xs text-brand-cream-100">
                <li>
                  <button
                    onClick={() => scrollToSection("hero")}
                    className="hover:text-brand-gold-400 transition-colors cursor-pointer"
                  >
                    Halaman Beranda
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("visi-misi")}
                    className="hover:text-brand-gold-400 transition-colors cursor-pointer"
                  >
                    Visi Misi & Sejarah
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("perangkat")}
                    className="hover:text-brand-gold-400 transition-colors cursor-pointer"
                  >
                    Pemerintahan & Perangkat
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("umkm")}
                    className="hover:text-brand-gold-400 transition-colors cursor-pointer"
                  >
                    Sektor UMKM Kreatif
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("kkn")}
                    className="hover:text-brand-gold-400 transition-colors cursor-pointer"
                  >
                    Kegiatan Warga
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("dokumentasi-kkn")}
                    className="hover:text-brand-gold-400 transition-colors cursor-pointer"
                  >
                    Kegiatan KKN
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Sektor Unggulan - 4 columns */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-bold text-brand-gold-400 uppercase tracking-widest pb-1.5 border-b border-brand-cream-100/10">
                Sektor Unggulan Desa
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-brand-cream-200/80">
                <span className="px-3 py-1.5 bg-brand-green-900 rounded-lg border border-brand-cream-100/5 text-center">
                  Kerajinan Tikar
                </span>
                <span className="px-3 py-1.5 bg-brand-green-900 rounded-lg border border-brand-cream-100/5 text-center">
                  Gula Merah Aren
                </span>
              </div>
            </div>
          </div>

          {/* Copyrights & Attribution Area */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-cream-200 text-center sm:text-left">
            <div>
              <p className="font-medium">
                © 2026 Pemerintah Desa Guluk Manjung. Seluruh hak cipta
                dilindungi undang-undang.
              </p>
              <p className="mt-1 text-[10px] text-brand-cream-300">
                Dikembangkan untuk Program Transformasi Digital Desa Mandiri
                Sejahtera.
              </p>
            </div>

            {/* Social media mock labels */}
            <div className="flex space-x-3.5 font-bold text-brand-cream-100">
              <span className="hover:text-brand-gold-400 transition-colors cursor-pointer">
                @Guluk ManjungDesa
              </span>
              <span>•</span>
              <span className="hover:text-brand-gold-400 transition-colors cursor-pointer">
                fb.com/Guluk Manjung
              </span>
              <span>•</span>
              <span className="hover:text-brand-gold-400 transition-colors cursor-pointer">
                Guluk Manjung.desa.id
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {activeLightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setActiveLightboxImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-brand-cream-50 hover:text-brand-gold-400 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all cursor-pointer z-50 border border-brand-cream-100/10"
            onClick={() => setActiveLightboxImg(null)}
            title="Tutup"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center space-y-4">
            <img
              src={activeLightboxImg}
              alt="Preview Dokumentasi"
              className="max-w-full max-h-[80vh] object-contain rounded-2xl border-2 border-brand-cream-100/10 shadow-2xl animate-in scale-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
