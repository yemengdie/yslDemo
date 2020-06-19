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
<script src="https://d3js.org/d3.v3.min.js"></script>
<script src="https://d3js.org/d3.hexbin.v0.min.js"></script>
<script>
import Header from "@/components/header/Header.vue";
import Foot from "@/components/footer/Foot.vue";
export default {
  components: {
    Header,
    Foot
  },
  data() {
    return {
      msg: "",
      myConfig: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 240,
        // 初始容器宽度
        initialFrameWidth: "100%",
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        serverUrl: "http://35.201.165.105:8000/controller.php",
        // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
        UEDITOR_HOME_URL: "/UEditor"
      }
    };
  },
  created() {
    console.log(localStorage.getItem("username"));
  },
  mounted() {},
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
.wrap {
  margin: 100px;
  margin-left: 300px;
  //width: 620px;
}
body {
  background: white;
}
.axis text {
  font: 10px sans-serif;
}
.axis path,
.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}
.hexagon {
  fill: none;
  stroke: #000;
  stroke-width: 0.5px;
}
</style>