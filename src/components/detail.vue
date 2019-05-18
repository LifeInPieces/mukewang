<template>
<div id="detail">
    <!-- 标题到顶部的固定 -->
    <div class="scrollHeader" :class="searchBarFixed ? 'item' :''">
    <div class="detailscroll-nav">
        <h1>窗口随鼠标拖拽移动，没有效果</h1>
        <div class="scroll-answerbtn r">
        	<a href="javascript:void(0);" class="moco-btn moco-btn-green js-answer-btn" @click="myanswer">我要回答</a>
			    <a href="javascript:void(0)" title="关注" class="moco-btn moco-btn-gray-l js-collection-btn">
                <span class="js-detail-follow" v-html="follow" @click="detailFollow"></span>
            </a>
        </div>
    </div>
</div>
<div class="wenda clearfix">
    <div class="left-block">
        <div class="ques-intro-box">
            <div id="js-content-main">
                <div class="bread-nav">
                    <i class="imv2-imooc"><img src="../images/1.png"></i>
                    <span>/</span>            
                    <router-link to="/yuanwen" target="_blank">猿问</router-link>
                </div>
                <h1 class="js-qa-wenda-title" id="scrollHeader" data-title="窗口随鼠标拖拽移动，没有效果">窗口随鼠标拖拽移动，没有效果</h1>
                <div class="detail-user-tips">
                    <div class="label-box l">
                        <router-link to="#">CSS3</router-link>
                        <router-link to="#">JavaScript</router-link>
                        <router-link to="#">前端工具</router-link>
                </div>
                <div class="author-info r">
                    <router-link to="#" class="author">qq_浅秋_04051456</router-link>
                    <span>2017-08-27 18:48:04</span>
                </div>
                </div>
                <article>
                    <div id="js-qa-wenda" class="detail-content js-detail-con aimgPreview rich-text" :class="[this.display?'active':'']" @click="showAll">
                        <p>&lt;!DOCTYPE html&gt;</p><p>&lt;html&gt;</p><p>&lt;head&gt;</p><p>&nbsp; &nbsp; &lt;meta charset="UTF-8"&gt;</p><p>&nbsp; &nbsp; &lt;title&gt;Document&lt;/title&gt;</p><p>&lt;style type="text/css"&gt;</p><p>&nbsp; &nbsp; html,body{</p><p>&nbsp; &nbsp; &nbsp; &nbsp; margin:0;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; padding: 0;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; width: 100%;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; height: 100%;</p><p>&nbsp; &nbsp; }</p><p>&nbsp; &nbsp;h1{</p><p>&nbsp; &nbsp; position: relative;</p><p>&nbsp; &nbsp; margin: 0 auto;</p><p>&nbsp; &nbsp; /*text-align: center;*/</p><p>&nbsp; &nbsp; top:50%;</p><p>&nbsp; &nbsp; transform:translateY(-50%);</p><p>&nbsp; &nbsp;}&nbsp;</p><p>&nbsp; &nbsp;.move_out{</p><p>&nbsp; &nbsp; position: relative;</p><p>&nbsp; &nbsp; cursor:pointer;</p><p>&nbsp; &nbsp;}</p><p>&lt;/style&gt;</p><p>&lt;/head&gt;</p><p>&lt;script type="text/javascript"&gt;</p><p>&nbsp; &nbsp; var move_out=false;</p><p>&nbsp; &nbsp; var z,x,y;</p><p>&nbsp; &nbsp; function move(){</p><p>&nbsp; &nbsp; &nbsp; &nbsp; if(event.button==move_out){</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; z.style.pixelLeft=temporarily1+clientX-x;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; z.style.pixelTop=temporarily2+clientY-y;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return false</p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>&nbsp; &nbsp; }</p><p>&nbsp; &nbsp; function down(){</p><p>&nbsp; &nbsp; &nbsp; &nbsp; if(event.srcElement.className=="move_out"){</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; move_out=true;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; z=event.srcElement;//当前事件源</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; temporarily1=z.style.pixelLeft;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; temporarily2=z.style.pixelTop;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; x=event.clientX;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; y=event.clientY;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; document.onmousemove=move;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>&nbsp; &nbsp; &nbsp; &nbsp; else{</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; move_out=false;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; }</p><p>&nbsp; &nbsp; }</p><p>&nbsp; &nbsp; document.oumousedown=down;</p><p>&lt;/script&gt;</p><p>&lt;body&gt;</p><p>&nbsp; &nbsp;&nbsp;</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;!-- &lt;h1&gt;Follow me!&lt;/h1&gt; --&gt;</p><p>&nbsp; &nbsp; &lt;font&gt;Fllow me!&lt;/font&gt; &nbsp; &nbsp;</p><p>&nbsp; &nbsp;&nbsp;</p><p>&lt;/body&gt;</p><p>&lt;/html&gt;</p><p><br></p>
                    </div>
                    <div class="hide-articel-box" :class="[this.display?'active':'']" @click="showAll">查看完整描述</div>
                </article>
            </div>
        </div>
        <div class="ques-list">
            <h2 class="answer-allnum">5 回答</h2>
            <div class="answer-list-box">
                <div class="answer-item" data-qid="356872" data-replynum="0" data-quesid="259830">
                <router-link to="#" class="user-pic">
                  <img src="//img.mukewang.com/5c77f45b00014dfa04000400-100-100.jpg" width="48" height="48" alt="?">
                </router-link>
                <div class="answer-box" id="id_259830">
                    <div class="answer-content" data-height="1">
                        <router-link to="#" class="nickname" title="IVWEB_Jeremygao">IVWEB_Jeremygao</router-link>
                        <div class="answer-desc rich-text aimgPreview">
                        <p>oumousedown ? &nbsp;是我屏幕的像素点排列错了吗？<br></p>
                    </div>
                    <div class="js-show-reply-btn hide-answer-morebtn hide">查看完整回答</div>
                </div>
                <div class="ctrl-bar js-wenda-tool">
                        <span class="moco-ico-btn moco-btn-gray-l js-agree-with " :class="[this.flag?'active':'']" @click="checkSite">
                            <i class="glyphicon glyphicon-thumbs-up" :class="[this.flag?'active':'']"></i><em>25</em>
                        </span>
                        <span class="moco-ico-btn moco-btn-gray-l js-oppose " :class="[this.flags?'active':'']" @click="oppose">
                            <i class="glyphicon glyphicon-thumbs-down" :class="[this.flags?'active':'']"></i><em v-html="this.msg"></em>
                        </span>
                        <a href="javascript:;" class="reply-del js-replay-answer-list" @click="reply">回复</a>
                        <a href="javascript:;" class="reply-del js-tip-off">举报</a>                                                                  
                        <span class="time r">2017-09-01</span>
                </div>
               <div class="reply-con">
                    <ul class="reply-list">
                        <li class="clearfix">
                            <router-link to="#" class="user-pic">
                                <img src="//img.mukewang.com/533e4c5600017c5b02010200-100-100.jpg" alt="狼灰灰">
                            </router-link>
                            <div class="reply-item">
                                <router-link class="from-user" to="#">狼灰灰</router-link>
                                <div class="reply-content">JQUERY必须要用阿，很多东西，不可能用了VUE后，抛弃JQUERY插件阿，生命周期这块我还没有看到，就看到VUE路由教程了，试了一些东西全是问题，一直都解决不掉。百度上都找不到这些解释。</div>
                                <div class="reply-footer">
                                    <a href="javascript:void(0)" class="reply-del reply-btn l" data-username="狼灰灰">回复</a>
                                    <a href="javascript:void(0)" class="reply-del js-tip-off">举报</a>
                                    <span class="time r">2017-06-21</span>
                                </div>
                            </div>
                        </li>
                        <li class="clearfix">
                            <router-link to="#" class="user-pic">
                                <img src="//img1.mukewang.com/5485bdcf00015df201000100-100-100.jpg" alt="狼灰灰">
                            </router-link>
                            <div class="reply-item">
                                <router-link class="from-user" to="#">Caballarii</router-link>
                                <div class="reply-content">学了一个星期了，感觉还只是个入门汉，只会个绑定启动，别的啥也不会。</div>
                                <div class="reply-footer">
                                    <a href="javascript:void(0)" class="reply-del reply-btn l" data-answer-id="248585" data-ques-uid="1301136" data-uid="1301136" data-username="狼灰灰">回复</a>
                                    <a href="javascript:void(0)" data-uid="1301136" data-type="3" data-id="52642" class="reply-del js-tip-off">举报</a>
                                    <span class="time r">2017-06-21</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="moco-btn moco-btn-gray-l reply-more-btn" data-answer-id="248585">点击展开后面<span>2</span>条</div>                              
                 </div>
        </div>
        </div>
        <div class="answer-item" data-qid="356872" data-replynum="0" data-quesid="259493">
            <router-link to="#" target="_blank" class="user-pic">
                <img src="//img4.mukewang.com/54584d1300016b9b02200220-100-100.jpg" width="48" height="48" alt="?">
            </router-link>
            <div class="answer-box" id="id_259493">
                <div class="answer-content" data-height="1">
                    <router-link to="#" target="_blank" class="nickname" title="宝慕林5251960">宝慕林5251960</router-link>
                        <div class="answer-desc rich-text aimgPreview">
                        <p dir="ltr">明天给你我写的</p>
                    </div>
                    <div class="js-show-reply-btn hide-answer-morebtn hide">查看完整回答</div>
                </div>
                <div class="ctrl-bar js-wenda-tool">
                    <span class="moco-ico-btn moco-btn-gray-l js-agree-with " :class="[this.flag?'active':'']" @click="checkSite">
                        <i class="glyphicon glyphicon-thumbs-up" :class="[this.flag?'active':'']"></i><em>25</em>
                    </span>
                    <span class="moco-ico-btn moco-btn-gray-l js-oppose " :class="[this.flags?'active':'']" @click="oppose">
                        <i class="glyphicon glyphicon-thumbs-down" :class="[this.flags?'active':'']"></i><em v-html="this.msg"></em>
                    </span>
                    <a href="javascript:;" class="reply-del js-replay-answer-list">回复</a>
                     <a href="javascript:;" class="reply-del js-tip-off">举报</a>  
                    <span class="time r">2017-08-30</span>
                </div>
                    <div class="reply-con">
                    <ul class="reply-list"></ul>                           
                </div>
            </div>
        </div>
        <div class="answer-item" data-qid="356872" data-replynum="0" data-quesid="259276">
            <router-link to="#" target="_blank" class="user-pic">
                <img src="//img.mukewang.com/5b98a6430001d60e05000714-100-100.jpg" width="48" height="48" alt="?">
            </router-link>
            <div class="answer-box" id="id_259276">
                <div class="answer-content" data-height="1">
                    <router-link to="#" target="_blank" class="nickname" title="cnyballk">cnyballk</router-link>
                        <div class="answer-desc rich-text aimgPreview">
                        <p>你哪看来的，你真得明白函数事件这些事情吗，好好看js基础先吧</p>
                    </div>
                    <div class="js-show-reply-btn hide-answer-morebtn hide">查看完整回答</div>
                </div>
                <div class="ctrl-bar js-wenda-tool">
                    <span class="moco-ico-btn moco-btn-gray-l js-agree-with " :class="[this.flag?'active':'']" @click="checkSite">
                        <i class="glyphicon glyphicon-thumbs-up" :class="[this.flag?'active':'']"></i><em>25</em>
                    </span>
                    <span class="moco-ico-btn moco-btn-gray-l js-oppose " :class="[this.flags?'active':'']" @click="oppose">
                        <i class="glyphicon glyphicon-thumbs-down" :class="[this.flags?'active':'']"></i><em v-html="this.msg"></em>
                    </span>
                    <a href="javascript:;" class="reply-del js-replay-answer-list">回复</a>
                    <a href="javascript:;" class="reply-del js-tip-off">举报</a>  
                    <span class="time r">2017-08-28</span>
                </div>
                <div class="reply-con">
                    <ul class="reply-list"></ul>                          
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    <div class="right-block">
        <div class="detail-info">
            <ul class="number">
                <li>
                    <em>5</em>
                    <span>回答</span>
                </li>
                <li>
                    <em>0</em>
                    <span>关注</span>
                </li>
                <li>
                    <em>1094</em>
                    <span>浏览</span>
                </li>
            </ul>
            <a href="javascript:;" class="moco-btn moco-btn-green js-answer-btn">我要回答</a>
            <a href="javascript:void(0)" data-id="356872" title="关注" class="moco-btn moco-btn-gray-l js-collection-btn">
            <span class="js-detail-follow">关注</span>
            </a>
        <div class="info-footer">
            <div class="small-share l wd-share">
                <ul class="share-wrap">
                    <li class="weichat-posi js-top-share">
                        <div class="bdsharebuttonbox weichat-style bdshare-button-style0-16" data-tag="share_1" data-quesid="356872" data-bd-bind="1557925524791">
                            <a href="#" class="bds_weixin icon-nav icon-share-weichat" data-cmd="weixin" title="分享到微信"><img src="../images/3.png"></a>
                            <a href="#" class="bds_qzone icon-nav icon-share-qq" data-cmd="qzone" title="分享到QQ空间"><img src="../images/4.png"></a>
                            <a href="#" class="bds_tsina icon-nav icon-share-weibo" data-cmd="tsina" title="分享到新浪微博"><img src="../images/5.png"></a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="status-box r">
                <a href="javascript:;" data-id="356872" data-type="1" data-uid="4051456" class="js-tip-off detail-edit l">举报</a>
            </div>
        </div>
    </div>
        <!-- 相关问题 -->
        <div class="aboutque-box">
            <h2>相关问题推荐</h2>
            <div class="ques-item clearfix">
                    <div class="mkhotlist clearfix">
                        <i class="imv2-yuanwen"><img src="../images/2.png"></i>
                        <router-link class="r relwenda" to="#">js做http request怎么添加代理服务器</router-link>
                    </div>
                                    <div class="mkhotlist clearfix">
                        <i class="imv2-yuanwen"><img src="../images/2.png"></i>
                        <router-link class="r relwenda" to="#">JSP 中request、response、session各自的作用是什么?</router-link>
                    </div>
                    <div class="mkhotlist clearfix">
                        <i class="imv2-yuanwen"><img src="../images/2.png"></i>
                        <router-link class="r relwenda" to="#">JSP 页中 requestScope是什么意思？该怎么用？</router-link>
                    </div>
                    <div class="mkhotlist clearfix">
                        <i class="imv2-yuanwen"><img src="../images/2.png"></i>
                        <router-link class="r relwenda" to="#">jsp标签中的 "${表达式}"表示什么？</router-link>
                    </div>
                    <div class="mkhotlist clearfix">
                        <i class="imv2-yuanwen"><img src="../images/2.png"></i>
                        <router-link class="r relwenda" to="#">js问题：如何获取checkbox选中值</router-link>
                    </div>
                </div>
          </div>
            </div>
</div>
<!-- 弹出框 -->
<div class="js-answer-shade-pop" :class="replyshow?'reply':''"></div>
<div class="answer-pop js-reply-pop js-msg-context" :class="replyshow?'reply':''">
    <h3><span v-html="replyAnswer" class="title-replay"></span><span class="el-icon-close" @click="replyhidden"></span></h3>
    <textarea class="answerbox" id="js-reply-answer-box" placeholder="写下你的回复" touser="回复 qq_本_4：" :class="textarea?'reply':''"></textarea>
    <div class="editoropen" :class="myreply?'reply':''">
        <div id="editorMenu" class="editorMenu"></div>
        <div id="editor" class="editor"></div>
   </div>
    <div id="js-qa-ci-footer" class="qa-ci-footer clearfix">
        <span class="qa-tips"></span>
        <div class="qa-ci-footright">
            <div class="captcha-verify-box js-reply-verify-box hide"></div>
            <button id="js-reply-ci-submit" class="js-reply-ci-submit r moco-btn moco-btn-green" @click="replytip" v-html="tipsubmit"></button>
        </div>
    </div>
</div>
</div>
</template>
<style lang="scss" scoped>
.left-block {
    width: 776px;
    float: left;
}
#detail {
    padding-top: 0;
    margin-top: 24px;
}
#detail {
    min-height: 750px;
    padding: 20px 0;
}
.wenda {
    width: 1088px;
    margin: 0 auto;
}
.clearfix{
    overflow: hidden;
}
.ques-intro-box {
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(7,17,27,.05);
    border-radius: 12px;
    padding: 28px 32px;
}
.ques-intro-box .detail-user-tips .author-info a {
    font-size: 12px;
    color: #93999f;
    line-height: 24px;
}
.ques-intro-box .bread-nav a {
    color: rgba(28,31,33,.6);
}
.ques-intro-box .bread-nav {
    font-size: 12px;
    color: rgba(28,31,33,.6);
    line-height: 24px;
}
.imv2-imooc img{
    width: 18px;
    vertical-align: middle;
    margin-top: -3px;
    display: inline-block;
}
.ques-intro-box h1 {
    font-size: 24px;
    color: #07111b;
    font-weight: 700;
    margin-top: 6px;
    line-height: 32px;
    word-break: break-all;
    word-wrap: break-word;
}
.ques-intro-box .detail-user-tips .label-box {
    overflow: hidden;
}
.label-box a {
    padding: 4px 12px;
    background: rgba(84,92,99,.1);
    border-radius: 12px;
    display: inline-block;
    margin-right: 8px;
    font-size: 12px;
    color: #545c63;
    line-height: 16px;
}
.author-info {
    font-size: 12px;
    color: #93999f;
    line-height: 24px;
}
.author-info a {
    font-size: 12px;
    color: #93999f;
    line-height: 24px;
}
.author-info span {
    margin-left: 8px;
}
.ques-intro-box .detail-user-tips {
    margin-top: 12px;
    overflow: hidden;
}
.ques-intro-box .hide-articel-box {
    display: block;
    text-align: center;
    font-size: 16px;
    color: #1fad4e;
    line-height: 24px;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-top: 72px;
    background-image: linear-gradient(-180deg,rgba(255,255,255,0) 0,#fff 70%);
    cursor: pointer;
}
.hide-articel-box.active{
    display: none;
}
.detail-info .info-footer .share-wrap .weichat-style a, .detail-info .info-footer .share-wrap a {
    font-size: 20px;
    color: rgba(28,31,33,.2);
    line-height: 24px;
    margin-right: 16px;
}
.ques-intro-box article {
    position: relative;
    margin-top: 16px;
}
.ques-intro-box .detail-content {
    font-size: 16px;
    color: #545c63;
    line-height: 36Px;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
    height: 108px;
}
.ques-intro-box .detail-content.active{
    height: auto;
}
.ques-list {
    margin-top: 24px;
}
.ques-list .answer-allnum {
    display: block;
    font-size: 16px;
    color: #07111b;
    line-height: 24px;
    font-weight: 700;
}
.ques-list .answer-list-box {
    position: relative;
    padding: 28px 32px;
    margin-top: 16px;
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(28,31,33,.1);
    border-radius: 12px;
}
.ques-list .answer-item .user-pic {
    display: inline-block;
    width: 48px;
    height: 48px;
}
.ques-list .answer-item .user-pic img {
    border-radius: 50%;
    width: inherit;
    height: inherit;
}
.ques-list .answer-item .answer-box {
    width: 654px;
    word-wrap: break-word;
    word-break: break-all;
    float: right;
}
.ques-list .answer-item .answer-content {
    width: 100%;
    position: relative;
    overflow: hidden;
}
.ques-list .answer-item {
    margin-top: 32px;
    padding-bottom: 32px;
    border-bottom: 1px solid rgba(56,61,66,.1);
    overflow: hidden;
}
.ques-list .answer-item .answer-content .nickname {
    font-size: 14px;
    color: #07111b;
    line-height: 24px;
    margin-bottom: 8px;
    font-weight: 700;
}
.detail-info ul.number li span {
    font-size: 12px;
    font-weight: 200;
}
.ques-list .answer-item .answer-desc {
    font-size: 16px;
    color: #1c1f21;
    line-height: 28px;
    overflow: hidden;
    transition: height .5s linear;
}
.js-agree-with {
    margin-right: 4px;
}
.moco-btn-gray-l {
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    transition: all .3s;
    color: #545c63;
    background-color: rgba(84,92,99,0.1);
    opacity: 1;
    border-color: transparent;
}
.moco-ico-btn {
    position: relative;
    display: inline-block;
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
    padding: 7px 16px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 18px;
}
.reply-del {
    color: #9199a1;
    margin-left: 24px;
}
.reply-del:hover{
    color: #000 !important;
}
.ques-list .answer-item .ctrl-bar {
    margin-top: 16px;
    font-size: 12px;
    color: #9199a1;
    line-height: 36px;
}
.ques-list .answer-item:last-child {
    padding-bottom: 0;
    border-bottom: 0;
}
.moco-btn-gray-l i {
    color: #545c63;
}
.moco-ico-btn i {
    font-size: 16px;
}
.moco-ico-btn i {
    position: relative;
    top: 2px;
    margin-right: 4px;
}
[class*=" icon-"], [class^=icon-] {
    font-family: icomoon!important;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
// 详细评价
.ques-list .reply-con {
    margin-top: 28px;
}
.ques-list .reply-con .reply-list li {
    margin-bottom: 24px;
}
.ques-list .reply-con .reply-item {
    width: 590px;
    word-wrap: break-word;
    word-break: break-all;
    float: right;
}
.ques-list .reply-con .reply-item .from-user, .ques-list .reply-con .reply-item .to-user {
    font-size: 14px;
    color: #1c1f21;
    line-height: 24px;
    font-weight: 700;
}
.ques-list .reply-con .reply-item .reply-content {
    font-size: 14px;
    color: #1c1f21;
    line-height: 22px;
    margin-top: 4px;
}
.ques-list .reply-con .reply-item .reply-footer {
    margin-top: 12px;
    font-size: 12px;
    color: #9199a1;
    line-height: 18px;
}
.ques-list .reply-con .reply-item .reply-footer .reply-del {
    color: #9199a1;
    margin-right: 24px;
    margin-left: 0px;
}
.ques-list .reply-con .reply-more-btn {
    display: block;
}
// 右边
.right-block {
    width: 280px;
    float: right;
}
.detail-info {
    padding: 24px;
    background: rgba(28,31,33,.04);
    border-radius: 8px;
}
.detail-info ul.number {
    overflow: hidden;
    margin-bottom: 24px;
}
.detail-info ul.number li {
    float: left;
    width: 76px;
    text-align: center;
    margin-right: 1px;
}
.detail-info ul.number li em {
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    margin-bottom: 4px;
}
.detail-info ul.number li em, .detail-info ul.number li span {
    display: block;
    color: #1c1f21;
}
.detail-info .js-answer-btn, .detail-info .js-collection-btn {
    display: block;
    margin-bottom: 12px;
}
.moco-btn.moco-btn-green {
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    color: #fff;
    background-color: #1fad4e;
    border-color: #1fad4e;
}
.moco-btn {
    position: relative;
    display: inline-block;
    margin-bottom: 0;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    text-decoration: none;
    box-sizing: border-box;
    background-image: none;
    border-radius: 0;
    -webkit-appearance: none;
    white-space: nowrap;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    -weibkit-transition: all .3s;
    -moz-transition: all .3s;
    transition: all .3s;
    color: #545c63;
    background-color: transparent;
    border-color: #9199a1;
    opacity: 1;
    padding: 7px 16px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 18px;
}
.moco-btn-green:hover{
    background-color: #16813a;
}
.moco-btn-gray-l:hover{
    background-color: #d1d3d7;
}
.moco-btn-gray-l.active,
.moco-btn-gray-l i.active{
   background: #1fad4e;
   color: #fff;
}
.detail-info .info-footer {
    overflow: hidden;
    width: inherit;
    margin-top: 4px;
}
.moco-btn-gray-l {
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    transition: all .3s;
    background-color: rgba(84,92,99,0.1);
    opacity: 1;
    border-color: transparent;
}
.aboutque-box {
    margin-top: 24px;
}
.aboutque-box h2 {
    font-size: 16px;
    color: #07111b;
    line-height: 24px;
    font-weight: 700;
}
.aboutque-box .ques-item {
    margin-top: 16px;
}
.aboutque-box .ques-item .mkhotlist:first-child {
    margin-top: 0;
}
.aboutque-box .ques-item .mkhotlist {
    line-height: 22px;
    margin-top: 12px;
}
.aboutque-box .ques-item .mkhotlist .relwenda {
    padding-bottom: 12px;
    font-size: 14px;
    display: block;
    width: 254px;
    white-space: pre-wrap;
    word-break: break-all;
    overflow: hidden;
    border-bottom: 1px solid rgba(28,31,33,.1);
}
a:link, a:visited {
    color: #1c1f21;
}
.relwenda:hover{
    color: #1fad4e;
}
.detail-info .info-footer .status-box a {
    font-size: 12px;
    color: rgba(28,31,33,.4);
    line-height: 26px;
    margin-left: 16px;
}
// 标题滚动到顶部固定显示
.scrollHeader {
    position: fixed;
    display: none;
    top: 0;
    width: 100%;
    height: 60px;
    background: #fff;
    box-shadow: 0 8px 16px 0 rgba(28,31,33,.1);
    z-index: 900;
    overflow: hidden;
}
.scrollHeader.item{
    display: block;
}
.scrollHeader .detailscroll-nav {
    width: 1088px;
    margin: 0 auto;
}
.scrollHeader .detailscroll-nav h1 {
    width: 784px;
    font-size: 20px;
    color: #07111b;
    font-weight: 700;
    float: left;
    overflow: hidden;
}
.scrollHeader .detailscroll-nav .scroll-answerbtn {
    margin-top: 12px;
}
.moco-btn-green:link, .moco-btn-green:visited {
    color: #fff;
}
.moco-btn-gray-l:link, .moco-btn-gray-l:visited {
    color: #545c63;
}
// 弹出框
.answer-pop{
    display: none;
    width: 704px;
    background: #fff;
    box-shadow: 0 8px 16px 0 rgba(7,17,27,.2);
    border-radius: 12px;
    padding: 24px 32px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -320px;
    z-index: 901;
}
.answer-pop.reply,
.answer-pop .reply{
    display: block;
}
.answer-pop .title-replay {
    float: left;
    font-weight: 800;
    font-size: 16px;
    color: #1c1f21;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 24px;
}
.answer-pop h3 span{
    float: right;
    font-size: 24px;
    color: #9199a1;
    font-weight: 200;
    cursor: pointer;
}
.js-reply-pop textarea {
    display: none;
    resize: none;
    width: 622px;
    padding: 8px;
    border-radius: 8px;
    min-height: 200px;
    border: 1px solid #9199a1;
}

.editoropen{
    display: none;
    margin-top: 68px;
}
.answer-pop .qa-ci-footer {
    position: relative;
    height: 40px;
    margin-top: 24px;
}
.qa-tips {
    color: red;
    font-size: 12px;
}
.answer-pop .qa-ci-footer .qa-ci-footright {
    position: absolute;
    right: 0;
    top: 0;
}
.answer-pop .qa-ci-footer .captcha-verify-box {
    position: absolute;
    padding: 6px;
    width: 320px;
    right: -132px;
    bottom: 50px;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #d0d6d9;
    z-index: 1000;
}
.js-answer-shade-pop {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(7,17,27,.6);
    z-index: 900;
}
</style>
<style lang="scss">
.w-e-toolbar .w-e-menu{
    padding: 5px 8px;
}
</style>


<script>
import '../assets/js/top.js'
import E from 'wangeditor'
export default {
    name: 'editor',
    data(){
        return{
            flag:false,//赞成
            flags:false,//反对
            display:false,//查看详细信息按钮
            msg:'反对',
            searchBarFixed:false,//顶部导航栏
            replyshow:false,//弹出框显示
            follow:'关注',//关注按钮
            myreply:false,
            replyAnswer:'',//弹出框标题的显示
            textarea:false,
            tipsubmit:''
        }
    },
    methods:{
        // 赞成按钮
        checkSite(){
            this.flag = !this.flag
            this.flags=false
            this.msg='反对'
        },
        // 反对按钮
        oppose(){
            this.flags=true
            this.flag=false
            this.msg='已反对'
        },
        //查看详细信息按钮
        showAll(){
            this.display=true
        },
        //顶部导航栏
        handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        let offsetTop = document.querySelector('#scrollHeader').offsetTop
        scrollTop > offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false
        },
        //弹出框显示
        reply(){
            this.replyshow=this.textarea=true
            this.replyAnswer=this.tipsubmit="回复"
            this.myreply=false
        },
        //弹出框隐藏
        replyhidden(){
           if(this.replyshow==true){
               this.replyshow=false
               $(".answerbox").val("")
               $(".qa-tips").html("")
           }
        },
        //点击回复按钮
        replytip(){
           let tipnumber=$(".answerbox").val()
           let textnumber=$(".w-e-text p").html()
           if(tipnumber.length<3 && textnumber.length<3){
               $(".qa-tips").html("字数不够，最少3个字")
           }else{
               this.replyshow=false
               $(".answerbox").val("")
               $(".qa-tips").html("")
           }
        },
        detailFollow(){
            if(this.follow=='关注'){
                this.follow="已关注"
            }else{
                this.follow='关注'
            }
        },
        //我要回答按钮
        myanswer(){
          this.textarea=false
          this.replyshow=this.myreply=true
          this.replyAnswer="添加回答"
          this.tipsubmit="回答"
        }
    }, 
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
      var editor = new E('#editor')
      editor.customConfig.showLinkImg = false
      editor.customConfig.uploadImgServer = '/upload'
      editor.create()
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>
