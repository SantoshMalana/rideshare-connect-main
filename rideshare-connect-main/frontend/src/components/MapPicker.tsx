'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function LocationMarker({ position, setPosition }: { position: [number, number] | null, setPosition: (pos: [number, number]) => void }) {
    useMapEvents({
        click(e) {
            setPosition([e.latlng.lat, e.latlng.lng]);
        },
    });

    return position === null ? null : (
        <Marker position={position}></Marker>
    );
}

interface MapPickerProps {
    label: string;
    onLocationSelect: (lat: number, lng: number) => void;
    defaultPosition?: [number, number];
}

export default function MapPicker({ label, onLocationSelect, defaultPosition }: MapPickerProps) {
    const [position, setPosition] = useState<[number, number] | null>(defaultPosition || null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSetPosition = (pos: [number, number]) => {
        setPosition(pos);
        onLocationSelect(pos[0], pos[1]);
    };

    if (!isMounted) return <div className="h-[200px] w-full bg-slate-100 animate-pulse rounded-lg flex items-center justify-center text-slate-400">Loading Map...</div>;

    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <div className="h-[200px] w-full rounded-lg overflow-hidden border-2 border-slate-200 z-0 relative">
                <MapContainer
                    center={position || [20.5937, 78.9629]} // Default to India center
                    zoom={5}
                    scrollWheelZoom={true}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker position={position} setPosition={handleSetPosition} />
                </MapContainer>
            </div>
            {position && (
                <p className="text-xs text-blue-600 font-medium">
                    Selected: {position[0].toFixed(4)}, {position[1].toFixed(4)}
                </p>
            )}
        </div>
    );
}
