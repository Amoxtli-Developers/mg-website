// components/sections/PortfolioSection.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { MapPin } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import type { Property } from '@/types/property'

interface PortfolioSectionProps {
    properties: Property[]
}

export default function PortfolioSection({ properties }: PortfolioSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

    const filterTypes = ['Todos', 'Renta', 'Venta'] as const
    const [activeFilter, setActiveFilter] = useState<typeof filterTypes[number]>('Todos')
    const [filtered, setFiltered] = useState<Property[]>(properties)

    useEffect(() => {
        setFiltered(
            activeFilter === 'Todos'
                ? properties
                : properties.filter((p) => p.type === activeFilter)
        )
    }, [activeFilter, properties])

    const paginationRef = useRef<HTMLDivElement>(null)

    return (
        <section id="portfolio" className="section-padding bg-gray-50" ref={sectionRef}>
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Nuestras Propiedades
                </motion.h2>
                <p className="max-w-2xl mx-auto text-gray-600 mb-6">
                    Descubre nuestra selección de propiedades exclusivas…
                </p>

                {/* <div className="flex justify-center gap-4 mb-10">
                    {filterTypes.map((type) => (
                        <button
                            key={type}
                            onClick={() => setActiveFilter(type)}
                            className={`px-6 py-2 rounded-full transition ${activeFilter === type
                                    ? 'bg-brand-primary text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div> */}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="px-4 mx-auto relative max-w-[90%] xl:max-w-[80%]"
            >
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true, el: '.portfolio-pagination', type: 'bullets' }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="portfolio-swiper h-[580px]"
                >
                    {filtered.map((prop) => (
                        <SwiperSlide key={prop._id} className="h-full">
                            <div className="flex flex-col h-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                                {/* Imagen o placeholder */}
                                <div className="relative w-full h-64 bg-gray-200">
                                    <Image
                                        src={prop.image ?? 'https://via.placeholder.com/600x400?text=Sin+imagen'}
                                        alt={prop.name}
                                        fill
                                        className="object-cover"
                                    />
                                    {prop.type && (
                                        <div className="absolute top-4 right-4 bg-brand-primary text-white px-3 py-1 rounded-full text-sm">
                                            {prop.type}
                                        </div>
                                    )}
                                </div>

                                {/* Contenido */}
                                <div className="p-6 flex-1 flex flex-col">
                                    {/* Nombre */}
                                    <h3 className="text-xl font-semibold mb-2">{prop.name}</h3>

                                    {/* Descripción */}
                                    <p className="text-gray-600 mb-4 line-clamp-3">{prop.description}</p>

                                    {/* Superficie */}
                                    <div className="flex items-center mb-4">
                                        <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                                        <span className="text-gray-600">{prop.surface}</span>
                                    </div>

                                    {/* Amenidades */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {prop.amenities.map((a, i) => (
                                            <span
                                                key={i}
                                                className="bg-muted px-2 py-1 rounded-md text-sm text-gray-700"
                                            >
                                                {a}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Notes */}
                                    {prop.notes && (
                                        <p className="text-gray-500 mb-6 italic">
                                            {prop.notes}
                                        </p>
                                    )}

                                    {/* Precio */}
                                    <div className="mt-auto flex flex-col gap-2">
                                        {prop.rentPrice > 0 && (
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-sm font-medium text-gray-500">Renta:</span>
                                                <span className="text-3xl font-bold text-brand-primary">
                                                    {prop.rentPrice.toLocaleString('es-MX', {
                                                        style: 'currency',
                                                        currency: 'MXN',
                                                        minimumFractionDigits: 0,
                                                    })}
                                                </span>
                                            </div>
                                        )}
                                        {prop.salePrice > 0 && (
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-sm font-medium text-gray-500">Venta:</span>
                                                <span className="text-3xl font-bold text-brand-primary">
                                                    {prop.salePrice.toLocaleString('es-MX', {
                                                        style: 'currency',
                                                        currency: 'MXN',
                                                        minimumFractionDigits: 0,
                                                    })}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="portfolio-pagination mt-8 flex justify-center" ref={paginationRef} />
            </motion.div>
        </section>
    )
}
