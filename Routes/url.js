import express from "express";
import URL from "../models/url.js";

const urlRouter = express.Router();

urlRouter.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
    const visitData = {
      timestamp: Date.now(),
    };
  const entry = await URL.findOneAndUpdate({shortId : shortId},{
    $push : {
        visitHistory : visitData
    }
  } );

//   res.send({
//     message : entry.redirectUrl
//   });
  console.log(entry.redirectUrl);
  res.redirect(entry.redirectUrl);
});

export default urlRouter;