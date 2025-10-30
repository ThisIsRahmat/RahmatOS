export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  isbn10?: string;
  isbn13?: string;
  language?: string;
  pageCount?: number;
  publishedDate?: string;
  publisher?: string;
  cover?: string;
  authors: Author[];
}

export interface Author {
  id: string;
  name: string;
}

export interface ReadingState {
  id: string;
  status: 'WANTS_TO_READ' | 'IS_READING' | 'FINISHED' | 'DROPPED' | 'NONE';
  book: Book;
  createdAt: string;
}

class LiteralAPI {
  private baseURL = 'https://literal.club/graphql/';
  private token: string | null = null;

  constructor(token?: string) {
    // Allow passing token directly or get from environment
    if (token) {
      this.token = token;
    } else if (typeof process !== 'undefined' && process.env.LITERAL_TOKEN) {
      this.token = process.env.LITERAL_TOKEN;
    } else if (typeof import.meta !== 'undefined' && import.meta.env?.LITERAL_TOKEN) {
      this.token = import.meta.env.LITERAL_TOKEN;
    } else {
      this.token = null;
    }
  }

  private async makeRequest(query: string, variables?: any) {
    if (!this.token) {
      console.warn('No Literal.club token found in environment variables');
      return null;
    }

    console.log('Making request to Literal.club API...');

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`,
    };

    try {
      // Add timeout to prevent slow requests
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        console.error('Request timed out after 30 seconds');
        controller.abort();
      }, 30000); // 30 second timeout

      const response = await fetch(this.baseURL, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          query,
          variables,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`HTTP error! status: ${response.status}, body: ${errorText}`);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.errors) {
        console.error('GraphQL errors:', data.errors);
        throw new Error(`GraphQL error: ${data.errors[0].message}`);
      }

      console.log('Successfully fetched data from Literal.club');
      return data.data;
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.error('Request was aborted (timeout)');
      }
      console.error('Request failed:', error);
      throw error;
    }
  }

  async login(email: string, password: string): Promise<string> {
    const query = `
      mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
          profile {
            id
            handle
            name
          }
        }
      }
    `;

    const data = await this.makeRequest(query, { email, password });
    this.token = data.login.token;
    return this.token;
  }

  async getMyReadingStates(): Promise<ReadingState[]> {
    const query = `
      query myReadingStates {
        myReadingStates {
          id
          status
          createdAt
          book {
            id
            title
            subtitle
            description
            isbn10
            isbn13
            language
            pageCount
            publishedDate
            publisher
            cover
            authors {
              id
              name
            }
          }
        }
      }
    `;

    const data = await this.makeRequest(query);
    return data?.myReadingStates || [];
  }

  async getCurrentlyReading(): Promise<ReadingState[]> {
    try {
      const allStates = await this.getMyReadingStates();
      return allStates.filter(state => state.status === 'IS_READING');
    } catch (error) {
      console.error('Error fetching currently reading:', error);
      return [];
    }
  }

  async getWantToRead(): Promise<ReadingState[]> {
    try {
      const allStates = await this.getMyReadingStates();
      return allStates.filter(state => state.status === 'WANTS_TO_READ');
    } catch (error) {
      console.error('Error fetching want to read:', error);
      return [];
    }
  }

  async getFinished(): Promise<ReadingState[]> {
    try {
      const allStates = await this.getMyReadingStates();
      return allStates.filter(state => state.status === 'FINISHED');
    } catch (error) {
      console.error('Error fetching finished books:', error);
      return [];
    }
  }
}

export { LiteralAPI };
export const literalAPI = new LiteralAPI();