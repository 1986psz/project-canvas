var panelsPlugin = (function () {
    
    var pub={};
    /*node with further choices*/
    pub.PanelChoicesNode=function(title,question,imgUrl,description){
        this.title=title;
        this.question=question;
        this.imgUrl=imgUrl;
        this.description=description;
        this.arrChoices=[];
        for(var i=0;i<arguments.length;i++){
            if((arguments[i] instanceof pub.PanelChoicesNode)||(arguments[i] instanceof pub.PanelCodeNode)){
                this.arrChoices.push(arguments[i]); 
            }
        }
    };
    /*end node*/
    pub.PanelCodeNode=function(title,code,imgUrl,description){
        this.title=title;
        this.code=code;
        this.imgUrl=imgUrl;
        this.description=description;
    };
    /*constructor for root panel*/
    pub.PanelContainer=function(rootParent,container){
        var myCounter=0;
        var myContainer=container;
        var createPanel=function(myObject){
            var preloadImages = function(){
                //recursive function searching whole tree and preloading images
                var searchTreeAndPreloadImages = function(ob){
                    if((ob instanceof pub.PanelChoicesNode)||(ob instanceof pub.PanelCodeNode)){
                        (new Image()).src = ob.imgUrl;
                        if(ob instanceof pub.PanelChoicesNode){
                            $.each( ob.arrChoices, function( index, value ){
                                searchTreeAndPreloadImages(value);
                            });
                        }
                    }
                };
                $(window).load(function() {
                    searchTreeAndPreloadImages(myObject);
                });
            };
            var createPanelCodePanel=function(){
                $("<div></div>")
                        .addClass("panel")
                        .addClass("panelNumber"+myCounter)
                        .css("margin-left",((myCounter)*25)+"px")
                        .append("<div class=\"panel-body\"><p class=\"panel-text\">" 
                            +myObject.code
                            +"</p></div>")
                        .appendTo(myContainer);
            };
            var createPanelChoicesPanel=function(){
                var panelIconClickHandler=function(myElement,choiceNumber){
                    $(myElement).on("click", function(){
                        var mobileBreakpoint=500;
                        var animationTime=0;
                        //show animation only above 500px
                        if ( (window.innerWidth)>mobileBreakpoint ){
                            animationTime=700;
                        }
                        var animateChoiceName=function(){
                            //animation of clicked icon name 
                            var startSpanPosition=$(myElement).find(".nextChoice").offset();
                            var endSpanPosition=$(myElement).parent().parent().find(".currentChoice").offset();

                            $(myElement).find(".nextChoice").clone().css("position","absolute")
                                .offset(startSpanPosition).appendTo("body")
                                .animate({
                                    left: endSpanPosition.left+"px",
                                    top: endSpanPosition.top+"px"
                                }, animationTime, function() {
                                    $(this).remove();
                                });
                        };
                        //set name of choice in title (but hidden during animation)
                        $(myElement).parent().parent().find(".panel-title")
                            .html(myObject.question+"<span class=\"currentChoice\">"
                            +myObject.arrChoices[choiceNumber].title+"</span>")
                            .find(".currentChoice").css("visibility","hidden");
                        //set not chosen choices invisible
                        $(myElement).siblings().css("visibility","hidden");
                        //do animation of chosen icon
                        animateChoiceName();
                        //add interval time same as animation time
                        setTimeout(function(){
                            $(myElement).parent().hide();
                            //set name of choice after finished animation visible
                            //only above mobile breakpoint
                            if ( (window.innerWidth)>mobileBreakpoint ){
                                $(myElement).parent().parent().find(".panel-title")
                                    .find(".currentChoice").css("visibility","visible");
                            }
                            //set not chosen choices visible
                            $(myElement).siblings().css("visibility","visible");
                            //create panel with new choices
                            createPanel( myObject.arrChoices[choiceNumber] );
                            updateTitlesStyles();
                        }, animationTime);
                    });
                };
                var panelTitleClickHandler=function(myElement){
                    //set title
                    $(myElement).text(myObject.question);
                    $(myElement).parent().find(".panel-body").show(500);
                    removePanelsFrom($(myElement).parent().attr("class").split(' ')[1].match(/\d+/));
                    updateTitlesStyles();
                };
                var addChoices=function(){
                    var myHtml = "";
                    $.each( myObject.arrChoices, function(index,value) {
                        myHtml += "<div class=\"panel-icon\"><img src=\""+value.imgUrl
                                +"\"/><p><span class=\"nextChoice\">"+ value.title 
                                + "</span></p><p class=\"choiceDescription\">"+value.description
                                +"</p></div>";
                    });
                    return myHtml;
                };

                $("<div></div>")
                    .addClass("panel")
                    .addClass("panelNumber"+myCounter)
                    .css("margin-left",(myCounter*25)+"px")
                    .append("<div class=\"panel-title\">"+myObject.question+"</div>")
                    .append( $("<div></div>")
                        .addClass("panel-body")
                        .append( addChoices() )
                    )
                    .find(".panel-icon").each(function(index) {
                        //call createPanel after click- key function
                        panelIconClickHandler(this,index);
                        //panelIconHoverHandler(this,index);
                    })
                    .end()
                    .find(".panel-title").on("click", function(){
                        panelTitleClickHandler(this);
                    })
                    .end()
                    .appendTo(myContainer);
            };
            
            preloadImages();
            if(myObject instanceof pub.PanelChoicesNode){
                createPanelChoicesPanel();
            }
            else if(myObject instanceof pub.PanelCodeNode){
               createPanelCodePanel();
            }
            myCounter++;
        };
        var updateTitlesStyles=function(){
            $(myContainer+" .panel").each(function() {
                if( $(this).attr("class").split(' ')[1].match(/\d+/)==myCounter-1 ){
                    //code for active
                    $(this).find(".panel-title").addClass("active-title");
                    $(this).find(".panel-title").removeClass("nonactive-title");
                }
                else if( $(this).attr("class").split(' ')[1].match(/\d+/)!==myCounter-1 ){
                    $(this).find(".panel-title").removeClass("active-title");
                    $(this).find(".panel-title").addClass("nonactive-title");
                }
            });
        };
        var removePanelsFrom=function(fromNumber){
            $(myContainer+" .panel").each(function() {
                if( $(this).attr("class").split(' ')[1].match(/\d+/)>fromNumber ){
                    $(this).remove();
                     myCounter--;
                }
            });
        };
        
        createPanel(rootParent);
    };
    return pub;
})();

