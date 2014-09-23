-- Dim_Cliente

DROP TABLE #TempVendedor;

CREATE TABLE #TempVendedor (
  id_vendedor int identity(1,1) primary key,
  id_cliente int,
  nombre_vendedor varchar(255)
);

INSERT INTO #TempVendedor (id_cliente, nombre_vendedor)
SELECT CustomerID, SalesPerson
FROM AdventureWorksLT.SalesLT.Customer;

INSERT INTO Dim_Cliente (ds_cliente, id_oficial_cuentas, ds_oficial_cuentas)
SELECT c.FirstName + c.MiddleName + c.LastName, tv.id_vendedor, tv.nombre_vendedor
FROM AdventureWorksLT.SalesLT.Customer c, #TempVendedor tv
WHERE c.CustomerID = tv.id_cliente;


-- Dim_Producto

INSERT INTO Dim_Producto (ds_producto, id_categoria, ds_categoria)
SELECT p.Name, p.ProductCategoryID, c.Name
FROM AdventureWorksLT.SalesLT.Product p, AdventureWorksLT.SalesLT.ProductCategory c
WHERE p.ProductCategoryID = c.ProductCategoryID;


-- Dim_Sucursal

DROP TABLE #Region;
DROP TABLE #Pais;
DROP TABLE #Provincia;
DROP TABLE #Ciudad;
DROP TABLE #Sucursal;

CREATE TABLE #Region (
  id_region int identity(1,1) primary key,
  nombre_region varchar(255)
);

INSERT INTO #Region (nombre_region)
SELECT CASE WHEN CountryRegion = 'United Kingdom' THEN 'Europe' ELSE 'North America' END
FROM AdventureWorksLT.SalesLT.Address;

CREATE TABLE #Pais (
  id_pais int identity(1,1) primary key,
  nombre_pais varchar(255)
);

INSERT INTO #Pais (nombre_pais)
SELECT DISTINCT CountryRegion
FROM AdventureWorksLT.SalesLT.Address;

CREATE TABLE #Provincia (
  id_provincia int identity(1,1) primary key,
  nombre_provincia varchar(255)
);

INSERT INTO #Provincia (nombre_provincia)
SELECT DISTINCT StateProvince
FROM AdventureWorksLT.SalesLT.Address;

CREATE TABLE #Ciudad (
  id_ciudad int identity(1,1) primary key,
  nombre_ciudad varchar(255)
);

INSERT INTO #Ciudad (nombre_ciudad)
SELECT DISTINCT City
FROM AdventureWorksLT.SalesLT.Address;

CREATE TABLE #Sucursal (
  id_sucursal int identity(1,1) primary key,
  nombre_sucursal varchar(255)
);

INSERT INTO #Sucursal (nombre_sucursal)
SELECT CountryRegion + ' - ' + StateProvince + ' - ' + City + ' - ' + PostalCode
FROM AdventureWorksLT.SalesLT.Address;


-- TODO: ARREGLAR ESTO
INSERT INTO Dim_Sucursal (ds_sucursal, id_ciudad, ds_ciudad, id_provincia, ds_provincia, id_pais, ds_pais, id_region, ds_region, direccion)
SELECT s.nombre_sucursal, c.id_ciudad, c.nombre_ciudad, pr.id_provincia, pr.nombre_provincia, pa.id_pais, pa.nombre_pais, r.id_region, r.nombre_region, a.AddressLine1 + ' ' + a.AddressLine2 COLLATE Modern_Spanish_CI_AS
FROM #Sucursal s, #Ciudad c, #Provincia pr, #Pais pa, #Region r, AdventureWorksLT.SalesLT.Address a
WHERE s.nombre_sucursal = a.CountryRegion + ' - ' + a.StateProvince + ' - ' + a.City + ' - ' + a.PostalCode COLLATE Modern_Spanish_CI_AS
  AND c.nombre_ciudad = a.City COLLATE Modern_Spanish_CI_AS
  AND pr.nombre_provincia = a.StateProvince COLLATE Modern_Spanish_CI_AS
  AND pa.nombre_pais = a.CountryRegion COLLATE Modern_Spanish_CI_AS
  AND r.nombre_region = 'North America';
