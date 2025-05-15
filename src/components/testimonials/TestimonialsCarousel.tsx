import { useState } from 'react';
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
      quote: t(`bonus.testimonialsData.0.quote`),
      name: t(`bonus.testimonialsData.0.author`),
      role: t(`bonus.testimonialsData.0.role`),
      avatar: 'https://i.pravatar.cc/150?img=26',
    },
    {
      id: 2,
      quote: t(`bonus.testimonialsData.1.quote`),
      name: t(`bonus.testimonialsData.1.author`),
      role: t(`bonus.testimonialsData.1.role`),
      avatar: 'https://i.pravatar.cc/150?img=53',
    },
    {
      id: 3,
      quote: t(`bonus.testimonialsData.2.quote`),
      name: t(`bonus.testimonialsData.2.author`),
      role: t(`bonus.testimonialsData.2.role`),
      avatar: 'https://i.pravatar.cc/150?img=32',
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const testimonial = testimonials[current];

  return (
    <div className="w-full px-4 text-center">
      <div className="max-w-xl mx-auto">
        <div className="bg-card border rounded-xl p-6 shadow-md flex flex-col justify-between">
          <p className="italic mb-4 text-base">{testimonial.quote}</p>
          <div className="flex items-center gap-3 mt-auto justify-center">
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
        <div className="flex justify-center mt-4 gap-4">
          <button onClick={previous} className="p-2 bg-muted rounded-full hover:bg-muted-foreground transition-all">
            ←
          </button>
          <button onClick={next} className="p-2 bg-muted rounded-full hover:bg-muted-foreground transition-all">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
