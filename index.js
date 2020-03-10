var url = "Data.xlsx";

	/* set up async GET request */
	var req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.responseType = "arraybuffer";

  req.onload = function(e) {
  var data = new Uint8Array(req.response);
  var workbook = XLSX.read(data, {type:"array"});

  /*console.log(XLSX.utils.sheet_to_json(worksheet, (raw, true)));*/ 

  /*document.getElementById("test").innerHTML = workbook[0];*/

  var first_sheet_name = workbook.SheetNames[0];
  var address_of_cell = 'A1';

  /* Get worksheet */
  var worksheet = workbook.Sheets[first_sheet_name];

  var lista = XLSX.utils.sheet_to_json(worksheet, {header:1});
  var lista_01 = lista[1]
  var lista_02 = lista[2]
  var lista_03 = lista[3]
  var lista_04 = lista[4]
  var lista_05 = lista[5]
  var lista_06 = lista[6]
  var lista_07 = lista[7]
  var lista_08 = lista[8]
  var lista_09 = lista[9]
  var lista_10 = lista[10]
  var lista_11 = lista[11]
  var lista_12 = lista[12]

 


  console.log(lista_01[0])
  console.log(lista);

  document.getElementById("title01").innerHTML = lista_01[0];
  document.getElementById("short01").innerHTML = lista_01[3];
  document.getElementById("im01").src = lista_01[1];

  document.getElementById("title02").innerHTML = lista_02[0];
  document.getElementById("short02").innerHTML = lista_02[3];
  document.getElementById("im02").src = lista_02[1];

  document.getElementById("title03").innerHTML = lista_03[0];
  document.getElementById("short03").innerHTML = lista_03[3];
  document.getElementById("im03").src = lista_03[1];

  document.getElementById("title04").innerHTML = lista_04[0];
  document.getElementById("short04").innerHTML = lista_04[3];
  document.getElementById("im04").src = lista_04[1];

  document.getElementById("title05").innerHTML = lista_05[0];
  document.getElementById("short05").innerHTML = lista_05[3];
  document.getElementById("im05").src = lista_05[1];

  document.getElementById("title06").innerHTML = lista_06[0];
  document.getElementById("short06").innerHTML = lista_06[3];
  document.getElementById("im06").src = lista_06[1];

  document.getElementById("li1").innerText = lista_01[0];
  document.getElementById("li2").innerText = lista_02[0];
  document.getElementById("li3").innerText = lista_03[0];

  document.getElementById("w1").innerHTML = lista_07[1];
  document.getElementById("w2").innerHTML = lista_08[1];

  document.getElementById("tmw").innerHTML = lista_09[1];
  document.getElementById("cmw").innerHTML = lista_10[1];
  document.getElementById("bmw1").innerHTML = lista_11[1];
  document.getElementById("bmw2").innerHTML = lista_12[1];

  document.getElementById("bmw1").href = lista_11[2];
  document.getElementById("bmw2").href = lista_12[2];

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

function content04(){

  var blog = "4";

   localStorage.setItem("Data", blog);

}

function content05(){

  var blog = "5";

   localStorage.setItem("Data", blog);

}

function content06(){

  var blog = "6";

   localStorage.setItem("Data", blog);

}
	