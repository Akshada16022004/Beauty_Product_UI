import React, { useRef, useState } from 'react';
import { Camera, RotateCcw, Download, Sparkles } from 'lucide-react';

const VirtualTryOn = () => {
  const videoRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: "Crystal Glow Serum", color: "bg-gradient-to-r from-pink-200 to-purple-300", effect: "glow" },
    { id: 2, name: "Rose Blush", color: "bg-pink-400", effect: "blush" },
    { id: 3, name: "Golden Highlighter", color: "bg-yellow-300", effect: "highlight" }
  ];

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsActive(true);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Camera access is required for virtual try-on. Please allow camera permissions.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Virtual Try-On Mirror
        </h3>
        <p className="text-gray-600">See how our products look on you in real-time! ✨</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative bg-black rounded-2xl overflow-hidden aspect-square">
          {!isActive ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <button
                onClick={startCamera}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all flex items-center space-x-2"
              >
                <Camera className="h-6 w-6" />
                <span>Start Camera</span>
              </button>
            </div>
          ) : (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
              {selectedProduct && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-32 h-32 rounded-full ${selectedProduct.color} opacity-50 mix-blend-overlay animate-pulse`}></div>
                </div>
              )}
            </>
          )}
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-gray-800">Try These Products:</h4>
          <div className="space-y-4">
            {products.map(product => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 ${
                  selectedProduct?.id === product.id
                    ? 'border-pink-500 bg-pink-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-pink-300'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full ${product.color}`}></div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">{product.name}</p>
                    <p className="text-sm text-gray-600">Virtual try-on</p>
                  </div>
                  <Sparkles className="h-5 w-5 text-yellow-500 ml-auto" />
                </div>
              </button>
            ))}
          </div>

          <div className="flex space-x-4 pt-4">
            <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
              <RotateCcw className="h-5 w-5" />
              <span>Reset</span>
            </button>
            <button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Save Look</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOn;