import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import "../styles/TaskChart.css";

function TaskChart({ tasks }) {
  const statusCounts = {
    complete: tasks.filter(task => task.status === 'complete').length,
    pending: tasks.filter(task => task.status === 'pending').length,
    overdue: tasks.filter(task => task.status === 'overdue').length,
  };

  const pieData = [
    { name: 'Complete', value: statusCounts.complete },
    { name: 'Pending', value: statusCounts.pending },
    { name: 'Overdue', value: statusCounts.overdue },
  ];

  const colors = ['#4CAF50', '#FF9800', '#F44336'];

  return (
    <div className="task-chart">
      <PieChart width={200} height={200}>
        <Pie
          data={pieData}
          dataKey="value"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
      <BarChart width={300} height={200} data={pieData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default TaskChart;
