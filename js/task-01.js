const totalCategories = document.querySelectorAll(".item");
totalCategories.forEach(item => console.log(`Number of categories: ${totalCategories.length} `));

const categoriesArray = [...totalCategories]
.map(categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`)
.join("\n");
totalCategories.forEach(item => console.log(categoriesArray));

