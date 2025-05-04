
// Define types for our expert system
export type Talent = 
  | 'Kreativitas Tinggi'
  | 'Imajinasi Tinggi'
  | 'Problem Solving'
  | 'Logika Analisis'
  | 'Teliti'
  | 'Analitis'
  | 'Komunikasi'
  | 'Empati'
  | 'Manajemen'
  | 'Negosiasi'
  | 'Public Speaking'
  | 'Mentoring'
  | 'Ketahanan Fisik'
  | 'Ketelitian'
  | 'Berpikir Kritis'
  | 'Argumentasi'
  | 'Keterampilan Mekanik'
  | 'Analisa Struktur'
  | 'Inovasi'
  | 'Visualisasi'
  | 'Analisa Angka'
  | 'Perencanaan'
  | 'Keterampilan Tanam'
  | 'Manajemen Produksi';

export type Interest = 
  | 'Seni'
  | 'Teknologi'
  | 'Sains'
  | 'Sosial'
  | 'Bisnis'
  | 'Pendidikan'
  | 'Olahraga'
  | 'Kesehatan'
  | 'Hukum'
  | 'Teknik'
  | 'Kreatif'
  | 'Keuangan'
  | 'Pertanian';

export interface Rule {
  interest: Interest;
  talent: Talent;
  professions: string[];
  description?: string;
}

export interface InterestInfo {
  name: Interest;
  description: string;
  icon: string;
}

export interface TalentInfo {
  name: Talent;
  description: string;
}

// Rules for the expert system (forward chaining)
export const rules: Rule[] = [
  {
    interest: 'Seni',
    talent: 'Kreativitas Tinggi',
    professions: ['Desainer Grafis', 'Animator'],
    description: 'Profesi yang memadukan seni dengan kreativitas untuk menciptakan representasi visual yang menarik.'
  },
  {
    interest: 'Seni',
    talent: 'Imajinasi Tinggi',
    professions: ['Ilustrator', 'Penulis Buku Anak'],
    description: 'Profesi yang memanfaatkan imajinasi untuk membuat konten kreatif yang menarik bagi berbagai kalangan.'
  },
  {
    interest: 'Teknologi',
    talent: 'Problem Solving',
    professions: ['Software Engineer', 'System Analyst'],
    description: 'Profesi yang menggunakan kemampuan pemecahan masalah untuk mengembangkan solusi teknologi.'
  },
  {
    interest: 'Teknologi',
    talent: 'Logika Analisis',
    professions: ['Data Scientist', 'AI Engineer'],
    description: 'Profesi yang menggunakan logika dan analisis data untuk mengembangkan sistem cerdas dan menghasilkan insights.'
  },
  {
    interest: 'Sains',
    talent: 'Teliti',
    professions: ['Peneliti', 'Analis Laboratorium'],
    description: 'Profesi yang memanfaatkan ketelitian untuk melakukan penelitian dan analisis ilmiah yang akurat.'
  },
  {
    interest: 'Sains',
    talent: 'Analitis',
    professions: ['Epidemiolog', 'Data Analyst'],
    description: 'Profesi yang menggunakan kemampuan analitis untuk menginterpretasi data dan fenomena ilmiah.'
  },
  {
    interest: 'Sosial',
    talent: 'Komunikasi',
    professions: ['Public Relations', 'Konselor'],
    description: 'Profesi yang memanfaatkan kemampuan komunikasi untuk membangun hubungan dan mempengaruhi orang lain.'
  },
  {
    interest: 'Sosial',
    talent: 'Empati',
    professions: ['Psikolog', 'Pekerja Sosial'],
    description: 'Profesi yang menggunakan empati untuk memahami dan membantu orang lain mengatasi masalah mereka.'
  },
  {
    interest: 'Bisnis',
    talent: 'Manajemen',
    professions: ['Manajer Proyek', 'Entrepreneur'],
    description: 'Profesi yang memanfaatkan kemampuan manajerial untuk mengelola sumber daya dan mencapai tujuan bisnis.'
  },
  {
    interest: 'Bisnis',
    talent: 'Negosiasi',
    professions: ['Sales Manager', 'Marketing Executive'],
    description: 'Profesi yang menggunakan kemampuan negosiasi untuk mencapai kesepakatan yang menguntungkan dalam konteks bisnis.'
  },
  {
    interest: 'Pendidikan',
    talent: 'Public Speaking',
    professions: ['Guru', 'Dosen'],
    description: 'Profesi yang memanfaatkan kemampuan berbicara di depan umum untuk menyampaikan pengetahuan secara efektif.'
  },
  {
    interest: 'Pendidikan',
    talent: 'Mentoring',
    professions: ['Trainer', 'Coach Karir'],
    description: 'Profesi yang menggunakan kemampuan mentoring untuk membimbing perkembangan personal dan profesional individu.'
  },
  {
    interest: 'Olahraga',
    talent: 'Ketahanan Fisik',
    professions: ['Atlet', 'Pelatih Olahraga'],
    description: 'Profesi yang memanfaatkan ketahanan fisik untuk berprestasi dalam aktivitas olahraga atau melatih orang lain.'
  },
  {
    interest: 'Kesehatan',
    talent: 'Empati',
    professions: ['Perawat', 'Dokter Umum'],
    description: 'Profesi yang menggunakan empati untuk memberikan perawatan kesehatan yang holistik dan berpusat pada pasien.'
  },
  {
    interest: 'Kesehatan',
    talent: 'Ketelitian',
    professions: ['Apoteker', 'Radiografer'],
    description: 'Profesi yang memanfaatkan ketelitian untuk melakukan prosedur medis atau farmasi dengan presisi tinggi.'
  },
  {
    interest: 'Hukum',
    talent: 'Berpikir Kritis',
    professions: ['Pengacara', 'Hakim'],
    description: 'Profesi yang menggunakan pemikiran kritis untuk menganalisis kasus hukum dan memberikan penilaian yang adil.'
  },
  {
    interest: 'Hukum',
    talent: 'Argumentasi',
    professions: ['Advokat', 'Mediator'],
    description: 'Profesi yang memanfaatkan kemampuan berargumentasi untuk membela klien atau memfasilitasi penyelesaian sengketa.'
  },
  {
    interest: 'Teknik',
    talent: 'Keterampilan Mekanik',
    professions: ['Insinyur Mesin', 'Teknisi Industri'],
    description: 'Profesi yang menggunakan keterampilan mekanik untuk merancang dan memperbaiki sistem mekanis.'
  },
  {
    interest: 'Teknik',
    talent: 'Analisa Struktur',
    professions: ['Insinyur Sipil', 'Arsitek'],
    description: 'Profesi yang memanfaatkan kemampuan analisis struktural untuk merancang bangunan dan infrastruktur yang aman.'
  },
  {
    interest: 'Kreatif',
    talent: 'Inovasi',
    professions: ['Content Creator', 'Copywriter'],
    description: 'Profesi yang menggunakan inovasi untuk menghasilkan konten yang unik dan menarik untuk berbagai platform.'
  },
  {
    interest: 'Kreatif',
    talent: 'Visualisasi',
    professions: ['Videografer', 'Desainer Interior'],
    description: 'Profesi yang memanfaatkan kemampuan visualisasi untuk menciptakan pengalaman visual yang menarik.'
  },
  {
    interest: 'Keuangan',
    talent: 'Analisa Angka',
    professions: ['Akuntan', 'Auditor'],
    description: 'Profesi yang menggunakan kemampuan analisis numerik untuk mengelola dan mengaudit keuangan.'
  },
  {
    interest: 'Keuangan',
    talent: 'Perencanaan',
    professions: ['Financial Planner', 'Konsultan Keuangan'],
    description: 'Profesi yang memanfaatkan kemampuan perencanaan untuk membantu individu dan perusahaan mengelola keuangan mereka.'
  },
  {
    interest: 'Pertanian',
    talent: 'Keterampilan Tanam',
    professions: ['Agronomis', 'Teknisi Pertanian'],
    description: 'Profesi yang menggunakan keterampilan bertani untuk mengoptimalkan produksi tanaman dan pengelolaan lahan.'
  },
  {
    interest: 'Pertanian',
    talent: 'Manajemen Produksi',
    professions: ['Manajer Agribisnis'],
    description: 'Profesi yang memanfaatkan kemampuan manajemen produksi untuk mengelola usaha pertanian secara efisien.'
  }
];

// Interest information with descriptions and icons
export const interests: InterestInfo[] = [
  {
    name: 'Seni',
    description: 'Ketertarikan pada aktivitas kreatif seperti menggambar, melukis, atau desain.',
    icon: 'pencil'
  },
  {
    name: 'Teknologi',
    description: 'Ketertarikan pada perangkat, software, dan inovasi teknologi.',
    icon: 'computer'
  },
  {
    name: 'Sains',
    description: 'Ketertarikan pada penelitian ilmiah dan penemuan.',
    icon: 'flask-conical'
  },
  {
    name: 'Sosial',
    description: 'Ketertarikan pada interaksi dengan orang dan membantu orang lain.',
    icon: 'users'
  },
  {
    name: 'Bisnis',
    description: 'Ketertarikan pada manajemen, pemasaran, dan kewirausahaan.',
    icon: 'briefcase'
  },
  {
    name: 'Pendidikan',
    description: 'Ketertarikan pada mengajar dan membagikan pengetahuan.',
    icon: 'graduation-cap'
  },
  {
    name: 'Olahraga',
    description: 'Ketertarikan pada aktivitas fisik dan kompetisi olahraga.',
    icon: 'heart'
  },
  {
    name: 'Kesehatan',
    description: 'Ketertarikan pada perawatan kesehatan dan kesejahteraan.',
    icon: 'hospital'
  },
  {
    name: 'Hukum',
    description: 'Ketertarikan pada peraturan, keadilan, dan proses hukum.',
    icon: 'gavel'
  },
  {
    name: 'Teknik',
    description: 'Ketertarikan pada membangun, merancang, dan membuat.',
    icon: 'hammer'
  },
  {
    name: 'Kreatif',
    description: 'Ketertarikan pada mengekspresikan kreativitas dalam berbagai bentuk.',
    icon: 'lightbulb'
  },
  {
    name: 'Keuangan',
    description: 'Ketertarikan pada manajemen keuangan dan investasi.',
    icon: 'piggy-bank'
  },
  {
    name: 'Pertanian',
    description: 'Ketertarikan pada bercocok tanam dan pengelolaan lahan.',
    icon: 'agriculture'
  }
];

// Talent information with descriptions
export const talents: TalentInfo[] = [
  {
    name: 'Kreativitas Tinggi',
    description: 'Kemampuan untuk menghasilkan ide-ide baru dan unik.'
  },
  {
    name: 'Imajinasi Tinggi',
    description: 'Kemampuan untuk membayangkan dan menciptakan konsep abstrak.'
  },
  {
    name: 'Problem Solving',
    description: 'Kemampuan untuk menemukan solusi dari masalah yang kompleks.'
  },
  {
    name: 'Logika Analisis',
    description: 'Kemampuan untuk menganalisis informasi secara sistematis.'
  },
  {
    name: 'Teliti',
    description: 'Kemampuan untuk memperhatikan detail-detail kecil.'
  },
  {
    name: 'Analitis',
    description: 'Kemampuan untuk mengurai informasi kompleks menjadi bagian yang lebih sederhana.'
  },
  {
    name: 'Komunikasi',
    description: 'Kemampuan untuk menyampaikan informasi secara efektif.'
  },
  {
    name: 'Empati',
    description: 'Kemampuan untuk memahami dan merasakan apa yang dirasakan orang lain.'
  },
  {
    name: 'Manajemen',
    description: 'Kemampuan untuk mengelola sumber daya dan orang secara efektif.'
  },
  {
    name: 'Negosiasi',
    description: 'Kemampuan untuk mencapai kesepakatan yang menguntungkan semua pihak.'
  },
  {
    name: 'Public Speaking',
    description: 'Kemampuan untuk berbicara di depan umum dengan percaya diri.'
  },
  {
    name: 'Mentoring',
    description: 'Kemampuan untuk membimbing dan mengembangkan orang lain.'
  },
  {
    name: 'Ketahanan Fisik',
    description: 'Kemampuan untuk melakukan aktivitas fisik dalam waktu yang lama.'
  },
  {
    name: 'Ketelitian',
    description: 'Kemampuan untuk bekerja dengan presisi dan akurasi tinggi.'
  },
  {
    name: 'Berpikir Kritis',
    description: 'Kemampuan untuk menganalisis situasi secara objektif dan membuat penilaian.'
  },
  {
    name: 'Argumentasi',
    description: 'Kemampuan untuk menyusun dan menyampaikan argumen yang meyakinkan.'
  },
  {
    name: 'Keterampilan Mekanik',
    description: 'Kemampuan untuk memahami dan bekerja dengan sistem mekanis.'
  },
  {
    name: 'Analisa Struktur',
    description: 'Kemampuan untuk memahami dan menganalisis struktur fisik.'
  },
  {
    name: 'Inovasi',
    description: 'Kemampuan untuk menciptakan solusi baru yang belum ada sebelumnya.'
  },
  {
    name: 'Visualisasi',
    description: 'Kemampuan untuk membayangkan dan merepresentasikan ide secara visual.'
  },
  {
    name: 'Analisa Angka',
    description: 'Kemampuan untuk bekerja dengan angka dan data numerik.'
  },
  {
    name: 'Perencanaan',
    description: 'Kemampuan untuk merencanakan dan mengorganisir aktivitas dengan baik.'
  },
  {
    name: 'Keterampilan Tanam',
    description: 'Kemampuan untuk memahami dan mengelola tanaman dan pertanian.'
  },
  {
    name: 'Manajemen Produksi',
    description: 'Kemampuan untuk mengelola proses produksi secara efisien.'
  }
];

// Group talents by interest for easier selection in the UI
export const talentsByInterest: Record<Interest, Talent[]> = {
  'Seni': ['Kreativitas Tinggi', 'Imajinasi Tinggi'],
  'Teknologi': ['Problem Solving', 'Logika Analisis'],
  'Sains': ['Teliti', 'Analitis'],
  'Sosial': ['Komunikasi', 'Empati'],
  'Bisnis': ['Manajemen', 'Negosiasi'],
  'Pendidikan': ['Public Speaking', 'Mentoring'],
  'Olahraga': ['Ketahanan Fisik'],
  'Kesehatan': ['Empati', 'Ketelitian'],
  'Hukum': ['Berpikir Kritis', 'Argumentasi'],
  'Teknik': ['Keterampilan Mekanik', 'Analisa Struktur'],
  'Kreatif': ['Inovasi', 'Visualisasi'],
  'Keuangan': ['Analisa Angka', 'Perencanaan'],
  'Pertanian': ['Keterampilan Tanam', 'Manajemen Produksi']
};
