var DW = {};

var facts = [
  [201102,1,1,1,1000,600,10,200],
  [201003,2,2,2,100,80,1,20],
  [201205,3,3,3,120,30,6,10],
  [201107,1,4,4,40,10,2,5],
  [201009,2,5,5,200,160,2,40],
  [201211,3,6,6,40,20,1,20],
  [201010,1,7,7,100,80,15,20],
  [201103,2,1,8,1200,300,6,60],
  [201204,3,2,2,400,100,20,30],
  [201001,1,3,1,2000,1600,25,40],
  [201109,2,4,9,1000,800,14,20],
  [201209,3,5,1,1500,580,17,20],
  [201211,1,6,2,1520,530,6,60],
  [201010,2,7,3,540,510,2,300],
  [201103,3,2,4,5200,5160,2,4000],
  [201204,1,1,5,1050,580,10,200],
  [201001,1,1,6,1500,580,1,200],
  [201109,2,2,7,1520,1350,6,600],
  [201209,3,3,8,40,10,2,10],
  [201003,2,4,5,1000,600,1,200],
  [201103,1,5,1,100,80,10,20],
  [201005,1,6,1,120,30,60,30],
  [201006,2,7,4,40,10,26,10],
  [201104,3,1,2,200,160,2,40],
  [201102,2,2,12,40,20,1,20],
  [201003,1,3,16,100,80,1,20],
  [201205,2,4,18,1200,300,6,60],
  [201107,3,5,2,400,100,22,30],
  [201009,1,6,3,2000,1600,2,400],
  [201211,2,7,10,1000,800,1,200],
  [201010,1,1,17,1500,580,1,200],
  [201103,2,2,16,1520,530,6,600],
  [201204,3,1,7,540,510,4,300],
  [201001,1,2,3,5200,5160,2,4000],
  [201109,1,3,4,1050,580,1,200],
  [201209,2,4,1,1500,580,11,200],
  [201102,3,5,2,1520,1350,6,60],
  [201003,2,6,8,40,10,2,10],
  [201205,1,7,9,5200,5160,21,400],
  [201107,2,1,7,1050,580,1,200],
  [201009,3,2,15,1500,580,1,320],
  [201211,1,1,15,1520,1350,6,360],
  [201010,2,2,14,40,10,2,10],
  [201103,1,3,3,1000,600,1,320],
  [201204,1,4,8,100,80,1,40],
  [201001,2,5,11,120,30,6,30],
  [201109,1,6,12,40,10,2,10],
  [201209,2,7,13,200,160,2,80],
  [201211,1,3,4,40,20,1,20],
  [201010,1,1,5,100,80,1,20],
  [201103,2,1,16,1200,300,6,260],
  [201204,1,2,17,400,100,2,100],
  [201001,2,3,15,2000,1600,2,640],
  [201109,1,4,6,1000,800,1,620],
  [201209,1,5,2,1500,580,1,420],
  [201003,2,6,1,1520,530,6,260],
  [201103,1,7,6,540,510,2,430],
  [201005,2,2,8,5200,5160,2,2340],
  [201006,1,3,2,1050,580,1,420],
  [201104,1,1,6,1500,580,1,420],
  [201102,2,1,1,1520,1350,6,460],
  [201003,1,2,15,40,10,2,10],
  [201205,2,3,13,100,80,1,20],
  [201107,1,4,4,120,30,6,30],
  [201009,1,5,2,40,10,2,10],
  [201211,2,6,12,200,160,2,140],
  [201010,1,7,11,100,80,1,20],
  [201103,2,2,18,100,80,1,40],
  [201204,1,3,4,120,30,6,30],
  [201001,1,1,7,40,10,1,10],
  [201109,2,2,16,200,160,2,40],
  [201209,1,1,15,100,80,1,20],
  [201109,1,4,6,1000,800,1,620],
  [201209,1,5,2,1500,580,1,420],
  [201003,2,6,1,1520,530,6,260],
  [201103,1,7,6,540,510,2,430],
  [201005,2,2,8,5200,5160,2,2340],
  [201006,1,3,2,1050,580,1,420],
  [201104,1,1,6,1500,580,1,420],
  [201102,2,1,1,1520,1350,6,460],
  [201003,1,2,15,40,10,2,10],
  [201205,2,3,13,100,80,1,20],
  [201107,1,4,4,120,30,6,30],
  [201009,1,5,2,40,10,2,10],
  [201211,2,6,12,200,160,2,140],
  [201010,1,7,11,100,80,1,20],
  [201103,2,2,18,100,80,1,40],
  [201204,1,3,4,120,30,6,30],
  [201001,1,1,7,40,10,1,10],
  [201109,2,2,16,200,160,2,40],
  [201209,1,1,15,100,80,1,20],
  [201009,1,5,2,40,10,2,10],
  [201211,2,6,12,200,160,2,140],
  [201010,1,7,11,100,80,1,20],
  [201103,2,2,18,100,80,1,40]

]

var tiempos = [
  [201102,2011,02],
  [201003,2010,03],
  [201205,2012,05],
  [201107,2011,07],
  [201009,2010,09],
  [201211,2012,11],
  [201010,2010,10],
  [201103,2011,03],
  [201204,2012,04],
  [201001,2010,01],
  [201109,2011,09],
  [201209,2012,09],
  [201003,2010,03],
  [201103,2011,03],
  [201005,2010,05],
  [201006,2010,06],
  [201104,2011,04],
  [201102,2011,02],
  [201003,2010,03],
  [201205,2012,05],
  [201107,2011,07],
  [201009,2010,09],
  [201211,2012,11],
  [201010,2010,10],
  [201103,2011,03],
  [201204,2012,04],
  [201001,2010,01],
  [201109,2011,09],
  [201209,2012,09],
  [201003,2010,03],
  [201103,2011,03],
  [201005,2010,05],
  [201006,2010,06],
  [201104,2011,04],
  [201102,2011,02],
  [201003,2010,03],
  [201205,2012,05],
  [201107,2011,07],
  [201009,2010,09],
  [201211,2012,11],
  [201010,2010,10],
  [201103,2011,03],
  [201204,2012,04],
  [201001,2010,01],
  [201109,2011,09],
  [201209,2012,09],
  [201003,2010,03],
  [201103,2011,03]

]

var productos = [
  [1,'Sandia',1,'Comestibles'],
  [2,'Superman', 2,'Jueguetes'],
  [3,'Frutilla',1,'Comestibles'],
  [4,'Billetera', 3,'Marroquineria'],
  [5,'Pelota',2,'Jueguetes'],
  [6,'Cartera', 3,'Marroquineria'],
  [7,'Notebook',4,'Electronica'],
  [8,'Mouse', 4,'Electronica'],
  [9,'Galletitas',1,'Comestibles'],
  [10,'Pomelo',1,'Comestibles'],
  [11,'Barbie', 2,'Jueguetes'],
  [12,'Bicicleta',5,'Rodados'],
  [13,'Monopatin', 5,'Rodados'],
  [14,'Zapatos',3,'Marroquineria'],
  [15,'Pan', 1,'Comestibles'],
  [16,'Carne',1,'Comestibles'],
  [17,'Pen Drive', 4,'Electronica'],
  [18,'Disco Externo',4,'Electronica']

]

var clientes = [
  [1,'Juan Carlos Lopez',1,'Marcelo Gutierrez ventas'],
  [2,'Lautaro Acosta',2,'Mariano Rosas ventas'],
  [3,'Jorge Raul Benitez',3,'Gonzalo Maluende ventas'],
  [4,'Jose de la Vega',1,'Marcelo Gutierrez ventas'],
  [5,'Miriam Rodriguez',3,'Gonzalo Maluende ventas'],
  [6,'Susana Gonzalez',1,'Marcelo Gutierrez ventas'],
  [7,'Alicia Latorre',2,'Mariano Rosas ventas']
]

var sucursales = [
  [1,'Suc Flores',1,'Capital Federal',1,'America',1,'Argentina','Av. Rivadavia 2750',1,'Buenos Aires'],
  [2,'Suc New York',2,'New York',1,'America',2,'EEUU','Five Avenue 675',2,'New York'],
  [3,'Suc Paris',3,'Paris',2,'Europa',3,'Francia','St Etiene 22',3,'Paris']
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
