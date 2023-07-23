import { API_URL } from '@env';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

abstract class ApiService {
  protected readonly baseURL: string = API_URL;
  protected readonly instance: AxiosInstance;
  private basePath: string;

  public constructor(basePath: string = '') {
    this.basePath = basePath;
    this.instance = axios.create({
      baseURL: this.baseURL,
      url: API_URL,
    });

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: any) => Promise.reject(error);

  protected get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get<T, T>(this.basePath.concat(url), config);
  }

  protected post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.instance.post<T, T>(this.basePath.concat(url), data, config);
  }

  protected put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    return this.instance.put<T, T>(this.basePath.concat(url), data, config);
  }

  protected delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.delete<T, T>(this.basePath.concat(url), config);
  }
}

export default ApiService;
