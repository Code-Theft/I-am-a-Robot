var i=1;
var score=0;
var negscore=0;


document.getElementById('timer').innerHTML = 002 + ":" + 40;
startTimer();
function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0)
  {
	 
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
					if(score>=20)
					{
						
                    alert("Form submitted successfully\n<b>Hooray!! You Made to the Next Level <b>")
                    
                    window.location.replace("https://forms.gle/wexVk3U1N7UMZJoe9")
					}
					else
					{
						alert("Form submitted successfully\n OOPS!! Try again ")
						location.reload()
					}
				},
                error:function (err){
                    alert("Something Error ")
    
                }
            })
        })

	return;
	
	
	
					
	
	
	
	
	
	
	  
  }
  
  document.getElementById('timer').innerHTML = m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
}
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

function nextimg()
{
	const ini=132;
	var val=ini+i;
	 
	document.getElementById("icon").src="assets/img/"+val+".jfif";
	i++;
	

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
		case 260 :	ret="EB66NK";return ret;
		case 261 :	ret="CAP6T9";return ret;
		case 262 :	ret="BVCX66";return ret;
		case 263 :	ret="CEPHJ3";return ret;
		case 264 :	ret="N9XM9P";return ret;
		case 265 :	ret="AUWCBX";return ret;
		case 266 :	ret="53KTBX";return ret;
		case 267 :	ret="WJNW9";return ret;
		case 268 :	ret="5RUH3S";return ret;
		case 269 :	ret="4SN8SJ";return ret;
		case 270 :	ret="T6XU3V";return ret;
		case 271 :	ret="TMHX8E";return ret;
		case 272 :	ret="X4UYNK";return ret;
		case 273 :	ret="KPVJWC";return ret;
		case 274 :	ret="BCTHY5";return ret;
		case 275 :	ret="RJWMC5";return ret;
		case 276 :	ret="CH993N";return ret;
		case 277 :	ret="NRPJJD";return ret;
		case 278 :	ret="XCK54T";return ret;
		case 279 :	ret="45EVDH";return ret;
		case 280 :	ret="SER4VX";return ret;
		case 281 :	ret="3HA8PA";return ret;
		case 282 :	ret="HV6NEK";return ret;
		case 283 :	ret="E9DC53";return ret;
		case 284 :	ret="VN3H6J";return ret;
		case 285 :	ret="JJ3PNV";return ret;
		case 286 :	ret="8KSWPP";return ret;
		case 287 :	ret="TYDRA6";return ret;
		case 288 :	ret="E3AD4X";return ret;
		case 289 :	ret="UPWXDB";return ret;
		case 290 :	ret="PV8BHY";return ret;
		case 291 :	ret="SHHRU4";return ret;
		case 292 :	ret="XU5X6V";return ret;
		case 293 :	ret="RR3TWH";return ret;
		case 294 :	ret="TSPEVJ";return ret;
		case 295 :	ret="Y3DUVX";return ret;
		case 296 :	ret="SERY3D";return ret;
		case 297 :	ret="S5AR84";return ret;
		case 298 :	ret="3KASAD";return ret;
		case 299 :	ret="SNTY38";return ret;
		case 300 :	ret="4YE9HW";return ret;

		
		
		
		
			
							
					
					
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



	
