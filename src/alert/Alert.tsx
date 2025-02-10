import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import './alert.css';

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
    return (
      <div
        role="alert"
        className={cn(
          'alert',
          `alert-${variant}`,
          `alert-${type}`
        )}
      >
        <div className="flex items-center">
          {icon && <div className="alert-icon">{icon}</div>}
          <div>
            {title && <p className="alert-title">{title}</p>}
            {description && <p className="alert-description">{description}</p>}
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="alert-close-button"
            aria-label="Close alert"
          >
            <X size={16} />
          </button>
        )}
      </div>
    );
  };