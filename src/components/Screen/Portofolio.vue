<template>
  <div class="MyPorto">
    <section class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="Title">
        <h3 class="Title-porto font-bold text-white text-left">
          My Portofolio
        </h3>
      </div>
      <div class="List-porto">
        <div
          class="Isi"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div class="Img">
            <img src="../../../public/porto_1.jpg" alt="" />
          </div>
          <div class="link-div text-left">
            <h3 class="text-white font-medium">aaistore web</h3>
            <a href="http://aai-store.great-site.net/?i=1" class="link">
              <img src="../../assets/image/browser_icon.svg" alt="" />
              <h2 class="text-white font-regular">Link Website</h2>
            </a>
            <a href="https://github.com/admalfrizi/uas_pbw_adamalfarizi" class="link">
              <img src="../../assets/image/browser_icon.svg" alt="" />
              <h2 class="text-white font-regular">Link Github</h2>
            </a>
          </div>
        </div>
        <div
          class="Isi mt-10"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="3000"
        >
          <div class="Img">
            <img src="../../../public/web_2.jpg" alt="porto" />
          </div>
          <div class="link-div text-left">
            <h3 class="text-white font-medium">KuproyKoding</h3>
            <a href="" class="link">
              <img src="../../assets/image/browser_icon.svg" alt="" />
              <h2 class="text-white font-regular">Link Github</h2>
            </a>
          </div>
        </div>
        <div
          class="Isi mt-10"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div class="Img">
            <img src="../../../public/porto_2.jpg" alt="porto" />
          </div>
          <div class="link-div text-left">
            <h3 class="text-white font-medium">Siadin apps design</h3>
            <a href="" class="link">
              <img src="../../assets/image/browser_icon.svg" alt="" />
              <h2 class="text-white font-regular">Link Dribbble</h2>
            </a>
          </div>
        </div>
        <div
          class="Isi mt-10"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div class="Img">
            <img src="../../../public/porto_3.jpg" alt="porto" />
          </div>
          <div class="link-div text-left">
            <h3 class="text-white font-medium">Retailio apps design</h3>
            <a href="" class="link">
              <img src="../../assets/image/browser_icon.svg" alt="" />
              <h2 class="text-white font-regular">Link Dribbble</h2>
            </a>
          </div>
        </div>
        <div
          class="Isi mt-10"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div class="Img">
            <img src="../../../public/porto_4.jpg" alt="porto" />
          </div>
          <div class="link-div text-left">
            <h3 class="text-white font-medium">Rentalio apps design</h3>
            <a href="" class="link">
              <img src="../../assets/image/browser_icon.svg" alt="" />
              <h2 class="text-white font-regular">Link Dribbble</h2>
            </a>
          </div>
        </div>
        <div
          class="Isi mt-10"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div class="Img">
            <img src="../../../public/porto_5.jpg" alt="porto" />
          </div>
          <div class="link-div text-left">
            <h3 class="text-white font-medium">Traveline apps design</h3>
            <a href="" class="link">
              <img src="../../assets/image/browser_icon.svg" alt="" />
              <h2 class="text-white font-regular">Link Dribbble</h2>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'Portofolio'
}
</script>

<style scoped>

.MyPorto {
  background-color: #406ca8;
  padding-top: 172px;
  padding-bottom: 148px;
}

.Title {
  margin-bottom: 40px;
}

.Title-porto {
  font-size: 36px;
}

.List-porto .Isi {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.List-porto .Isi .Img {
  margin-right: 20px;
}

.List-porto .Isi .Img img {
  width: 1034px;
}
.link-div h3 {
  margin-bottom: 33px;
  font-size: 24px;
}

.link {
  display: flex;
  flex-direction: row;
  margin-bottom: 33px;
}

.link img {
  margin-right: 15px;
}

.link h2:hover {
  color: antiquewhite;
}

@media screen and (max-width: 776px) {
  .MyPorto section {
    text-align: center;
  }

  .MyPorto section .List-porto .Isi {
    display: flex;
    flex-direction: column;
  }

  .MyPorto section .List-porto .Isi .link-div h3 {
    margin-bottom: 20px;
    margin-top: 10px;
  }
}

</style>