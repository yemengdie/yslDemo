<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="手机号" prop="phone">
        <el-input placeholder="请输入手机号" v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码" type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('ruleForm')">登录</el-button>
        <div @click="register">
          <span>还没有账号,前去注册</span>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var isphone = (rule, value, callback) => {
      var isPhone = /^1[3456789]\d{9}$/;
      if (!value === "") {
        if (value.length == 11) {
          if (!isPhone.test(value)) {
            callback(new Error("请输入正确的手机号"));
          }
        } else {
          callback(new Error("请输入11位的手机号"));
        }
      } else if (value === "") {
        callback(new Error("请输入手机号"));
      }
      callback();
    };
    var password = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        password: "",
        phone: ""
      },
      rules: {
        phone: [{ validator: isphone, trigger: "blur" }],
        password: [{ validator: password, trigger: "blur" }]
      }
    };
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(valid => {
        console.log("111111111111");
        if (valid) {
          this.$axios
            .post(this.$api.userLogin, {
              phone: this.ruleForm.phone,
              password: this.ruleForm.password
            })
            .then(res => {
              if (res.code == "200") {
                this.$message({
                  message: res.message,
                  type: "success"
                });
                this.$router.push("/");
                this.$refs[formName].resetFields();
              } else if (res.code == "210") {
                this.$message({
                  message: res.message,
                  type: "warning"
                });
              } else if (res.code == "211") {
                this.$message({
                  message: res.message,
                  type: "warning"
                });
              }
            });
        } else {
        }
      });
    },
    register() {
      this.$router.push("/register");
    }
  }
};
</script>