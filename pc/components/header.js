export default function herader() {
    return `
    <div class="head">
    <!-- 头部导航 -->
    <div class="head-nav">
        <div class="main head-list">
            <ul>
                <li>请<a href='/GuoTai/pc/page/login/login.html'>登录</a>或者<a href='/GuoTai/pc/page/login/regist.html'>免费注册</a></li>
                <li>
                    <el-dropdown>
                        <span class="el-dropdown-link">
                        <i class="el-icon-user-solid"></i>
                        <a href="/GuoTai/pc/page/user/order-supervise.html">我的账户</a>
                        <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item><a href='/GuoTai/pc/page/user/order-supervise.html'>订单管理</a></el-dropdown-item>
                            <el-dropdown-item><a href='/GuoTai/pc/page/user/my-collection.html'>我的收藏</a></el-dropdown-item>
                            <el-dropdown-item><a href='/GuoTai/pc/page/user/voucher.html'>我的优惠券</a></el-dropdown-item>
                            <el-dropdown-item><a href='/GuoTai/pc/page/user/online-self-service.html'>在线自助服务</a></el-dropdown-item>
                            <el-dropdown-item><a href='/GuoTai/pc/page/user/my-account.html'>账户管理</a></el-dropdown-item>
                            <el-dropdown-item><a href='/GuoTai/pc/page/user/help.html'>帮助中心</a></el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li><a href='/GuoTai/pc/index.html'>官网首页</a></li>
                <li><a href='javascript:alert("请使用Ctrl+D,收藏我们")'>收藏我们</a></li>
            </ul>
        </div>
    </div>

    <!-- logo -->
    <div class="main head-lg">
        <a href="/GuoTai/pc/index.html" class="head-logo"></a>
        <div class="head-serach">
            <input placeholder="全站搜索" />
            <i class="el-icon-search"></i>
        </div>
    </div>

    <!-- menu -->
    <div class="head-menu">
        <div class="main head-menulist">
            <p><a href="/GuoTai/pc/index.html">首页</a></p>
            <p><a href="/GuoTai/pc/page/mall/self-service.html" :class="${isMenuActive() == 1} ? 'active': ''">商城</a></p>
            <p><a href="/GuoTai/pc/page/product-center/parise-product.html" :class="${isMenuActive() == 3} ? 'active': ''">产品中心</a></p>
            <p><a href="/GuoTai/pc/page/login/login.html">会员中心</a></p>
            <p><a href="/GuoTai/pc/page/service-information/insurance-policy-services.html" :class="${isMenuActive() == 5} ? 'active': ''">服务指南</a></p>
            <p><a href="/GuoTai/pc/page/activity-net/activity-net.html" :class="${isMenuActive() == 6} ? 'active': ''">活动网</a></p>
            <p><a href="/GuoTai/pc/page/self-service/policy-query.html" :class="${isMenuActive() == 7} ? 'active': ''">自助服务</a></p>
            <p><a href="/GuoTai/pc/page/about/about-us.html" :class="${isMenuActive() == 8} ? 'active': ''">关于国泰</a></p>
            <p><a href="/GuoTai/pc/page/institute-insurance/insurance-knowledge.html" :class="${isMenuActive() == 9} ? 'active': ''">保险学院</a></p>

            <!-- 二级菜单 -->
            <div class="menu-nav-list" :style="{display: ${isShowMenu()}?'block':'none'}">
                <ul>
                    <li>
                        <div class="menu-nav-box">
                            <a href="/GuoTai/pc/page/mall/comprehensive-accident.html" class="menu-link1">综合意外险</a>
                            <a href="/GuoTai/pc/page/mall/comprehensive-accident.html" class="menu-link2">意外保(基础)</a>
                        </div>
                        <p class="el-icon-arrow-right menu-icon"></p>
                    </li>
                    <li>
                        <div class="menu-nav-box menu-bg2">
                            <a href="/GuoTai/pc/page/mall/investment-financing.html" class="menu-link1">投资理财险</a>
                            <a href="/GuoTai/pc/page/mall/investment-financing.html" class="menu-link2">财富经典C款</a>
                        </div>
                        <p class="el-icon-arrow-right menu-icon"></p>
                    </li>
                    <li>
                        <div class="menu-nav-box menu-bg3">
                            <a href="/GuoTai/pc/page/mall/travel-safety.html" class="menu-link1">旅行平安险</a>
                            <a href="/GuoTai/pc/page/mall/travel-safety.html" class="menu-link2">旅行宝(境内)</a>
                        </div>
                        <p class="el-icon-arrow-right menu-icon"></p>
                    </li>
                    <li>
                        <div class="menu-nav-box menu-bg4">
                            <a href="/GuoTai/pc/page/mall/traffic-accident.html" class="menu-link1">交通意外险</a>
                            <a href="/GuoTai/pc/page/mall/traffic-accident.html" class="menu-link2">交通宝(商务)</a>
                        </div>
                        <p class="el-icon-arrow-right menu-icon"></p>
                    </li>
                </ul>
                <div class="menu-all"><a href="/GuoTai/pc/page/other/website-map.html">所有分类</a></div>
            </div>
        </div>
    </div>
</div>
    `
}

export function isShowMenu() {
    let isShow = 0
    let str = location.href.substring(location.href.indexOf('pc') + 3, 999)
    if (location.href.indexOf('index') != -1 || str == '') {
        isShow = 1
    }
    return isShow
}

export function isMenuActive() {
    let isShow = 0
    let str = location.href.substring(location.href.indexOf('pc') + 3, 999)
    if (location.href.indexOf('index') != -1 || str == '' || location.href.indexOf('mall') != -1 ) {
        isShow = 1
    }else if(location.href.indexOf('product-center') != -1){
        isShow = 3
    }
    else if(location.href.indexOf('service-information') != -1){
        isShow = 5
    }
    else if(location.href.indexOf('activity-net') != -1){
        isShow = 6
    }
    else if(location.href.indexOf('self-service') != -1){
        isShow = 7
    }
    else if(location.href.indexOf('about') != -1){
        isShow = 8
    }
    else if(location.href.indexOf('institute-insurance') != -1){
        isShow = 9
    }
    return isShow
}