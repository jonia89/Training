"use strict";
import { CreateBucketCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client.js";
export const bucketParamsCreate = { Bucket: prompt("Insert bucket name") };
export const CreateBucket = async () => {
  try {
    const data = await s3Client.send(
      new CreateBucketCommand(bucketParamsCreate)
    );
    console.log("Ämpärin luonti onnistui :)", data);
    return data;
  } catch (err) {
    console.log("Jotain meni vikaan :(", err);
  }
};
//module.exports ={CreateBucket, bucketParams};
import { ListBucketsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client.js";

export const listBuckets = async () => {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));
    console.log("Ämpärit listattu :)", data.Buckets);
    return data;
  } catch (err) {
    console.log("Jotain meni vikaan :(", err);
  }
};
//module.exports = { listBuckets, bucketParams };
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client.js";
import { path } from "path";
import { fs } from "fs";
const file = prompt("Insert file path");
const fileStream = fs.createReadStream(file);
export const uploadParams = {
  Bucket: prompt("Destination bucket"),
  Key: path.basename(file),
  Body: fileStream,
};
export const putToBucket = async () => {
  try {
    const data = await s3Client.send(new PutObjectCommand(uploadParams));
    console.log("Siirto onnistui :)", data);
    return data;
  } catch (err) {
    console.log("Jotain meni vikaan :(", err);
  }
};
//module.exports = { putToBucket, uploadParams };
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client.js";
export const bucketParamsGet = {
  Bucket: prompt("Name of bucket"),
  Key: prompt("Item"),
};
export const loadFromBucket = async () => {
  try {
    const streamToString = (stream) =>
      new Promise((resolve, reject) => {
        const chunks = [];
        stream.on("data", (chunk) => chunks.push(chunk));
        stream.on("error", reject);
        stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
      });
    const data = await s3Client.send(new GetObjectCommand(bucketParamsGet));
    return data;
    const bodyContents = await streamToString(data.Body);
    console.log(bodyContents);
    return bodyContents;
  } catch (err) {
    console.log("Jotain meni vikaan :(", err);
  }
};
//module.exports = { loadFromBucket, bucketParamsGet };
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client.js";
export const bucketParamsDel = {
  Bucket: prompt("Bucket name"),
  Key: prompt("Item"),
};

export const deleteItem = async () => {
  try {
    const data = await s3Client.send(new DeleteObjectCommand(bucketParamsDel));
    console.log("Tiedosto poistettu", data);
    return data;
  } catch (err) {
    console.log("Jotain meni vikaan :(", err);
  }
};
//module.exports = { deleteItem, bucketParams };

import { DeleteBucketCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client.js";
import { create } from "domain";
export const bucketParamsDelB = { Bucket: prompt("BUCKET_NAME") };
export const deleteBucket = async () => {
  try {
    const data = await s3Client.send(new DeleteBucketCommand(bucketParamsDelB));
    return data;
    console.log("Ämpärin poisto onnistui");
  } catch (err) {
    console.log("Jotain meni vikaan :(", err);
  }
};
//module.exports = { deleteBucket, bucketParamsDelB };
CreateBucket(jämpäri);
