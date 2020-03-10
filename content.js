  var url = "Data.xlsx";

	/* Inicialización del XLSX */
	var req = new XMLHttpRequest();
	req.open("GET", url, true);
  req.responseType = "arraybuffer";

  req.onload = function(e) {
  var data = new Uint8Array(req.response);
  var workbook = XLSX.read(data, {type:"array"});

  

  var first_sheet_name = workbook.SheetNames[0];
  var address_of_cell = 'A1';


  
  var worksheet = workbook.Sheets[first_sheet_name];
  
  var lista = XLSX.utils.sheet_to_json(worksheet, {header:1});
  var lista_01 = lista[1]
  var lista_02 = lista[2]
  var lista_03 = lista[3]
  var lista_04 = lista[4]
  var lista_05 = lista[5]
  var lista_06 = lista[6]

  let blog = localStorage.getItem("Data");

  console.log(blog)


  switch(blog){
    case "1":
      //console.log("1")

      document.getElementById("title01").innerHTML = lista_01[0];
      document.getElementById("body01").innerHTML =lista_01[2];
      document.getElementById("image01").src = lista_01[1];

      break;

    case "2":
      //console.log("2")

      document.getElementById("title01").innerHTML = lista_02[0];
      document.getElementById("body01").innerHTML =lista_02[2];
      document.getElementById("image01").src = lista_02[1];

      break;

    case "3":
      //console.log("3")

      document.getElementById("title01").innerHTML = lista_03[0];
      document.getElementById("body01").innerHTML =lista_03[2];
      document.getElementById("image01").src = lista_03[1];
  
      break;
    
    case "4":
      //console.log("4")

      document.getElementById("title01").innerHTML = lista_04[0];
      document.getElementById("body01").innerHTML =lista_04[2];
      document.getElementById("image01").src = lista_04[1];
  
      break;
    
    case "5":
      //console.log("5")

      document.getElementById("title01").innerHTML = lista_05[0];
      document.getElementById("body01").innerHTML =lista_05[2];
      document.getElementById("image01").src = lista_05[1];
  
      break;
    
    case "6":
        //console.log("6")

      document.getElementById("title01").innerHTML = lista_06[0];
      document.getElementById("body01").innerHTML =lista_06[2];
      document.getElementById("image01").src = lista_06[1];
    
        break;
    
    default:
      break;
  }

  document.getElementById("li1").innerText = lista_01[0];
  document.getElementById("li2").innerText = lista_02[0];
  document.getElementById("li3").innerText = lista_03[0];

  document.getElementById("w1").innerHTML = lista_07[1];
  document.getElementById("w2").innerHTML = lista_08[1];

  document.getElementById("w1").href = lista_07[2];
  document.getElementById("w2").href = lista_08[2];

  

}



req.send();	

function content01(){

  var blog = "1";

   localStorage.setItem("Data", blog);

}

function content02(){

  var blog = "2";

   localStorage.setItem("Data", blog);

}

function content03(){

  var blog = "3";

   localStorage.setItem("Data", blog);

}