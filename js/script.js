

        var targetMenu = document.querySelector(".targetMenu");
        var onTaget = document.querySelectorAll(".targetMenu ul li");
        var section = document.querySelectorAll("section");
        var sectionCounter = 0; 
        var offset = 0;
        var count=0;       
        document.addEventListener('wheel', scrollAni);
        window.addEventListener('load', activeMenu);
        targetMenu.addEventListener('click', gosection);

        function scrollAni(e){
            
            count++;
            var gosectioncount = count%7; // 스크롤 : 섹션 추가할때마다 숫자 수정하기.
            if(e.wheelDelta<0){
                if(gosectioncount == 0 && sectionCounter<6)sectionCounter++;
            }else{
                if(gosectioncount == 0 && sectionCounter>0)sectionCounter--;
            }
            
            offset = innerHeight*sectionCounter;

            $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");

            setTimeout(activeMenu,300);
            onTargetMenu();

        }

        function activeMenu(){
            section.forEach(function(ele){ele.classList.remove("active");});
            section[sectionCounter].classList.add("active");
        }

        function gosection(e){ //menu 클릭시 이동.
            sectionCounter = Number(e.target.getAttribute("datanum"));
            offset = innerHeight*sectionCounter;
            $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");
            setTimeout(activeMenu,300);
            onTargetMenu();
        }

        function onTargetMenu(){
            onTaget.forEach(function(menu){
                menu.children[0].classList.remove("on");
            });
            onTaget[sectionCounter].children[0].classList.add("on");
        }

        // 스크롤 막기 시작
        $('html, body').css({'overflow': 'hidden', 'height': '100%'});
        $('#element').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
        });
        //스크롤 막기 끝

        //차트
        $('.skillchart').click(
            function(){
                $(this).easyPieChart({
                    barColor: 'seagreen',
                    trackColor: 'papayawhip',
                    scaleColor: '#fff',
                    lineCap: 'butt',
                    lineWidth: 10,
                    size: 100,
                    animate: 1000
                });
                var jumsu = $(this).attr('data-percent');
                $(this).children().children('.jumsu').html(jumsu);
            }
        );



        