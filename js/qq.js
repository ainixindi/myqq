(function() {
    var jQuery = function(ele) {
        return new jQuery.fn.init(ele);
    }
    jQuery.fn = jQuery.prototype = {
        init: function(ele) {
            if (typeof ele === 'string') {
                var doms = [...document.querySelectorAll(ele)];
                for (var i = 0; i < doms.length; i++) {
                    this.push(doms[i]);
                }
            }
            return this;
        },
        push: [].push,
        swiper: function(fn) {
            for (var i = 0; i < this.length; i++) {
                this[i].addEventListener('touchstart', myFunction);
                this[i].addEventListener('touchmove', myFunction);
                this[i].addEventListener('touchend', myFunction);
            }
            var startx, endx, starty, endy;
            var flag = false;

            function myFunction(e) {
                switch (e.type) {
                    case 'touchstart':
                        startx = e.touches[0].pageX;
                        starty = e.touches[0].pageY;
                        break;
                    case 'touchmove':
                        endx = e.touches[0].pageX;
                        endy = e.touches[0].pageY;
                        flag = 'true';
                        break;
                    case 'touchend':
                        var movex = endx - startx;
                        var movey = endy - starty;
                        flag == 'true' ? fn.call(this, e, movex) : "";
                        break;
                }
            }
        },
        tab: function(one) {
            var parent = document.querySelector('.chat-frame');
            parent.onclick = function(e) {
                var ev = e || window.event,
                    tar = ev.target || ev.srcElement;
                if (tar.className === 'one') {
                    console.log('取消置顶')
                } else if (tar.className === 'two') {
                    console.log('标记未读');
                } else if (tar.className === 'three') {
                    tar.parentNode.parentNode.parentNode.removeChild(tar.parentNode.parentNode)
                }
            }
        }
    }
    jQuery.fn.init.prototype = jQuery.fn;
    window.$ = window.jQuery = jQuery;
})()