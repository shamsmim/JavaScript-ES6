var billGates={shirt:true,shirtColor:"offwhite",smlie:true,swatter:true,swatterColor:"gray",glass:true}

console.log(billGates['shirtColor']); // simple object hole mara value niye asbo ai vabe //


var billGatesPro={
    shirt:{
        color:"offwhite",
        Quality:"Good",
        price:"200USD"
    },

    swatter:{
        color:"gray",
        Quality:"Good",
        price:"230USD",
        warm:"best"

    },
    face:{
        smiling:"yes",
        glass:"yes",
        teeth:"white,big"
    }
}

console.log(billGatesPro['swatter']['price']); // akhn etar vitore jodi aro nesting obosthay thakto tahole object thele property sei pro theke pro sel pro theke pro ai vbe jetei thaktam jetei thaktam,
