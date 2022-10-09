             const addsArray = ["paper","rock", "scissor"];
             var random = Math.floor(Math.random() * addsArray.length);      
                   
                 var p ="paper"; //p>r ,s>p,r>s
                 var r ="rock";
                var s="scissor";
                    function paper(){
                            if(random==0) {
                                document.getElementById("o").innerHTML=(p+" vs "+p)+"<br><h2 id=d>"+(" DRAW")+"</h2>";
                            }
                            else if(random==2) {
                               document.getElementById("o").innerHTML=( s+ " vs " +p+ "<br><h2 id=l>"+(" LOSS")+"</h2>");
                            }
                            else{
                                document.getElementById("o").innerHTML=(r+" vs "+p+"<br><h2 id=w>"+(" WIN")+"</h2>");
                            }
                    }
                    function rock(){
                            
                        if(random==1) {
                             document.getElementById("o").innerHTML=(r+" vs "+r+"<br><h2 id=d>"+(" DRAW")+"</h2>");
                         }
                         else if(random==0) {
                            document.getElementById("o").innerHTML=( p+ " vs " +r+ "<br><h2 id=l>"+(" LOSS")+"</h2>");
                         }
                         else{
                             document.getElementById("o").innerHTML=(s+" vs "+r+"<br><h2 id=w>"+(" WIN")+"</h2>");
                         }
                    }
                    function scissor(){
                        
                        if(random==2) {
                             document.getElementById("o").innerHTML=((s+" vs "+s)+"<br><h2 id=d>"+(" DRAW")+"</h2>");
                         }
                         else if(random==1) {
                            document.getElementById("o").innerHTML=( r+ " vs " +s+ "<br><h2 id=l>"+(" LOSS")+"</h2>");
                         }
                         else{
                             document.getElementById("o").innerHTML=(p+" vs "+s+"<br><h2 id=w>"+(" WIN")+"</h2>");
                         }
                    }
                    

         
