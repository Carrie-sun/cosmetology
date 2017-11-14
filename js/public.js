/*
* @Author: Administrator
* @Date:   2017-08-06 15:22:53
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-11 14:17:11
*/

'use strict';
$(function(){
                var num=0;
                var timer;
                function aa(){
                    clearInterval(timer);
                    timer=setInterval(function(){
                        num+=1;
                        if(num>4){
                            num=0;
                        }
                        $('.banner2').css('left',-1349*num+'px');
                        $('.banner1 li').eq(num).addClass('current').siblings().removeClass('current');

                    },800)

                } 
                aa();
                    $('.banner').hover(function() {
                        clearInterval(timer);
                    }, function() {
                        aa();
                    }); 
                   
                $('.banner1 li').mouseenter(function(event) {
                    $(this).addClass('current').siblings('li').removeClass('current');
                    num=$(this).index();
                    $('.banner2').css('left',-1349*num+'px');
                    $('.banner2 li').eq(num).stop().fadeIn(500);
                });

            })