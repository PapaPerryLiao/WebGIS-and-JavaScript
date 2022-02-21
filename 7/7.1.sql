DECLARE @p geometry;
SET @p = geometry::STGeomFromText('POLYGON ((30 20, 45 40, 10 40, 30 20),(15 5, 40 10, 10 20, 5 10, 15 5))', 0);
SELECT @p AS geo;

DECLARE @p_text varchar(MAX);
SET @p_text = @p.STAsText();
SELECT @p_text AS wkt;

--SQL 版本查詢
SELECT @@VERSION AS version