var cartesian = function () {
  return _.reduce(arguments, function(a, b) {
    return _.flatten(_.map(a, function(x) {
      return _.map(b, function(y) {
        return x.concat([y]);
      });
    }), true);
  }, [ [] ]);
};
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
