import { Activity } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-slate-900" />
            <span className="text-lg font-semibold text-slate-900 tracking-tight">TESCONN</span>
          </a>
          <p className="text-sm text-slate-500">© 2023 TESCONN Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
