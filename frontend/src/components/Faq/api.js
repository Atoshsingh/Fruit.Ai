// api.js
export const getFAQs = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/faqs');
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    } catch (error) {
      console.error('Error fetching FAQs:', error);
      return [];
    }
  };
  
  export const createFAQ = async (faq) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/faqs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(faq),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    } catch (error) {
      console.error('Error creating FAQ:', error);
    }
  };
  