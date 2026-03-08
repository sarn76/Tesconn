import { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    message: '',
    subscribe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Ready to elevate your facility?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Let TESCONN help you navigate the complexities of healthcare facility management. Reach out to discuss
              your project needs.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:contact@tesconn.com"
                className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contact@tesconn.com</span>
              </a>
              <div className="flex items-center gap-3 text-slate-600">
                <MapPin className="w-5 h-5" />
                <span>Global Headquarters</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1.5">
                    First name
                  </label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1.5">
                    Last name
                  </label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Healthcare Facility / Company
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your organization"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                  How can we help?
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full min-h-[120px]"
                />
              </div>

              <div className="flex items-start gap-3 mb-6">
                <Checkbox
                  id="subscribe"
                  checked={formData.subscribe}
                  onCheckedChange={(checked) => setFormData({ ...formData, subscribe: checked as boolean })}
                />
                <label htmlFor="subscribe" className="text-sm text-slate-600 leading-relaxed cursor-pointer">
                  Subscribe to newsletter
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-lg text-base font-medium transition-all duration-200 hover:scale-[1.02]"
              >
                Send Message
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
