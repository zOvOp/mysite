import Mock from "mockjs";
import qq from "@/assets/qq.jpg"
import weixin from "@/assets/weixin.jpg"
Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://pic.rmb.bdstatic.com/bjh/7b1de16c3c0a9912638618df370ee7a49124.jpeg@h_1280",
        siteTitle: "zOvOp",
        github: "https://github.com/zOvOp",
        qq: "2537314409",
        qqQrCode:
            `${qq}`,
        weixin: "15892759819",
        weixinQrCode:
            `${weixin}`,
        mail: "2537314409@qq.com",
        icp: "黑ICP备17001719号",
        githubName: "zOvOp",
        favicon: "https://pic.rmb.bdstatic.com/bjh/7b1de16c3c0a9912638618df370ee7a49124.jpeg@h_1280",
    },
});
