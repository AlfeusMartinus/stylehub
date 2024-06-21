import React from "react";
import { Button, Container } from ".";
import { Reveal } from "react-awesome-reveal";
import { fadeInDownShorter2, fadeInLeft } from "@/keyframes";
import Image from "next/image";
const AboutUs = () => {
  return (
    <Container className={"mb-44 scroll-mt-10"} id="about">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl mb-2">Tentang Kami</h2>
        <Reveal keyframes={fadeInDownShorter2} duration={800} delay={100}>
          <p className="opacity-50 w-full  sm:w-[400px] mx-auto">
            Kenali kami melalui profil dan latar belakang.
          </p>
        </Reveal>
      </div>
      <div className="flex items-center">
        <div className="w-[44%] hidden sm:block">
          <Reveal keyframes={fadeInLeft} triggerOnce>
            <div className="relative w-full h-[700px] rounded-2xl overflow-hidden">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/aboutus.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Reveal>
        </div>
        <div className="flex-1 ml-0 sm:ml-10 lg:ml-20">
          <h3 className="font-bold text-2xl mb-3">
            Temukan Gaya Populer di StyleHub
          </h3>
          <p className="mb-3 opacity-50">
            StyleHub adalah destinasi utama untuk menemukan produk dan gaya
            terbaru yang sesuai dengan kepribadian Anda. Kami berdedikasi untuk
            menghadirkan berbagai pilihan fashion terkini dan aksesoris unik
            dari merek-merek ternama dan desainer independen.{" "}
          </p>
          <p className="mb-3 opacity-50">
            Di StyleHub, kami percaya bahwa fashion adalah tentang
            mengekspresikan diri. Oleh karena itu, kami selalu berupaya untuk
            menyediakan koleksi yang beragam dan up-to-date, sehingga setiap
            pelanggan dapat menemukan item yang mencerminkan gaya pribadi
            mereka.{" "}
          </p>
          <p className="hidden lg:block mb-5 opacity-50">
            Dengan lebih dari 500 produk trendi dan lebih dari 300 merek
            ternama, kami berkomitmen untuk memberikan pengalaman berbelanja
            yang menyenangkan dan memuaskan. StyleHub juga bangga memiliki lebih
            dari 1.000 pelanggan yang puas dengan layanan dan produk kami.{" "}
          </p>
          <Reveal delay={200} duration={1000} keyframes={fadeInDownShorter2}>
            <Button
              variant={"primary"}
              isLink={true}
              href={"https://www.instagram.com/stylehubid/"}
              target="_blank"
            >
              Ikuti Kami
            </Button>
          </Reveal>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
