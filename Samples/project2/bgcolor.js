var colors=['yellow','lightgreen','red','blue','green','marron','crimson','teal','darkgoldenrod','darkmagenta','burlywood','orange']

i=0;

$('#changeColor').click(function(){
    $('div').css('backgroundColor',colors[i]);
    i=(i==colors.length-1)?0:(i+1);
});