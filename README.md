# 论文翻译助手
[日本語]()  
简单易用的论文翻译辅助工具，Tampermonkey脚本。  
由于直接复制PDF内文本会出现断行等情况，导致翻译效率低下。  
该脚本可以用于去除断行、注释、乱码等，方便之后的翻译工作。  
  
<img src="https://github.com/Karasukaigan/tampermonkey-paper-translation-helper/blob/main/img/screenshot01.png" alt="">  
  
## 使用方法
前提条件：  
①使用谷歌浏览器。  
②安装Tampermonkey插件。  
③在扩展程序里找到Tampermonkey，将其**允许访问文件网址**设置开启。  
  
添加脚本：  
①点击右上角Tampermonkey图标。  
②点击**添加新脚本**。  
③将```论文翻译助手.js```中的代码复制到**编辑器**里后，按Ctrl+S保存脚本。  
  
使用方法：  
①使用谷歌浏览器打开PDF文件后，论文翻译助手会自动加载于页面上侧。  
②复制需要翻译的文本到**左侧文本框**。  
③点击左上角**规范化**按钮，右侧文本框会出现规范化后的文本，规范化后的文本**会被自动复制到剪切板**。  
④使用Google翻译或者其他翻译工具对文本进行翻译（右上角可以跳转到Google翻译、DeepL）。  
  
<img src="https://github.com/Karasukaigan/tampermonkey-paper-translation-helper/blob/main/img/screenshot02.png" alt="">  
