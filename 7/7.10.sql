--頭尾不相同(面資料)

-- 面資料
DECLARE @a1 geometry;  
DECLARE @a2 geometry;  

--  Error: 起始座標與終點座標不相同
SET @a1 = geometry::STGeomFromText('POLYGON((282402 2765483, 317348 2761734, 320177 2781022, 289425 2780566))', 0);  

--  正常
SET @a2 = geometry::STGeomFromText('POLYGON ((283892 2772902, 304382 2772199, 292846 2782791, 283892 2772902))', 0);  

SELECT @a1 AS polygon_error
SELECT @a2 AS polygon_correct