// 初始化页面的各项DOM
var initPage = {
    // 顶部轮播
    infoBgTurn: function() {
        var $infoBgs = $('#info-bg span');
        var fadeTime = 600;
        $infoBgs.eq(0).fadeIn(fadeTime);
        var infoTimer = setInterval(function() {
            $infoBgs.each(function(index, item) {
                if($(item).is(':visible')) {
                    $(item).fadeOut(fadeTime);
                    if(index ===  $infoBgs.length - 1) {
                        $infoBgs.eq(0).fadeIn(fadeTime);
                    } else {
                        $(item).next().fadeIn(fadeTime)
                    }
                    return false;
                }
            });
        }, 5000);
    },
    // 计算微信二维码显示位置
    setErwePlace: function(ispc, el) {
        if(ispc) {
            var left = Math.floor(el.offset().left),
                top = Math.floor(el.offset().top);
            $('#erwe-wrapper').css({
                'left': left + 180,
                // 由于添加css动画导致top值计算错误 这里使用固定值
                'top': 187
            });
        }
    },
    // 向skill-ul中插入li
    addSkillItem: function() {
        // 定义结构模板
        var template = function(label, color) {
            return $('<li class="item"><div class="label" style="color: ' + color +';">' + label +'</div><span class="progress" style="background-color: ' + color + ';"></span><span class="percent"></span></li>');
        };
        $.each(skillCode, function(index) {
            var $li = template(skillCode[index].label, skillCode[index].color);
            $('#skill-code').append($li);
        });
        $.each(skillDesign, function(index) {
            var $li = template(skillDesign[index].label, skillDesign[index].color);
            $('#skill-design').append($li);
        });
    },
    // 前端全部项目向其中插入dom结构 每4个去除margin-left
    setAllWorksItem: function() {
        // ul外部的结构
        var templateWrap = function(label, inhtml, qrboxshow) {
            // 如果二维码不需要开始就显示 做一个字段判断 专门为小程序展示特定的
            var qrshow = qrboxshow ? 'qrshow' : '';
            return '<aside class="row"><h4 class="works-headline">' + label + '</h4><ul class="works-list ' + qrshow + '">' + inhtml + '</ul></aside>'
        };
        // li的结构
        var templateInner = function(opt, nomargLeft) {
            return '<li class="' + nomargLeft + '"><a href="' + opt.href +'" target="_blank" class="linkto"><div class="imgbox"><img src="' + opt.src + '" class="allwork-pic"><em class="QRcode"><cite class="work-qr"><img src="' + opt.qr + '"></cite><cite class="text">扫码 / 点击 查看详情</cite></em></div><p class="name">' + opt.name + '</p></a></li>'
        };
        var $worksInner = $('#all-webworks-inner');
        // 全部结构字符串
        var allHtml = '';
        $.each(webALLWorks, function(index, workItem) {
            var _innerHtml = '';
            $.each(workItem.data, function(j, item) {
                var hasnoLeft = '';
                if ( j % 4 === 0) {
                    hasnoLeft = 'nomargLeft';
                }
                // 构建每个data中的字符串
                _innerHtml = _innerHtml + templateInner(item, hasnoLeft);
            });
            // 构建包含外部aside的字符串
            allHtml = allHtml + templateWrap(workItem.label, _innerHtml, workItem.qrclickShow);
        });
        // 将整体插入
        $worksInner.append($(allHtml));
        // 点击展开/折叠下方的List
        var $heads = $worksInner.find('.works-headline');
        $heads.on('click', function() {
            var $nextList = $(this).next();
            var isFold = $(this).hasClass('fold');
            if(isFold) {
                $nextList.slideDown();
                $(this).removeClass('fold');
            } else {
                $nextList.slideUp();
                $(this).addClass('fold');
            }
        });
    }
} 
// 生成一个随机的区间整数值
var getRandomNum = function(min, max) {
    var num = parseInt(Math.random() * (max - min) + min);
    return num;
};


// 技能条增长动画执行
$.fn.barGrow = function(options) {
    var config = $.extend({
        speed: 2000,   // 动画执行时间
        maxWidth: 300, // 最长
        percent: 100   // 变化的百分比值
    }, options);
    var $progress = $('.progress', this);
    var $percent = $('.percent', this);
    var progressWidth = Math.floor(config.maxWidth * (config.percent / 100));
    $progress.animate(
        {
            // 动画变化的属性
            width: progressWidth
        },
        {
            // 动画的持续时间
            duration: config.speed,
            // 记录动画进度没完成一次返回一个值
            step: function(currentWidth) {
                var nowPercent = Math.ceil(currentWidth / config.maxWidth * 100);
                // isNaN检测值是否是数值
                if(isNaN(nowPercent)) {
                    nowPercent = 0;
                }
                $percent[0].innerHTML = nowPercent + '%';
            }
        }
    );
};
// 执行技能值增长的动画
var skillBarGrow = function(ispc) {
    var $codeItems = $('.item', '#skill-code');
    var $designItems = $('.item', '#skill-design');
    var progressMaxWidth = ispc ? 315 : (function() {
        var itemWidth = $codeItems.eq(0).width();
        // 标签名：HTML与百分比的宽度是70与50在手机版上 这里直接计算就好，注意结尾要加()直接执行函数
        var retWidth = itemWidth - 70 - 50;
        return retWidth;
    })();
    this.codeGrow = function() {
        $codeItems.each(function(index, codeitem) {
            // 生成执行1000ms-2000ms随机时间
            var durationTime = getRandomNum(1000, 2000);
            $(codeitem).barGrow({
                speed: durationTime,
                maxWidth: progressMaxWidth,
                percent: skillCode[index].percent
            });
        });
    }
    this.designGrow = function() {
        $designItems.each(function(index, designitem) {
            // 生成执行随机时间
            var durationTime = getRandomNum(1000, 2000);
            $(designitem).barGrow({
                speed: durationTime,
                maxWidth: progressMaxWidth,
                percent: skillDesign[index].percent
            });
        });
    }
}

// 获取每一个section的高度
var getSectionsTop = function(arr, scrollOffset, ispc) {
    var ret = [];
    // 根据是否是pc做不同调整
    var litescroll = ispc ? 150 : 500;
    $.each(arr, function(index, item) {
        var itemTop = Math.ceil($(item).offset().top) + scrollOffset;
        // 对前端、设计作品的距离顶部距离单独做调整
        switch(true) {
            case index === 3:
                itemTop = itemTop + litescroll;
                break;
            case index === 4:
                itemTop = itemTop + litescroll;
                // 对最后一个手机做调整
                itemTop = ispc ? itemTop : (itemTop + 200);
                break;
        }
        ret.push(itemTop);
    });
    return ret;
};

// 判断pc手机
var browser = function() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ['Android', 'iPhone',
        'SymbianOS', 'Windows Phone',
        'iPad', 'iPod'
    ];
    var flag = true;
    for (var i = 0; i < Agents.length; i++) {
        if (userAgentInfo.indexOf(Agents[i]) != -1) {
            flag = false;
            break;
        }
    }
    return flag;
};
// 获取nav每一个li距离父元素左边的距离
var getNavListItemsLeft = function($navlis) {
    var ret = [];
    $navlis.each(function(index, item) {
        var left = item.offsetLeft;
        ret.push(left);
    });
    return ret;
};

// 前端开发展示-所有相关方法
var frontendMethods = function() {
    var $wrap = $('#Frontend-content');
    var $spans = $('#tabs-bar span');
    var $slides = $wrap.find('.swiper-slide');
    var _self = this;
    var containerHeight = $('FrontendShow').height();
    // 初始化时，渲染初始数据
    this.first = function() {
        // https://segmentfault.com/q/1010000004474036 JQ中实现一次性渲染
        var contents = webBetter[0].data,
            qrclickShow = webBetter[0].qrclickShow;
        this.setSlide(contents, $slides, qrclickShow);
    }
    // 切换tabs选项卡
    this.tabsClick = function($this, swiper, ispc) {
        if ($this.hasClass('active')) {
            return;
        }
        // 这里的this指向这个构造函数，
        var index = $this.index();
        // 对应点击的下标 找到webbetter数组中对应的data数组，否则这里需要用for-in
        var contents = webBetter[index];
        var contentval = contents.data,
            qrclickShow = contents.qrclickShow,
            contentKey = contents.label;
        
        $this.siblings().removeAttr('class');
        $this.addClass('active');
        // 开启动画
        $('#FrontendShow').fadeOut(500 , function() {
            $(this).fadeIn(500);
        });
        // 如果手机启动swiper情况下,因为替换元素会有闪屏bug，这里用透明度优化，延迟450ms执行替换元素
        setTimeout(function() {
            if (swiper) {
                $.each(contentval, function(j, item) {
                    var sildeHtml = _self.template(item, qrclickShow);
                    swiper.getSlide(j).html(sildeHtml);
                    // 回到第一帧
                    swiper.swipeTo(0, 800, false);
                });
            } else {
                $slides.empty();
                // 这里避免作用域的问题 这里this指向构造函数
                _self.setSlide(contentval, $slides, qrclickShow);
            }
            // 必须再每次切换之后执行一次组织默认事件的点击 未完成
            _self.hrefStop(ispc);
        },450);
    }
    // pc-计算前端开发块选项卡总宽
    this.setTabsWidth = function() {
        var tabsWidth = 0;
        $spans.each(function(index, item) {
            // 为兼容IE 在IE上使用获取宽度的方法不奏效，所以采用去掉padding 在根本元素宽度上加上一个值60，撑起宽度，再计算
            var _width = Math.ceil(item.clientWidth) + 60;
            $(item).css('width', _width);
            // 左右border = 2px
            tabsWidth = tabsWidth + _width + 2;
        });
        // 因为margin-left =15
        tabsWidth = tabsWidth + ($spans.length - 1) * 15;
        $('#tabs-bar').css('width', tabsWidth);
    },
    // pc鼠标移动
    this.detailhover = function() {
        $('.linkto').hover(
            function() {
                $('.QRcode', this).fadeIn(400);
                $(this).addClass('active');
            },function() {
                $('.QRcode', this).fadeOut(400);
                $(this).removeClass('active');
            }
        );
    }
    // 手机左右箭头的点击
    this.arrowClick = function(FrontendWorks) {
        $('#Frontend-left').on('click', function(e) {
            e.preventDefault();
            FrontendWorks.swipePrev();
        });
        $('#Frontend-right').on('click', function(e) {
            e.preventDefault();
             FrontendWorks.swipeNext();
        });
    }
    // 阻止a标签跳转
    this.hrefStop = function(ispc) {
        // 当为小程序时候 点击阻止a标签跳转并显示二维码
        $('.hrefstop-hook').on('click', function() {
            if (!ispc) {
                var $qrbox = $(this).find('.QRcode');
                $qrbox.fadeIn();
            }
            return false;
        });
        $('.close').on('click', function() {
            $(this).parent().fadeOut();
            return false;
        });
    }
}
frontendMethods.prototype = {
    init: function(ispc) {
        var _self = this;
        var frontendSwiper = null;
        this.first();
        if (ispc) {
            this.setTabsWidth();
            this.detailhover();
        } else {
            // 手机-启动swiper
            frontendSwiper = $('#FrontendShow').swiper({
                pagination: '.pagination',
                autoplay : false,
                calculateHeight:true,
                loop: false
            });
            // 需要传启动的swiper做参数
            this.arrowClick(frontendSwiper);
        }
        $('#tabs-bar').on('click', 'span', function() {
            var $this = $(this);
            // 注意这里this指向问题，必须传入$this指向点击的元素
            // 不同于$('#tabs-bar').on('click', 'span', this.tabsClick)，这样函数中this指向点击元素，而不是构造函数
            _self.tabsClick($this, frontendSwiper, ispc);
            if (ispc) {
                // 点击tab的时候dom更新设置了一个450ms的延迟，所以这里也要加一个延迟，否则鼠标移动没反映
                setTimeout(_self.detailhover, 500);
            }
        });
    },
    // 定义结构模板
    template: function(opt, qrclickShow) {
        // 如果手机版点击出现二维码不跳转的情况 
        var hrefStopCls = qrclickShow ? 'hrefstop-hook' : '';
        return '<a href="'+ opt.href + '" target="_blank" class="linkto ' + hrefStopCls + '"><dl class="detail"><dt class="imgbox"><img src="'+ opt.src + '" class="work-pic"><em class="QRcode"><cite class="work-qr"><img src="'+ opt.qr +'"></cite><cite class="text">扫码 / 点击 查看详情</cite><cite class="icon close"></cite></em></dt><dd class="name">'+ opt.name + '</dd></dl></a>';
    },
    // 设置slide中内容,仅用于pc版
    setSlide: function(contents, $slides, qrclickShow) {
        var _self = this;
        $.each(contents, function(index, obj) {
            var item = _self.template(obj, qrclickShow);
            $slides.eq(index).append($(item));
        });
    }
}

// 开启设计作品的瀑布流
var designWaterfall = function(screenHeight, ispc) {
    var $galleryEnd = $('#gallery-end'),
        $gallery = $('#gallery-wrapper');
    var _self = this;
    var documentH = screenHeight;
    // 列数是pc=4 手机=2
    var columns = ispc ? 4 : 2;
    var allLens = designWorks.length;
    // 加载的起点
    this.loadStart = 0; 
    // 每次加载的个数 pc= 20 手机=10
    this.loadStep = ispc ? 20 : 10;
    this.init = function() {
        var start = _self.loadStart,
            step = _self.loadStep;
        // 更改加载的起点，这里要先执行赋值，否则当最后阶段，会一直等于allLens
        _self.loadStart = start + step;
        // console.log(start)
        if(start <= allLens) {
            if( (start + step) > allLens ) {
                step = allLens - start;
            }
            _self.setDesignItem(start, step);
            _self.waterfall();
        } else {
            if($galleryEnd.is(':hidden')) {
                $('#gallery-end').fadeIn('slow');
                $('#footer').show();
            }
        }
        return;
    }
    // 设计作品dom动态插入
    this.template = function(opt) {
        return '<li class="pin"><div class="box"><img src="' + opt.show + '" class="thumb"><h1>' + opt.label + '</h1><p>' + opt.desc + '</p></div></li>';
    }
    // 给瀑布流添加项目
    this.setDesignItem = function(start, step) {
        var inHtml = '';
        // 求出结束值
        var end = start + step;
        $.each(designWorks, function(index, designItem) {
            if(index >= start && index < end) {
                inHtml = inHtml + _self.template(designItem);
            }
        });
        $gallery.append($(inHtml));
    }
    this.waterfall = function() {
        var $aPin = $( "#gallery-wrapper>li" );
        var col = columns;//每行中能容纳的pin个数 /列数

        var pinHArr=[];//用于存储 每列中的所有块框相加的高度。
        $('#gallery-wrapper img').on('load',function(){
            $aPin.each( function( index, value ){
                var pinH = $aPin.eq( index ).height();
                if( index < col ){
                    pinHArr[ index ] = pinH; //第一行中的num个块框pin 先添加进数组pinHArr
                }else{
                    var minH = Math.min.apply( null, pinHArr );//数组pinHArr中的最小值minH
                    var minHIndex = $.inArray( minH, pinHArr );
                    $( value ).css({
                        'position': 'absolute',
                        'top': minH + 15,
                        'left': $aPin.eq( minHIndex ).position().left
                    });
                    //数组 最小高元素的高 + 添加上的aPin[i]块框高
                    pinHArr[ minHIndex ] += $aPin.eq( index ).height() + 15;//更新添加了块框后的列高
                }
            });
            var max = Math.max.apply(null, pinHArr)
            $gallery.css('height', max)
        });
    }
    this.checkscrollside = function(scrollTop) {
        var $aPin = $( "#gallery-wrapper>li" );
        var lastPinH = $aPin.last().offset().top + Math.floor($aPin.last().height()/2);//创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
        return (lastPinH < scrollTop + documentH ) ? true : false;//到达指定高度后 返回true，触发waterfall()函数
    }
};


// 实例化设计作品
var designWorksMethods = function(ispc) {
    var $title = $('.design-works-title', '#design-works');
    var $desc = $('.desc', '#design-works');
    var $swiperWrap = $('.design-swiper', '#design-works');
    var $designWorks = $('#design-works');
    var $close = $('.close-hook', '#design-works');
    var grabAllow = ispc ? true : false;
    // 开启滚轮后 在pc上当只有一张图片的时候 会有bug 滚轮滚动图片会一直滚 所以pc取消loop
    var slideLoop = ispc ? false : true;
    // 这里仅仅初始化一次swiper即可 使用swiper2自带的方法增减元素
    var designSwiper = $('#design-swiper').swiper({
        pagination : '.design-pagination',
        calculateHeight: false,
        noSwiping : true,
        mousewheelControl : true,
        // 禁止鼠标拖动
        onlyExternal : grabAllow,
        noSwipingClass : 'stop-swiping',
        loop: slideLoop
        
    }); 

    this.template = function(opt) {
        var imgCls = opt.isvertical ? 'imgis-vertical' : 'imgis-horizontal';
        return '<img src="' + opt.src + '" class="' + imgCls + '">'
    }
    // 展示设计类作品
    this.designWorkShow = function(index) {
        // 这里要先显示否则在手机浏览器上无法运行，待测试用visibility：hidden
        $designWorks.fadeIn();
        // 这里this指代designWorksMethods
        var _self = this;
        var worksItem = designWorks[index];
        $title.text(worksItem.label);
        $desc.text(worksItem.desc);
        // 遍历图片数组
        $.each(worksItem.images, function(index, imgitem) {
            // 创建slide时要添加的class
            var slideCls = 'swiper-slide';
            // 当仅有一张图片时，给slide添加不可拖动的样式
            if (worksItem.images.length <= 1) {
                $swiperWrap.addClass('onlyone');
                slideCls = 'swiper-slide stop-swiping'
            } 
            var slide = _self.template(imgitem);
            // 创建slide收添加class名
            var newSlide = designSwiper.createSlide(slide, slideCls);
            newSlide.append();
        });
        // 添加完元素重新初始化一下
        designSwiper.reInit();
        // 配置为loop必须手动控制滚动到0页
        designSwiper.swipeTo(0, 0, false);
        // console.log(designSwiper)
    }
    // 关闭
    $close.on('click', function() {
        // 关闭时删除所有slide
        designSwiper.removeAllSlides();
        if ($swiperWrap.hasClass('onlyone')) {
            // 避免单张图片关闭时 会出现箭头情况，使用定时器延迟执行,fadeout默认400ms
            setTimeout(function() {
                $swiperWrap.removeClass('onlyone');
            }, 400);
        }
    });
    // 箭头点击
    $('#design-left').on('click', function(e) {
        e.preventDefault();
        designSwiper.swipePrev();
    });
    $('#design-right').on('click', function(e) {
        e.preventDefault();
        designSwiper.swipeNext();
    });
};
AOS.init({
    easing: 'ease-out-back',
    duration: 500
});

// 后台作品展示、弹窗
var afterEndMethods = function() {
    function After() {
        this.$list = $('.afterend-list').clone().addClass('hide').removeAttr('id');
        $('body').append(this.$list);

        // 插入后获取全部的点击交互按钮
        this.$showBtn = $('.show-after-imgs');

        this.init();
    }
    After.prototype = {
        init: function() {
            this.showImgs();
            this.lookall();
        },
        getOrder: function(order) {
            var res = '';
            switch(order) {
                case 1:
                    res = {
                        title: '信网直播后台',
                        url: 'after-show-img/qdxin-live.html'
                    };
                    break;
                case 2:
                    res = {
                        title: '信网应用后台',
                        url: 'after-show-img/qdxin-app.html'
                    };
                    break;
                default:
                    res = {
                        title: '其他后台',
                        url: ''
                    }    
            }
            return res;
        },
        showImgs: function() {
            var self = this;
            this.$showBtn.on('click', function() {
                var order = $(this).data('imgorder');
                var resObj = self.getOrder(order);
                console.log(resObj)
                layer.open({
                    type: 2,
                    title: resObj.title,
                    shadeClose: true,
                    shade: 0.8,
                    area: ['80%', '90%'],
                    content: resObj.url //iframe的url
                }); 
            });
        },
        lookall: function() {
            var self = this;
            $('#afterend-lookall').on('click', function() {
                layer.open({
                    type: 1,
                    title: '全部案例',
                    shadeClose: true,
                    shade: 0.8,
                    area: ['80%', '90%'],
                    content: self.$list
                }); 
            });
        }
    }

    return new After();
}();

$(function() {
     // 判断浏览器
    var isPc = browser();
    // 滚动值偏移量，根据pc或者手机有所区别
    var scrollOffset = isPc ? 350 : 100;
    var $navContact = $('#navicon-content li');
    var $addwexin = $('.addwexin').eq(0);
    var $cover = $('#cover');
    // 导航当前的索引
    var navActiveIndex = 0;
    // 所有的主要块
    var sections = ['#info', '#works', '#skill', '#Frontend', '#afterend', '#design'];
    // 每个主要块距离页面顶部距离的数组
    var sectionsTop = getSectionsTop(sections, scrollOffset, isPc);
    // 菜单是否打开
    var navOpened = false;
    // 获取全部的导航的li
    var $navLis = $('#nav-list li');
    // 获取导航下面的移动横线
    var $navline = $('#navline');
    var $nav = $('#nav');
    // 获取nav距离顶部的高度
    var navTop = $nav.offset().top;
    // nav-list每个li距离左边的距离
    var navListItemsLeft = getNavListItemsLeft($navLis);
    // 获取skill到顶部的距离
    var skillTop = {
        code: $('#skill-code').offset().top,
        design: $('#skill-design').offset().top
    };
    var $bigImgwrap = $('#bigimg'),
        bigImg = $bigImgwrap.find('img').get(0);
    // 学历认证按钮
    var checkBen = 'img/renzheng-ben.jpg',
        checkZhuan = 'img/renzheng-zhuan.jpg',
        $schoolCheck = $('.school-check'),
        $checkSchool = $('#check-school'),
        $checkSchoolImg = $('img', $checkSchool).eq(0);
    // 屏幕高度
    var screenHeight = $(window).height();
    initPage.infoBgTurn();
    initPage.setErwePlace(isPc, $addwexin);
    initPage.addSkillItem();
    initPage.setAllWorksItem();
    // info 微信项目 鼠标移动
    $addwexin.hover(
        function() {
            if(isPc) {
                $('#erwe-wrapper').fadeIn();
                $(this).addClass('active');
            }
        },
        function() {
            if(isPc) {
                $('#erwe-wrapper').fadeOut();
                $(this).removeClass('active');
            }
        }
    );
    // 手机二维码点击显示
    $('.addwexin-hook').on('click', function() {
        if(isPc) {
            return;
        }
        $('#erwe-wrapper').addClass('moveIn');
        // 隐藏菜单按钮,如果使用hide无论样式还是style 恢复时都会触发一遍动画所以使用透明度
        $('#navbtn').css('opacity', 0);
        return false;
    });
    // 二维码点击关闭
    $('#erwe-wrapper').on('click', function() {
        if(!isPc) {
            $('#erwe-wrapper').removeClass('moveIn');
            $('#navbtn').css('opacity', 1);
        }
    });
    // pc-nav 右侧图标鼠标移动
    $('#nav-icon li').hover(
        function(e) {
            navActiveIndex = $(this).index();
            $navContact.eq(navActiveIndex).fadeIn()
            $(this).addClass('active');
        },
        function() { 
            $(this).removeClass('active');
            $navContact.hide()
        }
    );
    // 在其中移动鼠标不会隐藏掉内容框
    $('#navicon-content').hover(
        function() {
            $navContact.eq(navActiveIndex).show();
        },
        function() {
            $navContact.eq(navActiveIndex).hide();
        }
    );
    // 导航点击
    $navLis.on('click', function() {
        var index = $(this).index();
        var left = navListItemsLeft[index];
        var scrollTo = sectionsTop[index];
        // pc 手机分别处理
        var scrollY = scrollTo - scrollOffset;
        // 因为使用滚动驱动active的样式赋值以及横线的移动，所以这里就不需要再给单独添加点击事件了，点击只需要驱动window滚动即可
        // $(this).addClass('active').siblings('li').removeClass('active');
        // $navline.css('transform', 'translate(' + left +'px,0)');
        $('html,body').animate({scrollTop: scrollY});
    });
    // 手机菜单按钮点击
    $('#navbtn').on('click', function() {
        var $that = $(this);
        if(!navOpened) {
            $nav.addClass('moveIn');
            $cover.fadeIn();
            $that.attr('class', 'navbtn m-nav-close');
            navOpened = true;
        } else {
            $nav.removeClass('moveIn');
            $cover.fadeOut();
            $that.attr('class', 'navbtn m-nav-gonormal');
            // 动画执行1s 所以等1s的时候执行更换样式，这里用监听动画执行结束不合适
            setTimeout(function() {
                $that.attr('class', 'navbtn m-nav-normal');
            }, 700);
            navOpened = false;
        }
    });
    
    // 启动前端开发所有操作
    var  frontend= new frontendMethods().init(isPc);
    // 点击关闭按钮 前端作品&设计作品用到&
    $('.close-hook').on('click', function() {
        $(this).parent().fadeOut();
        $cover.fadeOut();
    });
    // 查看全部前端作品
    $('#Frontend-lookall').on('click', function() {
        $('#all-webworks').fadeIn();
    });
    // 启动设计作品的瀑布流
    var water = new designWaterfall(screenHeight, isPc);
    water.init();
    // 设计作品展示
    var designworks = new designWorksMethods(isPc);
    $('#gallery-wrapper').on('click', 'li', function() {
        var index = $(this).index();
        designworks.designWorkShow(index)
    });
    // skill技巧滚动触发
    var skillGrow = new skillBarGrow(isPc);
    // 显示大弹窗
    $('#design-swiper').on('click', '.swiper-slide', function() {
        var nowSrc = $(this).find('img').eq(0).attr('src');
        if(isPc) {
            window.open(nowSrc, "_blank");   
        } else {
            bigImg.src = nowSrc;
            $bigImgwrap.fadeIn();
        }
    });
    $bigImgwrap.on('click', '.bigcloser', function() {
        $bigImgwrap.fadeOut();
    });

    // 向下滚动监听
    $(window).on('scroll', function() {
        // html body高度不能设置为100%否则滚动不起作用
        var scrollTop = $(window).scrollTop();
        $.each(sectionsTop, function(index, item) {
            if (item > scrollTop) {
                var left = navListItemsLeft[index];
                $navLis.removeClass('active');
                $navLis.eq(index).addClass('active');
                $navline.css('transform', 'translate(' + left +'px,0)');
                return false;
            }
        });
        // 如果在pc下， 对nav进行固定
        if (isPc) {
            if(scrollTop >= navTop && !$nav.hasClass('fixed')) {
                $nav.addClass('fixed');
                $('#works').addClass('navFixTop');
            } else if(scrollTop < navTop && $nav.hasClass('fixed')) {
                $nav.removeClass('fixed');
                $('#works').removeClass('navFixTop');
            }
        }
        // 为配合手机分别对skill下progress做滚动监测
        if ( (scrollTop + screenHeight) > skillTop.code && !$('#skill-code').hasClass('hasgrowed') ) {
            skillGrow.codeGrow();
            $('#skill-code').addClass('hasgrowed');
        }
        if ( (scrollTop + screenHeight + 100) > skillTop.design && !$('#skill-design').hasClass('hasgrowed') ) {
            skillGrow.designGrow();
            $('#skill-design').addClass('hasgrowed');
        }
        // 每次判断设计瀑布是否需要加载
        if(water.checkscrollside(scrollTop)) {
            water.init();
        }
    });

    // 学历认证弹窗
    $schoolCheck.on('click', function(e) {
        e.stopPropagation();
        var clsname = $.trim(this.className.split('school-check')[1]);
        switch(clsname) {
            case 'zhuan':
                $checkSchoolImg.attr('src', checkZhuan);
                break;
            case 'ben':
                $checkSchoolImg.attr('src', checkBen);
                break;
        }
        $checkSchool.fadeIn();
        if(isPc) {
            $cover.fadeIn();
        }
    });

    // 海大显示非全日制tips
    var haidaTips = null;
    $('#haida-school').on('mouseenter', function() {
        haidaTips = layer.tips('非全日制学历', this, {
            tips: 2
        });
    });
    $('#haida-school').on('mouseleave', function() {
        layer.close(haidaTips);
    });

});