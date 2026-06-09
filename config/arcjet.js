import arcjet, {shield, detectBot, tokenBucket} from "@arcjet/node";
import { ARCJET_KEY, ARCJET_ENV } from "./env.js";

const isDev = ARCJET_ENV === "development";

const aj = arcjet({
  key: ARCJET_KEY, 
  characteristics: ["ip.src"],
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: isDev ? "DRY_RUN" : "LIVE", 
      allow: ["CATEGORY:SEARCH_ENGINE"], 
    }),
    tokenBucket({
      mode: "LIVE", 
      refillRate: 5, 
      interval:10,
      capacity: 10, 
    }),
  ],
});

export default aj;