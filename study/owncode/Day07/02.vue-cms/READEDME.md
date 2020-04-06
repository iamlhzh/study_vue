##制作首页APP组件
1.完成Header区域，使用的是Mint-UI中的Header组件
2.制作底部的Tabbar区域，使用的是MUI的Tabbar.html
  +在制作购物车图标的时候，操作多一些
  +先把扩展图标的css样式拷贝到项目中
  +拷贝扩展字体库ttf文件，到项目中
  +为购物车小图标，添加如下样式 'mui-icon mui-icon-extra mui-icon-extra-cart'
3.要在中间区域放置一个router-view来展示路由匹配到的组件

##改造tabbar为router-link


##设置路由高亮


##点击tabbar中的路由链接，展示对应的路由组件

##制作首页轮播图布局


##加载首页轮播图数据
1.获取数据，通过vue-resource获取
2.使用vue-resource的this.$http.get获取数据
3.获取到的数据，要保存到data身上
4.使用 v-for 循环渲染 每个 item项

##改造九宫格区域的样式

##改造新闻资讯路由链接

##新闻资讯 页面 制作
1.绘制界面,使用MUI中的media-list.html
2.使用vue-resource获取数据
3.渲染真实数据

##实现新闻资讯列表 点击跳转到新闻详情
1.把列表中的每一项改造为router-link,同时,在跳转的时候应该提供唯一的id标识符
2.创建新闻详情的组件页面newsinfo.vue
3.在路由模块中,将新闻详情的路由地址和组件页面对应起来


##实现新闻详情的页面布局和数据渲染

##单独封装一个comment.vue评论子组件
1.先创建一个单独的comment.vue组件模板
2.在需要使用comment组建的页面中,先手动导入comment组件
+import comment from './comment.vue'
3在父组件中,使用'components'属性,将刚才导入comment组件,注册为自己的子组件
4.将注册子组件时候的,注册名称,以标签形式,在页面中引用即可

##获取所有的评论数据显示到页面中

##实现点击加载更多评论的功能
1.为加载更多按钮绑定点击事件,在事件中请求下一页数据
2.点击加载更多,让pageIndex++,然后重新调用this.getComments()方法重新获取最新一页的数据
3.为了防止新数据覆盖老数据的情况,我们在点击加载更多的时候,每当获取到新数据,应该让老数据调用数组的concat方法,拼接上新数组

##发表评论
1.把文本框做成双向数据绑定
2.为发表按钮绑定一个事件
3.校验评论内容是否为空,如果为空,则Toast提示用户,评论内容不能为空
4.通过vue-resource发送一个请求,把评论内容提交给服务器
5.当发表评论ok后,重新刷新列表,以查看最新的评论
+如果调用getComments方法重新刷新评论列表的话,可能只能得到最后一页的评论,前几页的评论获取不到
+换一种思路:当评论后,在客户端,手动拼接出一个最新的评论对象,然后调用数组的unshift方法,把最新评论,追加到data中comments的开头,这样就能完美实现刷新评论列表的需求(感觉如果评论量小的还好,评论量大的无法实时展示别人评论的数据)


##改造图片分析按钮为路由链接并显示对应的组件页面

##绘制图片列表 组件页面结构并美化样式
1.制作顶部的滑动条
2.制作底部的图片列表


###制作顶部滑动条的坑
1.需要借助于MUI中的样式
2.需要把slider区域的mui-fullscreen类去掉
3.活动条无法正常触发滑动,通过检查官方文档,发现这是JS组件,需要被初始化一下
  +导入mui.js
  +调用官方的方式去初始化
      mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
4.我们在初始化滚动条的时候,导入的mui.js,但是,控制台报错
mui.js:3493 Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
 +经推测,是mui.js中用到了'caller', 'callee', and 'arguments'东西,但是webpack打包好的bundle.js中,默认是启用严格模式的,所以这两者冲突了
  +解决方案:1.把mui.js中非严格模式代码改掉,不现实;2.把webpack打包时候的严格模式禁用掉
  移除严格模式插件
  plugin-transform-remove-strict-mode
5.刚进入图片分享页面时候,滚动条无法正常工作,----原因:如果要初始化滑动条,必须要等DOM元素加载完毕,所以我们把初始化滚动条的代码,搬到了mounted生命周期函数中

6.当滚动条调试完毕,tabBar无法正常工作了,这时候,需要把每个tabbar按钮的样式中
mui-tab-item重新改一下名字
7.获取所有的类并渲染顶部列表



###制作图片列表区域
1.图片列表需要使用懒加载技术,我们可以使用Mint-UI提供的现成的组件'lazy-load'
2.根据'lazy-load'的使用文档,尝试使用
3.渲染图片列表数据


###实现了 图片列表的 懒加载改造和 样式美化


##实现了 点击图片 跳转到 图片详情页面
1.在改造li成router-link的时候,需要使用tag属性指定要渲染为哪种元素

##实现 详情页面的布局和美化,同时获取数据渲染页面