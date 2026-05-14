import db from "../../db";
import { Resend } from "resend";
import { collection, addDoc } from "firebase/firestore";

const resend = new Resend(process.env.RESEND_API_KEY);

const request = async (req, res) => {
  try {
    const docRef = await addDoc(collection(db, "contact"), {
      ...req.body,
      created: new Date().toISOString(),
    });
    const id = docRef.id;

    const { FirstName, LastName, Email, Message } = req.body;

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'bhogeshwarj@gmail.com',
      subject: `New Contact Form Submission from ${FirstName} ${LastName}`,
      html: `
        <p><strong>Name:</strong> ${FirstName} ${LastName}</p>
        <p><strong>Email:</strong> ${Email}</p>
        <p><strong>Message:</strong></p>
        <p>${Message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(400).json({ error });
    }

    res.status(200).json({ id });
  } catch (e) {
    console.error("API error:", e);
    res.status(400).end();
  }
};
export default request;
