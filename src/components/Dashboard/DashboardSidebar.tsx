import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidebarItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

interface DashboardSidebarProps {
  items: SidebarItem[];
}

export default function DashboardSidebar({ items }: DashboardSidebarProps) {
  return (
    <div className="w-64 bg-white shadow-sm min-h-screen">
      <nav className="mt-5 px-2">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-600 hover:bg-emerald-50 hover:text-emerald-600"
          >
            <item.icon className="mr-4 h-6 w-6" />
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}