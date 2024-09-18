# Summary week 1 (10-12 September 2024)

## Requirement

NodeJS 20+
Angular 18+


Optional:
NodeJS 18
Angular 17

## Cara membuat Aplikasi Angular

```
ng new [nama aplikasi]
```

untuk di latihan ini 
```
ng new mon-app
```

## Membuat Komponen Angular

```
ng g component [nama component]
```

step
1. Buat folder di dalam folder app, namakan features
2. klik kanan, open in integrated terminal
3. ketikkan command di bawah ini
```
ng g component counter
```

## Menambahkan Route dengan component
1. kita sudah punya component Counter, kita harus membuat route untuk menampilkan component Counter
2. buka file app.routes.ts
3. tambahkan route baru seperti ini
```ts
    {
      path: 'counter',
      component: CounterComponent
    }
```

## Menambahkan Navigation
1. buka file shared/navigation-bar/navigation-bar.component.html
2. update dengan menambahkan tombol navigasi seperti di bawah ini
```html
<p-button label="Counter" (onClick)="navigateTo('/counter')"/>
```
3. ``navigateTo`` berisi:
```ts
navigateTo(path: string) {
  this.router.navigate([path]);
}
```

## Membuat Service dan Memanggil service
1. untuk membuat service kita jalankan command di bawah ini
```
ng g service [nama service]
```
2. Agar lebih rapi akan lebih baik jika membuat folder services sebelum membuat service
3. coba membuat service
```

```
