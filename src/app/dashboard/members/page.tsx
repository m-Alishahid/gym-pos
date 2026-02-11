"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { useAppContext } from "@/context/AppContext";
import { Users, UserPlus, MoreVertical, Search, Trash2, Edit2, CheckCircle2, Filter } from "lucide-react";
import { Modal } from "@/components/Modal";

export default function MembersPage() {
    const { members, addMember, deleteMember, updateMember, checkInMember } = useAppContext();
    const [searchQuery, setSearchQuery] = useState("");
    const [filterPlan, setFilterPlan] = useState<string>("All");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingMember, setEditingMember] = useState<any>(null);

    const [formData, setFormData] = useState({
        name: "",
        plan: "Starter" as const,
        status: "active" as const,
        joinedDate: new Date().toISOString().split('T')[0]
    });

    const filteredMembers = members.filter(member => {
        const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPlan = filterPlan === "All" || member.plan === filterPlan;
        return matchesSearch && matchesPlan;
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingMember) {
            updateMember(editingMember.id, formData);
        } else {
            addMember(formData);
        }
        closeModal();
    };

    const openEditModal = (member: any) => {
        setEditingMember(member);
        setFormData({
            name: member.name,
            plan: member.plan,
            status: member.status,
            joinedDate: member.joinedDate
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingMember(null);
        setFormData({
            name: "",
            plan: "Starter",
            status: "active",
            joinedDate: new Date().toISOString().split('T')[0]
        });
    };

    return (
        <div className="space-y-8">
            {/* Header / Controls */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white/5 p-6 rounded-[2rem] border border-white/5">
                <div className="relative flex-grow max-w-md w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search members..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-black/20 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-primary transition-all"
                    />
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative flex-grow md:flex-grow-0">
                        <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                        <select
                            value={filterPlan}
                            onChange={(e) => setFilterPlan(e.target.value)}
                            className="w-full md:w-32 bg-white/5 border border-white/10 rounded-2xl py-3 pl-10 pr-4 text-xs font-bold uppercase focus:outline-none appearance-none"
                        >
                            <option value="All">All Plans</option>
                            <option value="Starter">Starter</option>
                            <option value="Pro">Pro</option>
                            <option value="Elite">Elite</option>
                        </select>
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-black uppercase italic hover:bg-primary/90 transition-all text-sm whitespace-nowrap"
                    >
                        <UserPlus className="w-4 h-4" />
                        Add Member
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMembers.map((member) => (
                    <Card key={member.id} className="group hover:neon-border transition-all flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 rounded-2xl bg-white/5">
                                <Users className="w-6 h-6 text-muted-foreground" />
                            </div>
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => openEditModal(member)}
                                    className="p-2 hover:bg-white/10 rounded-xl text-blue-400"
                                    title="Edit Member"
                                >
                                    <Edit2 className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => deleteMember(member.id)}
                                    className="p-2 hover:bg-red-500/10 rounded-xl text-red-400"
                                    title="Delete Member"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
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
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-[10px] uppercase text-muted-foreground font-bold mb-1">Joined Date</p>
                                    <p className="text-sm font-bold">{member.joinedDate}</p>
                                </div>
                                <button
                                    onClick={() => checkInMember(member.id)}
                                    disabled={member.status !== 'active'}
                                    className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-500 rounded-xl text-[10px] font-black uppercase hover:bg-green-500 hover:text-white transition-all disabled:opacity-30 disabled:grayscale"
                                >
                                    <CheckCircle2 className="w-3 h-3" />
                                    Check In
                                </button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {filteredMembers.length === 0 && (
                <div className="text-center py-20 bg-white/5 rounded-[2rem] border border-dashed border-white/10">
                    <p className="text-muted-foreground italic font-black uppercase tracking-widest px-4">
                        No members found matching your criteria
                    </p>
                </div>
            )}

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={editingMember ? "Edit Member" : "Add New Member"}
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs uppercase font-black text-muted-foreground">Full Name</label>
                        <input
                            required
                            type="text"
                            placeholder="e.g. John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-black/40 border border-white/10 rounded-2xl py-3 px-4 focus:outline-none focus:border-primary"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs uppercase font-black text-muted-foreground">Membership Plan</label>
                            <select
                                value={formData.plan}
                                onChange={(e) => setFormData({ ...formData, plan: e.target.value as any })}
                                className="w-full bg-black/40 border border-white/10 rounded-2xl py-3 px-4 focus:outline-none focus:border-primary appearance-none"
                            >
                                <option value="Starter">Starter</option>
                                <option value="Pro">Pro</option>
                                <option value="Elite">Elite</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase font-black text-muted-foreground">Status</label>
                            <select
                                value={formData.status}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                                className="w-full bg-black/40 border border-white/10 rounded-2xl py-3 px-4 focus:outline-none focus:border-primary appearance-none"
                            >
                                <option value="active">Active</option>
                                <option value="expired">Expired</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase font-black text-muted-foreground">Joined Date</label>
                        <input
                            required
                            type="date"
                            value={formData.joinedDate}
                            onChange={(e) => setFormData({ ...formData, joinedDate: e.target.value })}
                            className="w-full bg-black/40 border border-white/10 rounded-2xl py-3 px-4 focus:outline-none focus:border-primary"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-black uppercase italic hover:bg-primary/90 transition-all shadow-lg"
                    >
                        {editingMember ? "Save Changes" : "Register Member"}
                    </button>
                </form>
            </Modal>
        </div>
    );
}
