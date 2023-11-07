// DocumentationPage.js
import React from 'react';
import './DocumentationPage.css'; // Make sure you have this CSS file in your project

const DocumentationPage = () => {
  return (
    <div className="documentation-container">
      <h1 className="documentation-title">Documentation</h1>
      <div className="documentation-categories">
        <div className="documentation-category">
          <h2>Presentations</h2>
          <div className="documentation-list">
            {/* Presentation Card */}
            <div className="document-card">
              <div className="document-description">
                <h3>Proposal Presentation</h3>
              </div>
              <a className="document-download" href="\Documents\presentations\TMP_23_054.pptx" download="Presentation1">Download</a>
            </div>
            <div className="document-card">
              <div className="document-description">
                <h3>Progress Presentation 1</h3>
              </div>
              <a className="document-download" href="\Documents\presentations\2023-054_Progress_Presentation_1 (1).pptx" download="Presentation1">Download</a>
            </div>
            <div className="document-card">
              <div className="document-description">
                <h3>Proposal Presentation 2</h3>
              </div>
              <a className="document-download" href="\Documents\presentations\2023-054_Progress_Presentation_2.pptx" download="Presentation1">Download</a>
            </div>
            <div className="document-card">
              <div className="document-description">
                <h3>Final Presentation</h3>
              </div>
              <a className="document-download" href="\Documents\presentations\2023-054_Final_Presentation.pptx" download="Presentation1">Download</a>
            </div>
            {/* Repeat the card for each presentation, changing the href and download attributes accordingly */}
          </div>
        </div>
        <div className="documentation-category">
          <h2>Documents</h2>
          <div className="documentation-list">
            {/* Document Card */}
            <div className="document-card">
              <div className="document-description">
                <h3>Research Paper</h3>
              </div>
              <a className="document-download" href="/Documents/documets/2023-054_Research_Paper.pdf" download="2023-054_Research_Paper.pdf">Download</a>
            </div>
            <div className="document-card">
              <div className="document-description">
                <h3>Final Report</h3>
              </div>
              <a className="document-download" href="/Documents/documets/2023-054_Research_Paper.pdf" download="2023-054_Research_Paper.pdf">Download</a>
            </div>
            {/* Repeat the card for each document, changing the href and download attributes accordingly */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
