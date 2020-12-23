<template>
    <footer class='footer'>
		<div class='container'>
			<div class='row model1'>
				<div class='col-lg-2 model1Logo'>
					<a href="#">
						<img style="width:1rem;height:.35rem;margin-bottom:.1rem;" src="./../../assets/images/b-logo.png" alt="logo">
					</a>
				</div>
				<div class='col-lg-10'>
					<div class='modelRight'>
						<!-- 1、地点 -->
						<ul class='place'>
							<li class='title'>地址</li>
							<li>
								<span>上海市徐汇区田林路388号</span>
							</li>
						</ul>
						<!-- 2、联系我们 -->
						<ul class='contact'>
							<li class='title'>联系我们</li>
							<li><a href="mailto:fanjianwen@taoletec.cn" target="_blank">fanjianwen@taoletec.cn</a></li>
						</ul>
			
					</div>

				</div>
			</div>
			<div class='row model2'>
				<div class='col-lg-2 offset-lg-2 model2Left'>
					<span>语言</span>
					<span><a href="#">中文</a></span>
                </div>
                <div style="width:100%;text-align: center;font-size:12px;color:#fff;line-height:30px;">Copyright © 2017.BaoNiGe 宝妮格 All Rights Reserved</div>
			</div>
		</div>
        
    </footer>
</template>
<style lang="less" scoped>
  .footer {
    padding: 0.2rem 0.2rem 10px 0.2rem;
    background: #383736;
  }
  .footer .model1 .modelRight {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
  }
  .footer .model1 .modelRight ul {
    width: 100%;
  }
  .footer .model1 .modelRight ul li {
    padding: 6px 0;
    color: #fff;
    font-size: 12px;
  }
  .footer .model1 .modelRight ul li a {
    color: #fff;
    font-size: 12px;
  }
  .footer .model1 .modelRight ul li a:hover {
    color: #fff;
    text-decoration: underline;
  }
  .footer .model1 .modelRight ul li.title {
    padding: 0 0 10px 0;
    color: #A9A9A8;
    font-size: 12px;
    border-bottom: 1px solid #464342;
  }
  .footer .model1 .modelRight ul.place li span:nth-child(2) {
    color: #A9A9A8;
  }
  .footer .model1 .modelRight ul.social li:not(.title) {
    padding: 0 6px;
    display: inline-block;
  }
  .footer .model1 .modelRight ul.social li:not(.title) a span {
    font-size: 20px;
  }
  .footer .model2 {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #464342;
  }
  .footer .model2 .model2Left span,
  .footer .model2 .model2Right span,
  .footer .model2 .model2Left a,
  .footer .model2 .model2Right a,
  .footer .model2 .model2Left p,
  .footer .model2 .model2Right p {
    color: #fff;
    font-size: 12px;
  }
  .footer .model2 .model2Left span,
  .footer .model2 .model2Right span {
    color: #A9A9A8;
  }

</style>