import React from 'react';

const Faq = () => {
    const faqItems = [
        {
          question: 'What is your company all about?',
          answer: 'We are a tech company specializing in...'
        },
        {
          question: 'How can I contact support?',
          answer: 'You can reach our support team at support@example.com.'
        },
        {
          question: 'How can I contact support?',
          answer: 'You can reach our support team at support@example.com.'
        },
        // nitex can add more faq items here
      ];
  return (
    <section id="Faq" className="bg-gray-200 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Faq;
