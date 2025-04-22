"use client";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import Logo from "./Logo";
import { MapPin, Mail, Phone } from "lucide-react";
import { usePrivacyPolicy } from "@/context/PrivacyPolicyContext";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { openPrivacyPolicy } = usePrivacyPolicy();

    return (
        <footer className="bg-black text-white">
            <div className="container py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
                    {/* Logo and description */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-1">
                        <div className="mb-4">
                            <Logo variant="light" />
                        </div>
                        <p className="mb-4">
                            MG Servicio Inmobiliario, empresa especializada en
                            propiedades inmobiliarias con más de 40 años de
                            experiencia en el mercado.
                        </p>
                        <div className="mt-6">
                            <SocialLinks />
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#about"
                                    className="hover:text-brand-primary transition"
                                >
                                    Quiénes Somos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#services"
                                    className="hover:text-brand-primary transition"
                                >
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#portfolio"
                                    className="hover:text-brand-primary transition"
                                >
                                    Propiedades
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#testimonials"
                                    className="hover:text-brand-primary transition"
                                >
                                    Testimonios
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#contact"
                                    className="hover:text-brand-primary transition"
                                >
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mt-0.5 mr-2" />
                                <span>
                                    Av. Coyoacán 1435, Centro Urbano Presidente
                                    Alemán, Edificio H, Despacho 60-B, Col. Del
                                    Valle, C.P. 03100, CDMX
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-2" />
                                <a
                                    href="mailto:contacto@mgsi.mx"
                                    className="hover:text-brand-primary transition"
                                >
                                    contacto@mgsi.mx
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-2" />
                                <span>
                                    55-34-24-93 / 55-34-59-44 / 55-24-87-80
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Suscríbete
                        </h3>
                        <p className="mb-4">
                            Recibe nuestras novedades y ofertas exclusivas.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Tu email"
                                className="px-3 py-2 text-gray-900 bg-white rounded-l-md focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-brand-primary px-4 py-2 text-white rounded-r-md hover:opacity-90 transition"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>

                <hr className="border-gray-700 my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center text-[12px]">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                      <p>
                        &copy; {currentYear} MG Servicio Inmobiliario. Todos
                        los derechos reservados.
                      </p>
                      <p>
                        Desarrollado por{" "}
                        <a
                          href="https://www.amoxtli.tech"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-brand-primary transition"
                        >
                          Amoxtli Web Developers
                        </a>
                      </p>
                    </div>
                    <div className="flex space-x-4">
                        <button
                            onClick={openPrivacyPolicy}
                            className="hover:text-brand-primary transition cursor-pointer"
                        >
                            Política de Privacidad
                        </button>
                        <Link
                            href="#contact"
                            className="hover:text-brand-primary transition"
                        >
                            Términos de Servicio
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
