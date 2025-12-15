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
        {/* replace old privacy policy with new privacy policy */}
        {/* # Privacy Policy (Wardrobe & Outfit) */}
        {/* 
This Privacy Policy explains how we collect, use, and share information when you use the Wardrobe & Outfit Shop Mini (the “Mini”) inside the Shop app (the “Shop App”).

## 1. Overview
The Mini lets you upload outfit photos and share them, including links to items/products shown in the image. This policy covers information processed by the Mini. Shopify also has its own privacy practices for the Shop App.

## 2. Information We Process

### A) Outfit Content You Provide
- **Photos/images** you upload
- **Captions, tags, notes** you add (optional)
- **Item/product references** you attach (e.g., product IDs/links)

### B) Sharing Data
- If you create a share link, we store the shared outfit content needed to render that shared page (photo + related metadata).

### C) Usage & Diagnostics
- Basic usage events (e.g., screens viewed, buttons tapped) to understand performance and improve features
- Diagnostic data (e.g., errors/crash logs) to keep the Mini reliable and secure

### D) Device / App Context (Limited)
The Shop App may provide limited technical context (such as app version, device type, or language settings) necessary to run the Mini.

## 3. How We Use Information
We use the information above to:
- Provide the core features (uploading, tagging, saving, and sharing outfits)
- Generate or improve item identification/product linking (if you use an AI/matching feature)
- Maintain security, prevent abuse, and troubleshoot issues
- Improve performance and user experience

We do **not** sell your personal information.

## 4. AI / Image Processing (If Enabled)
If the Mini offers AI-assisted features (like detecting items in the photo or suggesting products), your image (and sometimes cropped portions of it) may be sent to an AI service provider **only to fulfill your request**. We do not allow providers to use your images to advertise to you.

(You should list your actual providers here, if used: e.g., “fal.ai”, “OpenAI”, etc.)

## 5. How We Share Information

### A) Sharing You Control
If you create a share link, the shared outfit page may be visible to **anyone with the link**. Shared pages may include:
- The outfit photo
- Captions/tags you included
- Linked items/products

### B) Service Providers
We share information with vendors that help us operate the Mini (for example: hosting, database/file storage, analytics, moderation tooling), only as needed to provide the service.

### C) Legal and Safety
We may share information if we believe it’s required by law, or to protect users, prevent fraud/abuse, or enforce our terms.

## 6. Retention
- We keep outfit photos and related metadata **as long as you keep the outfit in the Mini** (and longer if required for backups, legal compliance, or safety/security).
- Diagnostics and logs may be retained for a limited period to maintain reliability and prevent abuse.

## 7. Your Choices
- **Don’t share:** You can use the Mini without generating share links.
- **Delete content:** If the Mini provides deletion controls, you can delete outfits you uploaded. If you need help deleting content, contact us.
- **Be careful what you upload:** Outfit photos can contain faces, backgrounds, or personal details. Avoid uploading sensitive information.

## 8. Security
We use reasonable technical safeguards (such as encrypted transmission) designed to protect information. No system is 100% secure.

## 9. International Processing
Your information may be processed in countries other than where you live (for example, where our hosting providers operate). By using the Mini, you understand this may occur.

## 10. Children’s Privacy
The Mini is not intended for children who are not permitted to use the Shop App. We do not knowingly collect personal information from children in violation of applicable law.

## 11. Changes to This Policy
We may update this policy as the Mini evolves. We will update the “Last Updated” date when we do.

## 12. Contact
Questions or requests about privacy:  
**Email:** contact@appcadogroup.com */}

        <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-8">Privacy Policy (Wardrobe & Outfit)</h1>
        <p className="text-zinc-400 mb-12">Last updated: December 15, 2025</p>

        <div className="prose prose-invert prose-lg max-w-none">
          <p>This Privacy Policy explains how we collect, use, and share information when you use the Wardrobe & Outfit Shop Mini (the “Mini”) inside the Shop app (the “Shop App”).</p>
          <h3>1. Overview</h3>
          <p>The Mini lets you upload outfit photos and share them, including links to items/products shown in the image. This policy covers information processed by the Mini. Shopify also has its own privacy practices for the Shop App.</p>
          <h3>2. Information We Process</h3>
          <h4>A) Outfit Content You Provide</h4>
          <ul>
            <li>Photos/images you upload</li>
            <li>Captions, tags, notes you add (optional)</li>
            <li>Item/product references you attach (e.g., product IDs/links)</li>
          </ul>
          <h4>B) Sharing Data</h4>
          <ul>
            <li>If you create a share link, we store the shared outfit content needed to render that shared page (photo + related metadata).</li>
          </ul>
          <h4>C) Usage & Diagnostics</h4>
          <ul>
            <li>Basic usage events (e.g., screens viewed, buttons tapped) to understand performance and improve features</li>
            <li>Diagnostic data (e.g., errors/crash logs) to keep the Mini reliable and secure</li>
          </ul>
          <h4>D) Device / App Context (Limited)</h4>
          <p>The Shop App may provide limited technical context (such as app version, device type, or language settings) necessary to run the Mini.</p>
          <h3>3. How We Use Information</h3>
          <ul>
            <li>Provide the core features (uploading, tagging, saving, and sharing outfits)</li>
            <li>Generate or improve item identification/product linking (if you use an AI/matching feature)</li>
            <li>Maintain security, prevent abuse, and troubleshoot issues</li>
            <li>Improve performance and user experience</li>
          </ul>
          <p>We do **not** sell your peronal informatiion</p>
          <h3>4. AI / Image Processing (If Enabled)</h3>
          <p>If the Mini offers AI-assisted features (like detecting items in the photo or suggesting products), your image (and sometimes cropped portions of it) may be sent to an AI service provider **only to fulfill your request**. We do not allow providers to use your images to advertise to you.</p>
          <h3>5. How We Share Information</h3>
          <h4>A) Sharing You Control</h4>
          <p>If you create a share link, the shared outfit page may be visible to **anyone with the link**. Shared pages may include:</p>
          <ul>
            <li>The outfit photo</li>
            <li>Captions/tags you included</li>
            <li>Linked items/products</li>
          </ul>
          <h4>B) Service Providers</h4>
          <p>We share information with vendors that help us operate the Mini (for example: hosting, database/file storage, analytics, moderation tooling), only as needed to provide the service.</p>
          <h4>C) Legal and Safety</h4>
          <p>We may share information if we believe it’s required by law, or to protect users, prevent fraud/abuse, or enforce our terms.</p>
          <h3>6. Retention</h3>
          <p>We keep outfit photos and related metadata **as long as you keep the outfit in the Mini** (and longer if required for backups, legal compliance, or safety/security). Diagnostics and logs may be retained for a limited period to maintain reliability and prevent abuse.</p>
          <h3>7. Your Choices</h3>
          <h4>A) Don’t Share</h4>
          <p>You can use the Mini without generating share links.</p>
          <h4>B) Delete Content</h4>
          <p>If the Mini provides deletion controls, you can delete outfits you uploaded. If you need help deleting content, contact us.</p>
          <h4>C) Be Careful What You Upload</h4>
          <p>Outfit photos can contain faces, backgrounds, or personal details. Avoid uploading sensitive information.</p>
          <h3>8. Security</h3>
          <p>We use reasonable technical safeguards (such as encrypted transmission) designed to protect information. No system is 100% secure.</p>
          <h3>9. International Processing</h3>
          <p>Your information may be processed in countries other than where you live (for example, where our hosting providers operate). By using the Mini, you understand this may occur.</p>
          <h3>10. Children’s Privacy</h3>
          <p>The Mini is not intended for children who are not permitted to use the Shop App. We do not knowingly collect personal information from children in violation of applicable law.</p>
          <h3>11. Changes to This Policy</h3>
          <p>We may update this policy as the Mini evolves. We will update the “Last Updated” date when we do.</p>
          <h3>12. Contact</h3>
          <p>Questions or requests about privacy:  **Email:** contact@appcadogroup.com</p>

        </div>
      </motion.div>
    </div>
  );
};