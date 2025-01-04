import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ResumeUploader } from './components/ResumeUploader';
import { AnalysisResults } from './components/AnalysisResults';
import { ErrorMessage } from './components/ErrorMessage';
import { analyzeResume } from './services/gemini';
import { extractTextFromFile } from './utils/fileParser';
import type { ResumeAnalysis } from './types';

export default function App() {
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = async (file: File) => {
    setIsAnalyzing(true);
    setError(null);
    try {
      const text = await extractTextFromFile(file);
      const result = await analyzeResume(text);
      setAnalysis(result);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      console.error('Error processing file:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {error && <ErrorMessage message={error} />}
        
        <div className="grid gap-8 md:grid-cols-2">
          <ResumeUploader onFileSelect={handleFileSelect} />
          
          {isAnalyzing ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
            </div>
          ) : analysis && (
            <AnalysisResults analysis={analysis} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}