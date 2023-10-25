import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  chart: any = [];
  pieChart: any = [];
  tableHeader: any[] = [];
  teamsData: any[] = [];
  popup: boolean = false;
  popupData: any = {};


  ngOnInit(): void {
    this.securityRatingChart();
    this.circlePieChart();
    this.getTeamData();
  }

  securityRatingChart() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: '',
            data: [10, 15, 17, 14, 17, 18, 12, 14, 15, 18, 15, 20],
            borderWidth: 0,
            backgroundColor: '#6343BF',
            borderRadius: 6,
            barPercentage: 0.7
          },
          {
            label: '',
            data: [30, 30, 35, 34, 37, 38, 32, 34, 35, 38, 35, 30],
            borderWidth: 0,
            backgroundColor: '#9879E6',
            borderRadius: 6,
            barPercentage: 0.7
          },
          {
            label: '',
            data: [40, 47, 45, 44, 47, 48, 42, 44, 45, 48, 45, 40],
            borderWidth: 0,
            backgroundColor: '#EAECF0',
            borderRadius: 6,
            barPercentage: 0.7
          }
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Security Rating',
            position: 'left'

          },
        },
        responsive: true,
        interaction: {
          intersect: false,
        },
        scales: {
          x: {
            stacked: true,
          },
        }
      }
    });
  }

  circlePieChart() {
    this.pieChart = new Chart('pieChart', {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: 'Dataset 1',
            data: [80, 40],
            backgroundColor: ['#6343BF','#EAECF0'],
          }
        ]
      },
      options: {
        rotation: -90,
        circumference: 180,
        responsive: true,
        cutout: 70,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false
          }
        }
      }
    })
  }

  getTeamData() {
    this.dashboardService.getTeamData().subscribe((res: any) => {
      this.tableHeader = res.grid_columns;
      this.teamsData = res.grid_data;
    })
  }

  selectAll(event: any) {
    this.teamsData.forEach(t => t.isSelect = event.target.checked);
  }

  openPopUp(team: any, modal: string) {
    this.popupData = { ...team };
    if (modal == 'delete') this.popupData.modal = modal;
    this.popup = true;
  }

  removeItem(team: any) {
    this.teamsData = this.teamsData.filter(t => t.name != team.name);
    // we can also use splice method for remove that item
    this.closePopup();
  }

  closePopup() {
    this.popup = false;
    this.popupData = {};
  }

}