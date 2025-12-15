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
        <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-8">Terms of Service (Wardrobe & Outfit)</h1>

        <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-6 mb-12">
          <p className="text-zinc-300"><strong>App/Mini Name:</strong> Wardrobe & Outfit</p>
          <p className="text-zinc-300"><strong>Operated by:</strong> Appcado Group</p>
          <p className="text-zinc-300"><strong>Last Updated:</strong> December 15, 2025</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <p>These Terms of Service (“Terms”) apply to your use of the [WARDOBE AND OUTFIT] Shop Mini (the “Mini”) inside the Shop app (the “Shop App”). By using the Mini, you agree to these Terms.</p>
          <h3>1. Relationship to Shopify / Shop App</h3>
          <p>The Mini is a third-party experience that runs inside the Shop App. Your use of the Shop App is also governed by Shopify’s own terms and policies, and those may apply in addition to these Terms.</p>
          <h3>2. Who Can Use the Mini</h3>
          <p>You may use the Mini only if you are allowed to use the Shop App under the laws where you live. If you are under the age of majority, you should use the Mini only with permission from a parent or guardian.</p>
          <h3>3. What the Mini Does</h3>
          <p>The Mini lets you:</p>
          <ul>
            <li>Upload an outfit photo</li>
            <li>Add notes/tags (optional)</li>
            <li>Identify and link items/products shown in the photo (manually and/or with AI assistance)</li>
            <li>Share your outfit as a shareable link or within supported sharing features</li>
          </ul>
          <h3>4. Your Content and Permissions</h3>
          <p>When you upload photos, captions, tags, and other content ("User Content"), you confirm that:</p>
          <ul>
            <li>You own it or have permission to use it, and</li>
            <li>Sharing it for the purposes of this Mini doesn’t violate anyone’s rights (including privacy, publicity, or copyright).</li>
          </ul>
          <p>You grant us a non-exclusive, worldwide, royalty-free license to host, store, reproduce, display, and distribute your User Content only as needed to operate the Mini (including showing it back to you and enabling sharing links you create). This license ends when you delete the content from the Mini, except copies needed for backups, legal compliance, or safety/security.</p>
          <h3>5. Sharing Links = Public Access</h3>
          <p>If you create a share link, anyone who has that link may be able to view the shared outfit page (including the photo and any text you included). Share links should be treated like “public” links. Don’t include sensitive info you don’t want others to see.</p>
          <h3>6. Community Rules (What You May Not Upload/Do)</h3>
          <p>You agree not to:</p>
          <ul>
            <li>Upload unlawful, harmful, or abusive content</li>
            <li>Upload content that is sexually explicit, exploitative, or involves minors in any sexual context</li>
            <li>Upload content that violates privacy (e.g., someone else’s personal info without permission)</li>
            <li>Infringe copyrights or trademarks</li>
            <li>Attempt to hack, disrupt, scrape, reverse engineer, or overload the Mini or related services</li>
            <li>Use the Mini to spam, harass, or impersonate others</li>
          </ul>
          <p>We may remove content or restrict access if we believe you violated these Terms or if required for safety, compliance, or violations of these Terms.</p>
          <h3>7. Product Links, Accuracy, and Purchases</h3>
          <p>The Mini may show product links or suggestions. Product information (price, availability, shipping, returns) is controlled by Shopify/merchants and may change.</p>
          <p>Purchases and fulfillment are handled by merchants and the Shop App, not by us. Any disputes about orders should be directed to the merchant and/or Shop support.</p>
          <h3>8. Third-Party Services</h3>
          <p>The Mini may rely on third-party services (for example: Shop/Shopify platform features, hosting, databases, file storage, analytics, or AI providers). Their terms and privacy policies may also apply to those services.</p>
          <h3>9. Disclaimer</h3>
          <p>THE MINI IS PROVIDED “AS IS” AND “AS AVAILABLE.” WE DON’T GUARANTEE THE MINI WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT PRODUCT MATCHES/IDENTIFICATIONS WILL BE ACCURATE OR COMPLETE.</p>
          <h3>10. Limitation of Liability</h3>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, OR GOODWILL, ARISING FROM YOUR USE OF THE MINI OR ANY SHARED CONTENT OR THIRD-PARTY PRODUCTS.</p>
          <h3>11. Termination</h3>
          <p>You can stop using the Mini at any time. We may suspend or terminate access if needed for safety, compliance, or violations of these Terms.</p>
          <h3>12. Changes to These Terms</h3>
          <p>We may update these Terms from time to time. The “Last Updated” date shows when changes were made. Continued use of the Mini after changes means you accept the updated Terms.</p>
          <h3>13. Contact</h3>
          <p>Questions about these Terms:</p>
          <p>Email: contact@appcadogroup.com</p>
        </div>
      </motion.div>
    </div>
  );
};