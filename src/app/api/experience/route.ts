
import { NextRequest as req, NextResponse as res } from "next/server";
import https from "node:https";
import axios from "axios";
import qs from "qs";

import { pool } from "../../../database/db";


export async function GET(request: Request) {
  const [response]: any = await pool.query(
    "SELECT * FROM powerbi_credentials where app=?",
    ["experience learning"]
  );
  const httpAgent = new https.Agent({
    rejectUnauthorized: false,
  });

  axios.defaults.httpsAgent = httpAgent;

  const value = qs.stringify({
    grant_type: response[0].grant_type,
    resource: response[0].resource,
    client_id: response[0].client_id,
    client_secret: response[0].client_secret,
  });

  const { data } = await axios.request({
    method: "POST",
    maxBodyLength: Infinity,
    url: "https://login.windows.net/276d3383-2ad4-4f95-b231-1392fb8a0014/oauth2/token",
    data: value,
  });

  const { access_token } = data;
  try {
    const results = await axios.request({
      method: "GET",
      url: "https://api.powerbi.com/v1.0/myorg/availableFeatures",
      headers: {
        Authorization: "Bearer " + access_token,
      },
    });

    return res.json({
      results: results.data,
    });
  } catch (error) {
    return res.json(error);
  }

}
