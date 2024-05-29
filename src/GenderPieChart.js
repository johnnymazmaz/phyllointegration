import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Male %', value: 28 },
    { name: 'Female %', value: 72}
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const GenderPieChart = () => {
    return (
        <PieChart width={400} height={400} className="gender-pie-chart">
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};

export default GenderPieChart;
