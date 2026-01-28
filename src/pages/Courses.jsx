import { useState } from "react";
import { Link } from "react-router-dom";


const modules = [
  {
    icon: "📘",
    title: "Module 1: Programming Fundamentals",
    points: [
      "Introduction to programming",
      "Variables & data types",
      "Conditions & loops",
      "Functions & arrays",
      "Basic problem solving",
    ],
  },
  {
    icon: "📗",
    title: "Module 2: Core Concepts & OOPS",
    points: [
      "Class & object",
      "Constructor",
      "Inheritance",
      "Polymorphism",
      "Encapsulation",
      "Error handling & debugging",
    ],
  },
  {
    icon: "🛠",
    title: "Module 3: Tools & Development Workflow",
    points: [
      "VS Code setup",
      "Git & GitHub",
      "Project folder structure",
      "API basics",
      "Database fundamentals",
    ],
  },
  {
    icon: "💻",
    title: "Module 4: Project Development",
    points: [
      "Project idea & planning",
      "CRUD operations",
      "Backend & database connection",
      "GitHub project hosting",
      "Testing & debugging",
    ],
  },
  {
    icon: "🎯",
    title: "Module 5: Interview Preparation",
    points: [
      "How to explain project",
      "Common interview questions",
      "Resume project section",
      "Career guidance",
    ],
  },
];

const dayWise = [
  {
    day: "Day 1",
    topics: [
      "Course overview",
      "How IT industry works",
      "Choose language",
      "Install tools",
      "First program",
    ],
    tip: '“Don’t worry about speed. Focus on understanding.”',
  },
  { day: "Day 2", topics: ["Variables & data types", "if-else", "loops", "Small coding tasks"] },
  { day: "Day 3", topics: ["Functions", "Arrays / Lists", "Objects", "Logic building"] },
  { day: "Day 4", topics: ["OOPS intro", "Class & object", "Constructor", "Real-life examples"] },
  { day: "Day 5", topics: ["Inheritance", "Polymorphism", "Encapsulation", "Where OOPS is used"] },
  { day: "Day 6", topics: ["Error handling", "Debugging", "Clean coding habits"] },
  { day: "Day 7", topics: ["What is a project?", "Project types", "Folder structure", "Start GitHub"] },
  { day: "Day 8", topics: ["Git commands", "Push project to GitHub", "Explain version control"] },
  { day: "Day 9", topics: ["Database basics", "CRUD operations", "Connect backend to DB"] },
  { day: "Day 10", topics: ["API flow", "Frontend ↔ Backend", "Postman demo"] },
  { day: "Day 11–14", topics: ["Project building", "Feature implementation", "Bug fixing"] },
  { day: "Day 15", topics: ["Project completion", "Testing", "README writing"] },
  { day: "Day 16", topics: ["Interview prep", "Resume guidance", "Mock Q&A"] },
];

function Courses() {
  const [expandedDay, setExpandedDay] = useState(null);

  return (
    <div className="min-h-screen bg-[#faf9f7] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-4">
            Weekend Industry-Oriented <br />
            <span className="text-blue-600">Tech Program</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
            For Final Year MCA / BCA Students – 8 Weeks, Weekends only, 2 Hours per Session
          </p>
        </div>

        {/* Modules Section */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {modules.map((mod, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-4xl mb-4">{mod.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{mod.title}</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                {mod.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Day-Wise Script Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Day-Wise Teaching Script
          </h2>

          <div className="space-y-4">
            {dayWise.map((day, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6 border border-slate-200">
                <button
                  onClick={() => setExpandedDay(expandedDay === i ? null : i)}
                  className="w-full text-left flex justify-between items-center font-semibold text-slate-900 text-lg"
                >
                  <span>{day.day}</span>
                  <span className="text-blue-600">{expandedDay === i ? "−" : "+"}</span>
                </button>

                {expandedDay === i && (
                  <div className="mt-4 text-slate-600">
                    <ul className="list-disc list-inside space-y-1">
                      {day.topics.map((topic, idx) => (
                        <li key={idx}>{topic}</li>
                      ))}
                    </ul>
                    {day.tip && (
                      <p className="mt-2 italic text-blue-600">Tip: {day.tip}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 bg-blue-50 border border-blue-100 rounded-[2.5rem] p-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Start Your Weekend Tech Journey?
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Gain hands-on experience, complete projects, and earn a professional certificate designed for MCA/BCA final-semester students.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center
                       px-12 py-4 rounded-xl
                       bg-blue-600 text-white font-semibold
                       hover:bg-blue-700 transition shadow-md"
          >
            Contact for Enrollment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Courses;
