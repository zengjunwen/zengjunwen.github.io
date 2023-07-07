---
slug: docusaurus字体配置
title: Docusaurus字体配置
authors: Jon
tags: [docusaurus]
---

在相关字体网站下载想要的字体，将字体放入 **static/fonts** 目录下

1. 在 **customs.css** 文件中引入字体并使用字体

```
@font-face {
  font-family: 'SIMSUN';
  src: url('../../static/fonts/SIMSUN.ttf');
}
body {
  font-family: SIMSUN;
}
```

