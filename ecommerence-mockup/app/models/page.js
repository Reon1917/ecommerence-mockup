export default function ModelsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Helio Ring Models
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect Helio Ring for your lifestyle. Each model offers 
            advanced health tracking with unique features tailored to your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Helio */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Helio</h3>
            <p className="text-gray-600 mb-4">
              Essential health tracking for everyday wellness.
            </p>
            <div className="text-3xl font-bold text-blue-600 mb-4">$299</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Heart rate monitoring</li>
              <li>• Sleep tracking</li>
              <li>• Activity tracking</li>
              <li>• 7-day battery life</li>
            </ul>
          </div>

          {/* Helio Pro */}
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-500">
            <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-4">Helio Pro</h3>
            <p className="text-gray-600 mb-4">
              Advanced health insights with professional-grade sensors.
            </p>
            <div className="text-3xl font-bold text-blue-600 mb-4">$499</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• All Helio features</li>
              <li>• Blood pressure monitoring</li>
              <li>• Blood oxygen levels</li>
              <li>• Stress tracking</li>
              <li>• 10-day battery life</li>
            </ul>
          </div>

          {/* Helio Kids */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Helio Kids</h3>
            <p className="text-gray-600 mb-4">
              Safe, fun health tracking designed specifically for children.
            </p>
            <div className="text-3xl font-bold text-blue-600 mb-4">$199</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Heart rate monitoring</li>
              <li>• Activity tracking</li>
              <li>• Sleep tracking</li>
              <li>• Parental controls</li>
              <li>• 5-day battery life</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 