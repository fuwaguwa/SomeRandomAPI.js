export function isImageAndGif(url: string) 
{
	return url.match(/^http[^\?]*.(jpg|jpeg|png|gif)(\?(.*))?$/gim) != null;
}

export function isHexColor(hexColor: string) 
{
	return hexColor.match(/^[0-9a-f]{3,6}$/i) !== null;
}
