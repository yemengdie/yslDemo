<template>
  <div>
    <Header></Header>
    <el-container>
      <el-main>
        <div class="pc-part">
          <div class="article por a1">
            <img src="@/assets/image/gw.jpg" alt />
          </div>
          <div class="article por a2">
            <img src="@/assets/image/PC_02.jpg" alt />
          </div>
          <div class="article por a3">
            <img src="@/assets/image/PC_03.jpg" alt />
          </div>
          <div class="article por a4">
            <img src="@/assets/image/PC_04.jpg" alt />
          </div>
          <div class="article por a4">
            <img src="@/assets/image/PC_05.jpg" alt />
          </div>
          <div class="article por a4">
            <img src="@/assets/image/PC_06.jpg" alt />
          </div>
          <div class="article por a7">
            <img src="@/assets/image/PC_07.jpg" alt />
          </div>
          <div class="article por a4">
            <img src="@/assets/image/PC_08.jpg" alt />
          </div>
          <div class="article por a9">
            <img src="@/assets/image/PC_20.jpg" alt />
          </div>
        </div>
      </el-main>
    </el-container>
    <Foot></Foot>
  </div>
</template>
<script>
import Header from "@/components/header/Header.vue";
import Foot from "@/components/footer/Foot.vue";
export default {
  components: {
    Header,
    Foot
  },
  data() {
    return {};
  },
  methods: {
    login() {
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="scss" scoped>
.pc-part .article {
  padding: 0;
}
.pc-part .a4 {
  cursor: pointer;
}
.article img {
  width: 100%;
  display: block;
}
</style>