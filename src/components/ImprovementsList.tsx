import React from 'react';
import { Briefcase } from 'lucide-react';

interface Suggestion {
  title: string;
  description: string;
}

interface ImprovementsListProps {
  suggestions: Suggestion[];
}

export function ImprovementsList({ suggestions }: ImprovementsListProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Briefcase className="h-5 w-5 mr-2 text-blue-500" />
        Suggested Improvements
      </h3>
      <ul className="space-y-3">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="flex flex-col space-y-1">
            <h4 className="font-medium text-gray-800">{suggestion.title}</h4>
            <p className="text-gray-600 text-sm">{suggestion.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}