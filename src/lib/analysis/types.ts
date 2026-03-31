export interface HeatmapCell {
  dayOfWeek: number; // 0=Sun, 6=Sat
  hour: number; // 6-18
  utilization: number; // 0-1
  totalSlots: number;
  bookedSlots: number;
  avgRate: number;
  revenue: number;
}

export interface DayOfWeekStats {
  dayOfWeek: number;
  dayName: string;
  utilization: number;
  avgRate: number;
  totalRevenue: number;
  totalSlots: number;
  bookedSlots: number;
}

export interface MonthlyTrend {
  month: string; // "2024-01"
  year: number;
  monthNum: number;
  utilization: number;
  revenue: number;
  rounds: number;
}

export interface KPIMetrics {
  utilizationRate: number;
  revPAT: number; // Revenue Per Available Tee Time
  revPUT: number; // Revenue Per Used Tee Time
  noShowRate: number;
  totalRevenue: number;
  totalRounds: number;
  totalSlots: number;
  revenueGap: number; // estimated dollar value of empty slots
}

export interface GapDetail {
  dayOfWeek: number;
  dayName: string;
  hour: number;
  timeLabel: string;
  utilization: number;
  emptySlots: number;
  avgRate: number;
  gapValue: number; // dollar value of the gap
}

export interface PricingInsight {
  timeSlot: string;
  avgUtilization: number;
  avgRate: number;
  signal: "UNDERPRICED" | "OVERPRICED" | "OPTIMAL";
  suggestedRate: number;
  potentialRevenue: number;
}

export interface TierAnalysis {
  tierId: string;
  tierName: string;
  memberCount: number;
  annualDues: number;
  avgRoundsPerMember: number;
  effectiveRatePerRound: number;
  displacementCost: number;
  netTierValue: number;
  retentionRate: number;
  capacityUtilization: number | null;
  status: "PROFITABLE" | "MARGINAL" | "UNDERWATER";
}

export interface Recommendation {
  id: string;
  category: "PRICING" | "UTILIZATION" | "MEMBERSHIP" | "OPERATIONS";
  priority: "HIGH" | "MEDIUM" | "LOW";
  title: string;
  description: string;
  impact: {
    estimatedAnnualRevenue: number;
    confidence: "HIGH" | "MEDIUM" | "LOW";
    basis: string;
  };
  evidence: {
    metric: string;
    currentValue: number;
    benchmarkValue: number;
  }[];
  actions: string[];
}
