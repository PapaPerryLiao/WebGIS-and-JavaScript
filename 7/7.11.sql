--方向錯誤

DECLARE @a1 geography;  
DECLARE @a2 geography;  

-- 順時針 
SET @a1 = geography::STGeomFromText('POLYGON((120.68683027895389 24.246634330503618,120.76373461443319 24.19090153130943,120.67653059116645 24.167724543536114,120.68683027895389 24.246634330503618))', 4326);  

-- 逆時針
SET @a2 = geography::STGeomFromText('POLYGON((120.68683027895389 24.246634330503618,120.67653059116645 24.167724543536114,120.76373461443319 24.19090153130943,120.68683027895389 24.246634330503618))', 4326);  
SELECT @a1 AS polygon_clockwise
SELECT @a2 AS polygon_counterclockwise

--解法
-- IF @a1.EnvelopeAngle() = 180 
-- BEGIN 
-- SET @a1 = @a1.ReorientObject() 
-- END 

SELECT @a1 AS polygon_clockwise
SELECT @a2 AS polygon_counterclockwise

-- 7.12 function switchclockwise
SELECT  [dbo].[switchclockwise](@a1) AS polygon_clockwise
SELECT  [dbo].[switchclockwise](@a2) AS polygon_counterclockwise

