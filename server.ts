require("zone.js/dist/zone-node");

const express = require("express");
const ngUniversal = require("@nguniversal/express-engine");

const appServer = require("./dist-server/main.bundle");

const app = express();

global['Event'] = null;

const angularRouter = (req, res) => {
  res.render("index", { req, res });
};

app.get("/", angularRouter);
app.use(express.static(`${__dirname}/dist`));

/* Configure Angular Express engine */
app.engine(
  "html",
  ngUniversal.ngExpressEngine({
    bootstrap: appServer.AppServerModuleNgFactory
  })
);
app.set("view engine", "html");
app.set("views", "dist");

app.get("*", angularRouter);

app.listen(3000, () => {
  console.log(`Listening on http://localhost:3000`);
});
