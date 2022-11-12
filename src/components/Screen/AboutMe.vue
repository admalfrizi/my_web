<template>
  <div class="AboutMe w-full">
    <main class="mx-auto mb-10 py-5 max-w-7xl sm:px-6 lg:px-8 Layout2">
      <div class="aboutme-pic">
        <img src="./../../../public/bio_img.svg" alt="gambar" />
        <div class="photo" data-aos="fade-right" data-aos-duration="3000">
          <img src="../../assets/image/my_photo.png" alt="" />
          <img
            class="clouds"
            src="../../assets/icons/sun_and_clouds.svg"
            alt=""
            data-aos="fade-left"
            data-aos-duration="3000"
          />
        </div>
      </div>
      <div
        class="sm:mx-auto lg:text-left Isi"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <h1 class="tracking-tight font-semibold text-white Title-WAI">
          <span class="block xl:inline">Oh Hello...</span>
        </h1>
        <p
          class="
            mt-3
            text-base text-white
            font-regular
            sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
            md:mt-5 md:text-xl
            lg:mx-0
            Sub2
          "
        >
          My Name is Adam Alfarizi, I'am UI UX Design enthusiast and also
          building my career in the mobile and web development.
        </p>
        <p
          class="
            mt-3
            text-base text-white
            font-regular
            sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
            md:mt-5 md:text-xl
            lg:mx-0
            Sub2
          "
        >
          Starting love about technology since junior high school and become a
          enthusiastic since vocational school and wondering why all of things
          in the world is modern
        </p>
        <p
          class="
            mt-3
            text-base text-white
            font-regular
            sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
            md:mt-5 md:text-xl
            lg:mx-0
            Sub2
          "
        >
          and currently study at the Dian Nuswantoro University in Semarang
          majoring at informatics engineering.
        </p>
      </div>
    </main>
    <section
      class="rounded-xl mx-auto max-w-7xl sm:px-6 lg:px-8 py-7 bg-blue-700"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div class="contact-me">
        <div class="text-left mb-5 title-contact-me">
          <h2 class="font-bold text-white text-2xl">Contact Me</h2>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-row mb-7">
            <div class="mr-4">
              <img src="../../assets/icons/wa_icons.svg" alt="" />
            </div>
            <div>
              <h3 class="font-medium text-white">+6285742080867</h3>
            </div>
          </div>
          <div class="flex flex-row">
            <div class="mr-5 w-6">
              <img src="../../assets/icons/loc_ic.svg" alt="" />
            </div>
            <div class="py-2">
              <h3 class="font-medium text-white">Ungaran, Indonesia</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
.AboutMe {
  background-color: #0b3876;
  padding-top: 140px;
}

.Layout2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.aboutme-pic {
  width: 484px;
}

.aboutme-pic img {
  position: absolute;
}

.photo {
  position: relative;
  top: 0;
  left: 0;
}

.clouds {
  position: relative;
  top: 0;
  right: 0;
  margin-top: 60px;
  margin-right: 72px;
}

.Title-WAI {
  width: auto;
  font-size: 36px;
  margin-bottom: 10px;
}

.Sub2 {
  line-height: 45px;
}

@media screen and (max-width: 600px) {
  .AboutMe {
    height: 10%;
  }
  .AboutMe .Layout2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
  }
  .aboutme-pic {
    margin: auto;
  }

  .aboutme-pic img {
    position: absolute;
    width: 50%;
  }
  .photo {
    position: relative;
    top: 0;
    left: 0;
  }

  .aboutme-pic .photo .clouds {
    width: 10%;
    position: relative;
    right: 0;
    left: 120px;
    bottom: 90px;
  }

  .AboutMe .Layout2 .Isi {
    position: relative;
    bottom: 0;
    margin-top: 300px;
    width: 70%;
  }
}
</style>