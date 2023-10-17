const { onRequest } = require("firebase-functions/v2/https");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client({});

const SECRETS_NAME = "GOOGLE_MAP_API";

exports.geocode = onRequest(
  { secrets: [SECRETS_NAME] },
  (request, response) => {
    geocodeRequest(request, response, client, process.env.GOOGLE_MAP_API);
  }
);

exports.placeNearby = onRequest(
  { secrets: [SECRETS_NAME] },
  (request, response) => {
    placesRequest(request, response, client, process.env.GOOGLE_MAP_API);
  }
);
