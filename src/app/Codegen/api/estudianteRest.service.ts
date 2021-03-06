/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Estudiante } from '../model/estudiante';
import { ResponseEntity } from '../model/responseEntity';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class EstudianteRestService {

    protected basePath = '//localhost:8090/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * FindByCedula
     * 
     * @param cedula cedula
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByCedulaUsingGET(cedula: string, observe?: 'body', reportProgress?: boolean): Observable<ResponseEntity>;
    public findByCedulaUsingGET(cedula: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseEntity>>;
    public findByCedulaUsingGET(cedula: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseEntity>>;
    public findByCedulaUsingGET(cedula: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (cedula === null || cedula === undefined) {
            throw new Error('Required parameter cedula was null or undefined when calling findByCedulaUsingGET.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResponseEntity>('get',`${this.basePath}/estudiante/listByCedula/${encodeURIComponent(String(cedula))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * listStudents
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listStudentsUsingGET(observe?: 'body', reportProgress?: boolean): Observable<ResponseEntity>;
    public listStudentsUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseEntity>>;
    public listStudentsUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseEntity>>;
    public listStudentsUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ResponseEntity>('get',`${this.basePath}/estudiante/list`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * saveStudent
     * 
     * @param body estudiante
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveStudentUsingPOST(body: Estudiante, observe?: 'body', reportProgress?: boolean): Observable<ResponseEntity>;
    public saveStudentUsingPOST(body: Estudiante, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseEntity>>;
    public saveStudentUsingPOST(body: Estudiante, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseEntity>>;
    public saveStudentUsingPOST(body: Estudiante, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling saveStudentUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<ResponseEntity>('post',`${this.basePath}/estudiante/save`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
