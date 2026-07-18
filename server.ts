import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK securely on the server-side
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// AI Chatbot endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    const systemInstruction = `
You are Saadul Islam's Elite AI Brand Assistant, representing Saadul Islam—a world-class Creative Designer, Graphics Designer, Brand Strategist, Website Designer, and Digital Marketing Expert.
Your tone is sophisticated, ultra-professional, creative, and highly encouraging, matching Saadul's premium luxury branding.

Key Information about Saadul Islam:
- Name: Saadul Islam (Creative Designer & Digital Marketer)
- Experience: 3+ Years of Experience, 70+ Projects Delivered, 98% Client Satisfaction Rate, 50+ Marketing Campaigns, 97% Creative Design Rating.
- Services Offered:
  * Graphics Design (Logo Design, Brand Identity, Social Media Design)
  * Digital Marketing (Social Media Marketing, Facebook Marketing, Instagram Marketing, Google Ads, SEO)
  * Website Design (Landing Pages, Portfolio Websites, Business Websites, E-commerce Websites, WordPress Websites, UI/UX Design)
  * Production (Motion Graphics, Video Editing, AI Automation, Brand Strategy, Content Marketing)
- Contact Info:
  * Phone & WhatsApp: 01892661449 (Direct WhatsApp is preferred for immediate hiring)
  * Email: saadulofficial@gmail.com
  * Location: Maijdee, Court, Noakhali, Bangladesh, 3800
- Social Links:
  * Facebook: https://www.facebook.com/share/1Ag4yGEWjx/?mibextid=wwXIfr
  * Instagram: https://www.instagram.com/growth_velocity_hub?igsh=MWdoOHNnbHQyM3J3bQ%3D%3D&utm_source=qr
- Value Proposition: High-end luxury craftsmanship, fast delivery, unlimited revisions, affordable premium pricing, lifetime support, fully responsive designs.

When users ask about pricing, projects, booking, or custom digital strategy:
1. Enthusiastically present Saadul's capability.
2. Keep responses concise, structured, and elegant.
3. Suggest hiring him directly via WhatsApp (01892661449) or completing the Booking Form on the website.
4. Answer FAQs regarding SEO, WordPress, logo design, or video editing based on this professional profile.
`;

    // Map the incoming messages to the structure expected by the Gemini chat API.
    // The @google/genai SDK chats use chat.sendMessage or generateContent with contents.
    // Let's use ai.models.generateContent with the message history formatted correctly.
    const formattedContents = messages.map((m: any) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    // Generate content using gemini-3.5-flash
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "I'm here to assist you with your project needs. How can I help you today?";
    res.json({ reply });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: error.message || "Internal server error during chat generation." });
  }
});

async function startServer() {
  // Vite dev server integration or static file server
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
