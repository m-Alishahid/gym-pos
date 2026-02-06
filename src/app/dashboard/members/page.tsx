import { Card } from "@/components/Card";
import { MOCK_MEMBERS } from "@/lib/data";
import { Users, UserPlus, MoreVertical, Search } from "lucide-react";

export default function MembersPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center bg-white/5 p-4 rounded-3xl border border-white/5">
                <div className="relative flex-grow max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search members..."
                        className="w-full bg-black/20 border border-white/10 rounded-2xl py-2 pl-12 pr-4 text-sm focus:outline-none focus:border-primary transition-all"
                    />
                </div>
                <button className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-2xl font-bold hover:bg-primary/90 transition-all">
                    <UserPlus className="w-4 h-4" />
                    Add Member
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_MEMBERS.map((member) => (
                    <Card key={member.id} className="group hover:neon-border transition-all">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 rounded-2xl bg-white/5">
                                <Users className="w-6 h-6 text-muted-foreground" />
                            </div>
                            <button className="p-2 hover:bg-white/5 rounded-full">
                                <MoreVertical className="w-4 h-4" />
                            </button>
                        </div>

                        <h3 className="text-xl font-black uppercase italic mb-1">{member.name}</h3>
                        <div className="flex items-center gap-2 mb-6">
                            <span className={`text-[10px] font-black px-2 py-1 rounded-full uppercase ${member.plan === 'Elite' ? 'bg-primary/10 text-primary' : 'bg-white/5 text-muted-foreground'
                                }`}>
                                {member.plan} Plan
                            </span>
                            <span className={`text-[10px] font-black px-2 py-1 rounded-full uppercase ${member.status === 'active' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                                }`}>
                                {member.status}
                            </span>
                        </div>

                        <div className="border-t border-white/5 pt-4 mt-auto">
                            <p className="text-[10px] uppercase text-muted-foreground font-bold mb-1">Joined Date</p>
                            <p className="text-sm font-bold">{member.joinedDate}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
