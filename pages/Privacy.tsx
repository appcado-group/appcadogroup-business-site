import React from 'react';
import { motion } from 'framer-motion';

export const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-8">Privacy Policy</h1>
        <p className="text-zinc-400 mb-12">Last updated: October 26, 2023</p>

        <div className="prose prose-invert prose-lg max-w-none">
          <p>
            At Nova Solutions, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
            disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h3>1. Information We Collect</h3>
          <p>
            We collect information that you voluntarily provide to us when you express an interest in obtaining 
            information about us or our products and services, when you participate in activities on the 
            Website or otherwise when you contact us.
          </p>

          <h3>2. Use of Your Information</h3>
          <p>
            We use personal information collected via our Website for a variety of business purposes described below. 
            We process your personal information for these purposes in reliance on our legitimate business interests, 
            in order to enter into or perform a contract with you, with your consent, and/or for compliance with 
            our legal obligations.
          </p>
          <ul>
            <li>To send you marketing and promotional communications.</li>
            <li>To respond to user inquiries/offer support.</li>
            <li>To request feedback.</li>
          </ul>

          <h3>3. Sharing Your Information</h3>
          <p>
            We only share information with your consent, to comply with laws, to provide you with services, 
            to protect your rights, or to fulfill business obligations.
          </p>

          <h3>4. Contact Us</h3>
          <p>
            If you have questions or comments about this policy, you may email us at privacy@novasolutions.com.
          </p>
        </div>
      </motion.div>
    </div>
  );
};