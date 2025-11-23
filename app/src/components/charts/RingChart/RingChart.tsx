import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './RingChart.css';

export interface RingChartData {
    name: string;
    value: number;
    color: string;
}

interface RingChartProps {
    data: RingChartData[];
    centerContent?: React.ReactNode;
    showLegend?: boolean;
    size?: number;
}

export const RingChart: React.FC<RingChartProps> = ({
    data,
    centerContent,
    showLegend = true,
    size = 200,
}) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="ring-chart-container">
            <div className="ring-chart" style={{ width: size, height: size }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data as any}
                            cx="50%"
                            cy="50%"
                            innerRadius="70%"
                            outerRadius="90%"
                            paddingAngle={2}
                            dataKey="value"
                            animationBegin={0}
                            animationDuration={800}
                            animationEasing="ease-out"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {centerContent && (
                    <div className="ring-chart-center slide-up">
                        {centerContent}
                    </div>
                )}
            </div>

            {showLegend && (
                <div className="ring-chart-legend">
                    {data.map((item, index) => {
                        const percentage = ((item.value / total) * 100).toFixed(0);
                        return (
                            <div key={index} className="ring-chart-legend-item">
                                <div className="ring-chart-legend-row">
                                    <div
                                        className="ring-chart-legend-color"
                                        style={{ background: item.color }}
                                    />
                                    <span className="ring-chart-legend-label">
                                        {item.name} {percentage}%
                                    </span>
                                </div>
                                <div className="ring-chart-legend-value numeric">
                                    ${Math.round(item.value).toLocaleString()}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
