//这是Node中向外暴露成员的形式
//module.exports={}



//在ES6中,通过规范的形式,规定了ES6中如何导入和导出模块
//ES6中导入模块,使用import 模块名称 from'模块标识符'  import '表示路径'

//在ES6中,使用export default 和 export 向外暴露对象

var info={
  name:'zs',
  age:20
}

export default info 

// export default {
//   address:'北京'
// }





//注意:export default向外暴露的成员,可以使用任意的变量来接收
//注意:在一个模块中,export default只允许向外暴露一次
//注意:在一个模块中可以同时使用export default 和 export向外暴露成员

export var tittle='小星星'
export var content='哈哈哈'

//注意:使用export向外暴露的成员,只能使用{}的形式来接收,这种形式,叫做[按需导出]
//注意:export可以向外暴露多个成员,同时,如果某些成员,我们在import的时候
//不需要,则可以不在{}中定义
//注意:使用export导出的成员,必须严格按照导出的时候的名称,来使用{}按需接收
//注意:使用export导出的成员,如果就想换个名称接收,可以使用as来起别名;