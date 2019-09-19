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
//evento de cargar
  document.getElementById('file-input')
    .addEventListener('change', leerArchivo, false);

function WritingHTML(id,texto) {
  var elemento = document.getElementById(id);
  elemento.innerHTML = texto;
}
function WritingTable(Json) {
  //console.log(Json.informaltable.tgroup.tbody[1]);
  //const obj=Json.informaltable.tgroup.tbody;

  
  let hora;
  for(var i=0;i<=15;i++){
    //console.log(i);
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
      //console.log('la hora',hora);



      for(var x=1;x<=7;x++){
        switch(x){
          case 1:
              //WritingHTML('l'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              WritingHTML('l'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              //console.log('l'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              console.log(analizaCadena('lunes',hora,Json.informaltable.tgroup.tbody[i][x].para));
            break;
          case 2:
              WritingHTML('m'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              //console.log('m'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              console.log(analizaCadena('martes',hora,Json.informaltable.tgroup.tbody[i][x].para));
            break;
          case 3:
              WritingHTML('mi'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              //console.log('mi'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              console.log(analizaCadena('miercoles',hora,Json.informaltable.tgroup.tbody[i][x].para));
            break;
          case 4:
              WritingHTML('j'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              //console.log('j'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              console.log(analizaCadena('jueves',hora,Json.informaltable.tgroup.tbody[i][x].para));
            break;
          case 5:
              WritingHTML('v'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              //console.log('v'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              console.log(analizaCadena('viernes',hora,Json.informaltable.tgroup.tbody[i][x].para));
            break;
          case 6:
              WritingHTML('s'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              //console.log('s'+hora,Json.informaltable.tgroup.tbody[i][x].para);
              console.log(analizaCadena('sabado',hora,Json.informaltable.tgroup.tbody[i][x].para));
            break;
        }
      }
    }
  }
  //console.log('m'+hora,Json.informaltable.tgroup.tbody[i][x].para);
}


function analizaCadena(dia,hora,cadena){
  /*
  * Hora--****
    Dia--****
    Actividad---*******
    Tipo actividad (1-materia - 0 apoyo)--***
    grupo y grado--***
    carrera--*******
    lugar (salon o edificio)--***
    quien (Maestro)
    periodo
  */
 
  /*const Json={
    actividad,
    tipoActividad,
    grupo,
  }*/

  var actividad;
  var tipoActividad;
  var grupoGrado=0
  var carrera;
  var lugar;
  var profe;
  var periodo;
  
  //valido si es un grupo
  let gradoPos=cadena.indexOf("º");
  //console.log(gradoPos);
  
  //aqui saco mi actividad y tipo de actividad
  if(gradoPos>=1){
    //sabemos tipo de actividad
    tipoActividad=1;

    //aqui mi grado y grupo
    grupoGrado=cadena.charAt(gradoPos-1)+cadena.charAt(gradoPos+1);
    
    //sabemos actividad
    let concatena="";
    for (let i = 0; i < gradoPos-1; i++) {
      concatena+=cadena.charAt(i);
    }
    actividad=concatena;
    concatena="";
    //sabemos la carrera 
    let parentecis1 = cadena.indexOf("(");
    let parentecis2 = cadena.indexOf(")");
    for (let x = parentecis1+1; x < parentecis2; x++) {
      concatena+=cadena.charAt(x);
    }
    carrera=concatena;
    concatena="";
    //sabemos lugar
    for (let w = parentecis2+1; w < cadena.length; w++) {
      concatena+=cadena.charAt(w);  
    }
    lugar=concatena;
    concatena="";
    const obj={
      dia,
      hora,
      actividad,
      tipoActividad,
      carrera,
      lugar,
      grupoGrado
    }
    return obj;
    //console.log(obj);
/*
    console.log('este es mi dia',dia);
    console.log('este es mi hora',hora);
    console.log('esta es mi actividad',actividad);
    console.log('tipo actividad',tipoActividad);
    console.log('esta es la carrera',carrera);
    console.log('este es mi lugar',lugar);
    console.log('este es mi grado y grupo',grupoGrado);
*/
  }else{
    if (gradoPos<1) { 
      //saber tipo de actividad
      tipoActividad=0;
      //console.log('soy actividad apoyo',tipoActividad);
      if(actividad!=""){
        actividad=cadena
      }else{
        actividad="";
      } 
      //console.log('yo soy la actividad',actividad);
      //console.log('yo soy el dia',dia);
      //console.log('yo soy la hora',hora);
      //saber actividad
      actividad=cadena;
      const obj={
        dia,
        hora,
        actividad,
        tipoActividad
      }
      //console.log(obj);
      return obj;
    }
  }

  /*const obj={
    dia:{
      hora,
      actividad,
      tipoActividad,
      carrera,
      lugar,
      profe,
      periodo
    }
  }
  console.log(obj);*/
  /*
    Metodología de la Programación1ºJ (TIC)D5 - 113
  */
}
