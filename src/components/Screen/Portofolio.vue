<template>
  <div :key="componentKey" class="MyPorto">
    <section class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="Title">
        <h3 class="Title-porto font-bold text-white text-left">
          My Portofolio
        </h3>
      </div>
      <tab-menu class="w-11/12 lg:w-10/12 mb-16" :tabList="tabList">
        <template v-slot:tabPanel-1>  
          <TabPorto/>
        </template>
        <template v-slot:tabPanel-2> 
          <TabCertificate/>
        </template>
      </tab-menu>
    </section>
  </div>
</template>

<script>
import TabMenu from "../component/Tab.vue";
import TabCertificate from '../component/TabCertificate.vue';
import TabPorto from "../component/TabPorto.vue";

export default {
  
  name: "Portofolio",
  components: {
    TabMenu,TabPorto, TabCertificate
  },
  data() {
    return {
      componentKey: 2,
      tabList: ["Portofolio", "Certificate"],
    }
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    }
  },
};
</script>

<style scoped>
.MyPorto {
  background-color: #406ca8;
  padding-top: 152px;
  padding-bottom: 100px;
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

@media screen and (max-width: 600px) {

  .MyPorto {
    padding-top: 120px;
    margin: auto;
    width: 100%;
  }
  .MyPorto section {
    text-align: center;
    padding-left: 10px;
  }

  .MyPorto section .List-porto .Isi {
    display: flex;
    flex-direction: column;
  }

  .MyPorto section .List-porto .Isi .link-div h3 {
    margin-bottom: 20px;
  }
}
</style>