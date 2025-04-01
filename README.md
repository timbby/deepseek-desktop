# Deepseek Desktop

## 项目简介
基于Electron开发的Deepseek聊天桌面客户端，提供更好的本地体验。

### 功能特性
- 自动隐藏菜单栏的简洁界面
- 原生窗口控制（1200x800分辨率）
- macOSDock图标适配
- 一键构建DMG安装包

## 安装指南
```bash
npm install
```
安装electron和electron-builder依赖

## 运行与构建
启动应用：
```bash
npm start
```

构建安装包：
```bash
npm run build
```
生成DMG文件在/dist目录

## 深色模式适配
- 自动适配系统深色模式的Dock图标
- 代码已内置macOS平台检测逻辑
- 替换icon_1024x1024.icns文件即可更换Dock图标
