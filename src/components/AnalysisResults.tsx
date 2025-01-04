import React from 'react';
import { ScoreCard } from './ScoreCard';
import { ImprovementsList } from './ImprovementsList';
import { KeywordAnalysis } from './KeywordAnalysis';
import type { ResumeAnalysis } from '../types';

interface AnalysisResultsProps {
  analysis: ResumeAnalysis;
}

export function AnalysisResults({ analysis }: AnalysisResultsProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <ScoreCard
        score={analysis.score}
        category="Resume Score"
        description="Based on content quality, ATS compatibility, and industry standards"
      />
      
      <div className="grid gap-6 md:grid-cols-2">
        <ImprovementsList suggestions={analysis.suggestions} />
        <KeywordAnalysis keywords={analysis.keywords} />
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Detailed Improvements</h3>
        {analysis.improvements.map((improvement, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <h4 className="font-medium text-blue-600 mb-2">{improvement.category}</h4>
            <ul className="list-disc list-inside space-y-1">
              {improvement.details.map((detail, idx) => (
                <li key={idx} className="text-gray-700">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}