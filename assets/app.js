/**
 * DATABASE KONTEN WEBSITE (STATE)
 * Teks diisi 100% utuh dan lengkap sesuai permintaan struktur.
 */
const webContent = {
    hero: {
        headline: "Markas Bisnis: Solusi Terbaik Untuk Pengusaha Indonesia.",
        subHeadline: "Menjadi wadah inovatif bagi para pengusaha untuk berkembang secara efektif dan efisien melalui solusi bisnis yang holistik.",
        ctaButton: "Konsultasi Sekarang."
    },
    about: {
        content: "Berdiri sejak 2022, Markas Bisnis telah menyelesaikan lebih dari 300+ proyek bisnis. Kami berkomitmen menyediakan dukungan profesional yang berfokus pada pasar untuk membantu pengusaha mencapai kesuksesan berkelanjutan.",
        quote: '"Berani memulai usaha di usia muda adalah awal dari kesuksesan" - Yoni Saputra (CEO).'
    },
    visionMission: {
        visi: "Menjadi platform bisnis terbaik, mencetak pengusaha baru, dan meningkatkan ekonomi nasional melalui ekosistem kolaborasi.",
        misi: [
            "Menciptakan wadah bermanfaat.",
            "Mempermudah calon pengusaha memulai usaha.",
            "Menjadi mitra inovatif bagi UMKM."
        ]
    },
    services: [
        { 
            title: "Legalitas Usaha", 
            desc: "Jasa pembuatan PT Umum, PT Perorangan, CV, Firma, & UD.", 
            icon: "fas fa-file-signature" 
        },
        { 
            title: "Laporan Pajak", 
            desc: "Pengurusan pajak tahunan UMKM & Perusahaan.", 
            icon: "fas fa-file-invoice-dollar" 
        },
        { 
            title: "Company Profile", 
            desc: "Pembuatan profil perusahaan profesional.", 
            icon: "fas fa-building" 
        },
        { 
            title: "Stand Bisnis", 
            desc: "Pembuatan Booth & Stand UMKM.", 
            icon: "fas fa-store" 
        },
        { 
            title: "Digital Marketing", 
            desc: "Website/Landing Page & Social Media Growth (IG, TikTok, YT).", 
            icon: "fas fa-bullhorn" 
        },
        { 
            title: "Kreatif", 
            desc: "Desain Grafis (Logo, Banner, Iklan) & Akun Premium (Canva, Capcut).", 
            icon: "fas fa-paint-brush" 
        },
        { 
            title: "Produksi", 
            desc: "Sablon & Konveksi (Kaos satuan/lusinan).", 
            icon: "fas fa-tshirt" 
        }
    ],
    ecosystem: [
        { id: "01", name: "Grup Konsultasi Strategi Bisnis." },
        { id: "02", name: "Komunitas Markas Pengusaha Indonesia." },
        { id: "03", name: "Sekolah Bisnis (Edukasi Fundamental)." }
    ],
    footer: {
        companyName: "PT Markaz Bisnis Indonesia.",
        legalities: "AHU-006565.AH.01.31.Tahun 2025 | NIB: 2907250114212.",
        address: "Madiun, Jawa Timur.",
        whatsapp: "0857-3511-9209.",
        email: "markasbisnis01@gmail.com."
    }
};

/**
 * LOGIKA PEMROSESAN & INJEKSI DOM
 */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Injeksi Hero
    document.getElementById("hero-headline").innerText = webContent.hero.headline;
    document.getElementById("hero-subheadline").innerText = webContent.hero.subHeadline;
    document.getElementById("hero-cta").innerText = webContent.hero.ctaButton;

    // 2. Injeksi About Us
    document.getElementById("about-content").innerText = webContent.about.content;
    document.getElementById("about-quote").innerText = webContent.about.quote;

    // 3. Injeksi Visi & Misi
    document.getElementById("visi-content").innerText = webContent.visionMission.visi;
    const misiContainer = document.getElementById("misi-list");
    webContent.visionMission.misi.forEach(misi => {
        const li = document.createElement("li");
        li.innerText = misi;
        misiContainer.appendChild(li);
    });

    // 4. Injeksi Layanan Lengkap (Grid)
    const servicesContainer = document.getElementById("services-grid");
    webContent.services.forEach(item => {
        const card = document.createElement("div");
        card.className = "service-card";
        card.innerHTML = `
            <div class="service-icon">
                <i class="${item.icon}"></i>
            </div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        `;
        servicesContainer.appendChild(card);
    });

    // 5. Injeksi Program Ekosistem
    const ecosystemContainer = document.getElementById("ecosystem-grid");
    webContent.ecosystem.forEach(program => {
        const card = document.createElement("div");
        card.className = "eco-card";
        card.innerHTML = `
            <span class="eco-id">${program.id}</span>
            <h4>${program.name}</h4>
        `;
        ecosystemContainer.appendChild(card);
    });

    // 6. Injeksi Footer
    document.getElementById("footer-company").innerText = webContent.footer.companyName;
    document.getElementById("footer-legal").innerText = webContent.footer.legalities;
    
    const contactContainer = document.getElementById("footer-contact");
    contactContainer.innerHTML = `
        <li><i class="fas fa-map-marker-alt"></i> ${webContent.footer.address}</li>
        <li><i class="fab fa-whatsapp"></i> ${webContent.footer.whatsapp}</li>
        <li><i class="fas fa-envelope"></i> ${webContent.footer.email}</li>
    `;

    // Pasang tautan WhatsApp aktif
    const waNumber = webContent.footer.whatsapp.replace(/[^0-9]/g, ""); // Membersihkan karakter non-angka
    document.getElementById("wa-link").href = `https://wa.me/62${waNumber.substring(1)}?text=Halo%20Markas%20Bisnis,%20saya%20ingin%20konsultasi%20layanan.`;
});