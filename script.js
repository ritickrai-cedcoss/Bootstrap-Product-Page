function minus()
{
  $value = document.getElementById("counterValue").value;
  if($value>1){
    $value--;
  }
  document.getElementById("counterValue").value=$value;
  console.log($value);
}

function plus()
{
  $value = document.getElementById("counterValue").value;
  $value++;
  document.getElementById("counterValue").value=$value;
  console.log($value);
}