import React from 'react';
import { Brain, Github, Linkedin } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <Brain className="h-10 w-10 text-white" />
            <div>
              <h1 className="text-2xl font-bold">AI Resume Reviewer</h1>
              <p className="text-sm text-blue-100">Created by Aryan Acharya</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/aryan1112003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/aryan-acharya-9b939b316/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <span className="text-sm text-blue-100">© 2025 All rights reserved</span>
          </div>
        </div>
      </div>
    </header>
  );
}