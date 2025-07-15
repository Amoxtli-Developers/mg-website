'use client';

import { useGetPropertiesQuery } from '@/store/propertiesApi';
import PortfolioSection from '@/components/sections/PortfolioSection';

export default function ClientPortfolio() {
    const { data: properties = [], isLoading, error } = useGetPropertiesQuery();

    if (isLoading) {
        return (
            <div className="section-padding bg-gray-50 flex items-center justify-center">
                <div
                    className="h-16 w-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"
                    aria-label="Loading spinner"
                />
            </div>
        );
    }

    if (error) {
        return (
            <div className="section-padding bg-gray-50 flex items-center justify-center">
                <p className="text-gray-600">Error al cargar las propiedades</p>
            </div>
        );
    }

    return <PortfolioSection properties={properties} />;
}
