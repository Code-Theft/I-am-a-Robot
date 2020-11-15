var i=1;
var score=0;
var negscore=0;


document.getElementById('timer').innerHTML = 010 + ":" + 30;
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
                    alert("Form submitted successfully")
                    
                    window.location.replace("index.html")
                },
                error:function (err){
                    alert("Something Error")
    
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
	const ini=132;
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
	
	
	
	
	
	document.getElementById("icon").src="assets/img/"+val+".jfif";
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
		case 133 :	ret="WUNN4D";
					return ret;
		case 134 :	ret="3ABHKW";
					return ret;
		case 135 :	ret="AR5RHT";
					return ret;
		case 136 :	ret="NV5VPX";
					return ret;
		case 137 :	ret="PYRMTD";return ret;
		case 138 :	ret="C94TKM";return ret;
		case 139 :	ret="6V4RHH";return ret;
		case 140 :	ret="NH44MK";return ret;
		case 141 :	ret="CAWXNM";return ret;
		case 142 :	ret="D5UUNK";return ret;
		case 143 :	ret="6SUUS3";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
		case 136 :	ret="NV5VPX";return ret;
			
							
					
					
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



	
