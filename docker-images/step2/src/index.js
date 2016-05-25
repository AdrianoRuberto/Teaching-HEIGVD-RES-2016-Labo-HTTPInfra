const Chance = require("chance");
const express = require("express");

const chance = new Chance;
const expr = express();

function genAddresses() {
	const addresses = [];
	
	for(var i = 0; i < 100; ++i)
		addresses.push(chance.address());
	
	return addresses;
}

expr.get("/", function(req, res) {
	res.send(JSON.stringify(genAddresses()));
});

expr.listen(80);