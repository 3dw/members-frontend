/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import formData from "form-data";
import Mailgun from "mailgun.js";

admin.initializeApp();

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: functions.config().mailgun.api_key,
  url: "https://api.mailgun.net/v3",
});

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const sendMentionEmail = functions.https.onRequest(async (req, res) => {
  // 設置 CORS
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  // 處理 OPTIONS 請求
  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  try {
    const {
      mentionedUserId,
      mentionerName,
      message,
      timestamp,
    } = req.body;

    // 從 Firestore 獲取被提及用戶的郵箱
    const userDoc = await admin.firestore().collection("users").doc(mentionedUserId).get();
    const userData = userDoc.data();

    if (!userData || !userData.email) {
      res.status(404).json({ error: "User email not found" });
      return;
    }

    // 發送郵件
    await mg.messages.create(functions.config().mailgun.domain, {
      from: `ALearn <noreply@${functions.config().mailgun.domain}>`,
      to: userData.email,
      subject: `你被 ${mentionerName} 在留言板中提及`,
      html: `
        <h2>你被提及了！</h2>
        <p>${mentionerName} 在留言板中提到了你：</p>
        <blockquote>${message}</blockquote>
        <p>時間：${new Date(timestamp).toLocaleString()}</p>
        <p>點擊這裡查看留言：<a href="${functions.config().app.url}/bulletin">查看留言板</a></p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});
