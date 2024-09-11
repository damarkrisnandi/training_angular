import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [SharedModule, TableModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  tableName = "Tabel Monitoring Users";
  users = [
    {
        "KODE_KPPN": "011",
        "KODE_UNIT": "025.04",
        "KD_SATKER": "552886",
        "NM_SATKER": "MADRASAH TSANAWIYAH NEGERI 10 TANAH DATAR",
        "NAMA": "DESWITA",
        "TIPE": "SATKER",
        "PERAN": "ROLE_ADMIN",
        "EMAIL": "desw001@sakti.mail.go.id",
        "STATUS_EMAIL": "Email Tidak Terdaftar di Database Kominfo"
    },
    {
        "KODE_KPPN": "011",
        "KODE_UNIT": "025.04",
        "KD_SATKER": "552886",
        "NM_SATKER": "MADRASAH TSANAWIYAH NEGERI 10 TANAH DATAR",
        "NAMA": "DESWITA",
        "TIPE": "SATKER",
        "PERAN": "ROLE_VALIDATOR",
        "EMAIL": "desw001@sakti.mail.go.id",
        "STATUS_EMAIL": "Email Tidak Terdaftar di Database Kominfo"
    },
    {
        "KODE_KPPN": "011",
        "KODE_UNIT": "025.04",
        "KD_SATKER": "552886",
        "NM_SATKER": "MADRASAH TSANAWIYAH NEGERI 10 TANAH DATAR",
        "NAMA": "DESWITA",
        "TIPE": "SATKER",
        "PERAN": "ROLE_OPERATOR",
        "EMAIL": "desw001@sakti.mail.go.id",
        "STATUS_EMAIL": "Email Tidak Terdaftar di Database Kominfo"
    }
  ]

}
