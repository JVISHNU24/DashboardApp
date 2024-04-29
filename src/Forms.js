import React, { useState } from "react";
const Forms = ({ isOpen }) => {
  const generateRandomFormData = () => {
    const forms = [];
    for (let i = 1; i <= 4; i++) {
      const form = {
        id: i,
        title: `Form ${i}`,
        questions: [
          { id: 1, question: "Question 1?" },
          { id: 2, question: "Question 2?" },
          { id: 3, question: "Question 3?" },
        ],
      };
      forms.push(form);
    }
    return forms;
  };
  const [formData] = useState(generateRandomFormData());
  return (
    <div
      className={`container mx-auto px-4 py-8 ${
        isOpen ? "ml-64 w-4/5" : "" 
      }`}
    >
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">Forms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {formData.map((form) => (
          <div
            key={form.id}
            className="bg-white rounded-lg shadow-lg p-6 border border-gray-200"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              {form.title}
            </h2>
            <p className="text-gray-700 mb-4">{form.description}</p>
            <ul>
              {form.questions.map((question) => (
                <li key={question.id} className="text-gray-600">
                  {question.question}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Forms;
