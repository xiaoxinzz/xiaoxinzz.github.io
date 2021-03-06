$(function($) {
  var $detailPage = $('#postContainer')
  var $postFixedNavs = $('#postFixedNavs')

  if ($detailPage.length > 0 && $postFixedNavs.length > 0) {
    var postTitles = []
    $('#postContainer .post-content h1,#postContainer .post-content h2, #postContainer .post-content h3').each(function() {
      if ($(this).text()) {
        postTitles.push([$(this).text(), this.tagName]);
      }
    });
    console.info('postTitles', postTitles);
    if (postTitles.length) {
      for (var index = postTitles.length - 1; index >= 0; index--) {
        var element = postTitles[index];
        $postFixedNavs.prepend('<a href="#'+ element[0] +'" class="post-nav-item '+ element[1] +'">'+element[0]+'<a>')
      }
    }

    $(document).on('scroll', function(event) {
      var staticTop = 452;
      if ($(document).scrollTop() < staticTop) {
        $postFixedNavs[0].style.top = (staticTop - $(document).scrollTop()) + 'px'
      } else {
        $postFixedNavs[0].style.top = '52px'
      }
    })
  }
})