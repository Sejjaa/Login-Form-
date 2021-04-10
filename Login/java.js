var Password,Username;

var username,password;

var Login;
var body=$('Body');
$( ()=>{

Username="new_user";
Password="123456789";

username=$('#username');
password=$('#password');

Login=$('.Login');

var myform=document.getElementById('myform');

myform.addEventListener('submit',(e)=>{

	e.preventDefault();


})


$(Login).on("click",LoginUser);

$(username).on("click",()=>{

	username.val('');

} );

$(password).on("click",()=>{

	password.val('');

} );


} )


var msg;
var msg1;
var tracker1=0;
var tracker2=0;
var wrong;
var tracker3=0;
var tracker4=0;
var yes1;
var yes;
var wrong1;
var main2;
var check=0;
var exist=0;
var exist1=0;
function LoginUser(){
	
	var checkuser=$(username).val();
	var checkpassword=$(password).val();

	if(tracker1>=1){
		msg.remove();
	}if(tracker2>=1){
		msg1.remove();
	}if(check==1){
		msg1.remove();
		check=0;	
	}

	if(exist===2){
		yes.remove();

	}else{
		exist=0;
	}

	if(exist1===2){
		yes1.remove();

	}else{
		exist1=0;
	}

	if(tracker3===false){
		wrong.remove();
	}

	if(tracker4===false){
		wrong1.remove();
	}
	
	if(checkuser === Username  ){
		username.css({ border:'1px solid green', });
		let pos=username.position();
		tracker3=true;
		body.append('<div id="yes"></div>  ')
		yes=$('#yes');
		yes.css({position:'absolute', width:'30px',height:'30px',backgroundImage:'url(yes.png)',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'contain'  })
		yes.css({position:'absolute',left:pos.left+420,top:pos.top+1  })
		exist=2;

	}else if(checkuser===""){
		tracker1++;
		tracker3=false;
		username.css({ border:'1px solid red', });
		let pos=username.position();
		body.append('<div id="wrong"></div>  ')
		wrong=$('#wrong');
		console.log('dadada');
		wrong.css({position:'absolute', width:'30px',height:'30px',backgroundImage:'url(no.png)',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'contain'  })
		wrong.css({left:pos.left+420,top:pos.top+1  })
		body.append('<div id="msg"> please, enter username</div>  ');
		msg=$('#msg');
		msg.css({position:'absolute', top:pos.top+170,left:pos.left  });



	}else{
		tracker1++;
		tracker3=false;
		username.css({ border:'1px solid red', });
		let pos=username.position();
		body.append('<div id="wrong"></div>  ')
		wrong=$('#wrong');
		wrong.css({position:'absolute', width:'30px',height:'30px',backgroundImage:'url(no.png)',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'contain'  })
		wrong.css({left:pos.left+420,top:pos.top+1  })
		body.append('<div id="msg"> please, enter valid username</div>  ');
		msg=$('#msg');
		msg.css({position:'absolute', top:pos.top+170,left:pos.left  });

	}


	if(checkpassword===Password){
		tracker4=true;
		password.css({ border:'1px solid green', });
		let pos1=password.position();
		body.append('<div id="yes1"></div>  ')
		yes1=$('#yes1');
		yes1.css({position:'absolute', width:'30px',height:'30px',backgroundImage:'url(yes.png)',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'contain'  })
		yes1.css({ left:pos1.left+420,top:pos1.top+1  })
		main2=pos1;
		exist1=2;


	}else if(checkpassword==="") {
		tracker2++;
		tracker4=false;
		password.css({ border:'1px solid red', });
		let pos1=password.position();
		body.append('<div id="wrong1"></div>  ')
		wrong1=$('#wrong1');
		wrong1.css({position:'absolute', width:'30px',height:'30px',backgroundImage:'url(no.png)',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'contain'  })
		wrong1.css({left:pos1.left+420,top:pos1.top+1  })
		body.append('<div id="msg1">please, enter password</div>  ');
		msg1=$('#msg1');
		msg1.css({position:'absolute', top:pos1.top+140,left:pos1.left  });


	}else{
		tracker2++;
		tracker4=false;
		password.css({ border:'1px solid red', });
		let pos1=password.position();
		body.append('<div id="wrong1"></div>  ')
		wrong1=$('#wrong1');
		wrong1.css({position:'absolute', width:'30px',height:'30px',backgroundImage:'url(no.png)',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'contain'  })
		wrong1.css({left:pos1.left+420,top:pos1.top+1  })
		body.append('<div id="msg1">please, enter valid password</div>  ');
		msg1=$('#msg1');
		msg1.css({position:'absolute', top:pos1.top+140,left:pos1.left  });

	}



	if(tracker3==true && tracker4==true){
		if(tracker1>=1){
		msg.remove();
	   }if(tracker2>=1){
		msg1.remove();
	   }


		body.append('<div id="msg1">Successful login!</div>  ');
		msg1=$('#msg1');
		msg1.css({position:'absolute', top:main2.top+120,left:main2.left  });

		check=1;
	}




}