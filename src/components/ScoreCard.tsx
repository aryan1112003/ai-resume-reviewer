import React from 'react';
import { Award } from 'lucide-react';

interface ScoreCardProps {
  score: number;
  category: string;
  description: string;
}

export function ScoreCard({ score, category, description }: ScoreCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
        <div className="flex items-center">
          <Award className="h-5 w-5 text-blue-500 mr-2" />
          <span className="text-2xl font-bold text-blue-600">{score}%</span>
        </div>
      </div>
    </div>
  );
}