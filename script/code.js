const array = ["Lexi", "Scarlett", "Anna", "Candy","Ashton","Scott"];


var filteredNames = array.filter(function(name) {
    return name.endsWith("t"), 
    name.startsWith("S");
});
document.write(
    `
    <h1>Array of Names</h1>
    <h2>${array}</h2>
    <h3>Names that start with "S" and end with "t"</h3>
    <h2 >${filteredNames}</h2>
     `
);