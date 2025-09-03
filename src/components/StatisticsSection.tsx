interface StatItem {
  value: string
  label: string
}

interface StatisticsSectionProps {
  stats: StatItem[]
}

export default function StatisticsSection({ stats }: StatisticsSectionProps) {
  return (
    <section className="py-20 bg-univille-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
