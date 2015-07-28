<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script>
$(document).ready(function(){
    $("button").click(function(){
        $.ajax({url:"demo_ajax_load.asp",
beforeSend: function(){
$("#wait").css("display", "block");
},
success:function(){
$("#wait").css("display", "none");
}


)});
    });
});
</script>
</head>
<body>

<div id="txt"><h2>Let AJAX change this text</h2></div>

<button>Change Content</button>

<div id="wait" style="display:none;width:69px;height:89px;border:1px solid black;position:absolute;top:50%;left:50%;padding:2px;"><img src='demo_wait.gif' width="64" height="64" /><br>Loading..</div>

</body>
</html>
