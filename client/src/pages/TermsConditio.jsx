import React from "react";

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen px-6 py-12  text-gray-800">
            <div className="max-w-3xl mx-auto rounded-xl shadow-lg p-8 hover:scale-105 transition-all duration-700">
                <header className="mb-10 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Terms & Conditions</h1>
                    <p className="text-gray-500">Please read these terms carefully before using PicGen AI.</p>
                </header>

                <ol className="space-y-8">
                    <li>
                        <h2 className="text-xl font-semibold text-gray-800 mb-1">1. Introduction</h2>
                        <p>
                            By accessing or using PicGen AI, you agree to be bound by these Terms and Conditions.
                            These terms apply to all users, visitors, and others who access the service.
                        </p>
                    </li>
                    <li>
                        <h2 className="text-xl font-semibold text-gray-800 mb-1">2. Use of Service</h2>
                        <p>
                            PicGen AI allows users to generate images from text prompts using artificial intelligence.
                            You agree to use the service lawfully and not misuse it for harmful, illegal, or abusive purposes.
                        </p>
                    </li>
                    <li>
                        <h2 className="text-xl font-semibold text-gray-800 mb-1">3. Intellectual Property</h2>
                        <p>
                            All content, features, and functionality of PicGen AI—including generated images, code, and branding—
                            are the property of PicGen AI and its licensors. You may not reproduce, distribute, or exploit any part without permission.
                        </p>
                    </li>
                    <li>
                        <h2 className="text-xl font-semibold text-gray-800 mb-1">4. User Responsibilities</h2>
                        <p>
                            You are responsible for the content you generate and share. You agree not to upload or generate anything that violates copyright,
                            promotes hate, or breaches ethical standards.
                        </p>
                    </li>
                    <li>
                        <h2 className="text-xl font-semibold text-gray-800 mb-1">5. Termination</h2>
                        <p>
                            We reserve the right to suspend or terminate access to PicGen AI at any time, without prior notice,
                            for any reason including violation of these terms.
                        </p>
                    </li>
                    <li>
                        <h2 className="text-xl font-semibold text-gray-800 mb-1">6. Changes to Terms</h2>
                        <p>
                            PicGen AI may update these Terms & Conditions from time to time. Continued use of the service after changes
                            implies acceptance of the updated terms.
                        </p>
                        <p className="mt-4 text-sm text-gray-500">Last updated: August 29, 2025</p>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default TermsAndConditions;
