var productPreview= (function () {
    
    var pub={};
    
    
    
    pub.init=function(){
        $("#wrapperForPanels1").on("click",function(){
            $("#floatingListOfChoices li").each(function(){
                if( $(this).find(".title").text().indexOf("Rodzaj produktu")>=0 ){
                    if( $(this).find(".value").text().indexOf("Okno")>=0 ){
                        console.log("to jest okno");
                    }
                    else if( $(this).find(".value").text().indexOf("Drzwi przesuwne")>=0 ){
                        console.log("to sa drzwi przesuwne");
                    }
                    else if( $(this).find(".value").text().indexOf("Drzwi")>=0 ){
                        console.log("to sa drzwi");
                    }
                }
            });
        });
    };
    
    return pub;
})();