import { Truck, ShieldCheck, RefreshCw, Headphones } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      id: 1,
      icon: <Truck size={24} className="text-brand-purple stroke-[2.25]" />,
      title: "Free Delivery",
      description: "Free delivery inside Dhaka City"
    },
    {
      id: 2,
      icon: <ShieldCheck size={24} className="text-brand-purple stroke-[2.25]" />,
      title: "Secure Checkout",
      description: "100% encrypted secure payments"
    },
    {
      id: 3,
      icon: <RefreshCw size={24} className="text-brand-purple stroke-[2.25]" />,
      title: "Easy Exchange",
      description: "Simple 7-day swap/return policy"
    },
    {
      id: 4,
      icon: <Headphones size={24} className="text-brand-purple stroke-[2.25]" />,
      title: "Dedicated Support",
      description: "Active customer service desk"
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-sans">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white border border-gray-100 p-6 sm:p-8 rounded-3xl shadow-xs">
        {badges.map((badge) => (
          <div key={badge.id} className="flex items-start gap-4">
            <div className="p-3 bg-brand-yellow/15 rounded-2xl shrink-0">
              {badge.icon}
            </div>
            <div className="flex flex-col">
              <h5 className="text-xs sm:text-sm font-extrabold text-brand-purple tracking-tight">
                {badge.title}
              </h5>
              <p className="text-[10px] sm:text-xs text-gray-500 font-semibold mt-0.5 leading-snug">
                {badge.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
