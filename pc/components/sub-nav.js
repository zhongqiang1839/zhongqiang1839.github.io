// about
export function aboutNav() {
    return `
        <div class="sub-nav">
        <el-row class="tac">
            <h5 class="gt-public-title">关于国泰</h5>
            <el-col>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#eeeeee"
                text-color="#333"
                active-text-color="#00984b">
                    <el-menu-item index='1'>
                        <a href="/GuoTai/pc/page/about/about-us.html"><span slot="title">公司介绍</span></a>
                    </el-menu-item>
                    <el-menu-item index='2'>
                        <a href="/GuoTai/pc/page/about/news.html"><span slot="title">新闻中心</span></a>
                    </el-menu-item>
                    <el-menu-item index='3'>
                        <a href="/GuoTai/pc/page/about/corporate-culture.html"><span slot="title">企业文化</span></a>
                    </el-menu-item>
                    <el-menu-item index='4'>
                        <a href="/GuoTai/pc/page/about/Corporate-honor.html"><span slot="title">企业荣誉</span></a>
                    </el-menu-item>
                    <el-menu-item index='5'>
                        <a href="/GuoTai/pc/page/about/breaking-news.html"><span slot="title">大事件</span></a>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
    `
}

// 服务指南
export function serviceInformationNav() {
    return `
        <div class="sub-nav">
        <el-row class="tac">
            <h5 class="gt-public-title">服务指南</h5>
            <el-col>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#eeeeee"
                text-color="#333"
                active-text-color="#00984b">
                    <el-submenu index="1">
                        <template slot="title">
                            <span>保单服务介绍</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><a href="/GuoTai/pc/page/service-information/introducing-cross-strait-services.html">缴费服务</a></el-menu-item>
                            <el-menu-item index="1-2"><a href="/GuoTai/pc/page/service-information/introducing-cross-strait-services.html">合同内容变更服务</a></el-menu-item>
                            <el-menu-item index="1-3"><a href="/GuoTai/pc/page/service-information/introducing-cross-strait-services.html">理赔服务</a></el-menu-item>
                            <el-menu-item index="1-4"><a href="/GuoTai/pc/page/service-information/introducing-cross-strait-services.html">红利年金给付服务</a></el-menu-item>
                            <el-menu-item index="1-5"><a href="/GuoTai/pc/page/service-information/introducing-cross-strait-services.html">保单借款服务</a></el-menu-item>
                            <el-menu-item index="1-6"><a href="/GuoTai/pc/page/service-information/introducing-cross-strait-services.html">电子化服务</a></el-menu-item>
                            <el-menu-item index="1-7"><a href="/GuoTai/pc/page/service-information/introducing-cross-strait-services.html">公告利率</a></el-menu-item>
                            <el-menu-item index="1-8"><a href="/GuoTai/pc/page/service-information/introducing-cross-strait-services.html">申请书下载</a></el-menu-item>
                        </el-menu-item-group>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index='2'>
                        <a href="/GuoTai/pc/page/service-information/added-service.html"><span slot="title">增值服务</span></a>
                    </el-menu-item>
                    <el-menu-item index='3'>
                        <a href="/GuoTai/pc/page/service-information/service-dot.html"><span slot="title">服务网点</span></a>
                    </el-menu-item>
                    <el-menu-item index='4'>
                        <a href="/GuoTai/pc/page/service-information/self-query.html"><span slot="title">自助查询</span></a>
                    </el-menu-item>
                    <el-menu-item index='5'>
                        <a href="/GuoTai/pc/page/other/feedback.html"><span slot="title">在线留言</span></a>
                    </el-menu-item>
                    <el-menu-item index='6'>
                        <a href="/GuoTai/pc/page/service-information/vip-club.html"><span slot="title">Vip俱乐部</span></a>
                    </el-menu-item>
                    <el-menu-item index='7'>
                        <a href="/GuoTai/pc/page/service-information/enterprise-services.html"><span slot="title">关联企业服务</span></a>
                    </el-menu-item>
                    <el-menu-item index='8'>
                        <a href="/GuoTai/pc/page/service-information/service-hotline-navigation.html"><span slot="title">服务热线导航</span></a>
                    </el-menu-item>
                    <el-submenu index="9">
                        <template slot="title">
                            <span>两岸服务区</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><a href="/GuoTai/pc/page/service-information/introducing-cross-strait-services.html">介绍两岸服务</a></el-menu-item>
                            <el-menu-item index="1-2"><a href="/GuoTai/pc/page/service-information/introducing-cross-strait-services.html">两岸网点</a></el-menu-item>
                            <el-menu-item index="1-3"><a href="/GuoTai/pc/page/service-information/introducing-cross-strait-services.html">服务流程</a></el-menu-item>
                            <el-menu-item index="1-4"><a href="/GuoTai/pc/page/service-information/introducing-cross-strait-services.html">服务内容</a></el-menu-item>
                            <el-menu-item index="1-5"><a href="/GuoTai/pc/page/service-information/introducing-cross-strait-services.html">相关表单下载</a></el-menu-item>
                            <el-menu-item index="1-6"><a href="/GuoTai/pc/page/service-information/introducing-cross-strait-services.html">线上服务介绍</a></el-menu-item>
                            <el-menu-item index="1-7"><a href="/GuoTai/pc/page/service-information/introducing-cross-strait-services.html">集团专属利益</a></el-menu-item>
                            <el-menu-item index="1-8"><a href="/GuoTai/pc/page/service-information/introducing-cross-strait-services.html">两岸文书认证注意事项</a></el-menu-item>
                            <el-menu-item index="1-9"><a href="/GuoTai/pc/page/service-information/introducing-cross-strait-services.html">台湾健保</a></el-menu-item>
                        </el-menu-item-group>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
    `
}

// 自助服务
export function selfServiceNav() {
    return `
        <div class="sub-nav">
        <el-row class="tac">
            <h5 class="gt-public-title">自助服务</h5>
            <el-col>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#eeeeee"
                text-color="#333"
                active-text-color="#00984b">
                    <el-menu-item index='1'>
                        <a href="/GuoTai/pc/page/self-service/policy-query.html"><span slot="title">保单查询</span></a>
                    </el-menu-item>
                    <el-menu-item index='2'>
                        <a href="/GuoTai/pc/page/self-service/policy-verification.html"><span slot="title">保单验真</span></a>
                    </el-menu-item>  
                    <el-menu-item index='3'>
                        <a href="/GuoTai/pc/page/self-service/electronic-policy-download.html"><span slot="title">电子保单下载</span></a>
                    </el-menu-item>
                    <el-menu-item index='4'>
                        <a href="/GuoTai/pc/page/self-service/disability-assessment.html"><span slot="title">伤残评定标准</span></a>
                    </el-menu-item>  
                    <el-menu-item index='5'>
                        <a href="/GuoTai/pc/page/self-service/insurance-card-activation.html"><span slot="title">自助保险卡激活</span></a>
                    </el-menu-item>
                    <el-menu-item index='6'>
                        <a href="/GuoTai/pc/page/service-information/enterprise-services.html"><span slot="title">企业服务</span></a>
                    </el-menu-item>            
                </el-menu>
            </el-col>
        </el-row>
    </div>
    `
}

// activity-net
export function activitynetNav() {
    return `
        <div class="sub-nav">
        <el-row class="tac">
            <h5 class="gt-public-title">活动网</h5>
            <el-col>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#eeeeee"
                text-color="#333"
                active-text-color="#00984b">
                    <el-menu-item index='1'>
                        <a href="/GuoTai/pc/page/activity-net/activity-net.html"><span slot="title">活动网</span></a>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
    `
}

// mall
export function mall() {
    return `
        <div class="sub-nav">
        <el-row class="tac">
            <h5 class="gt-public-title">商城</h5>
            <el-col>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#eeeeee"
                text-color="#333"
                active-text-color="#00984b">
                    <el-menu-item index='1'>
                        <a href="/GuoTai/pc/page/mall/self-service.html"><span slot="title">自助服务</span></a>
                    </el-menu-item>
                    <el-menu-item index='2'>
                        <a href="/GuoTai/pc/page/mall/enterprise-cooperation.html"><span slot="title">企业合作</span></a>
                    </el-menu-item>
                    <el-submenu index="3">
                        <template slot="title">
                            <span>服务指南</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><a href="/GuoTai/pc/page/mall/operation-process.html">操作流程</a></el-menu-item>
                            <el-menu-item index="1-2"><a href="/GuoTai/pc/page/mall/common-problem.html">常见问题</a></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <span>会员俱乐部</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><a href="/GuoTai/pc/page/mall/club-home.html">会员俱乐部首页</a></el-menu-item>
                            <el-menu-item index="1-2"><a href="/GuoTai/pc/page/mall/integral-paradise.html">积分乐园</a></el-menu-item>
                            <el-menu-item index="1-2"><a href="/GuoTai/pc/page/mall/market-activity.html">市场活动</a></el-menu-item>
                            <el-menu-item index="1-2"><a href="/GuoTai/pc/page/mall/integration-plan.html">积分计划</a></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index='5'>
                        <a href="/GuoTai/pc/page/mall/comprehensive-accident.html"><span slot="title">综合意外</span></a>
                    </el-menu-item>
                    <el-menu-item index='6'>
                        <a href="/GuoTai/pc/page/mall/investment-financing.html"><span slot="title">投资理财</span></a>
                    </el-menu-item>
                    <el-menu-item index='7'>
                        <a href="/GuoTai/pc/page/mall/travel-safety.html"><span slot="title">旅行平安</span></a>
                    </el-menu-item>
                    <el-menu-item index='8'>
                        <a href="/GuoTai/pc/page/mall/traffic-accident.html"><span slot="title">交通意外</span></a>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
    `
}

// product
export function product() {
    return `
        <div class="sub-nav">
        <el-row class="tac">
            <h5 class="gt-public-title">产品中心</h5>
            <el-col>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#eeeeee"
                text-color="#333"
                active-text-color="#00984b">
                    <el-submenu index="1">
                        <template slot="title">
                            <span><a href="/GuoTai/pc/page/product-center/parise-product.html">个人产品</a></span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><a href="/GuoTai/pc/page/product-center/basic-guarantee.html">基本保障</a></el-menu-item>
                            <el-menu-item index="1-2"><a href="/GuoTai/pc/page/product-center/basic-guarantee.html">健康医疗</a></el-menu-item>
                            <el-menu-item index="1-3"><a href="/GuoTai/pc/page/product-center/basic-guarantee.html">分红保险</a></el-menu-item>
                            <el-menu-item index="1-4"><a href="/GuoTai/pc/page/product-center/basic-guarantee.html">资产配置</a></el-menu-item>
                            <el-menu-item index="1-5"><a href="/GuoTai/pc/page/product-center/basic-guarantee.html">意外与旅行</a></el-menu-item>
                            <el-menu-item index="1-6"><a href="/GuoTai/pc/page/product-center/basic-guarantee.html">少儿学生</a></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <span><a href="/GuoTai/pc/page/product-center/parise-product.html">团体产品</a></span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><a href="/GuoTai/pc/page/product-center/basic-guarantee.html">组合计划</a></el-menu-item>
                            <el-menu-item index="1-2"><a href="/GuoTai/pc/page/product-center/basic-guarantee.html">灵活计划</a></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <span><a href="/GuoTai/pc/page/product-center/parise-product.html">经代产品</a></span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1"><a href="/GuoTai/pc/page/product-center/basic-guarantee.html">基本保障</a></el-menu-item>
                            <el-menu-item index="1-2"><a href="/GuoTai/pc/page/product-center/basic-guarantee.html">健康医疗</a></el-menu-item>
                            <el-menu-item index="1-3"><a href="/GuoTai/pc/page/product-center/basic-guarantee.html">分红保险</a></el-menu-item>
                            <el-menu-item index="1-4"><a href="/GuoTai/pc/page/product-center/basic-guarantee.html">资产配置</a></el-menu-item>
                            <el-menu-item index="1-5"><a href="/GuoTai/pc/page/product-center/basic-guarantee.html">意外与旅行</a></el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
    `
}

// institute
export function institute() {
    return `
        <div class="sub-nav">
        <el-row class="tac">
            <h5 class="gt-public-title">保险学院</h5>
            <el-col>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#eeeeee"
                text-color="#333"
                active-text-color="#00984b">
                    <el-menu-item index='1'>
                        <a href="/Guotai/pc/page/institute-insurance/insurance-knowledge.html"><span slot="title">保险常识</span></a>
                    </el-menu-item>
                    <el-menu-item index='2'>
                        <a href="/Guotai/pc/page/institute-insurance/guarantee-insurance.html"><span slot="title">保障险</span></a>
                    </el-menu-item>
                    <el-menu-item index='3'>
                        <a href="/Guotai/pc/page/institute-insurance/savings-annuity.html"><span slot="title">储蓄年金险</span></a>
                    </el-menu-item>
                    <el-menu-item index='4'>
                        <a href="/Guotai/pc/page/institute-insurance/medical-insurance.html"><span slot="title">医疗险</span></a>
                    </el-menu-item>
                    <el-menu-item index='5'>
                        <a href="/Guotai/pc/page/institute-insurance/accident-insurance.html"><span slot="title">意外险</span></a>
                    </el-menu-item>
                    <el-menu-item index='6'>
                        <a href="/Guotai/pc/page/institute-insurance/universal-insurance.html"><span slot="title">万能险</span></a>
                    </el-menu-item>
                    <el-menu-item index='7'>
                        <a href="/Guotai/pc/page/institute-insurance/Classroom.html"><span slot="title">反洗钱小课堂</span></a>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
    `
}

// other
export function other() {
    return `
        <div class="sub-nav">
        <el-row class="tac">
            <h5 class="gt-public-title">国泰专程为你服务</h5>
            <el-col>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#eeeeee"
                text-color="#333"
                active-text-color="#00984b">
                    <el-menu-item index='1'>
                        <a href="/GuoTai/pc/page/other/contact-us.html"><span slot="title">联系我们</span></a>
                    </el-menu-item>
                    <el-menu-item index='2'>
                        <a href="/GuoTai/pc/page/other/website-map.html"><span slot="title">网站地图</span></a>
                    </el-menu-item>
                    <el-menu-item index='3'>
                        <a href="/GuoTai/pc/page/other/feedback.html"><span slot="title">在线留言</span></a>
                    </el-menu-item>
                    <el-menu-item index='4'>
                        <a href="/GuoTai/pc/page/other/friendship-link.html"><span slot="title">友情链接</span></a>
                    </el-menu-item>
                    <el-menu-item index='5'>
                        <a href="/GuoTai/pc/page/other/employee-entry.html"><span slot="title">我司人员</span></a>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
    `
}

// user
export function user() {
    return `
        <div class="sub-nav">
        <el-row class="tac">
            <h5 class="gt-public-title">我的账户</h5>
            <el-col>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#eeeeee"
                text-color="#333"
                active-text-color="#00984b">
                    <el-menu-item index='1'>
                        <a href="/GuoTai/pc/page/user/order-supervise.html"><span slot="title">订单管理</span></a>
                    </el-menu-item>
                    <el-menu-item index='2'>
                        <a href="/GuoTai/pc/page/user/my-collection.html"><span slot="title">我的收藏</span></a>
                    </el-menu-item>
                    <el-menu-item index='3'>
                        <a href="/GuoTai/pc/page/user/voucher.html"><span slot="title">我的优惠券</span></a>
                    </el-menu-item>
                    <el-menu-item index='4'>
                        <a href="/GuoTai/pc/page/user/online-self-service.html"><span slot="title">在线自助服务</span></a>
                    </el-menu-item>
                    <el-menu-item index='5'>
                        <a href="/GuoTai/pc/page/user/my-account.html"><span slot="title">账户管理</span></a>
                    </el-menu-item>
                    <el-menu-item index='6'>
                        <a href="/GuoTai/pc/page/user/help.html"><span slot="title">帮助中心</span></a>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
    `
}