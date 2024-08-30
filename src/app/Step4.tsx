// Step4.js
"use client";
import React from "react";

const Step4 = () => (
  <div>
    <p>Content for Step 4</p>
    {/* Step 4 specific content */}
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input type="checkbox" className="checkbox-input" />
        <span>I agree to the terms and conditions for Step 4</span>
      </label>
    </div>
  </div>
);

export default Step4;
