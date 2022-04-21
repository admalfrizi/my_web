<template>
  <div class="Container">
    <div class="BannerHome">
      <main
        class="
          mt-10
          mx-auto
          max-w-7xl
          sm:mt-12 sm:px-6
          md:mt-16
          lg:mt-20 lg:px-8
          xl:mt-28
          Layout
        "
      >
        <div
          class="sm:text-center lg:text-left Isi"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h4 class="font-bold Title1">Oh, Hello</h4>
          <h1 class="tracking-tight font-bold Title2">
            <span class="block xl:inline"
              >HI, I'am Adam Alfarizi and Welcome To My Website</span
            >
          </h1>
          <p
            class="
              mt-3
              text-base text-white
              font-light
              sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto
              md:mt-5 md:text-xl
              lg:mx-0
              Sub
            "
          >
            Keep mastering my mind and knowledge of this wide world to
            communicate the information to all people that need it, and
            <span class="tag">Lastly be realistic and critism</span>
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div>
              <button
                @click="onClick"
                class="
                  Btn-NH
                  w-full
                  flex
                  items-center
                  px-8
                  py-3
                  border border-transparent
                  text-sm
                  font-bold
                  rounded-md
                  text-white
                  md:py-4 md:text-lg md:px-10
                  Btn
                "
              >
                <img
                  class="mr-5"
                  src="../../assets/image/download_ic.svg"
                  alt=""
                />
                Download My CV
              </button>
            </div>
          </div>
        </div>
        <div class="Img-container" data-aos="zoom-in" data-aos-duration="3000">
          <img src="./../../../public/img_cover.png" alt="gambar" />
        </div>
      </main>
    </div>
    <div class="WhoAmI">
      <section class="mx-auto max-w-7xl sm:px-6 lg:px-8 Layout2">
        <div
          class="Img-container-wai"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <img src="./../../../public/wai_img.png" alt="gambar" />
        </div>
        <div
          class="sm:text-center lg:text-left Isi"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <h1 class="tracking-tight font-semibold text-white Title-WAI">
            <span class="block xl:inline">Who Am I ?</span>
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
            Well I'am just ordinary people from Semarang taste like Jakarta that
            love all of things about technology and design
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
            enthusiastic since vocational school and.....
          </p>
          <router-link
            to="/aboutme"
            class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
          >
            <div>
              <a
                href="mailto:adam.alfarizi.2002@gmail.com"
                class="
                  Btn-NH
                  w-full
                  flex
                  items-center
                  justify-center
                  px-8
                  py-3
                  border border-transparent
                  text-base
                  font-bold
                  rounded-md
                  text-white
                  md:py-4 md:text-lg md:px-10
                  Btn
                "
              >
                About Me...
              </a>
            </div>
          </router-link>
        </div>
      </section>
    </div>
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
              <a
                href="https://github.com/admalfrizi/uas_pbw_adamalfarizi"
                class="link"
              >
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
              <img src="../../../public/web_2.jpg" alt="" />
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
              <img src="../../../public/porto_2.jpg" alt="" />
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
              <img src="../../../public/porto_3.jpg" alt="" />
            </div>
            <div class="link-div text-left">
              <h3 class="text-white font-medium">Retailio apps design</h3>
              <a href="" class="link">
                <img src="../../assets/image/browser_icon.svg" alt="" />
                <h2 class="text-white font-regular">Link Dribbble</h2>
              </a>
            </div>
          </div>
        </div>
        <router-link
          to="/portofolio"
          class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <div>
            <a
              href="mailto:adam.alfarizi.2002@gmail.com"
              class="
                Btn-NH
                w-full
                flex
                items-center
                justify-center
                px-8
                py-3
                border border-transparent
                text-base
                font-bold
                rounded-md
                text-white
                md:py-4 md:text-lg md:px-10
                Btn
              "
            >
              Find More My Portofolio...
            </a>
          </div>
        </router-link>
      </section>
    </div>
    <div class="MySkills">
      <section class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="Title items-center">
          <h3 class="Title-porto font-bold text-white">My Skills</h3>
        </div>
        <div class="Line">
          <div
            class="Skills-Isi"
            v-for="skill in skills"
            v-bind:key="skill.id"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div>
              <h3 class="lang font-regular text-white">{{ skill.name }}</h3>
            </div>
            <div class="bar">
              <div
                class="progress"
                v-bind:style="{ width: skill.percent + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section class="mx-auto max-w-7xl sm:px-6 lg:px-8 Tool">
        <div class="Title items-center">
          <h3 class="Title-tool font-bold text-white">Tools and Platform</h3>
        </div>
        <div class="flex flex-row justify-between">
          <div
            class="tools items-center"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <div class="tools_ic">
              <img src="../../assets/image/figma_ic.svg" alt="tools" />
            </div>
            <h3 class="font-medium text-white items-center mx-auto">Figma</h3>
          </div>
          <div
            class="tools items-center"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <div class="tools_ic">
              <img src="../../assets/image/vscode_ic.svg" alt="tools" />
            </div>
            <h3 class="font-medium text-white items-center mx-auto">Vscode</h3>
          </div>
          <div
            class="tools items-center"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <div class="tools_ic">
              <img src="@/assets/image/React.svg" alt="tools" />
            </div>
            <h3 class="font-medium text-white items-center mx-auto">
              React Js
            </h3>
          </div>
          <div
            class="tools items-center"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <div class="tools_ic">
              <img src="@/assets/image/android_studio_ic.svg" alt="tools" />
            </div>
            <h3 class="font-medium text-white items-center mx-auto">
              Android Studio
            </h3>
          </div>
          <div
            class="tools items-center"
            data-aos="flip-up"
            data-aos-duration="2000"
          >
            <div class="tools_ic">
              <img src="@/assets/image/flutter_ic.svg" alt="tools" />
            </div>
            <h3 class="font-medium text-white items-center mx-auto">Flutter</h3>
          </div>
        </div>
      </section>
    </div>
    <div class="NeedHelp">
      <section class="mx-auto max-w-7xl sm:px-6 lg:px-8 Layout2">
        <div
          class="Img-container-nh"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <img src="@/assets/image/bussiness_inquires.svg" alt="gambar" />
        </div>
        <div
          class="sm:text-center lg:text-left Isi"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <h1 class="tracking-tight font-semibold text-white Title-WAI">
            <span class="block xl:inline"
              >So you want chat and talking business ? No Problem</span
            >
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
            I'am realized making value for each other are most important things
            in building the relationship and collaborations. So , please don't
            hesitate to discussing about it
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div>
              <a
                href="#"
                class="
                  Btn-NH
                  w-full
                  flex
                  items-center
                  justify-center
                  px-8
                  py-3
                  border border-transparent
                  text-base
                  font-bold
                  rounded-md
                  text-white
                  md:py-4 md:text-lg md:px-10
                  Btn
                "
              >
                Let's Discuss
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const skills = [
  {
    name: "UI UX Design",
    percent: 90,
  },
  {
    name: "IT Enggineering",
    percent: 80,
  },
  {
    name: "Android Flutter Dev",
    percent: 65,
  },
  {
    name: "Android Kotlin Dev",
    percent: 70,
  },
  {
    name: "PHP / MySql",
    percent: 87,
  },
  {
    name: "Web Programming",
    percent: 80,
  },
  {
    name: "Graphics Design",
    percent: 83,
  },
];

export default {
  name: "Home",
  setup() {
    return {
      skills,
    };
  },
  methods: {
    onclick() {
      axios({
        url: "http://aai.42web.io/CV_AdamAlfarizi.pdf",
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        var fileurl = window.URL.createObjectURL(new Blob([response.data]));
        var filelink = document.createElement("a");
        filelink.href = fileurl;

        filelink.setAttribute("download", "CV_AdamAlfarizi.pdf");
        document.body.appendChild(filelink);

        filelink.click();
      });
    },
  },
};
</script>

<style>
.Container {
  padding-top: 50px;
  padding-bottom: 102px;
  background-color: #0a479b;
}

.Layout {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.Btn {
  background-color: #3b8ded;
  border-radius: 32px;
}

.Btn:hover {
  transition-duration: 0.5s;
}

.Isi {
  width: 569px;
}

.tag {
  color: #ffeb69;
  font-weight: 600;
}

.Title1 {
  color: #ff5d04;
  font-size: 24px;
  margin-bottom: 10px;
}

.Title2 {
  width: auto;
  line-height: 67px;
  color: #ead025;
  font-size: 42px;
}

.Sub {
  line-height: 35px;
}

.Img-container {
  width: 530px;
  height: 398px;
}

.WhoAmI {
  background-color: #0b3876;
  margin-top: 102px;
  padding-top: 110px;
  padding-bottom: 110px;
}

.Layout2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.Img-container-wai {
  width: 484px;
  height: 470px;
}

.Title-WAI {
  width: auto;
  font-size: 36px;
  margin-bottom: 10px;
}

.Sub2 {
  line-height: 45px;
}

.MyPorto {
  background-color: #406ca8;
  padding-top: 72px;
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

.MySkills {
  background-color: #0b3876;
  padding-top: 110px;
  padding-bottom: 110px;
  margin-bottom: 168px;
}

.Line {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: space-around;
}

.MySkills .Layout .Title {
  margin: auto;
}

.Skills-Isi {
  margin-right: 73px;
  margin-bottom: 30px;
}

.Skills-Isi .lang {
  font-size: 20px;
  text-align: left;
  margin-bottom: 22px;
}

.Skills-Isi .bar {
  width: 295px;
  height: 22px;
  background: #51a2a7;
  overflow: hidden;
  border-radius: 3px;
}

.Skills-Isi .bar .progress {
  padding: 15px;
  background-color: #35ddb5;
  border-radius: 3px;
}

.MySkills .Tool {
  margin-top: 50px;
}

.MySkills .Tool .Title .Title-tool {
  font-size: 24px;
}

.MySkills .Tool .Title {
  margin-bottom: 60px;
}

.tools {
  max-height: 150px;
}

.tools .tools_ic {
  max-width: 89px;
  max-width: 89px;
}

.tools .tools_ic img {
  margin: auto;
  width: 89px;
}

.tools h3 {
  margin-top: 18px;
  width: 77px;
  text-align: center;
}

.Btn-NH:hover {
  background-color: #2e64a1;
}

@media screen and (max-width: 776px) {
  .Container {
    padding-top: 90px;
    width: 100%;
  }
  .Container .BannerHome .Layout {
    display: flex;
    flex-direction: column-reverse;
  }

  .Container .BannerHome .Layout .Isi {
    text-align: center;
    margin: auto;
    padding-top: 40px;
  }

  .Container .BannerHome .Layout .Img-container {
    text-align: center;
    margin: auto;
  }

  .Container .WhoAmI .Layout2 {
    display: flex;
    flex-direction: column;
  }

  .Container .WhoAmI .Layout2 .Img-container-wai {
    text-align: center;
    margin: auto;
  }

  .Container .WhoAmI .Layout2 .Isi {
    padding-top: 30px;
    text-align: center;
    margin: auto;
  }

  .Container .MyPorto section {
    text-align: center;
  }

  .Container .MyPorto section .List-porto .Isi {
    display: flex;
    flex-direction: column;
  }

  .Container .MyPorto section .List-porto .Isi .link-div h3 {
    margin-bottom: 20px;
    margin-top: 10px;
  }

  .Container .NeedHelp .Layout2 {
    display: flex;
    flex-direction: column;
  }

  .Container .NeedHelp .Layout2 .Img-container-nh {
    text-align: center;
    margin: auto;
  }

  .Container .NeedHelp .Layout2 .Isi {
    margin: auto;
    padding-top: 20px;
  }
}
</style>