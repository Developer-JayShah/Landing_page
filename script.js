$('.logo-slider').slick({
    slidesToShow: 5,
    sliderToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    responsive: [{
        breakpoint: 768,
        setting:{
            slidesToShow: 4
        }
    }, {
        breakpoint: 520,
        setting:{
             slidesToShow: 3
        }
    }]
 });

// $(document).ready(function(){
//     $('.logo-slider').slick({
//             slidesToShow: 5,
//             sliderToScroll: 1,
//             dots: false,
//             arrows: false,
//             autoplay: true,
//             autoplaySpeed: 1000,
//             infinite: true,
//             responsive: [{
//                 breakpoint: 768,
//                 setting:{
//                     slidesToShow: 4
//                 }
//             }, {
//                 breakpoint: 520,
//                 setting:{
//                      slidesToShow: 3
//                 }
//             }]
         
// });
// });