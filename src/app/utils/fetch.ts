interface FetchOptions extends RequestInit {
}

export const apiFetch = async (url: string,
  method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH',
  body? :{},
 options?: FetchOptions): Promise<any> => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      method,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // 에러를 호출한 곳으로 전달
  }
};
