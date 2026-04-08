'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const demoSchema = z.object({
  name: z.string().min(2, 'Numele trebuie sa aiba minim 2 caractere'),
  email: z.string().email('Adresa de email invalida'),
  phone: z.string().min(9, 'Numar de telefon invalid'),
  businessType: z.string().min(1, 'Selecteaza tipul afacerii'),
  message: z.string().optional(),
});

type DemoFormData = z.infer<typeof demoSchema>;

const businessTypes = [
  'Clinica medicala',
  'Cabinet stomatologic',
  'Salon de frumusete',
  'Service auto',
  'Restaurant / Livrari',
  'Agentie imobiliara',
  'Cabinet juridic',
  'Clinica veterinara',
  'Firma de curatenie',
  'Altele',
];

interface DemoSectionProps {
  headline: string;
  className?: string;
}

function DemoSection({ headline, className }: DemoSectionProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema),
  });

  const onSubmit = async (_data: DemoFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitted(true);
  };

  const inputClasses =
    'w-full bg-bg-secondary border border-border-subtle rounded-xl px-4 py-3 text-text-primary text-sm placeholder:text-text-secondary/50 focus:outline-none focus:border-border-glow focus:shadow-glow transition-all duration-300';

  return (
    <section className={cn('section-padding', className)}>
      <div className="container-site max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl lg:text-4xl font-satoshi font-bold text-text-primary text-center mb-10"
        >
          {headline}
        </motion.h2>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-bg-card border border-accent-primary/20 rounded-2xl p-8 text-center shadow-glow"
            >
              <div className="w-16 h-16 rounded-full bg-accent-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M8 16L14 22L24 10" stroke="#7C3AED" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-satoshi font-bold text-text-primary mb-2">
                Multumim pentru interes!
              </h3>
              <p className="text-text-secondary text-sm">
                Echipa noastra te va contacta in maxim 24 de ore.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-bg-card border border-border-subtle rounded-2xl p-6 lg:p-8 space-y-5"
            >
              <div>
                <input
                  {...register('name')}
                  placeholder="Numele tau"
                  className={inputClasses}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-negative">{errors.name.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Email"
                    className={inputClasses}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-negative">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder="Telefon"
                    className={inputClasses}
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-negative">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <select
                  {...register('businessType')}
                  className={cn(inputClasses, 'appearance-none')}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Tipul afacerii
                  </option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type} className="bg-bg-secondary text-text-primary">
                      {type}
                    </option>
                  ))}
                </select>
                {errors.businessType && (
                  <p className="mt-1.5 text-xs text-negative">{errors.businessType.message}</p>
                )}
              </div>

              <div>
                <textarea
                  {...register('message')}
                  placeholder="Mesaj (optional)"
                  rows={3}
                  className={cn(inputClasses, 'resize-none')}
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Se trimite...' : 'Vreau un demo gratuit'}
              </Button>

              <p className="text-center text-text-secondary text-xs">
                Fara obligatii. Fara spam. Raspundem in max 24h.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export { DemoSection };
export type { DemoSectionProps };
