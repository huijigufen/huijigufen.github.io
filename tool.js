/**
 * Created by Jeepend on 22/11/2017.
 */
let text = `<img id="logo" src="img/logo_icon.png">
<img id="logo_text" src="img/logo_text.png">
<nav class="purple_color">
  <div class="container center">
    <div>
      <ul class="hide-on-med-and-down">
        <li class="menu-item"><a href="index.html">首页</a></li>
        <li class="menu-item"><a href="index.html" class="dropdown-button" data-activates="dropdown1">公司简介</a>
          <ul id="dropdown1" class="dropdown-content" hover="true" beloworigin="true">
            <li><a href="about.html">公司介绍</a></li>
            <li><a href="struct.html">组织架构</a></li>
            <li><a href="manage.html">管理层介绍</a></li>
            <li><a href="shareholder.html">控股股东介绍</a></li>
          </ul>
        </li>
        <li class="menu-item"><a href="index.html" class="dropdown-button" data-activates="dropdown2">投资者关系</a>
          <ul id="dropdown2" class="dropdown-content" hover="true" beloworigin="true">
            <li><a href="governance.html">公司治理</a></li>
            <li><a href="http://www.neeq.com.cn/disclosure/announcement.html">公司公告</a></li>
            <li><a href="investor.html">投资者服务</a></li>
          </ul>
        </li>
        <li class="menu-item"><a href="index.html" class="dropdown-button" data-activates="dropdown3">投资领域</a>
          <ul id="dropdown3" class="dropdown-content">
            <li><a href="subcompany.html">下属公司介绍</a></li>
            <li><a href="index.html">投资标的</a></li>
          </ul>
        </li>
        <li class="menu-item"><a href="index.html">企业文化</a></li>
        <li class="menu-item"><a href="index.html">招贤纳士</a></li>
        <li class="menu-item"><a href="index.html">联系我们</a></li>
      </ul>
      <ul id="nav-mobile" class="side-nav" style="transform: translateX(-100%);">
        <li><a href="index.html">首页</a></li>
        <li><a href="about.html">公司介绍</a></li>
        <li><a href="struct.html">组织架构</a></li>
        <li><a href="manage.html">管理层介绍</a></li>
        <li><a href="shareholder.html">控股股东介绍</a></li>
        <li><a href="governance.html">公司治理</a></li>
        <li><a href="http://www.neeq.com.cn/disclosure/announcement.html">公司公告</a></li>
        <li><a href="investor.html">投资者服务</a></li>
        <li><a href="subcompany.html">下属公司介绍</a></li>
        <li><a href="index.html">投资标的</a></li>
        <li><a href="index.html">企业文化</a></li>
        <li><a href="index.html">招贤纳士</a></li>
        <li><a href="index.html">联系我们</a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><img src="img/menu.png" height="32px"></a></div>
  </div>
</nav>`

// let array = text.split('\n')
//
// for (let i = 0; i < array.length; i++) {
//   let line = array[i]
//   line = line.replace(/'/g, '"')
//   console.log(`+ '${line}'`)
// }

let fs = require('fs');
let argv = process.argv;
if (argv.length > 2) {
  let path = argv[2];
  fs.readdir(path, function (err, files) {
    if (err) {
      return
    }
    files.forEach(function (file) {
      let filePath = path + '/' + file
      let stat = fs.lstatSync(filePath);
      if (stat.isFile()) {
        analyseFile(filePath)
      }
    })
  })

}

function analyseFile(file) {
  if (fs.existsSync(file)) {
    console.log("开始解析文件" + file);
    fs.readFile(file, 'utf-8', function (err, data) {
      let chineseSet = new Set();
      for (let i = 0; i < data.length; i++) {
        let char = data.charAt(i);
        if (char == '贤') {
          console.log('Got a 贤')
        }
        if (char >= '\u4E00' && char <= '\u9FFF') {
          console.log('Add a 贤')
          chineseSet.add(char);
        }
      }
      fs.writeFile('result.txt', set2String(chineseSet))
    })
  }
}

function set2String(set) {
  let result = ''
  set.forEach(item => {
    result += item
  })
  return result
}

analyseFile('part1.txt')