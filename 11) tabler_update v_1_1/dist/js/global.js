$(function () {
  /* *---* CHECK THEME START *---* */
  if(localStorage.getItem("isDarkTheme") === null || localStorage.getItem("isDarkTheme") === '0'){
    $("body").removeClass("theme-dark");
  }else{
    $("body").addClass("theme-dark");
  }
  /* *---* CHECK THEME STOP *---* */

  /* *---* CLICK CHANGE THEME START *---* */
  $(document).on("click", ".fn-change-theme",
    function () {
      if(localStorage.getItem("isDarkTheme") === null || localStorage.getItem("isDarkTheme") === '0'){
        console.log('Hello');
        $("body").addClass("theme-dark");
        localStorage.setItem("isDarkTheme",'1');
      }else{
        $("body").removeClass("theme-dark");
        localStorage.setItem("isDarkTheme",'0');
      }
    })
   /* *---* CLICK CHANGE THEME START *---* */

  /* *---* MENU START *---* */ 
  $(document).on("click", ".btn-menu,.overlay-mask",
    function () {
        $(".overlay-mask").toggle(),
        $(".drawer").toggleClass("open"),
        $(".btn-menu").toggleClass("active"),
        $("body").toggleClass("blocked-page"),
        $(".drawer .nav-item").delay(100).each( function (e) { $(this).delay(100 * e).queue(function () { $(this).toggleClass("show") }) }), 
        $(".navbar-toggler").attr('aria-expanded') === "true" ? $(".navbar-toggler").attr("aria-expanded","false") : $(".navbar-toggler").attr("aria-expanded","true") 
        
    })
    /* *---* MENU STOP *---* */ 
});