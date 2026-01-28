import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="text-blue-500" size={24} />,
    title: "Email Address",
    details: "contact@skillforge.com",
    link: "mailto:contact@skillforge.com",
    subtitle: "For enrollment & course queries",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: <Phone className="text-green-500" size={24} />,
    title: "Phone / WhatsApp",
    details: "+91 98765 43210",
    link: "https://wa.me/919876543210",
    subtitle: "Quick response on WhatsApp",
    color: "from-green-400 to-green-600",
  },
  {
    icon: <MapPin className="text-purple-500" size={24} />,
    title: "Training Location",
    details: "Online Sessions Only",
    link: "#",
    subtitle: "Weekend live interactive sessions",
    color: "from-purple-400 to-purple-600",
  },
];

function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Contact & Enrollment Support
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Have questions about our courses or want to enroll? Reach out, and we’ll guide you step by step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info Cards */}
          <div className="space-y-8">
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.link}
                target={info.link.includes("http") ? "_blank" : "_self"}
                rel={info.link.includes("http") ? "noopener noreferrer" : ""}
                className="block"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} bg-opacity-10`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg mb-1">{info.title}</h3>
                      <p className="text-slate-900 font-semibold mb-1">{info.details}</p>
                      <p className="text-slate-500 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}

            {/* Enrollment Benefits */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={24} />
                Why Enroll?
              </h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Industry-recognized certificate</li>
                <li>• Lifetime access to course materials</li>
                <li>• Placement assistance & resume review</li>
                <li>• 1-on-1 mentorship sessions</li>
                <li>• 5+ hands-on real projects</li>
                <li>• Weekend-only flexible schedule</li>
              </ul>
            </div>
          </div>

          {/* Google Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Enroll / Contact Form
            </h2>
            <div className="w-full overflow-hidden rounded-xl">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScNjbpDG3uslw8fx3BmtoriwqUlypfF1waARJon9HWITCPDUA/viewform?embedded=true"
                className="w-full h-[1200px] md:h-[1333px]"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading…
              </iframe>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              We usually respond within 24 hours on working days.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
