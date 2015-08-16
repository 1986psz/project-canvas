var productPreview= (function () {
    
    var pub={};
    
    var myCanvas,myContext;
    var MyArea=function(start_x,start_y,areaWidth,areaHeight){
            this.start_x=start_x;
            this.start_y=start_y;
            this.areaWidth=areaWidth;
            this.areaHeight=areaHeight;
        };
    var createCanvas=function(){
        $("<div id='floating-canvas'><canvas id='myCanvas' height='300' width='300' ></canvas></div> ").css({
            "position":"fixed",
            "top":"0",
            "right":"0",
            "height":"310px",
            "width":"310px",
            "background-color":"white",
            "z-index":"9999",
            "border":"2px solid black",
            "padding":"3px 3px 3px 3px",
            "visibility":"hidden"
        }).appendTo("body");	
        myCanvas = document.getElementById("myCanvas");
        myContext = myCanvas.getContext("2d");
    };
    
    var windowModule=function(){
        var arrOneLevelGlass=[];
        var drawContour=function(){
            myContext.beginPath();
            myContext.rect(10, 10, 280, 280);
            myContext.fillStyle = 'gray';
            myContext.fill();
            myContext.lineWidth = 1;
            myContext.strokeStyle = 'black';
            myContext.stroke();
        };
        var drawWing=function(start_x,start_y,width,height){
            myContext.beginPath();
            myContext.rect(start_x, start_y, width, height);
            myContext.fillStyle = '#F8F8F8';
            myContext.fill();
            myContext.lineWidth = 1;
            myContext.strokeStyle = 'black';
            myContext.stroke();
        };
        var drawGlass=function(start_x,start_y,width,height){
            myContext.beginPath();
            myContext.rect(start_x, start_y, width, height);
            myContext.fillStyle = '#9DC9F3';
            myContext.fill();
            myContext.lineWidth = 1;
            myContext.strokeStyle = 'black';
            myContext.stroke();
        };
        var drawOneLevel=function(wingsNumber){
            drawContour();
            if(wingsNumber==1){
                drawWing(20, 20, 260, 260);
                drawGlass(30, 30, 240, 240);
                arrOneLevelGlass.push(new MyArea(30, 30, 240, 240));
            }
            if(wingsNumber==2){
                //first wing
                drawWing(20, 20, 125, 260);
                drawGlass(30, 30, 105, 240);
                arrOneLevelGlass.push(new MyArea(30, 30, 105, 240));
                //second wing
                drawWing(155, 20, 125, 260);
                drawGlass(165, 30, 105, 240);
                arrOneLevelGlass.push(new MyArea(165, 30, 105, 240));
            }
            if(wingsNumber==3){
                //first wing
                drawWing(20, 20, 85, 260);
                drawGlass(30, 30, 65, 240);
                arrOneLevelGlass.push(new MyArea(30, 30, 65, 240));
                //second wing
                drawWing(107, 20, 85, 260);
                drawGlass(117, 30, 65, 240);
                arrOneLevelGlass.push(new MyArea(117, 30, 65, 240));
                //third wing
                drawWing(194, 20, 85, 260);
                drawGlass(204, 30, 65, 240);
                arrOneLevelGlass.push(new MyArea(204, 30, 65, 240));
            }
        };
        
        
        //////////////////////////////////////////////////////////
        var drawWindowBase=function(){
            drawOneLevel(1);
        };
        var drawWindowDetails=function(){
            $("#floatingListOfChoices li").each(function(){
                var currentTitle=$(this).find(".title").text();
                var currentValue=$(this).find(".value").text();

                if (currentTitle=="Ilość skrzydeł"){
                    //console.log("twoja ilosc skrzydel to: "+currentValue);
                    if(currentValue=="1 skrzydło"){
                        arrOneLevelGlass=[];
                        drawOneLevel(1);
                    }
                    if(currentValue=="2 skrzydła"){
                        arrOneLevelGlass=[];
                        drawOneLevel(2);
                    }
                    if(currentValue=="3 skrzydła"){
                        arrOneLevelGlass=[];
                        drawOneLevel(3);
                    }
                }
                if (currentTitle=="Kierunek otwierania okna"){
                    console.log("twoj kierunek to: "+currentValue);
                }
                if (currentTitle=="Szprosy"){
                    console.log("twoje szprosy: "+currentValue);
                }
            });
        };
        drawWindowBase();
        drawWindowDetails();
        
    };
    var doorModule=function(){
        var drawContour=function(){
            myContext.beginPath();
            myContext.rect(10, 10, 280, 280);
            myContext.fillStyle = '#EEEEEE';
            myContext.fill();
            myContext.lineWidth = 1;
            myContext.strokeStyle = 'black';
            myContext.stroke();
        };
        var drawOneWing=function(){
            myContext.beginPath();
            myContext.rect(85, 20, 130, 270);
            myContext.fillStyle = '#F8F8F8';
            //gradient-start
            // Create gradient
            var grd = myContext.createLinearGradient(150.000, 300.000, 150.000, 0.000);
            // Add colors
            grd.addColorStop(0.000, 'rgba(86, 34, 0, 1.000)');
            grd.addColorStop(1.000, 'rgba(229, 87, 0, 1.000)');
            //myContext.fillStyle = grd;
            //gradient-end
            myContext.fill();
            myContext.lineWidth = 1;
            myContext.strokeStyle = 'black';
            myContext.stroke();
        };
        var drawTwoWings=function(){
            //first wing
            myContext.beginPath();
            myContext.rect(20, 20, 130, 270);
            myContext.fillStyle = '#F8F8F8';
            myContext.fill();
            myContext.lineWidth = 1;
            myContext.strokeStyle = 'black';
            myContext.stroke();
            //second wing
            myContext.beginPath();
            myContext.rect(150, 20, 130, 270);
            myContext.fillStyle = '#F8F8F8';
            myContext.fill();
            myContext.lineWidth = 1;
            myContext.strokeStyle = 'black';
            myContext.stroke();
        };
        var drawRightHandleAndHinges=function(wingsNumber){
            if(wingsNumber==1){
                //handle
                myContext.beginPath();
                myContext.rect(180,150, 30, 10);
                myContext.fillStyle = 'black';
                myContext.fill();
                //hinges
                //top
                myContext.beginPath();
                myContext.rect(82,50, 6, 20);
                myContext.fillStyle = 'black';
                myContext.fill();
                //middle
                myContext.beginPath();
                myContext.rect(82,150, 6, 20);
                myContext.fillStyle = 'black';
                myContext.fill();
                //bottom
                myContext.beginPath();
                myContext.rect(82,250, 6, 20);
                myContext.fillStyle = 'black';
                myContext.fill();
            }
            if(wingsNumber==2){
                //handle
                myContext.beginPath();
                myContext.rect(115,150, 30, 10);
                myContext.fillStyle = 'black';
                myContext.fill();
                //hinges
                //hinges
                //top-left
                myContext.beginPath();
                myContext.rect(17,50, 6, 20);
                myContext.fillStyle = 'black';
                myContext.fill();
                //top-right
                myContext.beginPath();
                myContext.rect(277,50, 6, 20);
                myContext.fillStyle = 'black';
                myContext.fill();
                //middle-left
                myContext.beginPath();
                myContext.rect(17,150, 6, 20);
                myContext.fillStyle = 'black';
                myContext.fill();
                //middle-right
                myContext.beginPath();
                myContext.rect(277,150, 6, 20);
                myContext.fillStyle = 'black';
                myContext.fill();
                //bottom-left
                myContext.beginPath();
                myContext.rect(17,250, 6, 20);
                myContext.fillStyle = 'black';
                myContext.fill();
                //bottom-right
                myContext.beginPath();
                myContext.rect(277,250, 6, 20);
                myContext.fillStyle = 'black';
                myContext.fill();
            }
        };
        /////////////////////////////////////////////////
        var drawDoorBase=function(){
            drawContour();
            drawOneWing();
            drawRightHandleAndHinges(1);
        };
        var drawDoorDetails=function(){
            $("#floatingListOfChoices li").each(function(){
                var currentTitle=$(this).find(".title").text();
                var currentValue=$(this).find(".value").text();

                if (currentTitle=="Ilość skrzydeł"){
                    //console.log("twoja ilosc skrzydel to: "+currentValue);
                    if (currentValue=="1 skrzydło"){
                        drawContour();
                        drawOneWing();
                        drawRightHandleAndHinges(1);
                    }
                    if (currentValue=="2 skrzydła"){
                        drawContour();
                        drawTwoWings();
                        drawRightHandleAndHinges(2);
                    }
                }
                if (currentTitle=="Drzwi z szybami czy bez szyb"){
                    console.log("twoj kierunek to: "+currentValue);
                }
                if (currentTitle=="Szprosy"){
                    console.log("twoje szprosy: "+currentValue);
                }
            });
        };
        drawDoorBase();
        drawDoorDetails();
    };
    var slidingDoorModule=function(){
        var drawSlidingDoorBase=function(){
            console.log("sliding door base HERE");
        };
        var drawSlidingDoorDetails=function(){
            $("#floatingListOfChoices li").each(function(){
                var currentTitle=$(this).find(".title").text();
                var currentValue=$(this).find(".value").text();

                if (currentTitle=="Kierunek przesuwania"){
                    console.log("kierunek przesuwania to: "+currentValue);
                }
                if (currentTitle=="Szprosy"){
                    console.log("twoje szprosy: "+currentValue);
                }
            });
        };
        drawSlidingDoorBase();
        drawSlidingDoorDetails();
    };
    
    pub.init=function(){
        createCanvas();
        $("#wrapperForPanels1").on("click",function(){
            if ( $("#floatingListOfChoices li").length>0 ){
                $("#floating-canvas").css("visibility","visible");
            }
            else{
                $("#floating-canvas").css("visibility","hidden");
            }
            $("#floatingListOfChoices li").each(function(){
                if( $(this).find(".title").text().indexOf("Rodzaj produktu")>=0 ){
                    if( $(this).find(".value").text().indexOf("Okno")>=0 ){
                        windowModule();
                    }
                    else if( $(this).find(".value").text().indexOf("Drzwi przesuwne")>=0 ){
                        slidingDoorModule();
                    }
                    else if( $(this).find(".value").text().indexOf("Drzwi")>=0 ){
                        doorModule();
                    }
                }
            });
        });
    };
    
    return pub;
})();