<template>
    <div id="inner">
       <div class="hearder">
            <el-container>
            <el-main><img src="./images/logo.png"></el-main>
            <el-aside class="asideseach">
                <div class="mainseach">
                    <input type="text" placeholder="请输入你的问题">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </div>
                <div class="que-btn">
                    <router-link class="moco-btn moco-btn-green" target="_blank" to="/submit">提问</router-link>
                </div>
            </el-aside>
          </el-container>
        <div class="label-manage" :class="[this.flag?'active':'']">
        <div class="my-label">
            <div class="label-box">
                <ul>
                    <li>我的关注:</li>
                    <li>
                        <a href="/wenda/26" target="_blank">前端工具</a>
                    </li>     
                    <li>
                        <a href="/wenda/52" target="_blank">Vue.js</a>
                    </li>     
                    <li>
                        <a href="/wenda/88" target="_blank">小程序</a>
                    </li>     
                        
                </ul>
            </div>
        </div>
        </div>
       </div>
       <router-view></router-view>
    </div>
</template>
<style lang="scss" scoped>
.hearder{
    width: 100%;
    background: #fff;
    box-shadow: 0 8px 16px 0 rgba(28,31,33,.1);
}
.el-container{
    width: 1088px;
    margin: 0 auto;
}
.el-aside{
    overflow: hidden;
}
.el-main{
    padding: 0;
}
.asideseach{
    width: auto !important;
}
.mainseach{
    float: left;
    position: relative;
    width: 480px;
    height: 36px;
    background: #f3f5f6;
    font-size: 14px;
    border-radius: 8px;
    padding-right: 56px;
    margin: 16px 0 0 0;
    box-sizing: border-box;
}
.asideseach input{
    width: 100%;
    line-height: 20px;
    padding: 8px 16px;
    font-size: 14px;
    color: #9199a1;
    background: #f3f5f6;
    border-radius: inherit;
    border: none;
    outline: none;
}
.el-button{
    position: absolute;
    right: 0;
    top: 0;
    font-size: 20px;
    color: #9199a1;
    line-height: 24px;
    padding: 6px 16px;
    border-radius: 0;
    background-color: #f3f5f6;
    border: none;
    margin-left: 0px;
    border-radius: inherit;
}
.el-button i{
    display: block;
    height: 24px;
    color: #586066;
    cursor: pointer;
    font-size: 20px;
}
.moco-btn-green:hover, .moco-btn-green:focus, .moco-btn-green.focus, .moco-btn-green:active, .moco-btn-green.active {
    color: #fff;
    border-color: #17823b;
    background: #17823b;
    opacity: 1;
    border-radius: 62px;
}
.que-btn {
    float: right;
    margin: 16px 0 0 16px;
    width: 62px;
    height: 36px;
    background-color: #1FAD4E;
    border-radius: 62px;
}
.que-btn a{
    display: inline-block;
    width: 62px;
    text-align: center;
    line-height: 36px;
    color: #fff;
}
// 下面的导航
.label-manage {
    max-width: 1088px;
    margin: 0 auto;
    height: 46px;
    position: relative;
    z-index: 2;
    border-top: 1px solid rgba(28,31,33,.1);
}
.label-manage.active{
    display: none;
}
.my-label {
    position: relative;
    z-index: 1;
    width: 1088px;
}
.my-label .label-box {
    max-height: 46px;
    overflow: hidden;
    padding-right: 80px;
}
.my-label .label-box ul {
    padding: 8px 0 0 0;
    line-height: 26px;
    flex-wrap: wrap;
    display: flex;
    display: -webkit-flex;
}
.my-label .label-box li:first-child {
    margin-right: 20px;
    font-weight: 700;
    font-size: 14px;
    color: #545c63;
}
.my-label .label-box li {
    display: inline-block;
}
.my-label .label-box li a {
    display: block;
    font-size: 14px;
    margin-bottom: 8px;
    padding-right: 20px;
    color: #545c63;
}
</style>
<script>
    var flag;
    var  urlsubmit=window.location.href.lastIndexOf('/submit')
     var urldetail=window.location.href.lastIndexOf('/detail')
    if(urlsubmit!=-1 || urldetail!=-1){
        flag=true
    }else{
        flag=false
    }
export default {
    data(){
        return{
            flag:flag
        }
    }
}
</script>



