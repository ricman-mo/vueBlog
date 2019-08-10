<template>
  <div>
    <el-form
      ref="registerForm"
      :model="form"
      :rules="rules"
      label-width="80px"
      class="register-box"
    >
      <h3 class="register-title">欢迎登录</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" placeholder="请输入账号" v-model="form.username"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <!-- <el-form-item label="确认密码" prop="confirmpassword">
        <el-input type="password" placeholder="确认密码" v-model="form.confirmPassword"/>
      </el-form-item> -->
      <el-form-item>
        <el-button type="primary" v-on:click="onSubmit('registerForm')">提交</el-button>
      </el-form-item>
    </el-form>
  
  </div>
</template>

<script>
import authorizationService from "@/services/users/authorizationService";
export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        password: "",
        confirmpassword: ""
      },

      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        username: [
          { required: true, message: "邮箱不可为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不可为空", trigger: "blur" }
        ],
        // confirmpassword: [
        //   { required: true, message: "两次密码不相同", trigger: "blur" }
        // ]
      },

      // 对话框显示和隐藏
      dialogVisible: false
    };
  },
  methods: {
    onSubmit(formName) {
      // 为表单绑定验证功能
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
          authorizationService
            .register(this.form.username, this.form.password)
            .then(result => {
              console.log(result);
                 this.$router.push({
                   name:'Home'
                 });
            });
       
        } else {
          this.dialogVisible = true;
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.register-box {
  border: 1px solid #dcdfe6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.register-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>