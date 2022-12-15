import express from "express";

// only get the router function from the express as we dont want to increase the size of the server file. We need to import the router function to the capture all the end point redirected from the server using use
const router = express.Router();

// get post put methods are called routers

router.get("/", (req, res) => {
  res.json({
    message: "you",
  });
});
router.post("/", (req, res) => {
  res.json({
    message: "adding data to the database",
  });
});
router.put("/", (req, res) => {
  res.json({
    message: "updating data to the database",
  });
});

// if we export router then the methid used in the router also exported
export default router;
