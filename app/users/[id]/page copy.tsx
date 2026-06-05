async function getSingleUser(id: string) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch user details");
  }
  return res.json();
}

export default async function UserDetailPage({ params }: { params: Promise<{ id: string }> | any }) {
  // Resolving params properly for Next.js App Router
  const resolvedParams = await params;
  const user = await getSingleUser(resolvedParams.id);

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-slate-900 border border-zinc-800 rounded-2xl shadow-xl">
      
      {/* Main Header / Top Section */}
      <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-zinc-800">
        <img 
          src={user.image} 
          alt={user.firstName} 
          className="w-24 h-24 rounded-full bg-zinc-800 border-2 border-blue-500 p-1"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-extrabold text-white">{user.firstName} {user.maidenName} {user.lastName}</h2>
          <p className="text-blue-400 font-medium text-lg">{user.company.title} at {user.company.name}</p>
          <span className="inline-block mt-2 text-xs bg-zinc-800 px-3 py-1 rounded-full text-zinc-300 font-mono">
            Role: {user.role.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Grid for User Information Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        
        {/* Personal Info */}
        <div className="bg-zinc-950/40 p-4 rounded-xl border border-zinc-800/60">
          <h3 className="text-blue-400 font-semibold mb-3 border-b border-zinc-800 pb-1">Personal Details</h3>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">Username:</span> {user.username}</p>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">Age / Gender:</span> {user.age} / {user.gender}</p>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">Birth Date:</span> {user.birthDate}</p>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">Blood Group:</span> {user.bloodGroup}</p>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">Height / Weight:</span> {user.height}cm / {user.weight}kg</p>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">Eye Info:</span> {user.eyeColor} Eyes, {user.hair.color} ({user.hair.type}) Hair</p>
        </div>

        {/* Contact Info */}
        <div className="bg-zinc-950/40 p-4 rounded-xl border border-zinc-800/60">
          <h3 className="text-blue-400 font-semibold mb-3 border-b border-zinc-800 pb-1">Contact & Network</h3>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">Email:</span> {user.email}</p>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">Phone:</span> {user.phone}</p>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">IP Address:</span> {user.ip}</p>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">Mac Address:</span> {user.macAddress}</p>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">University:</span> {user.university}</p>
        </div>

        {/* Address Info */}
        <div className="bg-zinc-950/40 p-4 rounded-xl border border-zinc-800/60">
          <h3 className="text-blue-400 font-semibold mb-3 border-b border-zinc-800 pb-1">Address Location</h3>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">Street:</span> {user.address.address}</p>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">City / State:</span> {user.address.city}, {user.address.state} ({user.address.stateCode})</p>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">Country / Postal:</span> {user.address.country} - {user.address.postalCode}</p>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">Coordinates:</span> Lat: {user.address.coordinates.lat}, Lng: {user.address.coordinates.lng}</p>
        </div>

        {/* Bank & Crypto Info */}
        <div className="bg-zinc-950/40 p-4 rounded-xl border border-zinc-800/60">
          <h3 className="text-blue-400 font-semibold mb-3 border-b border-zinc-800 pb-1">Financial & Crypto</h3>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">Card Number:</span> {user.bank.cardNumber} ({user.bank.cardType})</p>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">Expires / Currency:</span> {user.bank.cardExpire} / {user.bank.currency}</p>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">IBAN:</span> {user.bank.iban}</p>
          <p className="text-sm my-1"><span className="text-zinc-400 font-medium">Crypto Wallet:</span> {user.crypto.wallet} ({user.crypto.coin} on {user.crypto.network})</p>
        </div>

      </div>

      {/* Footer System Details */}
      <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-wrap gap-4 text-xs text-zinc-500 font-mono justify-between">
        <span>SSN: {user.ssn}</span>
        <span>EIN: {user.ein}</span>
        <span className="w-full text-center md:text-left break-all mt-2">UserAgent: {user.userAgent}</span>
      </div>

    </div>
  );
}