function check(){


  let first=document.getElementById('firstField').value;
  let second=document.getElementById('secondField').value;
  if(first == second )
  {
    if(first.length < 8 || second.length <8){
      alert("Password must be at least 8 characters!");
    }
    else{
        alert("nice job");
    }

  }
  else
  {
    if(first.length < 8 || second.length <8){
      alert("Passwords must be at least 8 characters and must match!");
    }
    else{
      alert("Passwords do not match");
    }


  }
}
