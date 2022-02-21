--交集

-- 面
DECLARE @polygon1 geometry;  
DECLARE @polygon2 geometry; 
DECLARE @linestring geometry;  

SET @polygon1 = geometry::STGeomFromText('POLYGON((282402 2765483, 317348 2761734, 320177 2781022, 289425 2780566, 282402 2765483))', 0);  
SET @polygon2 = geometry::STGeomFromText('POLYGON ((283892 2772902, 304382 2772199, 292846 2782791, 283892 2772902))', 0);  
SET @linestring = geometry::STGeomFromText('LINESTRING (283892 2772902, 304382 2772199, 292846 2782791, 283892 2772902)', 0);  

SELECT @polygon1 AS polygon1
SELECT @polygon2 AS polygon2
SELECT @linestring AS linestring


--面與面交集
SELECT @polygon1.STIntersection(@polygon2) AS IntersectionResult
SELECT @polygon1.STIntersects(@polygon2) AS IsIntersect

--面與線交集
SELECT @polygon1.STIntersection(@linestring) AS IntersectionResult
SELECT @polygon1.STIntersects(@linestring) AS IsIntersect