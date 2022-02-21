

--點
DECLARE @p geometry;
SET @p = geometry::STGeomFromText('POINT (30 10)', 0);
SELECT @p AS geo

--線
DECLARE @p geometry;
SET @p = geometry::STGeomFromText('LINESTRING (30 10, 10 30)', 0);
SELECT @p AS geo

--面
DECLARE @p geometry;
SET @p = geometry::STGeomFromText('POLYGON ((30 20, 45 40, 10 40, 30 20))', 0);
SELECT @p AS geo

--多重面
DECLARE @p geometry;
SET @p = geometry::STGeomFromText('POLYGON ((30 20, 45 40, 10 40, 30 20),(15 5, 40 10, 10 20, 5 10, 15 5))', 0);
SELECT @p AS geo

--面(挖空)
DECLARE @p geometry;
SET @p = geometry::STGeomFromText('POLYGON ((35 10, 45 45, 15 40, 10 20, 35 10),(20 30, 35 35, 30 20, 20 30))', 0);
SELECT @p AS geo



--多重點
DECLARE @p geometry;
SET @p = geometry::STGeomFromText('MULTIPOINT ((10 40), (40 30), (20 20), (30 10))', 0);
SELECT @p AS geo

--多重點(省略括號)
DECLARE @p geometry;
SET @p = geometry::STGeomFromText('MULTIPOINT (10 40, 40 30, 20 20, 30 10)', 0);
SELECT @p AS geo

--多重線
DECLARE @p geometry;
SET @p = geometry::STGeomFromText('MULTILINESTRING ((10 10, 20 20, 10 40),
(40 40, 30 30, 40 20, 30 10))', 0);
SELECT @p AS geo

--多重面
DECLARE @p geometry;
SET @p = geometry::STGeomFromText('MULTIPOLYGON (((30 20, 45 40, 10 40, 30 20)),
((15 5, 40 10, 10 20, 5 10, 15 5)))', 0);
SELECT @p AS geo

--多重面(POLYGON)
DECLARE @p geometry;
SET @p = geometry::STGeomFromText('POLYGON ((30 20, 45 40, 10 40, 30 20),
(15 5, 40 10, 10 20, 5 10, 15 5))', 0);
SELECT @p AS geo

--多重面與挖空面
DECLARE @p geometry;
SET @p = geometry::STGeomFromText('MULTIPOLYGON (((40 40, 20 45, 45 30, 40 40)),
((20 35, 10 30, 10 10, 30 5, 45 20, 20 35),
(30 20, 20 15, 20 25, 30 20)))', 0);
SELECT @p AS geo

--地理幾何集合
DECLARE @p geometry;
SET @p = geometry::STGeomFromText('GEOMETRYCOLLECTION (POINT (40 10),
LINESTRING (10 10, 20 20, 10 40),
POLYGON ((40 40, 20 45, 45 30, 40 40)))', 0);
SELECT @p AS geo