import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  to?: string;
  onClick?: () => void;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigateHome?: () => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, onNavigateHome }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 text-xs sm:text-sm text-gray-500 font-medium">
      <ol className="flex items-center flex-wrap gap-2">
        <li className="flex items-center">
          {onNavigateHome ? (
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-1.5 hover:text-[#007BFF] transition-colors cursor-pointer text-gray-600"
            >
              <Home className="w-3.5 h-3.5 text-gray-400" />
              <span>Home</span>
            </button>
          ) : (
            <Link
              to="/"
              className="flex items-center gap-1.5 hover:text-[#007BFF] transition-colors cursor-pointer text-gray-600"
            >
              <Home className="w-3.5 h-3.5 text-gray-400" />
              <span>Home</span>
            </Link>
          )}
        </li>

        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <ChevronRight className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
            {item.active ? (
              <span className="text-[#151616] font-semibold truncate max-w-[200px] sm:max-w-md">
                {item.label}
              </span>
            ) : item.to ? (
              <Link
                to={item.to}
                className="hover:text-[#007BFF] transition-colors cursor-pointer text-gray-600 truncate max-w-[150px] sm:max-w-xs"
              >
                {item.label}
              </Link>
            ) : item.onClick ? (
              <button
                onClick={item.onClick}
                className="hover:text-[#007BFF] transition-colors cursor-pointer text-gray-600 truncate max-w-[150px] sm:max-w-xs"
              >
                {item.label}
              </button>
            ) : item.href ? (
              <Link
                to={item.href}
                className="hover:text-[#007BFF] transition-colors cursor-pointer text-gray-600 truncate max-w-[150px] sm:max-w-xs"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
