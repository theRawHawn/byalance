import React from 'react';

interface ServiceBackgroundDoodleProps {
  service: 'accounting' | 'gst' | 'itr' | 'payroll' | 'tds' | 'eor';
}

export const ServiceBackgroundDoodle: React.FC<ServiceBackgroundDoodleProps> = ({ service }) => {
  // Render specific SVG shapes for each service as floating ambient background elements
  switch (service) {
    case 'accounting':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
          {/* Top-Right Ambient Ledger / Calculator Grid */}
          <div className="absolute right-0 top-10 w-96 h-96 opacity-[0.03] md:opacity-[0.05] transform translate-x-12 -translate-y-12">
            <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-900 w-full h-full">
              <rect x="10" y="10" width="180" height="180" rx="10" strokeDasharray="5 5" />
              <line x1="10" y1="50" x2="190" y2="50" />
              <line x1="10" y1="90" x2="190" y2="90" />
              <line x1="10" y1="130" x2="190" y2="130" />
              <line x1="70" y1="10" x2="70" y2="190" />
              <line x1="130" y1="10" x2="130" y2="190" />
              {/* Little accounting icons inside cells */}
              <circle cx="40" cy="30" r="10" />
              <path d="M 100 25 L 100 35 M 95 30 L 105 30" />
              <circle cx="160" cy="70" r="8" />
              <rect x="30" y="105" width="20" height="10" rx="2" />
              <path d="M 150 110 L 170 110" />
            </svg>
          </div>
          {/* Bottom-Left Ambient Scale / Ledger Elements */}
          <div className="absolute left-0 bottom-10 w-80 h-80 opacity-[0.03] md:opacity-[0.04] transform -translate-x-12 translate-y-12">
            <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-900 w-full h-full">
              {/* Balance scale */}
              <line x1="100" y1="40" x2="100" y2="160" strokeWidth="2" />
              <line x1="50" y1="60" x2="150" y2="60" strokeWidth="3" />
              <line x1="50" y1="60" x2="30" y2="120" />
              <line x1="50" y1="60" x2="70" y2="120" />
              <line x1="150" y1="60" x2="130" y2="120" />
              <line x1="150" y1="60" x2="170" y2="120" />
              <path d="M 25 120 Q 50 130 75 120 Z" fill="currentColor" opacity="0.2" />
              <path d="M 125 120 Q 150 130 175 120 Z" fill="currentColor" opacity="0.2" />
              <rect x="70" y="150" width="60" height="10" rx="2" fill="currentColor" opacity="0.3" />
            </svg>
          </div>
        </div>
      );

    case 'gst':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
          {/* Huge decorative % tax sign and invoice outline */}
          <div className="absolute right-4 top-4 w-96 h-96 opacity-[0.04] md:opacity-[0.06] transform translate-x-16 -translate-y-8">
            <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-blue-900 w-full h-full">
              {/* Large Percent Symbol */}
              <circle cx="65" cy="65" r="25" strokeWidth="3" />
              <line x1="150" y1="50" x2="50" y2="150" strokeWidth="4" />
              <circle cx="135" cy="135" r="25" strokeWidth="3" />
              {/* Grid decorative backdrop */}
              <path d="M 20 20 L 180 20 M 20 180 L 180 180" strokeDasharray="3 3" />
            </svg>
          </div>
          <div className="absolute left-8 bottom-4 w-72 h-72 opacity-[0.03] md:opacity-[0.05] transform -translate-x-12 translate-y-12">
            <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-900 w-full h-full">
              {/* Document/Invoice flow */}
              <rect x="40" y="20" width="120" height="160" rx="8" />
              <line x1="60" y1="50" x2="140" y2="50" strokeWidth="2" />
              <line x1="60" y1="80" x2="110" y2="80" />
              <line x1="60" y1="100" x2="130" y2="100" />
              <line x1="60" y1="120" x2="90" y2="120" />
              {/* Input Tax Credit (ITC) arrows */}
              <path d="M 140 140 L 160 160 L 140 180" strokeWidth="2" />
              <circle cx="160" cy="160" r="10" strokeWidth="1.5" strokeDasharray="2 2" />
            </svg>
          </div>
        </div>
      );

    case 'itr':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
          {/* Calendar, shield, and refund piggy bank */}
          <div className="absolute right-2 top-8 w-96 h-96 opacity-[0.03] md:opacity-[0.05] transform translate-x-16 -translate-y-12">
            <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-blue-900 w-full h-full">
              {/* Shield protecting tax files */}
              <path d="M 100 30 Q 150 30 160 70 Q 160 130 100 170 Q 40 130 40 70 Q 50 30 100 30 Z" strokeWidth="2" />
              <path d="M 100 50 L 100 150 M 70 90 L 130 90" strokeDasharray="4 4" />
              {/* Indian Rupee icon inside shield */}
              <path d="M 85 70 L 115 70 M 85 80 L 115 80 M 92 70 Q 115 80 92 105 L 115 130" strokeWidth="2.5" />
            </svg>
          </div>
          <div className="absolute left-4 bottom-12 w-80 h-80 opacity-[0.03] md:opacity-[0.04] transform -translate-x-16">
            <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-900 w-full h-full">
              {/* Calendar & Clock for Tax Deadlines */}
              <rect x="40" y="40" width="120" height="120" rx="12" />
              <line x1="40" y1="80" x2="160" y2="80" strokeWidth="2" />
              <line x1="80" y1="25" x2="80" y2="45" strokeWidth="3" />
              <line x1="120" y1="25" x2="120" y2="45" strokeWidth="3" />
              {/* Calendar Days */}
              <rect x="60" y="100" width="15" height="15" rx="2" fill="currentColor" opacity="0.3" />
              <rect x="92" y="100" width="15" height="15" rx="2" />
              <rect x="125" y="100" width="15" height="15" rx="2" />
              <rect x="60" y="125" width="15" height="15" rx="2" />
              <rect x="92" y="125" width="15" height="15" rx="2" fill="currentColor" opacity="0.5" />
              <rect x="125" y="125" width="15" height="15" rx="2" />
            </svg>
          </div>
        </div>
      );

    case 'payroll':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
          {/* Organization charts, calendars, salaries clock */}
          <div className="absolute right-4 top-12 w-96 h-96 opacity-[0.03] md:opacity-[0.05] transform translate-x-16 -translate-y-8">
            <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-blue-900 w-full h-full">
              {/* Rotating Gears representing process */}
              <circle cx="80" cy="80" r="30" strokeWidth="2" strokeDasharray="6 3" />
              <circle cx="80" cy="80" r="15" />
              <circle cx="140" cy="130" r="24" strokeWidth="2" strokeDasharray="5 3" />
              <circle cx="140" cy="130" r="10" />
              {/* Dynamic Connecting Lines */}
              <line x1="105" y1="100" x2="120" y2="112" strokeDasharray="2 2" />
            </svg>
          </div>
          <div className="absolute left-6 bottom-4 w-80 h-80 opacity-[0.03] md:opacity-[0.04] transform -translate-x-12 translate-y-12">
            <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-900 w-full h-full">
              {/* People interconnected via payments */}
              <circle cx="100" cy="50" r="15" />
              <circle cx="50" cy="130" r="12" />
              <circle cx="150" cy="130" r="12" />
              <path d="M 100 65 L 100 110 M 100 110 L 50 130 M 100 110 L 150 130" strokeDasharray="3 3" />
              {/* Paycheck/rupee badge */}
              <rect x="85" y="100" width="30" height="15" rx="3" fill="currentColor" opacity="0.2" />
              <text x="100" y="111" fontSize="10" fill="currentColor" textAnchor="middle" fontWeight="bold">₹</text>
            </svg>
          </div>
        </div>
      );

    case 'tds':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
          {/* Percentages with arrows pointing down, certificates */}
          <div className="absolute right-2 top-8 w-96 h-96 opacity-[0.03] md:opacity-[0.05] transform translate-x-16 -translate-y-12">
            <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-blue-900 w-full h-full">
              {/* Certificate/Challan 281 layout */}
              <rect x="40" y="30" width="120" height="140" rx="6" />
              <rect x="50" y="45" width="100" height="15" rx="2" fill="currentColor" opacity="0.1" />
              <line x1="50" y1="80" x2="150" y2="80" />
              <line x1="50" y1="100" x2="150" y2="100" />
              <line x1="50" y1="120" x2="110" y2="120" />
              {/* Verified seal */}
              <circle cx="130" cy="135" r="15" strokeWidth="2" strokeDasharray="4 2" />
              <path d="M 124 135 L 128 139 L 137 131" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute left-4 bottom-8 w-72 h-72 opacity-[0.03] md:opacity-[0.04] transform -translate-x-16 translate-y-8">
            <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-900 w-full h-full">
              {/* Withholding arrow with tax deductions */}
              <path d="M 100 20 L 100 160 M 100 160 L 70 130 M 100 160 L 130 130" strokeWidth="2.5" />
              <circle cx="60" cy="60" r="18" />
              <text x="60" y="65" fontSize="14" fill="currentColor" textAnchor="middle" fontWeight="black">%</text>
              <circle cx="140" cy="90" r="18" strokeDasharray="3 3" />
              <text x="140" y="95" fontSize="12" fill="currentColor" textAnchor="middle" fontWeight="bold">₹</text>
            </svg>
          </div>
        </div>
      );

    case 'eor':
      return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
          {/* Global network, briefcase, handshakes */}
          <div className="absolute right-4 top-10 w-96 h-96 opacity-[0.03] md:opacity-[0.05] transform translate-x-12 -translate-y-8">
            <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-900 w-full h-full">
              {/* Dotted globe network representing international hiring */}
              <circle cx="100" cy="100" r="80" strokeWidth="1.5" />
              <path d="M 20 100 Q 100 40 180 100 Q 100 160 20 100 Z" />
              <path d="M 100 20 Q 40 100 100 180 Q 160 100 100 20 Z" strokeWidth="1.2" />
              <line x1="20" y1="100" x2="180" y2="100" />
              <line x1="100" y1="20" x2="100" y2="180" />
              {/* Nodes on the globe */}
              <circle cx="100" cy="20" r="5" fill="currentColor" />
              <circle cx="100" cy="180" r="5" fill="currentColor" />
              <circle cx="20" cy="100" r="5" fill="currentColor" />
              <circle cx="180" cy="100" r="5" fill="currentColor" />
              <circle cx="50" cy="65" r="4" fill="currentColor" />
              <circle cx="150" cy="135" r="4" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute left-6 bottom-10 w-80 h-80 opacity-[0.03] md:opacity-[0.04] transform -translate-x-16 translate-y-12">
            <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-900 w-full h-full">
              {/* Passport and briefcase icon representing legal presence */}
              <rect x="50" y="50" width="100" height="80" rx="8" strokeWidth="2" />
              <path d="M 80 50 Q 100 30 120 50" strokeWidth="2" />
              <line x1="50" y1="90" x2="150" y2="90" />
              <rect x="90" y="85" width="20" height="12" rx="2" fill="currentColor" opacity="0.3" />
              {/* Compliance checklist tag */}
              <rect x="110" y="110" width="50" height="40" rx="4" fill="#FFFFFF" stroke="currentColor" strokeWidth="1" />
              <path d="M 120 125 L 125 130 L 135 120" strokeWidth="1.5" />
              <path d="M 120 137 L 125 142 L 135 132" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      );

    default:
      return null;
  }
};
