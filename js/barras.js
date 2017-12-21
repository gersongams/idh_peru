var localizacion = $("#localizacion");
var poblacion = $("#poblacion");
var departamento = $("#departamento");

var stats = $("#stats");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function actualizarIndicadores(datos) {
  console.log("datos", datos);
  localizacion.text("Localizacion: " + capitalizeFirstLetter(datos.P_NOMB));
  departamento.text("Localizacion: " + capitalizeFirstLetter(datos.ID_DEPNOM));
  poblacion.text("Poblacion: " + datos.Poblacion);

  stats.html(`
    <tr>
      <th class="col-md-9">Indice de desarrollo humano</th>
      <td class="col-md-3" >${datos.IDH.toFixed(2)}</td>
    </tr>
    <tr>
      <th class="col-md-9">Esperanza de vida al nacer</th>
      <td class="col-md-3" >${datos.EVN.toFixed(2)}</td>
    </tr>
    <tr>
      <th class="col-md-9">Población Escolar</th>
      <td class="col-md-3" >${datos.POB_ESC.toFixed(2)}</td>
    </tr>
    <tr>
      <th class="col-md-9">Población mayor a 25 años</th>
      <td class="col-md-3" >${datos.POREDAD_25.toFixed(2)}</td>
    </tr>
    <tr>
      <th class="col-md-9">Ingreso Promedio</th>
      <td class="col-md-3" >${datos.ING_PROMED.toFixed(2)}</td>
    </tr>
  `);

  /*   stats.html(`<tr>
    <th scope='row'>${}</th>
    <td>0123</td>
  </tr> `); */
}
