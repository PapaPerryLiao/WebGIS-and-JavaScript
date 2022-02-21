CREATE function [switchclockwise](@p geography)
RETURNS geography
AS
BEGIN
	IF @p.EnvelopeAngle() = 180 
	BEGIN 
		SET @p = @p.ReorientObject() 
	END 
	RETURN @p
END