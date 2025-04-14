require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
if (process.env.NODE_ENV === "production") {
	app.use(express.static("build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "build", "index.html"));
	});
}


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Welcome to BreezyBuy");
});

const newArray = [];
const calculateOrderAmount = (items) => {
	items.map((item) => {
		const { price, qty } = item;
		const totalItemAmount = price * qty;
		return newArray.push(totalItemAmount);
	});
	const totalCartAmount = newArray.reduce((total, curr) => total + curr, 0);
	return totalCartAmount * 100;
};

app.post("/create-payment-intent", async (req, res) => {
	const { items } = req.body;
  
	const calculateOrderAmount = (items) => {
	  return items.reduce((total, item) => {
		return total + item.price * item.qty;
	  }, 0);
	};
  
	const mockClientSecret = "mock_client_secret_" + Date.now();
  
	res.send({
	  clientSecret: mockClientSecret,
	  amount: calculateOrderAmount(items),
	});
  });
  

	res.send({
		clientSecret: paymentIntent.client_secret,
	});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Node server listening on port ${PORT}!`));
