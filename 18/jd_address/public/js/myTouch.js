/*
 * @Author: 好哥哥
 * @Date: 2020-06-19 11:06:05
 * @LastEditors: 好哥哥
 * @LastEditTime: 2020-06-19 15:22:35
 * @Description: file content
 */
var myTouch = {

    /* 点击事件的封装
     * el 点击的元素
     * callback 点击之后执行的回调函数
     */
    tap: function (el, callback) {

        var isMove = false; //表示没有移动
        var sTime, eTime; //保存开始和结束的触摸时间
        el.addEventListener("touchstart", function () {
            //记录开始触摸的时间
            sTime = new Date();
        }, {
            passive: true
        })

        el.addEventListener("touchmove", function () {
            //触发移动  isMove设为true
            isMove = true;
        }, {
            passive: true
        })

        el.addEventListener("touchend", function (e) {
            //记录结束触摸的时间
            eTime = new Date();
            if (!isMove && eTime - sTime < 150) {
                callback && callback(e);
            }

            //回归状态
            isMove = false;
            sTime = 0;
            eTime = 0;
        }, {
            passive: true
        })
    },

    /* 滑动事件的封装
     * el 滑动的元素
     * callback 滑动之后执行的回调函数
     * dir滑动的方向
     */
    swipe: function (el, dir, callback) {
        var staPos, endPos; //用来保存开始和结束的触点位置
        el.addEventListener("touchstart", function (e) {
            //1.记录触摸开始的位置
            staPos = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            }
        }, {
            passive: true
        })

        el.addEventListener("touchmove", function (e) {
            //2.移动过程中更新触摸结束的位置
            endPos = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            }
        }, {
            passive: true
        })

        el.addEventListener("touchend", function (e) {
            // console.log(judge(staPos, endPos));
            if (endPos && dir === judge(staPos, endPos)) { //传进来的方向和判断出的方向一致 执行回调

                callback && callback(e);
            }
        }, {
            passive: true
        })

        function judge(staPos, endPos) {
            //1.判断是上下方向还是左右方向
            // if (Math.abs(endPos.y - staPos.y) > Math.abs(endPos.x - staPos.x)) { //上下方向
            //     if (endPos.y - staPos.y > 0) {
            //         return "down";
            //     } else {
            //         return "up";
            //     }

            // } else { //左右方向
            //     if (endPos.x - staPos.x > 0) {
            //         return "right";
            //     } else {
            //         return "left";
            //     }

            // }

            return Math.abs(endPos.y - staPos.y) > Math.abs(endPos.x - staPos.x) ? endPos.y - staPos.y > 0 ? "down" : "up" : endPos.x - staPos.x > 0 ? "right" : "left";

        }

    }


}