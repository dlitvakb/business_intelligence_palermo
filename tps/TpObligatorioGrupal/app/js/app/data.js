var DW = {};

var facts = [
  [201102,1,1,1,100,80,1,20],
  [201102,2,2,1,100,80,1,20],
  [201103,1,3,2,120,30,6,60],
  [201103,1,1,2,40,10,2,30],
  [201104,2,2,1,200,160,2,40]
]

var tiempos = [
  [201102,2011,02],
  [201103,2011,03],
  [201104,2011,04]
]

var productos = [
  [1,'sandia',1,'fruta'],
  [2,'muñeco superman', 2,'muñeco']
]

var clientes = [
  [1,'pepe',1,'juan vendedor'],
  [2,'manolo',2,'miguel vendedor'],
  [3,'jorge',1,'juan vendedor']
]

var sucursales = [
  [1,'suc flores',1,'capital federal',1,'america',1,'argentina','abc 123',1,'buenos aires'],
  [2,'suc rosario',2,'rosario',1,'america',1,'argentina','sdf 234',2,'santa fe']
]

var intersect = function(array) {
  var slice = Array.prototype.slice; // added this line as a utility
  var rest = slice.call(arguments, 1);
  return _.filter(_.uniq(array), function(item) {
    return _.every(rest, function(other) {
      return _.any(other, function(element) { return element.equals(item); });
    });
  });
};

DW.FactList = function() {
  this.data = []

  this.initialize = function () {
    var that = this;
    _.each(facts, function (fact) {
      var fact_object = new DW.Fact(fact);
      that.data.push(fact_object);
    });
  }

  this.initialize();

  this.getAll = function () {
    return this.data;
  }

  // Filtros Tiempo
  this.getByTiempo = function (id_tiempo) {
    return _.filter(this.data, function(fact) { return fact.id_tiempo == id_tiempo; });
  }

  this.getByAnio = function (id_anio) {
    return _.filter(this.data, function(fact) { return fact.getTiempo().id_anio == id_anio; });
  }

  this.getByMes = function (id_mes) {
    return _.filter(this.data, function(fact) {
      return fact.getTiempo().id_mes == id_mes;
    });
  }

  this.getByAnioAndMes = function (id_anio, id_mes) {
    return _.filter(this.data, function(fact) { return fact.getTiempo().id_anio == id_anio && fact.getTiempo().id_mes == id_mes; });
  }

  // Filtros Sucursal
  this.getBySucursal = function (id_sucursal) {
    return _.filter(this.data, function(fact) { return fact.id_sucursal == id_sucursal; });
  }

  this.getByCiudad = function (id_ciudad) {
    return _.filter(this.data, function(fact) { return fact.getSucursal().id_ciudad == id_ciudad; });
  }

  this.getByRegion = function (id_region) {
    return _.filter(this.data, function(fact) { return fact.getSucursal().id_region == id_region; });
  }

  this.getByProvincia = function (id_provincia) {
    return _.filter(this.data, function(fact) { return fact.getSucursal().id_provincia == id_provincia; });
  }

  this.getByPais = function (id_pais) {
    return _.filter(this.data, function(fact) { return fact.getSucursal().id_pais == id_pais; });
  }

  // Filtros Cliente
  this.getByCliente = function (id_cliente) {
    return _.filter(this.data, function(fact) { return fact.id_cliente == id_cliente; });
  }

  this.getByOficialCuenta = function (id_oficial_cuentas) {
    return _.filter(this.data, function(fact) { return fact.getCliente().id_oficial_cuentas == id_oficial_cuentas; });
  }

  // Filtros Producto
  this.getByProducto = function (id_producto) {
    return _.filter(this.data, function(fact) { return fact.id_producto == id_producto; });
  }

  this.getByCategoria = function (id_categoria) {
    return _.filter(this.data, function(fact) { return fact.getProducto().id_categoria == id_categoria; });
  }

  // Filtro Combinacional
  this.filter = function (filters, filter_arguments) {
    if (filters.size != filter_arguments.size) {
      console.log("error on filter");
      return [];
    }

    var that = this;
    var data = this.getAll();

    _.each(filters, function(filter, index) {
      if (_.isArray(filter_arguments[index])) {
        var pre_intersection_data = that[filter].apply(that, filter_arguments[index]);
      } else {
        var pre_intersection_data = that[filter].call(that, filter_arguments[index]);
      }

      data = intersect(data, pre_intersection_data);
    });

    return data;
  }
}

DW.Fact = function (fact_data) {
  this.id_tiempo = fact_data[0];
  this.id_sucursal = fact_data[1];
  this.id_cliente = fact_data[2];
  this.id_producto = fact_data[3];
  this.venta_bruta = fact_data[4];
  this.venta_neta = fact_data[5];
  this.cantidad = fact_data[6];
  this.costo = fact_data[7];

  this._hash = function () {
    return '' + this.id_tiempo +
                this.id_sucursal +
                this.id_cliente +
                this.id_producto +
                this.venta_bruta +
                this.venta_neta +
                this.cantidad +
                this.costo;
  }

  this.equals = function (other) {
    if (other._hash === undefined) {
      return false;
    }

    return this._hash() == other._hash();
  }

  this.getTiempo = function () {
    return new DW.TiempoList().get(this.id_tiempo);
  }

  this.getSucursal = function () {
    return new DW.SucursalList().get(this.id_sucursal);
  }

  this.getCliente = function () {
    return new DW.ClienteList().get(this.id_cliente);
  }

  this.getProducto = function () {
    return new DW.ProductoList().get(this.id_producto);
  }
}

DW.ProductoList = function () {
  this.data = []

  this.initialize = function () {
    var that = this;
    _.each(productos, function (producto) {
      var producto_object = new DW.Producto(producto);
      that.data.push(producto_object);
    });
  }

  this.getAll = function () {
    return this.data;
  }

  this.get = function (id_producto) {
    return _.find(this.data, function (producto) { return producto.id_producto == id_producto; });
  }

  this.getByCategoria = function (id_categoria) {
    return _.filter(this.data, function (producto) { return producto.id_categoria == id_categoria; });
  }

  this.initialize();
}

DW.Producto = function (producto_data) {
  this.id_producto = producto_data[0];
  this.ds_producto = producto_data[1];
  this.id_categoria = producto_data[2];
  this.ds_categoria = producto_data[3];
}

DW.SucursalList = function () {
  this.data = []

  this.initialize = function () {
    var that = this;
    _.each(sucursales, function (sucursal) {
      var sucursal_object = new DW.Sucursal(sucursal);
      that.data.push(sucursal_object);
    });
  }

  this.getAll = function () {
    return this.data;
  }

  this.get = function (id_sucursal) {
    return _.find(this.data, function (sucursal) { return sucursal.id_sucursal == id_sucursal; });
  }

  this.getByCiudad = function (id_ciudad) {
    return _.filter(this.data, function (sucursal) { return sucursal.id_ciudad == id_ciudad; });
  }

  this.getByRegion = function (id_region) {
    return _.filter(this.data, function (sucursal) { return sucursal.id_region == id_region; });
  }

  this.getByPais = function (id_pais) {
    return _.filter(this.data, function (sucursal) { return sucursal.id_pais == id_pais; });
  }

  this.getByProvincia = function (id_provincia) {
    return _.filter(this.data, function (sucursal) { return sucursal.id_provincia == id_provincia; });
  }

  this.initialize();
}

DW.Sucursal = function (sucursal_data) {
  this.id_sucursal = sucursal_data[0];
  this.ds_sucursal = sucursal_data[1];
  this.id_ciudad = sucursal_data[2];
  this.ds_ciudad = sucursal_data[3];
  this.id_region = sucursal_data[4];
  this.ds_region = sucursal_data[5];
  this.id_pais = sucursal_data[6];
  this.ds_pais = sucursal_data[7];
  this.direccion = sucursal_data[8];
  this.id_provincia = sucursal_data[9];
  this.ds_provincia = sucursal_data[10];
}

DW.ClienteList = function () {
  this.data = []

  this.initialize = function () {
    var that = this;
    _.each(clientes, function (cliente) {
      var cliente_object = new DW.Cliente(cliente);
      that.data.push(cliente_object);
    });
  }

  this.getAll = function () {
    return this.data;
  }

  this.get = function (id_cliente) {
    return _.find(this.data, function (cliente) { return cliente.id_cliente == id_cliente; });
  }

  this.getByVendedor = function (id_vendedor) {
    return _.filter(this.data, function (cliente) { return cliente.id_vendedor == id_vendedor; });
  }

  this.initialize();
}

DW.Cliente = function (cliente_data) {
  this.id_cliente = cliente_data[0];
  this.ds_cliente = cliente_data[1];
  this.id_oficial_cuentas = cliente_data[2];
  this.ds_oficial_cuentas = cliente_data[3];
}

DW.TiempoList = function () {
  this.data = []

  this.initialize = function () {
    var that = this;
    _.each(tiempos, function (tiempo) {
      var tiempo_object = new DW.Tiempo(tiempo);
      that.data.push(tiempo_object);
    });
  }

  this.getAll = function () {
    return this.data;
  }

  this.get = function (id_tiempo) {
    return _.find(this.data, function (tiempo) { return tiempo.id_tiempo == id_tiempo; });
  }

  this.getByAnio = function (id_anio) {
    return _.filter(this.data, function (tiempo) { return tiempo.id_anio == id_anio; });
  }

  this.getByMes = function (id_mes) {
    return _.filter(this.data, function (tiempo) { return tiempo.id_mes == id_mes; });
  }

  this.initialize();
}

DW.Tiempo = function (tiempo_data) {
  this.id_tiempo = tiempo_data[0];
  this.id_anio = tiempo_data[1];
  this.id_mes = tiempo_data[2];
}
