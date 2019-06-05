export default function nav() {
    return `
        <div class="nav">
            <ul>
                <li :class="${href()} == 1?'active':''">
                    <a href="/GuoTai/mobile/index.html">
                        <span class="mui-icon mui-icon-home"></span>
                        <span>首页</span>
                    </a>
                </li>
                <li :class="${href()} == 2?'active':''">
                    <a href="/GuoTai/mobile/product.html">
                        <span class="mui-icon mui-icon-gear"></span>
                        <span>产品</span>
                    </a>
                </li>
                <li :class="${href()} == 3?'active':''">
                    <a href="/GuoTai/mobile/konwledga.html">
                        <span class="mui-icon mui-icon-pengyouquan"></span>
                        <span>学院</span>
                    </a>
                </li>
                <li :class="${href()} == 4?'active':''">
                    <a href="/GuoTai/mobile/home.html">
                        <span class="mui-icon mui-icon-contact"></span>
                        <span>我的</span>
                    </a>
                </li>
            </ul>
        </div>
    `
}

export function href() {
    let n;
    let str = location.href.substring(location.href.indexOf('mobile') + 7, 999)
    if (location.href.indexOf('index')!=-1 || str == '') {
        n = 1
    }
    else if (location.href.indexOf('product')!=-1) { 
        n = 2
    }
    else if (location.href.indexOf('konwledga')!=-1) {
        n = 3
    }
    else if (location.href.indexOf('home')!=-1) { 
        n = 4
    }
    return n
}