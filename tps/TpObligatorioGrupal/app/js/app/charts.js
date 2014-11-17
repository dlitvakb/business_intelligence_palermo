var calcular_medidas_anio = function (anio) {
  var data = _.map(new DW.FactList().getAll(), function (fact) {
    return [fact.getTiempo().id_anio, fact.venta_bruta, fact.venta_neta, fact.costo];
  });

  var dates = _.uniq(_.map(data, function (data_venta) {
    return data_venta[0];
  })).sort();

  var calcular_medida = function (date, indice_medida) {
    return _.reduce(
      _.map(
        _.filter(
          data,
          function (data_venta) { return data_venta[0] == date; }
        ),
        function (data_venta) { return data_venta[indice_medida]; }
      ),
      function (memo, medida) { return memo + medida; },
      0
    )
  }

  return [
    anio,
    calcular_medida(anio, 1),
    calcular_medida(anio, 2),
    calcular_medida(anio, 3)
  ];
}

var anios = _.uniq(_.map(new DW.TiempoList().getAll(), function (tiempo) { return tiempo.id_anio; })).sort();
var primer_anio = anios[0];

$('#anio').html(primer_anio);

var medidas_primer_anio = calcular_medidas_anio(primer_anio);

var chart_medidas_por_anio = c3.generate({
  bindto: '#chart-medidas-anio',
  data: {
    columns: [
      ['Ventas Brutas', medidas_primer_anio[1]],
      ['Ventas Netas', medidas_primer_anio[2]],
      ['Costo', medidas_primer_anio[3]]
    ],
    type: 'bar'
  }
});

var generar_chart_medidas_anio = function (anio) {
  chart_medidas_por_anio.unload();

  var medidas_por_anio = calcular_medidas_anio(anio);

  chart_medidas_por_anio.load({
    columns: [
      ['Ventas Brutas', medidas_por_anio[1]],
      ['Ventas Netas', medidas_por_anio[2]],
      ['Costo', medidas_por_anio[3]]
    ],
    type: 'bar'
  });
}

var insertar_botones_anio = function () {
  var anios = _.uniq(_.map(new DW.TiempoList().getAll(), function (tiempo) { return tiempo.id_anio; })).sort();

  _.each(anios, function (anio) {
    $("<div/>", {
      "class": 'btn btn-default',
      html: anio,
      data: { anio: anio },
      on: {
        click: function (e) {
          var anio = $(this).data('anio');
          $('#anio').html(anio);
          generar_chart_medidas_anio(anio);
        }
      }
    }).appendTo('#year-buttons');
  });
}

insertar_botones_anio();

var calcular_ventas_anuales = function () {
  var data = _.map(new DW.FactList().getAll(), function (fact) {
    return [fact.getTiempo().id_anio, fact.venta_neta];
  });

  var dates = _.uniq(_.map(data, function (data_venta) {
    return data_venta[0];
  })).sort();

  return _.map(dates, function (date) {
    return [
      date,
      _.reduce(
        _.map(
          _.filter(
            data,
            function (data_venta) { return data_venta[0] == date; }
          ),
          function (data_venta) { return data_venta[1]; }
        ),
        function (memo, monto_venta) { return memo + monto_venta; },
        0
      )
    ]
  });
}

var ventas_anuales = calcular_ventas_anuales();
var ventas_anuales_x = _.map(ventas_anuales, function (ventas_anio) { return ventas_anio[0]; });
ventas_anuales_x.unshift('x');
var ventas_anuales_y = _.map(ventas_anuales, function (ventas_anio) { return ventas_anio[1]; });
ventas_anuales_y.unshift('Ventas Anuales');

var chart_ventas_anuales = c3.generate({
  bindto: "#chart-ventas-anuales",
  data: {
    x: 'x',
    columns: [
      ventas_anuales_x,
      ventas_anuales_y
    ]
  }
});

var calcular_ventas_anuales_por_producto = function () {
  var data = _.map(new DW.FactList().getAll(), function (fact) {
    return [fact.getTiempo().id_anio, fact.id_producto, fact.venta_neta];
  });

  var dates = _.uniq(_.map(data, function (data_venta) {
    return data_venta[0];
  })).sort();

  var products = _.uniq(_.map(data, function (data_venta) {
    return data_venta[1];
  })).sort();

  var products_result = [];

  _.each(products, function (id_producto) {
    var nombre_producto = new DW.ProductoList().get(id_producto).ds_producto;

    var ventas_producto_por_anio = _.map(dates, function (date) {
      return _.reduce(
        _.map(
          _.filter(
            data,
            function(data_venta) { return data_venta[0] == date && data_venta[1] == id_producto; }
          ),
          function (data_venta) { return data_venta[2]; }
        ),
        function (memo, monto_venta) { return memo + monto_venta; },
        0
      );
    });

    products_result.push([nombre_producto].concat(ventas_producto_por_anio));
  });

  dates.unshift("x");
  return [dates].concat(products_result);
}

var chart_ventas_anuales = c3.generate({
  bindto: "#chart-ventas-anuales-producto",
  data: {
    x: 'x',
    columns: calcular_ventas_anuales_por_producto()
  }
});

var generar_headers_pivot = function () {
  var header_anio = function (anio) {
    return "<table class='table'>" +
             "<tr><th colspan='3'>" + anio + "</th></tr>" +
             "<tr><td>Venta Bruta</td><td>Venta Neta</td><td>Costo Variable Interno</td></tr>" +
           "</table>";
  }

  _.each(anios, function (anio) {
    $('thead > tr').append(
      $('<th/>', {
        html: header_anio(anio)
      })
    );
  });
}

var generar_body_pivot = function() {
  var body_anio = function (anio) {
    var medidas_anio = calcular_medidas_anio(anio);
    return "<table class='table'>" +
             "<tr>" +
               "<td>" + medidas_anio[1] + "</td>" + // Ventas Brutas
               "<td>" + medidas_anio[2] + "</td>" + // Ventas Netas
               "<td>" + medidas_anio[3] + "</td>" + // Costo
             "</tr>" +
           "</table>";
  }

  _.each(anios, function (anio) {
    $('#pivot-body').append(
      $('<td/>', {
        html: body_anio(anio)
      })
    );
  });
}

var generar_pivot = function () {
  generar_headers_pivot();
  generar_body_pivot();
}

generar_pivot();
