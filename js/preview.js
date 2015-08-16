var productPreview= (function () {
    
    var pub={};
    
    var myCanvas,myContext;
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
        var drawWindowBase=function(){
            console.log("window base HERE");
        };
        var drawWindowDetails=function(){
            $("#floatingListOfChoices li").each(function(){
                var currentTitle=$(this).find(".title").text();
                var currentValue=$(this).find(".value").text();

                if (currentTitle=="Ilość skrzydeł"){
                    console.log("twoja ilosc skrzydel to: "+currentValue);
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
        console.log("to sa drzwi");
        $("#floatingListOfChoices li").each(function(){
            var currentTitle=$(this).find(".title").text();
            var currentValue=$(this).find(".value").text();
            
            if (currentTitle=="Ilość skrzydeł"){
                console.log("twoja ilosc skrzydel to: "+currentValue);
            }
            if (currentTitle=="Drzwi z szybami czy bez szyb"){
                console.log("twoj kierunek to: "+currentValue);
            }
            if (currentTitle=="Szprosy"){
                console.log("twoje szprosy: "+currentValue);
            }
        });
    };
    var slidingDoorModule=function(){
        console.log("to sa drzwi przesuwne");
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