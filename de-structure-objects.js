let details = {
    "Name": "Aadarsh",
    "Surname": "Lokhande",
    "Age": 25,
    "Address": {
        pm_add: "betul",
        cu_add: "bp",
        native: {
            one: "betul",
            two: "indore",
            three: "bhopal"
        }
    }
}

const { Address : {native: {one, two, three }} } = details

console.log(one, two, three ) //{ pm_add: 'betul', cu_add: 'bp' }