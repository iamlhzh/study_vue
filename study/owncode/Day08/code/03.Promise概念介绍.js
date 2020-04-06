//1.Promis是一个构造函数,既然是构造函数,我们可以new Promise()得到一个Promise实例
//2.在Promise上,有两个函数.分别叫做resolve(成功之后的回调函数)和reject(失败之后的回调函数)
//3.在Promise构造函数的Prototype属性上,有一个.then方法.也就是说,只要是Promise构造函数创建的实例,都可以访问到.then方法
//4.Promise表示一个异步的操作;每当我们new一个Promise的实例,这个实例就表示一个具体的异步操作
//5.既然Promise创建的实例,是一个异步操作,那么,这个异步操作的结果,只能有两种状态
//5.1状态1:异步操作执行成功了,需要在内部调用成功的回调函数resolve把结果返回给调用者
//5.2状态2:异步操作执行失败了,需要在内部调用失败的回调函数reject把结果返回给调用者
//5.3由于Promise的实例,是一个异步操作,所以,内部拿到操作的结果后,无法使用return把操作的结果返回给掉用者;这时候,只能使用回调函数的形式,来把成功或失败的结果,返回给调用者
//6.我们可以在new出来的Promise实例上,调用.then()方法.预先为这个Promise异步操作,指定成功(resolve)和失败(reject)回调函数

// //注意:这里new出来的promise,只是代表形式上的一个异步操作;
// //什么是形式上的异步操作;就是说,我们只知道它是一个异步操作,但是做什么具体异步事情,目前还不清楚
// var promise=new Promise()

// //这是一个具体的异步操作,其中,使用function指定一个具体的异步操作
// var promise=new Promise(function(){
//   //这个function内部写的就是具体的异步操作
// })

const fs = require('fs')
//每当new 一个Promise实例的时候,就会立即执行这个异步操作中的代码
//也就是说,new的时候,除了能够得到一个promise实例之外,还会立即调用我们为Promise构造函数传递的那个function,执行这个function中的异步操作代码

// var promise =new Promise(function(){
//   fs.readFile('./files/2.txt','utf-8',(err,dataStr)=>{
//     if(err) throw err
//     console.log(dataStr)
//   })
// })

//初衷:给路径返回读取到的基本内容
function getFileByPath(fpath) {
  var promise = new Promise(function(resolve,reject) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
      // if (err) throw err
      // console.log(dataStr)
      if(err)return reject (err)
      resolve(dataStr)
    })
  })
  return promise
}
var p=getFileByPath('./files/21.txt')
p.then(function(data){
  console.log(data+'------')
},function(err){
  console.log(err.message)
})