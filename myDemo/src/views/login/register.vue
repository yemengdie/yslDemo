<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="用户名" prop="userName">
        <el-input placeholder="请输入用户名" v-model="ruleForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input placeholder="请输入手机号" v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码" type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="password2">
        <el-input placeholder="请再次输入密码" type="password" v-model="ruleForm.password2"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register('ruleForm')">注册</el-button>
        <div @click="login">
          <span>已有账号，前去登录</span>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var user_name = (rule, value, callback) => {
      var regName = /^[\u4e00-\u9fa5]{2,4}$/;
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (!regName.test(value)) {
          callback(new Error("请输入2-4位的中文"));
        }
        callback();
      }
    };
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
    var password2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        userName: "",
        password: "",
        password2: "",
        phone: ""
      },
      rules: {
        userName: [{ validator: user_name, trigger: "blur" }],
        phone: [{ validator: isphone, trigger: "blur" }],
        password: [{ validator: password, trigger: "blur" }],
        password2: [{ validator: password2, trigger: "blur" }]
      }
    };
  },
  methods: {
    register(formName) {
      this.$refs[formName].validate(valid => {
        console.log("111111111111");
        if (valid) {
          this.$axios
            .post(this.$api.userRegister, {
              phone: this.ruleForm.phone,
              password: this.ruleForm.password,
              user: this.ruleForm.userName
            })
            .then(res => {
              console.log(res);
              if (res.code == "200") {
                this.$message({
                  message: res.message,
                  type: "success"
                });
                this.$router.push("/");
                this.$refs[formName].resetFields();
              } else if (res.code == "201") {
                this.$message({
                  message: res.message,
                  type: "warning"
                });
              }
            });
        }
      });
    },
    login() {
      this.$router.push("/login");
    }
  }
};
</script>