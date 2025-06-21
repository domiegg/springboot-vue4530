const base = {
    get() {
        return {
            url : "http://localhost:8080/springbooth10zf/",
            name: "springbooth10zf",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbooth10zf/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于vue的地方美食分享网站"
        } 
    }
}
export default base
