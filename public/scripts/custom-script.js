$(document).ready(function () {
  // Dropdown
  $('.dropdown__toggle').each(function () {
    const el = $(this);

    el.on('click', function (e) {
      e.stopPropagation();
      $('.dropdown').removeClass('show');
      el.closest('.dropdown').addClass('show');
    });
  });

  // Products Layout
  $('.products-layout-switcher button').on('click', function () {
    const el = $(this);
    const type = el.attr('data-type');

    $('.products-layout-switcher button').removeClass('active');
    el.addClass('active');

    if (type === 'list') {
      $('.products').hide();
      $('.products-table').fadeIn(300);
      $('.sort-by, .sort-by + .v-separator').css({
        visibility: 'hidden',
        opacity: 0,
      });
    } else {
      $('.products').fadeIn(300);
      $('.products-table').hide();
      $('.sort-by, .sort-by + .v-separator').css({
        visibility: 'visible',
        opacity: 1,
      });
    }
  });

  // Sidepanel Close
  $('.side-panel__close').each(function () {
    const el = $(this);
    el.on('click', function () {
      el.closest('.side-panel').removeClass('active');
    });
  });

  // Tabs
  $('.custom-tabs__links a').each(function () {
    const el = $(this);
    el.on('click', function (e) {
      e.preventDefault();
      const target = el.attr('href');
      el.closest('.custom-tabs__links').find('a').removeClass('active');
      el.addClass('active');
      el.closest('.custom-tabs').find('.custom-tabs__content>div').hide();
      $(target).fadeIn(300);
    });
  });

  // Accordion
  $('.accordion .accordion__title').each(function () {
    const el = $(this);
    el.on('click', function () {
      if (el.hasClass('active')) {
        $('.accordion__title').removeClass('active');
        $('.accordion__content').slideUp(300);
        return;
      }
      $('.accordion__title').removeClass('active');
      el.addClass('active');
      $('.accordion__content').slideUp(300);
      el.closest('.accordion').find('.accordion__content').slideDown(300);
    });
  });

  // Show Tags Panel
  $('.show-panel').each(function () {
    const el = $(this);
    el.on('click', function (e) {
      e.stopPropagation();
      const target = el.attr('data-target');
      if ($(target).hasClass('active')) {
        $(target).removeClass('active');
        return;
      }
      $('.side-panel').removeClass('active');
      $(target).addClass('active');
    });
  });

  $('.dropdown, .side-panel').on('click', function (e) {
    e.stopPropagation();
  });

  // Images Gallery
  $('.images-gallery__image').each(function(){
    const el = $(this);
    el.on('click', function(){
      el.toggleClass('selected');
    });
  });



  // General
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $('.dropdown').removeClass('show');
    }
  });

  $('body').click(function () {
    $('.dropdown').removeClass('show');
  });
});

//tabs in recipe detail page
$('#tabs li a:not(:first)').addClass('inactive');
$('.tabcontent').hide();
$('.tabcontent:first').show();

$('.tabs__links a').each(function () {
  const el = $(this);
  el.on('click', function (e) {
    var t = $(this).attr('id');
    e.preventDefault();
    const target = el.attr('href');
    el.closest('.tabs__links').find('a').removeClass('active');
    el.addClass('active');
    $('.tabcontent').hide();
    $('#'+ t + 'C').fadeIn('slow');
  });
});

