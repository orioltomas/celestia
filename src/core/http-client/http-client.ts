export class HttpClient {
  constructor(private readonly baseUrl: string) {}

  private async request<Result, Body = void>(url: string, method: 'GET' | 'POST', body?: Body): Promise<Result> {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      ...(body !== undefined && { body: JSON.stringify(body) })
    })
    if (!response.ok) {
      throw new Error('Failed to fetch')
    }

    return response.json()
  }

  async get<Result>(url: string) {
    return this.request<Result>(url, 'GET')
  }

  async post<Body, Result = void>(url: string, data: Body) {
    return this.request<Result, Body>(url, 'POST', data)
  }
}