(function ($) {
  $(function () {

    $('#top').html('<img id="logo" src="img/logo.gif">'
      + '<nav class="purple_color">'
      + '  <div class="container center">'
      + '    <div>'
      + '      <ul class="hide-on-med-and-down">'
      + '        <li class="menu-item"><a href="index.html">首页</a></li>'
      + '        <li class="menu-item"><a href="index.html" class="dropdown-button" data-activates="dropdown1">公司简介</a>'
      + '          <ul id="dropdown1" class="dropdown-content" hover="true" beloworigin="true">'
      + '            <li><a href="about.html">公司介绍</a></li>'
      + '            <li><a href="struct.html">组织架构</a></li>'
      + '            <li><a href="manage.html">管理层介绍</a></li>'
      + '            <li><a href="shareholder.html">控股股东介绍</a></li>'
      + '          </ul>'
      + '        </li>'
      + '        <li class="menu-item"><a href="index.html" class="dropdown-button" data-activates="dropdown2">投资者关系</a>'
      + '          <ul id="dropdown2" class="dropdown-content" hover="true" beloworigin="true">'
      + '            <li><a href="governance.html">公司治理</a></li>'
      + '            <li><a href="http://www.neeq.com.cn/disclosure/announcement.html">公司公告</a></li>'
      + '            <li><a href="investor.html">投资者服务</a></li>'
      + '          </ul>'
      + '        </li>'
      + '        <li class="menu-item"><a href="index.html" class="dropdown-button" data-activates="dropdown3">投资领域</a>'
      + '          <ul id="dropdown3" class="dropdown-content">'
      + '            <li><a href="subcompany.html">下属公司介绍</a></li>'
      + '            <li><a href="invest_direction.html">投资方向</a></li>'
      + '          </ul>'
      + '        </li>'
      + '        <li class="menu-item"><a href="culture.html">企业文化</a></li>'
      + '        <li class="menu-item"><a href="zhaopin.html">招贤纳士</a></li>'
      + '        <li class="menu-item"><a href="contactus.html">联系我们</a></li>'
      + '      </ul>'
      + '      <ul id="nav-mobile" class="side-nav" style="transform: translateX(-100%);">'
      + '        <li><a href="index.html">首页</a></li>'
      + '        <li><a href="about.html">公司介绍</a></li>'
      + '        <li><a href="struct.html">组织架构</a></li>'
      + '        <li><a href="manage.html">管理层介绍</a></li>'
      + '        <li><a href="shareholder.html">控股股东介绍</a></li>'
      + '        <li><a href="governance.html">公司治理</a></li>'
      + '        <li><a href="http://www.neeq.com.cn/disclosure/announcement.html">公司公告</a></li>'
      + '        <li><a href="investor.html">投资者服务</a></li>'
      + '        <li><a href="subcompany.html">下属公司介绍</a></li>'
      + '        <li><a href="invest_direction.html">投资方向</a></li>'
      + '        <li><a href="culture.html">企业文化</a></li>'
      + '        <li><a href="zhaopin.html">招贤纳士</a></li>'
      + '        <li><a href="contactus.html">联系我们</a></li>'
      + '      </ul>'
      + '      <a href="#" data-activates="nav-mobile" class="button-collapse"><img src="img/menu.png" height="32px"></a></div>'
      + '  </div>'
      + '</nav>'
    );

    $('#bottom').html('<footer class="page-footer purple_color">'
      + '  <div class="container">'
      + '    <div class="row">'
      + '      <div class="col l6 s12">'
      + '        <h5><a class="white-text" href="http://www.datonggroup.com.cn/">关于集团</a></h5>'
      + '      </div>'
      + '      <div class="col l6 s12">'
      + '        <h5 class="white-text">相关链接</h5>'
      + '        <ul>'
      + '          <li><a class="white-text" href="http://www.csrc.gov.cn/pub/newsite/">证监会</a></li>'
      + '          <li><a class="white-text" href="http://www.szse.cn/">深交所</a></li>'
      + '          <li><a class="white-text" href="http://www.mlr.gov.cn/">国土资源部</a></li>'
      + '          <li><a class="white-text" href="http://www.shfe.com.cn/">上海期货交易所</a></li>'
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
    $('.slider').slider({
      indicators: false,
      height: 500
    });

    $('#button_left').click(function () {
      var slider = $('.slider');
      slider.slider('pause');
      slider.slider('prev');
      slider.slider('start')
    })

    $('#button_right').click(function () {
      var slider = $('.slider');
      slider.slider('pause');
      slider.slider('next');
      slider.slider('start')
    })

    $('ul.tabs').tabs();

  }); // end of document ready
})(jQuery); // end of jQuery name space
