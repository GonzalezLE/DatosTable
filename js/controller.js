function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
      return;
    }
    var lector = new FileReader();
    var obj;
    lector.onload = function(e) {
      var contenido = e.target.result;
      mostrarContenido(contenido);
      obj = JSON.parse(contenido);
      WritingTable(obj);
      
      

    };
    
    lector.readAsText(archivo);
}

function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    elemento.innerHTML = contenido;
}

  document.getElementById('file-input')
    .addEventListener('change', leerArchivo, false);

function WritingHTML(id,texto) {
  var elemento = document.getElementById(id);
  elemento.innerHTML = texto;
  
}
function WritingTable(Json) {
  console.log(Json.informaltable.tgroup.tbody[1]);
  //const obj=Json.informaltable.tgroup.tbody;
  let hora;
  for(var i=0;i<=15;i++){
    console.log(i);
    if(i==0){
      WritingHTML('hora','HORA');
      WritingHTML('dil',Json.informaltable.tgroup.tbody[i][1].para);
      WritingHTML('dim',Json.informaltable.tgroup.tbody[i][2].para);
      WritingHTML('dimi',Json.informaltable.tgroup.tbody[i][3].para);
      WritingHTML('dij',Json.informaltable.tgroup.tbody[i][4].para);
      WritingHTML('div',Json.informaltable.tgroup.tbody[i][5].para);
      WritingHTML('dis',Json.informaltable.tgroup.tbody[i][6].para);
    }else{
      hora=Json.informaltable.tgroup.tbody[i][0].para;
      WritingHTML(hora,hora);
      console.log('la hora',hora);
      for(var x=1;x<=7;x++){
        switch(x){
          case 1:
              //WritingHTML('l'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              WritingHTML('l'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              console.log('l'+hora,Json.informaltable.tgroup.tbody[i][x].para);
            break;
          case 2:
              WritingHTML('m'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              console.log('m'+hora,Json.informaltable.tgroup.tbody[i][x].para);
            break;
          case 3:
              WritingHTML('mi'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              console.log('mi'+hora,Json.informaltable.tgroup.tbody[i][x].para);
            break;
          case 4:
              WritingHTML('j'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              console.log('j'+hora,Json.informaltable.tgroup.tbody[i][x].para);
            break;
          case 5:
              WritingHTML('v'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              console.log('v'+hora,Json.informaltable.tgroup.tbody[i][x].para);
            break;
          case 6:
              WritingHTML('s'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              console.log('s'+hora,Json.informaltable.tgroup.tbody[i][x].para);
            break;
        }
      }
      console.log('pausa');

    }

  }
}
