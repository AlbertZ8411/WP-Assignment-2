	function lose_check_email(){
					var flag = false;
					var email=document.getElementById("email").value;
					var message=document.getElementById("message");
					if(email.trim().length!=0 && email.trim() != "example@hostname.com"){
						document.getElementById("email_p").style.visibility="hidden";
						if(checkEmail(email.trim())){
							flag=true;
						}
						else
						{
							document.getElementById("email_p").style.visibility="visible";
							
							flag = false;
						}
					}
					else
					{
						document.getElementById("email").value="example@hostname.com";
						document.getElementById("email_p").style.visibility="visible";
						flag = false;
					}
					if(message.value.trim() == "--Please Enter Your Message--")
					{
						flag = false;
					}
					if(flag)
					{
						document.getElementById("contact_sub_btn").removeAttribute("disabled");
					}
					else
					{
						document.getElementById("contact_sub_btn").disabled="true";
					}
				
			}
			function checkEmail(str){
				var re = /(.+)@(.+){2,}\.(.+){2,}/;
				if(re.test(str)){
				
					return true;
				}else{
					
					return false;
				}
			}
			function lose_check_message(){
					var flag=false;
					var message=document.getElementById("message").value;
					var email=document.getElementById("email");
					if(message.trim().length == 0 || message.trim().length == "--Please Enter Your Message--"){
						document.getElementById("message_p").style.visibility="visible";
						document.getElementById("message").value="--Please Enter Your Message--";
						flag = false;
					}
					else
					{
						document.getElementById("message_p").style.visibility="hidden";
						flag = true;
					}
					if(email.value.trim() == "example@hostname.com")
					{
						flag = false;
					}
					else
					{
						if(checkEmail(email.value.trim()))
						{
							if(message.trim().length == 0 || message.trim().length == "--Please Enter Your Message--"){
								flag = false;
							}
							else
							{
								flag = true;
							}
						}
						else
						{
							flag = false;
						}
					}
					if(flag)
					{
						document.getElementById("contact_sub_btn").removeAttribute("disabled");
					}
					else
					{
						document.getElementById("contact_sub_btn").disabled="true";
					}
			}
			function focus_check_message(){
					var message=document.getElementById("message");
					if(message.value=="--Please Enter Your Message--"){
					message.value="";
					}
			}
			function contact_submit(){
				var select=document.getElementById("subject");
				if(select.value.length==0){
					document.getElementById("select_p").style.visibility="visible";
					return;
				}else{
				var btn=document.getElementById("contact_sub_btn");
				btn.submit();
				}
				
			}
			function focus_check_email(){
				var email=document.getElementById("email");
				if(email.value.trim() == "example@hostname.com")
				{
					email.value="";
				}
			}