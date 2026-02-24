export default function Donation() {
  return (
    <section id="donate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Make A Donation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your contribution directly saves lives on Kenyan highways. Make a direct donation.
          </p>
        </div>

        {/* Paybill Info */}
        <div className="max-w-3xl mx-auto bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5 pattern-dots"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Financial Support</h3>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-6 inline-block w-full max-w-md">
              <p className="text-sm uppercase tracking-widest mb-2 opacity-80">Nurse In Hand Paybill No</p>
              <div className="text-4xl md:text-6xl font-black tracking-wider font-mono">532910</div>
            </div>
            <div className="space-y-2 text-blue-100">
              <p className="font-medium">Bank Details: NCBA Bank - Westlands Mall Branch</p>
              <p className="font-medium">Account Name: NURSE IN HAND</p>
              <p className="font-medium">Acc No: 1005171454</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
