USE [AdventureWorksLTDW]

GO
/****** Object:  Table [dbo].[FT_Ventas]    Script Date: 09/22/2014 19:47:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FT_Ventas](
  [id_tiempo] [int] NOT NULL,
  [id_sucursal] [int] NOT NULL,
  [id_cliente] [int] NOT NULL,
  [id_producto] [int] NOT NULL,
  [venta_bruta] [float] NULL,
  [venta_neta] [float] NULL,
  [cantidad] [int] NULL,
  [costo] [float] NULL
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[FT_Ventas]  WITH CHECK ADD FOREIGN KEY([id_cliente])
REFERENCES [dbo].[Dim_Cliente] ([id_cliente])
GO
ALTER TABLE [dbo].[FT_Ventas]  WITH CHECK ADD FOREIGN KEY([id_producto])
REFERENCES [dbo].[Dim_Producto] ([id_producto])
GO
ALTER TABLE [dbo].[FT_Ventas]  WITH CHECK ADD FOREIGN KEY([id_sucursal])
REFERENCES [dbo].[Dim_Sucursal] ([id_sucursal])
GO
ALTER TABLE [dbo].[FT_Ventas]  WITH CHECK ADD FOREIGN KEY([id_tiempo])
REFERENCES [dbo].[Dim_Tiempo] ([id_tiempo]);


----

GO
/****** Object:  Table [dbo].[Dim_Tiempo]    Script Date: 09/22/2014 19:47:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Dim_Tiempo](
  [id_tiempo] [int] NOT NULL,
  [id_anio] [int] NOT NULL,
  [id_mes] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
  [id_tiempo] ASC
)WITH (PAD_INDEX  = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY];


----

USE [AdventureWorksLTDW]
GO
/****** Object:  Table [dbo].[Dim_Sucursal]    Script Date: 09/22/2014 21:34:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Dim_Sucursal](
  [id_sucursal] [int] IDENTITY(1,1) NOT NULL,
  [ds_sucursal] [varchar](100) COLLATE Latin1_General_CI_AS NULL,
  [id_ciudad] [int] NULL,
  [ds_ciudad] [varchar](100) COLLATE Latin1_General_CI_AS NULL,
  [id_region] [int] NULL,
  [ds_region] [varchar](100) COLLATE Latin1_General_CI_AS NULL,
  [id_pais] [int] NULL,
  [ds_pais] [varchar](100) COLLATE Latin1_General_CI_AS NULL,
  [direccion] [varchar](255) COLLATE Latin1_General_CI_AS NULL,
  [id_provincia] [int] NULL,
  [ds_provincia] [varchar](100) COLLATE Latin1_General_CI_AS NULL,
 CONSTRAINT [PK__Dim_Sucursal__07F6335A] PRIMARY KEY CLUSTERED 
(
  [id_sucursal] ASC
)WITH (PAD_INDEX  = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF


----

USE [AdventureWorksLTDW]
GO
/****** Object:  Table [dbo].[Dim_Producto]    Script Date: 09/22/2014 19:47:03 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Dim_Producto](
  [id_producto] [int] IDENTITY(1,1) NOT NULL,
  [ds_producto] [varchar](255) COLLATE Modern_Spanish_CI_AS NULL,
  [id_categoria] [int] NULL,
  [ds_categoria] [varchar](255) COLLATE Modern_Spanish_CI_AS NULL,
PRIMARY KEY CLUSTERED 
(
  [id_producto] ASC
)WITH (PAD_INDEX  = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF;


----

USE [AdventureWorksLTDW]
GO
/****** Object:  Table [dbo].[Dim_Cliente]    Script Date: 09/22/2014 19:46:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Dim_Cliente](
  [id_cliente] [int] IDENTITY(1,1) NOT NULL,
  [ds_cliente] [varchar](255) COLLATE Modern_Spanish_CI_AS NULL,
  [id_oficial_cuentas] [int] NULL,
  [ds_oficial_cuentas] [varchar](255) COLLATE Modern_Spanish_CI_AS NULL,
PRIMARY KEY CLUSTERED 
(
  [id_cliente] ASC
)WITH (PAD_INDEX  = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF;
