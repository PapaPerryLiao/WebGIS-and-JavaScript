--長度

DECLARE @polygon geometry; 
DECLARE @linestring1 geometry; 
DECLARE @linestring2 geometry; 
DECLARE @point geometry; 

SET @polygon = geometry::STGeomFromText('POLYGON ((283892 2772902, 304382 2772199, 292846 2782791, 283892 2772902))', 0);  
SET @linestring1 = geometry::STGeomFromText('LINESTRING (283892 2772902, 304382 2772199, 292846 2782791)', 0);  
SET @linestring2 = geometry::STGeomFromText('LINESTRING (292846 2782791, 283892 2772902)', 0); 
SET @point = geometry::STGeomFromText('POINT (292846 2782791)', 0);  
 

SELECT  @polygon.STLength() AS polygon
SELECT  @linestring1.STLength() AS linestring1
SELECT  @linestring2.STLength() AS linestring2
SELECT  @point.STLength() AS point