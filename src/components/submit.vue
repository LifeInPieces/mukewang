<template>
<div id="submit">
    <div class="container clearfix" style="">
    <div class="l wenda-main" style="">
      <div class="sucesspage" style="">
        <h2 class="new-save-title">提问</h2>
        <div id="js-inputques" class="inputques" style="">
               <div class="quesdetail clearfix">
                  <span class="ques-label first-label">*</span>
                  <div class="question-area">
                    <input type="text" id="ques-title" class="ipt autocomplete ipt-error" maxlength="255" name="title" placeholder="请一句话说明你的问题，以问号结尾">
                    <p class="errortip">标题不能少于5个汉字！</p>
                   <div>
                       <div id="editorMenu" class="editorMenu"></div>
                       <div id="editor" class="editor"></div>
                   </div>
                  </div>
               </div>
                <div class="mbottom">
                  <span class="ques-label">*</span>
                  <div id="tag-title" class="new-tags ques-tag defaultbox">
                    <p class="new-tag-info">选择问题分类，最多可选3个</p>
                    <div id="js-tags" class="taglist clearfix">
                        <a href="javascript:;" class="save-list-tag" name="Html5">Html5</a>
                        <a href="javascript:;" class="save-list-tag" name="AngularJS">AngularJS</a>
                        <a href="javascript:;" class="save-list-tag" name="CSS3">CSS3</a>
                        <a href="javascript:;" class="save-list-tag" name="Sass/Less">Sass/Less</a>
                        <a href="javascript:;" class="save-list-tag" name="JAVA">JAVA</a>
                        <a href="javascript:;" class="save-list-tag" name="Python">Python</a>
                        <a href="javascript:;" class="save-list-tag" name="Go">Go</a>
                        <a href="javascript:;" class="save-list-tag" name="C++">C++</a>
                    </div>
                    <p class="errortip firse"></p>
                  </div>
               </div>
        </div> 
        <div class="saveques-bottom clearfix">
          <div class="captcha-verify-box js-verify-box hide"></div>
          <a href="javascript:;" id="ques-submit-btn" class="r btn btn-red link-btn publishbtn">发布(Ctrl+Enter)</a>
          <p class="r global-errortip js-global-error"></p>
        </div>
      </div>
     </div>
    <div class="r wenda-slider">
      <div class="panel bbs-sendques">
        <div class="panel-body">
          <h1>提问注意事项</h1>
          <dl>
            <dd>1、大家每天可以免费提出两个问题，从第三个问题起，每个问题扣除2点积分，请知晓哦；</dd>
            <dd>2、您是来解决问题？请先搜索是否已经有同类问题吧。这样您就省心少打字。</dd>
            <dd>3、没找到是么？就在发问题时精确描述你的问题，不要写与问题无关的内容哟；</dd>
            <dd>4、慕课讨论更热衷于解达您想要的答案。能引起思考和讨论的知识性问题；</dd>
            <dt>问答禁止这些提问</dt>
            <dd>1、禁止发布求职、交易、推广、广告类与问答无关信息将一律清理。</dd>
            <dd>2、尽可能详细描述您的问题，如标题与内容不符，或与问答无关的信息将被删除扣分。</dd>
            <dd>3、问答刷屏用户一律冻结帐号</dd>
          </dl>
        </div>
      </div>

    </div>
    <!-- error-pop -->
    <div class="pop-tips-layer"></div>
</div>
</div>
</template>
<style lang="scss" scoped>
#submit {
    padding-bottom: 29px;
}
#submit {
    min-height: 750px;
    padding: 20px 0;
}
.container {
    margin-top: 20px;
}
.container {
    width: 1152px;
    margin: 0 auto;
}
.wenda-main {
    width: 770px;
    padding: 0 0 48px;
    margin-right: 30px;
}
.sucesspage h2 {
    height: 78px;
    line-height: 78px;
    font-size: 24px;
    margin-left: 30px;
    font-weight: 400;
}
.question-area .ipt {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    font-size: 14px;
    font-family: "Microsoft YaHei";
}
.question-area {
    position: relative;
    margin-left: 30px;
}
.inputques .first-label {
    line-height: 40px;
}
.ques-label {
    float: left;
    width: 30px;
    text-align: center;
    color: #ff9600;
    font-size: 14px;
    line-height: 38px;
}
.question-area .ipt-error {
    color: #ec1500;
    border-color: #ec1500;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
}
.ipt {
    color: #1c1f21;
    background-color: #fff;
    border: 1px solid #98a1a6;
    height: 20px;
    padding: 9px 9px;
    font-size: 14px;
    line-height: 20px;
    border-radius: 0;
    -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    -moz-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    border-color: #98a1a6;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -moz-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
}
.errortip {
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: #f20d0d;
    clear: both;
    margin-bottom: 5px;
}
// 富文本
.editor {
 margin-top: 0px;
}
// 课程样式
.new-tag-info {
    font-size: 14px;
    color: #787d82;
    line-height: 34px;
}
.taglist{
    margin-left: 23px;
}
.taglist .hot-label, .taglist .save-list-tag {
    font-size: 14px;
    padding: 0 9px;
    height: 28px;
    line-height: 28px;
    color: #787d82;
    background-color: #fff;
    border: 1px solid #d0d6d9;
    margin: 0 5px 5px 0;
}
.taglist .save-list-tag {
    margin: 2px;
    cursor: pointer;
    display: inline-block;
}
.saveques-bottom .btn {
    width: 140px;
    text-align: center;
    background-color: #f01400;
    border-color: #f01400;
}
.saveques-bottom {
    position: relative;
}
.btn-red:link, .btn-red:visited {
    color: #fff;
}
.saveques-bottom .global-errortip {
    margin-right: 12px;
    font-size: 12px;
    color: #f01400;
    height: 40px;
    line-height: 40px;
}
.btn-red {
    color: #fff;
    background-color: #ec1500;
    border-color: #ec1500;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    -weibkit-transition: all .3s;
    -moz-transition: all .3s;
    transition: all .3s;
    width: 138px;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    padding: 0;
}
.btn-red:hover{
    background-color: #ff6464;
}
// 右边样式
.wenda-slider {
    width: 320px;
    margin-top: 20px;
}
.bbs-sendques {
    color: #787d82;
    line-height: 24px;
    font-size: 14px;
    padding: 0;
}
.bbs-sendques .panel-body {
    padding: 15px;
}
.panel{
    background-color: transparent;
    border: none;
    box-shadow: none;
}
.bbs-sendques h1 {
    margin-bottom: 14px;
    padding: 0 20px 0 55px;
    background: url(../images/bbs2.png) no-repeat 0 -90px;
    color: #14191e;
    font-size: 18px;
    line-height: 42px;
    word-wrap: break-word;
}
h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: 400;
}
.bbs-sendques dd {
    margin: 12px 0;
}
.bbs-sendques dt {
    font-weight: 700;
    font-size: 14px;
    margin: .2em 0;
}
.hover-style, .new-tags .taglist .onactive, .taglist .hot-label:hover, .taglist .save-list-tag:hover,
.save-list-tag.active{
    border: 2px solid #f01400;
    padding: 0 8px;
    height: 26px;
    line-height: 26px;
    color: #f01400!important;
    -moz-transition: none!important;
    -webkit-transition: none!important;
    -o-transition: all 0 none!important;
    transition: none!important;
}
</style>
<script>
import E from 'wangeditor'
export default {
  name: 'editor',
  mounted () {
    var editor = new E('#editor')
    editor.customConfig.showLinkImg = false
    editor.customConfig.uploadImgServer = '/upload'
    editor.create()
  }
}
</script>

