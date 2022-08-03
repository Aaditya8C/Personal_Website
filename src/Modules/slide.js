// let slideIndex = 1;
// showSlide(slideIndex);

// plusSlide = () =>{
//     showSlide(slideIndex += n);
// }

// showSlide = (n) =>{
//     let i;
//     let x = document.getElementsByClassName('images');
//     if(n > x.length) {slideIndex = 1}
//     if(n < 1) {slideIndex = x.length}
//     for(i = 0;i < x.length;i++)
//     {
//         x[i].style.display = 'none';
//     }
//     x[slideIndex - 1].style.display = 'block';
// }

// sc1 = () =>{
//     document.querySelector('proId').scrollIntoView({ 
//         behavior: 'smooth' 
//       });
// }

$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });