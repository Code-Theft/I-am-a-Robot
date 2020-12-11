var i=1;
var score=0;
var negscore=0;


function startTimer() {
  
	 
	  //var total= score;
	  //alert(total);
	//window.location.replace("score.html");
	 var name =document.getElementById("nm").value;
 var mail=document.getElementById("em").value;
	
	document.getElementById("formContent").innerHTML ="<p>YOU SCORED  : "+score+"</p><form id='gform' method='POST'  action='https://script.google.com/macros/s/AKfycbxdeTrUUR23mSFHUPU-OmM2V-FGQWV2tRUMZvrT/exec'><label for='fname'> Name</label><input type='text' id='fname' name='name' placeholder='"+name+"'  readonly><br><label for='lname'>Email</label><input type='text' id='lname' name='email'  placeholder='"+mail+"' readonly><label for='total'>Score</label><input type='text' id='total' name='score' placeholder='"+score+"' readonly ><label for='totalin'>Incorrect</label><input type='text' id='totalneg' name='negscore' placeholder='"+negscore+"'  readonly ><input type='submit' value='Submit'></form>";

   document.getElementById("fname").value=name;
document.getElementById("lname").value=mail;
document.getElementById("total").value=score;
document.getElementById("totalneg").value=negscore;
	
	
	
	$("#gform").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbxdeTrUUR23mSFHUPU-OmM2V-FGQWV2tRUMZvrT/exec",
                data:$("#gform").serialize(),
                method:"post",
                success:function (response){
					if(score==10)
					{
						alert("Form submitted successfully\n Redirecting To Next Task")
                    
                    window.location.replace("https://forms.gle/wexVk3U1N7UMZJoe9")
					}
					else{
						
						
                    alert("Form submitted successfully ")
                    
					}
                },
                error:function (err){
                    alert("Something Error")
    
                }
            })
        })

	return;
	
	
	
					
	
	
	
	
	
	
	  
  
  
  
}




function nextimg_val()
{
	const ini=250;
	var val=ini+i;
	
	const article = document.querySelector('#icon');
	var n,ans,fin_ans;
	
	n=article.dataset.id;
	ans=document.getElementById("login").value;
	
	fin_ans = n.localeCompare(ans);
	
	if(fin_ans == 0)
	{
		score++;
		
	}
	else
	{
		negscore++;
	}
	
	document.getElementById("scr").innerHTML=score;
	document.getElementById("ngscr").innerHTML=negscore;
	
	
	
	
	
	document.getElementById("icon").src="assets/img/"+val+".jpg";
	i++;
	
	article.dataset.id=datab(val);
	var form = null;
	document.getElementById("login").value=form;

	
}
function datab(k)
{
	var ret;
	switch(k)
	{	
		
		case 251 :	ret="UUUMUE";return ret;
		case 252 :	ret="K8YPUT";return ret;
		case 253 :	ret="W6UHYC";return ret;
		case 254 :	ret="SUCK66";return ret;
		case 255 :	ret="8B4MJC";return ret;
		case 256 :	ret="N6US3J";return ret;
		case 257 :	ret="8TJKA6";return ret;
		case 258 :	ret="95K8SB";return ret;
		case 259 :	ret="A5DP5K";return ret;
		
		case 260 :  startTimer();return 
		
		
		
		
		
			
							
					
					
	}
}
function postToGoogle() {
                
				

				
	
                $.ajax({
                    url: "https://docs.google.com/forms/d/e/1FAIpQLSfwwr_thxplsWYLLkeH1KiyId5KKvTDSfNnzPd3HTJm0Ee-lg/formResponse?",
					data: {"entry.1928903205": name, "entry.542453013": mail, "entry.1845723228": score, "entry.1878256062": negscore},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
					{
					},
					error: function(x, y, z)
						{

							$('#success-msg').show();
							$('#form').hide();
							
						}
                });
				return false;
            }



	
