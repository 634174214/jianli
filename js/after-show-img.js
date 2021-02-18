var $dialog = $('#dialog');
var $dialogImg = $('#dialog-img');


$('#after-list').on('click', 'img', function() {
    var imgsrc = this.src;
    var $link = $('<a href="' + imgsrc + '" class="dialog-link">查看原图</a>')
    // 如果是竖着
    var isV = $(this).data('shu');
    if(isV) {
        $dialogImg.addClass('shu')
    } else {
        $dialogImg.addClass('heng')
    }
    $dialogImg.attr('src', imgsrc);
    $dialog.append($link);
    $dialog.fadeIn();
});

$('#dialog-close').on('click', function() {
    $dialog.fadeOut();
    $dialog.find('a').remove();
    $dialogImg.removeAttr('class');
});