var myApp = (function () {	
    var public={};

    public.init = function(){
        var sections_0_0=new panelsPlugin.PanelCodeNode("Poziomo:0\nPionowo:0", 
            "Dziękujemy za dokonanie konfiguracji produktu!",
            "images/przegrody/szpr_0_0.gif",
            "");
        var sections_0_1=new panelsPlugin.PanelCodeNode("Poziomo:0\nPionowo:1", 
            "Dziękujemy za dokonanie konfiguracji produktu!",
            "images/przegrody/szpr_0_1.gif",
            "");
        var sections_0_4=new panelsPlugin.PanelCodeNode("Poziomo:0\nPionowo:4", 
            "Dziękujemy za dokonanie konfiguracji produktu!",
            "images/przegrody/szpr_0_4.gif",
            "");
        var sections_1_0=new panelsPlugin.PanelCodeNode("Poziomo:1\nPionowo:0", 
            "Dziękujemy za dokonanie konfiguracji produktu!",
            "images/przegrody/szpr_1_0.gif",
            "");
        var sections_3_1=new panelsPlugin.PanelCodeNode("Poziomo:3\nPionowo:1", 
            "Dziękujemy za dokonanie konfiguracji produktu!",
            "images/przegrody/szpr_3_1.gif",
            "");
        var sections_4_0=new panelsPlugin.PanelCodeNode("Poziomo:4\nPionowo:0", 
            "Dziękujemy za dokonanie konfiguracji produktu!",
            "images/przegrody/szpr_4_0.gif",
            "");
        var sections_4_4=new panelsPlugin.PanelCodeNode("Poziomo:4\nPionowo:4", 
            "Dziękujemy za dokonanie konfiguracji produktu!",
            "images/przegrody/szpr_4_4.gif",
            "");
        
        //SLIDING DOOR subtree
        
        var slidingDoorLeftToRight=new panelsPlugin.PanelChoicesNode("Od lewej do prawej", "Szprosy",
             "images/drzwi-przesuwne/kierunek_lewa_do_prawej.gif",
            "Lewe drzwi są przesuwne",
            sections_0_0,sections_0_1,sections_0_4,sections_1_0,sections_3_1,sections_4_0,sections_4_4);
        
        var slidingDoorRightToLeft=new panelsPlugin.PanelChoicesNode("Od prawej do lewej", "Szprosy",
             "images/drzwi-przesuwne/kierunek_prawa_do_lewej.gif",
            "Prawe drzwi są przesuwne",
            sections_0_0,sections_0_1,sections_0_4,sections_1_0,sections_3_1,sections_4_0,sections_4_4);
        
        //NORMAL DOOR subtree
        
        var normalDoorWithGlass=new panelsPlugin.PanelChoicesNode("Szyby", "Szprosy",
             "images/drzwi-wejsciowe/szyby/wypelnienie_d_s.jpg",
            "",
            sections_0_0,sections_0_1,sections_0_4,sections_1_0,sections_3_1,sections_4_0,sections_4_4);
        
        var normalDoorWithoutGlass=new panelsPlugin.PanelChoicesNode("Bez szyb", "Szprosy",
             "images/drzwi-wejsciowe/szyby/wypelnienie_d_p.jpg",
            "",
            sections_0_0,sections_0_1,sections_0_4,sections_1_0,sections_3_1,sections_4_0,sections_4_4);
        
        var normalDoor1wingNode=new panelsPlugin.PanelChoicesNode("1 skrzydło", "Drzwi z szybami czy bez szyb",
             "images/drzwi-wejsciowe/skrzydla/ile_skrzydel_1.jpg",
            "",
            normalDoorWithGlass,normalDoorWithoutGlass);
        
        var normalDoor2wingNode=new panelsPlugin.PanelChoicesNode("2 skrzydła", "Drzwi z szybami czy bez szyb",
             "images/drzwi-wejsciowe/skrzydla/ile_skrzydel_2.jpg",
            "",
            normalDoorWithGlass,normalDoorWithoutGlass);

        //WINDOW subtree
        var windowDirections3wing_right_right_left=new panelsPlugin.PanelChoicesNode(
            "Opcja 1",
            "Szprosy",
             "images/okno/kierunki/otwieranie_potrojne_l_l_p.jpg",
            "Skrzydło 1: otwieranie w lewo<br/>Skrzydło 2: otwieranie w lewo<br/>Skrzydło 3: otwieranie w prawo",
            sections_0_0,sections_0_1,sections_0_4,sections_1_0,sections_3_1,sections_4_0,sections_4_4);
        
        var windowDirections3wing_right_empty_left=new panelsPlugin.PanelChoicesNode(
            "Opcja 2",
            "Szprosy",
             "images/okno/kierunki/otwieranie_potrojne_l_w_p.jpg",
            "Skrzydło 1: otwieranie w lewo<br/>Skrzydło 2: nie otwierane<br/>Skrzydło 3: otwieranie w prawo",
            sections_0_0,sections_0_1,sections_0_4,sections_1_0,sections_3_1,sections_4_0,sections_4_4);
        
        var windowDirections3wing_topRight_right_topLeft=new panelsPlugin.PanelChoicesNode(
            "Opcja 3",
            "Szprosy",
             "images/okno/kierunki/otwieranie_potrojne_lg_l_pg.jpg",
            "Skrzydło 1: uchylanie i otwieranie w lewo<br/>Skrzydło 2: otwieranie w lewo<br/>Skrzydło 3: uchylanie i otwieranie w prawo",
            sections_0_0,sections_0_1,sections_0_4,sections_1_0,sections_3_1,sections_4_0,sections_4_4);
        
        var windowDirections2wing_right_left=new panelsPlugin.PanelChoicesNode(
            "Opcja 1",
            "Szprosy",
             "images/okno/kierunki/otwieranie_podwojne_l_p.jpg",
            "Skrzydło 1: otwieranie w lewo<br/>Skrzydło 2: otwieranie w prawo",
            sections_0_0,sections_0_1,sections_0_4,sections_1_0,sections_3_1,sections_4_0,sections_4_4);
        
        var windowDirections2wing_topRight_topLeft=new panelsPlugin.PanelChoicesNode(
            "Opcja 2",
            "Szprosy",
             "images/okno/kierunki/otwieranie_podwojne_lg_pg.jpg",
            "Skrzydło 1: uchylanie oraz otwieranie w lewo<br/>Skrzydło 2: uchylanie praz otwieranie w prawo",
            sections_0_0,sections_0_1,sections_0_4,sections_1_0,sections_3_1,sections_4_0,sections_4_4);
        
        var windowDirections2wing_empty_left=new panelsPlugin.PanelChoicesNode(
            "Opcja 3",
            "Szprosy",
             "images/okno/kierunki/otwieranie_podwojne_w_p.jpg",
            "Skrzydło 1: nie otwierane<br/>Skrzydło 2: otwieranie w prawo",
            sections_0_0,sections_0_1,sections_0_4,sections_1_0,sections_3_1,sections_4_0,sections_4_4);
        
        var windowDirections1wing_topLeft=new panelsPlugin.PanelChoicesNode("Opcja 1", "Szprosy",
             "images/okno/kierunki/otwieranie_pojedyncze_pg.jpg",
            "Otwieranie w prawo oraz uchylanie",
            sections_0_0,sections_0_1,sections_0_4,sections_1_0,sections_3_1,sections_4_0,sections_4_4);
        
        var windowDirections1wing_right=new panelsPlugin.PanelChoicesNode("Opcja 2", "Szprosy",
             "images/okno/kierunki/otwieranie_pojedyncze_l.jpg",
            "Otwieranie w lewo",
            sections_0_0,sections_0_1,sections_0_4,sections_1_0,sections_3_1,sections_4_0,sections_4_4);
        
        var windowDirections1wing_top=new panelsPlugin.PanelChoicesNode("Opcja 3", "Szprosy",
             "images/okno/kierunki/otwieranie_pojedyncze_g.jpg",
            "Uchylanie",
            sections_0_0,sections_0_1,sections_0_4,sections_1_0,sections_3_1,sections_4_0,sections_4_4);
        
        var window1wingNode=new panelsPlugin.PanelChoicesNode("1 skrzydło", "Kierunek otwierania okna",
             "images/okno/skrzydla/podzial_pojedyncze.jpg",
            "okno posiada jedno skrzydło",
            windowDirections1wing_topLeft,windowDirections1wing_right,windowDirections1wing_top);
        
        var window2wingNode=new panelsPlugin.PanelChoicesNode("2 skrzydła", "Kierunek otwierania okna",
             "images/okno/skrzydla/podzial_podwojne.jpg",
            "okno posiada dwa skrzydła",
            windowDirections2wing_right_left,windowDirections2wing_topRight_topLeft,windowDirections2wing_empty_left);
        
        var window3wingNode=new panelsPlugin.PanelChoicesNode("3 skrzydła", "Kierunek otwierania okna",
             "images/okno/skrzydla/podzial_potrojne.jpg",
            "okno posiada trzy skrzydła",
            windowDirections3wing_right_right_left,windowDirections3wing_right_empty_left,windowDirections3wing_topRight_right_topLeft);

        //first tier
        var windowNode=new panelsPlugin.PanelChoicesNode("Okno", "Ilość skrzydeł",
            "images/okno.gif",
            "kliknij, aby sprecyzować",
            window1wingNode,window2wingNode,window3wingNode);
        var normalDoorNode=new panelsPlugin.PanelChoicesNode("Drzwi", "Ilość skrzydeł",
            "images/drzwi-wej.png",
            "kliknij, aby sprecyzować",
            normalDoor1wingNode,normalDoor2wingNode);
        var slidingDoorNode=new panelsPlugin.PanelChoicesNode("Drzwi przesuwne", "Kierunek przesuwania",
            "images/drzwi-przesuwne.png",
            "kliknij, aby sprecyzować",
            slidingDoorLeftToRight,slidingDoorRightToLeft);
        //root
        var sawTreeParent=new panelsPlugin.PanelChoicesNode("tytul parent", "Rodzaj produktu","",
            windowNode,normalDoorNode,slidingDoorNode);
        //constructor for entire structure
        new panelsPlugin.PanelContainer(sawTreeParent,"#wrapperForPanels1");
        
    };

    return public;
})();

$(function() {

    myApp.init();

});