const fs=require('fs')

function getFileByPath(fpath) {
  return new Promise(function(resolve,reject) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
      if(err)return reject (err)
      resolve(dataStr)
    })
  })
}

//先读取文件1,再读取文件2,最后读取3
//注意:通过.then指定回调函数的时候,成功的回调函数,必须传,但是,失败的回调,可以省略不传
//错误示范
// getFileByPath('./files/1.txt')
// .then(function(data){
//   console.log(data)
//   getFileByPath('./files/2.txt')
// .then(function(data){
//   console.log(data)
//   getFileByPath('./files/3.txt')
// .then(function(data){
//   console.log(data)
// })
// })
// })


//如果,前面的Promise执行失败,我们不想让后续的Promise操作被终止,可以为每个promise指定失败的回调
// getFileByPath('./files/11.txt')
// .then(function(data){
//   console.log(data)
//   return getFileByPath('./files/2.txt')
// },function(err){
//   console.log('这是失败的结果'+err.message)
//   //return一个新的promise 
//   return getFileByPath('./files/2.txt')
// })
// .then(function(data){
//   console.log(data)
//   return getFileByPath('./files/3.txt')
// })
// .then(function(data){
//   console.log(data)
// })

// console.log('okokok')


//当我们有这样的需求:哪怕前面的Promise失败了,但是,不要影响后续的Promise的正常执行,此时,我们可以单独为每个promise通过.then指定一下失败的回调;


//另外一种需求:后续的promise执行依赖于前面的promise执行的结果,如果前面的失败了,则后面的就没有执行下去的意义了,此时,我们想要实现,一旦有报错,则立即终止所有的promise的执行

getFileByPath('./files/11.txt')
.then(function(data){
  console.log(data)
  return getFileByPath('./files/2.txt')
})
.then(function(data){
  console.log(data)
  return getFileByPath('./files/3.txt')
})
.then(function(data){
  console.log(data)
})
.catch(function(err){
  console.log('自己的异常处理方式'+err.message)
})

console.log('okokok')