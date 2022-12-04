
   
        var color;
        function colors(){
            document.getElementById("bodyid").style.backgroundColor = localStorage.getItem("color-saved");

        }
function change_color(color){
  localStorage.setItem("color-saved",color);
}




        var font;
        function fonts(){
            document.getElementById("bodyid").style.fontFamily = localStorage.getItem("font-saved");
			  

        }
function change_font(font){
  localStorage.setItem("font-saved",font);
}
 
