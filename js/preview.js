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
    var drawOneLine=function(start_x,start_y,end_x,end_y){
            myContext.beginPath();
            myContext.moveTo(start_x, start_y);
            myContext.lineTo(end_x, end_y);
            myContext.lineWidth = 1;
            if (!(arguments[4] ===undefined)){
                myContext.strokeStyle = arguments[4];
            }
            else{
                myContext.strokeStyle = 'red';
            };
            myContext.stroke();
        };
    
    var windowModule=function(){
        var arrOneLevelGlass=[];
        var arrOneLevelDirections=[];
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
        var convertDirectionsStringToArray=function(myString){
            var arrDirections=[];
            if(myString.indexOf('Skrzydło 1:')>=0){
                if(myString.indexOf('Skrzydło 2:')>=0){
                    arrDirections.push(myString.substring(myString.indexOf('Skrzydło 1:')+12,myString.indexOf('Skrzydło 2:') ));
                }
                else{
                    arrDirections.push(myString.substring(myString.indexOf('Skrzydło 1:')+12,myString.length ));
                }
            };
            if(myString.indexOf('Skrzydło 2:')>=0){
                if(myString.indexOf('Skrzydło 3:')>=0){
                    arrDirections.push(myString.substring(myString.indexOf('Skrzydło 2:')+12,myString.indexOf('Skrzydło 3:') ));
                }
                else{
                    arrDirections.push(myString.substring(myString.indexOf('Skrzydło 2:')+12,myString.length ));
                }
            };
            if(myString.indexOf('Skrzydło 3:')>=0){
                arrDirections.push(myString.substring(myString.indexOf('Skrzydło 3:')+12,myString.length ));
            };
            return arrDirections;
        };
        var drawDirectionInsideArea=function(myDirection,myArea){
            var start_x=myArea.start_x;
            var start_y=myArea.start_y;
            var end_x=myArea.start_x+myArea.areaWidth;
            var end_y=myArea.start_y+myArea.areaHeight;
            var width=myArea.areaWidth;
            var height=myArea.areaHeight;
            var lineColor="blue";

            if(myDirection.indexOf("w lewo")>=0){
                drawOneLine(start_x,start_y,
                    start_x+width,((height)/2)+start_y,lineColor);
                drawOneLine(start_x,start_y+height,
                    start_x+width,((height)/2)+start_y,lineColor);
            };
            if(myDirection.indexOf("w prawo")>=0){
                drawOneLine(start_x,((height)/2)+start_y,
                    end_x,start_y,lineColor);
                drawOneLine(start_x,((height)/2)+start_y,
                    end_x,end_y,lineColor);
            };
            if(myDirection.indexOf("uchylanie")>=0){
                drawOneLine(start_x,end_y,
                    ((width)/2)+start_x,start_y,lineColor);
                drawOneLine(((width)/2)+start_x,start_y,
                    end_x,end_y,lineColor);
            };
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
                    arrOneLevelDirections=[];
                    arrOneLevelDirections=convertDirectionsStringToArray(currentValue);
                    for(var i=0;i<arrOneLevelDirections.length;i++){
                            drawDirectionInsideArea(arrOneLevelDirections[i],arrOneLevelGlass[i]);
                    };
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
        var arrGlassArea=[];
        var drawContour=function(){
            myContext.beginPath();
            myContext.rect(10, 10, 280, 280);
            myContext.fillStyle = '#F8F8F8';
            myContext.fill();
            myContext.lineWidth = 1;
            myContext.strokeStyle = 'black';
            myContext.stroke();
        };
        var drawLeftGlass=function(){
            myContext.beginPath();
            myContext.rect(20,20, 125, 260);
            myContext.fillStyle = '#9DC9F3';
            myContext.fill();
            myContext.lineWidth = 1;
            myContext.strokeStyle = 'black';
            myContext.stroke();
            arrGlassArea.push(new MyArea(20,20, 125, 260));
        };
        var drawRightGlass=function(){
            myContext.beginPath();
            myContext.rect(155,20, 125, 260);
            myContext.fillStyle = '#9DC9F3';
            myContext.fill();
            myContext.lineWidth = 1;
            myContext.strokeStyle = 'black';
            myContext.stroke();
            arrGlassArea.push(new MyArea(155,20, 125, 260));
        };
        var drawLeftDoor=function(){
            var drawLeftDoorContour=function(){
                myContext.beginPath();
                myContext.rect(20,20, 125, 260);
                myContext.fillStyle = '#F8F8F8';
                myContext.fill();
                myContext.lineWidth = 1;
                myContext.strokeStyle = 'black';
                myContext.stroke();
            };
            var drawGlassInsideLeftDoor=function(){
                myContext.beginPath();
                myContext.rect(30,30, 105, 240);
                myContext.fillStyle = '#9DC9F3';
                myContext.fill();
                myContext.lineWidth = 1;
                myContext.strokeStyle = 'black';
                myContext.stroke();
                arrGlassArea.push(new MyArea(30,30, 105, 240));
            };
            var drawLeftHandle=function(){
                myContext.beginPath();
                myContext.rect(22,135, 6, 20);
                myContext.fillStyle = 'black';
                myContext.fill();
            };
            var drawArrowInsideLeftDoor=function(){
                //main axis
                myContext.beginPath();
                myContext.moveTo(50, 150);
                myContext.lineTo(115, 150);
                myContext.lineWidth = 5;
                myContext.strokeStyle = 'red';
                myContext.stroke();
                //top head
                myContext.beginPath();
                myContext.moveTo(82, 130);
                myContext.lineTo(115, 151);
                myContext.lineWidth = 5;
                myContext.strokeStyle = 'red';
                myContext.stroke();
                //bottom head
                myContext.beginPath();
                myContext.moveTo(82, 170);
                myContext.lineTo(115, 149);
                myContext.lineWidth = 5;
                myContext.strokeStyle = 'red';
                myContext.stroke();
            };

            drawLeftDoorContour();
            drawGlassInsideLeftDoor();
            drawLeftHandle();
            drawArrowInsideLeftDoor();
        };
        var drawRightDoor=function(){
            var drawRightDoorContour=function(){
                myContext.beginPath();
                myContext.rect(155,20, 125, 260);
                myContext.fillStyle = '#F8F8F8';
                myContext.fill();
                myContext.lineWidth = 1;
                myContext.strokeStyle = 'black';
                myContext.stroke();
            };
            var drawGlassInsideRightDoor=function(){
                myContext.beginPath();
                myContext.rect(165,30, 105, 240);
                myContext.fillStyle = '#9DC9F3';
                myContext.fill();
                myContext.lineWidth = 1;
                myContext.strokeStyle = 'black';
                myContext.stroke();
                arrGlassArea.push(new MyArea(165,30, 105, 240));
            };
            var drawRightHandle=function(){
                myContext.beginPath();
                myContext.rect(272,135, 6, 20);
                myContext.fillStyle = 'black';
                myContext.fill();
            };
            var drawArrowInsideRightDoor=function(){
                //main axis
                myContext.beginPath();
                myContext.moveTo(185, 150);
                myContext.lineTo(250, 150);
                myContext.lineWidth = 5;
                myContext.strokeStyle = 'red';
                myContext.stroke();
                //top head
                myContext.beginPath();
                myContext.moveTo(217, 130);
                myContext.lineTo(185, 151);
                myContext.lineWidth = 5;
                myContext.strokeStyle = 'red';
                myContext.stroke();
                //bottom head
                myContext.beginPath();
                myContext.moveTo(217,170);
                myContext.lineTo(185, 149);
                myContext.lineWidth = 5;
                myContext.strokeStyle = 'red';
                myContext.stroke();
            };

            drawRightDoorContour();
            drawGlassInsideRightDoor();
            drawRightHandle();
            drawArrowInsideRightDoor();
        };
        var drawEntireFrameLeftDoor=function(){
            drawContour();
            drawRightGlass();
            drawLeftDoor();
        };
        var drawEntireFrameRightDoor=function(){
            drawContour();
            drawLeftGlass();
            drawRightDoor();
        };
        
        /////////////////////////////////////////////
        var drawSlidingDoorBase=function(){
            drawEntireFrameLeftDoor();
        };
        var drawSlidingDoorDetails=function(){
            $("#floatingListOfChoices li").each(function(){
                var currentTitle=$(this).find(".title").text();
                var currentValue=$(this).find(".value").text();

                if (currentTitle=="Kierunek przesuwania"){
                    //console.log("kierunek przesuwania to: "+currentValue);
                    if (currentValue=="Od lewej do prawej"){
                        drawEntireFrameLeftDoor();
                    }
                    if (currentValue=="Od prawej do lewej"){
                        drawEntireFrameRightDoor();
                    }
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