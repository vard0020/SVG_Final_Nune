 $(document).ready(function () {

});

$(window).load(function () {
    
var a = document.getElementById("mic");
var microphone = a.contentDocument; //get the inner DOM of svg.svg
           
    //var delta = $(microphone).find("#Layer_1");   
    
    /////////////////////// Microphone Manipulation///////////////////////
    var switcher = $(microphone).find("#head");
    switcher.on("mouseenter", function(){
        switcher.attr("fill", "grey");
    });
     
    switcher.on("mouseleave", function(){
        switcher.attr("fill", "black");
    });
    
    
    switcher.on("click", function(){
        
        if(switcher.attr("fill")  == "green")
        {
            switcher.attr("fill", "red");
            document.querySelector("h3").innerHTML = "Microphone is TURNED OFF!";
    }
        else
        {
        switcher.attr("fill", "green");
        document.querySelector("h3").innerHTML = "Microphone is TURNED ON!";
        }
        
        }); 
    
    /////////////Headphones manipulation///////////////////////////
    
    var b = document.getElementById("hphone");
    var headphone = b.contentDocument; //get the inner DOM of hphone.svg
    
    
     var headswitch = $(headphone).find(".rect");
    
    headswitch.attr("fill", "black");
    headswitch.attr("stroke", "black");
    
     headswitch.on("mouseenter", function(){
        headswitch.attr("fill", "grey");
         headswitch.attr("stroke", "grey");
    });
     
    headswitch.on("mouseleave", function(){
        headswitch.attr("fill", "black");
        headswitch.attr("stroke", "black");
    });
   
    headswitch.on("click", function(){
        
        if(headswitch.attr("fill")  == "green")
        {
            headswitch.attr("fill", "red");
            headswitch.attr("stroke", "red");
            document.querySelector("h2").innerHTML = "Headohone is TURNED OFF!";
        }
        else
        {
        headswitch.attr("fill", "green");
        headswitch.attr("stroke", "green");
        document.querySelector("h2").innerHTML = "Headphone is TURNED ON!";
        }
        
        }); 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    });