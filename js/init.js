(function ($) {
  $(function () {

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

    let url =  window.location.href
    let path = url.substr(url.indexOf('#'))
    if (path == '#/') {
      $('#home_carousel').css({display: 'block'})
    } else {
      $('#home_carousel').css({display: 'none'})
    }

  }); // end of document ready
})(jQuery); // end of jQuery name space


// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Default = { template: '' }
const About = { template: `<div class="container">
    <div class="section">

        <!--   Icon Section   -->
        <div class="row">
            <div class="col s4">
                <div class="icon-block">
                    <h2 class="center light-blue-text"><img src="img/material1.png"/></h2>

                    <p class="light">大通新天作为大通集团资源产业发展的平台，遵循集团企业宗旨和战略思想，结合自身实际情况及发展需求，探索出适合自身发展的独特模式，以境内外优质的稀有贵金属等价值资源为主要投资方向，把握境内外资本市场的发展机遇，与时俱进，精心布局产业格局，不断寻求更广阔的发展空间。</p>
                </div>
            </div>

            <div class="col s4">
                <div class="icon-block">
                    <h2 class="center light-blue-text"><img src="img/material2.png"/></h2>

                    <p class="light">大通集团资源产业拥有金、银、铜、锆、钛、铅、锌、锑等多种稀有贵金属矿种，矿权分布于四川、云南、内蒙、海南等地。其中集团倾力投资的云南照昀公司矿业公司，与当地政府合作，通过积极探索、运作进入境外资本市场，将利用境外资本，整合周边银矿资源，打造资源、资本、政策、人才完美融合的“中国银都”全产业链项目，并汲取云南“滇银”的历史特色及宝贵的制造工艺，向世界展示东方银业的独特魅力和价值。</p>
                </div>
            </div>

            <div class="col s4">
                <div class="icon-block">
                    <h2 class="center light-blue-text"><img src="img/material3.png"/></h2>

                    <p class="light">大通资源板块通过自身的不懈努力与昂扬的奋斗精神，在实业发展与资本结合的道路上，不断克服困难，潜心学习，发挥主观能动性与创造性，不断拓展业务范围，深耕业务领域，为集团的战略发展奉献自身的力量，并将源源不断地回馈社会，促进地方乃至国家的经济发展。</p>
                </div>
            </div>
        </div>

    </div>
</div>` }
const Struct = {template : `<div class="container">
    <div class="section">

        <img src="img/struct.png" width="100%">

    </div>
</div>`}

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/', component: Default },
  { path: '/about', component: About },
  { path: '/struct', component: Struct }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  el: '#app',
  router,
  watch: {
    $route: function(to, from) {
      // 不符合路由的，均重定向到根
      if (to.matched.length == 0) {
        $(location).attr("href", "#/");
      }
      if (to.path == '/') {
        $('#home_carousel').css({display: 'block'})
      } else {
        $('#home_carousel').css({display: 'none'})
      }

    }
  }
})