import React from 'react';
import { Tag, AlertCircle } from 'lucide-react';

interface KeywordAnalysisProps {
  keywords: {
    present: string[];
    missing: string[];
  };
}

export function KeywordAnalysis({ keywords }: KeywordAnalysisProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Tag className="h-5 w-5 mr-2 text-blue-500" />
        Keyword Analysis
      </h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Present Keywords</h4>
          <div className="flex flex-wrap gap-2">
            {keywords.present.map((keyword, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1 text-amber-500" />
            Recommended Keywords
          </h4>
          <div className="flex flex-wrap gap-2">
            {keywords.missing.map((keyword, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}