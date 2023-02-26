# fairygui-ccc370

fairygui for cocoscreator v3.7.0
Official website: [www.fairygui.com](https://www.fairygui.com)

# 关于版本
* 本分支支持 CocosCreator 3.7.0。
* 至少支持 FairyGUIEditor 2022.1.0。

# 编译源码

1. 全局安装 gulpCli  `npm install gulp-cli -g` 
1. 全局安装 rollup(Cli)  `npm install rollup -g` 
1. 安装项目依赖 `npm i`
1. 执行`gulp build`任务。
    * 如果编译报错，可尝试降级`gulpCli`和`rollupCli`
    * 安装 v2.3.0 的 gulp-cli `npm install gulp-cli@2.3.0 -g`
    * 安装 v3.17.2 的 rollup(Cli) `npm install rollup@3.17.2 -g`

# 项目中使用 fairyGui 库

在 cc 项目根目录的下执行命令 `npm i fairygui-ccc370`，完成安装后重启编辑器。

# License
MIT
