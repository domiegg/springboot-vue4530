
var projectName = '基于vue的地方美食分享网站';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的发布',
	url: '../forum/list-my.html'
},

{
        name: '我的收藏',
        url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '外国美食',
	url: './pages/waiguomeishi/list.html'
}, 
{
	name: '中式美食',
	url: './pages/zhongshimeishi/list.html'
}, 
{
	name: '热门菜品',
	url: './pages/remencaipin/list.html'
}, 

{
	name: '论坛',
	url: './pages/forum/list.html'
}, 
{
	name: '新闻资讯',
	url: './pages/news/list.html'
},
{
	name: '留言板',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/springbooth10zf/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["新增","查看","修改","删除","审核","查看评论"],"menu":"外国美食","menuJump":"列表","tableName":"waiguomeishi"}],"menu":"外国美食管理"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["新增","查看","修改","删除","审核","查看评论"],"menu":"中式美食","menuJump":"列表","tableName":"zhongshimeishi"}],"menu":"中式美食管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["新增","查看","修改","删除","查看评论"],"menu":"热门菜品","menuJump":"列表","tableName":"remencaipin"}],"menu":"热门菜品管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"appFrontIcon":"cuIcon-favor","buttons":["新增","查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-form","buttons":["新增","查看","修改","删除"],"menu":"新闻资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","查看评论"],"menu":"外国美食列表","menuJump":"列表","tableName":"waiguomeishi"}],"menu":"外国美食模块"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","查看评论"],"menu":"中式美食列表","menuJump":"列表","tableName":"zhongshimeishi"}],"menu":"中式美食模块"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","查看评论"],"menu":"热门菜品列表","menuJump":"列表","tableName":"remencaipin"}],"menu":"热门菜品模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-phone","buttons":["新增","查看","查看评论","删除"],"menu":"外国美食","menuJump":"列表","tableName":"waiguomeishi"}],"menu":"外国美食管理"},{"child":[{"appFrontIcon":"cuIcon-clothes","buttons":["新增","查看","删除","查看评论"],"menu":"中式美食","menuJump":"列表","tableName":"zhongshimeishi"}],"menu":"中式美食管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","查看评论"],"menu":"热门菜品","menuJump":"列表","tableName":"remencaipin"}],"menu":"热门菜品管理"},{"child":[{"appFrontIcon":"cuIcon-explore","buttons":["查看","删除"],"menu":"论坛管理","tableName":"forum"}],"menu":"论坛管理"},{"child":[{"appFrontIcon":"cuIcon-favor","buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["回复","查看","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","查看评论"],"menu":"外国美食列表","menuJump":"列表","tableName":"waiguomeishi"}],"menu":"外国美食模块"},{"child":[{"appFrontIcon":"cuIcon-list","buttons":["查看","查看评论"],"menu":"中式美食列表","menuJump":"列表","tableName":"zhongshimeishi"}],"menu":"中式美食模块"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","查看评论"],"menu":"热门菜品列表","menuJump":"列表","tableName":"remencaipin"}],"menu":"热门菜品模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
