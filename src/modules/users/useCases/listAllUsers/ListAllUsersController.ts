import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    let users;
    try {
      users = this.listAllUsersUseCase.execute({ user_id } as {
        user_id: string;
      });
    } catch (e) {
      return response.status(400).json({ error: e.message });
    }
    return response.json(users);
  }
}

export { ListAllUsersController };
