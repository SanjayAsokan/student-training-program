import { Link } from "react-router-dom";

const highlights = [
  {
    title: "Weekend Classes",
    description: "Flexible weekend sessions for MCA/BCA students to learn without disturbing college.",
    icon: "🕒",
    color: "from-blue-400 to-indigo-400",
  },
  {
    title: "Full Stack Development",
    description: "Learn JavaScript, React, Python, and Java while building hands-on projects.",
    icon: "💻",
    color: "from-green-400 to-teal-500",
  },
  {
    title: "Database & Tools",
    description: "Get practical experience with SQL, Git, VS Code, and version control best practices.",
    icon: "🗄️",
    color: "from-yellow-400 to-orange-400",
  },
  {
    title: "Certificate Program",
    description: "Earn a professional certificate recognized for your skills.",
    icon: "🎓",
    color: "from-purple-400 to-pink-400",
  },
  {
    title: "Career Guidance",
    description: "Mentorship, interview tips, and resume guidance to boost your learning journey.",
    icon: "📈",
    color: "from-rose-400 to-red-400",
  },
];

const timeline = [
  { title: "Week 1-2: JavaScript Basics", description: "Learn variables, loops, functions, DOM manipulation, and ES6 features." },
  { title: "Week 3-4: React Fundamentals", description: "Dive into components, hooks, state management, and routing." },
  { title: "Week 5-6: Python & Java Basics", description: "Learn Python syntax, data structures, and core Java programming concepts." },
  { title: "Week 7: Database & Tools", description: "Hands-on SQL, Git, VS Code, and version control workflows." },
  { title: "Week 8: Final Project & Certification", description: "Build a final project combining JS/React/Python/Java skills and earn your certificate." },
];

const testimonials = [
  { name: "Amit Sharma", role: "BCA Student", feedback: "The program covered JS, React, Python & Java. Very practical and useful for projects!" },
  { name: "Neha Singh", role: "MCA Student", feedback: "Weekend classes and all-round coverage of technologies made learning so easy." },
  { name: "Rohit Kumar", role: "BCA Student", feedback: "Projects and certification gave me confidence for hands-on skills." },
];

const faqs = [
  { question: "Who can join this program?", answer: "Final semester MCA or BCA students with basic programming knowledge can join." },
  { question: "Do I need prior experience in all languages?", answer: "No. We start with basics of JS, Python, and Java, then build projects step by step." },
  { question: "Will I get a certificate?", answer: "Yes! You get a professional certificate after completing the program and projects." },
];

function Home() {
  return (
    <div className="bg-[#FFFDF5] font-sans">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 text-white py-28 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Student <span className="text-yellow-300">Training & Certification</span> Program
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Join our 2-month weekend program for final semester MCA/BCA students. Build hands-on projects and earn a professional certificate.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-yellow-400 text-gray-900 font-bold rounded-xl shadow-lg hover:bg-yellow-300 hover:scale-105 transform transition duration-300 hover:animate-bounce"
          >
            Enroll Now
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-b from-[#FFFDF5] to-[#FFF9E6]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Program Highlights</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="text-5xl mb-4 transition-transform duration-300 hover:scale-125 hover:animate-bounce">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[#FFFDF5]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">8-Week Learning Journey</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 to-purple-400"></div>
            {timeline.map((t, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 mb-4 md:mb-0 md:px-8">
                  <div className="bg-white rounded-2xl shadow-xl p-6 transition transform hover:-translate-y-2 hover:shadow-2xl">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{t.title}</h3>
                    <p className="text-gray-600">{t.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white font-bold text-lg z-10 transition transform hover:scale-110 hover:animate-pulse">
                  {i + 1}
                </div>
                <div className="md:w-1/2 md:px-8"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#FFF9E6]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
            What Our Students Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="relative group">
                {/* Glow Background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-300"></div>
                
                {/* Testimonial Card */}
                <div className="relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300 hover:scale-105 flex flex-col items-center text-center">
                  
                  {/* AI Avatar */}
                  <img
                    src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${t.name}`}
                    alt={t.name}
                    className="w-24 h-24 rounded-full mb-4 border-4 border-white shadow-md"
                  />

                  {/* Quote */}
                  <div className="text-5xl text-gray-300 mb-4">“</div>

                  {/* Feedback */}
                  <p className="text-gray-700 mb-6 italic">{t.feedback}</p>

                  {/* Name and Role */}
                  <h3 className="text-gray-800 font-bold">{t.name}</h3>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#FFFDF5]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-xl transition">
                <summary className="font-semibold text-gray-800">{faq.question}</summary>
                <p className="text-gray-700 mt-2">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Begin Your Learning Journey?</h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join our weekend program and enhance your skills with JS, React, Python, and Java.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-yellow-400 text-gray-900 font-bold rounded-xl shadow-lg hover:bg-yellow-300 hover:scale-105 transform transition duration-300 hover:animate-bounce"
          >
            Enroll Now
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;
