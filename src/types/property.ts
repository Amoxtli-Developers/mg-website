// types/property.ts
export interface Property {
    image: string
    _id: string
    name: string
    surface: string
    description: string
    rentPrice: number
    salePrice: number
    amenities: string[]
    notes: string
    createdAt: string
    updatedAt: string
    // si quieres controlar “type” (Renta/Venta) agrégalo aquí
    type?: 'Renta' | 'Venta'
}
