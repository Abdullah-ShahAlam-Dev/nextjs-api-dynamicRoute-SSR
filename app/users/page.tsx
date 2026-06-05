import Link from "next/link";

async function getUsers() {
  const res = await fetch("https://dummyjson.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  const data = await res.json();
  return data.users;
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    // Background changed to a premium dark gradient
    <div className="p-8 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black min-h-screen text-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Title gradient changed to Emerald/Teal */}
        <h2 className="text-3xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
          Registered Users
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.map((user: any) => (
            <Link href={`/users/${user.id}`} key={user.id} className="group">
              {/* Hover effect changed to Green (Emerald) shadow and border */}
              <div className="bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-2xl p-5 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] group-hover:border-emerald-500/50 h-full flex flex-col justify-between">
                
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={user.image} 
                    alt={user.firstName} 
                    className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 group-hover:border-emerald-500/50 transition-colors" 
                  />
                  <div>
                    {/* Name color changes to Green on hover */}
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {user.firstName} {user.lastName}
                    </h3>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">{user.company.department}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mt-2">
                  <p className="text-sm text-zinc-400 truncate"><span className="text-zinc-500">✉️</span> {user.email}</p>
                  <p className="text-sm text-zinc-400"><span className="text-zinc-500">📞</span> {user.phone}</p>
                </div>

                <div className="flex justify-between items-center mt-5 pt-4 border-t border-zinc-800/80 text-xs">
                  <span className="text-zinc-500 font-mono">#{user.id}</span>
                  {/* Role badge changed to Green */}
                  <span className="text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full font-medium">
                    {user.role}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}