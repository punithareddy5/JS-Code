import express, { Request, Response } from "express";

import { BaseItem } from "./interfaces";
import { sendMsg } from "./utils";

export const itemsRouter = express.Router();

// POST items

itemsRouter.post("/", async (req: Request, res: Response) => {
    try {
      const item: BaseItem = req.body;
  
      const newItem = await sendMsg(item);
  
      res.status(201).json(newItem);
    } catch (e: any) {
      res.status(500).send(e.message);
    }
  });
  