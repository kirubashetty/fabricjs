var canvas = new fabric.Canvas('canvas');
document.getElementById("uploader").onchange = function(e) {
  var reader = new FileReader();
  var val=1;
  reader.onload = function(e) {
    var image = new Image();
    image.src = e.target.result;
    image.onload = function() {
      var img = new fabric.Image(image);
      img.set({
        left: canvas.width/4
       
      });
      img.scaleToWidth(canvas.width);
      img.scaleToHeight(canvas.height);
      canvas.add(img).setActiveObject(img).renderAll();
    }
  }
  reader.readAsDataURL(e.target.files[0]);
 
}
canvas.on('mouse:wheel', function(opt) {
  var delta = opt.e.deltaY;
  var zoom = canvas.getZoom();
  zoom *= 0.999 ** delta;
  if (zoom > 20) zoom = 20;
  if (zoom < 1) zoom = 1;
  canvas.setZoom(zoom);
  opt.e.preventDefault();
  opt.e.stopPropagation();
})
canvas.on('mouse:down', function(opt) {
  if(opt.target==null)
  {
    canvas.setZoom(1);
  }
});
