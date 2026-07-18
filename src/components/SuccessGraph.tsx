import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  ResponsiveContainer, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, Tooltip, CartesianGrid, Legend 
} from "recharts";
import { TrendingUp, BarChart3, PieChart as PieIcon, Award, Percent } from "lucide-react";

// Performance Mock Data
const monthlyData = [
  { name: "Jan", Projects: 4, Revenue: 1500, Satisfaction: 98 },
  { name: "Feb", Projects: 8, Revenue: 2800, Satisfaction: 98 },
  { name: "Mar", Projects: 12, Revenue: 4200, Satisfaction: 97 },
  { name: "Apr", Projects: 18, Revenue: 5100, Satisfaction: 99 },
  { name: "May", Projects: 25, Revenue: 6800, Satisfaction: 98 },
  { name: "Jun", Projects: 32, Revenue: 8500, Satisfaction: 98 },
  { name: "Jul", Projects: 45, Revenue: 11000, Satisfaction: 99 },
  { name: "Aug", Projects: 54, Revenue: 13500, Satisfaction: 98 },
  { name: "Sep", Projects: 62, Revenue: 15800, Satisfaction: 99 },
  { name: "Oct", Projects: 70, Revenue: 18200, Satisfaction: 98 }
];

// Satisfaction segments
const satisfactionData = [
  { name: "Exceeded Expectations", value: 65, color: "#D4AF37" },
  { name: "Fully Satisfied", value: 33, color: "#f59e0b" },
  { name: "Awaiting Revisions", value: 2, color: "#737373" }
];

export const SuccessGraph: React.FC = () => {
  const [activeChart, setActiveChart] = useState<"line" | "bar" | "pie">("line");

  return (
    <div className="w-full bg-neutral-950 border-2 border-white/10 rounded-none p-6 sm:p-8 relative overflow-hidden shadow-[4px_4px_0px_0px_rgba(255,255,255,0.03)]">
      {/* Decorative luxury orbs */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-none blur-2xl" />
      <div className="absolute bottom-0 left-0 w-44 h-44 bg-yellow-500/5 rounded-none blur-3xl" />

      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b-2 border-white/10 pb-6 mb-8">
        <div>
          <span className="text-amber-400 font-mono text-[10px] tracking-[0.3em] uppercase block mb-1 font-black">
            AGENCY ANALYTICS
          </span>
          <h3 className="text-2xl font-display font-black text-white tracking-tight uppercase">
            Success & Performance Metrics
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Real-time tracking of projects growth, revenue scale, and customer happiness
          </p>
        </div>

        {/* Toggle Controls */}
        <div className="flex gap-1.5 p-1 rounded-none bg-neutral-950 border-2 border-white/10 self-start md:self-auto">
          <button
            onClick={() => setActiveChart("line")}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-[10px] font-mono font-black uppercase tracking-wider rounded-none transition-all cursor-pointer border-2 ${
              activeChart === "line"
                ? "bg-amber-400 border-black text-black"
                : "text-neutral-400 hover:text-white hover:border-white/10 border-transparent"
            }`}
          >
            <TrendingUp size={12} />
            Line Chart
          </button>
          <button
            onClick={() => setActiveChart("bar")}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-[10px] font-mono font-black uppercase tracking-wider rounded-none transition-all cursor-pointer border-2 ${
              activeChart === "bar"
                ? "bg-amber-400 border-black text-black"
                : "text-neutral-400 hover:text-white hover:border-white/10 border-transparent"
            }`}
          >
            <BarChart3 size={12} />
            Bar Chart
          </button>
          <button
            onClick={() => setActiveChart("pie")}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-[10px] font-mono font-black uppercase tracking-wider rounded-none transition-all cursor-pointer border-2 ${
              activeChart === "pie"
                ? "bg-amber-400 border-black text-black"
                : "text-neutral-400 hover:text-white hover:border-white/10 border-transparent"
            }`}
          >
            <PieIcon size={12} />
            Pie Chart
          </button>
        </div>
      </div>

      {/* Stats Counter Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-neutral-950 border-2 border-white/10 rounded-none shadow-[2px_2px_0px_0px_rgba(255,255,255,0.01)]">
          <span className="text-[9px] text-neutral-400 uppercase font-mono tracking-widest font-black">Total Progress</span>
          <h4 className="text-xl sm:text-2xl font-display font-black text-white mt-1 flex items-baseline gap-1 uppercase">
            70+ <span className="text-[9px] text-amber-400 font-bold font-mono">Delivered</span>
          </h4>
        </div>
        <div className="p-4 bg-neutral-950 border-2 border-white/10 rounded-none shadow-[2px_2px_0px_0px_rgba(255,255,255,0.01)]">
          <span className="text-[9px] text-neutral-400 uppercase font-mono tracking-widest font-black">Conversion Boost</span>
          <h4 className="text-xl sm:text-2xl font-display font-black text-white mt-1 flex items-baseline gap-1 uppercase">
            +45% <span className="text-[9px] text-amber-400 font-bold font-mono">Average</span>
          </h4>
        </div>
        <div className="p-4 bg-neutral-950 border-2 border-white/10 rounded-none shadow-[2px_2px_0px_0px_rgba(255,255,255,0.01)]">
          <span className="text-[9px] text-neutral-400 uppercase font-mono tracking-widest font-black">Satisfaction</span>
          <h4 className="text-xl sm:text-2xl font-display font-black text-white mt-1 flex items-baseline gap-1 uppercase">
            98% <span className="text-[9px] text-amber-400 font-bold font-mono">Stars</span>
          </h4>
        </div>
        <div className="p-4 bg-neutral-950 border-2 border-white/10 rounded-none shadow-[2px_2px_0px_0px_rgba(255,255,255,0.01)]">
          <span className="text-[9px] text-neutral-400 uppercase font-mono tracking-widest font-black">Campaign Velocity</span>
          <h4 className="text-xl sm:text-2xl font-display font-black text-white mt-1 flex items-baseline gap-1 uppercase">
            50+ <span className="text-[9px] text-amber-400 font-bold font-mono">Live Ads</span>
          </h4>
        </div>
      </div>

      {/* Render Chart */}
      <div className="w-full h-[320px] font-mono text-[11px] relative">
        <ResponsiveContainer width="100%" height="100%">
          {activeChart === "line" ? (
            <LineChart data={monthlyData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
              <defs>
                <linearGradient id="projColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
              <XAxis dataKey="name" stroke="#737373" />
              <YAxis stroke="#737373" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#000", 
                  borderColor: "#D4AF37", 
                  borderWidth: "2px",
                  borderRadius: "0px",
                  color: "#fff"
                }} 
              />
              <Legend wrapperStyle={{ pt: 10 }} />
              <Line 
                type="monotone" 
                dataKey="Projects" 
                stroke="#D4AF37" 
                strokeWidth={3} 
                activeDot={{ r: 8 }} 
                name="Projects Growth"
              />
            </LineChart>
          ) : activeChart === "bar" ? (
            <BarChart data={monthlyData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
              <XAxis dataKey="name" stroke="#737373" />
              <YAxis stroke="#737373" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#000", 
                  borderColor: "rgba(255,255,255,0.15)", 
                  borderWidth: "2px",
                  borderRadius: "0px" 
                }} 
              />
              <Legend />
              <Bar dataKey="Revenue" fill="#f59e0b" radius={[0, 0, 0, 0]} name="Revenue Scaling ($)" />
            </BarChart>
          ) : (
            <PieChart>
              <Pie
                data={satisfactionData}
                cx="50%"
                cy="45%"
                innerRadius={60}
                outerRadius={95}
                paddingAngle={5}
                dataKey="value"
              >
                {satisfactionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#000", 
                  borderColor: "rgba(255,255,255,0.15)", 
                  borderWidth: "2px",
                  borderRadius: "0px" 
                }} 
              />
              <Legend verticalAlign="bottom" align="center" />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};
