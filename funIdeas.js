// scary pop up photo change source for new pic
<img onmouseenter="bigImg(this)" onmouseleave="normalImg(this)" border="0" src="img\exorcist.jpgley.gif" alt="Smiley" width="12" height="12">

<script>
function bigImg(x) {
  x.style.height = "640px";
  x.style.width = "640px";
}

function normalImg(x) {
  x.style.height = "12px";
  x.style.width = "12px";
}