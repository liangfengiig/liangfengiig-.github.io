function validateForm()
{
  var x=document.forms["myForm"]["username"].value;
  var y=document.forms["myForm"]["password"].value;
  if (x==null || x=="" || y==null || y=="")
  {
    alert("带“*”的项必须填写");
    return false;
  }
	else alert("登录成功")
}