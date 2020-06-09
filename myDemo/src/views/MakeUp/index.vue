<template>
  <div>
    <Header></Header>
    <el-container>
      <el-main>
        <div class="make_up">
          <div>
            <img src="@/assets/image/cz.jpg" alt />
          </div>
          <div></div>
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
  }
};
</script>
<style lang="scss" scoped>
.make_up {
  display: block;
  z-index: 1;
  position: relative;
}
.make_up img {
  width: 100%;
}
</style>