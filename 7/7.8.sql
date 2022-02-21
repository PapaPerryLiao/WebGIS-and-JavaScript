--重疊(判斷是否完全相同)

DECLARE @point1 geometry;  
DECLARE @point2 geometry;  
DECLARE @linestring1 geometry;  
DECLARE @linestring2 geometry;  
DECLARE @polygon1 geometry;  
DECLARE @polygon2 geometry;  

SET @point1 = geometry::STGeomFromText('POINT (283892 2772902)', 0);  
SET @point2 = geometry::STGeomFromText('POINT (283892 2772902)', 0);  

SET @linestring1 = geometry::STGeomFromText('LINESTRING (283892 2772902, 304382 2772199)', 0);  
SET @linestring2 = geometry::STGeomFromText('LINESTRING (304382 2772199, 283892 2772902)', 0);  

SET @polygon1 = geometry::STGeomFromText('POLYGON ((283892 2772902, 304382 2772199, 292846 2782791, 283892 2772902))', 0);  
SET @polygon2 = geometry::STGeomFromText('POLYGON ((283892 2772902, 292846 2782791, 304382 2772199, 283892 2772902))', 0);  


SELECT @point1.STWithin(@point2) AS IsWithin
SELECT @linestring1.STWithin(@linestring2) AS IsWithin
SELECT @polygon1.STWithin(@polygon2) AS IsWithin