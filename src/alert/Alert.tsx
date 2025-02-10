import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
    type: AlertType; 
    title?: string; 
    description?: React.ReactNode; 
    variant?: 'default' | 'subtle'; 
    icon?: React.ReactNode; 
    onClose?: () => void; 
    children?: React.ReactNode; 
  }

export const Alert: React.FC<AlertProps> = ({
  type,
  title,
  description,
  variant = 'default',
  icon,
  onClose,
}) => {
  const alertStyles = {
    base: 'rounded-md p-4 shadow-sm',
    variants: {
      default: 'border border-gray-300 bg-gray-50 text-gray-800',
      subtle: 'border border-transparent bg-gray-100 text-gray-700',
    },
    types: {
      success: 'border-green-400 bg-green-50 text-green-800',
      error: 'border-red-400 bg-red-50 text-red-800',
      warning: 'border-yellow-400 bg-yellow-50 text-yellow-800',
      info: 'border-blue-400 bg-blue-50 text-blue-800',
    },
  };

  return (
    <div
      role="alert"
      className={cn(
        alertStyles.base,
        alertStyles.variants[variant],
        alertStyles.types[type]
      )}
    >
      <div className="flex items-center">
        {icon && <div className="mr-2">{icon}</div>}
        <div>
          {title && <p className="font-medium">{title}</p>}
          {description && <p className="text-sm">{description}</p>}
        </div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-auto flex h-6 w-6 items-center justify-center rounded-full transition hover:bg-gray-200 focus:outline-none"
          aria-label="Close alert"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};