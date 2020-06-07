<template>
  <div>
    <Header></Header>
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