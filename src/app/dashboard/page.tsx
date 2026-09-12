'use client';

import { WeeklyLineChart, DistributionPieChart } from '@/components/dashboard/AnalyticsCharts';
import TaskTable from '@/components/dashboard/TaskTable';

export default function DashboardOverviewPage() {
  return (
    <div className="container-fluid p-0">
      {/* Search and Action Bar */}
      <div className="row align-items-center mb-4 g-3">
        <div className="col-md-6 col-lg-8">
          <div className="d-flex align-items-center bg-white rounded-pill px-3 py-2 shadow-sm border">
            <i className="bx bx-search fs-5 text-muted me-2"></i>
            <input
              type="text"
              placeholder="Search your courses, assignments, or peers..."
              className="input w-100 border-0"
              style={{ outline: 'none' }}
            />
          </div>
        </div>
        <div className="col-md-6 col-lg-4 text-md-end">
          <div className="d-flex align-items-center justify-content-md-end gap-3">
            <button type="button" className="btn btn-light rounded-circle shadow-sm border p-2" aria-label="Notifications">
              <i className="bx bx-bell fs-5 text-primary"></i>
            </button>
            <button type="button" className="btn btn-light rounded-circle shadow-sm border p-2" aria-label="Messages">
              <i className="bx bx-envelope fs-5 text-primary"></i>
            </button>
            <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill px-3 py-2">
              Semester Active
            </span>
          </div>
        </div>
      </div>

      {/* 4 Overview Metrics Cards */}
      <div className="row g-3 mb-4">
        <div className="col-sm-6 col-xl-3">
          <div className="card card1 border-0 shadow-sm text-white p-4 h-100 tr">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h6 className="text-white-50 text-uppercase mb-1" style={{ fontSize: '12px' }}>Enrolled Classes</h6>
                <h2 className="fw-bold mb-0">14</h2>
              </div>
              <i className="bx bx-book-open fs-2 p-2 bg-white bg-opacity-25 rounded-3"></i>
            </div>
            <small className="text-white-50">+2 completed this month</small>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card card2 border-0 shadow-sm text-white p-4 h-100 tr">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h6 className="text-white-50 text-uppercase mb-1" style={{ fontSize: '12px' }}>Hours Spent</h6>
                <h2 className="fw-bold mb-0">128h</h2>
              </div>
              <i className="bx bx-time-five fs-2 p-2 bg-white bg-opacity-25 rounded-3"></i>
            </div>
            <small className="text-white-50">Top 5% student activity</small>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card card3 border-0 shadow-sm text-white p-4 h-100 tr">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h6 className="text-white-50 text-uppercase mb-1" style={{ fontSize: '12px' }}>Certificates</h6>
                <h2 className="fw-bold mb-0">6</h2>
              </div>
              <i className="bx bx-award fs-2 p-2 bg-white bg-opacity-25 rounded-3"></i>
            </div>
            <small className="text-white-50">Verified vocational badges</small>
          </div>
        </div>

        <div className="col-sm-6 col-xl-3">
          <div className="card card4 border-0 shadow-sm text-white p-4 h-100 tr">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h6 className="text-white-50 text-uppercase mb-1" style={{ fontSize: '12px' }}>Network Friends</h6>
                <h2 className="fw-bold mb-0">48</h2>
              </div>
              <i className="bx bx-group fs-2 p-2 bg-white bg-opacity-25 rounded-3"></i>
            </div>
            <small className="text-white-50">7 currently online</small>
          </div>
        </div>
      </div>

      {/* Analytics Charts & Task Manager */}
      <div className="row g-4 mb-4">
        {/* Line Chart */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Weekly Learning Activity</h5>
              <span className="badge bg-light text-muted border px-3 py-2">Hours / Day</span>
            </div>
            <WeeklyLineChart />
          </div>
        </div>

        {/* Distribution Pie Chart */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold m-0">Subject Distribution</h5>
              <span className="badge bg-light text-muted border px-3 py-2">Category</span>
            </div>
            <DistributionPieChart />
          </div>
        </div>
      </div>

      {/* Task Manager CRUD Section */}
      <div className="row">
        <div className="col-12">
          <TaskTable />
        </div>
      </div>
    </div>
  );
}
