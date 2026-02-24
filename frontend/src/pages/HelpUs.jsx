import React from "react";
import { AlertCircle, Clock, ShieldCheck, UserCheck, MessageSquare } from "lucide-react";
import { Card, CardContent } from '../components/ui/Card';

const HelpUs = () => {
  const guidelines = [
    {
      icon: UserCheck,
      title: "Login to Your Account",
      description: "Enter your assigned staff email and temporary password provided by the administrator. Make sure your credentials are entered correctly before submitting."
    },
    {
      icon: ShieldCheck,
      title: "Change Temporary Password",
      description: "After your first login, immediately update your temporary password to a secure personal password to protect your account."
    },
    {
      icon: Clock,
      title: "Dashboard Overview",
      description: "Once logged in, you will be redirected to the dashboard where you can view reservations, manage bookings, and access system features based on your role."
    },
    {
      icon: MessageSquare,
      title: "Managing Reservations",
      description: "Use the reservation panel to search, update, confirm payments, or review booking details. Always verify guest information before making changes."
    },
    {
      icon: AlertCircle,
      title: "Logout After Use",
      description: "Always log out of the system after completing your tasks, especially when using shared or public computers."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in px-4">
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-semibold text-surface-900">
          How to Use the System
        </h1>
        <p className="text-base md:text-lg text-surface-600 mt-2">
          A simple guide for new staff members logging into the system.
        </p>
      </div>

      <div className="grid gap-6">
        {guidelines.map((item, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-5 items-start">
              <div className="p-3 bg-primary-50 text-primary-600 rounded-xl shrink-0">
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-surface-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-surface-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Need Technical Assistance?
          </h2>
          <p className="text-base md:text-lg text-primary-100 mb-6">
            Contact the IT department if you experience login issues or system errors.
          </p>
          <button className="px-6 py-3 bg-white text-primary-700 font-semibold rounded-xl shadow-md hover:bg-primary-50 transition-colors">
            Contact IT Support
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpUs;