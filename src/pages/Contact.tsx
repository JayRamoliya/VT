import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  Building2,
  Truck,
  CheckCircle2,
  FileCheck,
} from "lucide-react";
import { Breadcrumb } from "../components/Breadcrumb";
import { ContactForm } from "../components/ContactForm";
import { useQuote } from "../context/QuoteContext";

interface ContactProps {
  onNavigateHome?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigateHome }) => {
  const { generateWhatsAppLink } = useQuote();
  const navigate = useNavigate();

  const handleHomeClick = () => {
    if (onNavigateHome) onNavigateHome();
    else navigate("/");
  };

  const whatsappUrl = generateWhatsAppLink(
    "Hello VARAIA TRADERS, I would like to discuss a bulk corporate gift requirement for our company.",
  );

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <Breadcrumb
          items={[{ label: "Contact Factory Desk", active: true }]}
          onNavigateHome={handleHomeClick}
        />
      </div>

      {/* Hero Header */}
      <section className="py-12 sm:py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#007BFF] block mb-2">
              Factory Sales & Procurement Assistance
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#151616] tracking-tight">
              Let's Discuss Your Bulk Corporate Gift Requirements
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
              Connect directly with our Rajkot manufacturing team for customized
              sample CAD layouts, direct factory price tiering, and pan-India
              express logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: Contact Info Cards & Quick WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#151616]">
                Rajkot Manufacturing Facility
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-[#007BFF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">
                      Plant & Sales Office:
                    </span>
                    <span className="text-gray-600 leading-relaxed block mt-0.5">
                      303, THIRD FLOOR, "AAKANKSHA COMPLEX", 11 VIJAY PLOT, OPP BIMAL TYRES, GONDAL ROAD, RAJKOT - 360002 (GUJARAT) INDIA.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-[#007BFF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">
                      Factory Direct Helpline:
                    </span>
                    <a
                      href="tel:+917567999989"
                      className="text-[#007BFF] font-bold block mt-0.5 hover:underline text-sm"
                    >
                      +91 75679 99989
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-[#007BFF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">
                      Email RFQ & Artwork:
                    </span>
                    <a
                      href="mailto:jignesh@varaiatraders.com"
                      className="text-gray-700 hover:text-[#007BFF] block mt-0.5 font-medium"
                    >
                      jignesh@varaiatraders.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-red-50 text-[#007BFF] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">
                      Working Hours:
                    </span>
                    <span className="text-gray-600 block mt-0.5">
                      Monday to Saturday: 9:00 AM – 8:00 PM IST
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Priority Button */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Chat Now</span>
                </a>
              </div>
            </div>

            {/* Statutory Compliance & Credentials */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-[#151616]">
                  UDYAM & GST Registered Unit
                </span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-14 pt-10 border-t border-gray-200">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#007BFF] block mb-1">
              Office Location
            </span>
            <h4 className="text-2xl font-bold text-[#151616]">
              Visit Varaia Traders, Rajkot
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Find us easily on Google Maps. Visit our office and manufacturing
              facility for product discussions, samples, and bulk order
              requirements.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.783776243075!2d70.79703851092366!3d22.286809243299462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395835b6de289a75%3A0xaed77fd3a318bb99!2sVaraia%20Traders!5e1!3m2!1sen!2sin!4v1787971284161!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Varaia Traders Location"
              className="w-full"
            />
          </div>

          <div className="mt-4 flex justify-end">
            <a
              href="https://maps.google.com/?q=Varaia+Traders+Rajkot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#151616] hover:bg-[#007BFF] text-white px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
