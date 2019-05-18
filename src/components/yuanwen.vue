<template>
<div id="page" class="clearfix">
    <ul class="list">
      <router-link to="/yuanwen">
        <span>热门回答</span>
      </router-link>
      <router-link to="##">
        <span>最新回答</span>
      </router-link>
      <router-link to="#">
        <span>等我回答</span>
      </router-link>
    </ul>
    <div class="main">
      <div class="left-block">
        <div class="ques-list">
          <div class="item clearfix">
            <div class="item-num l">
              <router-link to="/detail" class="has-finish" target="_blank">
                <em class="el-icon-check"></em>
                <span>25</span>
              </router-link>
              <router-link to="/detail" target="_blank">
                <em>5341</em>
                <span>浏览</span>
              </router-link>
            </div>
            <div class="que-con">
              <router-link to="/detail" class="que-title" target="_blank" title="大三暑假没有实习，这段时间应该怎么安排来提高前端水平？">
                <span>大三暑假没有实习，这段时间应该怎么安排来提高前端水平？</span>
              </router-link>
              <div class="label">
                <img src="//img.mukewang.com/59e96deb0001f9d302400240.jpg" title="Vue.js">
                <router-link to="/yuanwen" target="_blank">Vue.js</router-link>
              </div>
            </div>
          </div>

          <div class="item clearfix" @mouseenter="enter" @mouseleave="leave">
            <div class="item-num l">
              <router-link to="/detail" target="_blank" class="has-answer">
                <em>20</em>
                <span>回答</span>
              </router-link>
              <router-link to="/detail" target="_blank">
                <em>6089</em>
                <span>浏览</span>
              </router-link>
            </div>
            <div class="que-con">
              <router-link to="/wenda/detail/352263" class="que-title" target="_blank" title="前端开发第一步">
                 <span>前端开发第一步</span>
              </router-link>
              <div class="label">
                <img src="//img.mukewang.com/59e96eb100019d5902400240.jpg" title="前端工具">
                <router-link to="/yuanwen" target="_blank">前端工具</router-link>
              </div>
            </div>
            <div class="answer-url" v-show="clickanswer">
              <router-link to="/detail" target="_blank">
                我来回答
                <em>最高可获2积分</em>
              </router-link>
            </div>
          </div>
        </div>
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
      <!-- 侧边 -->
      <div class="right-block">
        <div class="userinfo-block">
        <div class="user-about clearfix">
          <a href="javascript:;" target="_blank" class="l js-header-avator">
            <img src="//img3.mukewang.com/5b8cedf40001798c02000200-100-100.jpg" alt>
          </a>
          <div class="user-name">
            <a href="javascript:;" class="js-header-nickname username" target="_blank">慕容8187168</a>
          </div>
          <div class="integral-info">
            <a href="javascript:;" class="integral" target="_blank">
              积分：
              <span class="js-header-credit">1</span>
            </a>
          </div>
        </div>
        <div class="user-action">
          <a href="javascript:;" target="_blank" class="ques">
            <em>0</em>
            <span>我提问的</span>
          </a>
          <a href="javascript:;" target="_blank" class="follow">
            <em>1</em>
            <span>我关注的</span>
          </a>
          <a href="javascript:;" target="_blank" class="reply">
            <em>0</em>
            <span>我回答的</span>
          </a>
        </div>
      </div>
        <div class="ansranking js-usercard-box">
          <h3 class="title">
            <span>回答排行榜</span>
            <span class="ranktab js-rank-tab" data-type="week">本周</span>
            <span class="ranktab js-rank-tab dataactive" data-type="day">当日</span>
          </h3>
          <div class="rankingbox ranking-day js-rank-tab-box" data-type="day">
            <ul>
              <li>
                <a href="javascript:;" target="_blank" class="clearfix l">
                  <div class="imgCon l">
                    <img
                      src="//img2.mukewang.com/5333a08f0001700202000200-100-100.jpg"
                      title="慕盖茨9453107"
                    >
                  </div>
                  <div class="text l">
                    <div class="name js-usercard-dialog" data-userid="6798264">慕盖茨9453107</div>
                    <p class="clearfix">
                      <span class="l">13个回答</span>
                      <span class="l">0个支持</span>
                    </p>
                  </div>
                </a>
                <button class="follow r moco-btn moco-btn-gray-l js-add-follow" :class="news?'activenews':''" @click="already">
                  <i class="imv2-add el-icon-plus"></i>关注
                </button>
                <button
                  class="follow r moco-btn moco-btn-gray-l js-already-follow js-has-already" :class="yiguanzhu?'active':''" @click="addfollow">
                  <i class="el-icon-check"></i>已关注
                </button>
              </li>
            </ul>
          </div>
          <div class="rankingbox ranking-week js-rank-tab-box" data-type="week">
            <ul>
              <li>
                <a href="javascript:;" target="_blank" class="clearfix l">
                  <div class="imgCon l">
                    <img
                      src="//img.mukewang.com/54584ed2000152a202200220-100-100.jpg"
                      title="MMTTMM"
                    >
                  </div>
                  <div class="text l">
                    <div class="name js-usercard-dialog" data-userid="6463693">MMTTMM</div>
                    <p class="clearfix">
                      <span class="l">38个回答</span>
                      <span class="l">0个支持</span>
                    </p>
                  </div>
                </a>

                <button
                  class="follow r moco-btn moco-btn-gray-l js-add-follow"
                  data-uid="6463693"
                  data-type="1"
                >
                  <i class="imv2-add el-icon-plus"></i>关注
                </button>
                <button class="follow r moco-btn moco-btn-gray-l js-already-follow js-has-already">
                  <i class="imv2-check"></i>已关注
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#page {
  width: 1088px;
  margin: 24px auto 0;
}
.list li {
  float: left;
  padding-left: 0 !important;
}
.list a {
  color: #545c63;
  padding: 4px 12px;
  font-size: 12px;
  margin-right: 12px;
  text-align: center;
}
.list .active {
  background: #9199a1;
  border-radius: 12px;
  color: #fff;
}
.left-block {
  padding-top: 0;
  margin-top: 24px;
  width: 776px;
  float: left;
}
.ques-list .item .que-con .label img {
  width: 16px;
  height: 16px;
  border-radius: 8px;
  vertical-align: middle;
  margin-right: 4px;
}
.ques-list .item .item-num a.has-finish {
  background: rgba(31, 173, 78, 0.1);
  border-radius: 4px;
  color: #17823b;
}
.ques-list .item .item-num a {
  display: inline-block;
  width: 40px;
  padding: 8px 0;
  margin-right: 8px;
  color: #9199a1;
  text-align: center;
}
.el-icon-check {
  font-weight: 800;
}
.ques-list {
  background: #fff;
  padding: 28px 32px;
  box-shadow: 0 4px 8px 0 rgba(28, 31, 33, 0.1);
  border-radius: 12px;
}
.ques-list .item .item-num a em {
  line-height: 16px;
  font-weight: 700;
  margin-bottom: 4px;
}
.ques-list .item .item-num a em,
.ques-list .item .item-num a span {
  display: block;
}
.ques-list .item .item-num a span {
  line-height: 12px;
}
.ques-list .item .que-con {
  margin-left: 120px;
}
.ques-list .item .que-con .que-title {
  font-size: 16px;
  color: #07111b;
  line-height: 24px;
  display: block;
  margin-bottom: 4px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.que-title span:hover{
  color: #1fad4e;
}
.ques-list .item .que-con .label a {
  display: inline-block;
  font-size: 12px;
  color: #9199a1;
  background-color: transparent;
}
.ques-list .item:first-child {
  padding-top: 0;
}
.ques-list .item {
  position: relative;
  border-bottom: 1px solid rgba(28, 31, 33, 0.1);
  padding: 16px 0;
  overflow: hidden;
}
.ques-list .item .answer-url {
  position: absolute;
  right: 0;
  bottom: 16px;
}
.ques-list .item .answer-url a {
  color: #1fad4e;
  font-size: 12px;
}
.ques-list .item .answer-url a:hover {
  color: #0e5626;
}
.ques-list .item .item-num a.has-answer {
  color: #1fad4e;
}
.ques-list .item .item-num a:hover{
  color: #1fad4e;
}
.ques-list .item .answer-url a em {
  color: #9199a1;
  font-weight: 400;
}
.ques-list .item:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}
.el-pager li.active {
  background: #4d555d;
  color: #fff;
}
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background-color: transparent !important;
}
.el-pagination {
  margin: 25px 0 auto;
  text-align: center;
}
// 侧边样式
.right-block {
  width: 280px;
  float: right;
}
.userinfo-block {
  background: rgba(56, 61, 66, 0.06);
  border-radius: 8px;
  padding: 24px 23px;
  margin-bottom: 24px;
}
.userinfo-block .user-about img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}
.userinfo-block .user-about .integral-info, .userinfo-block .user-about .user-name {
    margin-left: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.user-name a.username {
    font-size: 16px;
    color: #1c1f21;
    line-height: 24px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.integral-info a.integral{
    font-size: 12px;
    color: #545c63;
    line-height: 18px;
}
.userinfo-block .user-about {
    border-bottom: 1px solid rgba(28,31,33,.1);
    padding-bottom: 16px;
}
.userinfo-block .user-action {
    margin-top: 16px;
}
.userinfo-block .user-action a {
    display: inline-block;
    width: 64px;
    margin-right: 10px;
    color: #545c63;
}
.userinfo-block .user-action a em {
    font-size: 16px;
    line-height: 24px;
}
.userinfo-block .user-action a span {
    font-size: 12px;
    line-height: 18px;
}
.userinfo-block .user-action a em, .userinfo-block .user-action a span {
    display: block;
    text-align: center;
}
.user-action span:hover{
  color: #000;
}
.ansranking {
    overflow: hidden;
}
.ansranking .title {
    font-size: 16px;
    color: #1c1f21;
    line-height: 24px;
    overflow: hidden;
}
.ansranking .title span {
    float: left;
    font-weight: 700;
}
.ansranking .title .ranktab.dataactive, .ansranking .title .ranktab:hover {
    color: #1c1f21;
    font-weight: 700;
}
.ansranking .title .ranktab {
    cursor: pointer;
    font-size: 12px;
    color: #9199a1;
    float: right;
    margin-left: 24px;
    font-weight: 200;
}
.rankingbox ul {
    margin-top: 16px;
}
.rankingbox ul li {
    width: 100%;
    height: 48px;
    margin-bottom: 16px;
}
.imgCon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
}
.imgCon img {
    width: 100%;
    height: 100%;
}
.rankingbox ul li a .text {
    margin-top: 3px;
    margin-left: 12px;
    text-align: left;
}
.rankingbox ul li a .text .name {
    max-width: 135px;
    font-weight: 700;
    font-size: 14px;
    color: #383d42;
    line-height: 24px;
    margin-bottom: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.rankingbox ul li a .text span {
    font-size: 12px;
    color: #9199a1;
    line-height: 18px;
    margin-right: 18px;
}
.rankingbox ul li .follow {
    margin-top: 0;
    height: 24px;
    line-height: 24px;
    padding: 0 12px;
    font-size: 12px;
    cursor: pointer;
    background-color: rgba(84,92,99,0.1);
    border-color: transparent;
}
.rankingbox ul li .follow:hover{
  background-color: #16833a;
  color: #fff;
}
.js-add-follow.activenews{
  display: none;
}
.js-has-already{
  display: none;
}
.js-has-already.active{
  display: block;
}
.rankingbox ul li .follow i {
    font-size: 12px;
    top: 1px;
    right: 2px;
    position: relative;
    font-weight: 800;
}
.moco-btn {
    position: relative;
    margin-bottom: 0;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    text-decoration: none;
    box-sizing: border-box;
    background-image: none;
    -webkit-appearance: none;
    white-space: nowrap;
    outline: none;
    user-select: none;
    border-style: solid;
    border-width: 1px;
    border-radius: 18px;
}
</style>
<script>
export default {
  data(){
    return{
      clickanswer:false,
      yiguanzhu:false,
      news:false
    }
  },
  methods:{
    enter(){
      this.clickanswer=!this.clickanswer
    },
    leave(){
      this.clickanswer=!this.clickanswer
    },
    already(){
      this.yiguanzhu=this.news=true
    },
    addfollow(){
      this.yiguanzhu=this.news=false
    }
},
}
</script>



