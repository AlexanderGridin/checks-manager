import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Product {
  productName: string;
  productPrice: number;
}

export interface Check {
  id: string;
  checkDate: string;
  store: string;
  products: Product[];
}

export interface ProductDto {
  name: string;
  price: number;
}

export interface CheckDto {
  _id: string;
  checkDate: string;
  store: string;
  products: ProductDto[];
}

export interface ChecksSearchPayload {
  start: string | null;
  end: string | null;
}

const mapCheckDtoToCheck = (dto: CheckDto): Check => ({
  id: dto._id,
  checkDate: dto.checkDate,
  store: dto.store,
  products: dto.products.map(
    (productDto: ProductDto): Product => ({
      productName: productDto.name,
      productPrice: productDto.price,
    })
  ),
});

@Injectable({
  providedIn: 'root',
})
export class CheckService {
  constructor(private readonly http: HttpClient) {}

  public addCheck(body: Omit<CheckDto, '_id'>): Observable<CheckDto> {
    const apiUrl = 'http://localhost:1234/check';
    return this.http.post<CheckDto>(apiUrl, body);
  }

  public deleteCheck(id: string): Observable<Check[]> {
    const apiUrl = `http://localhost:1234/check/${id}`;
    return this.http
      .delete<CheckDto[]>(apiUrl)
      .pipe(map((res: CheckDto[]) => res.map(mapCheckDtoToCheck)));
  }

  public getChecks(): Observable<Check[]> {
    const apiUrl = 'http://localhost:1234/checks';
    return this.http
      .get<CheckDto[]>(apiUrl)
      .pipe(map((res: CheckDto[]) => res.map(mapCheckDtoToCheck)));
  }

  public search(payload: ChecksSearchPayload): Observable<Check[]> {
    const apiUrl = 'http://localhost:1234/checks';
    return this.http
      .post<CheckDto[]>(apiUrl, payload)
      .pipe(map((res: CheckDto[]) => res.map(mapCheckDtoToCheck)));
  }

  public getTotalChecks(): Observable<number> {
    const apiUrl = 'http://localhost:1234/checks/total';
    return this.http
      .get<{ total: number }>(apiUrl)
      .pipe(map((res: { total: number }) => res.total));
  }
}
