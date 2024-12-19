import { MessagesRepository } from './messeges.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;
  constructor() {
    //DONT DO THIS ON REAL APPS
    this.messagesRepo = new MessagesRepository();
  }

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  async findAll() {
    return this.messagesRepo.findAll();
  }
  async create(content: string) {
    return this.messagesRepo.create(content);
  }
}
