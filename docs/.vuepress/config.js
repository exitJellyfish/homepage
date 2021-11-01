module.exports = {
  title: "Hello Mr. N",
  dest: "dist",
  description: "N HomePage",
  theme: "@vuepress/blog",
  plugins: {
     // 鼠标点击特效
    "cursor-effects": {
      size: 2,
      shape: 'circle',  // 点击形状: 'star', 'star' | 'circle'
      zIndex: 999999999
    },
     // 动态标题配置
    "dynamic-title": {
      showIcon: "https://cdn.jsdelivr.net/gh/BNDong/Cnblogs-Theme-SimpleMemory@master/img/webp/blog_logo.webp",
      showText: "(/≧▽≦/)欢迎回来！",
      hideIcon: "https://cdn.jsdelivr.net/gh/BNDong/Cnblogs-Theme-SimpleMemory@master/img/webp/blog_logo.webp",
      hideText: "(●—●)喔哟，不要离开嘛！",
      recoverTime: 2000
    },
    'vuepress-plugin-helper-live2d': {
      // 是否开启控制台日志打印(default: false)
      log: true,
      live2d: {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        // 模型名称(default: hibiki)
        model: 'koharu',
        display: {
          vOffset: -55, //  垂直偏移(default: 0)
        },
        mobile: {
          show: false // 是否在移动设备上显示(default: false)
        },
        react: {
          opacity: 0.8 // 模型透明度(default: 0.8)
        }
      }
    },
  },
  themeConfig: {
    nav: [
      { text: "博客", link: "/blog/" },
      { text: "随笔", link: "/writing/" },
      { text: "文摘", link: "/digest/" },
      { text: "标签", link: "/tag/" },
      { text: "阅读", link: "https://weread.qq.com/" },
      // { text: "时钟", link: "http://ykang2020.gitee.io/clock/" },
    ],
    directories: [
      {
        id: "blog",
        dirname: "_blogs",
        path: "/blog/",
        // title: "我的博客",
      },
      {
        id: "writing",
        dirname: "_writing",
        path: "/writing/",
        // title: "我的随笔",
      },
      {
        id: "digest",
        dirname: "_digest",
        path: "/digest/",
        // title: "我的文摘",
      },
    ],
    siderbar: "auto",
    footer: {
      contact: [
        { type: "github", link: "https://github.com/exitJellyfish" },
        { type: "mail", link: "https://vip.163.com/" },
        { type: "video", link: "https://space.bilibili.com/67273812" },
        { type: "web", link: "https://blog.csdn.net/weixin_44972008" },
      ],
      copyright: [
        { text: "N", link: "https://gitee.com/jellyfishnxk" },
        { text: "N | Copyright © 2021" },
      ],
    },
  },
};
