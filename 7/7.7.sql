--包含

DECLARE @polygon1 geometry;  
DECLARE @polygon2 geometry;  
DECLARE @point geometry; 
DECLARE @linestring geometry;   

SET @polygon1 = geometry::STGeomFromText('POLYGON ((283892 2772902, 304382 2772199, 292846 2782791, 283892 2772902))', 0);  
SET @polygon2 = geometry::STGeomFromText('POLYGON ((285892 2773902, 300382 2773199, 292846 2782591, 285892 2773902))', 0);
SET @point = geometry::STGeomFromText('POINT (294000 2776200)', 0);  
SET @linestring = geometry::STGeomFromText('LINESTRING (294000 2776200, 298000 2773400)', 0); 

--面包含點
SELECT @polygon1.STContains(@point) AS IsContain 

--面包含線
SELECT @polygon1.STContains(@linestring) AS IsContain 

--面包含面
SELECT @polygon1.STContains(@polygon2) AS IsContain 

--線包含點(錯誤)
SELECT @linestring.STContains(@point) AS IsContain 

--面(較大)包含面(較小)
SELECT @polygon1.STContains(@polygon2) AS IsBigContainSmall

--面(較小)包含面(較大)
SELECT @polygon2.STContains(@polygon1) AS IsSmallContainBig