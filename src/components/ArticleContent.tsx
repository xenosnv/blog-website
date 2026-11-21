"use client";

import React from "react";
import DecryptedText from "./reactbits/DecryptedText";
import SpotlightCard from "./reactbits/SpotlightCard";
import PerspectiveToggle from "./PerspectiveToggle";
import ImageLightbox from "./ImageLightbox";
import {
  Cpu,
  Smartphone,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const ArticleContent: React.FC = () => {
  return (
    <article className="py-12 space-y-16 text-zinc-300">
      {/* ----------------- BABAK 1 ----------------- */}
      <section id="fase-algoritma" className="scroll-mt-24 space-y-6">
        <div className="flex items-center gap-2">
          <DecryptedText
            text="FASE 01 // AWAL MASUK & LOGIKA DASAR"
            speed={30}
            animateOn="view"
            parentClassName="font-mono text-xs tracking-wider text-zinc-400 font-medium"
            className="font-mono text-xs tracking-wider text-zinc-400 font-medium"
          />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 font-sans">
          Awal Masuk: Ekspektasi Kode vs. Realitas Logika & Hardware
        </h2>

        <div className="article-prose">
          <p>
            Awal masuk kuliah Informatika, ekspektasiku sederhana: nulis kode,
            bikin program jalan, beres. Kenyataannya, langkah pertama justru
            dimulai dari hal-hal yang paling dasar—algoritma, <em>flowchart</em>
            , dan cara berpikir tentang bagaimana data diatur serta mengalir.
          </p>
          <p>
            Di awal-awal kuliah, aku juga banyak mengulik komponen PC, fungsinya,
            dan bagaimana alur data bergerak di dalamnya. Menarik sekali rasanya
            ketika hal-hal yang tadinya cuma terasa abstrak mulai kelihatan
            mekanismenya.
          </p>
        </div>

        {/* SPOTLIGHT CARD 1 */}
        <SpotlightCard
          spotlightColor="rgba(255, 255, 255, 0.07)"
          className="p-6 border-zinc-800 bg-[#111114]"
        >
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-zinc-800 border border-zinc-700/80 text-zinc-300 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  Catatan Refleksi #01
                </span>
                <span className="text-[11px] font-mono text-zinc-500">
                  Semester 1–2
                </span>
              </div>
              <h3 className="text-base font-semibold text-zinc-200">
                Pondasi Logika Sebelum Visual
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Memetakan <em>flowchart</em> dan memahami alur data di komponen
                PC membentuk kebiasaan berpikir terstruktur: kondisi mana yang
                memicu perubahan, data apa yang dibawa, dan ke mana hasilnya
                berpindah. Kebiasaan ini sangat membantu saat nanti merancang
                alur antarmuka (<em>user journey</em>).
              </p>
            </div>
          </div>
        </SpotlightCard>
      </section>

      {/* ----------------- BABAK 2 ----------------- */}
      <section id="fase-mobile-web" className="scroll-mt-24 space-y-6">
        <div className="flex items-center gap-2">
          <DecryptedText
            text="FASE 02 // TITIK BALIK SEMESTER 4"
            speed={30}
            animateOn="view"
            parentClassName="font-mono text-xs tracking-wider text-zinc-400 font-medium"
            className="font-mono text-xs tracking-wider text-zinc-400 font-medium"
          />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 font-sans">
          Titik Balik: Dari Terminal Kaku ke Layar Sentuh & Web Bisnis
        </h2>

        <div className="article-prose">
          <p>
            Fase paling terasa perubahannya buatku ada di{" "}
            <strong className="text-zinc-100 font-semibold">Semester 4</strong>.
            Sebelumnya, banyak latihan web yang masih terasa kaku atau berbasis
            CLI. Begitu masuk ke pemrograman mobile, rasanya jauh lebih <em>excited</em>{" "}
            karena kode yang kutulis bisa langsung berubah menjadi aplikasi yang
            interaktif dan terasa nyata di layar.
          </p>
          <p>
            Di semester yang sama, ada juga mata kuliah pembuatan website bisnis.
            Meskipun konteks utamanya bisnis, menurutku ada nilai penting yang
            sering kelewat:{" "}
            <span className="text-zinc-100 font-medium">
              website yang bagus bukan cuma soal fitur, tapi juga soal bagaimana
              desain dan alurnya membuat user nyaman, percaya, mau bertransaksi,
              atau tertarik mengajak kerja sama.
            </span>
          </p>
        </div>

        {/* SPOTLIGHT CARD 2 */}
        <SpotlightCard
          spotlightColor="rgba(255, 255, 255, 0.07)"
          className="p-6 border-zinc-800 bg-[#111114]"
        >
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-zinc-800 border border-zinc-700/80 text-zinc-300 shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  Catatan Refleksi #02
                </span>
                <span className="text-[11px] font-mono text-zinc-500">
                  Semester 4
                </span>
              </div>
              <h3 className="text-base font-semibold text-zinc-200">
                Fitur Lengkap Saja Belum Cukup
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Di layar HP dan web komersial, pengalaman pengguna menentukan segalanya.
                Sistem dengan database tercepat sekalipun tidak akan dipakai jika
                halaman registrasinya membingungkan atau tombol tindakannya tidak
                terlihat meyakinkan.
              </p>
            </div>
          </div>
        </SpotlightCard>
      </section>

      {/* ----------------- BABAK 3 ----------------- */}
      <section id="fase-kejujuran-desain" className="scroll-mt-24 space-y-6">
        <div className="flex items-center gap-2">
          <DecryptedText
            text="FASE 03 // KEJUJURAN KREATIF"
            speed={30}
            animateOn="view"
            parentClassName="font-mono text-xs tracking-wider text-zinc-400 font-medium"
            className="font-mono text-xs tracking-wider text-zinc-400 font-medium"
          />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 font-sans">
          Kejujuran Kreatif: Kenapa Tidak DKV & Seni Meramu Referensi
        </h2>

        <div className="article-prose">
          <p>
            Dari situlah rasa ketertarikanku pada desain makin besar. Jujur saja,
            kadang terlintas juga pikiran soal DKV—tapi melihat kebutuhan biaya
            yang besar dan tuntutan orisinalitas tinggi, aku merasa kurang cocok
            di jalur itu.
          </p>
          <p>
            Aku sadar kreativitasku bukan tipe yang selalu menciptakan sesuatu
            dari nol mutlak. Kebanyakan desain yang kubuat justru lahir dari{" "}
            <span className="text-zinc-100 font-medium">
              proses mengamati banyak referensi, mengambil elemen yang cocok, lalu
              meramunya dan menyatukannya
            </span>{" "}
            menjadi sebuah hasil baru yang menurutku pas dan rapi.
          </p>
        </div>

        {/* SPOTLIGHT CARD 3 */}
        <SpotlightCard
          spotlightColor="rgba(255, 255, 255, 0.07)"
          className="p-6 border-zinc-800 bg-[#111114]"
        >
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-zinc-800 border border-zinc-700/80 text-zinc-300 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  Catatan Refleksi #03
                </span>
                <span className="text-[11px] font-mono text-zinc-500">
                  Cara Kerja Desain
                </span>
              </div>
              <h3 className="text-base font-semibold text-zinc-200">
                Meramu Referensi yang Terbukti Efektif
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Di dunia pengembangan software nyata, menyerap pola desain yang
                sudah terbiasa dipakai pengguna (<em>design patterns</em>) lalu
                menyesuaikannya dengan konteks kebutuhan justru menghasilkan
                tampilan yang fungsional, bersih, dan tidak membingungkan.
              </p>
            </div>
          </div>
        </SpotlightCard>
      </section>

      {/* ----------------- BABAK 4 ----------------- */}
      <section id="fase-magang-diskominfo" className="scroll-mt-24 space-y-6">
        <div className="flex items-center gap-2">
          <DecryptedText
            text="FASE 04 // PRAKTIK NYATA DI DISKOMINFO"
            speed={30}
            animateOn="view"
            parentClassName="font-mono text-xs tracking-wider text-zinc-400 font-medium"
            className="font-mono text-xs tracking-wider text-zinc-400 font-medium"
          />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 font-sans">
          Magang di Diskominfo: Peran Ganda UI/UX Designer & Quality Check
        </h2>

        <div className="article-prose">
          <p>
            Kepekaan terhadap detail desain itulah yang ternyata ikut membuka
            pintu di luar kelas. Pada{" "}
            <strong className="text-zinc-100 font-semibold">Juli 2026</strong>, aku
            diajak teman untuk magang. Entah apa tepatnya yang pertama kali
            mereka lihat dariku, tapi kurasa ketelitian dan pemahamanku soal
            desain punya peran besar.
          </p>
          <p>
            Hingga sekarang—yang rencananya berjalan sampai{" "}
            <strong className="text-zinc-100 font-semibold">Januari 2027</strong>—aku
            menjalani magang di <strong>Diskominfo</strong> dengan peran sebagai{" "}
            <span className="text-zinc-100 font-medium">
              UI/UX Designer sekaligus Quality Check (QC)
            </span>
            .
          </p>
          <p>
            Tugasnya bukan sekadar bikin tampilan terlihat bagus, tapi juga
            memastikan alur, tata letak, dan interaksinya benar-benar sesuai
            sebelum sampai ke user.
          </p>
        </div>

        {/* SPOTLIGHT CARD 4 */}
        <SpotlightCard
          spotlightColor="rgba(255, 255, 255, 0.07)"
          className="p-6 border-zinc-800 bg-[#111114]"
        >
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-zinc-800 border border-zinc-700/80 text-zinc-300 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  Catatan Refleksi #04
                </span>
                <span className="text-[11px] font-mono text-zinc-500">
                  Juli 2026 – Jan 2027
                </span>
              </div>
              <h3 className="text-base font-semibold text-zinc-200">
                Memastikan Mockup Sesuai dengan Realitas Sistem
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Di Diskominfo, menggabungkan peran desainer dan QC membuat proses
                pengujian lebih tajam: bukan cuma memeriksa apakah tombol berfungsi,
                tapi apakah alurnya nyaman, tidak ada teks yang ambigu, dan
                tampilannya tetap rapi saat diakses dari berbagai ukuran layar.
              </p>
            </div>
          </div>
        </SpotlightCard>

        {/* Perspektif ganda */}
        <PerspectiveToggle />
      </section>

      {/* ----------------- BABAK 5 ----------------- */}
      <section id="fase-reactbits" className="scroll-mt-24 space-y-6">
        <div className="flex items-center gap-2">
          <DecryptedText
            text="FASE 05 // EKSPLORASI REACTBITS & KE DEPAN"
            speed={30}
            animateOn="view"
            parentClassName="font-mono text-xs tracking-wider text-zinc-400 font-medium"
            className="font-mono text-xs tracking-wider text-zinc-400 font-medium"
          />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 font-sans">
          Sentuhan Gerak: Mengulik ReactBits untuk Proyek ke Depan
        </h2>

        <div className="article-prose">
          <p>
            Belakangan ini, rasa penasaran itu mengarah ke eksplorasi komponen
            animasi web menggunakan <strong>ReactBits</strong>. Banyak komponen
            interaktifnya yang terasa pas buat memberi sentuhan gerak yang lebih
            hidup di proyek-proyek website-ku ke depan.
          </p>
        </div>

        {/* Gambar Screenshot Katalog Komponen ReactBits dengan Lightbox Modal */}
        <ImageLightbox
          src="/images/reactbits-catalog.jpg"
          alt="Katalog Komponen Animasi Web di React Bits"
          caption="Tangkapan layar halaman komponen React Bits saat memilah efek visual dan animasi untuk proyek web berikutnya (ragam komponen seperti Holo Mosaic, Gradient ASCII, Flux Lines, Holo Card, Crystalized Ball, hingga Pattern Waves)."
        />

        <div className="article-prose">
          <p>
            Perjalananku dari sekadar memahami flowchart sampai duduk di posisi
            UI/UX dan QC mungkin bukan garis lurus yang sempurna, tapi setiap
            tahapnya pelan-pelan membentuk cara pandangku:{" "}
            <span className="text-zinc-100 font-semibold underline decoration-zinc-700 underline-offset-4">
              teknologi yang kuat akan terasa jauh lebih bermakna ketika dirancang
              dengan empati dan ketelitian terhadap pengalaman pengguna.
            </span>
          </p>
        </div>

        {/* SPOTLIGHT CARD 5 */}
        <SpotlightCard
          spotlightColor="rgba(255, 255, 255, 0.07)"
          className="p-6 border-zinc-800 bg-[#111114]"
        >
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-zinc-800 border border-zinc-700/80 text-zinc-300 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  Catatan Refleksi #05
                </span>
                <span className="text-[11px] font-mono text-zinc-500">
                  Eksplorasi Aktif
                </span>
              </div>
              <h3 className="text-base font-semibold text-zinc-200">
                Mikro-Animasi yang Menghargai Waktu Pengguna
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Di halaman ini, komponen ReactBits seperti <em>DotGrid</em> di latar
                atas, <em>BlurText</em> di judul, <em>DecryptedText</em> di penanda
                babak, dan <em>SpotlightCard</em> memberi kesan hidup tanpa mengganggu
                fokus membaca. Gerakan animasi hadir sebagai pelengkap, bukan gangguan.
              </p>
            </div>
          </div>
        </SpotlightCard>
      </section>
    </article>
  );
};

export default ArticleContent;
