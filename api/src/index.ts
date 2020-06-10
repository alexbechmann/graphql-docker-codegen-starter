import express from "express";
// import cors from 'cors';
import { setup } from "applicationinsights";
import { router as apiRouter } from "./api-router";

// if (appSettings.appInsightsInstrumentationKey) {
//   setup(appSettings.appInsightsInstrumentationKey).start();
// }

const app = express();
const PORT = process.env.PORT || 4000;

// app.use(cors());
app.use("/api", apiRouter); // Only route that is routed through by ingress controller.

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
