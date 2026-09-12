$('#btn-slider').click(function () {
  if ($('#sliders').hasClass('active')) {
    $('#sliders').removeClass('active');
    $('#sliders-background').removeClass('active');
  } else {
    $('#sliders').addClass('active');
    $('#sliders-background').addClass('active');
  }
});

$('#sliders-background').click(function () {
  $('#sliders').removeClass('active');
  $('#sliders-background').removeClass('active');
});

const app = new (function () {
  this.el = document.getElementById('tasks');
  const STORAGE_KEY = 'mdr_dashboard_tasks';

  this.loadTasks = function () {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (err) {
      console.error('Failed to parse tasks from localStorage:', err);
    }
    return [
      'Learn UI/UX Fundamentals',
      'Build Responsive Landing Page',
      'Integrate Interactive Dashboard Widgets'
    ];
  };

  this.saveTasks = function () {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
    } catch (err) {
      console.error('Failed to save tasks to localStorage:', err);
    }
  };

  this.escapeHtml = function (str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  };

  this.tasks = this.loadTasks();

  this.FetchAll = function () {
    if (!this.el) return '';
    let data = '';

    if (this.tasks.length > 0) {
      for (let i = 0; i < this.tasks.length; i++) {
        const safeTask = this.escapeHtml(this.tasks[i]);
        data += '<tr>';
        data += '<td class="ps-2 w-100">' + (i + 1) + '. ' + safeTask + '</td>';
        data += '<td><button type="button" onclick="app.Edit(' + i + ')" class="crud-btn align-middle"><i class="bx bxs-edit text-warning fs-5"></i></button></td>';
        data += '<td class="pe-1"><button type="button" onclick="app.Delete(' + i + ')" class="crud-btn align-middle"><i class="bx bx-trash text-danger fs-5"></i></button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.tasks.length);
    this.el.innerHTML = data;
    return data;
  };

  this.Add = function () {
    const inputEl = document.getElementById('add-todo');
    if (!inputEl) return;
    const task = inputEl.value.trim();
    if (task.length > 0) {
      this.tasks.push(task);
      this.saveTasks();
      inputEl.value = '';
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    const editInput = document.getElementById('edit-todo');
    const editBox = document.getElementById('edit-box');
    const saveEditForm = document.getElementById('save-edit');
    if (!editInput || !editBox || !saveEditForm || item < 0 || item >= this.tasks.length) return;

    editInput.value = this.tasks[item];
    editBox.style.display = 'block';

    saveEditForm.onsubmit = (e) => {
      if (e) e.preventDefault();
      const updatedTask = editInput.value.trim();
      if (updatedTask.length > 0) {
        this.tasks.splice(item, 1, updatedTask);
        this.saveTasks();
        this.FetchAll();
        CloseInput();
      }
      return false;
    };
  };

  this.Delete = function (item) {
    if (item >= 0 && item < this.tasks.length) {
      this.tasks.splice(item, 1);
      this.saveTasks();
      this.FetchAll();
    }
  };

  this.Count = function (count) {
    const counterEl = document.getElementById('counter');
    if (!counterEl) return;
    const name = count === 1 ? 'Task' : 'Tasks';
    counterEl.textContent = count > 0 ? `${count} ${name}` : 'No Tasks';
  };
})();

app.FetchAll();
function CloseInput() {
  const editBox = document.getElementById('edit-box');
  if (editBox) {
    editBox.style.display = 'none';
  }
}

// Setup
const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  datasets: [
    {
      label: 'My Dataset',
      data: [12, 25, 19, 30, 10],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
      borderWidth: 1,
      tension: 0.2,
    },
  ],
};

// Config block
const config = {
  type: 'line',
  data,
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// init / render block
const myChart = new Chart(document.getElementById('myChart'), config);

// Setup
const piedata = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  datasets: [
    {
      label: 'My Dataset',
      data: [12, 25, 19, 30, 10],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
      borderWidth: 1,
      tension: 0.2,
    },
  ],
};

// Config block
const pieconfig = {
  type: 'pie',
  data: piedata,
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// init / render block
const myChartTwo = new Chart(document.getElementById('myChartTwo'), pieconfig);
