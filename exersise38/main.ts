function descrbe_city(city:string ,country:string = "unknow country"):void
{
    console.log(`${city} is in ${country}.`);

}

// calling the function for three different cities

descrbe_city("KARACHI","PAKISTAN");

descrbe_city("NEWYORK");// USING THE DIFFERENT COUNTRY VALUE

descrbe_city("berlin","germany")