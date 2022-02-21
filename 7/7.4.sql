--距離

DECLARE @polygon1 geometry; 
DECLARE @polygon2 geometry; 
DECLARE @polygon3 geometry; 
DECLARE @polygon_mix12 geometry; 
DECLARE @polygon_mix13 geometry; 

DECLARE @linestring1 geometry; 
DECLARE @linestring2 geometry; 
DECLARE @linestring3 geometry; 

DECLARE @point1 geometry; 
DECLARE @point2 geometry; 

-- polygon1比較大, polygon2較小, polygon1包含polygon2, polygon3則是在外圍與其他兩者都不相交
-- polygon_mix則是把後面兩個編號的polygon合成一個展示
SET @polygon1 = geometry::STGeomFromText('POLYGON ((283892 2772902, 304382 2772199, 292846 2782791, 283892 2772902))', 0);
SET @polygon2 = geometry::STGeomFromText('POLYGON ((285892 2773902, 300382 2773199, 292846 2782591, 285892 2773902))', 0);
SET @polygon3 = geometry::STGeomFromText('POLYGON ((185892 1773902, 200382 1773199, 192846 1782591, 185892 1773902))', 0);
SET @polygon_mix12 = geometry::STGeomFromText('POLYGON ((283892 2772902, 304382 2772199, 292846 2782791, 283892 2772902), (285892 2773902, 300382 2773199, 292846 2782591, 285892 2773902))', 0);
SET @polygon_mix13 = geometry::STGeomFromText('POLYGON ((283892 2772902, 304382 2772199, 292846 2782791, 283892 2772902), (185892 1773902, 200382 1773199, 192846 1782591, 185892 1773902))', 0);



-- linestring1跟linestring2沒有交集, linestring1跟linestring3相交一個點
SET @linestring1 = geometry::STGeomFromText('LINESTRING (283892 2772902, 304382 2772199, 292846 2782791)', 0);  
SET @linestring2 = geometry::STGeomFromText('LINESTRING (283592 2772901, 104282 2772199, 192746 2782791)', 0);  
SET @linestring3 = geometry::STGeomFromText('LINESTRING (283892 2772902, 304282 2872199, 192746 2882791)', 0);

SET @point1 = geometry::STGeomFromText('POINT (283892 2772902)', 0);  
SET @point2 = geometry::STGeomFromText('POINT (383892 2772902)', 0);  

SELECT @point1 AS point1
SELECT @point2 AS point2
SELECT @linestring1 AS linestring1
SELECT @linestring2 AS linestring2
SELECT @linestring3 AS linestring3
SELECT @polygon1 AS polygon1
SELECT @polygon2 AS polygon2
SELECT @polygon3 AS polygon3
SELECT @polygon_mix12 AS polygon_mix12
SELECT @polygon_mix13 AS polygon_mix13


--點與點的距離
SELECT @point2.STDistance(@point1) AS Distance

--點與線的距離
SELECT @point2.STDistance(@linestring1) AS Distance

--點與線的距離(有重疊)
SELECT @point1.STDistance(@linestring1) AS Distance

--點與面的距離
SELECT @point2.STDistance(@polygon1) AS Distance

--點與面的距離(有重疊)
SELECT @point1.STDistance(@polygon1) AS Distance


--線與線的距離(沒有交集)
SELECT  @linestring1.STDistance(@linestring2) AS Distance

--線與線的距離(有交集)
SELECT  @linestring1.STDistance(@linestring3) AS Distance

--線與面的距離(沒有交集)
SELECT  @linestring2.STDistance(@polygon1) AS Distance

--線與面的距離(有交集)
SELECT  @linestring1.STDistance(@polygon1) AS Distance


--面與面的距離(有交集)
SELECT  @polygon1.STDistance(@polygon2) AS Distance

--面與面的距離(沒有交集)
SELECT  @polygon1.STDistance(@polygon3) AS Distance


-- 圓形環域
-- SELECT [點資料] FROM [資料表] 
-- WHERE [點資料].STDistance([圓心]) < [半徑]