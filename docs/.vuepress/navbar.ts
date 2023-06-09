import { navbar } from "vuepress-theme-hope";

// 精选图标：https://theme-hope.vuejs.press/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
  { text: "博客", icon: "blog", link: "/blog" },
  {
    text: "Contact",
    icon: "advance",
    children: [
      {
        text: "微信",
        icon: "wechat",
        link: "https://img.newzone.top/wechat.svg",
      },
      { text: "Email", icon: "alias", link: "mailto:learndata@newzone.top" },
      { text: "Discord", icon: "group", link: "https://discord.gg/PZTQfJ4GjX" },
      { text: "RSS", icon: "rss", link: "https://newzone.top/rss.xml" },
    ],
  },
]);
