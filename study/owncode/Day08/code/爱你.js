function loveYou(callback){
  console.log("我爱你")
  callback(loveYou);
}
loveYou(loveYou);