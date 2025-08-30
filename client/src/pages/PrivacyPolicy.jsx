import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="hover:scale-105 transition-all duration-700 min-h-screen px-6 py-12 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>
            At PicGen AI, we value your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
          <p>
            We may collect personal data such as your name, email address, and usage behavior. Additionally, we may store text prompts and generated images to improve our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Data</h2>
          <p>
            Your data helps us personalize your experience, improve our AI models, and provide customer support. We do not sell your data to third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Third-Party Services</h2>
          <p>
            We may use third-party tools for analytics or hosting. These services may have access to limited data but are bound by confidentiality agreements.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal data. To exercise these rights, contact us at support@picgen.ai.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Continued use of our service implies acceptance of the updated policy.
          </p>
          <p className="mt-4 text-sm text-gray-500">Last updated: August 29, 2025</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
