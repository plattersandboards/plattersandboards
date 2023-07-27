$(document).ready(function() {
  $('.faq-question').click(function() {
    $(this).parent('.faq-item').toggleClass('active').siblings().removeClass('active');
  });
});

