import React from 'react';
import { FileText, Upload, FileType } from 'lucide-react';
import { FileUpload } from './FileUpload';

interface ResumeUploaderProps {
  onFileSelect: (file: File) => Promise<void>;
}

export function ResumeUploader({ onFileSelect }: ResumeUploaderProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:scale-[1.02]">
      <div className="text-center mb-6">
        <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
          <FileText className="h-8 w-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Upload Your Resume</h2>
        <p className="text-gray-600">Let AI analyze your resume and provide professional feedback</p>
      </div>
      
      <FileUpload onFileSelect={onFileSelect} />
      
      <div className="mt-6 pt-6 border-t border-gray-100">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Supported Formats:</h3>
        <div className="flex justify-center space-x-4">
          {['PDF', 'DOC', 'DOCX'].map((format) => (
            <div key={format} className="flex items-center space-x-1 text-gray-600">
              <FileType className="h-4 w-4" />
              <span className="text-sm">{format}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}