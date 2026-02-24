import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY is missing");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

const imagesToGenerate = [
  {
    filename: 'hero-ambulance.png',
    prompt: 'A high-quality photo of a female nurse in a white uniform standing next to a yellow ambulance on a highway in Kenya. The ambulance has red and white branding. Sunny day.'
  },
  {
    filename: 'services-center.png',
    prompt: 'A white shipping container converted into a medical clinic on a roadside in Kenya, with red cross symbols.'
  },
  {
    filename: 'sponsorship-1.png',
    prompt: 'A white shipping container converted into a medical clinic on a roadside.'
  },
  {
    filename: 'sponsorship-2.png',
    prompt: 'A red trauma kit bag open with medical supplies.'
  },
  {
    filename: 'sponsorship-3.png',
    prompt: 'A yellow emergency response motorcycle with a siren.'
  },
  {
    filename: 'sponsorship-4.png',
    prompt: 'A yellow medical stretcher and immobilization equipment.'
  },
  {
    filename: 'sponsorship-5.png',
    prompt: 'Hydraulic rescue tools, jaws of life.'
  },
  {
    filename: 'sponsorship-6.png',
    prompt: 'The interior of an ambulance with medical equipment.'
  },
  {
    filename: 'sponsorship-7.png',
    prompt: 'A LifePak 15 monitor defibrillator.'
  },
  {
    filename: 'sponsorship-8.png',
    prompt: 'A smiling female paramedic in a white uniform.'
  }
];

async function generateImage(filename: string, prompt: string) {
  try {
    console.log(`Generating ${filename}...`);
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        },
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const base64Data = part.inlineData.data;
        const buffer = Buffer.from(base64Data, 'base64');
        const outputPath = path.join(process.cwd(), 'public', 'images', filename);
        fs.writeFileSync(outputPath, buffer);
        console.log(`Saved ${filename}`);
        return;
      }
    }
    console.error(`No image data found for ${filename}`);
  } catch (error) {
    console.error(`Error generating ${filename}:`, error);
  }
}

async function main() {
  const outputDir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const image of imagesToGenerate) {
    await generateImage(image.filename, image.prompt);
  }
}

main();
