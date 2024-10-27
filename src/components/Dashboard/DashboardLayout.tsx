import React from 'react';
import { Home, Leaf, ShoppingBasket, Flower2, Users, Settings } from 'lucide-react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const sidebarItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Leaf, label: 'Mis Semillas', href: '/dashboard/seeds' },
  { icon: ShoppingBasket, label: 'Mi Producción', href: '/dashboard/produce' },
  { icon: Flower2, label: 'Mi Huerta', href: '/dashboard/garden' },
  { icon: Users, label: 'Comunidad', href: '/dashboard/community' },
  { icon: Settings, label: 'Configuración', href: '/dashboard/settings' },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar items={sidebarItems} />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}