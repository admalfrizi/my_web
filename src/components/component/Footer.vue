<template>
  <div class="bg-blue-800">
      <div class="Footer">
          <footer class="Isi mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="email-contact py-4 text-left">
                    <h4 class="text-white font-bold">adam.alfarizi.2002@gmail.com</h4>
                </div>
                <div>
                    <div class="contact">
                        <div class="Title-Container text-left mb-5">
                            <h3 class="text-white font-medium">Follow Me On :</h3>
                        </div>
                        <div class="Link-Container flex flex-row justify-between">
                            <div class="youtube-link mr-6 pt-1">
                                <a href="">
                                    <img src="./../../assets/icons/yt_ic.svg" alt="">
                                </a>
                            </div>
                            <div class="ig-link mr-6 pt-1">
                                <a href="https://www.instagram.com/aaiyangasli/">
                                    <img src="./../../assets/icons/ig_ic.svg" alt="">
                                </a>
                            </div>
                            <div class="twitter-link mr-6">
                                <a href="https://twitter.com/adamalfarizi_26">
                                    <img src="./../../assets/icons/twitter_ic.svg" alt="">
                                </a>
                            </div>
                            <div class="github-link mr-6">
                                <a href="https://github.com/admalfrizi">
                                    <img width="35px" src="./../../assets/icons/github_ic.svg" alt="">
                                </a>
                            </div>
                            <div class="linkedin-link mr-6">
                                <a href="https://www.linkedin.com/in/adalf26/">
                                    <img src="./../../assets/icons/linkedin_ic.svg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
          </footer>
      </div>
  </div>
</template>

<script>
export default {
    name: "Footer"
};
</script>

<style>

.Footer {
    background-color: #0B3876;
    padding-top: 38px;
    padding-bottom: 38px;
    width: 100%;
}

.Footer .Isi {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.email-contact h4 {
    font-size: 28px;
}

@media screen and (max-width: 600px) {
    .Footer {
        padding-top: 10px;
    }

    .Footer .Isi {
        display: flex;
        flex-direction: column;
        width: 80%;
    }

    .Footer .Isi .email-contact h4 {
        font-size: 14pt;
    }
}

</style>