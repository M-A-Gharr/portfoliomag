import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

type TestimonialType = {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

const TestimonialsCarousel = () => {
  const { t } = useTranslation();
  const isRTL = i18next.language === 'ar';

  const testimonials: TestimonialType[] = [
    {
      id: 1,
      quote: t('bonus.testimonialsData.0.quote'),
      name: t('bonus.testimonialsData.0.author'),
      role: t('bonus.testimonialsData.0.role'),
      avatar: 'images/profile/profile.svg',
    },
    {
      id: 2,
      quote: t('bonus.testimonialsData.1.quote'),
      name: t('bonus.testimonialsData.1.author'),
      role: t('bonus.testimonialsData.1.role'),
      avatar: 'images/profile/profile.svg',
    },
    {
      id: 3,
      quote: t('bonus.testimonialsData.2.quote'),
      name: t('bonus.testimonialsData.2.author'),
      role: t('bonus.testimonialsData.2.role'),
      avatar: 'images/profile/profile.svg',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const previous = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <div className="w-full px-2">
      {isMobile ? (
        <div
          className={`flex overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth ${
            isRTL ? 'flex-row-reverse' : ''
          }`}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-full snap-center"
            >
              <div className="bg-card border rounded-xl p-6 shadow-md h-auto max-h-[400px] overflow-y-auto flex flex-col justify-between">
                <div className="overflow-y-auto mb-4 pr-1">
                  <p className="italic mb-4 text-base break-words break-all max-w-full">{testimonial.quote}</p>
                </div>
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-card border rounded-xl p-6 shadow-md flex flex-col justify-between">
            <p className="italic mb-4 text-base">{testimonials[current].quote}</p>
            <div className="flex items-center gap-3 mt-auto justify-center">
              <img
                src={testimonials[current].avatar}
                alt={testimonials[current].name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">{testimonials[current].name}</p>
                <p className="text-muted-foreground text-sm">{testimonials[current].role}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4 gap-4">
            <button onClick={previous} className="p-2 bg-muted rounded-full hover:bg-muted-foreground transition-all">
              ←
            </button>
            <button onClick={next} className="p-2 bg-muted rounded-full hover:bg-muted-foreground transition-all">
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsCarousel;
