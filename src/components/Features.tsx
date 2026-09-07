import React from 'react';
import { ShieldCheck, Truck, RefreshCw, Headphones, CheckCircle } from 'lucide-react';
import { storeConfig } from '../config/store';

export const Features: React.FC = () => {
  return (
    <section className="py-6 border-b border-current/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#18181b] border border-zinc-800 hover:border-yellow-500 shadow-lg hover:shadow-yellow-500/10 p-4 rounded-2xl flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 text-yellow-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold">مطابقة دقيقة للهيكل VIN</h4>
              <p className="text-[11px] opacity-70 mt-0.5">تأكد من توافق القطعة بنسبة 100%</p>
            </div>
          </div>

          <div className="bg-[#18181b] border border-zinc-800 hover:border-yellow-500 shadow-lg hover:shadow-yellow-500/10 p-4 rounded-2xl flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 text-yellow-400">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold">ضمان ميكانيكي وكهربائي</h4>
              <p className="text-[11px] opacity-70 mt-0.5">قطع أصلية وبديل معتمد بجودة عالية</p>
            </div>
          </div>

          <div className="bg-[#18181b] border border-zinc-800 hover:border-yellow-500 shadow-lg hover:shadow-yellow-500/10 p-4 rounded-2xl flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 text-yellow-400">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold">شحن سريع للورش والمدن</h4>
              <p className="text-[11px] opacity-70 mt-0.5">تغليف محكم ضد الصدمات والكسر</p>
            </div>
          </div>

          <div className="bg-[#18181b] border border-zinc-800 hover:border-yellow-500 shadow-lg hover:shadow-yellow-500/10 p-4 rounded-2xl flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 text-yellow-400">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold">استبدال ميسر وفوري</h4>
              <p className="text-[11px] opacity-70 mt-0.5">إرجاع القطع غير المتوافقة بدون تعقيد</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
