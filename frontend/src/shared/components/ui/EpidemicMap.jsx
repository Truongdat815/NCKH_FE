import React, { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

const EpidemicMap = () => {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const [activeLayer, setActiveLayer] = useState('satellite')

  const tileLayers = {
    satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      attribution: '&copy; Esri, Maxar, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, IGP, and the GIS User Community'
    }),
    streets: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }),
    terrain: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }),
    hybrid: L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      attribution: '&copy; Google'
    })
  }

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    const tienGiangCoords = [10.3600, 106.3600]
    const map = L.map(mapRef.current, {
      center: tienGiangCoords,
      zoom: 11,
      zoomControl: false,
      attributionControl: false,
    })

    tileLayers[activeLayer].addTo(map)
    L.control.zoom({ position: 'topright' }).addTo(map)

    const pinkIcon = L.divIcon({
      className: 'custom-pink-marker',
      html: `<div style="width: 48px; height: 48px; background: linear-gradient(135deg, #f472b6, #ec4899, #db2777); border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 20px rgba(236, 72, 153, 0.6); display: flex; align-items: center; justify-content: center; position: relative;"><div style="width: 20px; height: 20px; background: rgba(255, 255, 255, 0.4); border-radius: 50%;"></div><div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(255,255,255,0.4), transparent); border-radius: 50%;"></div></div>`,
      iconSize: [48, 48],
      iconAnchor: [24, 48],
    })

    const redWarningIcon = L.divIcon({
      className: 'custom-red-marker',
      html: `<div style="width: 32px; height: 32px; background: rgba(239, 68, 68, 0.7); border-radius: 50%; border: 2px solid rgba(239, 68, 68, 0.9); backdrop-filter: blur(4px); box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);"></div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
    })

    L.marker(tienGiangCoords, { icon: pinkIcon }).addTo(map).bindPopup('<strong>Tiền Giang - Khu vực giám sát</strong><br>Monitoring Area')

    const warningLocations = [
      [10.3800, 106.3400, 'Cảnh báo: Đạo ôn'],
      [10.3500, 106.3700, 'Cảnh báo: Đạo ôn'],
      [10.3400, 106.3500, 'Cảnh báo: Đạo ôn'],
    ]

    warningLocations.forEach(([lat, lng, message]) => {
      L.marker([lat, lng], { icon: redWarningIcon }).addTo(map).bindPopup(`<strong style="color: red;">${message}</strong>`)
    })

    const style = document.createElement('style')
    style.textContent = `@keyframes pulse { 0%, 100% { transform: scale(1); opacity: 0.7; } 50% { transform: scale(1.2); opacity: 0.4; } } .custom-red-marker { animation: pulse 2s infinite; }`
    document.head.appendChild(style)

    mapInstanceRef.current = map

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [])

  useEffect(() => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.eachLayer((layer) => {
        if (layer instanceof L.TileLayer) {
          mapInstanceRef.current.removeLayer(layer)
        }
      })
      tileLayers[activeLayer].addTo(mapInstanceRef.current)
    }
  }, [activeLayer])

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden" style={{ minHeight: '400px' }}>
      <div ref={mapRef} className="w-full h-full" />
      <div className="absolute top-4 right-4 z-40 flex flex-col space-y-2">
        {Object.keys(tileLayers).map((layerName) => (
          <button
            key={layerName}
            onClick={() => setActiveLayer(layerName)}
            className={`px-3 py-2 text-xs font-bold uppercase rounded-lg shadow-md transition-all duration-200 ${activeLayer === layerName ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          >
            {layerName === 'satellite' && 'Vệ tinh'}
            {layerName === 'streets' && 'Đường phố'}
            {layerName === 'terrain' && 'Địa hình'}
            {layerName === 'hybrid' && 'Kết hợp'}
          </button>
        ))}
      </div>
    </div>
  )
}

export default EpidemicMap

