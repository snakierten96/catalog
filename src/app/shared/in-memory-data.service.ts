import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {
      category: [
        { pos: 1, title: 'One' },
        { pos: 2, title: 'Two' },
        { pos: 3, title: 'Three' },
        { pos: 4, title: 'Four' },
        { pos: 5, title: 'Five' },
        { pos: 6, title: 'Six' },
        { pos: 7, title: 'Seven' },
        { pos: 8, title: 'Eight' },
        { pos: 9, title: 'Nine' },
        { pos: 10, title: 'Ten' },
        { pos: 11, title: 'Eleven' },
        { pos: 12, title: 'Twelve' }
      ]
    };
  }
}