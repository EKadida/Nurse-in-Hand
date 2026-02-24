import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';

const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("API_KEY is missing");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

const logos = [
  {
    filename: 'moh.png',
    prompt: 'Logo of the Ministry of Health Kenya. Features the Kenyan Coat of Arms with two lions holding spears and a shield, with the text "MINISTRY OF HEALTH" below it. White background.'
  },
  {
    filename: 'ntsa.png',
    prompt: 'Logo of NTSA (National Transport and Safety Authority) Kenya. Features the text "NTSA" in green with a stylized road graphic and the slogan "Keep our roads safe". White background.'
  },
  {
    filename: 'vision2030.png',
    prompt: 'Logo of Kenya Vision 2030. Text "Kenya ( ) VISION 2030" with the Kenyan flag colors (black, red, green) in a wave above the year. White background.'
  },
  {
    filename: 'kenha.png',
    prompt: 'Logo of KeNHA (Kenya National Highways Authority). Features a black semi-circle with a yellow road line and the text "KeNHA Kenya National Highways Authority". White background.'
  },
  {
    filename: 'police.png',
    prompt: 'Logo of the National Police Service Kenya. A blue square containing a shield with Kenyan flag colors, crossed spears, and the text "SERVICE WITH DIGNITY". White background.'
  },
  {
    filename: 'delamere.png',
    prompt: 'Logo of Delamere Estates Ltd. A black stylized symbol resembling a brand or tree, with the text "DELAMERE ESTATES LTD" next to it. White background.'
  },
  {
    filename: 'isuzu.png',
    prompt: 'Logo of Isuzu East Africa. Bold red text "ISUZU" with "EAST AFRICA" in black below it. White background.'
  },
  {
    filename: 'nakuru.png',
    prompt: 'Logo of the County Government of Nakuru. A circular seal featuring flamingos, a lake, and the text "COUNTY GOVERNMENT OF NAKURU". White background.'
  },
  {
    filename: 'technobrain.png',
    prompt: 'Logo of Techno Brain. Text "TECHNO BRAIN" with "inspiring solutions..." tagline. Features orange and grey square blocks icon. White background.'
  },
  {
    filename: 'bak.png',
    prompt: 'Logo of Boda Boda Safety Association of Kenya (BAK). Circular logo with green text "BAK" and "Boda Boda Safety Association of Kenya" around it. White background.'
  },
  {
    filename: 'easycoach.png',
    prompt: 'Logo of Easy Coach. Text "easycoach" with a large red lowercase "e" in a circle. White background.'
  },
  {
    filename: '4nte.png',
    prompt: 'Logo of 4N.T.E Sacco Society Ltd. Circular badge logo with yellow and blue colors, featuring a building or monument, and the text "4N.T.E SACCO SOCIETY LTD". White background.'
  },
  {
    filename: 'moderncoast.png',
    prompt: 'Logo of Modern Coast Express. Blue logo featuring a stylized lion silhouette and the text "MODERN COAST EXPRESS" in bold blue letters. White background.'
  }
];

async function generateLogo(filename: string, prompt: string) {
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
        const outputPath = path.join(process.cwd(), 'public', 'images', 'partners', filename);
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
  const outputDir = path.join(process.cwd(), 'public', 'images', 'partners');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const logo of logos) {
    await generateLogo(logo.filename, logo.prompt);
  }
}

main();
