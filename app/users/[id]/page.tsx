async function getSingleUser(id: string) {
  // Simple SSR data fetch
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}

export default async function UserDetailPage({ params }: { params: Promise<{ id: string }> | any }) {
  // Resolve params for Next.js App Router
  const resolvedParams = await params;
  const user = await getSingleUser(resolvedParams.id);

  return (
    // Simple black background
    <div className="min-h-screen bg-black text-white p-6 sm:p-10 font-sans">
      
      {/* Centered Main Container - Basic Border */}
      <div className="max-w-2xl mx-auto border border-zinc-800 rounded-lg p-6 bg-zinc-950">

        {/* Profile Section - Centered Image & Main Title */}
        <div className="flex flex-col items-center mb-6 text-center">
          <img
            src={user.image}
            alt={user.firstName}
            // Basic simple styled image
            className="w-24 h-24 rounded-full border-2 border-zinc-700 mb-4"
          />
          <h1 className="text-2xl font-bold">
            {user.firstName} {user.maidenName} {user.lastName}
          </h1>
          <p className="text-sm text-zinc-500 mb-2">@{user.username}</p>
          {/* Simple Green Role Badge */}
          <span className="text-xs text-emerald-400 font-semibold bg-emerald-950 px-3 py-1 rounded">
            {user.role}
          </span>
        </div>

        {/* Data Sections - Stacked Simply */}
        <div className="space-y-4 border-t border-zinc-800 pt-6 text-sm text-zinc-300">
          
          <h2 className="text-base font-semibold text-white">General Information</h2>
          <p><strong className="text-zinc-500">Age:</strong> {user.age} Years Old</p>
          <p><strong className="text-zinc-500">Gender:</strong> {user.gender}</p>
          <p><strong className="text-zinc-500">Birth Date:</strong> {user.birthDate}</p>
          <p className="truncate"><strong className="text-zinc-500">Email:</strong> {user.email}</p>
          <p><strong className="text-zinc-500">Phone:</strong> {user.phone}</p>
          <p><strong className="text-zinc-500">Website:</strong> {user.domain}</p>
          
          <h2 className="text-base font-semibold text-white pt-3 border-t border-zinc-800">Company Details</h2>
          <p><strong className="text-zinc-500">Role:</strong> {user.company.title}</p>
          <p><strong className="text-zinc-500">Company Name:</strong> {user.company.name}</p>
          <p><strong className="text-zinc-500">Department:</strong> {user.company.department}</p>
          
          <h2 className="text-base font-semibold text-white pt-3 border-t border-zinc-800">Location Info</h2>
          <p><strong className="text-zinc-500">Street Address:</strong> {user.address.address}</p>
          <p><strong className="text-zinc-500">City & State:</strong> {user.address.city}, {user.address.stateCode}</p>
          <p><strong className="text-zinc-500">Country:</strong> {user.address.country}</p>
        </div>

      </div>
    </div>
  );
}