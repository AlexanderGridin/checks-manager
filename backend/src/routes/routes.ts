import { Express, Request, Response } from 'express';
import { Check } from '../Check/check.model';

export const routes = (app: Express) => {
  app.get('/', (_req: Request, res: Response) => {
    res.json({ test: true });
  });

  app.route('/check').post(async (req: Request, res: Response) => {
    const check = new Check(req.body);

    try {
      await check.save();
      res.json(check);
    } catch (e) {
      res.send(e);
    }
  });

  app.route('/check/:checkId').delete(async (req: Request, res: Response) => {
    try {
      await Check.deleteOne({ _id: req.params.checkId });
      const checks = await Check.find({});
      res.json(checks);
    } catch (e) {
      res.send(e);
    }
  });

  app.route('/checks').post(async (req: Request, res: Response) => {
    try {
      if (req.body.start && req.body.end) {
        const startTime = new Date(req.body.start).getTime();
        const endTime = new Date(req.body.end).getTime();

        const responseBody: any = [];
        const checks = await Check.find();

        checks.forEach((check) => {
          const checkTime = new Date(check.checkDate as string).getTime();
          if (checkTime >= startTime && checkTime <= endTime) {
            responseBody.push(check);
          }
        });

        res.json(
          responseBody.sort(
            (a: any, b: any) =>
              new Date(a.checkDate).getTime() - new Date(b.checkDate).getTime()
          )
        );

        return;
      }

      if (req.body.start && !req.body.end) {
        const startTime = new Date(req.body.start).getTime();

        const responseBody: any = [];
        const checks = await Check.find();

        checks.forEach((check) => {
          const checkTime = new Date(check.checkDate as string).getTime();
          if (checkTime >= startTime) {
            responseBody.push(check);
          }
        });

        res.json(
          responseBody.sort(
            (a: any, b: any) =>
              new Date(a.checkDate).getTime() - new Date(b.checkDate).getTime()
          )
        );

        return;
      }

      if (req.body.end && !req.body.start) {
        const endTime = new Date(req.body.end).getTime();

        const checks = await Check.find();
        const responseBody: any = [];

        checks.forEach((check) => {
          const checkTime = new Date(check.checkDate as string).getTime();

          if (checkTime <= endTime) {
            responseBody.push(check);
          }
        });

        res.json(
          responseBody.sort(
            (a: any, b: any) =>
              new Date(a.checkDate).getTime() - new Date(b.checkDate).getTime()
          )
        );

        return;
      }

      const checks = await Check.find();
      res.json(
        checks.sort(
          (a: any, b: any) =>
            new Date(a.checkDate).getTime() - new Date(b.checkDate).getTime()
        )
      );
    } catch (e) {
      res.send(e);
    }
  });

  app.route('/checks/total').get(async (_req: Request, res: Response) => {
    try {
      const checks = await Check.find();
      res.json({ total: checks.length });
    } catch (e) {
      res.send(e);
    }
  });
};
