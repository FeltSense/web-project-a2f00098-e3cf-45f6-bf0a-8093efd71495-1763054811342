import { Check, Zap } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Advanced analytics dashboard',
    'Unlimited team members',
    'Priority 24/7 support',
    'Custom integrations',
    'Enterprise-grade security',
    'Dedicated account manager',
    'Monthly strategy sessions',
    'API access',
  ];

  const trustIndicators = [
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
    { value: '500+', label: 'Happy Clients' },
    { value: 'SOC 2', label: 'Certified' },
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to transform your business at one straightforward price.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-blue-600 relative">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-bl-2xl font-semibold flex items-center gap-2">
              <Zap size={16} className="fill-yellow-300 text-yellow-300" />
              Most Popular
            </div>

            <div className="p-12">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Plan</h3>
                <div className="flex items-end justify-center gap-2 mb-2">
                  <span className="text-6xl font-bold text-gray-900">$29</span>
                  <span className="text-2xl text-gray-600 mb-2">/month</span>
                </div>
                <p className="text-gray-600">Billed monthly, cancel anytime</p>
              </div>

              <div className="mb-10">
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="text-blue-600" size={16} />
                      </div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                className="block w-full py-4 bg-blue-600 text-white text-center text-lg font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Now
              </a>

              <p className="text-center text-gray-500 mt-6 text-sm">
                🔒 Secure payment powered by Stripe • Cancel anytime
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustIndicators.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{item.value}</div>
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-green-50 border-2 border-green-200 rounded-full px-8 py-4">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              ✓
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900">30-Day Money-Back Guarantee</div>
              <div className="text-gray-600">Not satisfied? Get a full refund, no questions asked.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}