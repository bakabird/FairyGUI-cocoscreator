# FairyGUI-cocoscreator

A flexible UI framework for Cocos Creator, working with the FREE professional Game UI Editor: FairyGUI Editor.

Official website: [www.fairygui.com](https://www.fairygui.com)

# 关于版本
* 本分支支持 CocosCreator 3.7.0。
* 至少支持 FairyGUIEditor 2022.1.0。

# 目录结构
* source fairygui的源码
* demo 例子工程,可用 CocosCreator3.7.0 直接打开
* UIProject UI 工程,可以FairyGUI编辑器打开

# 注意

* ComboBox(下拉菜单) 在 编辑器预览 模式下运行时会无法展开，是 IDE 的BUG，用 浏览器预览 是没问题的，不影响发布后的项目。

# 项目中使用 fairyGui 库
在 cc 项目根目录的下执行命令 `npm i fairygui-ccc370`，完成安装后重启编辑器。

# 编译源码
使用VSC打开`source`目录

1. 全局安装 gulpCli  `npm install gulp-cli -g` 
1. 全局安装 rollup(Cli)  `npm install rollup -g` 
1. 安装项目依赖 `npm i`
1. 执行`gulp build`任务。
    * 如果编译报错，可尝试降级`gulpCli`和`rollupCli`
    * 安装 v2.3.0 的 gulp-cli `npm install gulp-cli@2.3.0 -g`
    * 安装 v3.17.2 的 rollup(Cli) `npm install rollup@3.17.2 -g`

# License
MIT
