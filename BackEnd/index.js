const express = require("express"); //It's a layer built on the top of the Node js that helps manage servers and routes
const app = express();
//import cors from "cors";
const port = 5001;
const mongoDB = require("./db");
mongoDB();



//app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width,Content-Type, Accept"
  );
  next();
});

app.use(express.json()); //
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/OrderData"));

/*

const router = express.Router();
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Order = require("./models/Orders");




//api for insert user data (sign up )
app.post("/User", async (request, response) => {
  try {
      const reqData = request.body;
      reqData['password'] = bcrypt.hashSync(reqData.password, 10);
      // reqData['confirmpassword'] = bcrypt.hashSync(reqData.confirmpassword, 10);
      const userDetails = new User(reqData);
      await userDetails.save();
      response.send({ message: "User Inserted" });
  } catch (error) {
      console.error(error);
      response.status(500).send({ message: "Something Went wrong" });
  }
});


// login API(it check given crediential from database compare and do login)
app.post("/User/login", async(request, response) => {
  try {
      const user= await User.findOne({ email: request.body.email });
      if (user) {
          if (bcrypt.compareSync(request.body.password, user.password))
           {
              // Generate and send a token (uncomment if needed)
              //const token=jwt.sign({email:user.email},"hemant123");
              response.status(200).send({ message: "Login successful" });

              // response.status(StatusCodes.OK).send({ message: "Login successful" });
          }
     else {
          response.status(500).send({ message: "Invalid email or password !" });
      }
  } else {
      response.status(500).send({ message: "Invalid email or password........" });
  }
} catch (error) {
  console.error(error);
  response.status(500).send({ message: "Something went wrong" });
}
});


app.post("/orderData", async (req, res) => {
  let data = req.body.order_data;
  await data.splice(0, 0, { order_date: req.body.order_date });

  //if email not existing in db then create: else: InsertMany();
  let eId = await Order.findOne({ email: req.body.email });
  console.log(eId);
  if (eId === null) {
    try {
      await Order.create({ email: req.body.email, order_data: [data] }).then(
        () => {
          res.json({ success: true });
        }
      );
    } catch (error) {
      console.log(error);
      res.send("server error", error.message);
    }
  } else {
    try {
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      ).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      res.send("server error", error.message);
    }
  }
});

app.post("/myorderData", async (req, res) => {
  try {
    let myData = await Order.findOne({ email: req.body.email });
    res.json({ orderData: myData });
  } catch (error) {
    res.send("server Error", error.message);
  }
});


app.use("/api", require("./Routes/DisplayData"));



*/




app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});





/*
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:hemantbhoir2797/LikeKofiee.git
git push -u origin main
*/