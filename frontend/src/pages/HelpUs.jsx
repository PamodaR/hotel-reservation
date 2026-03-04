import React from "react";
import { AlertCircle, Clock, UserCheck, MessageSquare, Search, FileText } from "lucide-react";
import { Card, CardContent } from '../components/ui/Card';

const HelpUs = () => {
  const guidelines = [
    {
      icon: UserCheck,
      title: "Login to Your Account",
      description: "Navigate to the login page and enter your assigned username and password provided by the administrator. Click the Login button and you will be redirected to the Dashboard automatically after a successful login."
    },
    {
      icon: Clock,
      title: "Dashboard Overview",
      description: "Once logged in, you will be redirected to the Dashboard where you can view key statistics including total bookings, today's arrivals, total revenue, and recent activity."
    },
    {
      icon: MessageSquare,
      title: "How to Make a Booking",
      description: "Navigate to the Booking page from the menu. Complete the four-step booking wizard by entering guest details, selecting a room type and dates, providing payment information, and confirming the booking. The system will automatically generate a reservation number and calculate the total bill."
    },
    {
      icon: Search,
      title: "Find a Reservation",
      description: "Navigate to the Manage Booking section on the Booking page. Enter the guest's reservation number in the search field and click Search to view full reservation details."
    },
    {
      icon: FileText,
      title: "Generate and Export Bill",
      description: "Billing or after finding a reservation, click Generate Bill to view the full bill details. You can then click Export Bill to download the bill for the guest."
    },
    {
      icon: AlertCircle,
      title: "Logout After Use",
      description: "Always log out of the system after completing your tasks, especially when using shared or public computers. Click the Logout button to safely close your session."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 px-4 py-8">

      {/* Header */}
      <div className="border-l-4 border-primary-600 pl-4">
        <h1 className="text-3xl font-semibold text-surface-900">
          How to Use the System
        </h1>
        <p className="text-lg text-surface-500 mt-1">
          A step-by-step guide for new staff members.
        </p>
      </div>

      {/* Steps */}
      <div className="grid gap-4">
        {guidelines.map((item, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow border border-surface-100">
            <CardContent className="p-6 flex gap-5 items-start">
              <div className="p-3 bg-primary-50 text-primary-600 rounded-xl shrink-0">
                <item.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-surface-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-surface-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Support Banner */}
      <Card className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-2">Need Technical Assistance?</h2>
          <p className="text-primary-100 text-base">
            Contact the IT department if you experience login issues or system errors.
          </p>
        </CardContent>
      </Card>

    </div>
  );
};

export default HelpUs;