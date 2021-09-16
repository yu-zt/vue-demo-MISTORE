<template>
  <div>
    <div class="layout-card-wrapper" ref="layoutCardWrapper">
      <img class="qr-icon" src="../assets/orIcon.png" alt="">
      <div class="login-switch" @mouseenter="loginSwitchEnter" @mouseleave="loginSwitchLeave">
      </div>
      <div ref="switchTtile" class="switch-title-wrapper">
        <div class="switch-title">扫码登录</div>
        <div class="triangle"></div>
      </div>

      <div class="title">
        <div @click="titleClick($event)" class="title-init">登录</div>
        <div @click="titleClick($event)">注册</div>
        <div ref="titleLine" class="title-line"></div>
      </div>
      <div ref="login" class='login'>

        <form action="">
          <div class="input-box" ref="inputUname" @click="clickInputUname"
               :class="{'input-box-click':unameFlag}">
            <label for="uname"></label>
            <input type="text" name="uname" ref="uname" v-model="uname" @blur="unameBlur">
            <div ref="unameTitle" class="input-box-title"
                 :class="{'input-box-title-click':unameFlag}">
              邮箱/手机号码/小米ID</div>
          </div>
          <div v-show="unameEmpty" :class="{'uname-empty':unameEmpty}">请输入账号</div>
          <div class="input-box" ref="inputPwd" @click="clickInputPwd"
               :class="{'input-box-click':pwdFlag}">
            <label for="pwd"></label>
            <input type="password" ref="pwd" name="pwd" v-model="pwd" @blur="pwdBlur">
            <div ref="pwdTitle" class="input-box-title" :class="{'input-box-title-click':pwdFlag}">
              密码
            </div>
          </div>
          <div v-show="pwdEmpty" :class="{'pwd-empty':pwdEmpty}">请输入密码</div>

          <button>登录</button>
        </form>
        <div class="layout-form-action">
          <a href="#">
            <div>忘记密码?</div>
          </a>
          <a href="#">
            <div>手机号登录</div>
          </a>
        </div>
        <div class="other-login">
          <div>其他方式登录</div>
          <img src="../assets/支付宝微信qq微博.png" alt="">
        </div>

      </div>
      <div ref="register" class='register-move'>

        <form action="">
          <div class="input-box">
            <label for="uname"></label>
            <input type="text" name="uname" v-model="uname" @blur="unameBlur">
            <div class="input-box-title">
              国家和地区</div>
          </div>
          <div v-show="">请输入账号</div>
          <div class="input-box">
            <label for="uname"></label>
            <input type="text" name="uname" v-model="uname" @blur="unameBlur">
            <div class="input-box-title">
              手机号码</div>
          </div>
          <div v-show="">请输入账号</div>

          <div class="input-box">
            <label for="security"></label>
            <input name="security">
            <div class="input-box-title">
              短信验证码
            </div>
          </div>
          <div v-show="">请输入短信验证码</div>

          <button>注册</button>
        </form>
        <div class="layout-form-action">
          <a href="#">
            <div>收不到验证码?</div>
          </a>

        </div>
        <div class="checkbox">
          <input type="checkbox">
          <span>已阅读并同意小米帐号</span> <a href="#">用户协议</a> 和<a href="#">隐私政策</a>
        </div>

        <div class="other-login">
          <div>其他方式登录</div>
          <img src="../assets/支付宝微信qq微博.png" alt="">
        </div>

      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'LayoutCard',
  data () {
    return {
      unameFlag: false,
      pwdFlag: false,
      pwdEmpty: false,
      unameEmpty: false,
      uname: '',
      pwd: ''
    }
  },
  mounted () {
    //动态设置 login对话框的高度 
    this.$refs.layoutCardWrapper.style.height = this.$refs.login.clientHeight + 80 + 'px';
  },
  methods: {
    loginSwitchEnter () {
      this.$refs.switchTtile.style.display = "block"
    },
    loginSwitchLeave () {
      this.$refs.switchTtile.style.display = "none"
      this.$refs.switchTtile.innerHTML === '扫码登录' ? this.$refs.switchTtile.innerHTML === '密码登录' : this.$refs.switchTtile.innerHTML === '扫码登录'
    },
    titleClick (e) {
      //登录和注册切换
      e.target.className = 'title-click'
      if (e.target.innerHTML === "登录") {
        e.target.nextSibling.className = ''
        this.$refs.titleLine.style.left = "0"
        this.$refs.login.className = 'login'
        this.$refs.register.className = 'register-move'
        //动态设置 login对话框的高度 
        this.$refs.layoutCardWrapper.style.height = this.$refs.login.clientHeight + 80 + 'px';
      } else {
        e.target.previousSibling.className = 'title-unclick'
        this.$refs.titleLine.style.left = "60px"
        this.$refs.register.className = 'register'
        this.$refs.login.className = 'login-move'
        //动态设置 login对话框的高度 
        this.$refs.layoutCardWrapper.style.height = this.$refs.register.clientHeight + 80 + 'px';
      }

    },
    clickInputUname () {
      this.unameFlag = true
      this.$refs.uname.focus();
    },
    clickInputPwd () {
      this.pwdFlag = true
      this.$refs.pwd.focus();

    },
    unameBlur () {

      if (!this.uname) this.unameEmpty = true
      this.unameFlag = false
      this.$refs.inputUname.style.backgroundColor = "rgb(252, 242, 243)"
      this.$refs.unameTitle.style.color = "#ff6a00"


    },
    pwdBlur () {
      if (!this.pwd) this.pwdEmpty = true
      this.pwdFlag = false
      this.$refs.inputPwd.style.backgroundColor = "rgb(252, 242, 243)"
      this.$refs.pwdTitle.style.color = "#ff6a00"
    },
  },
}
</script>

<style lang="less" scoped>
.layout-card-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 450px;
  // height: 600px;
  transform: translate(-50%, -300px);
  background-color: rgb(255, 255, 255);
  box-shadow: 0 10px 50px rgb(243, 243, 243);
  border-radius: 5px;
  padding: 40px;
  box-sizing: border-box;
  overflow: hidden;
  // background-color:@base-color;
  .switch-title-wrapper {
    display: none;
    .switch-title {
      position: absolute;
      top: 16px;
      right: 70px;
      width: 90px;
      height: 30px;
      color: white;
      background-color: @base-color;
      border-radius: 3px;
      text-align: center;
      line-height: 30px;
      box-shadow: 1px 1px 5px @base-color;
    }
    .triangle {
      position: absolute;
      top: 27px;
      right: 65px;
      border: 5px solid @base-color;
      border-left-color: transparent;
      border-bottom-color: transparent;
      box-shadow: 1px 1px 5px @base-color;
      transform: rotate(45deg);
    }
  }

  .qr-icon {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 40px;
    z-index: 99;
    pointer-events: none;
  }
  .login-switch {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    border: 32px solid @base-color;
    border-bottom-color: transparent;
    border-left-color: transparent;
    opacity: 0.4;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      opacity: 1;
      transition: all 0.3s;
    }
  }
  .register {
    position: absolute;
    right: 40px;
    transition: all 0.5s;
  }
  .register-move {
    position: absolute;
    right: -400px;
    transition: all 0.5s;
  }
  .login {
    position: absolute;
    left: 40px;
    transition: all 0.5s;
  }
  .login-move {
    position: absolute;
    left: -400px;
    transition: all 0.5s;
  }
  .title {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    .title-init {
      color: @bc-color;
      font-weight: 550;
    }

    .title-click {
      color: @bc-color;
      font-weight: 550;
      transition: all 0.3s;
    }
    .title-line {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 0;
      height: 2px;
      width: 41px;
      border-radius: 2px;
      background-color: @base-color;
    }
    div {
      padding: 5px 0;
      font-size: 20px;
      color: #bbbbbb;
      cursor: pointer;
      transition: all 0.3s;
    }
  }
  form {
    .input-box-click {
      box-shadow: 0 0 10px #f0f0f0;
      border: 1px solid @base-color;
      transition: all 0.3s;
    }
    .input-box {
      position: relative;
      margin: 20px 0 5px 0;
      height: 62px;
      width: 370px;
      border-radius: 5px;
      background-color: #f9f9f9;
      cursor: pointer;
      transition: all 0.3s;
      label {
        height: 62px;
        width: 370px;
      }
      .input-box-title {
        position: absolute;
        top: 20px;
        left: 20px;
        transition: all 0.3s;
        color: rgb(180, 180, 180);
      }

      .input-box-title-click {
        top: 10px;
        color: @base-color;
        font-size: 12px;
        transition: all 0.3s;
      }

      input {
        position: absolute;
        top: 35px;
        left: 20px;
        outline: none;
        border: none;
        background-color: transparent;
        font-size: 18px;
      }
    }

    .uname-empty,
    .pwd-empty {
      color: @base-color;
      font-size: 12px;
    }
    button {
      margin: 20px 0 0 0;

      height: 62px;
      width: 100%;
      font-size: 18px;
      color: white;
      border-radius: 5px;

      background-color: #ffbe99;
    }
  }
  .layout-form-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin-bottom: 10px;
    div {
      color: @base-color;
      margin: 10px 0;
    }
  }
  .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #bbb;
    font-size: 14px;

    input {
      left: 0;
      top: 0;
      margin: 0 5px;
      border: none;
      outline: none;
      width: 20px;
      height: 20px;
      // opacity: 0;
    }

    a {
      color: @bc-color;
      margin: 0 5px;
      font-size: 16px;
    }
  }
  .other-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 130px;
    color: #bbbbbb;

    img {
      margin-top: 10px;
      height: 50px;
    }
  }
}
</style>