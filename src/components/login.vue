<template>
  <div class="login">
    <div class="loginWrap">
      <div class="title">管理平台(cPay管理端)</div>
      <div class="formFloor">
        <img class="logo"
          src="../assets/sign-icon.png">
        <div class="formCont">
          <Input v-model="userName"
            placeholder="请输入用户名"
            class="loginInput"
            style="width:236px;height:35px;" />
          <Input v-model="password"
            :type="this.showPass ? 'text' : 'password'"
            :icon="this.showPass ? 'md-eye' : 'md-eye-off'"
            @on-click="showPassword()"
            placeholder="请输入密码"
            class="loginInput"
            style="width:236px;height:35px;" />
          <Button type="primary"
            class="loginBtn"
            @click="loginBtnClick()"
            style="width:236px;">
            确定
            <!-- <Icon class="loginBtn_icon"
              type="ios-arrow-forward" /> -->
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: '',
      showPass: true
    }
  },
  methods: {
    showPassword: function () {
      this.showPass = !this.showPass
    },
    loginBtnClick () {
      console.log('登录成功')
      this.$router.push('/dashBoard')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// 登录页背景图
@pagebg : '../assets/sign-bg.jpg';
// 登录框背景图
@loginbg : '../assets/sign-box.png';

.login {
  width: 100%;
  height: 100%;
  background: #0d1d3e url(@pagebg) center/auto repeat-x;
  position: relative;
  .loginWrap {
    width: 615px;
    height: 423px;
    background: url(@loginbg) center no-repeat;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .title {
      height: 61px;
      line-height: 70px;
      text-align: center;
      font-size: 20px;
      color: #1258ba;
      border-bottom: 1px solid #a3c3ff;
      margin: 0 10px;
      overflow: hidden;
    }
    .formFloor {
      .logo {
        display: block;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 126px;
        border-radius: 10px;
      }
      .formCont {
        width: 236px;
        margin: 0 auto;
        .loginInput {
          margin-bottom: 15px;
        }
        .loginBtn {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;

          .loginBtn_icon {
            font-size: 18px;
            position: relative;
            top: -1px;
          }
        }
      }
    }
  }
}
</style>
