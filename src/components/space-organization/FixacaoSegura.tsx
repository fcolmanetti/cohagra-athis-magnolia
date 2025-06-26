
export const FixacaoSegura = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <div className="flex items-center mb-6">
        <div className="bg-red-100 p-3 rounded-full mr-4">
          <span className="text-red-600 text-xl">🔧</span>
        </div>
        <h2 className="text-2xl font-bold text-warm-brown-800">Fixação Segura</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-3">✅ Métodos Seguros:</h4>
          <ul className="space-y-2 text-green-700">
            <li>• Buchas plásticas de expansão</li>
            <li>• Suportes adesivos de qualidade</li>
            <li>• Prateleiras de pressão</li>
            <li>• Móveis apoiados no chão</li>
            <li>• Ganchos adesivos removíveis</li>
          </ul>
        </div>

        <div className="bg-red-50 p-6 rounded-lg">
          <h4 className="font-semibold text-red-800 mb-3">❌ Nunca Use:</h4>
          <ul className="space-y-2 text-red-700">
            <li>• Pregos diretamente na parede</li>
            <li>• Parafusos muito longos</li>
            <li>• Furadeira sem orientação técnica</li>
            <li>• Buchas inadequadas para concreto</li>
            <li>• Fixação em áreas estruturais</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
