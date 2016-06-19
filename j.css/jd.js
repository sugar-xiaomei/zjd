$(function(){
	function one(){//导航栏送至
      var sz=$(".t-s-l")[0];
      var sb=$(".sbaaa")[0];
      var bib=$(".bib")[0];
      sz.onmouseover=function(){
      	 sb.style.display="block";
      	 bib.style.display="block";
      	}
      sz.onmouseout=function(){
      	sb.style.display="none";
      	bib.style.display="none";
      }
    }one();
    function two(){
    	 var wd=$(".lw")[0];
         var me=$(".me")[0];
         var bbb=$(".bbb")[0];
         wd.onmouseover=function(){
            bbb.style.display="block";
            me.style.display="block";
         }
         wd.onmouseout=function(){
         	bbb.style.display="none";
            me.style.display="none";
         }
    }two()
    function three(){//关注微信
    	var mei=$(".mei")[0];
    	var gz=$(".guanzhu")[0];
    	var ggz=$(".lgz")[0];
        ggz.onmouseover=function(){
            mei.style.display="block";
            gz.style.display="block";
         }
         ggz.onmouseout=function(){
         	mei.style.display="none";
            gz.style.display="none";
         }
    }three();
    function four(){  //客户服务
    	var kehu=$(".kehu")[0];
    	var fuwu=$(".fuwu")[0];
    	var kk=$(".kk")[0];

        kehu.onmouseover=function(){

            kk.style.display="block";
            fuwu.style.display="block";
           }
         kehu.onmouseout=function(){
           	kk.style.display="none";
            fuwu.style.display="none";
         }
    }four();
    function five(){//网站导航
    	var wang=$(".wangzhan")[0];
    	var wz=$(".wz")[0];
    	var ww=$(".ww")[0];
         wang.onmouseover=function(){
           wz.style.display="block";
           ww.style.display="block";
         }
          wang.onmouseout=function(){
         	wz.style.display="none";
            ww.style.display="none";
         }
    }five();

   function senver(){  //我的购物车
      var gc=$(".l-w")[0];
      var gouwu=$(".gouwu")[0];
      var ggw=$(".ggw")[0];
         gc.onmouseover=function(){
           gouwu.style.display="block";
           ggw.style.display="block";
         }
          gc.onmouseout=function(){
          gouwu.style.display="none";
            ggw.style.display="none";
         }
    }senver();
    function huan(){
      var cctu2=$('.cc-tu2')[0];
      var cctu1=$('.cc-tu1')[0];
      var cchuan=$('.cc-huan')[0];
      cctu2.onmouseover=function(){
        cctu2.style.display="none";
        cctu1.style.display='block';
        cchuan.style.color="#c81623";
      }
      cctu2.onmouseout=function(){
         cctu2.style.display="block";
        cctu1.style.display='none';
        cchuan.style.color='#666';
      }
    }huan();
  function eight(){//今日推荐
       var jy=$(".jy")[0];
       var jjy=$(".jjy");
       var left=$(".jyl")[0];
       var right=$(".jyr")[0];
       var n=0;
       var next=0;
       var w=parseInt(getStyle(jjy[0],"width"));
       var t=setInterval(move,1000);
       var flag=true;
       function move(){
          flag=false;
           next=n+1;
          if(next>=jjy.length){
               next=0;
           }
           jjy[next].style.left=w+"px";
           animate(jjy[n],{left:-w},300);
           animate(jjy[next],{left:0},300,function(){flag=true});
           n=next;
        }
       function move1(){
          if(!flag){
            return;
            }
            flag=false;
            next=n-1;
            if(next<=0){
             next=jjy.length-1;
             }
             jjy[next].style.left=-w+"px";
             animate(jjy[n],{left:w},300);
             animate(jjy[next],{left:0},300,function(){flag=true});
             n=next;
            }
           left.onclick=function(){
               move();
              }
            right.onclick=function(){
              move1();
             }
             jy.onmouseover=function(){
              clearInterval(t);
             }
              jy.onmouseout=function(){
              clearInterval(t);
             }
         }eight();//今日推荐

   function  nine(){//家用电器
         var mll=document.getElementsByClassName("mll")[0];
         var jydq=document.getElementsByClassName("jydqq")[0];
         // console.log(jydq)
         mll.onmouseover=function(){
             jydq.style.display="block";

         }
         mll.onmouseout=function(){
             jydq.style.display="none";
         }
   }nine();

//一楼选项卡
  function twelve(){
       var qianbi=document.querySelectorAll(".qianbi");
       var  gangbi=document.querySelectorAll(".gangbi");
       var  kkk=document.querySelectorAll(".kkk");
       console.log(qianbi.length,gangbi.length)
       for(var i=0;i<qianbi.length;i++){
          qianbi[i].index=i;
          qianbi[i].onmouseover=function(){
            for(var j=0;j<gangbi.length;j++){
              gangbi[j].style.display="none";
              kkk[j].style.display="none";
            }gangbi[this.index].style.display="block";
            kkk[this.index].style.display="block"
          }
       }
  }twelve();
  //二楼选项卡
function aa(){
       var qianbii=document.querySelectorAll(".qianbii");
       var  youxin=document.querySelectorAll(".youxin");
			 console.log(youxin.length);

       var  kkkk=document.querySelectorAll(".kkkk");
       // console.log(qianbii.length,youxin.length)
       for(var i=0;i<qianbii.length;i++){
          qianbii[i].index=i;
          qianbii[i].onmouseover=function(){
            for(var j=0;j<youxin.length;j++){
             youxin[j].style.display="none";
              kkkk[j].style.display="none";
            }youxin[this.index].style.display="block";
            kkkk[this.index].style.display="block"
          }
       }
  }
	aa();
  //三楼
  function bb(){
     var qianbiii=document.querySelectorAll(".qianbiii");
       var  aaa=document.querySelectorAll(".aaa");
       var  kkkkk=document.querySelectorAll(".kkkkk");
       // console.log(qianbii.length,youxin.length)
       for(var i=0;i<qianbiii.length;i++){
          qianbiii[i].index=i;
          qianbiii[i].onmouseover=function(){
            for(var j=0;j<aaa.length;j++){
             aaa[j].style.display="none";
              kkkkk[j].style.display="none";
            }aaa[this.index].style.display="block";
            kkkkk[this.index].style.display="block"
          }
       }
  }bb();
  //四楼
  function cc(){
       var qianbiiii=document.querySelectorAll(".qianbiiii");
       var  ccc=document.querySelectorAll(".ccc");
       var  kkkkkk=document.querySelectorAll(".kkkkkk");
       // console.log(qianbiiii.length,ccc.length)
       for(var i=0;i<qianbiiii.length;i++){
          qianbiiii[i].index=i;
          qianbiiii[i].onmouseover=function(){
            for(var j=0;j<ccc.length;j++){
             ccc[j].style.display="none";
              kkkkkk[j].style.display="none";
            }ccc[this.index].style.display="block";
            kkkkkk[this.index].style.display="block"
          }
       }
  }cc();
  //五楼
  function  dd(){
       var qianbiiiii=document.querySelectorAll(".qianbiiiii");
       var  ddddd=document.querySelectorAll(".ddddd");
       var  kkkkkkk=document.querySelectorAll(".kkkkkkk");
       console.log(qianbiiiii.length,ddddd.length)
       for(var i=0;i<qianbiiiii.length;i++){
          qianbiiiii[i].index=i;
          qianbiiiii[i].onmouseover=function(){
            for(var j=0;j<ddddd.length;j++){
              ddddd[j].style.display="none";
              kkkkkkk[j].style.display="none";
            }ddddd[this.index].style.display="block";
            kkkkkkk[this.index].style.display="block"
          }
       }
  }dd();
  //六楼
   function  ee(){
       var qianbiiiiii=document.querySelectorAll(".qianbiiiiii");
       var  ffff=document.querySelectorAll(".ffff");
       var  kkkkkkkk=document.querySelectorAll(".kkkkkkkk");
       console.log(kkkkkkkk.length,ffff.length,qianbiiiiii.length)
       for(var i=0;i<qianbiiiiii.length;i++){
          qianbiiiiii[i].index=i;
          qianbiiiiii[i].onmouseover=function(){
            for(var j=0;j<ffff.length;j++){
             ffff[j].style.display="none";
              kkkkkkkk[j].style.display="none";
            }ffff[this.index].style.display="block";
            kkkkkkkk[this.index].style.display="block";
          }
       }
   }ee();
   //七楼
   function ff(){
       var qianbiiiiiii=document.querySelectorAll(".qianbiiiiiii");
       var  eeee=document.querySelectorAll(".eeee");
       var  kkkkkkkkk=document.querySelectorAll(".kkkkkkkkk");
       console.log(kkkkkkkkk.length,eeee.length,qianbiiiiiii.length);
       for(var i=0;i<qianbiiiiiii.length;i++){
          qianbiiiiiii[i].index=i;
          qianbiiiiiii[i].onmouseover=function(){
            for(var j=0;j<eeee.length;j++){
             eeee[j].style.display="none";
               kkkkkkkkk[j].style.display="none";
            }eeee[this.index].style.display="block";
            kkkkkkkkk[this.index].style.display="block";
          }
       }
    }ff();
    //八楼
    function gg(){
      var qianbiiiiiiii=document.querySelectorAll(".qianbiiiiiiii");
       var  ggggg=document.querySelectorAll(".ggggg");
       var  kkkkkkkkkk=document.querySelectorAll(".kkkkkkkkkk");
       console.log(kkkkkkkkkk.length,ggggg.length,qianbiiiiiiii.length);
       for(var i=0;i<qianbiiiiiiii.length;i++){
          qianbiiiiiiii[i].index=i;
          qianbiiiiiiii[i].onmouseover=function(){
            for(var j=0;j<ggggg.length;j++){
             ggggg[j].style.display="none";
              kkkkkkkkkk[j].style.display="none";
            }ggggg[this.index].style.display="block";
            kkkkkkkkkk[this.index].style.display="block";
          }
       }
  }gg();
  //九楼
  function hh(){
       var qianbiiiiiiiii=document.querySelectorAll(".qianbiiiiiiiii");
       var  jjj=document.querySelectorAll(".jjj");
       var  kkkkkkkkkkk=document.querySelectorAll(".kkkkkkkkkkk");
       console.log(kkkkkkkkkkk.length,jjj.length,qianbiiiiiiiii.length);
       for(var i=0;i<qianbiiiiiiiii.length;i++){
          qianbiiiiiiiii[i].index=i;
          qianbiiiiiiiii[i].onmouseover=function(){
            for(var j=0;j<jjj.length;j++){
             jjj[j].style.display="none";
              kkkkkkkkkkk[j].style.display="none";
            }jjj[this.index].style.display="block";
            kkkkkkkkkkk[this.index].style.display="block";
          }
       }
  }hh();
  //十楼
  function ii(){
       var qianbiiiiiiiiii=document.querySelectorAll(".qianbiiiiiiiiii");
       var  mmmmm=document.querySelectorAll(".mmmmm");
       var  kkkkkkkkkkkk=document.querySelectorAll(".kkkkkkkkkkkk");
       // console.log(kkkkkkkkkkkk.length,mmmmm.length,qianbiiiiiiiiii.length);
       for(var i=0;i<qianbiiiiiiiiii.length;i++){
          qianbiiiiiiiiii[i].index=i;
          qianbiiiiiiiiii[i].onmouseover=function(){
            for(var j=0;j<mmmmm.length;j++){
             mmmmm[j].style.display="none";
              kkkkkkkkkkkk[j].style.display="none";
            }mmmmm[this.index].style.display="block";
            kkkkkkkkkkkk[this.index].style.display="block";
          }
       }
  }ii();
/////选项卡封装函数banner
  function xuan(){
      var mll=$(".m-l");
      var aa=$(".jydqq");
      for(var i=0;i<mll.length;i++){
          mll[i].index=i;
          mll[i].onmouseover=function(){
            for(var j=0;j<aa.length;j++){
              aa[j].style.display="none";
            }aa[this.index].style.display="block";
          }
          mll[i].onmouseout=function(){
            aa[this.index].style.display="none";
          }
      }
  }xuan();

//  banner  透明度变化
function banner(){
   var imgs=$(".t-i");
   var tp=$(".tp")[0];
   var left=$(".t-i-l")[0];
   var right=$(".t-i-r")[0];
   var lis=$(".lis");
   var t=setInterval(move,2000);
   var n=0;
   var next=0;
   var flag=true;
   function move(){
         flag=false;
         next=n+1;
     if(next>=imgs.length){
         next=0;
       }
     for(var i=0;i<imgs.length;i++){
         lis[i].style.background="#3e3e3e";
       }
         lis[next].style.background="#c81623";
         imgs[next].style.opacity = 0;
         animate(imgs[n],{opacity:0},500);
         animate(imgs[next],{opacity:1},500,function(){flag=true});
         n=next;
   }
   function move1(){
        if(!flag){
          return;
        }
        flag=false;
         next=n-1;
     if(next<=0){
         next=imgs.length-1;
       }
     for(var i=0;i<imgs.length;i++){
         lis[i].style.background="#3e3e3e";
       }
         lis[next].style.background="#c81623";
         imgs[next].style.opacity=0;
         animate(imgs[n],{opacity:0},500);
         animate(imgs[next],{opacity:1},500,function(){flag=true});
         n=next;
    }
    tp.onmouseover=function(){
      clearInterval(t);
    }
    tp.onmouseout=function(){
      t=setInterval(move,2000);
    }
    left.onclick=function(){
      move1();
    }
    right.onclick=function(){
      move();
    }
    for(var i=0;i<lis.length; i++){
      lis[i].index=i;
      lis[i].onmouseover=function(){
        if(this.index==n){
          return;
        }else if(this.index>n){
          for(var j=0;j<lis.length;j++){
            lis[j].style.background="#3e3e3e";
          }lis[this.index].style.background="#c81623";
          imgs[next].style.opacity= 0;
          animate(imgs[n],{opacity:0},500);
          animate(imgs[this.index],{opacity:1},500);
          n=this.index;
        }else{
           for(var j=0;j<lis.length;j++){
            lis[j].style.background="#3e3e3e";
          }
            lis[this.index].style.background="#c81623";
            imgs[next].style.opacity=0;
            animate(imgs[n],{opacity:0},300);
            animate(imgs[this.index],{opacity:1},500);
            n=this.index;
        }
      }
    }
}banner();
//楼层图片轮播  一到九楼轮播
  function lunbo(obj){
      var  box=obj;
       var imgs=$(".lq",obj);
       var left11=$(".left11",obj)[0];
       var right11=$(".right11",obj)[0];
       var dians=$(".dian",obj);
       var n=0;
       var next=0;
       var w=parseInt(getStyle(imgs[0],"width"));
       var t=setInterval(move,1000);
       var flag=true;
        function move(){
      flag=false;
        next=n+1;
        if(next>=imgs.length){
          next=0;
        }
        for(var i=0;i<imgs.length;i++){
          dians[i].style.background="#3E3E3E";
        }
        dians[next].style.background="#c81623";
        imgs[next].style.left=w+"px";
        animate(imgs[n],{left:-w},300);
        animate(imgs[next],{left:0},300,function(){flag=true});
        n=next;
    }
     function move1(){
      if(!flag){
        return;
      }
      flag=false;
      next=n-1;
      if(next<=0){
        next=imgs.length-1;
      }
      for(var i=0;i<imgs.length;i++){
          dians[i].style.background="#3E3E3E";
        }dians[next].style.background="#c81623";
        imgs[next].style.left=-w+"px";
        animate(imgs[n],{left:w},300);
        animate(imgs[next],{left:0},300,function(){flag=true});
        n=next;
     }
     box.onmouseover=function(){
           clearInterval(t);
     }
     box.onmouseout=function(){
         t=setInterval(move,2000);
     }
     for(var i=0;i<imgs.length;i++){
                  dians[i].index=i;
                  dians[i].onmouseover=function(){
                    if(this.index==n){
                        return;
                     }else if(this.index>n){
                         for(var j=0;j<imgs.length;j++){
                           dians[j].style.background="#3E3E3E";
                         } dians[this.index].style.background="#c81623";
                          imgs[next].style.left=-w+"px";
                          animate(imgs[n],{left:w},300);
                          animate(imgs[this.index],{left:0},300,function(){flag=true});
                          n=this.index;
                        }else{
                           for(var j=0;j<imgs.length;j++){
                          dians[j].style.background="#3E3E3E";
                         } dians[this.index].style.background="#c81623";
                          imgs[next].style.left=w+"px";
                          animate(imgs[n],{left:-w},300);
                          animate(imgs[this.index],{left:0},300,function(){flag=true});
                           n=this.index;
                       }
                  }
          }
          left11.onclick=function(){
               move1();
          }
          right11.onclick=function(){
               move();
          }
 }
 var box=$(".liqin");
 for(var i=0;i<box.length;i++){
  lunbo(box[i]);
 }
//楼层跳转
function tiaozhuan(){
    var box=$(".weiwei")[0];
    var floor=$(".huihui");
    var lis=$(".ls");
    // console.log(lis.length)
    var width=document.documentElement.clientWidth;
    var height=document.documentElement.clientHeight;
    var bh=box.offsetHeight;  //获取box本身的高度
    //获取楼梯到body的高度
    box.style.top=(height-bh)/2+"px";
    //通过js给楼层的高度，让楼梯居中
    var sign=true;
    for(var i=0;i<lis.length;i++){
      lis[i].index=i;
      var obj=document.documentElement.scrollTop?document.documentElement:document.body;
      //给当前所在楼层做标记
      lis[i].onclick=function(){//点击box内部的楼层
      sign=false;
      var top=floor[this.index].offsetTop;  //当前楼的高度距包含元素即文本的高度
       obj.scrollTop=top;
      //当前页面的高度赋给滚动条
      // 滚动条的高度 //兼容性
      animate(document.documentElement,{scrollTop:top},300,function(){
        sign=true;
      })
        ;
      animate(document.body,{scrollTop:top},300,function(){
        sign=true;
      });
      for(var i=0;i<lis.length;i++){
        lis[i].innerHTML=i+1+'F';
        lis[i].style.background="transparent";
        }
        lis[this.index].style.background="#c81623";
        var aa=lis[this.index].getAttribute('aa');
        lis[this.index].innerHTML=aa;
       }
        lis[i].onmouseover=function(){
          for(var i=0;i<lis.length;i++){
            lis[i].innerHTML=i+1+'F';
            lis[i].style.background='transparent';
            lis[i].style.color="#000";
          }
          lis[this.index].style.background='#c81623';
          lis[this.index].style.color="#fff";
          var xx=lis[this.index].getAttribute('aa');
           lis[this.index].innerHTML=xx;
        }




    }
    // 滚动事件 滚动到楼梯时楼梯变色  兼容性 滚动条的高度=box-窗口的高度 开关控制它的出现于消失
    var flag=true; //向下划是开关
    var flag1=true;  //向上划是开关
    window.onscroll=function(){
      if(!sign){
        return;
      }
      var obj=document.documentElement.scrollTop?document.documentElement:document.body;
      //兼容性
      for(var i=0;i<floor.length;i++){
        //判断滚动条等于什么时页面应该出现
        if(obj.scrollTop>=floor[i].offsetTop-height+100){
          // alert(obj.scrollTop);
          for(var j=0;j<lis.length;j++){
            lis[j].innerHTML=j+1+'F';
            lis[j].style.background="transparent";
            lis[j].style.color="#000";
          }
          var dd=lis[i].getAttribute('aa');
          lis[i].innerHTML=dd;
          lis[i].style.color='#c81623';
        }
        if(obj.scrollTop>=floor[0].offsetTop-height+100){
          if(flag){
            flag=false;
            animate(box,{opacity:1},300,function(){
              flag1=true;
            });
            }
        }else{
          if(flag1){
          flag1=false;
          animate(box,{opacity:0},300,function(){
            flag=true;

          });
              }
          }
      }
    }
  }
tiaozhuan();



// function tiaozhuan(){
//      var floor=$(".huihui");  //获取每一层楼
//      // console.log(floor.length)
//      var ls=$(".ls"); //获取楼层读取值
//      var box=$(".weiwei")[0];
//      var cw=document.documentElement.clientWidth;
//      var ch=document.documentElement.clientHeight;
//      var bw=box.offsetWidth;
//      var bh=box.offsetHeight;
//      var sign=true;
//      var n=0;
//      var next=0;
//      box.style.top=(ch-bh)/2+"px"; //让box垂直居中
//      function up(){
//       if(!sign){
//         return;
//       }
//       flag=false;
//       next=n+1;
//       if(next>floor.length-1){
//         next=0;
//       }
//      }






//         for(var i=0;i<ls.length;i++){
//           ls[i].index=i;
//           ls[i].onclick=function(){
//             sign=false;
//             var top=floor[this.index].offsetTop;
//             animate(document.documentElement,{scrollTop:top},300,function(){sign=true});
//             animate(document.body,{scrollTop:top},300,function(){sign=true});
//             for(var j=0;j<ls.length;j++){
//                 ls[j].style.background="transparent";
//                }
//                ls[this.index].style.background="#eb004d" ;
//                var aa=ls[this.index].getAttribute('aa');
//                ls[this.index].innerHTML=aa;
//            }
//            ls[ls.length-1].onclick=function(){
//             animate(document.documentElement,{scrollTop:0},300,function(){
//               sign=true;
//             })
//             animate(document.body,{scrollTop:0},300,function(){
//               sign=true;
//             })
//            }
//          }
//          for(var i=0;i<ls.length;i++){
//           ls[i].index=i;
//           ls[i].onmouseover=function(){
//             for(var j=0;j<ls.length;j++){
//               ls[j].style.background='#transparent';
//             }
//             ls[this.index].style.background='#eb004d';
//             var aa=ls[this.index].getAttribute('aa');
//             ls[this.index].innerHTML=aa;
//           }
//          }
//       window.onscroll=function(){
//           if(!sign){
//             return;
//           }
//           var obj=document.documentElement.scrollTop? document.documentElement:document.body;
//           for(var j=0;j<floor.length;j++){
//            if(obj.offsetTop>=floor[j].scrollTop+ch){
//               for(var i=0;i<floor.length;i++){
//                 ls[i].style.background='transparent';
//                 ls[i].innerHTML='';
//               }
//             ls[j].style.background='#eb004d';
//             var aa=ls[j].getAttribute('aa');
//             ls[j].innerHTML=aa;
//             sign=true;

//           }
//         }
//          var flag=true;
//          var flag1=true;
//        if(obj.scrollTop>=floor[0].offsetTop+ch){
//         if(flag){
//           flag=false;
//           animate(box,{opacity:1},500);
//           flag1=true;
//         }
//        }
//        else{
//         if(flag1){
//           flag1=false;
//           animate(box,{opacity:0},500);
//           flag=true;
//         }
//        }
//      }

// }
// tiaozhuan();




////天天特价轮播
function tejia(){
    var imgs=$('.djrr');
    var  tl=$('.tiantian-lunbo')[0];
    // console.log(imgs.length)

    var djr=$('.djr')[0];
    var n=0;
    var next=0;
    var h=parseInt(getStyle(imgs[0],"height"));
    var t=setInterval(move,4000);
    var flag=true;
    function move(){
      flag=false;
      next=n+1;
      if(next>=imgs.length){
        next=0;
      }
      imgs[next].style.top=-h+"px";
      animate(imgs[n],{top:h},2000);
      animate(imgs[next],{top:0},2000,function(){flag=true})
      n=next;
    }
    function move1(){
      flag=false;
      next=n-1;
      if(next<=0){
        next=imgs.length-1;
      }
      img[next].style.top=h+'px';
      animate(imgs[n],{top:-h},2000);
      animate(imgs[next],{top:0},2000,function(){flag=true})
      n=next;
    }
    tl.onmouseover=function(){
      clearInterval(t);
    }
    tl.onmouseout=function(){
      t=setInterval(move);
    }

}tejia();
























})
