<template>
  <div class="user-box">
      <div class="avatar">
        <img :src="require(`@/components/UserInfoBox/image/user_avatar.png`)" width="100%" height="100%">
      </div>
      <div class="info">
        <p>总积分：<span class="point">{{userData.point}}&nbsp;分</span> </p>
        <p>用户ID：<span class="user">{{userData.userId}}</span></p>
        <p>VIP等级：<span>1</span></p>
      </div>
  </div>
</template>

<script>
  export default {
      computed: {
        userData () {
          return this.$store.state.User.userData
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
    .user-box {
        width:100%;
        padding:10px;
        margin:0 auto;
        border-bottom:1px #e5e5e5 solid;
        background-image: url("image/index_bg.png");
        background-repeat:no-repeat;
        background-size:100% 100%;
        overflow: hidden;
        .avatar {
            width:5.5rem;
            height:5.5rem;
            position: relative;
            float: left;
            top:0;left:0;
            padding-left: 0;
            margin-left: 6%;
            overflow:hidden;
        }
        .info {
            position: relative;
            float: left;
            width: 53%;
            padding: 1px 10px;
            margin-top: 8px;
            text-align: left;
            margin-left: 20px;
            border-radius: 5px;
            background-color:rgba(245,245,245,0.3);
            font-weight:lighter;
            color:#808080;
            .point {
                font-weight: bold;
                color: red;
            }
            .user {
                color:#F5F5F5;
            }
        }
    }
</style>
