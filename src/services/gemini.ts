import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_CONFIG } from '../config/gemini';
import type { ResumeAnalysis } from '../types';

const genAI = new GoogleGenerativeAI(GEMINI_CONFIG.apiKey);

const SYSTEM_PROMPT = `You are an expert resume reviewer. Analyze the resume and provide detailed, actionable feedback. Focus on:
1. Professional impact and achievements
2. ATS optimization
3. Industry-specific keywords
4. Clear and measurable results
5. Modern formatting practices`;

export async function analyzeResume(resumeText: string): Promise<ResumeAnalysis> {
  try {
    const model = genAI.getGenerativeModel({ model: GEMINI_CONFIG.model });

    const prompt = `${SYSTEM_PROMPT}

Resume to analyze:
${resumeText}

Provide feedback in this exact JSON format:
{
  "score": <number 0-100>,
  "suggestions": [
    {
      "title": "Clear and specific improvement area",
      "description": "Detailed actionable advice"
    }
  ],
  "keywords": {
    "present": ["existing strong keywords"],
    "missing": ["recommended keywords to add"]
  },
  "improvements": [
    {
      "category": "Section name (e.g., Experience, Education)",
      "details": ["specific improvement point"]
    }
  ]
}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    if (!text) {
      throw new Error('No response received from AI');
    }

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Invalid response format from AI');
    }

    const analysis = JSON.parse(jsonMatch[0]);
    
    // Validate response structure
    if (!analysis.score || !Array.isArray(analysis.suggestions) || !analysis.improvements) {
      throw new Error('Incomplete analysis from AI');
    }

    return analysis;
  } catch (error) {
    console.error('Error analyzing resume:', error);
    throw new Error('Unable to analyze resume. Please try again.');
  }
}