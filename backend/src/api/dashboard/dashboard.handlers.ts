import { Request, Response } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import axiosIns from '../../utils/axios';

export async function getData(req: Request, res: Response): Promise<void> {
  // TODO VALIDATE THE BODY

  // TODO ERROR HANDLING

  const { data } = await axiosIns.get('/api/v1/data');

  const newData = Object.values(data);

  res.json(newData);
}

export async function getTempHum(req: Request, res: Response): Promise<void> {
  // TODO VALIDATE THE BODY

  // TODO ERROR HANDLING

  const { data } = await axiosIns.get('/api/v1/temp');

  res.json(data);
}

export async function getNowTempHum(
  req: Request,
  res: Response
): Promise<void> {
  // TODO VALIDATE THE BODY

  // TODO ERROR HANDLING

  const { data } = await axiosIns.get('/api/v1/nowtemp');

  res.json(data);
}

export async function ledControl(req: Request, res: Response): Promise<void> {
  // TODO VALIDATE THE BODY

  // TODO ERROR HANDLING

  const { value, id } = req.body;
  await axiosIns.post(`/api/v1/${id}`, { [id]: value });
  res.json('success');
}

export async function getCharts(req: Request, res: Response): Promise<void> {
  // TODO VALIDATE THE BODY

  // TODO ERROR HANDLING

  const { data } = await axiosIns.get('/api/v1/charts');

  res.json(data);
}

export default { getData, ledControl, getCharts, getTempHum, getNowTempHum };
