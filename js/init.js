(function ($) {
  $(function () {

    $('#top').html('<img id="logo" src="img/logo_icon.png"/>'
      + '  <img id="logo_text" src="img/logo_text.png">'
      + ''
      + ''
      + '  <nav class="purple_color">'
      + '    <div class="container center">'
      + '      <div>'
      + '        <ul class="hide-on-med-and-down">'
      + '          <li class="menu-item"><a href="index.html">首页</a></li>'
      + '          <li class="menu-item"><a href="index.html" class="dropdown-button" data-activates="dropdown1">公司简介</a>'
      + '            <ul id="dropdown1" class="dropdown-content" hover="true" beloworigin="true">'
      + '              <li><a href="about.html">公司介绍</a></li>'
      + '              <li><a href="struct.html">组织架构</a></li>'
      + '              <li><a href="index.html">管理层介绍</a></li>'
      + '            </ul>'
      + '          </li>'
      + '          <li class="menu-item"><a href="http://www.neeq.com.cn/disclosure/announcement.html">信息披露</a>'
      + '          </li>'
      + '          <li class="menu-item"><a href="index.html" class="dropdown-button" data-activates="dropdown3">投资领域</a>'
      + '            <ul id="dropdown3" class="dropdown-content">'
      + '              <li><a href="index.html">子公司介绍</a></li>'
      + '              <li><a href="index.html">投资标的要求</a></li>'
      + '            </ul>'
      + '          </li>'
      + ''
      + '          <li class="menu-item"><a href="index.html">企业文化</a></li>'
      + '          <li class="menu-item"><a href="index.html">招贤纳士</a></li>'
      + '          <li class="menu-item"><a href="index.html">联系我们</a></li>'
      + '        </ul>'
      + ''
      + '        <ul id="nav-mobile" class="side-nav">'
      + '          <li><a href="index.html">首页</a></li>'
      + '          <li><a href="about.html">公司介绍</a></li>'
      + '          <li><a href="struct.html">组织架构</a></li>'
      + '          <li><a href="index.html">管理层介绍</a></li>'
      + '          <li><a href="index.html">子公司介绍</a></li>'
      + '          <li><a href="index.html">投资标的要求</a></li>'
      + '          <li><a href="index.html">企业文化</a></li>'
      + '          <li><a href="index.html">招贤纳士</a></li>'
      + '          <li><a href="index.html">联系我们</a></li>'
      + '        </ul>'
      + '        <a href="#" data-activates="nav-mobile" class="button-collapse"><img src="img/menu.png" height="32px"></a>'
      + '      </div>'
      + '    </div>'
      + '  </nav>'
      + '</div>'
    );

    $('#bottom').html('<footer class="page-footer purple_color">'
      + '  <div class="container">'
      + '    <div class="row">'
      + '      <div class="col l6 s12">'
      + '        <h5><a class="white-text" href="http://www.datonggroup.com.cn/">关于集团</a></h5>'
      + '      </div>'
      + '      <div class="col l6 s12">'
      + '        <h5 class="white-text">友情链接</h5>'
      + '        <ul>'
      + '          <li><a class="white-text" href="index.html">链接 1</a></li>'
      + '          <li><a class="white-text" href="index.html">链接 2</a></li>'
      + '          <li><a class="white-text" href="index.html">链接 3</a></li>'
      + '          <li><a class="white-text" href="index.html">链接 4</a></li>'
      + '        </ul>'
      + '      </div>'
      + '    </div>'
      + '  </div>'
      + '  <div class="footer-copyright">'
      + '    <div class="container">'
      + '      版权所有：广州大通资源开发股份有限公司 Copyright ©Datong Resources. All Rights Reserved.'
      + '    </div>'
      + '  </div>'
      + '</footer>'
    );

    $('.button-collapse').sideNav();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
    $('.dropdown-button').dropdown(
      {
        inDuration: 300,
        outDuration: 225,
        constrainWidth: true, // Constrains width of dropdown to the activator
        hover: true,
        gutter: 0, // Spacing from edge
        belowOrigin: true,
        alignment: 'left',
        stopPropagation: false
      }
    );
    $('.slider').slider();

  }); // end of document ready
})(jQuery); // end of jQuery name space
