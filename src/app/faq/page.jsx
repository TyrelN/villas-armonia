import React from 'react';

export default function FAQPage() {
    const faqs = [
        {
            question: "What is Villas Armonia?",
            answer: "Villas Armonia is a residential community development offering beautiful lots for purchase. Our community is designed to provide a harmonious living environment with modern amenities and a strong sense of community."
        },
        {
            question: "How do I purchase a lot?",
            answer: "To purchase a lot, you can browse our available lots on the lot map, select the one you're interested in, and submit a purchase request. Our team will review your request and contact you within 2-3 business days to discuss the next steps."
        },
        {
            question: "What amenities are included?",
            answer: "Our community includes various amenities such as gym facilities, swimming pools, playgrounds, pet parks, yoga areas, BBQ areas, and more. Each lot may have different amenities available, which you can see when browsing the lot map."
        },
        {
            question: "Can I visit the property before purchasing?",
            answer: "Yes, we encourage potential buyers to visit the property. Please contact us to schedule a viewing appointment during our office hours (10 AM to 5 PM PST)."
        },
        {
            question: "What is the payment process?",
            answer: "Once your lot purchase request is approved, we'll provide you with detailed payment instructions. We offer various payment options to accommodate different buyer needs."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
            <div className="container mx-auto px-4 py-24 md:py-36">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        We know investing in a community and a space you aren't familiar with can be nerve-wracking.
                        We're here to communicate through concerns and build understanding on what Villas Armonia is
                        and what it's becoming!
                    </p>
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                                    {faq.question}
                                </h3>
                                <div className="text-gray-700 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="text-center mt-12">
                    <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Still Have Questions?
                        </h2>
                        <div className="text-gray-700 mb-6">

                            <p>You can reach us directly at: <a href="mailto:info@villasarmonia.com" className="text-green-600 hover:text-green-800 underline">info@villasarmonia.com</a></p>
                            <p className="mt-2"><strong>Office Hours:</strong> 10 AM to 5 PM PST</p>
                            <p className="mt-1"><strong>Expected Response Time:</strong> 2-3 business days</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
