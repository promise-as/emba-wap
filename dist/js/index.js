'use strict';

$(function () {
  theaMsForm();

  // 学历
  $('.degree .cont-list li').each(function (index) {
    $(this).click(function () {
      $(this).addClass('active').siblings().removeClass('active');
      $($('.degree .detail-item')[index]).addClass('active').siblings().removeClass('active');
    });
  });

  // dataWrap: 数据容器, submitData: 提交的数据, mergeData: 合并数据
  function radioChoice(dataWrap, submitData) {
    dataWrap.find('li span').click(function () {
      var aimEle = $(this);
      aimEle.addClass('active').siblings().removeClass('active');
      aimEle.parent().find('.user-con').each(function () {
        $(this).val($(this).siblings('.active').html());
      });
      var mergeData = '';
      for (var n = 0; n < dataWrap.find('li').length; n++) {
        mergeData += dataWrap.find('li').eq(n).find('.active').text() + '、';
      }
      submitData.val(mergeData);
    });
  }
  radioChoice($('.invite-data'), $('#inviteData'));
  // ele: 目标元素, c: 关闭按钮, f: 第一次是多少毫秒显示,
  // a: 第二次是第一次之后多少毫秒显示, n: 一共显示多少次, m: 遮罩层
  function popupHandle(ele, c, f, a, n, m) {
    var $par = $(ele);
    var $num = 1;
    var $m = $(m);
    popupTc(f);
    $(c).click(function () {
      $par.hide();
      $m.hide();
      if ($num < n) {
        popupTc(a);
      }
      $num++;
    });

    function popupTc(d) {
      setTimeout(function () {
        $par.fadeIn(300);
        $m.fadeIn(300);
      }, d);
    }
  }
  popupHandle('.invite-popup', '.invite-popup .close', 30000, 40000, 2, '.mask');

  // 点击 免费试听 预约试听弹窗 显示
  $('.audition-btn').click(function () {
    $('.mask').show();
    $('.appoint-popup').show();
  });

  $('.close').click(function () {
    $('.mask').hide();
    $('.appoint-popup').hide();
  });
});