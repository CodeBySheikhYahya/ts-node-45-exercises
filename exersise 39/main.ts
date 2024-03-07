const city_country=(city:string, country:string): string =>
{
return `${city}, ${country}`;
}

// ye pre req hay k hamay isko string may hii lena hay tabhi return type lagai hay or agar console.log rakengay tho wo aik function hay tho voide may aigii value

// test the function with three city country pair
console.log(city_country("Karachi","pakistan"));
console.log(city_country("chicago","Usa"));
console.log(city_country("hiroshima","japan"));