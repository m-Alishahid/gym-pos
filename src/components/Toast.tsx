"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
}

interface ToastProviderProps {
  children: React.ReactNode;
}

// Global toast state
let toastState: Toast[] = [];
let listeners: ((toasts: Toast[]) => void)[] = [];

const notify = (message: string, type: "success" | "error" | "info" | "warning" = "info") => {
  const id = Math.random().toString(36).substring(7);
  const toast: Toast = { id, message, type };
  toastState = [...toastState, toast];
  listeners.forEach(listener => listener(toastState));
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    removeToast(id);
  }, 3000);
};

const removeToast = (id: string) => {
  toastState = toastState.filter(t => t.id !== id);
  listeners.forEach(listener => listener(toastState));
};

export const toast = {
  success: (message: string) => notify(message, "success"),
  error: (message: string) => notify(message, "error"),
  info: (message: string) => notify(message, "info"),
  warning: (message: string) => notify(message, "warning"),
};

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const listener = (newToasts: Toast[]) => {
      setToasts([...newToasts]);
    };
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);

  return (
    <>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </>
  );
}

function ToastContainer({ 
  toasts, 
  onRemove 
}: { 
  toasts: Toast[]; 
  onRemove: (id: string) => void 
}) {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3 max-w-sm w-full">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  );
}

function ToastItem({ 
  toast, 
  onRemove 
}: { 
  toast: Toast; 
  onRemove: (id: string) => void 
}) {
  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    info: Info,
    warning: AlertTriangle,
  };

  const colors = {
    success: "from-green-500/20 to-green-600/10 border-green-500/30",
    error: "from-red-500/20 to-red-600/10 border-red-500/30",
    info: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
    warning: "from-amber-500/20 to-amber-600/10 border-amber-500/30",
  };

  const iconColors = {
    success: "text-green-500",
    error: "text-red-500",
    info: "text-blue-500",
    warning: "text-amber-500",
  };

  const Icon = icons[toast.type];

  return (
    <div
      className={cn(
        "glass-premium p-4 rounded-2xl border animate-fade-in-up flex items-start gap-3 shadow-lg",
        colors[toast.type]
      )}
    >
      <div className={cn("flex-shrink-0", iconColors[toast.type])}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-grow">
        <p className="text-sm font-medium text-white">{toast.message}</p>
      </div>
      <button
        onClick={() => onRemove(toast.id)}
        className="flex-shrink-0 p-1 hover:bg-white/10 rounded-lg transition-colors"
      >
        <X className="w-4 h-4 text-muted-foreground" />
      </button>
    </div>
  );
}
