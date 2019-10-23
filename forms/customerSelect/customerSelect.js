//select name from customer where state = "+ '"' + stateSelected + '"'

customerSelect.onshow=function(){
  let query = "SELECT state FROM customer"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=dsk96139&pass=notmypassword&database=dsk96139&query=" + query)

  if (req1.status == 200) {
      results = JSON.parse(req1.responseText)
      stateList.value = results
  }
  
  for (i = 0, i > results.length, )
}
