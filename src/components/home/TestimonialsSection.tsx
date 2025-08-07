import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { useTranslation } from 'react-i18next';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
}

export function TestimonialsSection() {
    const { t } = useTranslation();
    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: t('testimonial1Name'),
            role: "Marketing Manager",
            company: "TechStart Inc.",
            content: t('testimonial1Text'),
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            id: 2,
            name: t('testimonial2Name'),
            role: "Freelance Designer",
            company: "Self-employed",
            content: t('testimonial2Text'),
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        },
        {
            id: 3,
            name: t('testimonial3Name'),
            role: "Student",
            company: "State University",
            content: t('testimonial3Text'),
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    ];

    const StarRating = ({ rating }: { rating: number }) => {
        return (
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`text-lg ${star <= rating ? "text-yellow-400" : "text-gray-300"
                            }`}
                    >
                        ⭐
                    </span>
                ))}
            </div>
        );
    };

    return (
        <section className="py-16 bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('testimonialsTitle')}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {t('testimonialsSubtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={testimonial.id}
                            className="h-full hover:shadow-lg transition-shadow duration-300"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <CardBody className="p-6">
                                <div className="flex items-center mb-4">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {testimonial.role} at {testimonial.company}
                                        </p>
                                    </div>
                                </div>

                                <StarRating rating={testimonial.rating} />

                                <blockquote className="mt-4 text-gray-700 dark:text-gray-300 italic">
                                    "{testimonial.content}"
                                </blockquote>
                            </CardBody>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <div className="inline-flex items-center gap-4 bg-green-50 dark:bg-green-900/20 px-6 py-4 rounded-lg">
                        <div className="text-green-600 dark:text-green-400">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">
                                4.9/5 {t('averageRating')}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                                {t('basedOnReviews', { count: 2847 })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
