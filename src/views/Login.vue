<template>
  <div>
    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>
        <el-col :span="19">
          <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
        </el-col>
        <el-col :span="5">
          <el-link type="info" href="/register">注册</el-link>
        </el-col>
      </el-form-item>
    </el-form>
    <el-alert title="登录失败，请输入用户名与密码" type="error" show-icon v-if="loginerror"></el-alert>
  </div>
</template>

<script>
import authorizationService from "@/services/users/authorizationService";
import StorageService from "@/services/common/storage.service";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          { required: true, message: "账号不可为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不可为空", trigger: "blur" }]
      },

      // 对话框显示和隐藏
      loginerror: false
    };
  },
  methods: {
    onSubmit(formName) {
      // 为表单绑定验证功能
      this.$refs[formName].validate(valid => {
        if (valid) {
          authorizationService
            .login(this.form.username, this.form.password)
            .then(result => {
              let user = {
                name: this.form.username,
                token: this._.get(result, "data.token")
              };
              StorageService.setCurrentUser(user);
               this.$router.push({
                  name: "Home"
                });
            })
            .catch(function(error) {
              this.loginerror = true;
            });
        } else {
          this.loginerror = true;
          return false;
        }
      });
    },
    handleClose() {}
  }
};
</script>

<style lang="scss" scoped>
.login-box {
  border: 1px solid #dcdfe6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}

.login-register-button {
  right: 0px;
}
</style>