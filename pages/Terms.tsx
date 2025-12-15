import React from 'react';
import { motion } from 'framer-motion';

export const Terms: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-8">Terms of Service</h1>
        <p className="text-zinc-400 mb-12">Last updated: October 26, 2023</p>

        <div className="prose prose-invert prose-lg max-w-none">
          <p>
            These Terms of Service constitute a legally binding agreement made between you, whether personally 
            or on behalf of an entity (“you”) and Nova Solutions (“we,” “us” or “our”), concerning your access 
            to and use of the Nova Solutions website as well as any other media form, media channel, mobile 
            website or mobile application related, linked, or otherwise connected thereto.
          </p>

          <h3>1. Agreement to Terms</h3>
          <p>
            By accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. 
            If you do not agree with all of these Terms of Service, then you are expressly prohibited from using 
            the Site and you must discontinue use immediately.
          </p>

          <h3>2. Intellectual Property Rights</h3>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, 
            functionality, software, website designs, audio, video, text, photographs, and graphics on the Site 
            (collectively, the “Content”) and the trademarks, service marks, and logos contained therein are 
            owned or controlled by us or licensed to us.
          </p>

          <h3>3. User Representations</h3>
          <p>
            By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree 
            to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; 
            (3) you will not access the Site through automated or non-human means, whether through a bot, script 
            or otherwise.
          </p>

          <h3>4. Modifications and Interruptions</h3>
          <p>
            We reserve the right to change, modify, or remove the contents of the Site at any time or for any 
            reason at our sole discretion without notice. However, we have no obligation to update any information 
            on our Site.
          </p>
        </div>
      </motion.div>
    </div>
  );
};