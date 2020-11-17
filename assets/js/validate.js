var i=1;
var score=0;
var negscore=0;


document.getElementById('timer').innerHTML = 013 + ":" + 00;
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
	const ini=111;
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
		
		case 111 :	ret="MYA58P";return ret;
		case 112 :	ret="9W8KVT";return ret;
		case 113 :	ret="9VVKVR";return ret;
		case 114 :	ret="PE6VKM";return ret;
		case 115 :	ret="N6RD";return ret;
		case 116 :	ret="WT4MP";return ret;
		case 117 :	ret="CJ5AWE";return ret;
		case 118 :	ret="YNYVP5";return ret;
		case 119 :	ret="AKUJ";return ret;
		case 120 :	ret="WY4S";return ret;
		case 121 :	ret="6NBKV";return ret;
		case 122 :	ret="9BA485";return ret;
		case 123 :	ret="Y459";return ret;
		case 124 :	ret="V5XW8H";return ret;
		
		
		case 125 :	ret="B6MX";return ret;
		case 126 :	ret="NYCWR4";return ret;
		case 127 :	ret="R4XRSX";return ret;
		case 128 :	ret="EH8TX";return ret;
		case 129 :	ret="MXPMV";return ret;
		case 130 :	ret="W93BX";return ret;
		case 131 :	ret="JA3V8";return ret;
		case 132 :	ret="SUWEKB";return ret;
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
		case 144 :	ret="P8E9BD";return ret;
		case 145 :	ret="WKB6MP";return ret;
		case 146 :	ret="3K3PJ3";return ret;
		case 147 :	ret="TUUADJ";return ret;
		case 148 :	ret="5V3U5U";return ret;
		case 149 :	ret="TWNCYX";return ret;
		case 150 :	ret="MPASX5";return ret;
		case 151 :	ret="MKKU3N";return ret;
		case 152 :	ret="UM93N";return ret;
		case 153 :	ret="TDR8TP";return ret;
		case 154 :	ret="VMRPPJ";return ret;
		case 155 :	ret="NXUYCS";return ret;
		case 156 :	ret="VDH3JS";return ret;
		case 157 :	ret="ITKAUT";return ret;
		case 158 :	ret="YHERUJ";return ret;
		case 159 :	ret="VDSAPT";return ret;
		case 160 :	ret="4NR3AY";return ret;
		case 161 :	ret="XDXNSS";return ret;
		case 162 :	ret="SECKJCM";return ret;
		case 163 :	ret="PBYE54";return ret;
		case 164 :	ret="URUBEA";return ret;
		case 165 :	ret="RVMNNT";return ret;
		case 166 :	ret="P96WVU";return ret;
		case 167 :	ret="YYX5RC";return ret;
		case 168 :	ret="K3BMYR";return ret;
		case 169 :	ret="53NP8P";return ret;
		case 170 :	ret="KCKH59";return ret;
		case 171 :	ret="KVDP98";return ret;
		case 172 :	ret="X6XK8A";return ret;
		case 173 :	ret="ATNU3W";return ret;
		case 174 :	ret="MWA8WV";return ret;
		case 175 :	ret="9393K3";return ret;
		case 176 :	ret="PP585E";return ret;
		case 177 :	ret="EWMTK8";return ret;
		case 178 :	ret="6YB8MA";return ret;
		case 179 :	ret="MKUMY3";return ret;
		case 180 :	ret="NCVVPB";return ret;
		case 181 :	ret="T653P4";return ret;
		case 182 :	ret="4M998P";return ret;
		case 183 :	ret="DTHN3S";return ret;
		case 184 :	ret="5SAX8K";return ret;
		case 185 :	ret="KWRM4R";return ret;
		case 186 :	ret="9EKMCY";return ret;
		case 187 :	ret="VAX4MA";return ret;
		case 188 :	ret="XAYJWH";return ret;
		case 189 :	ret="BUWVSP";return ret;
		case 190 :	ret="HHMAMA";return ret;
		case 191 :	ret="XW9CDJ";return ret;
		case 192 :	ret="8JWDPJ";return ret;
		case 193 :	ret="8BTY9U";return ret;
		case 194 :	ret="DDYUC6";return ret;
		case 195 :	ret="WUK54D";return ret;
		case 196 :	ret="BJXRV6";return ret;
		case 197 :	ret="65K33A";return ret;
		case 198 :	ret="IBE895";return ret;
		case 199 :	ret="B88JPD";return ret;
		case 200 :	ret="YA6HTV";return ret;
		case 201 :	ret="AXK3";return ret;
		case 202 :	ret="M9KJT";return ret;
		case 203 :	ret="DPXH";return ret;
		case 204 :	ret="BPYSV";return ret;
		case 205 :	ret="8U5U";return ret;
		case 206 :	ret="3RT6";return ret;
		case 207 :	ret="WBPRA";return ret;
		case 208 :	ret="PB8WW";return ret;
		case 209 :	ret="45NX";return ret;
		case 210 :	ret="YA6HTV";return ret;
		case 211 :	ret="P9YTD";return ret;
		case 212 :	ret="S66K3V";return ret;
		case 213 :	ret="6PMA4";return ret;
		case 214 :	ret="N664T";return ret;
		case 215 :	ret="E9YCA5";return ret;
		case 216 :	ret="983S5";return ret;
		case 217 :	ret="JAJN6";return ret;
		case 218 :	ret="YMMRVB";return ret;
		case 219 :	ret="NCTHS";return ret;
		case 220 :	ret="3YKU6K";return ret;
		case 221 :	ret="PAX46";return ret;
		case 222 :	ret="5UUXNH";return ret;
		case 223 :	ret="KNB89Y";return ret;
		case 224 :	ret="48BRNT";return ret;
		case 225 :	ret="SW6V8";return ret;
		case 226 :	ret="RYDM";return ret;
		case 227 :	ret="CNUK";return ret;
		case 228 :	ret="E3PRRV";return ret;
		case 229 :	ret="M55X";return ret;
		case 230 :	ret="W89N8";return ret;
		case 231 :	ret="9CS8C";return ret;
		case 232 :	ret="E6DUSA";return ret;
		case 233 :	ret="NSTEMK";return ret;
		case 234 :	ret="SHP64T";return ret;
		case 235 :	ret="553H";return ret;
		case 236 :	ret="ARDCNB";return ret;
		case 237 :	ret="XXXPD";return ret;
		case 238 :	ret="U35P84";return ret;
		case 239 :	ret="X4SM";return ret;
		case 240 :	ret="DTNSSD";return ret;
		case 241 :	ret="EXE9E";return ret;
		case 242 :	ret="4VJA";return ret;
		case 243 :	ret="8M3S4W";return ret;
		case 244 :	ret="C3RWPM";return ret;
		case 245 :	ret="8BDS";return ret;
		case 246 :	ret="VRAE8";return ret;
		case 247 :	ret="JXJTPU";return ret;
		case 248 :	ret="AH999";return ret;
		case 249 :	ret="X4484Y";return ret;
		case 250:	ret="J5MVD";return ret;
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
		case 267 :	ret="VY9XXP";return ret;
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



	
