$('#fade ul li').hide();
$('#fade ul li:first-child').show();
setInterval(function () {
  $('#fade ul li:first-child')
    .fadeOut(3000)
    .next()
    .fadeIn(3200)
    .end()
    .appendTo('#fade ul');
}, 4500);

document.addEventListener('DOMContentLoaded', function () {
  var gnbItems = document.querySelectorAll('.gnb_wrap > li');

  gnbItems.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      var submenu = this.querySelector('.submenu');
      if (submenu) {
        submenu.style.display = 'block';
      }
    });

    item.addEventListener('mouseleave', function () {
      var submenu = this.querySelector('.submenu');
      if (submenu) {
        submenu.style.display = 'none';
      }
    });

    // 추가: 서브메뉴에서 마우스가 떠나지 않게 처리
    if (item.querySelector('.submenu')) {
      item
        .querySelector('.submenu')
        .addEventListener('mouseenter', function () {
          this.style.display = 'block';
        });

      item
        .querySelector('.submenu')
        .addEventListener('mouseleave', function () {
          this.style.display = 'none';
        });
    }
  });
});
