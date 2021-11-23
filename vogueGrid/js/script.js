// var sm = $(".slideMenu");

// $(".burger").click(
//     function(){
//         $(this).toggleClass("on");
        
//         if(sm.hasClass("on")){
//             sm.toggleClass("on");
//             setTimeout(smboxnone,600);
//         }else{
//             sm.css('display','block');
//             setTimeout(smboxshow,10);
//         }
//     }
// );

// function smboxnone(){
//     sm.css('display','none');
// }
// function smboxshow(){
//     sm.toggleClass("on");
// }


$(".burger").click(
    function(){
        $(this).toggleClass("on");
        $(".slideMenu").toggleClass("on");
    }
);