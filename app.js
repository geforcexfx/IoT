// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$('.SeeMore2').click(function(){
  var xhr = new XMLHttpRequest();
  var $this = $(this);
  $this.toggleClass('SeeMore2');
  console.log($("#fold_p").text())
  console.log("fold")
  console.log($this.text())
  if($this.hasClass('SeeMore2')){
    $this.text('OFF');
    $("#fold_p").text(("#fold_p").text = 'ON');
      xhr.open('GET','http://192.168.1.28:8089/LED=ON/', true);
      xhr.send();
      //
  } else {
    $this.text('ON');
    $("#fold_p").text(("#fold_p").text = 'OFF');
    xhr.open('GET','http://192.168.1.28:8089/LED=OFF/', true);
    xhr.send();
    //console.log(xhr.send());
  }

});
